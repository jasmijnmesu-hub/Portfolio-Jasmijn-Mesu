import React, { useState } from 'react';
import { NavTab } from '../types';
import { studentProfile, SPRINT_LOGBOEK_DOWNLOAD } from '../data/portfolioData';
import { Menu, X, Download } from 'lucide-react';

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

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

            {/* Quick Direct Download Logbook Link on the far right with separator */}
            <div className="hidden xl:flex items-center ml-2 2xl:ml-4 pl-2 2xl:pl-3 border-l border-[#1B2A24]/15 shrink-0">
              <a
                href={SPRINT_LOGBOEK_DOWNLOAD}
                download="sprintlogboek.xlsx"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 2xl:px-3.5 2xl:py-2 text-[11px] 2xl:text-sm font-sans uppercase tracking-[0.08em] 2xl:tracking-wider font-medium text-[#1B2A24] bg-[#D6D2C4] hover:bg-[#C7BFAE] border border-[#1B2A24]/10 transition-colors cursor-pointer whitespace-nowrap"
                title="Download sprintlogboek.xlsx rechtstreeks"
              >
                <Download className="w-3.5 h-3.5 text-[#9C4A32]" />
                <span>Sprint Logboek</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1B2A24] hover:bg-[#D6D2C4] transition-colors focus:outline-hidden cursor-pointer ml-2"
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
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-sans uppercase tracking-wider font-medium transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#D6D2C4] text-[#9C4A32] border-l-2 border-[#9C4A32]'
                    : 'text-[#1B2A24] opacity-70 hover:opacity-100 hover:bg-[#D6D2C4]/60'
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
              download="sprintlogboek.xlsx"
              className="flex items-center justify-between w-full px-4 py-3 text-xs font-sans uppercase tracking-wider font-medium text-[#1B2A24] bg-[#D6D2C4] border border-[#1B2A24]/10"
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
