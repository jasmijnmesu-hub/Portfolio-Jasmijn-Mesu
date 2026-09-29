/**
 * PORTFOLIO DATA - JASMIJN MESU
 * 
 * TIP VOOR JASMIJN:
 * Dit bestand bevat alle teksten, sprints, leeruitkomsten en bewijzen.
 * Hier kun je na elke sprint eenvoudig je nieuwe teksten, links en
 * het aantal behaalde leeruitkomsten aanpassen.
 */

import { StudentProfile, LearningOutcome, Sprint, EvidenceItem } from '../types';
import { supabase } from '../lib/supabase';

/**
 * Direct downloadbaar Excel-bestand in de /public map
 */
export const SPRINT_LOGBOEK_DOWNLOAD = '/Integraal_Sprint_Logboek_Officieel.xlsx';
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

export let learningOutcomes: LearningOutcome[] = [
  {
    id: 'LU1',
    code: 'LU1',
    title: 'AI-impact op de beroepspraktijk analyseren en evalueren',
    shortDescription: 'Onderzoeken hoe AI organisatorische en facilitaire werkprocessen verandert en kansen identificeren.',
    fullDescription: 'De student analyseert en evalueert systematisch welke impact artificiële intelligentie heeft op de huidige en toekomstige beroepspraktijk binnen het facilitaire werkveld, met specifieke focus op procesoptimalisatie, werkcoördinatie en mens-techniek interactie.',
    targetCount: 2,
    currentCount: 1,
  },
  {
    id: 'LU2',
    code: 'LU2',
    title: 'Praktijkgerichte AI-oplossing ontwerpen, realiseren en presenteren',
    shortDescription: 'Een tastbare, werkende AI-oplossing ontwerpen en bouwen die een concreet organisatorisch knelpunt oplost.',
    fullDescription: 'De student ontwerpt, realiseert en presenteert een iteratief getoetste AI-gedreven oplossing voor een authentiek praktijkvraagstuk. De oplossing verbindt behoeften van eindgebruikers met technische haalbaarheid en functionele bruikbaarheid.',
    targetCount: 4,
    currentCount: 2,
  },
  {
    id: 'LU3',
    code: 'LU3',
    title: 'Ethiek en verantwoord AI-gebruik beoordelen',
    shortDescription: 'Kritisch reflecteren op ethiek, privacy, transparantie en mensgerichte randvoorwaarden bij AI-inzet.',
    fullDescription: 'De student toetst AI-toepassingen aan ethische kaders, wet- en regelgeving zoals privacy en databescherming en maatschappelijke impact. Hierbij staat het borgen van mensgerichtheid, inclusie en bias-preventie centraal.',
    targetCount: 2,
    currentCount: 0,
  },
  {
    id: 'LU4',
    code: 'LU4',
    title: 'AI-tools en technieken gebruiken',
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
    status: 'bezig',
    statusText: 'Huidige sprint',
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
    status: 'gepland',
    statusText: 'Nog te starten',
    focus: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 3]',
    summary: '[Korte samenvatting wordt ingevuld na Sprint 3]',
    researched: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 3]',
    created: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 3]',
    learned: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 3]',
    presentationUrl: '',
    learningOutcomes: [],
    evidenceIds: [],
  },
  {
    id: 4,
    title: 'Sprint 4',
    period: '26 oktober 2026 tot en met 4 november 2026',
    showAndGrowDate: '4 november 2026',
    status: 'gepland',
    statusText: 'Nog te starten',
    focus: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 4]',
    summary: '[Korte samenvatting wordt ingevuld na Sprint 4]',
    researched: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 4]',
    created: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 4]',
    learned: '[Wordt door Jasmijn ingevuld aan het begin of einde van Sprint 4]',
    presentationUrl: '',
    learningOutcomes: [],
    evidenceIds: [],
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
    title: 'Applicatie: AI-Kennisassistent voor NEN- en ISO-normen in de Bouw',
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
    title: 'Verdieping: AI-agents via DataCamp',
    description: 'Doel\nMijn doel met de DataCamp-cursus "Introduction to AI Agents" was om de basisprincipes en architecturen van AI-agents te leren. Zo kan ik onderbouwen of en hoe een agentic aanpak waarde toevoegt aan mijn minor. Omdat ik vooral werk met no-code workflows in Make.com en n8n en met LLM\'s, wilde ik het verschil begrijpen tussen zo\'n vaste workflow en een echte AI-agent, en leren wanneer ik voor welke oplossing kies.\n\nAanpak\nIk doorliep de cursus aan de hand van drie hoofdstukken. In hoofdstuk 1 leerde ik wat een agent is, welke drie bouwstenen centraal staan (model, tools en orkestratie) en hoe het spectrum van agency loopt van eenvoudige scripts tot volledig zelfstandige agents. Hoofdstuk 2 ging over de TAO-cyclus (denken, handelen en observeren), het ReAct-framework, verschillende soorten tools en multi-agentsystemen, waaronder het managerpatroon en het gedecentraliseerde patroon. Dit hoofdstuk staat op 81%; de video "Wat zit er in de (tool) box?" en de herhaaloefening "ReAct: kun jij het?" staan nog open. In hoofdstuk 3 leerde ik over veilig en verantwoord werken met agents, met guardrails voor invoer, toolgebruik en uitvoer.\n\nControle\nVan alle stof maakte ik per hoofdstuk een uitgebreide en begrijpelijke samenvatting, met uitleg in gewone taal, een begrippenlijst en koppelingen naar mijn eigen werk bij ABN AMRO en mijn minor. Daarnaast schreef ik een vergelijkingsanalyse waarin ik mijn huidige workflow-aanpak afzet tegen een agentic aanpak voor mijn vakgebied. Het resultaat is een beginnersvriendelijke samenvatting van hoofdstuk 1 tot en met 3 met persoonlijke toepassing. De cursus is nog niet volledig afgerond: hoofdstuk 1 en 3 zijn voor 100% afgerond, hoofdstuk 2 staat op 81% en de twee openstaande onderdelen moet ik nog doen.',
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
    title: 'Onderzoek: AI-kansen voor Blue Current',
    description: 'Onderzoeksvraag\nIk onderzoek de bedrijfsactiviteiten, laadinfrastructuurdiensten en technologische context van Blue Current, zodat ik tijdens het eerste intakegesprek gerichte AI-toepassingen kan voorstellen.\n\nWerkwijze\nIk combineer openbare bronnen, zoals de website, nieuwsartikelen en LinkedIn, met een gerichte analyse via een taalmodel. Door deze bronnen en perspectieven met elkaar te vergelijken, werk ik minimaal drie realistische AI-kansen uit, bijvoorbeeld op het gebied van slim laden en netcongestie, voorspellend onderhoud en geautomatiseerde ondersteuning. Daarnaast stel ik een gestructureerde vragenlijst met vijf tot acht vragen op voor het intakegesprek.\n\nResultaat\nHet onderzoek biedt een onderbouwde basis voor een scherpe minoropdracht die realistisch aansluit op een praktijkvraagstuk met een looptijd van ongeveer vier maanden.',
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
    description: 'Doel\nIk presenteer het eerste werkende prototype van de vernieuwde portfoliowebsite en de gebruikte AI-systemen aan Ronald Boiten, zodat hij het ontwerp kan beoordelen aan de hand van zijn grafische identiteit.\n\nAanpak\nIk laat zien hoe de stijl, kleuren en boekprojecten in het prototype zijn verwerkt. Ook licht ik toe welke AI-tools ik per onderdeel heb ingezet en welke keuzes ik daarbij heb gemaakt. De afspraak en de presentatie zijn vastgelegd in het sprintlogboek.\n\nFeedback en vervolg\nRonald gaf gerichte feedback op de fotografie, de lengte van de teksten en de typografie. Deze feedback verwerk ik in Sprint 3. Daarin staat eerst gebruikersvalidatie van het ontwerp centraal; daarna richt ik mij op de technische beheeromgeving en de backend.',
    summary: 'Ik presenteer het werkende portfolio-prototype aan Ronald Boiten en vertaal zijn feedback naar concrete vervolgstappen.',
    type: 'presentatie',
    platform: 'Vercel',
    externalUrl: 'https://boiten-boekprojecten.vercel.app/',
    sprintId: 2,
    learningOutcomes: ['LU2', 'LU4', 'LU5'],
    date: 'September 2026',
  },
];

