import React, { useState } from 'react';
import { studentProfile, SPRINT_LOGBOEK_DOWNLOAD } from '../data/portfolioData';
import { Mail, Linkedin, Download, ExternalLink, MapPin, GraduationCap, Check } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studentProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="space-y-12 py-6 md:py-10">
      
      {/* Page Header */}
      <div className="border-b border-[#3D2B2F]/10 pb-8 max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[1px] w-8 bg-[#B3543C]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B3543C]">
            Contact en Verantwoording
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#3D2B2F] tracking-tight">
          Contact
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#3D2B2F]/80 leading-relaxed font-sans">
          Heb je vragen over mijn onderzoek, feedback tijdens de Show &amp; Grow-sessies, of wil je van gedachten wisselen over de inzet van AI binnen facilitaire en organisatorische processen? Neem gerust contact op.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Contact Card (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-6 sm:p-8 space-y-6">
            <h2 className="font-serif text-2xl text-[#3D2B2F]">
              {studentProfile.name}
            </h2>

            <p className="text-sm font-sans text-[#3D2B2F]/85 leading-relaxed">
              Derdejaars studente Facility Management (Zuyd Hogeschool) &amp; minorstudente Futureproof met AI (Hogeschool Utrecht).
            </p>

            <div className="space-y-4 pt-2 border-t border-[#3D2B2F]/10 text-sm font-sans">
              {/* E-mailadres */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-[#F7F2E9] border border-[#3D2B2F]/10">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B3543C]" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#3D2B2F]/60 font-bold">E-mailadres</span>
                    <a 
                      href={`mailto:${studentProfile.email}`} 
                      className="font-medium text-[#3D2B2F] hover:text-[#B3543C] transition-colors"
                    >
                      {studentProfile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="text-xs px-3 py-1.5 bg-[#E7DFCF] hover:bg-[#D8CEBC] text-[#3D2B2F] border border-[#3D2B2F]/15 transition-colors cursor-pointer self-start sm:self-auto inline-flex items-center gap-1 uppercase tracking-wider font-medium"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B3543C]" />
                      <span>Gekopieerd!</span>
                    </>
                  ) : (
                    <span>Kopieer</span>
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3.5 bg-[#F7F2E9] border border-[#3D2B2F]/10">
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#B3543C]" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#3D2B2F]/60 font-bold">LinkedIn profiel</span>
                    <span className="font-medium text-[#3D2B2F]">linkedin.com/in/jasmijn-mesu</span>
                  </div>
                </div>
                <a
                  href={studentProfile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 bg-[#E7DFCF] hover:bg-[#D8CEBC] text-[#3D2B2F] border border-[#3D2B2F]/15 transition-colors inline-flex items-center gap-1 uppercase tracking-wider font-medium"
                >
                  <span>Bekijk</span>
                  <ExternalLink className="w-3 h-3 text-[#B3543C]" />
                </a>
              </div>

              {/* Integraal Logboek */}
              <div className="flex items-center justify-between p-3.5 bg-[#F7F2E9] border border-[#3D2B2F]/10">
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-[#B3543C]" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#3D2B2F]/60 font-bold">Integraal Sprint Logboek (Excel)</span>
                    <span className="font-medium text-[#3D2B2F]">Direct downloadbaar (sprintlogboek.xlsx)</span>
                  </div>
                </div>
                <a
                  href={SPRINT_LOGBOEK_DOWNLOAD}
                  download="sprintlogboek.xlsx"
                  className="accent-btn text-xs px-3 py-1.5 transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider font-medium cursor-pointer"
                  title="Download sprintlogboek.xlsx rechtstreeks"
                >
                  <span>Downloaden</span>
                  <Download className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Begeleiding & Onderwijsinstellingen (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Begeleiders / Coaches */}
          <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-6 space-y-4">
            <h3 className="font-serif text-lg text-[#3D2B2F] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#B3543C]" />
              Coach Minor HU
            </h3>
            <p className="text-xs text-[#3D2B2F]/80 leading-relaxed">
              Mijn coach voor begeleiding, Show &amp; Grow feedback en toetsing:
            </p>

            <ul className="space-y-3 pt-1 text-xs">
              {studentProfile.coaches.map((coach) => (
                <li key={coach.name} className="p-3 bg-[#F7F2E9] border border-[#3D2B2F]/10">
                  <span className="block font-medium text-[#3D2B2F] text-sm">
                    {coach.name}
                  </span>
                  <span className="text-[#3D2B2F]/70">
                    {coach.role} · {coach.institution}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Onderwijsinstellingen */}
          <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-6 space-y-3 text-xs">
            <h3 className="font-serif text-lg text-[#3D2B2F] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B3543C]" />
              Onderwijsinstellingen
            </h3>
            <div className="space-y-2 text-[#3D2B2F]/80 leading-relaxed">
              <p>
                <strong className="text-[#3D2B2F]">Minor:</strong> Futureproof met AI (Hogeschool Utrecht, Padualaan 99, Utrecht)
              </p>
              <p>
                <strong className="text-[#3D2B2F]">Hoofdopleiding:</strong> Facility Management (Zuyd Hogeschool, Nieuw Eyckholt 300, Heerlen)
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
