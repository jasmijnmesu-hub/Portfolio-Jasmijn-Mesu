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
    <header className="sticky top-0 z-50 bg-[#EDE6D8]/95 backdrop-blur-xs border-b border-[#1B2A24]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Brand / Name shifted to the far left with guaranteed margin to the right */}
          <div className="shrink-0 mr-4 md:mr-6 lg:mr-8 xl:mr-12">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-hidden block"
            >
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1B2A24] group-hover:text-[#9C4A32] transition-colors">
                {studentProfile.name}
              </span>
              <span className="block text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#1B2A24]/65 font-sans font-medium mt-0.5 whitespace-nowrap">
                Portfolio · Minor Futureproof met AI
              </span>
            </button>
          </div>

          {/* Right section: Navigation Tabs + Sprint Logboek Button with generous spacing */}
          <div className="flex items-center ml-auto">
            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-3.5 lg:gap-5 xl:gap-7 text-xs lg:text-[13px] xl:text-sm font-medium uppercase tracking-wider lg:tracking-widest flex-nowrap">
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
            <div className="hidden xl:flex items-center ml-6 xl:ml-8 pl-5 xl:pl-6 border-l border-[#1B2A24]/15 shrink-0">
              <a
                href={SPRINT_LOGBOEK_DOWNLOAD}
                download="sprintlogboek.xlsx"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4 xl:py-2 text-xs font-sans uppercase tracking-wider font-medium text-[#1B2A24] bg-[#CEC5B5] hover:bg-[#C7BFAE] border border-[#1B2A24]/10 transition-colors cursor-pointer whitespace-nowrap"
                title="Download sprintlogboek.xlsx rechtstreeks"
              >
                <Download className="w-3.5 h-3.5 text-[#9C4A32]" />
                <span>Sprint Logboek</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1B2A24] hover:bg-[#CEC5B5] transition-colors focus:outline-hidden cursor-pointer ml-2"
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
                    ? 'bg-[#CEC5B5] text-[#9C4A32] border-l-2 border-[#9C4A32]'
                    : 'text-[#1B2A24] opacity-70 hover:opacity-100 hover:bg-[#CEC5B5]/60'
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
              className="flex items-center justify-between w-full px-4 py-3 text-xs font-sans uppercase tracking-wider font-medium text-[#1B2A24] bg-[#CEC5B5] border border-[#1B2A24]/10"
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
