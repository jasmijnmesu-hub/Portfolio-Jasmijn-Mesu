import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronLeft, ChevronRight, Plus, Trash2, Check, ZoomIn, X } from 'lucide-react';
import {
  LessonPage,
  buildLessonPage,
  generateScheduledLessons,
  getLessonImage,
  loadStoredData,
  saveStoredData,
  todayISO,
} from '../lib/lessonLog';

export const LearningLogPage: React.FC = () => {
  const initialStored = useRef(loadStoredData());
  const [customLessons, setCustomLessons] = useState<LessonPage[]>(initialStored.current.customLessons);
  const [notes, setNotes] = useState<Record<string, string>>(initialStored.current.notes);
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
  }, [customLessons]);

  // Open het notitieboek op de laatste (meest recente) les bij eerste keer laden.
  useEffect(() => {
    if (currentIndex === null && pages.length > 0) {
      setCurrentIndex(pages.length - 1);
    }
  }, [pages, currentIndex]);

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
  const todayId = todayISO();

  const handleNoteChange = (value: string) => {
    if (!currentPage) return;
    const updated = { ...notes, [currentPage.id]: value };
    setNotes(updated);
    setSaved(false);
    if (saveTimeout.current) window.clearTimeout(saveTimeout.current);
    saveTimeout.current = window.setTimeout(() => {
      saveStoredData({ notes: updated, customLessons });
      setSaved(true);
    }, 500);
  };

  const handleAddLesson = () => {
    if (!newDate) return;
    const lesson = buildLessonPage(newDate, newLabel.trim() || undefined);
    const updatedCustom = [...customLessons, lesson];
    setCustomLessons(updatedCustom);
    saveStoredData({ notes, customLessons: updatedCustom });
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
          Na elke les blader ik een pagina verder in dit notitieboek en werk ik mijn aantekeningen uit wat ik heb geleerd.
          Zo bouw ik stap voor stap een overzicht op van mijn groei door de minor heen.
        </p>
      </div>

      {/* Notebook */}
      <div className={`mx-auto transition-[max-width] duration-300 ${currentImage ? 'max-w-[1000px]' : 'max-w-3xl'}`}>

        {/* Page navigation strip */}
        <div className="flex items-center justify-between mb-4 px-1">
          <button
            onClick={() => goToPage(currentIndex - 1, -1)}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#1B2A24]/70 hover:text-[#9C4A32] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[#1B2A24]/70 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Vorige les</span>
          </button>

          <div className="flex items-center gap-2 text-[#9C4A32]">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-widest font-bold">
              Les {currentPage.lessonNumber} van {pages.length}
            </span>
          </div>

          <button
            onClick={() => goToPage(currentIndex + 1, 1)}
            disabled={currentIndex === pages.length - 1}
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#1B2A24]/70 hover:text-[#9C4A32] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[#1B2A24]/70 transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">Volgende les</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* The page itself, with a spiral-bound spine */}
        <div className="flex" style={{ perspective: 1400 }}>
          <div className="hidden sm:flex flex-col items-center justify-evenly w-6 shrink-0 bg-[#CEC5B5] border border-r-0 border-[#1B2A24]/15 py-8">
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

        {/* Page dots */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5">
          {pages.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goToPage(i, i > currentIndex ? 1 : -1)}
              title={`Les ${p.lessonNumber} · ${p.weekday} ${p.dateLabel}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentIndex ? 'bg-[#9C4A32] w-5' : 'bg-[#1B2A24]/20 hover:bg-[#1B2A24]/40 w-2'
              }`}
            />
          ))}
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
            <div className="bg-[#CEC5B5] border border-[#1B2A24]/10 p-5 space-y-3 w-full max-w-sm">
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
