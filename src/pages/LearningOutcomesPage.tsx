import React, { useState } from 'react';
import { learningOutcomes as outcomes, initialEvidenceItems } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, Award, ExternalLink } from 'lucide-react';

interface LearningOutcomesPageProps {
  onNavigateToEvidence: (luFilter?: string) => void;
}

export const LearningOutcomesPage: React.FC<LearningOutcomesPageProps> = ({ onNavigateToEvidence }) => {
  const [expandedLu, setExpandedLu] = useState<string | null>(null);

  const totalDemonstrated = outcomes.reduce((acc, curr) => acc + curr.currentCount, 0);
  const totalTarget = outcomes.reduce((acc, curr) => acc + curr.targetCount, 0); // 2 + 4 + 2 + 4 + 6 = 18

  return (
    <div className="space-y-12 py-6 md:py-10">
      {/* Header */}
      <div className="border-b border-[#1B2A24]/10 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-8 bg-[#9C4A32]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
                Minor Futureproof met AI · Toetsingskader
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2A24] tracking-tight">
              De 5 Leeruitkomsten
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#1B2A24]/80 leading-relaxed font-sans">
              Om de minor met het eindoordeel <strong className="font-medium text-[#1B2A24]">&lsquo;Boven Niveau&rsquo;</strong> af te ronden, toon ik elk van de 5 leeruitkomsten meervoudig en op hoog niveau aan. Hieronder staat de actuele voortgang per leeruitkomst en de koppeling naar mijn bewijsvoering.
            </p>
          </div>

          {/* Overall Score Card */}
          <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-5 md:min-w-[280px]">
            <div className="flex items-center justify-between text-xs font-sans text-[#1B2A24]/70 mb-2">
              <span className="font-bold uppercase tracking-widest text-[10px]">Totaal Aangetoond</span>
              <span className="text-[#9C4A32] font-semibold text-xs">Streefdoel: {totalTarget}x</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-[#1B2A24]">{totalDemonstrated}</span>
              <span className="text-xs text-[#1B2A24]/70">van de {totalTarget} keer aangetoond</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-[#EDE6D8] border border-[#1B2A24]/10 mt-3 overflow-hidden">
              <div 
                className="h-full bg-[#9C4A32] transition-all duration-300"
                style={{ width: `${Math.min(100, (totalDemonstrated / totalTarget) * 100)}%` }}
              />
            </div>

            <p className="text-[10px] uppercase tracking-wider text-[#1B2A24]/60 mt-2.5">
              Huidige status: Sprint 1 (nog geen Show &amp; Grow geweest)
            </p>
          </div>
        </div>
      </div>

      {/* List of 5 Learning Outcomes */}
      <div className="space-y-6">
        {outcomes.map((lu) => {
          const isTargetMet = lu.currentCount >= lu.targetCount;
          const percentage = lu.targetCount > 0 ? Math.min(100, Math.round((lu.currentCount / lu.targetCount) * 100)) : 0;
          const isExpanded = expandedLu === lu.id;
          const linkedEvidence = initialEvidenceItems.filter((e) => e.learningOutcomes.includes(lu.id));

          return (
            <div
              key={lu.id}
              id={`lu-card-${lu.id.toLowerCase()}`}
              className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-6 sm:p-7 transition-all hover:border-[#9C4A32]/40"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Left side: Code, Title, Description */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-1 bg-[#EDE6D8] border border-[#1B2A24]/10 text-[#9C4A32] font-serif font-bold text-sm tracking-wide">
                      {lu.code}
                    </span>
                    <span className="text-[11px] font-sans text-[#1B2A24]/70 uppercase tracking-wider">
                      Streefaantal Boven Niveau: {lu.targetCount} keer
                    </span>
                    {isTargetMet && (
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-[#C9A56B]/20 border border-[#C9A56B]/40 text-[#1B2A24] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A56B]" />
                        Streefaantal bereikt
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl text-[#1B2A24] leading-snug">
                    {lu.title}
                  </h2>

                  <p className="text-sm font-sans text-[#1B2A24]/85 leading-relaxed">
                    {lu.shortDescription}
                  </p>
                </div>

                {/* Right side: Exact "0 van de [streefaantal] keer aangetoond" Display & Working Plus/Minus */}
                <div className="md:w-72 bg-[#EDE6D8] border border-[#1B2A24]/10 p-4 flex flex-col justify-between shrink-0">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#1B2A24]/60 font-sans font-bold">
                      Aangetoond
                    </span>
                    <div className="mt-1">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#1B2A24] block">
                        {lu.currentCount} van de {lu.targetCount} keer aangetoond
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-[#CEC5B5] mt-2.5 overflow-hidden">
                      <div
                        className="h-full bg-[#9C4A32] transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Button: Bekijk bewijs voor deze LU */}
                  <button
                    onClick={() => onNavigateToEvidence(lu.id)}
                    className="accent-btn mt-3 w-full py-2 text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Bekijk bewijzen ({linkedEvidence.length})</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Toggle to see full description & linked evidence details */}
              <div className="mt-5 pt-4 border-t border-[#1B2A24]/10 flex items-center justify-between">
                <button
                  onClick={() => setExpandedLu(isExpanded ? null : lu.id)}
                  className="text-xs font-sans text-[#1B2A24]/80 hover:text-[#9C4A32] cursor-pointer flex items-center gap-1"
                >
                  <span>{isExpanded ? 'Verberg toetscriteria' : 'Toon toetscriteria en beschrijving'}</span>
                </button>

                <span className="text-xs text-[#1B2A24]/60">
                  {linkedEvidence.length > 0 
                    ? `${linkedEvidence.length} bewijsstuk(ken) gekoppeld` 
                    : 'Nog geen bewijsstuk gekoppeld'}
                </span>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-[#1B2A24]/10 space-y-4 text-xs font-sans">
                  <div>
                    <h4 className="font-semibold text-[#1B2A24] uppercase tracking-wider text-[11px] mb-1">
                      Volledige toetscriteria:
                    </h4>
                    <p className="text-[#1B2A24]/85 leading-relaxed bg-[#EDE6D8] p-3.5 border border-[#1B2A24]/10">
                      {lu.fullDescription}
                    </p>
                  </div>

                  {linkedEvidence.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-[#1B2A24] uppercase tracking-wider text-[11px] mb-2">
                        Gekoppelde bewijzen voor {lu.code}:
                      </h4>
                      <ul className="space-y-2">
                        {linkedEvidence.map((ev) => (
                          <li key={ev.id} className="p-3 bg-[#EDE6D8] border border-[#1B2A24]/10 flex items-center justify-between gap-4">
                            <div>
                              <span className="font-medium text-[#1B2A24]">{ev.title}</span>
                              <p className="text-[#1B2A24]/70 text-[11px] mt-0.5">{ev.description}</p>
                            </div>
                            <a
                              href={ev.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#9C4A32] hover:underline shrink-0 flex items-center gap-1 font-medium uppercase tracking-wider"
                            >
                              <span>Openen</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Target Breakdown explainer box & instructions on adjusting numbers */}
      <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-6 sm:p-7 space-y-4 text-xs font-sans text-[#1B2A24]">
        <div className="space-y-1">
          <h3 className="font-serif text-base text-[#1B2A24] font-semibold flex items-center gap-2">
            <Award className="w-4 h-4 text-[#9C4A32]" />
            Verantwoording Streefniveau Boven Niveau
          </h3>
          <p className="text-[#1B2A24]/85 leading-relaxed">
            De streefaantallen per leeruitkomst zijn: LU1 twee keer, LU2 vier keer, LU3 twee keer, LU4 vier keer, LU5 zes keer (totaal {totalTarget} keer).
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
          <div className="p-2.5 bg-[#EDE6D8] border border-[#1B2A24]/10 text-center">
            <span className="block font-bold text-[#9C4A32]">LU1: 2 keer</span>
            <span className="text-[10px] text-[#1B2A24]/70">AI-impact Beroepspraktijk</span>
          </div>
          <div className="p-2.5 bg-[#EDE6D8] border border-[#1B2A24]/10 text-center">
            <span className="block font-bold text-[#9C4A32]">LU2: 4 keer</span>
            <span className="text-[10px] text-[#1B2A24]/70">AI-oplossing Ontwerp en Bouw</span>
          </div>
          <div className="p-2.5 bg-[#EDE6D8] border border-[#1B2A24]/10 text-center">
            <span className="block font-bold text-[#9C4A32]">LU3: 2 keer</span>
            <span className="text-[10px] text-[#1B2A24]/70">Ethiek en Verantwoord AI</span>
          </div>
          <div className="p-2.5 bg-[#EDE6D8] border border-[#1B2A24]/10 text-center">
            <span className="block font-bold text-[#9C4A32]">LU4: 4 keer</span>
            <span className="text-[10px] text-[#1B2A24]/70">AI-tools en Techniek</span>
          </div>
          <div className="p-2.5 bg-[#EDE6D8] border border-[#1B2A24]/10 text-center">
            <span className="block font-bold text-[#9C4A32]">LU5: 6 keer</span>
            <span className="text-[10px] text-[#1B2A24]/70">Zelfstandig en Zelfsturend</span>
          </div>
        </div>
      </div>
    </div>
  );
};
