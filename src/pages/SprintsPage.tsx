import React, { useState } from 'react';
import { sprintsData as initialSprints, initialEvidenceItems, SPRINT_LOGBOEK_DOWNLOAD } from '../data/portfolioData';
import { Sprint } from '../types';
import { Download, ExternalLink, Calendar, ArrowRight, Presentation, Edit3, Check, Flag, Sparkles } from 'lucide-react';

interface SprintsPageProps {
  onNavigateToEvidence: (sprintId?: number) => void;
}

export const SprintsPage: React.FC<SprintsPageProps> = ({ onNavigateToEvidence }) => {
  const [sprints, setSprints] = useState<Sprint[]>(initialSprints);
  const [editingSprintId, setEditingSprintId] = useState<number | null>(null);

  // Quick edit buffers for Jasmijn
  const [editFields, setEditFields] = useState({
    researched: '',
    created: '',
    learned: '',
    presentationUrl: '',
  });

  const startEditing = (sprint: Sprint) => {
    setEditingSprintId(sprint.id);
    setEditFields({
      researched: sprint.researched,
      created: sprint.created,
      learned: sprint.learned,
      presentationUrl: sprint.presentationUrl || '',
    });
  };

  const saveEditing = (sprintId: number) => {
    setSprints((prev) =>
      prev.map((s) =>
        s.id === sprintId
          ? {
              ...s,
              researched: editFields.researched,
              created: editFields.created,
              learned: editFields.learned,
              presentationUrl: editFields.presentationUrl,
            }
          : s
      )
    );
    setEditingSprintId(null);
  };

  return (
    <div className="space-y-12 py-6 md:py-10">
      
      {/* Header */}
      <div className="border-b border-[#3D2B2F]/10 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-8 bg-[#B3543C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B3543C]">
                Tweewekelijkse cycli · September 2026 tot en met Januari 2027
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#3D2B2F] tracking-tight">
              Sprinttijdlijn &amp; Voortgang
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#3D2B2F]/80 leading-relaxed font-sans">
              Mijn minor verloopt in 8 sprints. Het allerbelangrijkste op deze tijdlijn zijn de <strong className="text-[#3D2B2F] font-semibold">Show &amp; Grow momenten</strong>: de vaste mijlpalen waarop ik mijn voortgang presenteer en getoetst word door coach Jan van Rouwendal.
            </p>
          </div>

          {/* Direct Download Excel Sprint Logboek Button */}
          <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-5 lg:max-w-md shrink-0 space-y-2.5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#B3543C]">
              <Download className="w-4 h-4" />
              <span>Integraal Sprint Logboek (Excel)</span>
            </div>
            <p className="text-xs text-[#3D2B2F]/80 leading-relaxed">
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
      <section className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between border-b border-[#3D2B2F]/10 pb-2.5">
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-[#B3543C]" />
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#3D2B2F]">
              Overzicht Show &amp; Grow Mijlpalen (Sprint 1 tot en met 8)
            </h2>
          </div>
          <span className="text-[11px] text-[#B3543C] font-semibold uppercase tracking-wider">
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
                    ? 'bg-[#F7F2E9] border-[#B3543C] ring-2 ring-[#B3543C]/25'
                    : 'bg-[#F7F2E9]/70 border-[#3D2B2F]/10 hover:bg-[#F7F2E9] hover:border-[#3D2B2F]/30'
                }`}
              >
                <span className={`block font-serif text-xs font-bold ${isCurrent ? 'text-[#B3543C]' : 'text-[#3D2B2F]'}`}>
                  Sprint {s.id}
                </span>
                <span className="block text-[11px] font-semibold text-[#3D2B2F] mt-1 leading-tight">
                  {s.showAndGrowDate.replace(' 2026', '').replace(' 2027', '')}
                </span>
                <span className={`block text-[9px] uppercase tracking-wider font-medium mt-1 ${
                  isCurrent ? 'text-[#B3543C] font-bold' : 'text-[#3D2B2F]/50'
                }`}>
                  {isCurrent ? 'Nu Actief' : 'Nog te starten'}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* SPRINT TIJDLIJN: SHOW & GROW MOMENTEN ALS MEEST OPVALLENDE MIJLPALEN */}
      <div className="relative pl-4 sm:pl-8 md:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-4 md:before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#3D2B2F]/15">
        {sprints.map((sprint) => {
          const isCurrent = sprint.status === 'bezig';
          const isPlanned = sprint.status === 'gepland';
          const isEditing = editingSprintId === sprint.id;
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
                    ? 'bg-[#B3543C] border-[#F7F2E9] ring-4 ring-[#B3543C]/25'
                    : 'bg-[#F7F2E9] border-[#3D2B2F]/30 group-hover:border-[#B3543C]'
                }`}
              >
                {isCurrent && (
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse" />
                )}
              </div>

              {/* Sprint Card with Show & Grow Milestone as Central Focus */}
              <div
                className={`bg-[#E7DFCF] border transition-all p-6 sm:p-8 space-y-6 ${
                  isCurrent
                    ? 'border-[#B3543C] ring-2 ring-[#B3543C]/20 shadow-xs'
                    : 'border-[#3D2B2F]/15 hover:border-[#3D2B2F]/35'
                }`}
              >
                {/* PROMINENT SHOW & GROW MILESTONE BANNER */}
                <div className={`p-4 sm:p-5 border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isCurrent
                    ? 'bg-[#F7F2E9] border-[#B3543C]'
                    : 'bg-[#F7F2E9]/80 border-[#3D2B2F]/15'
                }`}>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Flag className="w-4 h-4 text-[#B3543C]" />
                      <span className="text-xs uppercase tracking-[0.18em] font-bold text-[#B3543C]">
                        Show &amp; Grow Beoordelingsmoment
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#B3543C] text-white font-bold">
                          <Sparkles className="w-3 h-3" />
                          Huidige Mijlpaal
                        </span>
                      )}
                    </div>
                    
                    {/* The prominent date itself */}
                    <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B2F] tracking-tight">
                      {sprint.showAndGrowDate}
                    </div>

                    {/* Subordinate Sprint Period Context */}
                    <div className="text-xs text-[#3D2B2F]/75 font-sans pt-0.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#3D2B2F]/60" />
                      <span>Sprintperiode: {sprint.period}</span>
                    </div>
                  </div>

                  {/* Status & Sprint Tag */}
                  <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#3D2B2F]/10">
                    <span className={`text-xs uppercase tracking-widest font-bold px-3 py-1 ${
                      isCurrent
                        ? 'bg-[#B3543C] text-white'
                        : 'bg-[#E7DFCF] text-[#3D2B2F]/80 border border-[#3D2B2F]/15'
                    }`}>
                      {sprint.title}
                    </span>

                    <span className={`text-xs font-sans uppercase tracking-wider font-semibold ${
                      isCurrent ? 'text-[#B3543C]' : 'text-[#3D2B2F]/60'
                    }`}>
                      {sprint.statusText}
                    </span>
                  </div>
                </div>

                {/* Focus / Kernvraagstuk Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#3D2B2F]/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#3D2B2F]/60 block mb-1">
                      Focus van deze sprint
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#3D2B2F] leading-snug">
                      {sprint.focus}
                    </h3>
                  </div>

                  {/* Edit button */}
                  <button
                    onClick={() => (isEditing ? setEditingSprintId(null) : startEditing(sprint))}
                    className="self-start sm:self-auto p-1.5 text-[#3D2B2F]/70 hover:text-[#B3543C] bg-[#F7F2E9] border border-[#3D2B2F]/10 hover:border-[#B3543C] cursor-pointer transition-colors"
                    title="Bewerk teksten of presentatielink van deze sprint"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>

                {/* Agile Breakdown: Onderzocht, Gemaakt, Geleerd */}
                {isEditing ? (
                  <div className="space-y-4 pt-1">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#B3543C]">
                        1. Onderzocht &amp; Verdiept
                      </label>
                      <textarea
                        value={editFields.researched}
                        onChange={(e) => setEditFields({ ...editFields, researched: e.target.value })}
                        rows={3}
                        className="w-full text-xs font-sans p-3 bg-[#F7F2E9] border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#B3543C]">
                        2. Gemaakt &amp; Opgeleverd
                      </label>
                      <textarea
                        value={editFields.created}
                        onChange={(e) => setEditFields({ ...editFields, created: e.target.value })}
                        rows={3}
                        className="w-full text-xs font-sans p-3 bg-[#F7F2E9] border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#B3543C]">
                        3. Geleerd &amp; Reflectie
                      </label>
                      <textarea
                        value={editFields.learned}
                        onChange={(e) => setEditFields({ ...editFields, learned: e.target.value })}
                        rows={3}
                        className="w-full text-xs font-sans p-3 bg-[#F7F2E9] border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#B3543C]">
                        Show &amp; Grow Presentatie URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://canva.com/... of PowerPoint presentatielink"
                        value={editFields.presentationUrl}
                        onChange={(e) => setEditFields({ ...editFields, presentationUrl: e.target.value })}
                        className="w-full text-xs font-sans p-2.5 bg-[#F7F2E9] border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C]"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={() => setEditingSprintId(null)}
                        className="px-4 py-2 text-xs font-sans uppercase tracking-wider border border-[#3D2B2F]/20 bg-[#F7F2E9] cursor-pointer"
                      >
                        Annuleren
                      </button>
                      <button
                        onClick={() => saveEditing(sprint.id)}
                        className="accent-btn px-4 py-2 text-xs font-sans uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Opslaan</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* 1. Onderzocht */}
                    <div className="bg-[#F7F2E9] p-4 border border-[#3D2B2F]/10 space-y-1.5 flex flex-col justify-between">
                      <div>
                        <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-[#B3543C]">
                          1. Onderzocht &amp; Verdiept
                        </span>
                        <p className={`text-xs text-[#3D2B2F]/85 leading-relaxed mt-1 ${isPlanned ? 'italic text-[#3D2B2F]/60' : ''}`}>
                          {sprint.researched}
                        </p>
                      </div>
                    </div>

                    {/* 2. Gemaakt */}
                    <div className="bg-[#F7F2E9] p-4 border border-[#3D2B2F]/10 space-y-1.5 flex flex-col justify-between">
                      <div>
                        <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-[#B3543C]">
                          2. Gemaakt &amp; Opgeleverd
                        </span>
                        <p className={`text-xs text-[#3D2B2F]/85 leading-relaxed mt-1 ${isPlanned ? 'italic text-[#3D2B2F]/60' : ''}`}>
                          {sprint.created}
                        </p>
                      </div>
                    </div>

                    {/* 3. Geleerd */}
                    <div className="bg-[#F7F2E9] p-4 border border-[#3D2B2F]/10 space-y-1.5 flex flex-col justify-between">
                      <div>
                        <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-[#B3543C]">
                          3. Geleerd &amp; Reflectie
                        </span>
                        <p className={`text-xs text-[#3D2B2F]/85 leading-relaxed mt-1 ${isPlanned ? 'italic text-[#3D2B2F]/60' : ''}`}>
                          {sprint.learned}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Footer: Gekoppelde Leeruitkomsten + Knoppen voor Presentatie en Bewijs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#3D2B2F]/10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#3D2B2F]/70 font-sans">
                      Aangetoonde leeruitkomsten:
                    </span>
                    {sprint.learningOutcomes.map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 bg-[#F7F2E9] border border-[#3D2B2F]/10 text-[#B3543C] font-serif font-bold text-xs"
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
                        className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#F7F2E9] hover:bg-[#E7DFCF] text-[#3D2B2F] border border-[#3D2B2F]/15 hover:border-[#B3543C] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <Presentation className="w-3.5 h-3.5 text-[#B3543C]" />
                        <span>Bekijk presentatie</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ) : (
                      <button
                        onClick={() => startEditing(sprint)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F7F2E9] hover:bg-[#E7DFCF] text-[#3D2B2F]/80 hover:text-[#3D2B2F] border border-[#3D2B2F]/15 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                        title="Vul de presentatielink in zodra de Show & Grow presentatie klaar is"
                      >
                        <Presentation className="w-3.5 h-3.5 text-[#B3543C]" />
                        <span>Bekijk presentatie</span>
                        <span className="text-[10px] text-[#B3543C] lowercase font-normal italic">[link toevoegen]</span>
                      </button>
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

      {/* Direct download sprint logbook note banner */}
      <div className="p-5 bg-[#E7DFCF] border border-[#3D2B2F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#3D2B2F]">
        <div className="space-y-1">
          <span className="font-semibold text-[#3D2B2F] uppercase tracking-wider text-[10px] block">
            Uren- en sprintverantwoording
          </span>
          <p className="text-[#3D2B2F]/80">
            Het integrale Excel-logboek met alle sprintdetails staat lokaal op de site opgeslagen als <code className="bg-[#F7F2E9] px-1 py-0.5 border border-[#3D2B2F]/10">/sprintlogboek.xlsx</code>.
          </p>
        </div>

        <a
          href={SPRINT_LOGBOEK_DOWNLOAD}
          download="sprintlogboek.xlsx"
          className="accent-btn inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider shrink-0 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Excel Logboek</span>
        </a>
      </div>
    </div>
  );
};
