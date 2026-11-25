(() => {
 const tr=text=>window.siteI18n?.t(text)??text;
 const slides=[...document.querySelectorAll('.slide')];
 const previous=document.querySelector('#previous-slide');
 const next=document.querySelector('#next-slide');
 const picker=document.querySelector('#slide-picker');
 const counter=document.querySelector('#slide-count');
 const fullscreen=document.querySelector('#fullscreen');
 let current=0;
 function fromHash(){const match=location.hash.match(/^#slide-(\d+)$/);return match?Math.max(0,Math.min(slides.length-1,Number(match[1])-1)):0;}
 function show(index,{focus=true,updateURL=true}={}){
  current=Math.max(0,Math.min(slides.length-1,index));
  slides.forEach((slide,i)=>{slide.hidden=i!==current;});
  previous.disabled=current===0;next.disabled=current===slides.length-1;
  picker.value=String(current);counter.textContent=`${current+1} / ${slides.length}`;
  if(updateURL)history.replaceState(null,'',`#slide-${current+1}`);
  if(focus){slides[current].querySelector('h1,h2').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  document.dispatchEvent(new CustomEvent('slidechange'));
 }
 previous.addEventListener('click',()=>show(current-1));
 next.addEventListener('click',()=>show(current+1));
 picker.addEventListener('change',()=>show(Number(picker.value)));
 window.addEventListener('hashchange',()=>show(fromHash(),{updateURL:false}));
 document.addEventListener('keydown',event=>{
  if(event.altKey||event.ctrlKey||event.metaKey||event.target.closest('button,a,input,textarea,select,summary,[contenteditable]'))return;
  if(['ArrowRight','PageDown'].includes(event.key)){event.preventDefault();show(current+1);}
  if(['ArrowLeft','PageUp'].includes(event.key)){event.preventDefault();show(current-1);}
  if(event.key==='Home'){event.preventDefault();show(0);}
  if(event.key==='End'){event.preventDefault();show(slides.length-1);}
 });
 function fullscreenLabel(){fullscreen.textContent=tr(document.fullscreenElement?'Avslutt fullskjerm':'Fullskjerm');}
 fullscreen.hidden=!document.fullscreenEnabled;
 fullscreen.addEventListener('click',async()=>{
  try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
  catch{document.querySelector('#deck-feedback').textContent=tr('Fullskjerm er ikke tilgjengelig i denne nettleseren.');}
 });
 document.addEventListener('fullscreenchange',fullscreenLabel);
 document.addEventListener('languagechange',fullscreenLabel);
 show(fromHash(),{focus:false});
})();
