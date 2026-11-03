/**
 * PORTFOLIO DATA - JASMIJN MESU
 * 
 * TIP VOOR JASMIJN:
 * Dit bestand bevat alle teksten, sprints, leeruitkomsten en bewijzen.
 * Hier kun je na elke sprint eenvoudig je nieuwe teksten, links en
 * het aantal behaalde leeruitkomsten aanpassen.
 */

import { StudentProfile, LearningOutcome, Sprint, EvidenceItem } from '../types';

/**
 * Direct downloadbaar Excel-bestand in de /public map
 */
export const SPRINT_LOGBOEK_DOWNLOAD = '/Integraal_Sprint_Logboek_Sprint_4_3NOV.xlsx';
export const AI_RESEARCH_REPORT_PDF = '/assets/evidence/onderzoek-impact-ai-organiseren-samenwerken.pdf';
export const BLUE_CURRENT_RESEARCH_PDF = '/assets/evidence/Vooronderzoek_AI-kansen_Blue_Current.pdf';
export const DATACAMP_AI_AGENTS_URL = 'https://app.datacamp.com/learn/courses/introduction-to-ai-agents';
export const DATACAMP_COMPLETION_IMAGE = '/datacamp-ai-agents-bewijs.png';
export const DATACAMP_SUMMARY_PDF = '/assets/evidence/AI_agents_basisprincipes_samenvatting.pdf';

export const studentProfile: StudentProfile = {
  name: 'Jasmijn Mesu',
  age: 23,
  study: 'Facility Management (Organisatorische richting)',
  institution: 'Zuyd Hogeschool',
  minor: 'Futureproof met AI',
  minorPeriod: 'September 2026 tot en met Januari 2027',
  minorInstitute: 'Hogeschool Utrecht',
  email: 'Jasmijn.mesu@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/jasmijn-mesu-385551350/',
  logbookExcelUrl: SPRINT_LOGBOEK_DOWNLOAD,
  photoUrl: '/IMG_1185.jpg',
  coaches: [
    {
      name: 'Jan van Rouwendal',
      role: 'Coach en Beoordelaar',
      institution: 'Hogeschool Utrecht',
    },
  ],
};

/* export let learningOutcomes: LearningOutcome[] = [
  {
    id: 'LU1',
    code: 'LU1',
    title: 'AI impact op de beroepspraktijk analyseren en evalueren',
    shortDescription: 'Onderzoeken hoe AI organisatorische en facilitaire werkprocessen verandert en kansen identificeren.',
    status: 'afgerond',
    statusText: 'Afgerond op 14 oktober 2026',
    focus: 'Een AI-workflow ontwikkelen voor The Career Brief, de website van Ronald Boiten verder verbeteren en onderzoeken welke gratis AI-cursussen en certificaten passen bij mijn toekomstige loopbaan.',
    summary: 'In Sprint 3 ontwikkelde ik The Career Brief als AI-gestuurd weekmagazine, verbeterde ik de portfoliowebsite van Ronald Boiten en onderzocht ik gratis AI-cursussen en certificaten. De automatische verzending van The Career Brief is nog niet volledig afgerond en neem ik mee naar Sprint 4.',
    researched: 'Ik onderzocht welke gratis AI-cursussen en certificaten van erkende aanbieders aansluiten bij mijn interesses en toekomstige loopbaan. Ik vergeleek minimaal vijf cursussen van minimaal drie aanbieders op relevantie, erkenning, kosten, tijd, niveau en bewijs van afronding. Daarnaast onderzocht ik hoe The Career Brief actuele ontwikkelingen binnen AI, business en mijn toekomstige werkveld kan verzamelen en verwerken.',
    created: 'Ik ontwikkelde The Career Brief: een AI-gestuurd weekmagazine met twaalf vaste hoofdstukken, uitgebreide artikelen, een cover en een professionele HTML-opmaak. Ik testte een proefeditie voor 6 tot en met 12 oktober 2026 in Gmail op een iPhone. Ook maakte ik versie 3 van de website van Ronald Boiten, verwijderde ik de webshoponderdelen en bracht ik zijn ontwerpen en persoonlijke stijl beter naar voren.',
    learned: 'Deze sprint heb ik geleerd dat het ontwikkelen van een AI-toepassing verder gaat dan alleen een goede prompt schrijven. Bij The Career Brief ontdekte ik dat er aanvullende koppelingen nodig zijn om een nieuwsbrief volledig automatisch te versturen. Ook heb ik geleerd hoe ik AI kan gebruiken om een website te verbeteren op basis van feedback van een opdrachtgever. Door mijn onderzoek naar AI-cursussen heb ik daarnaast meer inzicht gekregen in welke vaardigheden ik zelf wil ontwikkelen.',
    title: 'Praktijkgerichte AI oplossing ontwerpen, realiseren en presenteren',
    learningOutcomes: ['LU1', 'LU2', 'LU4', 'LU5'],
    fullDescription: 'De student ontwerpt, realiseert en presenteert een iteratief getoetste AI-gedreven oplossing voor een authentiek praktijkvraagstuk. De oplossing verbindt behoeften van eindgebruikers met technische haalbaarheid en functionele bruikbaarheid.',
    stories: [
      {
        id: 'US',
        description: 'Als toekomstig project- en organisatieprofessional,\nwil ik een AI-workflow ontwikkelen die wekelijks zelfstandig actuele ontwikkelingen onderzoekt, betrouwbare bronnen selecteert en deze verwerkt tot een persoonlijk weekmagazine (The Career Brief), met twaalf vaste hoofdstukken, uitgebreide artikelen en een professionele opmaak,\nzodat ik op de hoogte blijf van ontwikkelingen binnen AI, business en mijn toekomstige werkveld en leer hoe ik AI-agents en automatisering kan inzetten om informatie te verzamelen, te verwerken en automatisch via Gmail te versturen.',
        acceptanceCriteria: [
          'Masterprompt: Een uitgebreide prompt met een vaste indeling van twaalf hoofdstukken, cover en samenvatting.',
          'Proefeditie: Een volledig magazine als HTML-mail over de periode 06-10 t/m 12-10-2026.',
          'Ontvangst: De mail is getest in Gmail op iPhone op leesbaarheid en volledigheid.',
          'Workflow: Een stappenplan met bronnen, taalmodel en verzending.',
        ],
        qualityCriteria: [
          'Promptstructuur: De prompt bevat een duidelijke rol, context, stappen, gewenst format en eisen.',
          'Verificatie: Links en feiten zijn gecontroleerd en gevonden fouten zijn vastgelegd.',
          'Transparantie: Duidelijk vermeld wat AI deed, wat eigen werk is en wat de grenzen zijn.',
          'E-mailkwaliteit: E-mailveilige HTML die onder de Gmail-limiet blijft.',
          'Herbruikbaarheid: Prompt en proces zijn over te zetten naar Make of n8n.',
        ],
      },
      {
        id: 'US',
        description: 'Als webbouwer,\nwil ik de bestaande website van Ronald Boiten verder ontwikkelen tot een overzichtelijke en professionele portfoliowebsite, waarbij zijn ontwerpen centraal staan en zijn persoonlijke stijl beter terugkomt,\nzodat bezoekers een goed beeld krijgen van zijn werk en de website aansluit bij hoe Ronald zichzelf en zijn projecten wil presenteren.',
        acceptanceCriteria: [
          'Website: Versie 3 is live en bereikbaar via een link.',
          'Webshop: Winkelwagen, prijzen, bestelknoppen en verkoopteksten zijn verwijderd.',
          'Portfolio: Het kopje "Over mij" is verwijderd en zijn werk staat centraal.',
          'Afbeeldingen: Uitsneden en verhoudingen zijn aangepast, zodat zijn ontwerpen goed zichtbaar zijn.',
          'Mobiel: Het menu werkt, teksten zijn leesbaar en er is geen horizontaal scrollen.',
          'Review: De website en het gebruik ervan zijn samen met Ronald doorgenomen en zijn feedback is vastgelegd.',
        ],
        qualityCriteria: [
          'Stijlconsistentie: Typografie en marges sluiten op elkaar aan en lettertype en logo van Ronald zijn behouden.',
          'Afbeeldingskwaliteit: Afbeeldingen zijn scherp, niet vervormd en geschikt voor het web.',
          'Bruikbaarheid: Zijn werk is vanaf de homepage in maximaal 1 klik bereikbaar.',
          'Leesbaarheid: Contrast en tekstgrootte zijn op mobiel goed.',
        ],
      },
      {
        id: 'RS',
        description: 'Als student van de minor Futureproof met AI,\nwil ik onderzoeken welke gratis AI-cursussen en certificaten van erkende aanbieders aansluiten bij mijn interesses en toekomstige loopbaan,\nzodat ik een bewuste keuze kan maken over welke kennis en vaardigheden ik verder wil ontwikkelen en hoe ik hiermee mijn cv en LinkedIn-profiel kan versterken.',
        acceptanceCriteria: [
          'Vergelijking: Een tabel met minimaal 5 cursussen van minimaal 3 aanbieders.',
          'Begrippen: Uitleg van het verschil tussen deelnamebewijs, badge, certificaat en officiële certificering.',
          'Selectie: Een onderbouwde top 3 van cursussen die ik ga volgen.',
          'Verslag en presentatie: Een kort onderzoeksverslag, gepresenteerd tijdens de Show & Grow.',
        ],
        qualityCriteria: [
          'Criteria: Een vooraf vastgestelde matrix met relevantie, erkenning, kosten, tijd, niveau en bewijs van afronding.',
          'Triangulatie: AI-onderzoek is gecontroleerd op de officiële cursuspagina\'s.',
          'Transparantie: Gebruikte LLM\'s en prompts zijn vastgelegd in een bijlage.',
          'Bronvermelding: Bronnen zijn gecontroleerd en genoteerd volgens APA 7.',
        ],
      },
    ],
    feedback: [
      {
        date: '12 oktober 2026',
        from: 'Suzanne Koppenhol',
        feedback: 'Ik heb mijn AI-agent (The Career Brief) getest en besproken met Suzanne Koppenhol. Zij heeft meerdere ervaringen met agents. Haar advies: om de agent echt goed te laten werken, is het verstandig om hem uit te breiden in Make of n8n, eventueel met een API-koppeling.',
        action: 'Ik neem dit advies mee naar Sprint 4 en ga verder met Make of n8n en API-koppelingen.',
      },
    ],
    mastery: [
      {
        outcome: 'LU1',
        title: 'AI impact op de beroepspraktijk analyseren en evalueren',
        level: 'V',
        evidence: 'Met The Career Brief heb ik onderzocht welke AI-ontwikkelingen invloed hebben op mijn toekomstige werk, bijvoorbeeld binnen projectmanagement, consultancy en business. Ik heb onderzocht welke onderwerpen relevant zijn en hoe AI het werk binnen organisaties verandert. Daarnaast heb ik onderzoek gedaan naar gratis AI-cursussen en certificaten om te bepalen welke vaardigheden ik zelf verder wil ontwikkelen. Hieruit concludeer ik dat AI-agents en automatisering voor mij belangrijke vaardigheden worden, omdat een agent al een groot deel van het onderzoekswerk kan overnemen. Daarom kies ik cursussen die hierop aansluiten.',
      },
      {
        outcome: 'LU2',
        title: 'Praktijkgerichte AI oplossing ontwerpen, realiseren en presenteren',
        level: 'V',
        evidence: 'Ik heb The Career Brief ontwikkeld: een AI-gestuurd weekmagazine dat nieuws onderzoekt en verwerkt in twaalf hoofdstukken. Ik heb de inhoud, schrijfstijl en vormgeving uitgewerkt en verschillende versies getest. De automatische verzending via Gmail werkt nog niet volledig. Daarnaast heb ik de website van Ronald Boiten verbeterd. Samen met hem heb ik de website doorgenomen, de winkelwagen verwijderd en de vormgeving meer op zijn werk afgestemd. Beide oplossingen presenteer ik tijdens het Show & Grow-moment van deze sprint.',
      },
      {
        outcome: 'LU3',
        title: 'Ethiek en verantwoordelijk AI gebruik beoordelen',
        level: '-',
        evidence: 'Bij The Career Brief heb ik aandacht besteed aan betrouwbare bronnen, het controleren van informatie en het verantwoord gebruiken van afbeeldingen. Ik heb hiervoor instructies opgenomen in mijn prompt. Het daadwerkelijk testen en beoordelen hiervan wil ik in een volgende sprint verder oppakken.',
      },
      {
        outcome: 'LU4',
        title: 'AI Tools en technieken gebruiken',
        level: 'V',
        evidence: 'Voor de website van Ronald heb ik gewerkt met Claude Code en Visual Studio Code. Bij The Career Brief heb ik ChatGPT gebruikt om een uitgebreide masterprompt te ontwikkelen, taken in te plannen en nieuwsbrieven met HTML-opmaak via Gmail te testen. Daarbij ontdekte ik dat automatische verzending aanvullende koppelingen vraagt. Daarom ben ik mij ook gaan verdiepen in Make, n8n en API\'s.',
      },
      {
        outcome: 'LU5',
        title: 'Zelfstandig en zelfsturend werken',
        level: 'V',
        evidence: 'Vanuit mijn eigen interesse om wekelijks op de hoogte te blijven van ontwikkelingen heb ik The Career Brief bedacht. Ik heb zelfstandig onderzocht hoe ik dit kon realiseren en de nieuwsbrief meerdere keren aangepast op basis van mijn testresultaten. Ook heb ik feedback gevraagd aan Suzanne Koppenhol, die ervaring heeft met AI-agents. Haar advies om met Make of n8n en API-koppelingen verder te werken neem ik mee naar Sprint 4.',
      },
    ],
    reflection: {
      date: '14 oktober 2026',
      learned: 'Deze sprint heb ik geleerd dat het ontwikkelen van een AI-toepassing verder gaat dan alleen een goede prompt schrijven. Bij The Career Brief ontdekte ik dat er aanvullende koppelingen nodig zijn om een nieuwsbrief volledig automatisch te versturen. Ook heb ik geleerd hoe ik AI kan gebruiken om een website te verbeteren op basis van feedback van een opdrachtgever. Door mijn onderzoek naar AI-cursussen heb ik daarnaast meer inzicht gekregen in welke vaardigheden ik zelf wil ontwikkelen.',
      keep: 'Ik wil blijven werken aan projecten die aansluiten bij mijn eigen interesses en waarbij ik iets kan ontwikkelen dat daadwerkelijk gebruikt kan worden. Ook wil ik blijven testen, feedback vragen en mijn werk steeds verder verbeteren.',
      change: 'In de volgende sprint wil ik mij meer verdiepen in Make, n8n en API-koppelingen, zodat ik The Career Brief verder kan automatiseren. Daarnaast wil ik eerder controleren of mijn ideeën technisch haalbaar zijn en mijn onderzoek naar AI ook daadwerkelijk toepassen in de praktijk.',
    },
    currentCount: 2,
  },
  {
    id: 'LU3',
    code: 'LU3',
    title: 'Ethiek en verantwoord AI gebruik beoordelen',
    shortDescription: 'Kritisch reflecteren op ethiek, privacy, transparantie en mensgerichte randvoorwaarden bij AI-inzet.',
    fullDescription: 'De student toetst AI-toepassingen aan ethische kaders, wet- en regelgeving zoals privacy en databescherming en maatschappelijke impact. Hierbij staat het borgen van mensgerichtheid, inclusie en bias-preventie centraal.',
    targetCount: 2,
    currentCount: 0,
  },
  {
    id: 'LU4',
    code: 'LU4',
    title: 'AI tools en technieken gebruiken',
    shortDescription: 'Doelgericht selecteren en toepassen van moderne AI-technologieën en werkwijzen.',
    fullDescription: 'De student maakt doelgericht en beargumenteerd gebruik van actuele AI-technologieën, prompting, API-structuren of no-code/low-code automatiseringen om vraagstukken op te lossen en processen te optimaliseren.',
    targetCount: 4,
    currentCount: 2,
  },
  {
    id: 'LU5',
    code: 'LU5',
    title: 'Zelfstandig en zelfsturend werken',
    shortDescription: 'Proactief plannen in tweewekelijkse sprints, tijdig feedback ophalen en reflecteren op eigen groei.',
    fullDescription: 'De student toont een proactieve, methodische en onderzoekende houding. Werkt zelfstandig volgens agile sprintcycli, reflecteert aantoonbaar op de eigen professionele ontwikkeling en benut feedback van coaches en medestudenten constructief.',
    targetCount: 6,
    currentCount: 2,
  },
]; */