interface PortfolioContentRecord {
  profile: StudentProfile;
  learning_outcomes: LearningOutcome[];
  sprints: Sprint[];
  evidence: EvidenceItem[];
}

export async function loadPortfolioData(): Promise<boolean> {
  if (!supabase) return false;

  const { data, error } = await supabase
    .from('portfolio_content')
    .select('profile, learning_outcomes, sprints, evidence')
    .eq('id', 'main')
    .maybeSingle();

  if (error || !data) return false;

  const content = data as PortfolioContentRecord;
  Object.assign(studentProfile, content.profile);
  learningOutcomes = content.learning_outcomes;
  sprintsData = content.sprints;
  initialEvidenceItems = content.evidence;
  const datacampEvidence = initialEvidenceItems.find((item) => item.id === 'BEW-04');
  if (datacampEvidence) {
    Object.assign(datacampEvidence, {
      platform: 'DataCamp',
      externalUrl: DATACAMP_AI_AGENTS_URL,
      pdfUrl: DATACAMP_SUMMARY_PDF,
      imageUrl: DATACAMP_COMPLETION_IMAGE,
      description: 'Doel\nMijn doel met de DataCamp-cursus "Introduction to AI Agents" was om de basisprincipes en architecturen van AI-agents te leren. Zo kan ik onderbouwen of en hoe een agentic aanpak waarde toevoegt aan mijn minor. Omdat ik vooral werk met no-code workflows in Make.com en n8n en met LLM\'s, wilde ik het verschil begrijpen tussen zo\'n vaste workflow en een echte AI-agent, en leren wanneer ik voor welke oplossing kies.\n\nAanpak\nIk doorliep de cursus aan de hand van drie hoofdstukken. In hoofdstuk 1 leerde ik wat een agent is, welke drie bouwstenen centraal staan (model, tools en orkestratie) en hoe het spectrum van agency loopt van eenvoudige scripts tot volledig zelfstandige agents. Hoofdstuk 2 ging over de TAO-cyclus (denken, handelen en observeren), het ReAct-framework, verschillende soorten tools en multi-agentsystemen, waaronder het managerpatroon en het gedecentraliseerde patroon. Dit hoofdstuk staat op 81%; de video "Wat zit er in de (tool) box?" en de herhaaloefening "ReAct: kun jij het?" staan nog open. In hoofdstuk 3 leerde ik over veilig en verantwoord werken met agents, met guardrails voor invoer, toolgebruik en uitvoer.\n\nControle\nVan alle stof maakte ik per hoofdstuk een uitgebreide en begrijpelijke samenvatting, met uitleg in gewone taal, een begrippenlijst en koppelingen naar mijn eigen werk bij ABN AMRO en mijn minor. Daarnaast schreef ik een vergelijkingsanalyse waarin ik mijn huidige workflow-aanpak afzet tegen een agentic aanpak voor mijn vakgebied. Het resultaat is een beginnersvriendelijke samenvatting van hoofdstuk 1 tot en met 3 met persoonlijke toepassing. De cursus is nog niet volledig afgerond: hoofdstuk 1 en 3 zijn voor 100% afgerond, hoofdstuk 2 staat op 81% en de twee openstaande onderdelen moet ik nog doen.',
      summary: 'Ik maakte een uitgebreide samenvatting van de DataCamp-cursus, inclusief begrippenlijst en een onderbouwde vertaling van workflows versus agents naar mijn werk bij ABN AMRO en mijn minor.',
    });
  }
  return true;
}
