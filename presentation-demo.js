const t=text=>window.siteI18n?.t(text)??text;
const $=s=>document.querySelector(s);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const sources=[...document.querySelectorAll('.source')];
const ns='http://www.w3.org/2000/svg';
const base=[330,305,290,300,340,430,620,790,840,770,680,620,610,650,740,820,780,680,580,470,410,370,350,330];
const y=v=>205-v/900*170;
const optimizedBars=[...document.querySelectorAll('#optimized-bars rect')];
let wires=[];
function make(tag,attrs){const el=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));$('#wires').append(el);return el;}
function layout(){const scene=$('.scene').getBoundingClientRect();if(!scene.width||!scene.height)return;const core=$('.core').getBoundingClientRect(),result=$('.chart-wrap').getBoundingClientRect();$('.connections').setAttribute('viewBox',`0 0 ${scene.width} ${scene.height}`);$('#wires').replaceChildren();wires=[];const cx=core.left-scene.left,cy=core.top-scene.top+core.height/2;
 sources.forEach(el=>{const r=el.getBoundingClientRect(),sx=r.right-scene.left,sy=r.top-scene.top+r.height/2;const mid=sx+(cx-sx)*.5;const d=`M${sx},${sy} C${mid},${sy} ${mid},${cy} ${cx},${cy}`;make('path',{d,class:'wire'});wires.push(make('path',{d,class:'stream'}));});
 let d;if(scene.width<721&&result.top>core.bottom){const sx=cx+core.width/2,sy=core.bottom-scene.top;const ex=result.right-scene.left-30,ey=result.top-scene.top-18;d=`M${sx},${sy} C${sx},${ey-30} ${ex},${ey-30} ${ex},${ey}`;}else{const sx=core.right-scene.left,ex=result.left-scene.left-8;d=`M${sx},${cy} C${sx+35},${cy} ${ex-30},${cy} ${ex},${cy}`;}make('path',{d,class:'wire'});wires.push(make('path',{d,class:'stream'}));wires.forEach(el=>el.dataset.length=el.getTotalLength());}
