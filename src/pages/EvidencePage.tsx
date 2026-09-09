import React, { useState } from 'react';
import { initialEvidenceItems } from '../data/portfolioData';
import { EvidenceType } from '../types';
import {
  FileText,
  Video,
  Table,
  ExternalLink,
  Layers,
  Presentation,
  Filter,
  Clock,
  Search,
  Download
} from 'lucide-react';

interface EvidencePageProps {
  initialLuFilter?: string;
  initialSprintFilter?: number;
}

export const EvidencePage: React.FC<EvidencePageProps> = ({
  initialLuFilter,
  initialSprintFilter
}) => {
  const evidenceList = initialEvidenceItems;

  const [selectedLu, setSelectedLu] = useState<string>(initialLuFilter || 'ALL');
  const [selectedSprint, setSelectedSprint] = useState<string>(
    initialSprintFilter ? String(initialSprintFilter) : 'ALL'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter logic: LU filter, sprint filter, and text search
  const filteredEvidence = evidenceList.filter((item) => {
    const matchesLu = selectedLu === 'ALL' || item.learningOutcomes.includes(selectedLu as any);
    const matchesSprint = selectedSprint === 'ALL' || item.sprintId === Number(selectedSprint);
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.learningOutcomes.some((lu) => lu.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesLu && matchesSprint && matchesSearch;
  });

  const getTypeIcon = (type: EvidenceType) => {
    switch (type) {
      case 'document':
        return <FileText className="w-4 h-4 text-[#9C4A32]" />;
      case 'video':
        return <Video className="w-4 h-4 text-[#9C4A32]" />;
      case 'spreadsheet':
        return <Table className="w-4 h-4 text-[#9C4A32]" />;
      case 'prototype':
        return <Layers className="w-4 h-4 text-[#9C4A32]" />;
      case 'presentatie':
        return <Presentation className="w-4 h-4 text-[#9C4A32]" />;
      default:
        return <FileText className="w-4 h-4 text-[#9C4A32]" />;
    }
  };

  // Clean platform label (e.g., remove any "(Niet-vermeld)" or "(Niet-Vermeld)")
  const cleanPlatform = (rawPlatform?: string) => {
    if (!rawPlatform) return '';
    return rawPlatform.replace(/\s*\([^)]*niet-vermeld[^)]*\)/i, '').trim();
  };

  return (
    <div className="space-y-12 py-6 md:py-10">
      
      {/* Header */}
      <div className="border-b border-[#1B2A24]/10 pb-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-[#9C4A32]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
              Onderbouwing en Toetsing
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2A24] tracking-tight">
            Bewijzen &amp; Portfolio
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1B2A24]/80 leading-relaxed font-sans">
            Alle bewijsstukken die aantonen dat ik voldoe aan de leeruitkomsten. Een bewijsstuk kan meerdere leeruitkomsten tegelijk aantonen. Externe bestanden zijn direct te openen via OneDrive, YouTube of presentatielinks.
          </p>
        </div>
      </div>

      {/* Filter Bar: Leeruitkomst, Sprint en Zoeken */}
      <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-4 space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Filter by Learning Outcome */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]/70 flex items-center gap-1.5 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#9C4A32]" />
              Leeruitkomst:
            </span>
            {['ALL', 'LU1', 'LU2', 'LU3', 'LU4', 'LU5'].map((lu) => {
              const isSelected = selectedLu === lu;
              return (
                <button
                  key={lu}
                  onClick={() => setSelectedLu(lu)}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#9C4A32] text-[#EDE6D8]'
                      : 'bg-[#EDE6D8] text-[#1B2A24] hover:bg-white border border-[#1B2A24]/10'
                  }`}
                >
                  {lu === 'ALL' ? 'Alles tonen' : lu}
                </button>
              );
            })}
          </div>

          {/* Filter by Sprint & Search box */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label htmlFor="sprint-filter" className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]/70">
                Sprint:
              </label>
              <select
                id="sprint-filter"
                value={selectedSprint}
                onChange={(e) => setSelectedSprint(e.target.value)}
                className="text-xs px-3 py-1.5 bg-[#EDE6D8] border border-[#1B2A24]/20 text-[#1B2A24] focus:outline-hidden focus:border-[#9C4A32] cursor-pointer"
              >
                <option value="ALL">Alle sprints (1 tot en met 8)</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={String(num)}>
                    Sprint {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#1B2A24]/50 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek in bewijzen..."
                className="text-xs pl-8 pr-3 py-1.5 bg-[#EDE6D8] border border-[#1B2A24]/20 text-[#1B2A24] focus:outline-hidden focus:border-[#9C4A32] w-40 sm:w-48"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Evidence Cards List */}
      {filteredEvidence.length === 0 ? (
        <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-12 text-center space-y-3">
          <p className="font-serif text-lg text-[#1B2A24]">
            Geen bewijsstukken gevonden voor deze selectie.
          </p>
          <p className="text-xs text-[#1B2A24]/70 max-w-md mx-auto">
            Pas het filter aan om andere bewijsstukken te bekijken.
          </p>
          <button
            onClick={() => { setSelectedLu('ALL'); setSelectedSprint('ALL'); setSearchQuery(''); }}
            className="text-xs text-[#9C4A32] underline cursor-pointer uppercase tracking-wider"
          >
            Alle filters wissen
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvidence.map((item) => {
            const platformText = cleanPlatform(item.platform);
            const isInProgress = item.date.toLowerCase().includes('bewerking');

            return (
              <div
                key={item.id}
                id={`evidence-${item.id.toLowerCase()}`}
                className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-6 flex flex-col justify-between space-y-5 hover:border-[#9C4A32]/50 transition-colors"
              >
                <div className="space-y-3">
                  {/* Top badges: Sprint, Type en Datum / In bewerking */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#1B2A24]/10 pb-3 text-xs text-[#1B2A24]/70">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#1B2A24]">Sprint {item.sprintId}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        {getTypeIcon(item.type)}
                        {platformText ? (
                          <span className="capitalize">{platformText}</span>
                        ) : (
                          <span className="capitalize">{item.type}</span>
                        )}
                      </span>
                    </div>

                    {isInProgress ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-sans px-2 py-0.5 bg-[#EDE6D8] border border-[#9C4A32]/30 text-[#9C4A32] font-medium">
                        <Clock className="w-3 h-3" />
                        In bewerking
                      </span>
                    ) : (
                      <span className="text-[11px] font-sans text-[#1B2A24]/75">{item.date}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-[#1B2A24] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sans text-[#1B2A24]/85 leading-relaxed">
                    {item.description}
                  </p>

                  {/* 8. Meerdere kleine labels voor elke gekoppelde leeruitkomst */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#1B2A24]/60 font-sans mr-1">
                      Aangetoond:
                    </span>
                    {item.learningOutcomes.map((lu) => (
                      <button
                        key={lu}
                        onClick={() => setSelectedLu(lu)}
                        title={`Filter op ${lu}`}
                        className="px-2.5 py-0.5 bg-[#EDE6D8] hover:bg-white border border-[#1B2A24]/15 hover:border-[#9C4A32] text-[#9C4A32] font-serif font-bold text-xs transition-colors cursor-pointer"
                      >
                        {lu}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Button: External Link or Direct Download */}
                <div className="pt-4 border-t border-[#1B2A24]/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#1B2A24]/60">
                    {platformText ? `Bron: ${platformText}` : 'Externe bron'}
                  </span>
                  {item.externalUrl.endsWith('.xlsx') ? (
                    <a
                      href={item.externalUrl}
                      download="sprintlogboek.xlsx"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#EDE6D8] hover:bg-white text-[#1B2A24] hover:text-[#9C4A32] border border-[#1B2A24]/10 hover:border-[#9C4A32] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                      title="Download sprintlogboek.xlsx rechtstreeks"
                    >
                      <span>Download Excel</span>
                      <Download className="w-3.5 h-3.5 text-[#9C4A32]" />
                    </a>
                  ) : (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#EDE6D8] hover:bg-white text-[#1B2A24] hover:text-[#9C4A32] border border-[#1B2A24]/10 hover:border-[#9C4A32] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Openen in {platformText ? platformText.split(' ')[0] : 'nieuw tabblad'}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#9C4A32]" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
