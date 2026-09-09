import React from 'react';
import { studentProfile } from '../data/portfolioData';
import { PhotoFrame } from '../components/PhotoFrame';
import { Sparkles, FolderKanban, Users } from 'lucide-react';

const personalBio = `Ik ben Jasmijn Mesu, 23 jaar oud. Momenteel zit ik in het derde jaar van mijn opleiding Facility Management aan Zuyd Hogeschool. Vanaf het begin van mijn studie wist ik dat mijn interesse niet ligt in de klassieke facilitaire hoek zoals schoonmaakbeheer, cateringcontracten of technisch gebouwbeheer. Waar mijn hart wél sneller van gaat kloppen is de organisatorische kant: processen analyseren en stroomlijnen, projecten van A tot Z coördineren, en vooral: mensen, taken en belangen met elkaar verbinden.`;

const whereFrom = `[Hier vul ik zelf aan: Waar kom ik vandaan, mijn persoonlijke achtergrond, wat mij heeft gevormd en waarom ik voor deze richting heb gekozen. Ruimte voor Jasmijn om haar eigen verhaal te vertellen.]`;

const whatMakesMeHappy = `[Hier vul ik zelf aan: Waar word ik blij van in het dagelijks leven en in mijn werk? Denk aan passies, specifieke talenten, dromen voor de toekomst na mijn afstuderen en wat mij energie geeft in samenwerkingen.]`;

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-14 py-6 md:py-10">
      
      {/* Page Header */}
      <div className="border-b border-[#3D2B2F]/10 pb-8 max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[1px] w-8 bg-[#B3543C]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B3543C]">
            Achtergrond &amp; Persoonlijkheid
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#3D2B2F] tracking-tight">
          Over mij
        </h1>
        <p className="mt-3 text-base text-[#3D2B2F]/80 leading-relaxed font-serif italic">
          &ldquo;Organiseren zit in mijn natuur: ik houd van structuur en overzicht, maar altijd met oog voor de mens achter het proces.&rdquo;
        </p>
      </div>

      {/* Main Grid: Story + Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Story Columns (7 cols) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Section 1: Wie ben ik & Studieachtergrond */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#3D2B2F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B3543C]" />
              Wie ik ben &amp; mijn achtergrond
            </h2>
            <div className="text-sm sm:text-base font-sans text-[#3D2B2F]/85 leading-relaxed bg-[#E7DFCF] p-5 border border-[#3D2B2F]/10">
              <p>{personalBio}</p>
            </div>
          </div>

          {/* Section 2: Waar ik vandaan kom (Placeholder voor Jasmijn) */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#3D2B2F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B3543C]" />
              Waar ik vandaan kom
            </h2>
            <div className="text-sm sm:text-base font-sans text-[#3D2B2F]/85 leading-relaxed bg-[#E7DFCF] p-5 border border-[#3D2B2F]/10 border-dashed">
              <p className="italic text-[#3D2B2F]/75">{whereFrom}</p>
            </div>
          </div>

          {/* Section 3: Waar word ik blij van (Talenten, passies, dromen) */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#3D2B2F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B3543C]" />
              Waar ik blij van word (talenten, passies &amp; dromen)
            </h2>
            <div className="text-sm sm:text-base font-sans text-[#3D2B2F]/85 leading-relaxed bg-[#E7DFCF] p-5 border border-[#3D2B2F]/10 border-dashed">
              <p className="italic text-[#3D2B2F]/75">{whatMakesMeHappy}</p>
            </div>
          </div>

          {/* Werkstijl: Excel & Canva */}
          <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-6 sm:p-7 space-y-4">
            <h3 className="font-serif text-xl text-[#3D2B2F]">
              Mijn werkwijze &amp; favoriete gereedschap
            </h3>
            <p className="text-sm text-[#3D2B2F]/85 leading-relaxed">
              Ik ben zelf geen programmeur, maar ik vind het heerlijk om structuur te brengen in complexe situaties:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F7F2E9] p-4 border border-[#3D2B2F]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#3D2B2F] font-semibold text-sm">
                  <FolderKanban className="w-4 h-4 text-[#B3543C]" />
                  <span>Excel: Overzicht &amp; Logboeken</span>
                </div>
                <p className="text-xs text-[#3D2B2F]/75 leading-relaxed">
                  Lijstjes, planningen, tijdpaden en evaluaties. Overzicht geeft rust en houvast in elk project.
                </p>
              </div>

              <div className="bg-[#F7F2E9] p-4 border border-[#3D2B2F]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#3D2B2F] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#D3A24C]" />
                  <span>Canva: Visueel &amp; Creatief</span>
                </div>
                <p className="text-xs text-[#3D2B2F]/75 leading-relaxed">
                  Complexe informatie helder en aantrekkelijk communiceren via visuals, schema&apos;s en strakke presentaties.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#3D2B2F]/70">
              <Users className="w-4 h-4 text-[#B3543C]" />
              <span>Karakter: Mensgericht, sociaal, doordacht en betrouwbaar.</span>
            </div>
          </div>

        </div>

        {/* Right Column: Single Photo Frame & Gegevens in het kort (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Photo 1: Portret van Jasmijn Mesu */}
          <div className="space-y-2">
            <PhotoFrame
              id="photo-about-1"
              defaultSrc={studentProfile.photoUrl || '/IMG_1185.jpg'}
              alt="Portretfoto van Jasmijn Mesu"
              caption="Facility Management Zuyd Hogeschool · Minor Futureproof met AI"
              aspectRatio="portrait"
            />
          </div>

          {/* Quick Info Box */}
          <div className="bg-[#E7DFCF] border border-[#3D2B2F]/10 p-5 sm:p-6 space-y-3 text-xs text-[#3D2B2F] shadow-xs">
            <h4 className="font-serif text-base font-bold tracking-tight text-[#3D2B2F] pb-1 border-b border-[#3D2B2F]/10">
              Gegevens in het kort
            </h4>
            <ul className="space-y-2 text-[#3D2B2F]/80 text-xs sm:text-[13px] leading-relaxed">
              <li className="flex flex-col sm:flex-row sm:justify-between py-0.5 border-b border-[#3D2B2F]/5">
                <span className="font-medium text-[#3D2B2F]">Naam:</span>
                <span className="text-[#3D2B2F]/90">{studentProfile.name}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-0.5 border-b border-[#3D2B2F]/5">
                <span className="font-medium text-[#3D2B2F]">Leeftijd:</span>
                <span className="text-[#3D2B2F]/90">{studentProfile.age} jaar</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-0.5 border-b border-[#3D2B2F]/5">
                <span className="font-medium text-[#3D2B2F]">Opleiding:</span>
                <span className="text-[#3D2B2F]/90">{studentProfile.study} ({studentProfile.institution})</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-0.5 border-b border-[#3D2B2F]/5">
                <span className="font-medium text-[#3D2B2F]">Minor:</span>
                <span className="text-[#3D2B2F]/90">{studentProfile.minor} ({studentProfile.minorInstitute})</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-0.5">
                <span className="font-medium text-[#3D2B2F]">Focusgebied:</span>
                <span className="text-[#3D2B2F]/90">Organiseren, procesverbetering &amp; projectcoördinatie</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
