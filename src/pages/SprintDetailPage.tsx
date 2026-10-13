import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, CheckSquare, Flag, ListChecks, MessageSquareText, RefreshCw, ShieldCheck, Trophy } from 'lucide-react';
import { Sprint } from '../types';
import { fadeUp, cardStagger, fadeUpTransition } from '../lib/motionVariants';

interface SprintDetailPageProps {
  sprint: Sprint;
  onBack: () => void;
  onNavigateToEvidence: (sprintId?: number) => void;
}

const criteriaList = (items: string[]) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={`${item}-${index}`} className="flex gap-3 text-sm text-[#1B2A24]/85 leading-relaxed">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#9C4A32]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const SprintDetailPage: React.FC<SprintDetailPageProps> = ({ sprint, onBack, onNavigateToEvidence }) => {
  const stories = sprint.stories || [];

  return (
    <div className="space-y-10 py-6 md:py-10">
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={fadeUpTransition}>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#9C4A32] hover:text-[#1B2A24] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar alle sprints
        </button>

        <div className="mt-7 border-b border-[#1B2A24]/10 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="w-4 h-4 text-[#9C4A32]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
                  Sprintdetails · {sprint.statusText}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2A24] tracking-tight">{sprint.title}</h1>
              <p className="mt-3 text-base text-[#1B2A24]/80 leading-relaxed">{sprint.focus}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#1B2A24]/70">
                <Calendar className="w-4 h-4 text-[#9C4A32]" />
                <span>{sprint.period} · Show &amp; Grow: {sprint.showAndGrowDate}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigateToEvidence(sprint.id)}
              className="accent-btn inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium uppercase tracking-wider cursor-pointer shrink-0"
            >
              <ListChecks className="w-4 h-4" />
              Bekijk bewijsstukken
            </button>
          </div>
        </div>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#9C4A32]">Onderzocht</span>
          <p className="mt-2 text-sm leading-relaxed text-[#1B2A24]/85">{sprint.researched}</p>
        </div>
        <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#9C4A32]">Gemaakt</span>
          <p className="mt-2 text-sm leading-relaxed text-[#1B2A24]/85">{sprint.created}</p>
        </div>
        <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#9C4A32]">Geleerd</span>
          <p className="mt-2 text-sm leading-relaxed text-[#1B2A24]/85">{sprint.learned}</p>
        </div>
      </section>

      <section className="space-y-5">
        <div className="border-b border-[#1B2A24]/10 pb-4">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">Werkvoorraad</span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1B2A24]">Stories van {sprint.title}</h2>
          <p className="mt-2 text-sm text-[#1B2A24]/75 leading-relaxed">
            Hier staan de user stories, afspraken en kwaliteitscriteria die ik voor deze sprint heb opgesteld en uitgevoerd.
          </p>
        </div>

        {stories.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="show"
            variants={cardStagger}
            className="space-y-6"
          >
            {stories.map((story, index) => (
              <motion.article
                key={`${story.id}-${index}`}
                variants={fadeUp}
                transition={fadeUpTransition}
                className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 border-b border-[#1B2A24]/10 pb-5">
                  <span className="inline-flex items-center justify-center w-12 h-10 bg-[#9C4A32] text-white font-serif font-bold text-lg shrink-0">
                    {story.id}
                  </span>
                  <p className="whitespace-pre-line text-base sm:text-lg font-serif leading-relaxed text-[#1B2A24]">
                    {story.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div className="bg-[#EDE6D8] border border-[#1B2A24]/10 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckSquare className="w-4 h-4 text-[#9C4A32]" />
                      <h3 className="text-xs uppercase tracking-widest font-bold text-[#1B2A24]">Acceptatiecriteria</h3>
                    </div>
                    {criteriaList(story.acceptanceCriteria)}
                  </div>
                  <div className="bg-[#EDE6D8] border border-[#1B2A24]/10 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-4 h-4 text-[#9C4A32]" />
                      <h3 className="text-xs uppercase tracking-widest font-bold text-[#1B2A24]">Kwaliteitscriteria</h3>
                    </div>
                    {criteriaList(story.qualityCriteria)}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-6 text-sm text-[#1B2A24]/70">
            Voor deze sprint zijn nog geen stories ingevuld.
          </div>
        )}
      </section>

      {sprint.feedback && sprint.feedback.length > 0 && (
        <section className="space-y-5">
          <div className="border-b border-[#1B2A24]/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">Feedback</span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1B2A24]">Wat anderen teruggaven</h2>
          </div>
          <div className="space-y-5">
            {sprint.feedback.map((item) => (
              <article key={`${item.date}-${item.from}`} className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5 sm:p-7">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[#9C4A32]">
                  <MessageSquareText className="w-4 h-4" />
                  <span>{item.date} · {item.from}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#1B2A24]/85">{item.feedback}</p>
                <p className="mt-4 border-l-2 border-[#9C4A32] pl-4 text-sm leading-relaxed text-[#1B2A24]/85"><strong>Mijn actie:</strong> {item.action}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {sprint.mastery && sprint.mastery.length > 0 && (
        <section className="space-y-5">
          <div className="border-b border-[#1B2A24]/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">Zelfevaluatie</span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1B2A24]">Mastery per leeruitkomst</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sprint.mastery.map((item) => (
              <article key={item.outcome} className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-4 h-4 text-[#9C4A32] shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-widest font-bold text-[#9C4A32]">{item.outcome}</span>
                      <h3 className="mt-1 font-serif text-lg text-[#1B2A24]">{item.title}</h3>
                    </div>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-[#9C4A32]">{item.level}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#1B2A24]/85">{item.evidence}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {sprint.reflection && (
        <section className="space-y-5">
          <div className="border-b border-[#1B2A24]/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">Reflectie · {sprint.reflection.date}</span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1B2A24]">Terugkijken op Sprint 3</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5">
              <RefreshCw className="w-4 h-4 text-[#9C4A32]" />
              <h3 className="mt-3 text-xs uppercase tracking-widest font-bold text-[#1B2A24]">Wat heb ik geleerd?</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1B2A24]/85">{sprint.reflection.learned}</p>
            </div>
            <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5">
              <CheckSquare className="w-4 h-4 text-[#9C4A32]" />
              <h3 className="mt-3 text-xs uppercase tracking-widest font-bold text-[#1B2A24]">Wat behoud ik?</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1B2A24]/85">{sprint.reflection.keep}</p>
            </div>
            <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5">
              <Flag className="w-4 h-4 text-[#9C4A32]" />
              <h3 className="mt-3 text-xs uppercase tracking-widest font-bold text-[#1B2A24]">Wat ga ik anders doen?</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1B2A24]/85">{sprint.reflection.change}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
