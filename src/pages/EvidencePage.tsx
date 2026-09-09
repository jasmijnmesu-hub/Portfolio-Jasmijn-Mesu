import React, { useState } from 'react';
import { initialEvidenceItems } from '../data/portfolioData';
import { EvidenceItem, EvidenceType } from '../types';
import { 
  FileText, 
  Video, 
  Table, 
  ExternalLink, 
  Layers, 
  Presentation, 
  Filter, 
  Plus, 
  Check, 
  X,
  Info,
  Clock,
  Search,
  Download
} from 'lucide-react';

interface EvidencePageProps {
  initialLuFilter?: string;
  initialSprintFilter?: number;
}

const STORAGE_KEY = 'jasmijn_portfolio_evidence';

export const EvidencePage: React.FC<EvidencePageProps> = ({ 
  initialLuFilter, 
  initialSprintFilter 
}) => {
  // Load saved evidence from localStorage if available, otherwise use initial items
  const [evidenceList, setEvidenceList] = useState<EvidenceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Ignore localStorage error
    }
    return initialEvidenceItems;
  });

  const [selectedLu, setSelectedLu] = useState<string>(initialLuFilter || 'ALL');
  const [selectedSprint, setSelectedSprint] = useState<string>(
    initialSprintFilter ? String(initialSprintFilter) : 'ALL'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modal for adding a new external evidence link
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newItem, setNewItem] = useState<{
    title: string;
    description: string;
    type: EvidenceType;
    platform: string;
    externalUrl: string;
    sprintId: number;
    learningOutcomes: ('LU1' | 'LU2' | 'LU3' | 'LU4' | 'LU5')[];
    date: string;
    isInProgress: boolean;
  }>({
    title: '',
    description: '',
    type: 'document',
    platform: 'OneDrive',
    externalUrl: '',
    sprintId: 1,
    learningOutcomes: ['LU1'],
    date: '08 sep 2026',
    isInProgress: false,
  });

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
        return <FileText className="w-4 h-4 text-[#B3543C]" />;
      case 'video':
        return <Video className="w-4 h-4 text-[#B3543C]" />;
      case 'spreadsheet':
        return <Table className="w-4 h-4 text-[#B3543C]" />;
      case 'prototype':
        return <Layers className="w-4 h-4 text-[#B3543C]" />;
      case 'presentatie':
        return <Presentation className="w-4 h-4 text-[#B3543C]" />;
      default:
        return <FileText className="w-4 h-4 text-[#B3543C]" />;
    }
  };

  // Clean platform label (e.g., remove any "(Niet-vermeld)" or "(Niet-Vermeld)")
  const cleanPlatform = (rawPlatform?: string) => {
    if (!rawPlatform) return '';
    return rawPlatform.replace(/\s*\([^)]*niet-vermeld[^)]*\)/i, '').trim();
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.externalUrl) return;

    const createdItem: EvidenceItem = {
      id: `BEW-${String(evidenceList.length + 1).padStart(2, '0')}`,
      title: newItem.title,
      description: newItem.description,
      type: newItem.type,
      platform: cleanPlatform(newItem.platform) || 'OneDrive',
      externalUrl: newItem.externalUrl,
      sprintId: newItem.sprintId,
      learningOutcomes: newItem.learningOutcomes,
      date: newItem.isInProgress ? 'In bewerking' : newItem.date,
      isExample: false,
    };

    const updatedList = [createdItem, ...evidenceList];
    setEvidenceList(updatedList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch {
      // Ignore localStorage write error
    }

    setIsAddModalOpen(false);
    setNewItem({
      title: '',
      description: '',
      type: 'document',
      platform: 'OneDrive',
      externalUrl: '',
      sprintId: 1,
      learningOutcomes: ['LU1'],
      date: '08 sep 2026',
      isInProgress: false,
    });
  };

  const toggleLuSelection = (lu: 'LU1' | 'LU2' | 'LU3' | 'LU4' | 'LU5') => {
    if (newItem.learningOutcomes.includes(lu)) {
      if (newItem.learningOutcomes.length > 1) {
        setNewItem({
          ...newItem,
          learningOutcomes: newItem.learningOutcomes.filter((x) => x !== lu),
        });
      }
    } else {
      setNewItem({
        ...newItem,
        learningOutcomes: [...newItem.learningOutcomes, lu],
      });
    }
  };

  return (
    <div className="space-y-12 py-6 md:py-10">
      
      {/* Header */}
      <div className="border-b border-[#3D2B2F]/10 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-8 bg-[#B3543C]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B3543C]">
                Onderbouwing en Toetsing
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#3D2B2F] tracking-tight">
              Bewijzen &amp; Portfolio
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#3D2B2F]/80 leading-relaxed font-sans">
              Alle bewijsstukken die aantonen dat ik voldoe aan de leeruitkomsten. Een bewijsstuk kan meerdere leeruitkomsten tegelijk aantonen. Externe bestanden zijn direct te openen via OneDrive, YouTube of presentatielinks.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="accent-btn inline-flex items-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-wider cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Nieuw bewijs toevoegen</span>
          </button>
        </div>
      </div>

      {/* Cloud & Hosting Note Banner */}
      <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-4 text-xs text-[#3D2B2F]/85 flex items-start gap-3">
        <Info className="w-4 h-4 text-[#B3543C] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Veilige opslag via externe links:</strong> Grote bestanden (video-opnames, Word-rapporten, Excel-sheets) worden geopend via officiële links naar OneDrive of YouTube. Coach Jan van Rouwendal kan elk bestand direct inzien en beoordelen.
        </p>
      </div>

      {/* Filter Bar: Leeruitkomst, Sprint en Zoeken */}
      <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-4 space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Filter by Learning Outcome */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#3D2B2F]/70 flex items-center gap-1.5 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#B3543C]" />
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
                      ? 'bg-[#B3543C] text-[#F7F2E9]'
                      : 'bg-[#F7F2E9] text-[#3D2B2F] hover:bg-white border border-[#3D2B2F]/10'
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
              <label htmlFor="sprint-filter" className="text-[10px] uppercase tracking-widest font-bold text-[#3D2B2F]/70">
                Sprint:
              </label>
              <select
                id="sprint-filter"
                value={selectedSprint}
                onChange={(e) => setSelectedSprint(e.target.value)}
                className="text-xs px-3 py-1.5 bg-[#F7F2E9] border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C] cursor-pointer"
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
              <Search className="w-3.5 h-3.5 text-[#3D2B2F]/50 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek in bewijzen..."
                className="text-xs pl-8 pr-3 py-1.5 bg-[#F7F2E9] border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C] w-40 sm:w-48"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Evidence Cards List */}
      {filteredEvidence.length === 0 ? (
        <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-12 text-center space-y-3">
          <p className="font-serif text-lg text-[#3D2B2F]">
            Geen bewijsstukken gevonden voor deze selectie.
          </p>
          <p className="text-xs text-[#3D2B2F]/70 max-w-md mx-auto">
            Pas het filter aan of voeg een nieuw bewijsstuk toe met de knop hierboven.
          </p>
          <button
            onClick={() => { setSelectedLu('ALL'); setSelectedSprint('ALL'); setSearchQuery(''); }}
            className="text-xs text-[#B3543C] underline cursor-pointer uppercase tracking-wider"
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
                className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-6 flex flex-col justify-between space-y-5 hover:border-[#B3543C]/50 transition-colors"
              >
                <div className="space-y-3">
                  {/* Top badges: Sprint, Type en Datum / In bewerking */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#3D2B2F]/10 pb-3 text-xs text-[#3D2B2F]/70">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#3D2B2F]">Sprint {item.sprintId}</span>
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
                      <span className="inline-flex items-center gap-1 text-[11px] font-sans px-2 py-0.5 bg-[#F7F2E9] border border-[#B3543C]/30 text-[#B3543C] font-medium">
                        <Clock className="w-3 h-3" />
                        In bewerking
                      </span>
                    ) : (
                      <span className="text-[11px] font-sans text-[#3D2B2F]/75">{item.date}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-[#3D2B2F] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sans text-[#3D2B2F]/85 leading-relaxed">
                    {item.description}
                  </p>

                  {/* 8. Meerdere kleine labels voor elke gekoppelde leeruitkomst */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#3D2B2F]/60 font-sans mr-1">
                      Aangetoond:
                    </span>
                    {item.learningOutcomes.map((lu) => (
                      <button
                        key={lu}
                        onClick={() => setSelectedLu(lu)}
                        title={`Filter op ${lu}`}
                        className="px-2.5 py-0.5 bg-[#F7F2E9] hover:bg-white border border-[#3D2B2F]/15 hover:border-[#B3543C] text-[#B3543C] font-serif font-bold text-xs transition-colors cursor-pointer"
                      >
                        {lu}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Button: External Link or Direct Download */}
                <div className="pt-4 border-t border-[#3D2B2F]/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#3D2B2F]/60">
                    {platformText ? `Bron: ${platformText}` : 'Externe bron'}
                  </span>
                  {item.externalUrl.endsWith('.xlsx') ? (
                    <a
                      href={item.externalUrl}
                      download="sprintlogboek.xlsx"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F7F2E9] hover:bg-white text-[#3D2B2F] hover:text-[#B3543C] border border-[#3D2B2F]/10 hover:border-[#B3543C] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                      title="Download sprintlogboek.xlsx rechtstreeks"
                    >
                      <span>Download Excel</span>
                      <Download className="w-3.5 h-3.5 text-[#B3543C]" />
                    </a>
                  ) : (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F7F2E9] hover:bg-white text-[#3D2B2F] hover:text-[#B3543C] border border-[#3D2B2F]/10 hover:border-[#B3543C] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Openen in {platformText ? platformText.split(' ')[0] : 'nieuw tabblad'}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B3543C]" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Guide note for Jasmijn */}
      <div className="p-5 bg-[#E7DFCF] border border-[#3D2B2F]/10 text-xs text-[#3D2B2F]/80 leading-relaxed">
        <p className="font-semibold text-[#3D2B2F] mb-1 uppercase tracking-wider text-[10px]">
          Bewijzen toevoegen &amp; bewaren:
        </p>
        <p>
          Bewijsstukken die je via de knop &lsquo;Nieuw bewijs toevoegen&rsquo; invoert worden direct opgeslagen in je browser. Om nieuwe bewijsstukken permanent vast te leggen in de broncode van je site voor publicatie op Github of Vercel, voeg je ze toe aan de lijst <code className="bg-[#F7F2E9] px-1 py-0.5 border border-[#3D2B2F]/10">initialEvidenceItems</code> in <code className="bg-[#F7F2E9] px-1 py-0.5 border border-[#3D2B2F]/10">src/data/portfolioData.ts</code>.
        </p>
      </div>

      {/* Add New Evidence Modal (met werkende opslag) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#3D2B2F]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#F7F2E9] border border-[#3D2B2F]/20 p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-5 shadow-lg">
            <div className="flex items-center justify-between border-b border-[#3D2B2F]/10 pb-3">
              <h3 className="font-serif text-xl text-[#3D2B2F]">
                Nieuw bewijsstuk toevoegen
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#3D2B2F]/60 hover:text-[#3D2B2F] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block font-semibold text-[#3D2B2F] mb-1">
                  Titel van het bewijsstuk *
                </label>
                <input
                  type="text"
                  required
                  placeholder="bijv. Eindrapport literatuuronderzoek AI"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full p-2 bg-white border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3D2B2F] mb-1">
                  Korte beschrijving van de inhoud en relevantie *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Wat toont dit bewijsstuk aan en wat is het resultaat?"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  className="w-full p-2 bg-white border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#3D2B2F] mb-1">
                    Type bewijs
                  </label>
                  <select
                    value={newItem.type}
                    onChange={(e) => setNewItem({ ...newItem, type: e.target.value as EvidenceType })}
                    className="w-full p-2 bg-white border border-[#3D2B2F]/20 text-[#3D2B2F]"
                  >
                    <option value="document">Document (Word of PDF)</option>
                    <option value="video">Video (Reflectie of Demo)</option>
                    <option value="spreadsheet">Spreadsheet (Excel)</option>
                    <option value="prototype">Prototype (Figma of Web)</option>
                    <option value="presentatie">Presentatie (Canva of PPT)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3D2B2F] mb-1">
                    Platform of Opslag
                  </label>
                  <input
                    type="text"
                    value={newItem.platform}
                    onChange={(e) => setNewItem({ ...newItem, platform: e.target.value })}
                    placeholder="bijv. OneDrive, YouTube, Canva"
                    className="w-full p-2 bg-white border border-[#3D2B2F]/20 text-[#3D2B2F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#3D2B2F] mb-1">
                    Sprint
                  </label>
                  <select
                    value={newItem.sprintId}
                    onChange={(e) => setNewItem({ ...newItem, sprintId: Number(e.target.value) })}
                    className="w-full p-2 bg-white border border-[#3D2B2F]/20 text-[#3D2B2F]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                      <option key={s} value={s}>
                        Sprint {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3D2B2F] mb-1">
                    Status of Datum
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      disabled={newItem.isInProgress}
                      value={newItem.isInProgress ? 'In bewerking' : newItem.date}
                      onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
                      className="w-full p-2 bg-white border border-[#3D2B2F]/20 text-[#3D2B2F] disabled:opacity-60"
                    />
                  </div>
                  <label className="inline-flex items-center gap-1.5 mt-1.5 cursor-pointer text-[11px] text-[#3D2B2F]/80">
                    <input
                      type="checkbox"
                      checked={newItem.isInProgress}
                      onChange={(e) => setNewItem({ ...newItem, isInProgress: e.target.checked })}
                      className="accent-[#B3543C]"
                    />
                    <span>Nog in bewerking (geen vaste datum)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#3D2B2F] mb-1">
                  Externe link (OneDrive, YouTube, Canva) *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://onedrive.live.com/..."
                  value={newItem.externalUrl}
                  onChange={(e) => setNewItem({ ...newItem, externalUrl: e.target.value })}
                  className="w-full p-2 bg-white border border-[#3D2B2F]/20 text-[#3D2B2F] focus:outline-hidden focus:border-[#B3543C]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3D2B2F] mb-2">
                  Bijbehorende leeruitkomsten (selecteer er gerust meerdere):
                </label>
                <div className="flex gap-2">
                  {(['LU1', 'LU2', 'LU3', 'LU4', 'LU5'] as const).map((lu) => {
                    const active = newItem.learningOutcomes.includes(lu);
                    return (
                      <button
                        type="button"
                        key={lu}
                        onClick={() => toggleLuSelection(lu)}
                        className={`px-3 py-1.5 text-xs font-serif font-bold transition-colors cursor-pointer border ${
                          active
                            ? 'bg-[#B3543C] text-white border-[#B3543C]'
                            : 'bg-white text-[#3D2B2F] border-[#3D2B2F]/20 hover:border-[#3D2B2F]/40'
                        }`}
                      >
                        {lu}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#3D2B2F]/10 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs text-[#3D2B2F] hover:bg-[#E7DFCF] cursor-pointer"
                >
                  Annuleren
                </button>
                <button
                  type="submit"
                  className="accent-btn px-5 py-2 text-xs font-medium uppercase tracking-wider cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  Bewijsstuk toevoegen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
