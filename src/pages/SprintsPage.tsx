import React from 'react';
import { sprintsData as sprints, initialEvidenceItems, SPRINT_LOGBOEK_DOWNLOAD } from '../data/portfolioData';
import { Download, ExternalLink, Calendar, ArrowRight, Presentation, Flag, Sparkles } from 'lucide-react';

interface SprintsPageProps {
  onNavigateToEvidence: (sprintId?: number) => void;
}

export const SprintsPage: React.FC<SprintsPageProps> = ({ onNavigateToEvidence }) => {
  return (
    <div className="space-y-12 py-6 md:py-10">
      
      {/* Header */}
      <div className="border-b border-[#1B2A24]/10 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-8 bg-[#9C4A32]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
                Tweewekelijkse cycli · September 2026 tot en met Januari 2027
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2A24] tracking-tight">
              Sprinttijdlijn &amp; Voortgang
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#1B2A24]/80 leading-relaxed font-sans">
              Mijn minor verloopt in 8 sprints. Het allerbelangrijkste op deze tijdlijn zijn de <strong className="text-[#1B2A24] font-semibold">Show &amp; Grow momenten</strong>: de vaste mijlpalen waarop ik mijn voortgang presenteer en getoetst word door coach Jan van Rouwendal.
            </p>
          </div>

          {/* Direct Download Excel Sprint Logboek Button */}
          <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-5 lg:max-w-md shrink-0 space-y-2.5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9C4A32]">
              <Download className="w-4 h-4" />
              <span>Integraal Sprint Logboek (Excel)</span>
            </div>
            <p className="text-xs text-[#1B2A24]/80 leading-relaxed">
              Mijn volledige sprintplanning, urenverantwoording, risico&apos;s en zelfevaluaties direct downloaden.
            </p>
            <a
              id="btn-download-sprint-logbook"
              href={SPRINT_LOGBOEK_DOWNLOAD}
              download="sprintlogboek.xlsx"
              className="accent-btn inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-medium uppercase tracking-wider cursor-pointer"
              title="Download sprintlogboek.xlsx rechtstreeks"
            >
              <span>Download sprintlogboek.xlsx</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Jump Bar: 8 Show & Grow Mijlpalen */}
      <section className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between border-b border-[#1B2A24]/10 pb-2.5">
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-[#9C4A32]" />
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#1B2A24]">
              Overzicht Show &amp; Grow Mijlpalen (Sprint 1 tot en met 8)
            </h2>
          </div>
          <span className="text-[11px] text-[#9C4A32] font-semibold uppercase tracking-wider">
            Sprint 1 nu actief
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-1">
          {sprints.map((s) => {
            const isCurrent = s.status === 'bezig';

            return (
              <a
                key={s.id}
                href={`#sprint-node-${s.id}`}
                className={`p-2.5 text-left border transition-all cursor-pointer block ${
                  isCurrent
                    ? 'bg-[#EDE6D8] border-[#9C4A32] ring-2 ring-[#9C4A32]/25'
                    : 'bg-[#EDE6D8]/70 border-[#1B2A24]/10 hover:bg-[#EDE6D8] hover:border-[#1B2A24]/30'
                }`}
              >
                <span className={`block font-serif text-xs font-bold ${isCurrent ? 'text-[#9C4A32]' : 'text-[#1B2A24]'}`}>
                  Sprint {s.id}
                </span>
                <span className="block text-[11px] font-semibold text-[#1B2A24] mt-1 leading-tight">
                  {s.showAndGrowDate.replace(' 2026', '').replace(' 2027', '')}
                </span>
                <span className={`block text-[9px] uppercase tracking-wider font-medium mt-1 ${
                  isCurrent ? 'text-[#9C4A32] font-bold' : 'text-[#1B2A24]/50'
                }`}>
                  {isCurrent ? 'Nu Actief' : 'Nog te starten'}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* SPRINT TIJDLIJN: SHOW & GROW MOMENTEN ALS MEEST OPVALLENDE MIJLPALEN */}
      <div className="relative pl-4 sm:pl-8 md:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-4 md:before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#1B2A24]/15">
        {sprints.map((sprint) => {
          const isCurrent = sprint.status === 'bezig';
          const isPlanned = sprint.status === 'gepland';
          const evidenceCount = initialEvidenceItems.filter((e) => e.sprintId === sprint.id).length;

          return (
            <div
              key={sprint.id}
              id={`sprint-node-${sprint.id}`}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div 
                className={`absolute -left-4 sm:-left-8 md:-left-10 top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2 transition-colors ${
                  isCurrent
                    ? 'bg-[#9C4A32] border-[#EDE6D8] ring-4 ring-[#9C4A32]/25'
                    : 'bg-[#EDE6D8] border-[#1B2A24]/30 group-hover:border-[#9C4A32]'
                }`}
              >
                {isCurrent && (
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse" />
                )}
              </div>

              {/* Sprint Card with Show & Grow Milestone as Central Focus */}
              <div
                className={`bg-[#CEC5B5] border transition-all p-6 sm:p-8 space-y-6 ${
                  isCurrent
                    ? 'border-[#9C4A32] ring-2 ring-[#9C4A32]/20 shadow-xs'
                    : 'border-[#1B2A24]/15 hover:border-[#1B2A24]/35'
                }`}
              >
                {/* PROMINENT SHOW & GROW MILESTONE BANNER */}
                <div className={`p-4 sm:p-5 border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isCurrent
                    ? 'bg-[#EDE6D8] border-[#9C4A32]'
                    : 'bg-[#EDE6D8]/80 border-[#1B2A24]/15'
                }`}>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Flag className="w-4 h-4 text-[#9C4A32]" />
                      <span className="text-xs uppercase tracking-[0.18em] font-bold text-[#9C4A32]">
                        Show &amp; Grow Beoordelingsmoment
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#9C4A32] text-white font-bold">
                          <Sparkles className="w-3 h-3" />
                          Huidige Mijlpaal
                        </span>
                      )}
                    </div>
                    
                    {/* The prominent date itself */}
                    <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B2A24] tracking-tight">
                      {sprint.showAndGrowDate}
                    </div>

                    {/* Subordinate Sprint Period Context */}
                    <div className="text-xs text-[#1B2A24]/75 font-sans pt-0.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#1B2A24]/60" />
                      <span>Sprintperiode: {sprint.period}</span>
                    </div>
                  </div>

                  {/* Status & Sprint Tag */}
                  <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#1B2A24]/10">
                    <span className={`text-xs uppercase tracking-widest font-bold px-3 py-1 ${
                      isCurrent
                        ? 'bg-[#9C4A32] text-white'
                        : 'bg-[#CEC5B5] text-[#1B2A24]/80 border border-[#1B2A24]/15'
                    }`}>
                      {sprint.title}
                    </span>

                    <span className={`text-xs font-sans uppercase tracking-wider font-semibold ${
                      isCurrent ? 'text-[#9C4A32]' : 'text-[#1B2A24]/60'
                    }`}>
                      {sprint.statusText}
                    </span>
                  </div>
                </div>

                {/* Focus / Kernvraagstuk Header */}
                <div className="border-b border-[#1B2A24]/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]/60 block mb-1">
                    Focus van deze sprint
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1B2A24] leading-snug">
                    {sprint.focus}
                  </h3>
                </div>

                {/* Agile Breakdown: Onderzocht, Gemaakt, Geleerd */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* 1. Onderzocht */}
                  <div className="bg-[#EDE6D8] p-4 border border-[#1B2A24]/10 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-[#9C4A32]">
                        1. Onderzocht &amp; Verdiept
                      </span>
                      <p className={`text-xs text-[#1B2A24]/85 leading-relaxed mt-1 ${isPlanned ? 'italic text-[#1B2A24]/60' : ''}`}>
                        {sprint.researched}
                      </p>
                    </div>
                  </div>

                  {/* 2. Gemaakt */}
                  <div className="bg-[#EDE6D8] p-4 border border-[#1B2A24]/10 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-[#9C4A32]">
                        2. Gemaakt &amp; Opgeleverd
                      </span>
                      <p className={`text-xs text-[#1B2A24]/85 leading-relaxed mt-1 ${isPlanned ? 'italic text-[#1B2A24]/60' : ''}`}>
                        {sprint.created}
                      </p>
                    </div>
                  </div>

                  {/* 3. Geleerd */}
                  <div className="bg-[#EDE6D8] p-4 border border-[#1B2A24]/10 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-[#9C4A32]">
                        3. Geleerd &amp; Reflectie
                      </span>
                      <p className={`text-xs text-[#1B2A24]/85 leading-relaxed mt-1 ${isPlanned ? 'italic text-[#1B2A24]/60' : ''}`}>
                        {sprint.learned}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Gekoppelde Leeruitkomsten + Knoppen voor Presentatie en Bewijs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#1B2A24]/10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#1B2A24]/70 font-sans">
                      Aangetoonde leeruitkomsten:
                    </span>
                    {sprint.learningOutcomes.map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 bg-[#EDE6D8] border border-[#1B2A24]/10 text-[#9C4A32] font-serif font-bold text-xs"
                      >
                        {lu}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Knop: Bekijk Presentatie (Show & Grow) */}
                    {sprint.presentationUrl ? (
                      <a
                        href={sprint.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#EDE6D8] hover:bg-[#CEC5B5] text-[#1B2A24] border border-[#1B2A24]/15 hover:border-[#9C4A32] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <Presentation className="w-3.5 h-3.5 text-[#9C4A32]" />
                        <span>Bekijk presentatie</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#EDE6D8] text-[#1B2A24]/60 border border-[#1B2A24]/15 text-xs font-medium uppercase tracking-wider"
                        title="Presentatielink volgt zodra de Show & Grow presentatie klaar is"
                      >
                        <Presentation className="w-3.5 h-3.5 text-[#9C4A32]/60" />
                        <span>Presentatie volgt</span>
                      </span>
                    )}

                    {/* Knop: Bekijk bewijs */}
                    <button
                      onClick={() => onNavigateToEvidence(sprint.id)}
                      className="accent-btn inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Bekijk bewijs ({evidenceCount})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
