import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function Footer({ onOpenAiBot }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-14 border-t border-white/10 relative z-10 bg-transparent backdrop-blur-xl select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info & Brand Narrative */}
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
            AA
          </div>
          <div>
            <div className="font-display font-semibold text-white text-sm">Areeba Amar</div>
            <div className="text-xs text-slate-400 font-mono">
              {PERSONAL_INFO.signatureTagline}
            </div>
          </div>
        </div>

        {/* Live PKT Clock */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>Lahore (PKT): <span className="text-cyan-300">{time || '12:50 PM'}</span></span>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <a
            href="https://areebabot-euneds6uhzlxxeyug5qog9.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open AreebaBot Live Demo"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Sparkles className="w-3.5 h-3.5" /> 🚀 Try AreebaBot Live
          </a>
          <span>•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn Profile"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <span>•</span>
          <span>Designed & Developed by Areeba Amar</span>
        </div>

      </div>
    </footer>
  );
}