const ease=v=>v*v*(3-2*v),clamp=v=>Math.max(0,Math.min(1,v));
const enabled={solar:false,wind:false,battery:false,flex:false};
const solar=[0,0,0,0,0,5,15,45,90,140,185,220,230,210,170,120,65,20,0,0,0,0,0,0];
const wind=[60,65,65,60,55,50,50,55,60,65,70,75,80,80,75,70,65,60,55,55,60,65,65,60];
// Illustrative hourly dispatch, not the application's optimization solver.
function calculate(){
 const values=base.map((v,i)=>v-(enabled.solar?solar[i]:0)-(enabled.wind?wind[i]:0));
 if(enabled.flex){const shifts=[[7,1,45],[8,2,65],[9,3,45],[14,11,35],[15,12,70],[16,13,60],[17,22,40]];shifts.forEach(([from,to,amount])=>{values[from]-=amount;values[to]+=amount;});}
 if(enabled.battery){
  // Charge 500 kWh in the first six hours, then spread discharge across peaks.
  const available=500,efficiency=.92;
  for(let i=0;i<6;i++)values[i]+=available/6;
  let low=0,high=Math.max(...values.slice(6));
  for(let i=0;i<40;i++){const cap=(low+high)/2;const need=values.slice(6).reduce((sum,v)=>sum+Math.max(0,v-cap),0);if(need>available*efficiency)low=cap;else high=cap;}
  for(let i=6;i<values.length;i++)values[i]-=Math.min(250,Math.max(0,values[i]-high));
 }
 return values;
}
let displayed=base.slice(),animation=0,logoAngle=0;
function render(values){
 displayed=values;
 const active=Object.values(enabled).some(Boolean),originalPeak=Math.round(Math.max(...base)),peak=Math.round(Math.max(...values));
 $('#peak-value').textContent=active?`${originalPeak} → ${peak} kW`:`${originalPeak} kW`;
 $('.peak-readout').setAttribute('aria-label',active?`${t('Effekttopp før tiltak')}: ${originalPeak} kW. ${t('Etter tiltak')}: ${peak} kW.`:`${t('Effekttopp')}: ${originalPeak} kW`);
 optimizedBars.forEach((bar,i)=>{
  bar.setAttribute('y',y(values[i]));bar.setAttribute('height',Math.max(0,205-y(values[i])));
  bar.querySelector('title').textContent=`${String(i).padStart(2,'0')}:00–${String(i+1).padStart(2,'0')}:00 · ${t('Opprinnelig')}: ${base[i]} kW · ${t('Optimert')}: ${Math.round(values[i])} kW`;
 });
}
function setComparison(){
 const active=Object.values(enabled).some(Boolean);
 $('.result').classList.toggle('has-comparison',active);
 $('#optimized-bars').setAttribute('visibility',active?'visible':'hidden');
 $('.optimized-legend').hidden=!active;
 $('#chart').setAttribute('aria-label',t(active?'Timebasert effektuttak: opprinnelig forbruk og optimert nettimport, med en effektgrense på 550 kW':'Opprinnelig effektuttak gjennom et døgn, med en effektgrense på 550 kW'));
}
function resetMotion(){wires.forEach(el=>el.style.opacity=0);$('.optimizer').classList.remove('working');}
function updateStatus(){const count=Object.values(enabled).filter(Boolean).length;$('#engine-copy').textContent=t(count?'Ressursene er samordnet':'Velg ressurser');const peak=Math.round(Math.max(...displayed));$('#selection-status').textContent=count?`${count} ${t(count===1?'ressurs aktiv':'ressurser aktive')} · ${t('Effekttopp')}: ${peak} kW · ${t(peak<=550?'Under effektgrensen':'Effektgrensen er 550 kW')}`:t('Ingen ressurser er valgt.');}
function transition(index){
 cancelAnimationFrame(animation);resetMotion();const from=displayed.slice(),to=calculate();
 if(reduced){render(to);updateStatus();return;}
 $('.optimizer').classList.add('working');$('#engine-copy').textContent=t('Samordner ressursene');
 const start=performance.now(),startAngle=logoAngle,endAngle=(Math.floor(logoAngle/360)+1)*360;
 function frame(now){const t=(now-start)/1000;
  logoAngle=startAngle+(endAngle-startAngle)*ease(clamp(t/1.8));
  $('.cofactor-symbol').style.transform=`rotate(${logoAngle}deg)`;
  wires.forEach((el,i)=>{const progress=i===index?t/.65:i===6?(t-.55)/.65:-1;el.style.opacity=progress>=0&&progress<=1?.85:0;el.style.strokeDasharray=`22 ${Number(el.dataset.length)+24}`;el.style.strokeDashoffset=-(Number(el.dataset.length)+22)*clamp(progress);});
  const blend=ease(clamp((t-.8)/1));render(from.map((v,i)=>v+(to[i]-v)*blend));
  if(t<1.8)animation=requestAnimationFrame(frame);else{resetMotion();updateStatus();}
 }
 animation=requestAnimationFrame(frame);
}
document.querySelectorAll('.asset').forEach(el=>el.addEventListener('click',()=>{
 const key=el.dataset.asset;enabled[key]=!enabled[key];setComparison();el.setAttribute('aria-pressed',String(enabled[key]));el.classList.toggle('selected',enabled[key]);transition(Number(el.dataset.index));
}));
setComparison();render(base);layout();new ResizeObserver(layout).observe($('.scene'));document.fonts.ready.then(layout);

// Hint once when the animation enters view, rather than above the fold.
if(!reduced){
 const assets=[...document.querySelectorAll('.asset')];
 const hintObserver=new IntersectionObserver(entries=>{if(!entries.some(entry=>entry.isIntersecting))return;
  assets.forEach(el=>{el.classList.add('hint');el.addEventListener('animationend',()=>el.classList.remove('hint'),{once:true});});hintObserver.disconnect();
 },{threshold:.25});
 hintObserver.observe($('.scene'));
 assets.forEach(el=>el.addEventListener('click',()=>{hintObserver.disconnect();assets.forEach(asset=>asset.classList.remove('hint'));},{once:true}));
}


// This is the website's illustrative demo, isolated from navigation and the contact form.
document.addEventListener('languagechange',()=>{setComparison();render(displayed);updateStatus();requestAnimationFrame(layout);});
document.addEventListener('slidechange',()=>requestAnimationFrame(layout));

