import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-32 relative z-10 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-mono text-xs">
            <Award className="w-3.5 h-3.5 text-emerald-400" /> Education & Recognition
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className={`glass-panel p-8 rounded-3xl relative group ${
                idx === 0 ? 'glass-emerald-green' :
                idx === 1 ? 'glass-cyan-blue' :
                idx === 2 ? 'glass-purple-violet' : 'glass-amber-gold'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-slate-300 bg-white/[0.03]">
                  {cert.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">{cert.year}</span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{cert.issuer}</span>
              </div>

              <div className="text-xs font-mono text-cyan-400 mt-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{cert.grade}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
