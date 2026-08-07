import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection({ _onOpenAiBot }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };



  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/[0.08] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Get In Touch
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Let's Connect.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I'm always open to discussing internships, AI projects, software engineering opportunities, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quick Contact & Social Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-4">
            
            {/* Email Card */}
            <div className="glass-panel glass-cyan-blue p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-display font-semibold text-white text-sm hover:text-cyan-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Copy Email"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel glass-purple-violet p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-indigo-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                  <div className="font-display font-semibold text-white text-sm">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Copy Phone"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Links */}
            <div className="glass-panel glass-emerald-green p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub Profile in a new tab"
                  className="flex-1 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  GitHub Profile
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn Profile in a new tab"
                  className="flex-1 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Static Contact CTA */}
          <div className="lg:col-span-7 h-full">
            <div className="glass-panel glass-premium-cta p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center h-full">
              
              <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-violet-400 mb-6 shadow-xl">
                <Send className="w-8 h-8 -ml-1 mt-1" />
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
                Let's Build Something Together
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mb-10">
                I'm always open to discussing internships, AI projects, software engineering opportunities, and collaborations.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-6 py-3.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 font-mono text-sm font-semibold flex items-center gap-2.5 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-lg hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-sm font-semibold flex items-center gap-2.5 transition-all focus-visible:ring-2 focus-visible:ring-white/50 hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-sm font-semibold flex items-center gap-2.5 transition-all focus-visible:ring-2 focus-visible:ring-white/50 hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
                
                <a
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-sm font-semibold flex items-center gap-2.5 transition-all focus-visible:ring-2 focus-visible:ring-white/50 hover:-translate-y-0.5"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