export let learningOutcomes: LearningOutcome[] = [
  {
    id: 'LU1',
    code: 'LU1',
    title: 'AI impact op de beroepspraktijk analyseren en evalueren',
    shortDescription: 'Onderzoeken hoe AI organisatorische en facilitaire werkprocessen verandert en kansen identificeren.',
    fullDescription: 'De student analyseert en evalueert systematisch welke impact artificiële intelligentie heeft op de huidige en toekomstige beroepspraktijk binnen het facilitaire werkveld, met specifieke focus op procesoptimalisatie, werkcoördinatie en mens-techniek interactie.',
    targetCount: 2,
    currentCount: 2,
  },
  {
    id: 'LU2',
    code: 'LU2',
    title: 'Praktijkgerichte AI oplossing ontwerpen, realiseren en presenteren',
    shortDescription: 'Een tastbare, werkende AI-oplossing ontwerpen en bouwen die een concreet organisatorisch knelpunt oplost.',
    fullDescription: 'De student ontwerpt, realiseert en presenteert een iteratief getoetste AI-gedreven oplossing voor een authentiek praktijkvraagstuk. De oplossing verbindt behoeften van eindgebruikers met technische haalbaarheid en functionele bruikbaarheid.',
    targetCount: 4,
    currentCount: 4,
  },
  {
    id: 'LU3',
    code: 'LU3',
    title: 'Ethiek en verantwoord AI gebruik beoordelen',
    shortDescription: 'Kritisch reflecteren op ethiek, privacy, transparantie en mensgerichte randvoorwaarden bij AI-inzet.',
    fullDescription: 'De student toetst AI-toepassingen aan ethische kaders, wet- en regelgeving zoals privacy en databescherming en maatschappelijke impact. Hierbij staat het borgen van mensgerichtheid, inclusie en bias-preventie centraal.',
    targetCount: 2,
    currentCount: 1,
  },
  {
    id: 'LU4',
    code: 'LU4',
    title: 'AI tools en technieken gebruiken',
    shortDescription: 'Doelgericht selecteren en toepassen van moderne AI-technologieën en werkwijzen.',
    fullDescription: 'De student maakt doelgericht en beargumenteerd gebruik van actuele AI-technologieën, prompting, API-structuren of no-code/low-code automatiseringen om vraagstukken op te lossen en processen te optimaliseren.',
    targetCount: 4,
    currentCount: 4,
  },
  {
    id: 'LU5',
    code: 'LU5',
    title: 'Zelfstandig en zelfsturend werken',
    shortDescription: 'Proactief plannen in tweewekelijkse sprints, tijdig feedback ophalen en reflecteren op eigen groei.',
    fullDescription: 'De student toont een proactieve, methodische en onderzoekende houding. Werkt zelfstandig volgens agile sprintcycli, reflecteert aantoonbaar op de eigen professionele ontwikkeling en benut feedback van coaches en medestudenten constructief.',
    targetCount: 6,
    currentCount: 4,
  },
];

