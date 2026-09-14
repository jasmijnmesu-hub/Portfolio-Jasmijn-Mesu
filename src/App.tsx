import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { CountdownBar } from './components/CountdownBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LearningOutcomesPage } from './pages/LearningOutcomesPage';
import { SprintsPage } from './pages/SprintsPage';
import { EvidencePage } from './pages/EvidencePage';
import { LearningLogPage } from './pages/LearningLogPage';
import { ContactPage } from './pages/ContactPage';
import { GeminiChatbot } from './components/GeminiChatbot';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [evidenceLuFilter, setEvidenceLuFilter] = useState<string | undefined>(undefined);
  const [evidenceSprintFilter, setEvidenceSprintFilter] = useState<number | undefined>(undefined);

  // Sync with window.location.hash for shareable links & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'over-mij', 'leeruitkomsten', 'sprints', 'bewijzen', 'geleerd', 'contact'].includes(hash)) {
        setActiveTab(hash as NavTab);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToEvidenceWithLu = (luCode?: string) => {
    setEvidenceLuFilter(luCode || 'ALL');
    setEvidenceSprintFilter(undefined);
    setActiveTab('bewijzen');
    window.location.hash = 'bewijzen';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToEvidenceWithSprint = (sprintId?: number) => {
    setEvidenceSprintFilter(sprintId);
    setEvidenceLuFilter('ALL');
    setActiveTab('bewijzen');
    window.location.hash = 'bewijzen';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EDE6D8] text-[#1B2A24] font-sans antialiased selection:bg-[#D8B7A6] selection:text-[#1B2A24]">
      {/* Fixed top navigation, with the Show & Grow countdown pinned above it */}
      <div className="sticky top-0 z-50">
        <CountdownBar />
        <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />
      </div>

      {/* Main Page Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === 'home' && (
              <HomePage onNavigate={handleSelectTab} />
            )}

            {activeTab === 'over-mij' && (
              <AboutPage />
            )}

            {activeTab === 'leeruitkomsten' && (
              <LearningOutcomesPage onNavigateToEvidence={handleNavigateToEvidenceWithLu} />
            )}

            {activeTab === 'sprints' && (
              <SprintsPage onNavigateToEvidence={handleNavigateToEvidenceWithSprint} />
            )}

            {activeTab === 'bewijzen' && (
              <EvidencePage
                key={`${evidenceLuFilter}-${evidenceSprintFilter}`}
                initialLuFilter={evidenceLuFilter}
                initialSprintFilter={evidenceSprintFilter}
              />
            )}

            {activeTab === 'geleerd' && (
              <LearningLogPage />
            )}

            {activeTab === 'contact' && (
              <ContactPage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer onSelectTab={handleSelectTab} />
      <GeminiChatbot />
    </div>
  );
}
