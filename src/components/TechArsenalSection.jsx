import React, { useState } from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { Code2 } from 'lucide-react';

export default function TechArsenalSection() {
  const [activeTab, setActiveTab] = useState(SKILLS_CATEGORIES[0].id);

  const currentCategory = SKILLS_CATEGORIES.find(c => c.id === activeTab) || SKILLS_CATEGORIES[0];

  const getCardGlassClass = (tabId, idx) => {
    if (tabId === 'ai-ml') {
      return idx % 2 === 0 ? 'glass-purple-violet' : 'glass-cyan-blue';
    }
    if (tabId === 'fullstack') {
      return idx % 2 === 0 ? 'glass-indigo-cyan' : 'glass-panel';
    }
    if (tabId === 'qa-testing') {
      return idx % 2 === 0 ? 'glass-rose-pink' : 'glass-panel';
    }
    return idx % 2 === 0 ? 'glass-emerald-green' : 'glass-amber-gold';
  };

  return (
    <section id="skills" className="py-32 relative z-10 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-mono text-xs">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Technical Skills
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineering skills across AI Development, Full-Stack MERN, Automated Testing, and Core Computer Science.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="tablist" aria-label="Technical Arsenal Categories">
          {SKILLS_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-400 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeTab === cat.id
                  ? `glass-panel text-white shadow-xl ${
                      cat.id === 'ai-ml' ? 'glass-purple-violet' :
                      cat.id === 'fullstack' ? 'glass-cyan-blue' :
                      cat.id === 'qa-testing' ? 'glass-rose-pink' : 'glass-emerald-green'
                    }`
                  : 'bg-[#0b0f17]/60 border-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <div className="font-display font-semibold text-sm text-white">{cat.name}</div>
              <div className="text-[11px] font-mono text-slate-400 mt-1 line-clamp-1">{cat.description}</div>
            </button>
          ))}
        </div>

        {/* Active Skills Detail Panel */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">{currentCategory.name}</h3>
              <p className="text-xs font-mono text-cyan-400 mt-1">{currentCategory.description}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
              Verified Stack
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className={`glass-panel ${getCardGlassClass(activeTab, idx)} p-5 rounded-2xl transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-semibold text-slate-200 text-sm">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                    {skill.tag}
                  </span>
                </div>

                <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