export let sprintsData: Sprint[] = [
  {
    id: 1,
    title: 'Sprint 1',
    period: '7 september 2026 tot en met 16 september 2026',
    showAndGrowDate: '16 september 2026',
    status: 'afgerond',
    statusText: 'Afgesloten met een voldoende',
    focus: 'Van onderzoek naar eerste prototypes: onderzoeken welke rol generatieve AI kan spelen in organiseren, samenwerken en het volgen van bouwnormen.',
    summary: 'In Sprint 1 onderzocht ik de impact van AI op organiseren en samenwerken, bouwde ik mijn portfolio en maakte ik een eerste NormChecker-prototype.',
    researched: 'Ik onderzocht drie kanten van AI in mijn toekomstige werk. Eerst onderzocht ik met Perplexity welke AI-toepassingen invloed hebben op organiseren, coördineren en samenwerken. Daarna vergeleek ik bronnen van adviesbureaus, beroepsorganisaties, wetenschap, vakpers en softwareleveranciers, zodat ik niet afhankelijk werd van één perspectief. Ook onderzocht ik met Claude Code wat AI al wist over NEN- en ISO-bouwnormen en waar controle op verzonnen of onjuiste informatie nodig was.',
    created: 'Ik werkte drie concrete bewijzen uit: een onderzoeksverslag, deze portfoliowebsite en het prototype NormChecker. Voor het onderzoeksverslag selecteerde ik tien bronnen, liet ik OpenAI Deep Research een eerste versie maken, vergeleek ik die met een versie van Gemini en corrigeerde ik zelf drie fouten in de APA7-bronnenlijst. Voor de websites werkte ik eerst in Google AI Studio of Claude, controleerde ik de uitkomsten lokaal in Visual Studio Code en zette ik de projecten via GitHub en Vercel live.',
    learned: 'Ik heb geleerd dat een goed resultaat niet ontstaat door een AI-tool één opdracht te geven en de uitkomst over te nemen. Ik moest keuzes maken, bronnen vergelijken, fouten herkennen en zelf bepalen wat bruikbaar was. Ook merkte ik dat verschillende tools verschillende sterke kanten hebben: Deep Research hielp bij het ordenen van het onderzoek, Claude hielp bij de zakelijke afwerking en Claude Code hielp bij het bouwen van een eerste dashboard. De prototypes zijn nog geen afgeronde bedrijfsoplossingen, maar laten wel zien dat ik zelfstandig van vraagstuk naar eerste werkende opzet kan gaan.',
    presentationUrl: '',
    learningOutcomes: ['LU1', 'LU2', 'LU4', 'LU5'],
    evidenceIds: ['BEW-01', 'BEW-02', 'BEW-03'],
    stories: [
      {
        id: 'RS',
        description: 'Als aankomend project- en organisatieprofessional,\nwil ik onderzoeken welke AI-toepassingen de meeste impact hebben op organiseren, coördineren en samenwerken,\nzodat ik weet hoe mijn toekomstige rol, taken en vaardigheden veranderen.',
        acceptanceCriteria: [
          'Prompting: Een tweetrapsaanpak uitvoeren: eerst bronnen zoeken via Perplexity (minstens 4 typen), daarna via een deep-research-prompt het verslag genereren met CoT en bronvermelding.',
          'Verslag: Een compleet onderzoeksverslag opleveren met vaste onderdelen: samenvatting, inleiding, methode, resultaten, risico\'s, conclusie en aanbevelingen.',
          'Methode: Kwalitatief literatuuronderzoek doen met narratieve synthese op basis van 10 bronnen.',
          'Presentatie: De belangrijkste inzichten presenteren tijdens de Show & Grow.',
        ],
        qualityCriteria: [
          'Promptopbouw: Prompts bevatten vooraf een duidelijke rol, context, randvoorwaarden en gewenst format.',
          'Bronnen: Minimaal 10 bronnen uit minstens 4 invalshoeken; gecheckt en gecorrigeerd volgens APA7-normen.',
          'Toolkeuze: Bewuste keuze vastleggen voor OpenAI (onderzoek/synthese) en Claude (vormgeving/structuur).',
          'Triangulatie: Bevindingen vergelijken tussen modellen (Gemini en OpenAI) en noteren waarom bepaalde output niet bruikbaar is.',
          'Kritische blik: Conclusie onderbouwen met risico\'s (betrouwbaarheid en afhankelijkheid) en AI positioneren als assistent, niet als vervanging.',
        ],
      },
      {
        id: 'US',
        description: 'Als student in de minor Futureproof met AI,\nwil ik mijn eigen portfoliowebsite bouwen en online publiceren,\nzodat coaches en medestudenten direct zien wie ik ben en hoe ik aan de leeruitkomsten werk.',
        acceptanceCriteria: [
          'Homepage: Toont mijn profiel, de context van de minor en mijn focus op organiseren en samenwerken.',
          'Over mij: Bevat een profielfoto, achtergrond, studieloopbaan en interesses (geen placeholderteksten).',
          'Sprints & bewijzen: Bevat een actueel sprintoverzicht en een directe link naar het onderzoeksverslag (RS), gekoppeld aan LU1 en LU4.',
          'Navigatie: Menu werkt soepel tussen Home, Over mij, Leeruitkomsten, Sprints, Bewijzen en Contact.',
          'Livegang: De website is publiek bereikbaar via een werkende Vercel-link.',
        ],
        qualityCriteria: [
          'Responsiveness: Lay-out werkt goed op zowel iPhone als desktop zonder afsnijdingen of horizontaal scrollen.',
          'Code & Deployment: Codebeheer via GitHub en automatische livegang via Vercel geregeld.',
          'Taal & links: Teksten zijn foutloos geschreven; alle knoppen en links werken zonder foutmeldingen.',
          'Vormgeving: Rustige, warme kleuren en typografie die een professioneel geheel vormen en afwijken van standaard AI-templates.',
          'Transparantie: Duidelijk vermeld waar AI is ingezet en wat eigen werk is.',
        ],
      },
      {
        id: 'LS',
        description: 'Als student in de minor Futureproof met AI,\nwil ik leren werken met Claude Code, prompting en vibe-coding via GitHub en Vercel om een normchecker-prototype te bouwen,\nzodat ik ontdek wat AI al weet over ISO- en NEN-normen en zelfstandig een interactief frontend-prototype online kan publiceren.',
        acceptanceCriteria: [
          'Kennisverkenning: Via gerichte prompts testen wat Claude Code inhoudelijk weet over NEN- en ISO-normen en welke structuur het model voorstelt.',
          'Dashboard-prototype: Een voorbeeld-dashboard (normchecker) bouwen op basis van een fictieve persona om de werking van normcontroles te visualiseren.',
          'Deployment: De applicatie via Claude Code en GitHub live publiceren op een werkende Vercel-omgeving (normchecker.vercel.app).',
        ],
        qualityCriteria: [
          'Promptstructuur: Prompts aan Claude Code zijn voorzien van duidelijke rolinstructies, domeincontext (bouw/normen) en gewenste output-structuren.',
          'Inhoudelijke toetsing: Controleren of de voorgestelde NEN/ISO-structuren door Claude Code inhoudelijk kloppen en geen hallucinaties bevatten.',
          'Pipeline-stabiliteit: De koppeling tussen lokale bestanden, GitHub-repository en Vercel werkt zonder build-fouten.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Sprint 2',
    period: '21 september 2026 tot en met 30 september 2026',
    showAndGrowDate: '30 september 2026',
    status: 'afgerond',
    statusText: 'Afgesloten met een voldoende',
    focus: 'Van AI-agenten leren en Blue Current verkennen naar een gerichte, praktijkgerichte portfolio-oplossing.',
    summary: 'In Sprint 2 verdiep ik mij in AI-agents via DataCamp, onderzoek ik Blue Current en mogelijke AI-use cases en presenteer ik het vernieuwde portfolio aan Ronald Boiten voor gerichte feedback.',
    researched: 'Ik volg de DataCamp-cursus "Introduction to AI Agents" en vergelijk eenvoudige prompt-chains en workflows met een agentic aanpak. Daarnaast onderzoek ik de bedrijfsactiviteiten, laadinfrastructuur-diensten en technologiecontext van Blue Current. Op basis daarvan werk ik minimaal drie kansrijke AI-use cases uit en maak ik een vragenlijst voor het eerste intakegesprek.',
    created: 'Ik werk het eerste werkende prototype van mijn vernieuwde portfoliowebsite uit en presenteer dit samen met de gebruikte AI-systemen aan Ronald Boiten. Ik verwerk zijn feedback op fotografie, korte teksten, typografie en de herkenbaarheid van de grafische identiteit als input voor Sprint 3.',
    learned: 'Ik leer dat een agentic aanpak meer vraagt dan een losse prompt: ik moet kunnen uitleggen wanneer autonome stappen waarde toevoegen ten opzichte van een gewone workflow. Ook leer ik een organisatie eerst gericht te onderzoeken voordat ik AI-use cases voorstel. Door feedback van Shahmeer en Ronald plan ik de volgende stap bewust: eerst gebruikersvalidatie van het ontwerp en daarna pas de technische beheeromgeving en backend.',
    presentationUrl: '',
    learningOutcomes: ['LU2', 'LU4', 'LU5'],
    evidenceIds: ['BEW-04', 'BEW-05', 'BEW-06'],
    stories: [
      {
        id: 'LS',
        description: 'Als student in de minor Futureproof met AI,\nwil ik de basisprincipes en architecturen van AI-agents leren via DataCamp,\nzodat ik kan onderbouwen of en hoe een agentic aanpak waarde toevoegt aan mijn specifieke minoroplossing.',
        acceptanceCriteria: [
          'DataCamp-cursus "Introduction to AI Agents" succesvol afgerond, inclusief certificaat/bewijs van afronding in logboek.',
          'Een geschreven samenvatting waarin de behandelde stof wordt besproken en je de stof te allen tijde kunt terugvinden.',
          'De samenvatting is toegevoegd aan mijn portfolio om deze altijd bij de hand te hebben.',
        ],
        qualityCriteria: [
          'Betrouwbaarheid & herkomst: gebruik van actuele, gereputeerde bronnen en correcte bronvermelding.',
          'Diepgang & onderbouwing: helder onderscheid gemaakt tussen eenvoudige prompt-chains/workflows en daadwerkelijke autonome agents.',
          'Toepasbaarheid: de vertaalslag sluit direct aan op de context van het eigen projectportfolio.',
        ],
      },
      {
        id: 'RS',
        description: 'Als AI-projectmanager in opleiding,\nwil ik de bedrijfsactiviteiten, laadinfrastructuur-diensten en potentiële AI-kansen van Blue Current onderzoeken,\nzodat ik tijdens het eerste intakegesprek direct gerichte AI-use cases kan pitchen en een scherpe minoropdracht kan formuleren.',
        acceptanceCriteria: [
          'Een compact onderzoeksverslag van 1 tot 2 pagina\'s maken met de kernactiviteiten en propositie van Blue Current en de huidige technologie- en laadinfrastructuurcontext.',
          'Minimaal drie concrete AI-kansen of use cases uitwerken, bijvoorbeeld slim laden en netcongestie, voorspellend onderhoud of geautomatiseerde support.',
          'Een gestructureerde vragenlijst met vijf tot acht vragen maken voor het intakegesprek met Blue Current.',
        ],
        qualityCriteria: [
          'Bronnen en herkomst: relevante openbare bronnen gebruiken, zoals de website, nieuws en LinkedIn, met expliciete bronvermelding.',
          'Triangulatie: deskresearch combineren met een gerichte analyse via minimaal een LLM met een gestructureerde promptopbouw.',
          'Relevantie en haalbaarheid: de voorgestelde AI-kansen sluiten realistisch aan op een minorproject van ongeveer vier maanden.',
        ],
      },
      {
        id: 'US',
        description: 'Als student van de minor Futureproof met AI,\nwil ik het eerste werkende prototype van de vernieuwde website en de gebruikte AI-systemen presenteren aan Ronald Boiten,\nzodat we kunnen toetsen of het ontwerp en de kleuren aansluiten bij zijn grafische identiteit en we duidelijke input hebben voor Sprint 3.',
        acceptanceCriteria: [
          'Het prototype is live en toegankelijk via de Vercel-link.',
          'De specifieke grafische stijl en kleurstelling van Ronald zijn herkenbaar doorgevoerd op de website.',
          'De boekprojecten zijn visueel representatief weergegeven.',
          'De afspraak en presentatie op dinsdag 27 september zijn uitgevoerd.',
          'De feedback van Ronald is gedocumenteerd als input voor Sprint 3.',
        ],
        qualityCriteria: [
          'Een heldere toelichting geven over de gebruikte AI-tools en -systemen.',
          'De Vercel-link werkt technisch goed en de website is responsive op mobiel en desktop.',
          'De opzet en code van de website zijn netjes gestructureerd en onderhoudbaar voor verdere uitbreiding in Sprint 3.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Sprint 3',
    period: '5 oktober 2026 tot en met 14 oktober 2026',
    showAndGrowDate: '14 oktober 2026',
    status: 'afgerond',
    statusText: 'Afgerond op 14 oktober 2026',
    focus: 'Een AI-workflow ontwikkelen voor The Career Brief, de website van Ronald Boiten verder verbeteren en onderzoeken welke gratis AI-cursussen en certificaten passen bij mijn toekomstige loopbaan.',
    summary: 'In Sprint 3 ontwikkelde ik The Career Brief als AI-gestuurd weekmagazine, verbeterde ik de portfoliowebsite van Ronald Boiten en onderzocht ik gratis AI-cursussen en certificaten. De automatische verzending van The Career Brief is nog niet volledig afgerond en neem ik mee naar Sprint 4.',
    researched: 'Ik onderzocht welke gratis AI-cursussen en certificaten van erkende aanbieders aansluiten bij mijn interesses en toekomstige loopbaan. Ik vergeleek minimaal vijf cursussen van minimaal drie aanbieders op relevantie, erkenning, kosten, tijd, niveau en bewijs van afronding. Daarnaast onderzocht ik hoe The Career Brief actuele ontwikkelingen binnen AI, business en mijn toekomstige werkveld kan verzamelen en verwerken.',
    created: 'Ik ontwikkelde The Career Brief: een AI-gestuurd weekmagazine met twaalf vaste hoofdstukken, uitgebreide artikelen, een cover en een professionele HTML-opmaak. Ik testte een proefeditie voor 6 tot en met 12 oktober 2026 in Gmail op een iPhone. Ook maakte ik versie 3 van de website van Ronald Boiten, verwijderde ik de webshoponderdelen en bracht ik zijn ontwerpen en persoonlijke stijl beter naar voren.',
    learned: 'Deze sprint heb ik geleerd dat het ontwikkelen van een AI-toepassing verder gaat dan alleen een goede prompt schrijven. Bij The Career Brief ontdekte ik dat er aanvullende koppelingen nodig zijn om een nieuwsbrief volledig automatisch te versturen. Ook heb ik geleerd hoe ik AI kan gebruiken om een website te verbeteren op basis van feedback van een opdrachtgever. Door mijn onderzoek naar AI-cursussen heb ik daarnaast meer inzicht gekregen in welke vaardigheden ik zelf wil ontwikkelen.',
    presentationUrl: '',
    learningOutcomes: ['LU1', 'LU2', 'LU4', 'LU5'],
    evidenceIds: ['BEW-07', 'BEW-08', 'BEW-09'],
    stories: [
      {
        id: 'US',
        description: 'Als toekomstig project- en organisatieprofessional,\nwil ik een AI-workflow ontwikkelen die wekelijks zelfstandig actuele ontwikkelingen onderzoekt, betrouwbare bronnen selecteert en deze verwerkt tot een persoonlijk weekmagazine (The Career Brief), met twaalf vaste hoofdstukken, uitgebreide artikelen en een professionele opmaak,\nzodat ik op de hoogte blijf van ontwikkelingen binnen AI, business en mijn toekomstige werkveld en leer hoe ik AI-agents en automatisering kan inzetten om informatie te verzamelen, te verwerken en automatisch via Gmail te versturen.',
        acceptanceCriteria: [
          'Masterprompt: Een uitgebreide prompt met een vaste indeling van twaalf hoofdstukken, cover en samenvatting.',
          'Proefeditie: Een volledig magazine als HTML-mail over de periode 06-10 t/m 12-10-2026.',
          'Ontvangst: De mail is getest in Gmail op iPhone op leesbaarheid en volledigheid.',
          'Workflow: Een stappenplan met bronnen, taalmodel en verzending.',
        ],
        qualityCriteria: [
          'Promptstructuur: De prompt bevat een duidelijke rol, context, stappen, gewenst format en eisen.',
          'Verificatie: Links en feiten zijn gecontroleerd en gevonden fouten zijn vastgelegd.',
          'Transparantie: Duidelijk vermeld wat AI deed, wat eigen werk is en wat de grenzen zijn.',
          'E-mailkwaliteit: E-mailveilige HTML die onder de Gmail-limiet blijft.',
          'Herbruikbaarheid: Prompt en proces zijn over te zetten naar Make of n8n.',
        ],
      },
      {
        id: 'US',
        description: 'Als webbouwer,\nwil ik de bestaande website van Ronald Boiten verder ontwikkelen tot een overzichtelijke en professionele portfoliowebsite, waarbij zijn ontwerpen centraal staan en zijn persoonlijke stijl beter terugkomt,\nzodat bezoekers een goed beeld krijgen van zijn werk en de website aansluit bij hoe Ronald zichzelf en zijn projecten wil presenteren.',
        acceptanceCriteria: [
          'Website: Versie 3 is live en bereikbaar via een link.',
          'Webshop: Winkelwagen, prijzen, bestelknoppen en verkoopteksten zijn verwijderd.',
          'Portfolio: Het kopje "Over mij" is verwijderd en zijn werk staat centraal.',
          'Afbeeldingen: Uitsneden en verhoudingen zijn aangepast, zodat zijn ontwerpen goed zichtbaar zijn.',
          'Mobiel: Het menu werkt, teksten zijn leesbaar en er is geen horizontaal scrollen.',
          'Review: De website en het gebruik ervan zijn samen met Ronald doorgenomen en zijn feedback is vastgelegd.',
        ],
        qualityCriteria: [
          'Stijlconsistentie: Typografie en marges sluiten op elkaar aan en lettertype en logo van Ronald zijn behouden.',
          'Afbeeldingskwaliteit: Afbeeldingen zijn scherp, niet vervormd en geschikt voor het web.',
          'Bruikbaarheid: Zijn werk is vanaf de homepage in maximaal 1 klik bereikbaar.',
          'Leesbaarheid: Contrast en tekstgrootte zijn op mobiel goed.',
        ],
      },
      {
        id: 'RS',
        description: 'Als student van de minor Futureproof met AI,\nwil ik onderzoeken welke gratis AI-cursussen en certificaten van erkende aanbieders aansluiten bij mijn interesses en toekomstige loopbaan,\nzodat ik een bewuste keuze kan maken over welke kennis en vaardigheden ik verder wil ontwikkelen en hoe ik hiermee mijn cv en LinkedIn-profiel kan versterken.',
        acceptanceCriteria: [
          'Vergelijking: Een tabel met minimaal 5 cursussen van minimaal 3 aanbieders.',
          'Begrippen: Uitleg van het verschil tussen deelnamebewijs, badge, certificaat en officiële certificering.',
          'Selectie: Een onderbouwde top 3 van cursussen die ik ga volgen.',
          'Verslag en presentatie: Een kort onderzoeksverslag, gepresenteerd tijdens de Show & Grow.',
        ],
        qualityCriteria: [
          'Criteria: Een vooraf vastgestelde matrix met relevantie, erkenning, kosten, tijd, niveau en bewijs van afronding.',
          'Triangulatie: AI-onderzoek is gecontroleerd op de officiële cursuspagina\'s.',
          'Transparantie: Gebruikte LLM\'s en prompts zijn vastgelegd in een bijlage.',
          'Bronvermelding: Bronnen zijn gecontroleerd en genoteerd volgens APA 7.',
        ],
      },
    ],
    feedback: [
      {
        date: '12 oktober 2026',
        from: 'Suzanne Koppenhol',
        feedback: 'Ik heb mijn AI-agent (The Career Brief) getest en besproken met Suzanne Koppenhol. Zij heeft meerdere ervaringen met agents. Haar advies: om de agent echt goed te laten werken, is het verstandig om hem uit te breiden in Make of n8n, eventueel met een API-koppeling.',
        action: 'Ik neem dit advies mee naar Sprint 4 en ga verder met Make of n8n en API-koppelingen.',
      },
    ],
    mastery: [
      {
        outcome: 'LU1',
        title: 'AI impact op de beroepspraktijk analyseren en evalueren',
        level: 'V',
        evidence: 'Met The Career Brief heb ik onderzocht welke AI-ontwikkelingen invloed hebben op mijn toekomstige werk, bijvoorbeeld binnen projectmanagement, consultancy en business. Ik heb onderzocht welke onderwerpen relevant zijn en hoe AI het werk binnen organisaties verandert. Daarnaast heb ik onderzoek gedaan naar gratis AI-cursussen en certificaten om te bepalen welke vaardigheden ik zelf verder wil ontwikkelen. Hieruit concludeer ik dat AI-agents en automatisering voor mij belangrijke vaardigheden worden, omdat een agent al een groot deel van het onderzoekswerk kan overnemen. Daarom kies ik cursussen die hierop aansluiten.',
      },
      {
        outcome: 'LU2',
        title: 'Praktijkgerichte AI oplossing ontwerpen, realiseren en presenteren',
        level: 'V',
        evidence: 'Ik heb The Career Brief ontwikkeld: een AI-gestuurd weekmagazine dat nieuws onderzoekt en verwerkt in twaalf hoofdstukken. Ik heb de inhoud, schrijfstijl en vormgeving uitgewerkt en verschillende versies getest. De automatische verzending via Gmail werkt nog niet volledig. Daarnaast heb ik de website van Ronald Boiten verbeterd. Samen met hem heb ik de website doorgenomen, de winkelwagen verwijderd en de vormgeving meer op zijn werk afgestemd. Beide oplossingen presenteer ik tijdens het Show & Grow-moment van deze sprint.',
      },
      {
        outcome: 'LU3',
        title: 'Ethiek en verantwoordelijk AI gebruik beoordelen',
        level: '-',
        evidence: 'Bij The Career Brief heb ik aandacht besteed aan betrouwbare bronnen, het controleren van informatie en het verantwoord gebruiken van afbeeldingen. Ik heb hiervoor instructies opgenomen in mijn prompt. Het daadwerkelijk testen en beoordelen hiervan wil ik in een volgende sprint verder oppakken.',
      },
      {
        outcome: 'LU4',
        title: 'AI Tools en technieken gebruiken',
        level: 'V',
        evidence: 'Voor de website van Ronald heb ik gewerkt met Claude Code en Visual Studio Code. Bij The Career Brief heb ik ChatGPT gebruikt om een uitgebreide masterprompt te ontwikkelen, taken in te plannen en nieuwsbrieven met HTML-opmaak via Gmail te testen. Daarbij ontdekte ik dat automatische verzending aanvullende koppelingen vraagt. Daarom ben ik mij ook gaan verdiepen in Make, n8n en API\'s.',
      },
      {
        outcome: 'LU5',
        title: 'Zelfstandig en zelfsturend werken',
        level: 'V',
        evidence: 'Vanuit mijn eigen interesse om wekelijks op de hoogte te blijven van ontwikkelingen heb ik The Career Brief bedacht. Ik heb zelfstandig onderzocht hoe ik dit kon realiseren en de nieuwsbrief meerdere keren aangepast op basis van mijn testresultaten. Ook heb ik feedback gevraagd aan Suzanne Koppenhol, die ervaring heeft met AI-agents. Haar advies om met Make of n8n en API-koppelingen verder te werken neem ik mee naar Sprint 4.',
      },
    ],
    reflection: {
      date: '14 oktober 2026',
      learned: 'Deze sprint heb ik geleerd dat het ontwikkelen van een AI-toepassing verder gaat dan alleen een goede prompt schrijven. Bij The Career Brief ontdekte ik dat er aanvullende koppelingen nodig zijn om een nieuwsbrief volledig automatisch te versturen. Ook heb ik geleerd hoe ik AI kan gebruiken om een website te verbeteren op basis van feedback van een opdrachtgever. Door mijn onderzoek naar AI-cursussen heb ik daarnaast meer inzicht gekregen in welke vaardigheden ik zelf wil ontwikkelen.',
      keep: 'Ik wil blijven werken aan projecten die aansluiten bij mijn eigen interesses en waarbij ik iets kan ontwikkelen dat daadwerkelijk gebruikt kan worden. Ook wil ik blijven testen, feedback vragen en mijn werk steeds verder verbeteren.',
      change: 'In de volgende sprint wil ik mij meer verdiepen in Make, n8n en API-koppelingen, zodat ik The Career Brief verder kan automatiseren. Daarnaast wil ik eerder controleren of mijn ideeën technisch haalbaar zijn en mijn onderzoek naar AI ook daadwerkelijk toepassen in de praktijk.',
    },
  },
  {
    id: 4,
    title: 'Sprint 4',
    period: '26 oktober 2026 tot en met 4 november 2026',
    showAndGrowDate: '4 november 2026',
    status: 'bezig',
    statusText: 'Huidige sprint',
    focus: 'Regelroute uitwerken tot een concreet onderwijsconcept, ethische randvoorwaarden onderzoeken en AI-tools testen in twee praktijkgerichte toepassingen',
    summary: 'In Sprint 4 werkte ik Regelroute uit: een toegankelijk concept voor jongeren van 12 tot 24 jaar dat betrouwbare informatie begrijpelijk maakt. Ik maakte een bedrijfsplan, koos de naam, claimde het domein en bouwde een eerste website. Daarnaast onderzocht ik de ethische risico’s van AI voor jongeren, ontwikkelde ik met Codex ETHICHECK, bouwde ik met Microsoft Copilot Agent Builder een mailboxagent en maakte ik met een AI-agent een kennisclip over RegelRoute.',
    researched: 'Ik onderzocht hoe Regelroute kan worden ingezet binnen het onderwijs en welke risico’s daarbij aandacht vragen. Mijn risicoanalyse richtte zich op privacy van minderjarigen, bronbetrouwbaarheid, transparantie en toegankelijkheid. Per risico formuleerde ik maatregelen en ik onderbouwde het onderzoek met officiële bronnen, waaronder de Autoriteit Persoonsgegevens en de Rijksoverheid. Ook onderzocht ik Codex als programmeerhulpmiddel, werkte ik een workshop over AI-video uit en legde ik vast waarom Copilot Studio niet beschikbaar was: voor mijn werkomgeving ontbreekt de benodigde licentie.',
    created: 'Ik werkte het bedrijfsplan van Regelroute uit, koos de naam, claimde het domein en bouwde de eerste website: https://regelroute.vercel.app/. Daarnaast ontwikkelde ik met Codex ETHICHECK, maakte ik met Microsoft Copilot Agent Builder een mailboxagent voor mijn manager en produceerde ik met Claude Code, Remotion, ElevenLabs en mlx-whisper een kennisclip over RegelRoute.',
    learned: 'Ik heb geleerd hoe ik een eigen idee kan vertalen naar een bedrijfsplan, prototype en kennisclip. Ook heb ik nieuwe codingtools verkend, een AI-agent ingezet voor een concreet werkprobleem en geleerd hoe ik AI als technisch montageteam kan gebruiken terwijl ik zelf de regie en eindcontrole houd. Bij Regelroute heb ik beter leren nadenken over privacy, betrouwbaarheid, transparantie en toegankelijkheid voor jongeren. Daarnaast ontdekte ik dat de beschikbare licenties bepalen welke Copilot-mogelijkheden ik daadwerkelijk kan gebruiken.',
    presentationUrl: '',
    learningOutcomes: ['LU2', 'LU3', 'LU4', 'LU5'],
    evidenceIds: ['BEW-10', 'BEW-11', 'BEW-12', 'BEW-13', 'BEW-14'],
    stories: [
      {
        id: 'US',
        description: 'Als ontwikkelaar van Regelroute wil ik mijn idee uitwerken tot een concreet onderwijsconcept en bespreken met een mogelijke opdrachtgever, zodat ik kan onderzoeken of het in de praktijk kansrijk is.',
        acceptanceCriteria: [
          'Bedrijfsplan voor Regelroute opgesteld.',
          'Naam gekozen, domein geclaimd en eerste website gebouwd: https://regelroute.vercel.app/.',
          'Idee besproken met Simulise; de contactpersoon wil meedenken en staat bij succes open voor verdere samenwerking.',
        ],
        qualityCriteria: [
          'Het plan beschrijft de doelgroep van 12 tot 24 jaar, het probleem, de oplossing en mogelijke inzet in het onderwijs.',
          'De website geeft het concept duidelijk weer.',
          'Contact met Simulise en gemaakte afspraken zijn als bewijs vast te leggen.',
        ],
      },
      {
        id: 'LS',
        description: 'Als student wil ik Codex gebruiken om zelfstandig een digitaal product te ontwikkelen, zodat ik ontdek hoe ik van een idee naar een werkende en online gepubliceerde website kan gaan.',
        acceptanceCriteria: [
          'Codex geïnstalleerd en gebruikt via de Terminal op mijn Mac.',
          'Met Codex een werkende website voor ETHICHECK ontwikkeld.',
          'De website gepubliceerd met Git, GitHub en Vercel.',
          'Ervaringen vastgelegd, inclusief de samenwerking tussen Codex, Next.js, TypeScript, Git, GitHub en Vercel.',
        ],
        qualityCriteria: [
          'Beschrijven welke taken daadwerkelijk met Codex zijn uitgevoerd, zoals bestanden maken, code aanpassen en feedback verwerken.',
          'Het resultaat controleren en bijsturen wanneer de werking of vormgeving niet aansloot bij het doel.',
          'Benoemen dat Codex niet zelfstandig de eerste Git-commit kon uitvoeren door beperkte toegangsrechten.',
          'Niet alleen beschrijven wat Codex heeft gemaakt, maar ook wat ik zelf heb beoordeeld, besloten en geleerd.',
        ],
      },
      {
        id: 'RS',
        description: 'Als ontwikkelaar van Regelroute wil ik ethische risico’s van AI voor jongeren onderzoeken, zodat het platform betrouwbare, veilige en begrijpelijke informatie kan bieden.',
        acceptanceCriteria: [
          'Een korte risicoanalyse gemaakt over privacy, bronbetrouwbaarheid, transparantie en toegankelijkheid.',
          'Per risico een concrete maatregel geformuleerd.',
          'Het onderzoek onderbouwd met officiële bronnen, waaronder de Autoriteit Persoonsgegevens en de Rijksoverheid, plus een voorbeeld van veilig chatbotgebruik.',
        ],
        qualityCriteria: [
          'Extra aandacht voor minderjarige gebruikers en minimale gegevensverzameling.',
          'Informatie via geselecteerde officiële bronnen en links controleerbaar maken.',
          'AI geeft uitleg en geen bindend juridisch of financieel advies; onzekerheid is zichtbaar.',
        ],
      },
      {
        id: 'US',
        description: 'Als medewerker wil ik voor mijn manager een Copilot-agent maken die haar mailbox overzichtelijker maakt, zodat zij actiepunten, prioriteiten en deadlines sneller herkent.',
        acceptanceCriteria: [
          'AI-agent Mailbox Assistant ontwikkeld binnen Microsoft 365 Copilot.',
          'Agent ingericht om het Postvak IN te analyseren, e-mails te classificeren en prioriteiten en actiepunten zichtbaar te maken.',
          'Vijf e-mailcategorieën, prioriteitsregels, gewenste actielijst en veiligheidsregels vastgelegd.',
        ],
        qualityCriteria: [
          'De agent analyseert en adviseert, maar verwijdert, verplaatst of archiveert geen e-mails zelfstandig.',
          'De agent verzint geen ontbrekende informatie, zoals een deadline, en gebruikt alleen mailboxgegevens binnen de toegestane organisatieomgeving en rechten.',
          'De poster en toelichting bevatten geen vertrouwelijke mailinhoud; de werking en ontwerpkeuzes zijn wel controleerbaar beschreven.',
        ],
      },
      {
        id: 'US',
        description: 'Als student wil ik met een AI-agent een korte kennisclip over RegelRoute maken, zodat ik leer hoe ik AI kan inzetten voor script, stem, montage en animatie terwijl ik zelf de inhoud en eindcontrole behoud.',
        acceptanceCriteria: [
          'Een kennisclip over RegelRoute gemaakt voor het Show & Grow-moment.',
          'De workshoproute voor een eigen videostudio daadwerkelijk uitgevoerd met Claude Code, Remotion, ElevenLabs en mlx-whisper.',
          'Een liggende video van 30 seconden met ondertitels, schermbeelden, animaties en mijn eigen stemkloon opgeleverd.',
          'De video lokaal gerenderd en als bewijs toegevoegd.',
        ],
        qualityCriteria: [
          'Ik blijf verantwoordelijk voor script, richting, feedback en eindcontrole; de AI-agent voert het technische montagewerk uit.',
          'Alleen verzonnen gegevens en eigen beeld- en geluidsmateriaal gebruiken; geen echte persoonsgegevens verwerken.',
          'Veiligheidsregels vastleggen voor toestemming, kosten, uploaden, API-gebruik en het label "Gemaakt met AI".',
          'Iedere preview controleren en feedback vertalen naar concrete verbeteringen in de video.',
        ],
      },
    ],
    feedback: [
      {
        date: 'Sprint 4',
        from: 'Contactpersoon Simulise',
        feedback: 'Positief over het idee van Regelroute. De contactpersoon wil meedenken en staat bij een werkend concept open voor verdere uitwerking. Ook gaf hij aan dat het concept visueel mooi is.',
        action: 'Het gesprek en contact vastleggen, het concept verder toetsen en nog geen formele opdracht of samenwerking claimen.',
      },
      {
        date: 'Sprint 4',
        from: 'Steven Heijn',
        feedback: 'Het concept van Regelroute.nl is leuk en ziet er mooi uit. Hij adviseerde om te onderzoeken of het ook in PHP gebouwd kan worden en om per leeftijd verder te kijken dan de standaardinformatie, zodat het concept aantrekkelijker wordt.',
        action: 'Onderzoeken welke mogelijkheden per leeftijd kunnen worden toegevoegd en in de volgende sprint één leeftijdsgroep verder uitwerken.',
      },
    ],
    mastery: [
      {
        outcome: 'LU2',
        title: 'Praktijkgerichte AI oplossing ontwerpen, realiseren en presenteren',
        level: 'V',
        evidence: 'Ik heb de eerste website en het bedrijfsplan van Regelroute uitgewerkt. Daarmee heb ik een eigen idee vertaald naar een concreet concept en prototype dat ik met een mogelijke opdrachtgever kan bespreken.',
      },
      {
        outcome: 'LU3',
        title: 'Ethiek en verantwoord AI gebruik beoordelen',
        level: 'V',
        evidence: 'Ik heb de ethische risico’s van Regelroute afgebakend: privacy van minderjarigen, betrouwbaarheid, transparantie en toegankelijkheid. Hiervoor heb ik een risicoanalyse met maatregelen en officiële bronnen afgerond.',
      },
      {
        outcome: 'LU4',
        title: 'AI tools en technieken gebruiken',
        level: 'V',
        evidence: 'Ik heb Codex ontdekt en verkend, gewerkt met Microsoft Copilot Agent Builder en een AI-agent ingezet voor het maken van een kennisclip met Claude Code, Remotion, ElevenLabs en mlx-whisper. Copilot Studio was niet beschikbaar vanwege een ontbrekende licentie.',
      },
      {
        outcome: 'LU5',
        title: 'Zelfstandig en zelfsturend werken',
        level: 'V',
        evidence: 'Ik heb zelf het idee voor Regelroute ontwikkeld, het bedrijfsplan en prototype gemaakt, een mogelijke opdrachtgever benaderd en de productie van een kennisclip geregisseerd. Ik hield de eindcontrole bij het werken met Codex, Copilot en de video-agent en heb n8n bewust doorgeschoven naar Sprint 5.',
      },
    ],
    reflection: {
      date: 'Sprint 4',
      learned: 'Ik heb geleerd hoe ik een eigen concept kan omzetten naar een bedrijfsplan, prototype en kennisclip, nieuwe codingtools kan verkennen en AI-agents kan inzetten voor zowel een concreet werkprobleem als technisch videowerk.',
      keep: 'Ik wil blijven werken vanuit echte problemen, zelfstandig experimenteren en vroeg feedback ophalen bij mensen uit de praktijk.',
      change: 'Ik wil nauw samenwerken met de eigenaar van Simulise om het idee verder uit te werken. Daarnaast wil ik binnen het bedrijf waar ik werk vragen naar meer licenties, zodat ik meer mogelijkheden kan uitvoeren en testen.',
    },
  },
  {
    id: 5,
    title: 'Sprint 5',
    period: '9 november 2026 tot en met 18 november 2026',
    showAndGrowDate: '18 november 2026',
    status: 'gepland',
    statusText: 'Nog te starten',
    focus: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 5]',
    summary: '[Korte samenvatting wordt ingevuld na Sprint 5]',
    researched: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 5]',
    created: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 5]',
    learned: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 5]',
    presentationUrl: '',
    learningOutcomes: [],
    evidenceIds: [],
  },
  {
    id: 6,
    title: 'Sprint 6',
    period: '23 november 2026 tot en met 2 december 2026',
    showAndGrowDate: '2 december 2026',
    status: 'gepland',
    statusText: 'Nog te starten',
    focus: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 6]',
    summary: '[Korte samenvatting wordt ingevuld na Sprint 6]',
    researched: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 6]',
    created: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 6]',
    learned: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 6]',
    presentationUrl: '',
    learningOutcomes: [],
    evidenceIds: [],
  },
  {
    id: 7,
    title: 'Sprint 7',
    period: '7 december 2026 tot en met 16 december 2026',
    showAndGrowDate: '16 december 2026',
    status: 'gepland',
    statusText: 'Nog te starten',
    focus: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 7]',
    summary: '[Korte samenvatting wordt ingevuld na Sprint 7]',
    researched: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 7]',
    created: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 7]',
    learned: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 7]',
    presentationUrl: '',
    learningOutcomes: [],
    evidenceIds: [],
  },
  {
    id: 8,
    title: 'Sprint 8',
    period: '4 januari 2027 tot en met 13 januari 2027',
    showAndGrowDate: '13 januari 2027',
    status: 'gepland',
    statusText: 'Nog te starten',
    focus: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 8]',
    summary: '[Korte samenvatting wordt ingevuld na Sprint 8]',
    researched: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 8]',
    created: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 8]',
    learned: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 8]',
    presentationUrl: '',
    learningOutcomes: [],
    evidenceIds: [],
  },
];

