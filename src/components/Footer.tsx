import React from 'react';
import { NavTab } from '../types';
import { studentProfile, SPRINT_LOGBOEK_DOWNLOAD } from '../data/portfolioData';
import { Download, Mail } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-[#1B2A24]/10 bg-[#CEC5B5]/30 mt-20 pt-12 pb-10 text-sm font-sans text-[#1B2A24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Column 1: Info en Doel */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold tracking-tight text-[#1B2A24]">
              {studentProfile.name}
            </h4>
            <p className="text-xs text-[#1B2A24]/80 leading-relaxed max-w-sm">
              Portfolio voor de minor <span className="font-medium text-[#1B2A24]">Futureproof met AI</span> aan de Hogeschool Utrecht. Studente Facility Management aan Zuyd Hogeschool met focus op organisatie, procesverbetering en mensgerichte AI-toepassingen.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#CEC5B5] border border-[#1B2A24]/10 text-[10px] uppercase tracking-widest font-bold text-[#9C4A32]">
                Streefniveau: Boven Niveau
              </span>
            </div>
          </div>

          {/* Column 2: Navigatie */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1B2A24]/70">Navigatie</h4>
            <ul className="space-y-2 text-xs font-medium uppercase tracking-wider text-[#1B2A24]/80">
              <li>
                <button 
                  onClick={() => { onSelectTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('over-mij'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer"
                >
                  Over mij
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('leeruitkomsten'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer"
                >
                  Leeruitkomsten
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('sprints'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer"
                >
                  Sprints
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('bewijzen'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer"
                >
                  Bewijzen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#9C4A32] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Begeleiding en Externe bronnen */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1B2A24]/70">Begeleiding en Bronnen</h4>
            <p className="text-xs text-[#1B2A24]/80">
              Coach HU: <span className="font-medium text-[#1B2A24]">Jan van Rouwendal</span>
            </p>
            <div className="pt-2 space-y-2.5">
              <div>
                <a
                  href={SPRINT_LOGBOEK_DOWNLOAD}
                  download="sprintlogboek.xlsx"
                  className="inline-flex items-center gap-1.5 text-xs text-[#9C4A32] hover:opacity-80 font-medium uppercase tracking-wider cursor-pointer"
                  title="Download sprintlogboek.xlsx rechtstreeks"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Sprint Logboek (Excel)</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${studentProfile.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#1B2A24]/80 hover:text-[#9C4A32]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9C4A32]" />
                  <span>{studentProfile.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sleek bottom status bar without any em-dash */}
        <div className="pt-6 border-t border-[#1B2A24]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
            &copy; {new Date().getFullYear()} {studentProfile.name} · Hogeschool Utrecht en Zuyd Hogeschool
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C9A56B]" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]">Show &amp; Grow Volgt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D8B7A6]" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]">Boven Niveau Ambitie</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
