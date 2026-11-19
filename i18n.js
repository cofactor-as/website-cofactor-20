// Norwegian is the default. Keep the original text nodes so switching languages
// preserves icons, form values, links, and the current animation state.
(() => {
 const english = {
  'FRIVILLIGHET · ENERGIOMSTILLING':'VOLUNTEERING · ENERGY TRANSITION',
  'Ingeniører uten grenser':'Engineers Without Borders',
  'Alexander bidro som frivillig i Ingeniører uten grenser, sammen med tre kollegaer, til WWFs «East Africa Energy Transition Programme». Utviklet en nettløsning med solkalkulator og oversikt over strømtilgang, ren matlaging, kraftproduksjon, fornybarandel, energiaktører og strømkostnader i Uganda, Kenya, Tanzania og Madagaskar.':'As a volunteer with Engineers Without Borders, Alexander worked with three colleagues on WWF’s East Africa Energy Transition Programme. Developed a web platform with a solar calculator and information on electricity access, clean cooking, power generation, renewable energy shares, energy-sector stakeholders and electricity costs in Uganda, Kenya, Tanzania and Madagascar.',

  'I media':'In the media','Les saken i Europower':'Read the Europower article',
  'VÆRDATA · NETTBEREDSKAP':'WEATHER DATA · GRID PREPAREDNESS',
  'Klimamonitor – ett verktøy, hele værbildet':'Klimamonitor — One Tool, the Complete Weather Picture',
  'Utviklet et verktøy som kobler værprognoser og historiske værdata direkte til linjenettet. Gir grunnlag for å planlegge beredskap før hendelser, analysere årsaker i etterkant og arbeide målrettet med å redusere KILE-kostnader.':'Developed a tool that links weather forecasts and historical weather data directly to the power line network. Supports preparedness planning before incidents, analysis of causes afterwards, and targeted efforts to reduce outage-related costs under Norway’s KILE scheme.',

  'OMRÅDEUTVIKLING · EFFEKTREDUKSJON':'AREA DEVELOPMENT · PEAK DEMAND REDUCTION',
  'Effektreduserende tiltak på Ranheim':'Peak Demand Reduction at Ranheim',
  'Utredet effektreduserende tiltak og energiløsninger for et område planlagt med 7 000 m² næringsareal og 600 boliger. Vurdert solceller, varme, elbillading, batterier og energiforvaltning. Utført i samarbeid med Asplan Viak i Trondheim.':'Assessed peak demand reduction measures and energy solutions for a development planned to include 7,000 m² of commercial space and 600 homes. Evaluated solar PV, heating, EV charging, batteries and energy management. Delivered in collaboration with Asplan Viak in Trondheim.',

  'OMRÅDEUTVIKLING · KLIMA OG ENERGI':'AREA DEVELOPMENT · CLIMATE AND ENERGY',
  'Klima- og energikonsept for Edvardsløkka':'Climate and Energy Concept for Edvardsløkka',
  'Utredet et helhetlig klima- og energikonsept for 7 000 m² næringsareal og 130 boliger. Vurdert solceller, varme, elbillading, batterier, utslippsreduserende tiltak og energiforvaltning for området. Utført i samarbeid med Sweco og Glitre Energiløsninger.':'Developed an integrated climate and energy concept for 7,000 m² of commercial space and 130 homes. Assessed solar PV, heating, EV charging, batteries, emissions reduction measures and area-wide energy management. Delivered in collaboration with Sweco and Glitre Energiløsninger.',

  'TUNGTRANSPORT · LADING':'HEAVY TRANSPORT · CHARGING',
  'Ladeanlegg for tungbil':'Charging Infrastructure for Heavy-Duty Vehicles',
  '2024–2026 · Pågående':'2024–2026 · Ongoing',
  'Kartlagt elektrifisering av nærdistribusjon fra Coops lagre i Bergen, Trondheim, Gardermoen og Tromsø. Beregnet ladebehov, dimensjonert anlegg og fulgt opp nettilknytning, anbud og leverandørvalg. Videre bistand omfatter bygging, idriftsettelse og oppfølging av drift.':'Assessed electrification of local distribution from Coop’s warehouses in Bergen, Trondheim, Gardermoen and Tromsø. Calculated charging needs, sized charging facilities and supported grid connections, tendering and supplier selection. Further support covers construction, commissioning and operational follow-up.',

  'INDUSTRI · NETTKAPASITET':'INDUSTRY · GRID CAPACITY',
  'Grønt Industriløft Verdal industripark':'Green Industrial Transition at Verdal Industrial Park',
  'Verdal kommune og Verdal Industripark':'Verdal Municipality and Verdal Industrial Park',
  '2026–2028 · Pågående':'2026–2028 · Ongoing',
  'Kartlegging av nettsituasjonen, energibruk og fleksibilitet for å frigjøre kapasitet til nytt forbruk i industriparken. Vurdering av sol, vind, batterier, nærvarme og lokal deling av energi og fleksibilitet, i samarbeid med bedriftene i området.':'Mapping grid conditions, energy use and flexibility to free up capacity for new demand in the industrial park. Assessing solar, wind, batteries, local heating networks and local sharing of energy and flexibility, in collaboration with businesses in the area.',

  'DAGLIGVARE · FLEKSIBILITET':'GROCERY RETAIL · FLEXIBILITY',
  '2022–2026 · Avsluttet':'2022–2026 · Completed',
  'Konseptutvikling, bygging og drift av Norges første energifleksible dagligvarebutikk. Utnyttelse av fleksibilitet i tekniske anlegg, lading, batterier og solceller, med elektrisk og termisk energilagring. Deltakelse i Statnetts reservemarkeder og levering av fleksibilitet til Lede.':'Concept development, construction and operation of Norway’s first energy-flexible grocery store. Harnessing flexibility across building systems, charging, batteries and solar PV, with electrical and thermal energy storage. Participation in Statnett’s reserve markets and delivery of flexibility to local grid operator Lede.',

  'ENERGISAMFUNN · LANDSTRØM':'ENERGY COMMUNITY · SHORE POWER',
  'Energisamfunn Brattøra':'Brattøra Energy Community',
  'Kunde':'Client','Periode':'Period',
  'Trondheim kommune og Trondheim Havn IKS':'Trondheim Municipality and Trondheim Port IKS',
  '2025–2026 · Planlagt avslutning mars 2026':'2025–2026 · Scheduled completion March 2026',
  'Kartlegging av energibruk, effekttopper og fleksibilitet for å frigjøre kapasitet til landstrøm for cruiseskip på inntil 12 MW. Vurdering av sol, vind, batterier og lokal deling av energi og fleksibilitet, inkludert sektorkobling og energisamarbeid.':'Mapping energy use, peak demand and flexibility to free up capacity for up to 12 MW of cruise ship shore power. Assessing solar, wind, batteries and local sharing of energy and flexibility, including sector coupling and local energy cooperation.',

  'EKSEMPELPROSJEKT':'EXAMPLE PROJECT','Prosjekt 01':'Project 01','Prosjekt 02':'Project 02','Prosjekt 03':'Project 03','Prosjekt 04':'Project 04',
  'Forrige prosjekter':'Previous projects','Neste prosjekter':'Next projects','Bla gjennom prosjekter':'Browse projects',
  'Energi i samspill — animasjonskonsept':'Cofactor — Free up grid capacity',
  'Hovedmeny':'Main navigation','Cofactor – forsiden':'Cofactor – home',
  'Åpne meny':'Open menu','Lukk meny':'Close menu','Kontakt og sosiale medier':'Contact and social media',
  'Cofactor på GitHub':'Cofactor on GitHub','Cofactor på LinkedIn':'Cofactor on LinkedIn','Send e-post til Cofactor':'Email Cofactor',
  'Frigi kapasitet':'Free up capacity','Om oss':'About us','Prosjekter':'Projects','Logg inn':'Log in',
  'Frigjør kapasitet.':'Free up grid capacity.','Gi plass til nytt forbruk':'Make room for new demand',
  'Vi leverer rådgivning og digitale verktøy for smartere utnyttelse av strømnettet.':'We provide advice and digital tools to make better use of the electricity grid.',
  'Med Dynagrid samler vi automatisk forbruksdata fra Elhub og Statkraft Varme. Vi analyserer hvordan nytt forbruk, lokal energiproduksjon, batterier og fleksibilitet påvirker effekttoppene – og hjelper dere å vurdere tiltak tidlig.':'Dynagrid automatically collects consumption data from Elhub and Statkraft Varme. We analyse how new demand, local generation, batteries and flexibility affect peak loads — helping you assess options early.',
  'Utforsk Dynagrid':'Explore Dynagrid','Ta kontakt for en demonstrasjon':'Get in touch for a demo',
  'Solkraft':'Solar power','Vindkraft':'Wind power','Batteri':'Battery','Nytt forbruk':'New demand','Fleksibel lading':'Flexible charging','Energibehov':'Energy demand','SAMSPILL':'COORDINATION',
  '01 / FRIGI KAPASITET':'01 / FREE UP CAPACITY','Energi i samspill.':'Energy working together.',
  'Datakilder':'Data sources','DINE DATA OG RESSURSER':'YOUR DATA AND ASSETS',
  'Strømforbruk':'Electricity demand','Fjernvarme':'District heating','Batterier':'Batteries','Fleksibilitet':'Flexibility',
  'Optimalisering':'Optimization','Velg ressurser':'Select assets','Ressursene er samordnet':'Assets coordinated','Samordner ressursene':'Coordinating assets',
  'Illustrasjon av redusert effektuttak':'Illustration of reduced peak demand','Effektgrense':'Import limit','Opprinnelig':'Original','Optimalisert':'Optimized',
  'Timebasert effektuttak: opprinnelig forbruk og optimalisert nettimport, med en effektgrense på 550 kW':'Hourly demand: original consumption and optimized grid import, with a 550 kW import limit',
  'Opprinnelig effektuttak gjennom et døgn, med en effektgrense på 550 kW':'Original hourly demand over a day, with a 550 kW import limit',
  'Timebasert effektuttak gjennom et døgn: opprinnelige søyler bak optimaliserte søyler, med en effektgrense på 550 kW':'Hourly demand over a day: original bars behind optimized bars, with a 550 kW import limit',
  'Ingen ressurser er valgt.':'No assets selected.','ressurs aktiv':'asset active','ressurser aktive':'assets active','Effekttopp':'Peak demand','Under effektgrensen':'Within the import limit','Effektgrensen er 550 kW':'The import limit is 550 kW',
  '02 / OM OSS':'02 / ABOUT US','Folkene bak Cofactor.':'The people behind Cofactor.',
  'Vi kombinerer energifag, forskning og teknologi for å utnytte energien og kapasiteten i nettet bedre.':'We combine energy expertise, research and technology to make better use of energy and grid capacity.',
  'Daglig leder / Seniorrådgiver':'Managing Director / Senior Advisor',
  'Fra idé til gjennomføring av energieffektive bygg, ladeanlegg og fleksible energiløsninger.':'Taking energy-efficient buildings, charging infrastructure and flexible energy solutions from concept to delivery.',
  'Spesialrådgiver / FoU-ansvarlig':'Specialist Advisor / Head of R&D',
  'Kobler energibruk i bygg med kraftsystemet. Ekspert på lastprofiler og fleksibilitet, med doktorgrad fra NTNU.':'Connecting building energy use with the power system. An expert in load profiles and flexibility, with a PhD from NTNU.',
  'Senior dataforsker / Teknisk leder':'Senior Data Scientist / Technical Lead',
  'Utvikler datadrevne energiverktøy. Doktorgrad i maskinlæring og energibruk i bygg.':'Developing data-driven energy tools. Holds a PhD in machine learning and building energy use.',
  'Masterstudent / Energioptimalisering':'Master’s Student / Energy Optimization',
  'Utvikler modeller som samordner strøm, varme og lokal produksjon for å frigjøre nettkapasitet.':'Developing models that coordinate electricity, heat and local generation to free up grid capacity.',
  '03 / PROSJEKTER':'03 / PROJECTS','04 / KONTAKT':'04 / CONTACT','Se hva Dynagrid kan gjøre.':'See what Dynagrid can do.',
  'Fortell oss litt om behovet deres, så kan vi tilpasse en demonstrasjon.':'Tell us a little about your needs so we can tailor a demonstration.',
  'Navn':'Name','E-post':'Email','Virksomhet':'Company','Hva ønsker dere å utforske?':'What would you like to explore?','Valgfritt':'Optional',
  'For eksempel nettkapasitet, nytt forbruk eller fleksibilitet …':'For example, grid capacity, new demand or flexibility …',
  'Dette er en forhåndsvisning. Skjemaet sender eller lagrer ingen opplysninger.':'This is a preview. The form does not send or store any information.',
  'Prøv skjemaet':'Try the form',
  'Skjemaet er fylt ut. Dette er kun en forhåndsvisning – ingen opplysninger er sendt.':'The form is complete. This is only a preview — no information has been sent.',
  'Velg språk':'Choose language'
 };
 for(const name of ['Petter Arnestad','Karen B. Lindberg','Alexander Severinsen','Bryan Tancré']){
  english[`Send e-post til ${name}`]=`Email ${name}`;
  english[`Ring ${name}`]=`Call ${name}`;
  english[`${name} på LinkedIn`]=`${name} on LinkedIn`;
 }
 let language='nb';
 const t=text=>language==='en'?(english[text]??text):text;
 const bindings=[];
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode,original=node.nodeValue;
  if(Object.hasOwn(english,original.trim()))bindings.push({node,original});
 }
 const attributes=[];
 document.querySelectorAll('[aria-label],[title],[placeholder]').forEach(el=>{
  for(const attr of ['aria-label','title','placeholder']){
   const original=el.getAttribute(attr);if(original&&Object.hasOwn(english,original))attributes.push({el,attr,original});
  }
 });
 const originalTitle=document.title;
 const picker=document.querySelector('.language-picker');
 const trigger=document.querySelector('#language-trigger');
 const panel=document.querySelector('#language-options');
 function close(){panel.hidden=true;trigger.setAttribute('aria-expanded','false');}
 function setLanguage(next){
  language=next==='en'?'en':'nb';document.documentElement.lang=language;
  document.title=t(originalTitle);
  bindings.forEach(({node,original})=>{node.nodeValue=original.replace(original.trim(),t(original.trim()));});
  attributes.forEach(({el,attr,original})=>el.setAttribute(attr,t(original)));
  document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
  document.dispatchEvent(new CustomEvent('languagechange'));
 }
 trigger.addEventListener('click',()=>{const open=panel.hidden;panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{setLanguage(button.dataset.language);close();trigger.focus();}));
 document.addEventListener('click',event=>{if(!picker.contains(event.target))close();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden){close();trigger.focus();}});
 picker.addEventListener('focusout',event=>{if(!picker.contains(event.relatedTarget))close();});
 window.siteI18n={t,setLanguage,get language(){return language;}};
})();