export let initialEvidenceItems: EvidenceItem[] = [
  {
    id: 'BEW-01',
    title: 'Ontwerp en Bouw van dit Digitale Portfolio',
    description: 'Doel\nIk wilde een eigen plek maken waar coaches en medestudenten snel kunnen zien wie ik ben, wat ik tijdens de minor doe en hoe mijn sprints, bewijzen en leeruitkomsten bij elkaar horen.\n\nAanpak\nIk begon met vibe-coding in Google AI Studio om snel een eerste opzet, onderdelen en functies uit te proberen. Daarna stapte ik over naar Claude, omdat dit model mijn wensen voor rustige, warme kleuren en een nette uitstraling beter vertaalde naar een logische structuur. Vervolgens opende ik de code lokaal in Visual Studio Code, zodat ik zelf grip hield op de bestanden. Ik maakte een GitHub-repository voor versiebeheer en koppelde die aan Vercel, zodat wijzigingen automatisch live worden gezet.\n\nControle\nVoor de oplevering testte ik de website op mobiel en desktop. Ik controleerde of menu\'s, knoppen en teksten niet verspringen of buiten beeld vallen. Ook maakte ik op de website duidelijk welke onderdelen mijn eigen werk zijn en waar AI heeft geholpen bij programmeren en stylen.',
    summary: 'Ik ontwierp en bouwde een live portfoliowebsite en hield daarbij zelf de regie over structuur, code, versiebeheer, testen en publicatie.',
    type: 'prototype',
    platform: 'Vercel (Live Website)',
    externalUrl: '#',
    sprintId: 1,
    learningOutcomes: ['LU4', 'LU5'],
    date: 'In bewerking',
  },
  {
    id: 'BEW-02',
    title: 'Onderzoek: Impact van AI op Organiseren en Samenwerken',
    description: 'Onderzoeksvraag\nIk onderzocht welke AI-toepassingen de meeste invloed hebben op organiseren, coördineren en samenwerken, zodat ik beter weet hoe mijn toekomstige rol als project- en organisatieprofessional kan veranderen.\n\nWerkwijze\nIk begon niet direct met een taalmodel, maar zocht eerst gericht bronnen via Perplexity. Ik gebruikte minimaal vier soorten bronnen: adviesbureaus, beroepsorganisaties, wetenschap, vakpers en softwareleveranciers. Uit die verkenning selecteerde ik tien bronnen om inhoudelijk te gebruiken. Daarna gaf ik OpenAI Deep Research een uitgebreide prompt met mijn rol, context, hoofdstukindeling en de eis dat het verslag alleen op deze tien bronnen gebaseerd mocht zijn.\n\nControle en verbetering\nIk liet hetzelfde onderzoek ook uitvoeren door Google Gemini en vergeleek beide uitkomsten. De Gemini-versie vond ik inhoudelijk te zwak en onvoldoende betrouwbaar, dus die heb ik niet gebruikt. Daarna controleerde ik zelf de bronnenlijst en ontdekte ik bij drie bronnen een verkeerde auteur of tijdschrift. Die gegevens corrigeerde ik handmatig naar APA7. Voor de laatste vormgeving en tekstuele afwerking gebruikte ik Claude, omdat dit model mijn aanwijzingen voor een zakelijke en overzichtelijke schrijfstijl het beste volgde.',
    summary: 'Ik onderzocht de gevolgen van generatieve AI voor organiseren en samenwerken, controleerde de AI-uitkomsten kritisch en verwerkte alleen gecontroleerde bronnen in mijn verslag.',
    type: 'document',
    platform: 'PDF',
    externalUrl: AI_RESEARCH_REPORT_PDF,
    sprintId: 1,
    learningOutcomes: ['LU1', 'LU4', 'LU5'],
    date: 'September 2026',
  },
  {
    id: 'BEW-03',
    title: 'Applicatie: AI Kennisassistent voor NEN en ISO normen in de Bouw',
    description: 'Aanleiding\nIk weet uit de praktijk dat bedrijven het lastig vinden om wijzigingen in bouwnormen bij te houden. Informatie staat verspreid over verschillende websites en nieuwsbrieven. Daarom koos ik dit als herkenbaar onderwerp om te onderzoeken wat AI hierbij kan betekenen.\n\nAanpak\nIk gaf Claude Code gerichte prompts om te verkennen wat het model al wist over NEN- en ISO-bouwnormen en welke opzet het voorstelde. Ik controleerde de antwoorden op fouten en verzonnen informatie. Daarna werkte ik samen met Claude een klein dashboard uit. Die dashboardvorm stelde Claude voor toen ik vroeg hoe normcontroles overzichtelijk kunnen worden weergegeven.\n\nResultaat en grens\nIk pushte het prototype naar GitHub en koppelde de repository aan Vercel, waardoor het zelfstandig live werd gezet op normchecker.vercel.app. Het doel was niet om meteen een product af te leveren dat een bedrijf binnen twee weken kan gebruiken. Ik wilde de volledige werkwijze ervaren: van lokaal bestand, via prompting en controle, naar een eerste online prototype. Daarom benoem ik ook eerlijk dat norminhoud altijd aan officiële bronnen moet worden getoetst.',
    summary: 'Ik bouwde zelfstandig een klein live prototype voor het volgen van NEN- en ISO-bouwnormen en onderzocht daarbij bewust de grenzen van wat AI hierover weet.',
    type: 'prototype',
    platform: 'Vercel',
    externalUrl: 'https://normchecker.vercel.app/',
    sprintId: 1,
    learningOutcomes: ['LU4', 'LU5'],
    date: 'September 2026',
  },
  {
    id: 'BEW-04',
    title: 'Verdieping: AI agents via DataCamp',
    description: 'Ik heb de DataCamp-cursus over AI-agents gedaan. Ik wilde begrijpen wat een AI-agent precies is, omdat ik denk dat ik er in mijn werk als organisator steeds vaker mee te maken krijg. Ik heb alle video\'s en oefeningen gedaan en de drie hoofdstukken samengevat in mijn eigen woorden, met een begrippenlijst erbij.\n\nIk leerde dat een agent uit drie delen bestaat. Het model is het brein: dat denkt na en bedenkt de stappen. De tools zijn het lichaam: daarmee kan de agent echt iets doen, zoals een agenda bekijken of een mail sturen. De orkestratie is de besturing: die houdt bij wat de agent al heeft gedaan en herhaalt de stappen tot het doel is bereikt. Een gewone chatbot geeft steeds hetzelfde antwoord, maar een agent bedenkt zelf wat er nodig is.\n\nIk leerde ook dat je niet altijd een agent nodig hebt. Is een vraag simpel en voorspelbaar, zoals "hoe volg ik mijn bestelling?", dan is een chatbot genoeg. Is het complex en verschilt het per situatie, dan past een agent beter. Bij een agent leerde ik ook over guardrails. Dat zijn regels die de agent veilig houden, bijvoorbeeld dat hij geen privégegevens deelt en dat een mens risicovolle acties eerst goedkeurt.\n\nDit heb ik gekoppeld aan mijn eigen werk bij events. "Wanneer is de volgende masterclass?" kan een chatbot beantwoorden. Maar als een spreker wegvalt, moet iemand in agenda\'s en mails kijken, een vervanger zoeken en de planning en de zaal checken. Dat is werk voor een agent.\n\nWat ik hiervan meeneem: bij mijn eigen AI-oplossing kan ik nu bewust kiezen tussen een chatbot, een automatisering of een agent, in plaats van meteen voor het moeilijkste te gaan. Dat sluit aan op mijn onderzoek bij Blue Current. Daar kan ik nu kritisch kijken welk soort oplossing echt past.',
    summary: 'Ik maakte een uitgebreide samenvatting van de DataCamp-cursus, inclusief begrippenlijst en een onderbouwde vertaling van workflows versus agents naar mijn werk bij ABN AMRO en mijn minor.',
    type: 'document',
    platform: 'DataCamp',
    externalUrl: DATACAMP_AI_AGENTS_URL,
    pdfUrl: DATACAMP_SUMMARY_PDF,
    imageUrl: DATACAMP_COMPLETION_IMAGE,
    sprintId: 2,
    learningOutcomes: ['LU4', 'LU5'],
    date: 'September 2026',
  },
  {
    id: 'BEW-05',
    title: 'Onderzoek: AI kansen voor Blue Current',
    description: 'Ik heb onderzoek gedaan naar Blue Current, een laadpalenbedrijf uit Utrecht. Ik wil daar een AI-opdracht doen. Voor het intakegesprek wilde ik eerst weten wat ze al doen, zodat ik niets bedenk wat ze al hebben.\n\nIk heb daarvoor verschillende soorten bronnen naast elkaar gelegd: hun website, hun handleiding, rapporten over de laadmarkt en wetenschappelijk onderzoek. Zo kon ik controleren of dingen echt kloppen. Een taalmodel heb ik gebruikt om te vergelijken, maar niet als bron.\n\nIk ontdekte dat Blue Current al slim laadt. Het laadvermogen past zich automatisch aan als er te veel stroom wordt gebruikt, en er zijn laadprofielen, bijvoorbeeld voor zonne-energie. Dat is slim, maar het is nog geen AI, want het zijn vaste regels. Wel gebruiken ze al één echte AI-tool: Planbot van Bessy. Die plant afspraken voor servicemonteurs. Of de chat op hun website AI is, kon ik nergens vinden. Daarom schrijf ik dat niet op als feit, maar vraag ik het in het intakegesprek.\n\nOp basis hiervan zie ik twee ideeën die goed passen. Het eerste is voorspellend onderhoud: een model voorspelt welke laadpunten binnenkort uitvallen. Zo voorkom je storingen, terwijl Planbot pas werkt nadat een klant iets meldt. Het tweede is voorspellend slim laden: het systeem kijkt vooruit, bijvoorbeeld naar verbruik of vertrektijd, in plaats van alleen te reageren. Beide passen bij hun groei en bij de drukte op het stroomnet.\n\nIk heb drie dingen geleerd. Eén: slim is niet hetzelfde als AI. Twee: check eerst wat er al is voordat je een idee bedenkt. Drie: of mijn idee kan, hangt af van de data die ik mag gebruiken. Dat ga ik nu vragen in het intakegesprek.',
    summary: 'Ik onderzoek Blue Current en werk drie haalbare AI-toepassingen en een gestructureerde intakevragenlijst uit.',
    type: 'document',
    platform: 'PDF',
    externalUrl: BLUE_CURRENT_RESEARCH_PDF,
    sprintId: 2,
    learningOutcomes: ['LU4', 'LU5'],
    date: 'September 2026',
  },
  {
    id: 'BEW-06',
    title: 'Prototypepresentatie aan Ronald Boiten',
    description: 'Ik heb een website gebouwd voor Ronald Boiten. Hij is grafisch designer en boekontwerper. Hij wist niet hoe hij zijn eigen website moest aanpassen, en daar ben ik mee begonnen.\n\nEerst heb ik onderzocht wat zijn stijl is, zodat ik die in de website kon verwerken. Daarna maakte ik een demo om te laten zien wat er allemaal mogelijk is. Zo kwam ik erachter dat zijn website geen webshop is, maar een etalage en een portfolio. Zijn opdrachten komen via via binnen. Mensen die zijn naam horen, moeten dus meteen zien wat zijn stijl is.\n\nIk heb de website gemaakt met Claude Code en daarna verder gewerkt in Visual Studio Code. Ik had meerdere feedbackmomenten met Ronald. Zijn feedback ging over de fotografie, de lengte van de teksten en de typografie.\n\nIk heb hier vier dingen van geleerd.\n\nEén: eerst begrijpen wat de klant nodig heeft, dan pas bouwen. Door onderzoek te doen en een demo te laten zien, bleek dat Ronald een etalage nodig had en geen webshop. Zo heb ik voorkomen dat ik iets verkeerds bouwde.\n\nTwee: een demo werkt beter dan uitleg. Ronald is geen techneut. Toen hij zag wat er kon, kon hij veel makkelijker zeggen wat hij wilde.\n\nDrie: techniek en veiligheid uitleggen in gewone taal. Ik heb hem steeds verteld wat er mogelijk is en hoe veilig de website is, zonder moeilijke woorden. Hij moest het begrijpen om goede keuzes te kunnen maken.\n\nVier: een klantproject loopt door, ook als mijn sprint klaar is. De website is nog niet af, want Ronald moet nog foto\'s aanleveren. Daarom heb ik een plan gemaakt dat over meerdere sprints past. In sprint 3 test ik eerst het ontwerp met gebruikers. Daarna bouw ik de beheeromgeving en de backend, zodat hij zijn site straks zelf kan aanpassen. Later wil hij ook links toevoegen naar webshops waar je zijn boeken kunt bestellen.',
    summary: 'Ik presenteer het werkende portfolio-prototype aan Ronald Boiten en vertaal zijn feedback naar concrete vervolgstappen.',
    type: 'presentatie',
    platform: 'Vercel',
    externalUrl: 'https://boiten-boekprojecten.vercel.app/',
    sprintId: 2,
    learningOutcomes: ['LU2', 'LU4', 'LU5'],
    date: 'September 2026',
  },
  {
    id: 'BEW-07',
    title: 'AI workflow: The Career Brief',
    description: 'Aanleiding\nIk wil wekelijks zelfstandig op de hoogte blijven van actuele ontwikkelingen binnen AI, business en mijn toekomstige werkveld. Daarom bedacht ik The Career Brief: een persoonlijk weekmagazine waarin een AI-workflow nieuws en ontwikkelingen onderzoekt, betrouwbare bronnen selecteert en de informatie overzichtelijk verwerkt. Met dit project leer ik tegelijk hoe ik AI-agents en automatisering kan inzetten om informatie te verzamelen, te verwerken en uiteindelijk via Gmail te versturen.\n\nAanpak\nIk ontwikkelde eerst een uitgebreide masterprompt met een vaste indeling van twaalf hoofdstukken, een cover en een samenvatting. In de prompt legde ik de rol, context, stappen, gewenste opmaak en eisen vast. Daarna maakte ik een proefeditie over de periode 6 tot en met 12 oktober 2026. De workflow bestaat uit een stappenplan met bronnen, een taalmodel, de verwerking van de artikelen en de verzending als HTML-mail. Ik werkte de inhoud, schrijfstijl en professionele opmaak uit en testte verschillende versies.\n\nControle en transparantie\nIk controleerde de links en feiten in de artikelen en legde gevonden fouten vast. Ook beschreef ik duidelijk welke onderdelen door AI zijn gedaan, welke keuzes ik zelf heb gemaakt en wat de grenzen van de workflow zijn. Ik testte de HTML-mail in Gmail op een iPhone op leesbaarheid en volledigheid en hield rekening met de limiet van Gmail. Zo controleerde ik niet alleen de inhoud, maar ook of het eindresultaat in de praktijk bruikbaar was.\n\nResultaat en grens\nHet resultaat is een volledige proefeditie van The Career Brief met twaalf vaste hoofdstukken, uitgebreide artikelen, een cover en een professionele HTML-opmaak. De prompt en het proces zijn zo opgebouwd dat ik ze later kan overzetten naar Make of n8n. De automatische verzending via Gmail werkt nog niet volledig. Ik ontdekte dat hiervoor aanvullende koppelingen en mogelijk een API nodig zijn. Daarom is de volgende stap in Sprint 4 om Make, n8n en API-koppelingen verder te onderzoeken.\n\nWat ik geleerd heb\nIk heb geleerd dat een goede prompt alleen niet genoeg is om een AI-toepassing volledig automatisch te laten werken. De workflow moet ook betrouwbare bronnen, controle, transparantie, veilige HTML en een technische verzendkoppeling bevatten. Ik heb daarnaast geleerd om een idee eerst als proefeditie te testen en pas daarna verder te automatiseren.',
    summary: 'Ik ontwikkelde The Career Brief als herbruikbare AI-workflow met twaalf hoofdstukken, controleerde de proefeditie in Gmail en bracht in kaart welke Make-, n8n- en API-koppelingen nog nodig zijn.',
    type: 'document',
    platform: 'PDF',
    externalUrl: '/assets/evidence/The_Career_Brief_Proefeditie_met_afbeeldingen.pdf',
    sprintId: 3,
    learningOutcomes: ['LU1', 'LU2', 'LU4', 'LU5'],
    date: '14 oktober 2026',
  },
  {
    id: 'BEW-08',
    title: 'Website versie 3 voor Ronald Boiten',
    description: 'Aanleiding\nIk wilde de bestaande website van Ronald Boiten verder ontwikkelen tot een overzichtelijke en professionele portfoliowebsite. Ronald is grafisch designer en boekontwerper. Uit de eerdere presentatie bleek dat zijn website vooral als etalage en portfolio moet werken, en niet als webshop. Bezoekers moeten zijn ontwerpen snel kunnen bekijken en meteen zijn persoonlijke stijl herkennen.\n\nAanpak\nIk verwijderde de winkelwagen, prijzen, bestelknoppen en verkoopteksten. Ook haalde ik het kopje "Over mij" weg, zodat Ronalds werk centraal staat. Ik paste de uitsneden en verhoudingen van de afbeeldingen aan, controleerde de typografie en marges en behield zijn lettertype en logo. Daarna testte ik het menu, de leesbaarheid en de navigatie op mobiel en desktop. De website is versie 3 en staat live op Vercel.\n\nReview en resultaat\nIk heb de website en het gebruik ervan samen met Ronald doorgenomen. Zijn ontwerpen zijn vanaf de homepage in maximaal één klik bereikbaar, de afbeeldingen zijn scherp en niet vervormd en er is geen horizontaal scrollen op mobiel. De webshoponderdelen zijn verwijderd, waardoor de website nu beter aansluit bij hoe Ronald zichzelf en zijn projecten wil presenteren.\n\nWat ik geleerd heb\nIk heb geleerd dat een ontwerp niet alleen mooi moet zijn, maar ook duidelijk moet laten zien wat een bezoeker kan doen. Door de website samen met Ronald te bekijken, kon ik keuzes maken over fotografie, tekstlengte, typografie en navigatie. Ik neem mee dat ik bij een volgend klantproject eerder test met echte gebruikers en feedback direct vertaal naar concrete verbeteringen. De volgende stap is het verder uitwerken van de beheeromgeving en backend, zodat Ronald de website later zelf kan aanpassen.',
    summary: 'Ik ontwikkelde versie 3 van Ronalds live portfoliowebsite op Vercel, verwijderde de webshoponderdelen en verbeterde de presentatie van zijn ontwerpen op basis van zijn feedback.',
    type: 'prototype',
    platform: 'Vercel',
    externalUrl: 'https://boiten-boekprojecten.vercel.app/',
    sprintId: 3,
    learningOutcomes: ['LU2', 'LU4', 'LU5'],
    date: '14 oktober 2026',
  },
  {
    id: 'BEW-09',
    title: 'Onderzoek: gratis AI cursussen en certificaten',
    description: 'Aanleiding\nIk wil bewuster kiezen welke AI-kennis en vaardigheden ik verder ontwikkel voor mijn toekomstige loopbaan. Daarom onderzocht ik welke gratis AI-cursussen en certificaten van erkende aanbieders aansluiten bij mijn interesses. Ik wilde niet alleen een cursus kiezen omdat die goed klinkt, maar ook weten wat het bewijs van afronding betekent en of de cursus mijn cv en LinkedIn-profiel echt kan versterken.\n\nAanpak\nIk maakte een vergelijkende tabel met minimaal vijf cursussen van minimaal drie aanbieders. Voor elke cursus keek ik naar relevantie voor mijn interesses en toekomstige werk, de erkenning van de aanbieder, kosten, tijdsinvestering, niveau en het bewijs dat ik na afronding ontvang. Daarnaast legde ik het verschil uit tussen een deelnamebewijs, badge, certificaat en officiële certificering. Op basis van deze vergelijking stelde ik een onderbouwde top 3 samen van cursussen die ik wil volgen.\n\nControle en bronvermelding\nIk gebruikte AI om mogelijkheden te verkennen, maar controleerde de informatie daarna op de officiële cursuspagina\'s van de aanbieders. Zo controleerde ik of de cursus nog bestaat, wat de voorwaarden zijn en welk bewijs van afronding daadwerkelijk wordt gegeven. Ik legde de gebruikte taalmodellen en prompts vast in een bijlage en noteerde de gecontroleerde bronnen volgens APA 7. Hierdoor is duidelijk welke informatie uit het AI-onderzoek kwam en welke gegevens ik zelf heb geverifieerd.\n\nResultaat en keuze\nHet resultaat is een overzichtelijke vergelijking met minimaal vijf cursussen, een begrippenlijst over verschillende soorten certificaten en een onderbouwde top 3. De vergelijking helpt mij om een bewuste keuze te maken in plaats van willekeurig een cursus te starten. Ik kan de uitkomsten gebruiken om mijn verdere leerpad te plannen en relevante afgeronde cursussen later aan mijn cv en LinkedIn-profiel toe te voegen.\n\nWat ik geleerd heb\nIk heb geleerd dat een deelnamebewijs, badge, certificaat en officiële certificering niet hetzelfde betekenen. Ook heb ik geleerd dat ik AI-onderzoek altijd moet controleren op de officiële bron voordat ik een cursus als erkend of relevant presenteer. Door vooraf criteria vast te leggen, kan ik mijn keuze beter uitleggen en gerichter bepalen welke vaardigheden ik in Sprint 4 en daarna wil ontwikkelen.',
    summary: 'Ik vergeleek minimaal vijf gratis AI-cursussen van drie aanbieders, controleerde de informatie op officiële cursuspagina\'s en stelde een onderbouwde top 3 samen voor mijn verdere leerpad.',
    type: 'document',
    platform: 'PDF',
    externalUrl: '/assets/evidence/Onderzoeksrapport_AI-cursussen_en_certificaten_Jasmijn_Mesu.pdf',
    sprintId: 3,
    learningOutcomes: ['LU1', 'LU4', 'LU5'],
    date: '14 oktober 2026',
  },
  {
    id: 'BEW-10',
    title: 'Story 1: Regelroute, onderwijsconcept en prototype',
    description: `Voor Story 1 heb ik mijn idee voor RegelRoute uitgewerkt tot een concreet onderwijsconcept en een eerste werkend websiteprototype. RegelRoute is bedoeld voor jongeren van 12 tot 24 jaar die willen leren hoe ze belangrijke zaken in het volwassen leven zelf kunnen begrijpen en regelen. Denk aan een eerste bankrekening, salaris, DigiD, zorgverzekering, huurcontract en andere momenten waarop veel nieuwe informatie op hen afkomt.

De website geeft jongeren geen ingewikkelde uitleg in formele taal, maar maakt een situatie overzichtelijk in kleine stappen. De gebruiker kan een onderwerp of thema kiezen, de uitleg rustig doorlopen, oefenen met een voorbeeld en daarna bepalen welke vervolgstap nodig is. De website neemt geen officiële aanvraag over: RegelRoute helpt de gebruiker om voorbereid en zelfstandig naar de juiste instantie te gaan.

Ik heb eerst onderzocht welk probleem ik wilde oplossen en voor wie de website waardevol kan zijn. Daarna werkte ik het concept uit in een bedrijfsplan met de doelgroep, het probleem, de oplossing, de mogelijke onderwijswaarde en de manier waarop RegelRoute in het onderwijs gebruikt kan worden. Ik koos de naam RegelRoute, claimde het domein en werkte de eerste online versie uit op regelroute.vercel.app. Het concept heb ik ook besproken met een contactpersoon van Simulise, die wilde meedenken over de verdere ontwikkeling.

De website heb ik gemaakt met Claude Code. Ik gaf Claude Code in gewone taal uitleg over de doelgroep, de gewenste uitstraling, de inhoud en de functies. De agent hielp met de technische opbouw, de pagina's, de navigatie en de interactieve onderdelen. Ik bleef zelf verantwoordelijk voor de keuzes: ik controleerde de teksten, keek of de pagina's logisch werkten, bepaalde welke informatie wel en niet in het prototype hoorde en stuurde bij wanneer iets niet aansloot bij jongeren of bij het doel van RegelRoute.

Voor de visuele identiteit heb ik zelf collages gemaakt in Canva. Deze collages heb ik daarna in de website verwerkt. Daardoor is de vormgeving niet alleen door AI bedacht, maar bestaat het eindresultaat uit mijn eigen beeldkeuzes, composities en creatieve uitwerking in Canva, gecombineerd met de technische uitvoering met Claude Code. De collages ondersteunen de verschillende situaties en geven de website een herkenbare en warme uitstraling.

In het prototype heb ik bewust aandacht besteed aan begrijpelijkheid en veiligheid. De teksten zijn laagdrempelig geschreven, de route door de website is overzichtelijk en voorbeelden worden duidelijk als voorbeeld herkenbaar gemaakt. Ik gebruik geen echte persoonsgegevens en laat zien dat officiële aanvragen altijd door de jongere zelf bij de betreffende instantie worden gedaan. Daarmee blijft RegelRoute een hulpmiddel om te leren en oefenen, en geen systeem dat beslissingen of officiële handelingen van de gebruiker overneemt.

Het resultaat is een eerste werkend prototype waarmee ik mijn concept kan uitleggen en bespreken. Ik heb geleerd hoe ik een abstract idee kan vertalen naar een doelgroep, een onderwijsconcept, een visuele stijl en een online product. Ook heb ik ervaren dat Claude Code veel technisch werk kan uitvoeren, maar dat ik zelf de inhoud, het oordeel, de controle en de verantwoordelijkheid moet blijven houden. De website en de Canva-collages vormen samen het bewijs van mijn ontwerp- en ontwikkelproces.`,
    summary: 'Ik werkte RegelRoute uit tot een onderwijsconcept en eerste websiteprototype voor jongeren van 12 tot 24 jaar. Ik bouwde de website met Claude Code, maakte de collages zelf in Canva en verwerkte deze in het prototype.',
    type: 'prototype',
    platform: 'Regelroute',
    externalUrl: 'https://regelroute.vercel.app/#/',
    sprintId: 4,
    learningOutcomes: ['LU2', 'LU5'],
    date: 'Sprint 4 · oktober 2026',
  },
  {
    id: 'BEW-11',
    title: 'Story 2: Codex, verkenning als codingtool',
    description: `Tijdens deze sprint wilde ik ontdekken wat Codex kan en hoe ik het kan gebruiken om zelfstandig een digitaal product te ontwikkelen. Ik installeerde Codex op mijn Mac en leerde via de Terminal opdrachten te geven. Vanuit de gastles over AI en ethiek ontstond het idee voor ETHICHECK: een website waarmee gebruikers kunnen onderzoeken welke ethische aandachtspunten bij hun AI-idee of project spelen. De website geeft daarnaast uitleg over ethiek en verantwoord AI-gebruik.

Met Codex ontwikkelde ik ETHICHECK stap voor stap. Ik gaf instructies over de inhoud, functionaliteit en vormgeving en liet Codex de benodigde bestanden en code maken. Wanneer iets niet werkte of het ontwerp niet aansloot bij mijn bedoeling, gaf ik feedback en liet ik Codex aanpassingen uitvoeren. Daardoor begon ik tijdens het bouwen steeds beter te begrijpen hoe een website technisch is opgebouwd. Ik leerde werken met Terminal, Next.js en TypeScript en gebruikte uiteindelijk ook Git, GitHub en Vercel om ETHICHECK online te publiceren.

Ik liep tegen een beperking aan toen Codex niet zelfstandig mijn eerste Git commit kon uitvoeren door beperkte toegangsrechten. Daardoor ontdekte ik dat ik als gebruiker moet begrijpen wat een AI agent doet, welke handelingen toegang vereisen en wanneer ik zelf moet ingrijpen. Codex genereert dus niet alleen code: het kan tijdens verschillende onderdelen van softwareontwikkeling ondersteunen, maar ik blijf verantwoordelijk voor het uitleggen van mijn doel, het beoordelen van het resultaat en het begrijpen van de samenwerking tussen de gebruikte tools.

De twee visuele samenvattingen laten zien wat ik over Codex heb geleerd, waaronder de verschillende manieren van werken, de vergelijking met Claude Code, praktische functies en mijn eigen werkwijze.`,
    summary: 'Met Codex ontwikkelde en publiceerde ik ETHICHECK, een website over ethische aandachtspunten bij AI-ideeën. Ik leerde werken met Terminal, Next.js, TypeScript, Git, GitHub en Vercel en hield zelf de controle over keuzes, feedback en beoordeling.',
    type: 'document',
    platform: 'Codex, GitHub en Vercel',
    externalUrl: 'https://ethicheck.vercel.app/',
    imageUrls: [
      '/assets/evidence/Codex-Essentials-Infographic.png',
      '/assets/evidence/Codex-Lesson-Notes.png',
    ],
    sprintId: 4,
    learningOutcomes: ['LU4', 'LU5'],
    date: 'Sprint 4 · november 2026',
  },
  {
    id: 'BEW-12',
    title: 'Story 3: Ethische risicoanalyse voor Regelroute',
    description: `Voor mijn leerdoel ethiek onderzocht ik hoe ik AI verantwoord kan gebruiken binnen RegelRoute, mijn project voor jongeren over onderwerpen zoals DigiD, loonstroken, belastingen en zorgverzekeringen. Ik gebruikte de gastles van Levien Nordeman, Perplexity en ChatGPT Deep Research. De uitkomsten vergeleek ik met andere AI modellen en officiële bronnen van onder andere de Autoriteit Persoonsgegevens, de Rijksoverheid en het Europees Parlement.

Mijn belangrijkste inzicht is dat je niet alleen moet kijken naar wat AI kan, maar ook naar de gevolgen voor gebruikers. De vergelijking tussen de houthakker en de bioloog hielp mij hierbij: de houthakker kijkt naar het doel, terwijl de bioloog het hele systeem en bedoelde en onbedoelde gevolgen bekijkt. Daarom onderzocht ik wat er kan gebeuren als een chatbot verkeerde informatie geeft, persoonlijke gegevens verwerkt of jongeren afhankelijker maakt.

De belangrijkste risico’s voor RegelRoute zijn privacy, betrouwbaarheid, bias, transparantie en afhankelijkheid. Ik onderzocht hierbij de AVG, dataminimalisatie, privacy by design, hallucinaties en RAG. RAG kan antwoorden baseren op geselecteerde bronnen zoals DUO of de Belastingdienst, maar is geen garantie voor juistheid. Broncontrole en menselijke controle blijven daarom nodig. Ook moeten jongeren weten dat zij met AI praten en de uitkomst kritisch kunnen beoordelen. Dit vraagt om AI geletterdheid en begrijpelijke uitleg.

Ik verwerkte de risico’s in een risicomatrix en keek naar de AI Act, auteursrecht en kinderrechten. Met safety by design wil ik veiligheid al tijdens het ontwerp regelen. RegelRoute moet daarom wel uitleg geven en naar officiële bronnen verwijzen, maar geen financiële of juridische beslissingen nemen. Ik wil eerst werken met gecontroleerde uitleg en oefeningen en pas daarna onderzoeken of een beperkte AI assistent iets toevoegt. Een technisch goed werkende AI is niet automatisch verantwoord; als ontwikkelaar moet ik ook durven besluiten om iets nog niet te bouwen. De bijgevoegde risicoanalyse werkt deze keuzes verder uit.`,
    summary: 'Ethische risicoanalyse voor RegelRoute over privacy, betrouwbaarheid, bias, transparantie en afhankelijkheid, met aandacht voor privacy by design, RAG, AI geletterdheid en safety by design.',
    type: 'document',
    platform: 'PDF',
    externalUrl: '/assets/evidence/RegelRoute_Ethische_Risicoanalyse_Jasmijn_Mesu.pdf',
    sprintId: 4,
    learningOutcomes: ['LU3', 'LU2'],
    date: 'Sprint 4 · november 2026',
  },
  {
    id: 'BEW-13',
    title: 'Story 4: Copilot agent voor de mailbox',
    description: `Voor mijn manager bij ABN AMRO MeesPierson heb ik binnen Microsoft 365 Copilot een AI-agent ontwikkeld: de Mailbox Assistant. De aanleiding was een praktisch probleem: een mailbox kan door de hoeveelheid dagelijkse e-mails snel onoverzichtelijk worden. De agent analyseert het Postvak IN, herkent welke acties nodig zijn en helpt om prioriteiten te stellen. Het uitgangspunt is dat de inbox een werkvoorraad is en geen archief.

Ik heb de agent ingericht door eerst de rol en het doel te bepalen. Daarna heb ik vastgelegd dat een analyse standaard alleen het Postvak IN gebruikt. Ook ontwikkelde ik classificatieregels waarmee e-mails worden ingedeeld in vijf categorieën: actie nodig, belangrijk, controleren, nieuwsbrief of notificatie en kan worden gearchiveerd. Vervolgens voegde ik regels toe voor hoge, gemiddelde en lage prioriteit. Daarbij kijkt de agent onder andere naar deadlines, expliciete verzoeken en mogelijke risico's.

Om te voorkomen dat de agent alleen lange samenvattingen geeft, heb ik de gewenste output ingericht als een overzichtelijke actielijst met concrete vervolgstappen. Ook heb ik veiligheidsregels toegevoegd: de agent mag niet zelfstandig e-mails verwijderen, verplaatsen of archiveren en mag geen informatie verzinnen wanneer bijvoorbeeld een deadline ontbreekt. De agent analyseert en adviseert dus, maar voert niet zelfstandig mailboxacties uit.

De grootste uitdaging was het vertalen van een algemene wens naar concrete instructies. Ik moest vooraf bepalen wanneer een e-mail belangrijk is, welke prioriteit passend is en wanneer geen verdere actie nodig is. Hierdoor heb ik geleerd dat het bouwen van een AI-agent meer is dan een goede prompt schrijven: duidelijke kaders, controle en betrouwbaarheid zijn minstens zo belangrijk. De poster laat de rol, werking, classificatie, prioriteiten en veiligheidsgrenzen van de Mailbox Assistant zien. Vertrouwelijke mailinhoud is niet opgenomen in dit portfolio-bewijs.`,
    summary: 'Poster en toelichting van de Mailbox Assistant die ik binnen Microsoft 365 Copilot heb ingericht voor mijn manager bij ABN AMRO MeesPierson. De agent analyseert en classificeert e-mails, bepaalt prioriteiten en vertaalt deze naar een actielijst, binnen duidelijke veiligheidsgrenzen.',
    type: 'prototype',
    platform: 'Microsoft 365 Copilot',
    externalUrl: '/assets/evidence/AI-Mailbox-Assistant-poster.png',
    imageUrl: '/assets/evidence/AI-Mailbox-Assistant-poster.png',
    sprintId: 4,
    learningOutcomes: ['LU4', 'LU5'],
    date: 'Sprint 4 · november 2026',
  },
  {
    id: 'BEW-14',
    title: 'Story 5: Van idee tot video met een AI agent',
    description: `Op maandag 2 november 2026 heb ik de workshop "Van idee tot kennisclip met een AI-agent als montageteam" van Pascal Mariany uitgewerkt. Zijn uitgangspunt was: ik ben de regisseur en de AI-agent doet het technische montagewerk. De richting, smaak, verantwoordelijkheid en eindcontrole bleven bij mij.

Mijn doel was een kennisclip voor mijn Show & Grow-moment te maken over RegelRoute: mijn concept voor jongeren van 12 tot 24 jaar die willen begrijpen en regelen wat er in het echte leven op hen afkomt, zoals een eerste bankrekening, salaris, DigiD, zorgverzekering of huurcontract.

Ik heb slide 14, "In zes stappen je eigen videostudio", daadwerkelijk uitgevoerd op mijn MacBook Air (13-inch, M4, 16 GB, macOS Sequoia). Ik koos route A uit de workshop: stem en montage via de cloud en de agent, en het renderen lokaal op mijn laptop. Ik installeerde Homebrew, Node.js, ffmpeg, uv, Claude Code en Remotion. Daarnaast gebruikte ik dertien officiële Remotion-skills en mlx-whisper om gesproken woorden lokaal op de tijdlijn te zetten. Mijn projectmap bevat de code, schermbeelden, audio en huisregels in CLAUDE.md.

Voor de stem maakte ik in ElevenLabs een Instant Voice Clone van mijn eigen stem met een opname van 1 minuut en 56 seconden. Ik testte verschillende instellingen. Stabiliteit 70 klonk goed maar vlakker; de beste combinatie was Eleven v4 met stabiliteit 60 en gelijkenis 75. Voor de slotzin gebruikte ik stabiliteit 50, zodat "Leren begrijpen. Leren regelen." enthousiaster en vloeiender klonk. Ik leerde dat een stemkloon ook de energie en haperingen uit de opname overneemt.

De agent werkte in een vaste keten. Eerst schreef hij een script dat ik kon redigeren. Daarna genereerde hij de voice-over, bepaalde hij woordtijden uit de pauzes, bouwde hij kaarten en animaties in Remotion en maakte hij een preview. Avatar, muziek en publiceren heb ik bewust overgeslagen: die waren niet nodig voor deze video. Ik bekeek iedere preview zelf en gaf feedback. Claude Code vroeg steeds toestemming voor commando's en bestandswijzigingen; ik koos niet voor automatische modus.

In CLAUDE.md legde ik vaste regels vast: natuurlijk Nederlands, alleen verzonnen gegevens in beeld, eerst kosten schatten en mijn toestemming vragen, nooit uploaden, mailen of betalen zonder mijn toestemming, altijd een label "Gemaakt met AI" en mijn steminstellingen. Ook beperkte ik de rechten van de ElevenLabs API-sleutel. Toen een sleutel per ongeluk zichtbaar werd in een screenshot, heb ik die vervangen.

Na de eerste preview liet ik de positieve haak "Het echte leven leer je door het te doen." gebruiken, tekst passend maken op alle kaarten, de nepvraag duidelijk labelen met "Voorbeeld" en de lange pauze in de slotzin verkorten naar 0,17 seconde. De kaart "Huurcontract" kreeg dezelfde lettergrootte als de andere kaarten. Elke feedbackronde werd vertaald naar een vaste regel in CLAUDE.md, zodat ik dezelfde opmerking niet opnieuw hoef te maken.

Het resultaat is een liggende video van precies 30 seconden in 1920 x 1080 pixels en ongeveer 8 MB groot. De video bevat ondertitels, echte schermbeelden van mijn eigen website, een grote cursor met klik-effecten, kaarten en animaties, mijn eigen stemkloon en gedurende de hele video het label "Gemaakt met AI". De video legt RegelRoute uit met de stappen Ontdek, Begrijp, Oefen en Regel. Voor oefeningen gebruik ik verzonnen gegevens die als voorbeeld zijn gelabeld. Officiële aanvragen doet de gebruiker zelf bij de betreffende instantie.

Ik heb bewust verantwoord gewerkt: alleen mijn eigen stem is gebruikt, er staat geen muziek of logo van anderen in, de beelden komen van mijn eigen website en er zijn geen echte persoonsgegevens verwerkt. De video is nog niet gepubliceerd; er wordt niets geüpload of gedeeld zonder mijn toestemming. Het videobestand is als lokaal bewijs toegevoegd, zodat het resultaat direct bekeken kan worden.`,
    summary: 'Kennisclip van 30 seconden over RegelRoute, gemaakt met Claude Code, Remotion, ElevenLabs en mlx-whisper. Ik regisseerde de inhoud en feedback; de AI-agent deed het technische videowerk. Het resultaat bevat ondertitels, echte schermbeelden, mijn eigen stemkloon en het label "Gemaakt met AI".',
    type: 'video',
    platform: 'Lokale video',
    externalUrl: '/RegelRoute.mp4',
    sprintId: 4,
    learningOutcomes: ['LU2', 'LU3', 'LU4', 'LU5'],
    date: '2 november 2026',
  },
];
