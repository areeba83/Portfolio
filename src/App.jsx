import React, { useState, lazy, Suspense } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import TechArsenalSection from './components/TechArsenalSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceEducation from './components/ExperienceEducation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const InteractiveChatbotModal = lazy(() => import('./components/InteractiveChatbotModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

export default function App() {
  const [isAiBotOpen, setIsAiBotOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      {/* Background Interactive Mesh & Particle Shader */}
      <BackgroundCanvas />

      {/* Global Navigation Header */}
      <Navbar
        onOpenAiBot={() => setIsAiBotOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10 space-y-12">
        <Hero
          onOpenAiBot={() => setIsAiBotOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <ProjectsSection onOpenAiBot={() => setIsAiBotOpen(true)} />
        <TechArsenalSection />
        <CertificationsSection />
        <ExperienceEducation />
        <ContactSection onOpenAiBot={() => setIsAiBotOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenAiBot={() => setIsAiBotOpen(true)} />

      {/* Interactive Modals (Lazy Loaded) */}
      <Suspense fallback={null}>
        {isAiBotOpen && (
          <InteractiveChatbotModal
            isOpen={isAiBotOpen}
            onClose={() => setIsAiBotOpen(false)}
          />
        )}
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}
