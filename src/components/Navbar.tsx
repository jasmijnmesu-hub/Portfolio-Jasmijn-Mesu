import React, { useMemo, useState } from 'react';
import { NavTab } from '../types';
import { initialEvidenceItems, learningOutcomes, sprintsData, studentProfile, SPRINT_LOGBOEK_DOWNLOAD } from '../data/portfolioData';
import { Menu, X, Download, Search } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

const navItems: { id: NavTab; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'over-mij', label: 'Over mij' },
  { id: 'leeruitkomsten', label: 'Leeruitkomsten' },
  { id: 'sprints', label: 'Sprints' },
  { id: 'bewijzen', label: 'Bewijzen' },
  { id: 'geleerd', label: 'Wat heb ik geleerd' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const searchableItems = [
      ...navItems.map((item) => ({ label: item.label, tab: item.id, text: item.label })),
      ...learningOutcomes.map((item) => ({ label: item.title, tab: 'leeruitkomsten' as NavTab, text: `${item.title} ${item.fullDescription}` })),
      ...sprintsData.map((item) => ({ label: `Sprint ${item.id}: ${item.title}`, tab: 'sprints' as NavTab, text: `${item.title} ${item.summary} ${item.focus}` })),
      ...initialEvidenceItems.map((item) => ({ label: item.title, tab: 'bewijzen' as NavTab, text: `${item.title} ${item.description} ${item.summary || ''}` })),
    ];

    return searchableItems
      .filter((item) => item.text.toLowerCase().includes(query))
      .slice(0, 6);
  }, [searchQuery]);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSelect = (tab: NavTab) => {
    setSearchQuery('');
    setSearchFocused(false);
    handleNavClick(tab);
  };

  return (
    <header className="bg-[#EDE6D8]/95 backdrop-blur-xs border-b border-[#1B2A24]/10">
      <div className="w-full pl-2 sm:pl-4 lg:pl-5 2xl:pl-6 pr-4 sm:pr-8 lg:pr-12 2xl:pr-16">
        <div className="flex items-center justify-between h-20 sm:h-20 2xl:h-24">
          
          {/* Brand / Name shifted to the far left with guaranteed margin to the right */}
          <div className="shrink-0 mr-1 md:mr-2 lg:mr-3 2xl:mr-5">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-hidden block"
            >
              <span className="block font-serif text-xl sm:text-2xl 2xl:text-3xl font-bold tracking-tight text-[#1B2A24] group-hover:text-[#9C4A32] transition-colors">
                {studentProfile.name}
              </span>
              <span className="block text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-[0.08em] sm:tracking-[0.1em] 2xl:tracking-[0.14em] text-[#1B2A24]/65 font-sans font-medium mt-0.5 whitespace-nowrap">
                Portfolio · Minor Futureproof met AI
              </span>
            </button>
          </div>

          {/* Right section: Navigation Tabs + Sprint Logboek Button with generous spacing */}
          <div className="flex items-center ml-auto">
            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6 2xl:gap-8 text-[11px] lg:text-xs xl:text-[13px] 2xl:text-[15px] font-medium uppercase tracking-[0.08em] 2xl:tracking-widest flex-nowrap">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-item whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden ${
                      isActive
                        ? 'active text-[#1B2A24]'
                        : 'opacity-60 hover:opacity-100 text-[#1B2A24]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="relative hidden lg:block ml-3 2xl:ml-5 shrink-0">
              <div className="flex items-center gap-2 border-b border-[#1B2A24]/25 px-1 py-1 focus-within:border-[#9C4A32]">
                <Search className="h-3.5 w-3.5 text-[#9C4A32]" aria-hidden="true" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && searchResults[0]) handleSearchSelect(searchResults[0].tab);
                    if (event.key === 'Escape') {
                      setSearchQuery('');
                      setSearchFocused(false);
                    }
                  }}
                  placeholder="Zoeken"
                  aria-label="Zoek in portfolio"
                  className="w-24 bg-transparent text-xs text-[#1B2A24] outline-none placeholder:text-[#1B2A24]/55 xl:w-32"
                />
              </div>
              {searchFocused && searchQuery.trim() && (
                <div className="absolute right-0 top-full z-50 mt-2 w-72 border border-[#1B2A24]/10 bg-[#F3EDE5] p-2 shadow-xl">
                  {searchResults.length > 0 ? searchResults.map((result) => (
                    <button
                      key={`${result.tab}-${result.label}`}
                      type="button"
                      onMouseDown={() => handleSearchSelect(result.tab)}
                      className="block w-full px-3 py-2 text-left text-xs text-[#1B2A24] hover:bg-[#E5D8CA]"
                    >
                      {result.label}
                    </button>
                  )) : (
                    <p className="px-3 py-2 text-xs text-[#1B2A24]/60">Geen resultaten gevonden</p>
                  )}
                </div>
              )}
            </div>

            {/* Quick Direct Download Logbook Link on the far right with separator */}
            <div className="hidden xl:flex items-center ml-2 2xl:ml-4 pl-2 2xl:pl-3 border-l border-[#1B2A24]/15 shrink-0">
              <a
                href={SPRINT_LOGBOEK_DOWNLOAD}
                download="Integraal_Sprint_Logboek_Officieel.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 2xl:px-3.5 2xl:py-2 text-[11px] 2xl:text-sm font-sans uppercase tracking-[0.08em] 2xl:tracking-wider font-medium text-[#1B2A24] bg-[#F3EDE5] hover:bg-[#E5D8CA] border border-[#1B2A24]/10 transition-colors cursor-pointer whitespace-nowrap"
                title="Download sprintlogboek.xlsx rechtstreeks"
              >
                <Download className="w-3.5 h-3.5 text-[#9C4A32]" />
                <span>Sprint Logboek</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1B2A24] hover:bg-[#E5D8CA] transition-colors focus:outline-hidden cursor-pointer ml-2"
              aria-label="Menu openen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1B2A24]/10 bg-[#EDE6D8] px-6 pt-2 pb-6 space-y-1 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#1B2A24]/25 px-2 py-3 focus-within:border-[#9C4A32]">
            <Search className="h-4 w-4 text-[#9C4A32]" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && searchResults[0]) handleSearchSelect(searchResults[0].tab);
              }}
              placeholder="Zoek in portfolio"
              aria-label="Zoek in portfolio"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#1B2A24] outline-none placeholder:text-[#1B2A24]/55"
            />
          </div>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-sans uppercase tracking-wider font-medium transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#F3EDE5] text-[#9C4A32] border-l-2 border-[#9C4A32]'
                    : 'text-[#1B2A24] opacity-70 hover:opacity-100 hover:bg-[#F3EDE5]/70'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-[10px] text-[#9C4A32] uppercase tracking-widest font-bold">Actief</span>}
              </button>
            );
          })}
          
          <div className="pt-4 mt-2 border-t border-[#1B2A24]/10">
            <a
              href={SPRINT_LOGBOEK_DOWNLOAD}
              download="Integraal_Sprint_Logboek_Officieel.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-4 py-3 text-xs font-sans uppercase tracking-wider font-medium text-[#1B2A24] bg-[#F3EDE5] border border-[#1B2A24]/10"
              title="Download sprintlogboek.xlsx rechtstreeks"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#9C4A32]" />
                Download Sprint Logboek (.xlsx)
              </span>
              <Download className="w-4 h-4 text-[#1B2A24]/60" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
