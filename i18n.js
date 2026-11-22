// Norwegian is the default. Keep the original text nodes so switching languages
// preserves icons, form values, links, and the current animation state.
(() => {
 const english = {
  "Cofactor AS er ansvarlig for opplysningene du sender oss. Spørsmål om personvern kan sendes til:":"Cofactor AS is responsible for the information you send us. Privacy questions can be sent to:",
  "Når du kontakter oss":"When you contact us",
  "Vi bruker navn, e-postadresse og eventuell virksomhet og melding til å besvare og følge opp henvendelsen din. Navn og e-post er påkrevd i skjemaet; resten er valgfritt. Ikke send sensitive personopplysninger.":"We use your name, email address and any company details and message to respond to and follow up your enquiry. Name and email are required in the form; the other fields are optional. Please do not send sensitive personal information.",
  "Behandlingen bygger på vår berettigede interesse i å besvare henvendelser og følge opp mulige oppdrag (GDPR artikkel 6 nr. 1 bokstav f). Du kan be om informasjon om interesseavveiningen og protestere. Hvis du selv ber om tiltak før en avtale du personlig skal inngå, gjelder artikkel 6 nr. 1 bokstav b.":"Processing is based on our legitimate interest in answering enquiries and following up potential assignments (GDPR Article 6(1)(f)). You can request information about the balancing assessment and object. Article 6(1)(b) applies if you request steps before entering a contract personally.",
  "Henvendelsen melder deg ikke på markedsføring. Vi bruker ikke opplysningene til profilering eller automatiserte avgjørelser.":"Your enquiry does not subscribe you to marketing. We do not use the information for profiling or automated decisions.",
  "Vi beholder opplysningene mens vi behandler henvendelsen og følger opp dialogen. Når det ikke lenger er behov for oppfølging, slettes de, med mindre de er nødvendige for et kundeoppdrag, lovpålagt dokumentasjon eller et konkret rettskrav. Dette gjelder både e-post og skjemakopier.":"We keep the information while handling your enquiry and following up the dialogue. When follow-up is no longer needed, it is deleted unless required for a customer assignment, statutory documentation or a specific legal claim. This applies to both email and form copies.",
  "Hvem mottar opplysningene?":"Who receives the information?",
  "Skjemaet behandles av Formspree og sendes til Cofactors e-postmottak. Formspree, e-postleverandøren og medarbeidere som følger opp henvendelsen, behandler opplysningene. Formspree opplyser at data kan behandles i USA, og at de bruker EUs standard personvernbestemmelser (SCC). Kontakt oss for informasjon om overføringsgarantier eller en kopi av disse.":"The form is processed by Formspree and delivered to Cofactor’s email inbox. Formspree, the email provider and staff handling your enquiry process the information. Formspree states that data may be processed in the USA and that it uses EU Standard Contractual Clauses (SCCs). Contact us for information about transfer safeguards or a copy of them.",
  "Besøk på nettsiden":"Visiting the website",
  "Nettsiden bruker GitHub Pages til hosting og Google Fonts til skrifttyper. Disse tjenestene mottar tekniske opplysninger, som IP-adresse, når nettleseren henter innhold. Vi har ikke lagt inn analyseverktøy, annonsepiksler eller egne informasjonskapsler. LinkedIn åpnes først når du følger lenken.":"The website uses GitHub Pages for hosting and Google Fonts for typefaces. These services receive technical information, such as your IP address, when your browser fetches content. We have not added analytics tools, advertising pixels or our own cookies. LinkedIn opens only when you follow the link.",
  "Du kan be om innsyn, retting og sletting, og der vilkårene er oppfylt, begrensning, protest og dataportabilitet. Kontakt post@cofactor.no. Vi svarer normalt innen én måned og varsler deg hvis fristen må forlenges. Du kan klage til Datatilsynet.":"You can request access, correction and deletion and, where applicable, restriction, objection and data portability. Contact post@cofactor.no. We normally respond within one month and notify you if the deadline needs to be extended. You can complain to the Norwegian Data Protection Authority.",

  "Sist oppdatert: 22. november 2026":"Last updated: 22 November 2026",
  "Hvorfor vi behandler opplysningene":"Why we process your information",
  "Vi behandler vanlige kontakt- og forretningshenvendelser på grunnlag av vår berettigede interesse i å besvare spørsmål og følge opp mulige oppdrag, jf. personvernforordningen artikkel 6 nr. 1 bokstav f. Vi begrenser behandlingen til opplysninger som er nødvendige for denne dialogen. Du kan be om informasjon om interesseavveiningen og protestere mot behandlingen.":"We process ordinary contact and business enquiries on the basis of our legitimate interest in answering questions and following up potential assignments, under GDPR Article 6(1)(f). We limit processing to information needed for this dialogue. You may request information about the balancing assessment and object to the processing.",
  "Dersom du selv er part i en mulig avtale og ber oss om et tilbud eller andre tiltak før avtaleinngåelse, er grunnlaget artikkel 6 nr. 1 bokstav b. Dette grunnlaget gjelder ikke automatisk når du kontakter oss på vegne av en virksomhet.":"If you personally are a party to a potential contract and request a quotation or other pre-contractual steps, the basis is Article 6(1)(b). This basis does not automatically apply when you contact us on behalf of a company.",
  "Det er frivillig å kontakte oss. Navn og e-postadresse er nødvendige for å sende skjemaet og få svar. Henvendelsen melder deg ikke på nyhetsbrev eller annen markedsføring. Vi bruker ikke kontaktskjemaet til profilering eller automatiserte avgjørelser.":"Contacting us is voluntary. Your name and email address are required to submit the form and receive a reply. Your enquiry does not subscribe you to newsletters or other marketing. We do not use the contact form for profiling or automated decisions.",
  "Lagring og sletting":"Retention and deletion",
  "Dersom konkrete opplysninger må beholdes for å fastsette, gjøre gjeldende eller forsvare et rettskrav, begrenses videre lagring til det som er nødvendig for dette formålet. Tekniske logger og sikkerhetskopier hos leverandørene følger deres egne lagringsrutiner.":"If specific information must be retained to establish, exercise or defend a legal claim, further retention is limited to what is necessary for that purpose. Providers’ technical logs and backups follow their own retention arrangements.",
  "Mottakere og behandling utenfor EØS":"Recipients and processing outside the EEA",
  "Henvendelsen mottas av medarbeidere som trenger opplysningene for å følge den opp. Formspree og leverandøren av e-posttjenesten behandler opplysningene som del av levering og lagring. Tilgangen skal begrenses til autoriserte personer.":"Your enquiry is received by staff who need the information to follow it up. Formspree and the email service provider process the information as part of delivery and storage. Access must be restricted to authorised people.",
  "Formspree opplyser at de benytter EUs standard personvernbestemmelser (SCC) som databehandler. Disse bestemmelsene regulerer beskyttelsen av personopplysninger ved overføringer utenfor EØS. Kontakt oss på post@cofactor.no for informasjon om mottakere og aktuelle overføringsgarantier, eller for å be om en kopi av garantiene.":"Formspree states that it uses the EU Standard Contractual Clauses (SCCs) as a data processor. These clauses govern the protection of personal information transferred outside the EEA. Contact post@cofactor.no for information about recipients and applicable transfer safeguards, or to request a copy of the safeguards.",
  "Formsprees informasjon om sikkerhet og overføringer":"Formspree information about security and transfers",
  "Send spørsmål eller forespørsler om rettighetene dine til post@cofactor.no. Vi svarer uten ugrunnet opphold og normalt senest innen én måned. Hvis en komplisert forespørsel krever lengre tid, informerer vi deg innen denne fristen om hvorfor og når du kan forvente svar.":"Send questions or requests concerning your rights to post@cofactor.no. We respond without undue delay and normally within one month. If a complex request needs more time, we will inform you within that period of the reason and when to expect a response.",

  "Velg tiltak og se hvordan effekttoppen endres.":"Select measures to see how peak demand changes.",
  "Effekttopp før tiltak":"Peak demand before measures",
  "Etter tiltak":"After measures",

  "Cofactor leverer rådgivning og digitale verktøy for smartere utnyttelse av strømnettet. Vi analyserer energibruk, fleksibilitet og nettkapasitet.":"Cofactor provides consulting and digital tools for smarter use of the electricity grid. We analyse energy use, flexibility and grid capacity.",
  "Les mer":"Read more",
  "Dynagrid er vårt verktøy for områdeanalyser.":"Dynagrid is our tool for area-wide energy analysis.",
  "Be om demonstrasjon":"Request a demonstration",
  "Les mer om Dynagrid":"Read more about Dynagrid",
  "Be om demonstrasjon – Dynagrid":"Request a demonstration – Dynagrid",
  "Automatisert innhenting av forbruksdata for elektrisk og termisk energi":"Automated collection of consumption data for electrical and thermal energy",
  "Analyser av nytt forbruk og nye tiltak.":"Analysis of new demand and new measures.",
  "Optimering av tiltak for lastreduksjon.":"Optimisation of measures for demand reduction.",
  "Vår egen løsning for å estimere produksjonen til solcelleanlegg.":"Our own solution for estimating solar PV generation.",
  "Be om tilgang":"Request access",
  "Les mer om Cofactor PV":"Read more about Cofactor PV",
  "Be om tilgang – Cofactor PV":"Request access – Cofactor PV",
  "Vurder hvordan ulike solinnstrålingsdata påvirker estimatene.":"Assess how different solar irradiation datasets affect estimates.",
  "Vurder snøtap i ulike områder.":"Assess snow losses in different areas.",
  "Last ned solinnstrålingsdata for integrasjon mot PVSyst.":"Download solar irradiation data for integration with PVSyst.",
  "Vår egen løsning for å analysere og visualisere energibruken på timenivå.":"Our own solution for analysing and visualising hourly energy use.",
  "Les mer om Gridload":"Read more about Gridload",
  "Ta kontakt – Gridload":"Contact us – Gridload",
  "Ta kontakt":"Contact us",
  "Analyser energilaster i netteiers område, kommunen og grunnkretsen.":"Analyse energy demand across grid operator areas, municipalities and local statistical areas.",
  "Temperaturdata for alle lokasjoner i Norge.":"Temperature data for all locations in Norway.",
  "Kontinuerlig innhenting av data fra Elhub.":"Continuous data collection from Elhub.",

  "Personvern":"Privacy",
  "Personvern | Cofactor":"Privacy | Cofactor",
  "Lenker i bunntekst":"Footer links",
  "Tilbake til forsiden":"Back to home",
  "Personvern på nettsiden":"Privacy on this website",
  "Denne siden beskriver hvordan opplysninger håndteres når du besøker nettsiden eller kontakter Cofactor.":"This page describes how information is handled when you visit the website or contact Cofactor.",
  "Kontakt og ansvar":"Contact and responsibility",
  "Cofactor AS er ansvarlig for behandlingen av opplysninger du gir oss gjennom kontaktskjemaet. Du kan kontakte oss om personvern på e-post:":"Cofactor AS is responsible for processing information you provide through the contact form. You can contact us about privacy by email:",
  "Opplysninger i kontaktskjemaet":"Information in the contact form",
  "Skjemaet ber om navn og e-postadresse. Virksomhet og melding er valgfrie. Opplysningene brukes til å besvare og følge opp henvendelsen din. Unngå å sende sensitive personopplysninger i skjemaet.":"The form asks for your name and email address. Company and message are optional. The information is used to respond to and follow up on your enquiry. Please avoid sending sensitive personal information through the form.",
  "Tjenester nettsiden bruker":"Services used by the website",
  "Kontaktskjemaet sender opplysningene til Formspree, som behandler innsendingen og videresender den til Cofactors e-postmottak. Formspree opplyser at data kan behandles i USA og andre land der tjenesten opererer.":"The contact form sends your information to Formspree, which processes the submission and forwards it to Cofactor’s email inbox. Formspree states that data may be processed in the United States and other countries where it operates.",
  "Formsprees personvernerklæring":"Formspree privacy policy",
  "Nettsiden publiseres på GitHub Pages. GitHub kan behandle tekniske opplysninger om besøk, blant annet IP-adresse og forespørsler til serveren.":"The website is hosted on GitHub Pages. GitHub may process technical information about visits, including IP addresses and server requests.",
  "GitHubs personvernerklæring":"GitHub privacy statement",
  "Skrifttypen lastes fra Google Fonts. Nettleseren kobler derfor til Google for å hente skriftfilene.":"The typeface is loaded from Google Fonts. Your browser therefore connects to Google to retrieve the font files.",
  "Googles personvernerklæring":"Google privacy policy",
  "Informasjonskapsler og eksterne lenker":"Cookies and external links",
  "Vi har ikke lagt inn analyseverktøy, annonsepiksler eller egne informasjonskapsler i nettsiden. LinkedIn-lenkene er vanlige lenker, ikke innebygde sporingsmoduler. Når du følger en ekstern lenke, gjelder personverninformasjonen på nettstedet du besøker.":"We have not added analytics tools, advertising pixels or our own cookies to the website. The LinkedIn links are ordinary links, not embedded tracking modules. When you follow an external link, the privacy information of the website you visit applies.",
  "Dine rettigheter":"Your rights",
  "Du kan kontakte oss for å be om innsyn, retting eller sletting av personopplysninger. Avhengig av behandlingen kan du også ha rett til begrensning, protest og dataportabilitet. Du kan klage til Datatilsynet.":"You can contact us to request access to, correction of or deletion of personal information. Depending on the processing, you may also have rights to restriction, objection and data portability. You can lodge a complaint with the Norwegian Data Protection Authority.",
  "Les om rettighetene dine hos Datatilsynet":"Read about your rights at the Norwegian Data Protection Authority",

  "Send henvendelse":"Send enquiry",
  "Sender …":"Sending …",
  "Sender henvendelsen …":"Sending your enquiry …",
  "Takk! Henvendelsen er sendt. Vi tar kontakt så snart vi kan.":"Thank you! Your enquiry has been sent. We will get back to you as soon as we can.",
  "Henvendelsen kunne ikke sendes. Prøv igjen, eller kontakt oss på e-post.":"Your enquiry could not be sent. Please try again or contact us by email.",
  "Kontroller opplysningene, særlig e-postadressen, og prøv igjen.":"Please check your details, especially your email address, and try again.",
  "Skjemaet kan ikke ta imot flere henvendelser akkurat nå. Prøv senere, eller kontakt oss på e-post.":"The form cannot accept more enquiries right now. Please try later or contact us by email.",
  "Vi kunne ikke bekrefte at henvendelsen ble sendt. Prøv igjen, eller kontakt oss på e-post.":"We could not confirm whether your enquiry was sent. Please try again or contact us by email.",

  "Formål":"Purpose",
  "Områdeanalyser":"Area-wide analysis",
  "Estimering av PV produksjon":"PV generation estimates",
  "Nasjonale og regionale analyser":"National and regional analysis",

  "Tilgang":"Access",
  "Ta kontakt for pris":"Contact us for pricing",
  "Fritt tilgjengelig basisversjon":"Basic version available free of charge",
  "Internt arbeidsverktøy. Tilgang på forespørsel.":"Internal tool. Access available on request.",

  "Dynagrid er vårt verktøy for områdeanalyser. Verktøyet brukes i kundeprosjekter hvor vi har behov for timebaserte analyser av energibruken fra elektrisitet og fjernvarme fra unike målepunkt. Innhenting av data er automatisert ved hjelp av våre integrasjoner mot Elhub og Statkraft Varme. Når innhenting av data er gjennomført har vi utviklet funksjonalitet for å analysere hvordan eksisterende energibruk endres når man legger til nytt forbruk og nye tiltak. En viktig del av verktøyet er optimeringsalgoritmer for å analysere hvilken kombinasjon av tiltak som gir mest potensiale for lastreduksjon.":"Dynagrid is our tool for area-wide energy analysis. We use it in client projects that require hourly analysis of electricity and district heating use at individual metering points. Data collection is automated through our integrations with Elhub and Statkraft Varme. Once the data have been collected, the tool enables us to analyse how existing energy use changes when new demand and new measures are added. A key part of the tool is its optimisation algorithms, which analyse which combination of measures offers the greatest potential for demand reduction.",
  "I mange prosjekter er det nyttig å forstå hvilke perioder energilastene er høyest, både i netteier sitt område, i kommunen og i grunnkretsen. Når inntreffer den høyeste lasten? Hvordan påvirker temperatur? Vi har derfor utviklet vår egen løsning for å analysere og visualisere disse dataene på timenivå. Løsningen er integrert mot temperaturdata for alle lokasjoner i Norge og henter kontinuerlig data fra Elhub. Dette gjør det mulig med raske tidligfase analyser av energibruken på timenivå.":"In many projects, it is useful to understand when energy demand is highest across the grid operator’s service area, the municipality and the basic statistical unit. When does peak demand occur? How does temperature affect it? We have therefore developed our own solution to analyse and visualise these data at hourly resolution. The solution integrates temperature data for all locations in Norway and continuously retrieves data from Elhub. This enables rapid early-stage analysis of hourly energy use.",
  "Det finnes i dag mange ulike digitale tjenester for å estimere produksjonen til solcelleanlegg. Flere av disse benytter også vi. Men, med Norges topografi og krevende klimatiske påvirkning savnet vi muligheten til å vurdere hvordan valg av ulike solinnstrålingsdata påvirker estimatene, og hvordan snøtap i ulike områder påvirker estimert produksjon. Vi ønsket også å kunne laste ned ulike solinnstrålingsdata for å forenkle integrasjon mot PVSyst. For å løse disse utfordringene har vi derfor valgt å utvikle vår egen løsning - PV Cofactor. Basisversjonen er fritt tilgjengelig. Ta kontakt om du ønsker tilgang.":"There are many digital services available today for estimating the output of solar PV systems. We use several of them ourselves. However, given Norway’s topography and challenging climate, we wanted to assess how different solar irradiation datasets affect estimates, and how snow losses in different areas affect estimated generation. We also wanted to download different solar irradiation datasets to simplify integration with PVSyst. To address these challenges, we decided to develop our own solution — PV Cofactor. The basic version is available free of charge. Contact us if you would like access.",
  'Løsninger':'Solutions','04 / LØSNINGER':'04 / SOLUTIONS',
  'Batteri, solkraft og fleksibilitet reduserer effekttoppen ved et industrianlegg':'Battery storage, solar power and flexibility reduce peak demand at an industrial site',
  'Detaljerte solenergiberegninger for bygninger med takflater, solinnstråling og produksjonsanalyse':'Detailed solar calculations for buildings, including roof surfaces, solar irradiation and generation analysis',
  'Norge, fylker og kommuner koblet til regionale energianalyser og dialog med interessenter':'Norway, counties and municipalities connected to regional energy analysis and stakeholder discussions',
  'Noen av dem vi samarbeider med':'Some of the organizations we work with','Samarbeidspartnere':'Organizations we work with',
  'PRODUKSJON':'GENERATION','KAPASITETSTILTAK':'CAPACITY MEASURES','FORBRUK':'DEMAND',
  'ENØK':'Energy efficiency','Landstrøm skip':'Shore power','Produksjon varme':'Heat generation',
  'Fra behov til gjennomføring.':'From needs to implementation.',
  'Datagrunnlag':'Data','Tiltak':'Measures','Beslutning':'Decision','Gjennomføring':'Implementation',
  'Vi avklarer effektbehov og begrensninger i området.':'We identify power requirements and constraints in the area.',
  'Dynagrid samler og analyserer timeverdier for strøm og fjernvarme.':'Dynagrid collects and analyses hourly electricity and district heating data.',
  'Vi vurderer produksjon, lagring og fleksibilitet i samspill.':'We assess how generation, storage and flexibility work together.',
  'Vi sammenligner løsninger og synliggjør potensialet for frigjort kapasitet.':'We compare solutions and show their potential to free up grid capacity.',
  'Vi bistår med nettdialog og leverandørvalg.':'We support discussions with grid operators and supplier selection.',

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
  'Cofactor | Rådgivning og digitale energiverktøy':'Cofactor | Energy consulting and digital tools',
  'Hovedmeny':'Main navigation','Cofactor – forsiden':'Cofactor – home',
  'Åpne meny':'Open menu','Lukk meny':'Close menu','Kontakt og sosiale medier':'Contact and social media',
  'Cofactor på GitHub':'Cofactor on GitHub','Cofactor på LinkedIn':'Cofactor on LinkedIn','Send e-post til Cofactor':'Email Cofactor',
  'Frigi kapasitet':'Free up capacity','Om oss':'About us','Prosjekter':'Projects','Logg inn':'Log in',
  'Frigjør kapasitet.':'Free up grid capacity.','Gi plass til nytt forbruk':'Make room for new demand',
  'Vi leverer rådgivning og digitale verktøy for smartere utnyttelse av strømnettet.':'We provide advice and digital tools to make better use of the electricity grid.',
  'Med Dynagrid samler vi automatisk forbruksdata for elektrisk og termisk energi. Vi analyserer hvordan nytt forbruk, lokal energiproduksjon, batterier og fleksibilitet påvirker effekttoppene – og hjelper dere å vurdere tiltak tidlig.':'Dynagrid automatically collects consumption data for electrical and thermal energy. We analyse how new demand, local generation, batteries and flexibility affect peak loads — helping you assess options early.',
  'Utforsk Dynagrid':'Explore Dynagrid','Ta kontakt for en demonstrasjon':'Get in touch for a demo',
  'Solkraft':'Solar power','Vindkraft':'Wind power','Batteri':'Battery','Nytt forbruk':'New demand','Lading':'Charging','Energibehov':'Energy demand','SAMSPILL':'COORDINATION',
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
  '03 / PROSJEKTER':'03 / PROJECTS','05 / KONTAKT':'05 / CONTACT','Se hva våre løsninger kan gjøre':'See what our solutions can do',
  'Fortell oss litt om behovet deres, så kan vi tilpasse en demonstrasjon.':'Tell us a little about your needs so we can tailor a demonstration.',
  'Navn':'Name','E-post':'Email','Virksomhet':'Company','Hva ønsker dere å utforske?':'What would you like to explore?','Valgfritt':'Optional',
  'For eksempel nettkapasitet, nytt forbruk eller fleksibilitet …':'For example, grid capacity, new demand or flexibility …',
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
 const description=document.querySelector('meta[name="description"]');
 const originalDescription=description?.content;
 const picker=document.querySelector('.language-picker');
 const trigger=document.querySelector('#language-trigger');
 const panel=document.querySelector('#language-options');
 function close(){panel.hidden=true;trigger.setAttribute('aria-expanded','false');}
 function setLanguage(next){
  language=next==='en'?'en':'nb';document.documentElement.lang=language;
  document.title=t(originalTitle);
  if(description)description.content=t(originalDescription);
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
