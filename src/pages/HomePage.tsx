import React from 'react';
import { NavTab } from '../types';
import { studentProfile, learningOutcomes, sprintsData, SPRINT_LOGBOEK_DOWNLOAD } from '../data/portfolioData';
import { PhotoFrame } from '../components/PhotoFrame';
import { ArrowRight, Download, Calendar, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const currentSprint = sprintsData.find((s) => s.status === 'bezig') || sprintsData[0];
  const totalDemonstrated = learningOutcomes.reduce((acc, curr) => acc + curr.currentCount, 0); // At 0
  const totalTarget = learningOutcomes.reduce((acc, curr) => acc + curr.targetCount, 0); // 18

  return (
    <div className="space-y-16 py-6 md:py-10">
      {/* Hero Section */}
      <section id="hero-section" className="border-b border-[#1B2A24]/10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left / Main Text column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-8 bg-[#9C4A32]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
                Portfolio Minor Futureproof met AI
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-[#1B2A24] tracking-tight">
              Het verbinden van <span className="italic">mensen</span>,<br className="hidden sm:inline" />
              organisatie en <span className="text-[#9C4A32]">AI</span>.
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-[#1B2A24]/90 leading-relaxed max-w-xl">
              &ldquo;Ik ben Jasmijn Mesu (23), studente Facility Management aan Zuyd Hogeschool. Mijn kracht en passie liggen in het organiseren, coördineren en verbeteren van processen, niet in de techniek zelf, maar in wat technologie voor mensen kan betekenen.&rdquo;
            </p>

            <div className="space-y-4 text-sm sm:text-base font-sans text-[#1B2A24]/80 leading-relaxed max-w-xl">
              <p>
                Welkom op mijn digitale portfolio voor de minor <strong className="font-medium text-[#1B2A24]">Futureproof met AI</strong> aan de Hogeschool Utrecht. Hier documenteer ik mijn tweewekelijkse sprints, onderzoeken, prototypes en reflecties waarmee ik aantoont dat ik de 5 minor-leeruitkomsten beheers.
              </p>
              <p>
                Tijdens de <span className="font-medium text-[#1B2A24]">Show &amp; Grow momenten</span> deel ik mijn voortgang met coach <span className="font-medium text-[#1B2A24]">Jan van Rouwendal</span>. Mijn ambitie is een eindbeoordeling <strong className="font-semibold text-[#9C4A32]">Boven Niveau</strong>.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <button
                id="btn-hero-sprints"
                onClick={() => onNavigate('sprints')}
                className="accent-btn px-7 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Ontdek mijn voortgang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-hero-leeruitkomsten"
                onClick={() => onNavigate('leeruitkomsten')}
                className="px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#1B2A24] bg-[#CEC5B5] hover:bg-[#C7BFAE] border border-[#1B2A24]/10 transition-colors cursor-pointer"
              >
                <span>Leeruitkomsten</span>
              </button>

              <a
                id="btn-hero-logboek"
                href={SPRINT_LOGBOEK_DOWNLOAD}
                download="sprintlogboek.xlsx"
                className="text-xs sm:text-sm font-medium border-b border-[#1B2A24] pb-1 hover:text-[#9C4A32] hover:border-[#9C4A32] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                title="Download sprintlogboek.xlsx rechtstreeks"
              >
                <Download className="w-4 h-4 text-[#9C4A32]" />
                <span>Download Sprint Logboek</span>
              </a>
            </div>
          </div>

          {/* Right column: Photo Frame & Status Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="max-w-sm mx-auto lg:max-w-none">
              <PhotoFrame
                id="hero-jasmijn-photo"
                defaultSrc={studentProfile.photoUrl || '/IMG_1185.jpg'}
                alt="Portretfoto van Jasmijn Mesu"
                caption="Facility Management Zuyd Hogeschool · Minor HU"
                aspectRatio="portrait"
              />
            </div>

            {/* Stat cards: Real current status at 0 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#CEC5B5] border border-[#1B2A24]/10">
                <div className="text-2xl sm:text-3xl font-serif mb-1 text-[#1B2A24]">
                  {String(totalDemonstrated).padStart(2, '0')}<span className="text-xs opacity-50 ml-1">/ {totalTarget}</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold opacity-60 text-[#1B2A24]">
                  LU Aangetoond (Nu 0)
                </div>
              </div>
              <div className="p-4 bg-[#CEC5B5] border border-[#1B2A24]/10">
                <div className="text-2xl sm:text-3xl font-serif mb-1 text-[#1B2A24]">
                  Sprint 1
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold opacity-60 text-[#1B2A24]">
                  Huidige Sprint
                </div>
              </div>
            </div>

            {/* Actuele Status Blok (Punt 5) */}
            <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-5 space-y-3.5">
              <div className="flex items-center justify-between border-b border-[#1B2A24]/10 pb-2.5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#9C4A32]">
                  Actuele Status
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EDE6D8] border border-[#1B2A24]/10 text-[11px] font-sans font-medium text-[#1B2A24]">
                  <Calendar className="w-3 h-3 text-[#9C4A32]" />
                  Sprint 1
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider opacity-60">Periode</span>
                    <span className="font-medium text-[#1B2A24]">{currentSprint.period}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider opacity-60">Show &amp; Grow</span>
                    <span className="font-medium text-[#9C4A32]">{currentSprint.showAndGrowDate}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#1B2A24]/10">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider opacity-60">Coach HU</span>
                    <span className="font-medium text-[#1B2A24]">Jan van Rouwendal</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider opacity-60">Status cyclus</span>
                    <span className="font-medium text-[#1B2A24]">Bezig</span>
                  </div>
                </div>
              </div>

              {/* Placeholder voor 2 tot 3 zinnen van Jasmijn */}
              <div className="pt-2 border-t border-[#1B2A24]/10">
                <span className="block text-[10px] uppercase tracking-wider font-bold text-[#1B2A24]/70 mb-1">
                  Waar ik nu mee bezig ben:
                </span>
                <p className="text-xs text-[#1B2A24]/75 italic bg-[#EDE6D8] p-3 border border-[#1B2A24]/10 leading-relaxed">
                  [Hier beschrijf ik in 2 tot 3 zinnen waar ik op dit moment concreet mee bezig ben binnen Sprint 1.]
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Pillars Overview Section (Punt 4: Witte bolletjes verwijderd) */}
      <section id="pillars-section" className="space-y-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-[#9C4A32]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
              Portfolio Structuur
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1B2A24]">
            Hoe deze portfolio is opgebouwd
          </h2>
          <p className="mt-2 text-sm text-[#1B2A24]/80 leading-relaxed">
            Voor coach Jan van Rouwendal en medestudenten: direct inzicht in mijn leerproces, de onderbouwing van de leeruitkomsten en de bewijsvoering per tweewekelijkse sprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Leeruitkomsten (bolletje verwijderd) */}
          <div 
            onClick={() => onNavigate('leeruitkomsten')}
            className="p-6 sm:p-7 bg-[#CEC5B5] border border-[#1B2A24]/10 hover:border-[#9C4A32]/50 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#9C4A32] block">
                5 Leeruitkomsten
              </span>
              <h3 className="font-serif text-xl text-[#1B2A24] group-hover:text-[#9C4A32] transition-colors">
                De 5 Leeruitkomsten
              </h3>
              <p className="text-xs text-[#1B2A24]/80 leading-relaxed">
                Overzicht van LU1 tot en met LU5 met bijbehorende competenties en de teller voor het behalen van de streefaantallen voor &lsquo;Boven Niveau&rsquo;.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#1B2A24]/10 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#9C4A32]">
              <span>Bekijk voortgang</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Sprints (bolletje verwijderd) */}
          <div 
            onClick={() => onNavigate('sprints')}
            className="p-6 sm:p-7 bg-[#CEC5B5] border border-[#1B2A24]/10 hover:border-[#9C4A32]/50 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#9C4A32] block">
                8 Sprints
              </span>
              <h3 className="font-serif text-xl text-[#1B2A24] group-hover:text-[#9C4A32] transition-colors">
                Sprints &amp; Voortgang
              </h3>
              <p className="text-xs text-[#1B2A24]/80 leading-relaxed">
                Tijdlijn van de 8 tweewekelijkse sprints: wat heb ik onderzocht, gemaakt en geleerd? Inclusief link naar het volledige Excel Sprint Logboek.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#1B2A24]/10 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#9C4A32]">
              <span>Bekijk sprints</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Bewijzen (bolletje verwijderd) */}
          <div 
            onClick={() => onNavigate('bewijzen')}
            className="p-6 sm:p-7 bg-[#CEC5B5] border border-[#1B2A24]/10 hover:border-[#9C4A32]/50 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#9C4A32] block">
                Bewijsvoering
              </span>
              <h3 className="font-serif text-xl text-[#1B2A24] group-hover:text-[#9C4A32] transition-colors">
                Bewijzen &amp; Bronnen
              </h3>
              <p className="text-xs text-[#1B2A24]/80 leading-relaxed">
                Galerij van externe bewijsstukken (OneDrive documenten, video&apos;s op YouTube, prototypes). Direct gekoppeld aan de leeruitkomsten.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#1B2A24]/10 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#9C4A32]">
              <span>Bekijk bewijsstukken</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Vision Banner (Punt 4: Placeholder voor Jasmijn en geen streepjes) */}
      <section className="bg-[#CEC5B5] border-l-2 border-[#9C4A32] border-y border-r border-[#1B2A24]/10 p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <span className="h-[1px] w-6 bg-[#9C4A32]" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
            Visie &amp; Uitgangspunt
          </span>
        </div>
        <h3 className="font-serif text-lg sm:text-xl text-[#1B2A24]">
          Mijn uitgangspunt voor deze minor
        </h3>
        <p className="text-sm text-[#1B2A24]/85 leading-relaxed max-w-3xl italic bg-[#EDE6D8] p-4 border border-[#1B2A24]/10">
          AI neemt in hoog tempo taken over die voorheen vanzelfsprekend mensenwerk waren, en die ontwikkeling gaat razendsnel. Zelf gebruik ik AI al dagelijks om slimmer en efficiënter te werken, maar de technische kant, het daadwerkelijk programmeren en bouwen van AI-oplossingen, is voor mij nog relatief onbekend terrein. En juist dát is wat ik tijdens deze minor wil leren: niet alleen AI toepassen als gebruiker, maar ook begrijpen en zelf kunnen bouwen wat er achter de schermen gebeurt.
        </p>
      </section>
    </div>
  );
};
