import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ClipboardList, Clock3, Plus, Trash2, Check, ZoomIn, X } from 'lucide-react';
import {
  LessonPage,
  buildLessonPage,
  generateScheduledLessons,
  getLessonImage,
  getLessonNoteStatus,
  loadStoredData,
  loadRemoteData,
  saveRemoteLesson,
  deleteRemoteLesson,
  saveStoredData,
  todayISO,
} from '../lib/lessonLog';

export const LearningLogPage: React.FC = () => {
  const initialStored = useRef(loadStoredData());
  const [customLessons, setCustomLessons] = useState<LessonPage[]>(initialStored.current.customLessons);
  const [notes, setNotes] = useState<Record<string, string>>(initialStored.current.notes);
  const [currentDate, setCurrentDate] = useState(todayISO());
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDate, setNewDate] = useState(todayISO());
  const [newLabel, setNewLabel] = useState('');
  const [saved, setSaved] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const saveTimeout = useRef<number | undefined>(undefined);

  const pages = useMemo<LessonPage[]>(() => {
    const scheduled = generateScheduledLessons();
    const merged = [...scheduled, ...customLessons].sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    return merged.map((lesson, index) => ({ ...lesson, lessonNumber: index + 1 }));
  }, [customLessons, currentDate]);

  useEffect(() => {
    const dateRefresh = window.setInterval(() => setCurrentDate(todayISO()), 60_000);
    return () => window.clearInterval(dateRefresh);
  }, []);

  // Open het notitieboek op de laatste (meest recente) les bij eerste keer laden.
  useEffect(() => {
    if (currentIndex === null && pages.length > 0) {
      setCurrentIndex(pages.length - 1);
    }
  }, [pages, currentIndex]);

  useEffect(() => {
    void loadRemoteData().then((remoteData) => {
      if (!remoteData) return;
      setCustomLessons(remoteData.customLessons);
      setNotes(remoteData.notes);
    });
  }, []);

  const goToPage = (index: number, dir: 1 | -1) => {
    if (index < 0 || index >= pages.length) return;
    setDirection(dir);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') { setLightboxOpen(false); return; }
      if (lightboxOpen) return;
      if (e.key === 'ArrowLeft') goToPage(currentIndex - 1, -1);
      if (e.key === 'ArrowRight') goToPage(currentIndex + 1, 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, pages.length, lightboxOpen]);

  useEffect(() => {
    setLightboxOpen(false);
  }, [currentIndex]);

  const currentPage = currentIndex !== null ? pages[currentIndex] : undefined;
  const currentImage = currentPage ? getLessonImage(currentPage.dateISO) : undefined;
  const todayId = currentDate;

  const statusLabels = {
    'has-notes': 'Aantekeningen aanwezig',
    'no-notes': 'Geen aantekeningen',
    pending: 'Aantekeningen komen later',
  } as const;

  const statusStyles = {
    'has-notes': 'border-[#9C4A32]/30 bg-[#F3EDE5] text-[#9C4A32]',
    'no-notes': 'border-[#1B2A24]/10 bg-[#EDE6D8]/60 text-[#1B2A24]/55',
    pending: 'border-[#C9A56B]/50 bg-[#F5E8CE] text-[#8B6428]',
  } as const;

  const handleNoteChange = (value: string) => {
    if (!currentPage) return;
    const updated = { ...notes, [currentPage.id]: value };
    setNotes(updated);
    setSaved(false);
    if (saveTimeout.current) window.clearTimeout(saveTimeout.current);
    saveTimeout.current = window.setTimeout(() => {
      saveStoredData({ notes: updated, customLessons });
      void saveRemoteLesson(currentPage, value);
      setSaved(true);
    }, 500);
  };

  const handleAddLesson = () => {
    if (!newDate) return;
    const lesson = buildLessonPage(newDate, newLabel.trim() || undefined);
    const updatedCustom = [...customLessons, lesson];
    setCustomLessons(updatedCustom);
    saveStoredData({ notes, customLessons: updatedCustom });
    void saveRemoteLesson(lesson, notes[lesson.id] ?? '');
    setShowAddForm(false);
    setNewLabel('');
  };

  const handleDeleteCustomLesson = (id: string) => {
    const updatedCustom = customLessons.filter((l) => l.id !== id);
    const updatedNotes = { ...notes };
    delete updatedNotes[id];
    setCustomLessons(updatedCustom);
    setNotes(updatedNotes);
    saveStoredData({ notes: updatedNotes, customLessons: updatedCustom });
    void deleteRemoteLesson(id);
    setCurrentIndex((idx) => (idx !== null ? Math.min(idx, updatedCustom.length + generateScheduledLessons().length - 1) : idx));
  };

  if (!currentPage || currentIndex === null) {
    return null;
  }

  return (
    <div className="space-y-10 py-6 md:py-10">

      {/* Header */}
      <div className="border-b border-[#1B2A24]/10 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[1px] w-8 bg-[#9C4A32]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C4A32]">
            Persoonlijk notitieboek · Elke maandag &amp; woensdag
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1B2A24] tracking-tight">
          Wat heb ik geleerd
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#1B2A24]/80 leading-relaxed font-sans max-w-2xl">
          Elke les heeft een eigen vak met de datum, de status en de beschikbare aantekeningen.
        </p>
      </div>

      {/* Lesson board */}
      <section aria-labelledby="lesson-board-title" className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#9C4A32]">
              <ClipboardList className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Overzicht lessen</span>
            </div>
            <h2 id="lesson-board-title" className="font-serif text-2xl text-[#1B2A24] mt-1">Mijn lesnotities</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider font-bold">
            <span className="px-2.5 py-1 border border-[#9C4A32]/30 bg-[#F3EDE5] text-[#9C4A32]">Aantekeningen</span>
            <span className="px-2.5 py-1 border border-[#1B2A24]/10 bg-[#EDE6D8]/60 text-[#1B2A24]/55">Geen aantekeningen</span>
            <span className="px-2.5 py-1 border border-[#C9A56B]/50 bg-[#F5E8CE] text-[#8B6428]">Komt later</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pages.map((lesson, lessonIndex) => {
            const status = getLessonNoteStatus(lesson.dateISO, notes[lesson.id]);
            const isLatestLesson = lessonIndex === pages.length - 1;
            const lessonImage = getLessonImage(lesson.dateISO);
            return (
              <article
                key={lesson.id}
                className={`text-left p-4 transition-colors ${
                  isLatestLesson
                    ? 'border-2 border-[#9C4A32] bg-[#F3EDE5]'
                    : 'border border-[#9C4A32]/45 bg-[#EDE6D8]/50 hover:border-[#9C4A32] hover:bg-[#F3EDE5]/70'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]/45">Les {lesson.lessonNumber}</span>
                  {lesson.dateISO === todayId && <span className="text-[9px] uppercase tracking-widest font-bold text-[#9C4A32]">Vandaag</span>}
                </div>
                <span className="block font-serif text-lg text-[#1B2A24] mt-1">{lesson.weekday} {lesson.dateLabel}</span>
                {lesson.label && (
                  <span className="block mt-1 text-[10px] uppercase tracking-[0.16em] font-bold text-[#9C4A32]">
                    {lesson.label}
                  </span>
                )}
                <span className={`mt-3 inline-flex items-center gap-1.5 px-2 py-1 border text-[10px] uppercase tracking-wider font-bold ${statusStyles[status]}`}>
                  {status === 'pending' ? <Clock3 className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                  {statusLabels[status]}
                </span>
                {lessonImage && (
                  <button
                    onClick={() => { setCurrentIndex(lessonIndex); setLightboxOpen(true); }}
                    className="group relative block w-full mt-4 cursor-zoom-in overflow-hidden border border-[#1B2A24]/10 bg-[#E8DED1]"
                    title="Afbeelding vergroten"
                  >
                    <img
                      src={lessonImage.src}
                      alt={lessonImage.alt}
                      className="block w-full max-h-[520px] object-contain object-top"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1B2A24]/80 text-[#EDE6D8] text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Uitvergroten
                    </span>
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Notebook */}
      <div className={`hidden mx-auto transition-[max-width] duration-300 ${currentImage ? 'max-w-[1000px]' : 'max-w-3xl'}`}>

        {/* The page itself, with a spiral-bound spine */}
        <div className="flex" style={{ perspective: 1400 }}>
          <div className="hidden sm:flex flex-col items-center justify-evenly w-6 shrink-0 bg-[#E8DED1] border border-r-0 border-[#1B2A24]/15 py-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-[#EDE6D8] border border-[#1B2A24]/20" />
            ))}
          </div>

          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage.id}
                custom={direction}
                initial={{ opacity: 0, rotateY: direction === 1 ? 35 : -35 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: direction === 1 ? -35 : 35 }}
                transition={{ duration: 0.32, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d', transformOrigin: direction === 1 ? 'left center' : 'right center' }}
                className={`bg-[#EDE6D8] border border-[#1B2A24]/15 flex flex-col shadow-xs ${
                  currentImage ? 'p-2 sm:p-3' : 'p-6 sm:p-10 min-h-[440px]'
                }`}
              >
                {/* Page header */}
                <div className={`flex items-start justify-between gap-4 border-b border-[#1B2A24]/10 pb-3 mb-3 ${currentImage ? 'px-1 pt-1' : ''}`}>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]/50">
                      Les {currentPage.lessonNumber}{currentPage.label ? ` · ${currentPage.label}` : ''}
                    </span>
                    <span className="block font-serif text-xl sm:text-2xl text-[#1B2A24] mt-1">
                      {currentPage.weekday} {currentPage.dateLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {currentPage.dateISO === todayId && (
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-[#9C4A32] text-white whitespace-nowrap">
                        Vandaag
                      </span>
                    )}
                    {currentPage.isCustom && (
                      <button
                        onClick={() => handleDeleteCustomLesson(currentPage.id)}
                        title="Verwijder deze pagina"
                        className="p-1.5 text-[#1B2A24]/40 hover:text-[#9C4A32] transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {currentImage ? (
                  <>
                    {/* Handgemaakte aantekeningenpagina, op echt formaat */}
                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="group relative block w-full cursor-zoom-in"
                    >
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="block w-full h-auto"
                      />
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1B2A24]/80 text-[#EDE6D8] text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Uitvergroten
                      </span>
                    </button>
                    <div className="pt-3 flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-widest font-medium text-[#1B2A24]/40 px-1">
                      <span>Eigen aantekeningenpagina</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Ruled note area */}
                    <textarea
                      value={notes[currentPage.id] ?? ''}
                      onChange={(e) => handleNoteChange(e.target.value)}
                      placeholder="Wat heb ik deze les geleerd? Schrijf hier je aantekeningen..."
                      className="flex-1 w-full min-h-[220px] resize-none bg-transparent outline-none font-sans text-sm sm:text-base text-[#1B2A24] leading-8 placeholder:text-[#1B2A24]/40"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(27,42,36,0.14) 32px)',
                        backgroundPositionY: '4px',
                      }}
                    />

                    <div className="pt-4 mt-2 border-t border-[#1B2A24]/10 flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-widest font-medium text-[#1B2A24]/40">
                      {saved ? (
                        <>
                          <Check className="w-3 h-3 text-[#9C4A32]" />
                          <span>Opgeslagen op dit apparaat</span>
                        </>
                      ) : (
                        <span>Bezig met opslaan...</span>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Add extra page */}
        <div className="mt-8 flex justify-center">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#1B2A24]/70 hover:text-[#9C4A32] border border-[#1B2A24]/15 hover:border-[#9C4A32] transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Extra lespagina toevoegen</span>
            </button>
          ) : (
            <div className="bg-[#F3EDE5] border border-[#1B2A24]/10 p-5 space-y-3 w-full max-w-sm">
              <div className="grid grid-cols-1 gap-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]/60">Datum</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="px-3 py-2 bg-[#EDE6D8] border border-[#1B2A24]/15 text-sm text-[#1B2A24] outline-none focus:border-[#9C4A32]"
                />
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1B2A24]/60">Label (optioneel)</label>
                <input
                  type="text"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="bv. inhaalles"
                  className="px-3 py-2 bg-[#EDE6D8] border border-[#1B2A24]/15 text-sm text-[#1B2A24] outline-none focus:border-[#9C4A32]"
                />
              </div>
              <div className="flex gap-2 justify-end pt-1">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 text-xs uppercase tracking-wider font-medium text-[#1B2A24]/60 hover:text-[#1B2A24] cursor-pointer"
                >
                  Annuleren
                </button>
                <button
                  onClick={handleAddLesson}
                  className="accent-btn px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium cursor-pointer"
                >
                  Toevoegen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox: uitvergrote aantekeningenpagina */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-[#1B2A24]/90 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              title="Sluiten"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#EDE6D8]/80 hover:text-[#EDE6D8] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain shadow-2xl cursor-default"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
