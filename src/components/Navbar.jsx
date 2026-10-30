import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinIcon } from './SocialIcons';

const NAV_LINKS = [
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Education', href: '#certifications', id: 'certifications' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ onOpenAiBot, _onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar glass background state
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // 2. Reading progress bar percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }

      // 3. Active section observer logic based on viewport scroll position
      const sections = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = currentScrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
      if (currentScrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-50 select-none" aria-label="Main Navigation">
      
      {/* Top Subtle Reading Progress Indicator */}
      <div className="w-full h-0.5 bg-white/[0.05] relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Page scroll progress"
        />
      </div>

      <div className="px-4 sm:px-8 pt-4">
        <div
          className={`max-w-5xl mx-auto rounded-2xl transition-all duration-500 border ${
            scrolled
              ? 'bg-[#090d16]/85 backdrop-blur-2xl border-white/10 shadow-2xl py-2.5 px-5'
              : 'bg-[#0f172a]/30 backdrop-blur-md border-white/[0.06] py-3 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
              aria-label="Areeba Amar Portfolio Home"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs group-hover:border-cyan-400/40 transition-colors">
                AA
              </div>
              <div>
                <div className="font-display font-semibold text-slate-100 text-sm tracking-tight group-hover:text-cyan-400 transition-colors">
                  Areeba Amar
                </div>
                <p className="text-[10px] text-slate-400 font-mono hidden sm:block">Software Engineer</p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] rounded-full px-3 py-1 backdrop-blur-md" aria-label="Desktop Nav">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white/[0.1] text-white font-semibold border border-white/10 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Open for Software Roles
              </div>

              <a
                href="https://areebabot-euneds6uhzlxxeyug5qog9.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open AreebaBot Live Demo"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>🚀 Try AreebaBot Live</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn Profile"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="https://drive.google.com/file/d/1yz8gPTrOazLPOjYQpeEDAJwkQUVbBqRf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenAiBot}
                className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                aria-label="Open AreebaBot RAG"
              >
                <Bot className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-3 border-t border-white/10 flex flex-col gap-2 pb-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href="https://areebabot-euneds6uhzlxxeyug5qog9.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open AreebaBot Live Demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono text-center"
                >
                  🚀 Try AreebaBot Live
                </a>
                <a
                  href="https://drive.google.com/file/d/1yz8gPTrOazLPOjYQpeEDAJwkQUVbBqRf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
