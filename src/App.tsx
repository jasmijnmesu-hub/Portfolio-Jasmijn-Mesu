import React, { useState, useEffect } from 'react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LearningOutcomesPage } from './pages/LearningOutcomesPage';
import { SprintsPage } from './pages/SprintsPage';
import { EvidencePage } from './pages/EvidencePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [evidenceLuFilter, setEvidenceLuFilter] = useState<string | undefined>(undefined);
  const [evidenceSprintFilter, setEvidenceSprintFilter] = useState<number | undefined>(undefined);

  // Sync with window.location.hash for shareable links & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'over-mij', 'leeruitkomsten', 'sprints', 'bewijzen', 'contact'].includes(hash)) {
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
    <div className="min-h-screen flex flex-col bg-[#F7F2E9] text-[#3D2B2F] font-sans antialiased selection:bg-[#CE9FA0] selection:text-[#3D2B2F]">
      {/* Fixed top navigation */}
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Page Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
