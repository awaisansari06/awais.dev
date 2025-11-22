import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative bg-background text-slate-300">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000"></div>
      </div>

      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {/* @ts-ignore */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><SkillsPage /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><ExperiencePage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;