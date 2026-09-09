import React from 'react';
import { studentProfile } from '../data/portfolioData';
import { PhotoFrame } from '../components/PhotoFrame';
import { Sparkles, FolderKanban, Users } from 'lucide-react';

const personalBio = `Ik ben Jasmijn Mesu, 23 jaar oud. Momenteel zit ik in het derde jaar van mijn opleiding Facility Management aan Zuyd Hogeschool. Vanaf het begin van mijn studie wist ik dat mijn interesse niet ligt in de klassieke facilitaire hoek zoals schoonmaakbeheer, cateringcontracten of technisch gebouwbeheer. Waar mijn hart wél sneller van gaat kloppen is de organisatorische kant: processen analyseren en stroomlijnen, projecten van A tot Z coördineren, en vooral: mensen, taken en belangen met elkaar verbinden.`;

const whereFrom = `Ik kom oorspronkelijk uit Hilversum. Daar ben ik opgegroeid en mijn moeder woont er nog steeds. Voor mijn studie verhuisde ik naar Maastricht, waar ik begon aan de Hotel Management School. Ik heb daar veel geleerd en voel me nog steeds thuis in die wereld. Zo ben ik lid van studentenvereniging Amphitryon en dispuut Alcmenae.

Na twee jaar merkte ik dat het traditionele hotelvak niet was waar mijn energie vandaan kwam. Wat mij juist trok, was alles wat met organiseren, plannen en mensen aansturen te maken heeft. Die ontdekking bracht me bij Facility Management in Heerlen. Deze opleiding past beter bij mijn talenten. Minder gericht op operationele hotelzaken, meer op processen, projecten en management.

Tijdens mijn managementstage bij ABN AMRO MeesPierson, bij Project Support Events en recruitment, merkte ik hoeveel energie ik krijg van de combinatie van organiseren en persoonlijk contact. Gesprekken voeren, mensen op hun gemak stellen en tegelijk zorgen dat evenementen en trajecten soepel verlopen. Die combinatie is voor mij een rode draad geworden in wat ik zoek voor mijn toekomst.`;

const whatMakesMeHappy = `Ik krijg energie van contact met mensen. Luisteren naar hun verhaal, ontdekken wat bij iemand past en het gevoel dat ik iets voor iemand kan betekenen. Tegelijk hou ik van overzicht. Een planning die klopt, een lijstje dat compleet is, een proces dat net iets soepeler loopt dan eerst. Die twee kanten van mezelf, het sociale en het organisatorische, probeer ik steeds met elkaar te verbinden.

Ik werk graag met Excel om dingen overzichtelijk te maken en met Canva als ik iets visueel wil vormgeven. Ook word ik steeds nieuwsgieriger naar AI. Niet als programmeur, maar als iemand die wil ontdekken hoe het praktisch kan helpen bij organiseren, werken en het verbeteren van processen.`;

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-14 py-6 md:py-10">
      
      {/* Page Header */}
      <div className="border-b border-[#1B2A24]/10 pb-8 max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[1px] w-8 bg-[#9C4A32]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
            Achtergrond &amp; Persoonlijkheid
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2A24] tracking-tight">
          Over mij
        </h1>
        <p className="mt-3 text-base text-[#1B2A24]/80 leading-relaxed font-serif italic">
          &ldquo;Organiseren zit in mijn natuur: ik houd van structuur en overzicht, maar altijd met oog voor de mens achter het proces.&rdquo;
        </p>
      </div>

      {/* Main Grid: Story + Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Story Columns (7 cols) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Section 1: Wie ben ik & Studieachtergrond */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#1B2A24] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9C4A32]" />
              Wie ik ben &amp; mijn achtergrond
            </h2>
            <div className="text-sm sm:text-base font-sans text-[#1B2A24]/85 leading-relaxed bg-[#CEC5B5] p-5 border border-[#1B2A24]/10">
              <p>{personalBio}</p>
            </div>
          </div>

          {/* Section 2: Waar ik vandaan kom (Placeholder voor Jasmijn) */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#1B2A24] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9C4A32]" />
              Waar ik vandaan kom
            </h2>
            <div className="text-sm sm:text-base font-sans text-[#1B2A24]/85 leading-relaxed bg-[#CEC5B5] p-5 border border-[#1B2A24]/10 space-y-3">
              {whereFrom.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Section 3: Waar word ik blij van (Talenten, passies, dromen) */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#1B2A24] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9C4A32]" />
              Waar ik blij van word (talenten, passies &amp; dromen)
            </h2>
            <div className="text-sm sm:text-base font-sans text-[#1B2A24]/85 leading-relaxed bg-[#CEC5B5] p-5 border border-[#1B2A24]/10 space-y-3">
              {whatMakesMeHappy.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Werkstijl: Excel & Canva */}
          <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-6 sm:p-7 space-y-4">
            <h3 className="font-serif text-xl text-[#1B2A24]">
              Mijn werkwijze &amp; favoriete gereedschap
            </h3>
            <p className="text-sm text-[#1B2A24]/85 leading-relaxed">
              Ik ben zelf geen programmeur, maar ik vind het heerlijk om structuur te brengen in complexe situaties:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#EDE6D8] p-4 border border-[#1B2A24]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#1B2A24] font-semibold text-sm">
                  <FolderKanban className="w-4 h-4 text-[#9C4A32]" />
                  <span>Excel: Overzicht &amp; Logboeken</span>
                </div>
                <p className="text-xs text-[#1B2A24]/75 leading-relaxed">
                  Lijstjes, planningen, tijdpaden en evaluaties. Overzicht geeft rust en houvast in elk project.
                </p>
              </div>

              <div className="bg-[#EDE6D8] p-4 border border-[#1B2A24]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#1B2A24] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#C9A56B]" />
                  <span>Canva: Visueel &amp; Creatief</span>
                </div>
                <p className="text-xs text-[#1B2A24]/75 leading-relaxed">
                  Complexe informatie helder en aantrekkelijk communiceren via visuals, schema&apos;s en strakke presentaties.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#1B2A24]/70">
              <Users className="w-4 h-4 text-[#9C4A32]" />
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
          <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-5 sm:p-6 shadow-xs">
            <h4 className="font-serif text-base font-bold tracking-tight text-[#1B2A24] pb-3 mb-4 border-b border-[#1B2A24]/10">
              Gegevens in het kort
            </h4>
            <dl className="space-y-4">
              <div>
                <dt className="text-[10px] uppercase tracking-wider font-semibold text-[#1B2A24]/55 mb-1">Naam</dt>
                <dd className="text-sm text-[#1B2A24] font-medium leading-snug">{studentProfile.name}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider font-semibold text-[#1B2A24]/55 mb-1">Leeftijd</dt>
                <dd className="text-sm text-[#1B2A24] font-medium leading-snug">{studentProfile.age} jaar</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider font-semibold text-[#1B2A24]/55 mb-1">Opleiding</dt>
                <dd className="text-sm text-[#1B2A24] font-medium leading-snug">{studentProfile.study} ({studentProfile.institution})</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider font-semibold text-[#1B2A24]/55 mb-1">Minor</dt>
                <dd className="text-sm text-[#1B2A24] font-medium leading-snug">{studentProfile.minor} ({studentProfile.minorInstitute})</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider font-semibold text-[#1B2A24]/55 mb-1">Focusgebied</dt>
                <dd className="text-sm text-[#1B2A24] font-medium leading-snug">Organiseren, procesverbetering &amp; projectcoördinatie</dd>
              </div>
            </dl>
          </div>

        </div>

      </div>

    </div>
  );
};
