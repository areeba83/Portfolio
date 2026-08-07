import React, { useState, lazy, Suspense } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Sparkles, Cpu, ArrowRight, Terminal, Layers, ShieldCheck, AlertTriangle, Lightbulb, Zap, Activity, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ArchitectureDiagram from './ArchitectureDiagram';

const ProjectModal = lazy(() => import('./ProjectModal'));

// Interactive Visual Preview Component for each project case study
function ProjectVisualIdentity({ project, onOpenAiBot }) {
  const { id } = project;

  if (id === 'areeba-bot') {
    return (
      <div className="relative w-full h-full min-h-[360px] rounded-3xl bg-gradient-to-br from-cyan-950/40 via-indigo-950/30 to-[#030712] border border-cyan-500/30 p-6 flex flex-col justify-between overflow-hidden group">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            RAG Vector Database Architecture
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
            Groq Acceleration
          </span>
        </div>

        <div className="my-6 z-10 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '22s' }}></div>
            <div className="w-20 h-20 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 backdrop-blur-xl flex flex-col items-center justify-center text-cyan-300 shadow-xl">
              <Cpu className="w-8 h-8 text-cyan-400 mb-1" />
              <span className="text-[9px] font-mono font-bold">FAISS 384d</span>
            </div>
          </div>

          <div className="font-mono text-xs text-cyan-200 bg-[#030712]/90 px-4 py-2 rounded-xl border border-cyan-500/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Latency: <span className="text-cyan-400 font-bold">320ms</span> • Grounded Context Verification
          </div>
        </div>

        <div className="z-10 flex items-center justify-between pt-4 border-t border-cyan-500/20">
          <span className="text-xs font-mono text-slate-400">Live AI Assistant Instance</span>
          <a
            href="https://areebabot-euneds6uhzlxxeyug5qog9.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open AreebaBot Live Demo"
            className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            🚀 Try AreebaBot Live
          </a>
        </div>
      </div>
    );
  }

  if (id === 'intelliroads') {
    return (
      <div className="relative w-full h-full min-h-[360px] rounded-3xl bg-gradient-to-br from-emerald-950/40 via-teal-950/30 to-[#030712] border border-emerald-500/30 p-6 flex flex-col justify-between overflow-hidden group">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <Activity className="w-3.5 h-3.5" />
            SUMO TraCI Traffic Grid
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
            ~25% Congestion Drop
          </span>
        </div>

        <div className="my-6 z-10 bg-[#030712]/90 border border-emerald-500/30 rounded-2xl p-4 font-mono text-xs space-y-3 shadow-xl">
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span>Intersection: J1 (North-South Flow)</span>
            <span className="text-emerald-400 font-bold">GREEN PHASE</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl">
              <div className="text-slate-400">Queue N2S</div>
              <div className="text-sm font-bold text-emerald-400">4 Vehicles</div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl">
              <div className="text-slate-400">Queue E2W</div>
              <div className="text-sm font-bold text-amber-400">18 Vehicles</div>
            </div>
          </div>

          <div className="text-[10px] text-teal-300 bg-teal-500/10 p-2 rounded-lg border border-teal-500/20 flex items-center gap-2">
            <Zap className="w-3 h-3 text-teal-400" />
            TraCI Phase Mutation: Triggering East-West Green Light
          </div>
        </div>

        <div className="z-10 text-xs font-mono text-emerald-400 flex items-center justify-between pt-2">
          <span>Micro-Simulation Grid</span>
          <span>Status: Telemetry Active</span>
        </div>
      </div>
    );
  }

  if (id === 'student-performance') {
    return (
      <div className="relative w-full h-full min-h-[360px] rounded-3xl bg-gradient-to-br from-fuchsia-950/40 via-purple-950/30 to-[#030712] border border-fuchsia-500/30 p-6 flex flex-col justify-between overflow-hidden group">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5 text-fuchsia-400" />
            Machine Learning Pipeline
          </div>
          <span className="text-[10px] font-mono text-fuchsia-300 bg-fuchsia-500/20 px-2 py-0.5 rounded border border-fuchsia-500/30">
            Django Integrated
          </span>
        </div>

        <div className="my-6 z-10 bg-[#030712]/90 border border-fuchsia-500/30 rounded-2xl p-4 font-mono text-xs space-y-2.5 shadow-xl">
          <div className="flex justify-between items-center text-slate-300 text-[11px] pb-2 border-b border-white/10">
            <span>Prediction Model Target</span>
            <span className="text-fuchsia-400 font-bold">OPTIMIZED</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between text-slate-300">
              <span>Data Preprocessing</span>
              <span className="text-emerald-400 font-bold">Pandas</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Classifier Training</span>
              <span className="text-emerald-400 font-bold">Scikit-learn</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Web Interface</span>
              <span className="text-emerald-400 font-bold">Django</span>
            </div>
          </div>
        </div>

        <div className="z-10 text-xs font-mono text-fuchsia-300 flex items-center justify-between pt-2">
          <span>Student Performance Analytics</span>
          <span>Early Intervention</span>
        </div>
      </div>
    );
  }

  if (id === 'saucedemo-automation') {
    return (
      <div className="relative w-full h-full min-h-[360px] rounded-3xl bg-gradient-to-br from-amber-950/40 via-orange-950/30 to-[#030712] border border-amber-500/30 p-6 flex flex-col justify-between overflow-hidden group">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Selenium Java POM Suite
          </div>
          <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
            TestNG + Maven
          </span>
        </div>

        <div className="my-6 z-10 bg-[#030712]/90 border border-amber-500/30 rounded-2xl p-4 font-mono text-xs space-y-2.5 shadow-xl">
          <div className="flex justify-between items-center text-slate-300 text-[11px] pb-2 border-b border-white/10">
            <span>SauceDemo Regression Telemetry</span>
            <span className="text-emerald-400 font-bold">AUTOMATED</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between text-slate-300">
              <span>test_user_authentication_flow</span>
              <span className="text-emerald-400 font-bold">✓ PASS</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>test_inventory_cart_addition</span>
              <span className="text-emerald-400 font-bold">✓ PASS</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>test_checkout_workflow_completion</span>
              <span className="text-emerald-400 font-bold">✓ PASS</span>
            </div>
          </div>
        </div>

        <div className="z-10 text-xs font-mono text-amber-300 flex items-center justify-between pt-2">
          <span>Page Object Model Architecture</span>
          <span>Regression Safety</span>
        </div>
      </div>
    );
  }

  if (id === 'rent-a-car') {
    return (
      <div className="relative w-full h-full min-h-[360px] rounded-3xl bg-gradient-to-br from-indigo-950/40 via-blue-950/30 to-[#030712] border border-indigo-500/30 p-6 flex flex-col justify-between overflow-hidden group">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            MERN Vehicle Rental Platform
          </div>
          <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
            Full-Stack Stack
          </span>
        </div>

        <div className="my-6 z-10 bg-[#030712]/90 border border-indigo-500/30 rounded-2xl p-4 font-mono text-xs space-y-2.5 shadow-xl">
          <div className="flex justify-between items-center text-slate-300 text-[11px] pb-2 border-b border-white/10">
            <span>System Architecture Overview</span>
            <span className="text-indigo-400 font-bold">MERN</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between text-slate-300">
              <span>React Responsive UI</span>
              <span className="text-cyan-400 font-bold">Frontend</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Express API Routes</span>
              <span className="text-purple-400 font-bold">Backend</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>MongoDB Vehicle Models</span>
              <span className="text-emerald-400 font-bold">Database</span>
            </div>
          </div>
        </div>

        <div className="z-10 text-xs font-mono text-indigo-300 flex items-center justify-between pt-2">
          <span>Fleet Listings & Booking</span>
          <span>Responsive UI</span>
        </div>
      </div>
    );
  }

  // Fallback / hci-bci-research
  return (
    <div className="relative w-full h-full min-h-[360px] rounded-3xl bg-gradient-to-br from-violet-950/40 via-purple-950/30 to-[#030712] border border-violet-500/30 p-6 flex flex-col justify-between overflow-hidden group">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-xs">
          <Activity className="w-3.5 h-3.5 text-violet-400" />
          Brain-Computer Interface
        </div>
        <span className="text-[10px] font-mono text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded border border-violet-500/30">
          HCI Research
        </span>
      </div>

      <div className="my-6 z-10 bg-[#030712]/90 border border-violet-500/30 rounded-2xl p-4 font-mono text-xs space-y-2 shadow-xl">
        <div className="text-[11px] text-violet-300 font-bold">Research Domains Explored</div>
        <div className="space-y-1.5 text-[10px] text-slate-300 mt-3">
          <div>• Non-invasive EEG Signal Acquisition</div>
          <div>• Real-time Feature Extraction</div>
          <div>• Neural Pattern Classification</div>
          <div>• Accessibility & Assistive Technology</div>
        </div>
      </div>

      <div className="z-10 text-xs font-mono text-violet-300 flex items-center justify-between pt-2">
        <span>Signal Processing Analysis</span>
        <span>Literature Review</span>
      </div>
    </div>
  );
}

export default function ProjectsSection({ onOpenAiBot }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* Section Narrative Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Featured Work
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Projects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Software engineering applications, AI systems, and automated frameworks built to solve real-world challenges.
          </p>
        </div>

        {/* Global Pipeline Overview */}
        <ArchitectureDiagram />

        {/* Product Case Studies Vertical Flow */}
        <div className="space-y-28">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const theme = project.theme;

            return (
              <div
                key={project.id}
                id={`project-case-${project.id}`}
                className={`glass-panel ${theme.glassClass || ''} p-8 sm:p-12 rounded-3xl border ${theme.cardBorder} transition-all duration-500 shadow-2xl relative group overflow-hidden`}
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-15 group-hover:opacity-25 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at ${isEven ? '80% 20%' : '20% 80%'}, ${theme.glowColor} 0%, transparent 60%)`
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
                  
                  {/* Left Story Column */}
                  <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono border ${theme.badgeBg}`}>
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{project.subtitle}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>

                    {/* ONE-LINE IMPACT STATEMENT (Visible FIRST) */}
                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-100 font-display font-semibold text-base leading-snug flex items-start gap-3 shadow-inner">
                      <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{project.impact}</span>
                    </div>

                    {/* Problem Statement */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-mono text-red-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> Challenge
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution Statement */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" /> Solution
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-slate-200 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-black/50 border border-white/10 p-3 rounded-xl">
                          <div className="text-xs font-mono text-slate-400">{m.name}</div>
                          <div className="text-sm font-display font-bold text-white mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open Live Demo for ${project.title} in a new tab`}
                          className="px-5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-lg focus-visible:ring-2 focus-visible:ring-cyan-400"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                          Live Demo
                        </a>
                      )}

                      {project.id === 'areeba-bot' && (
                        <a
                          href="https://areebabot-euneds6uhzlxxeyug5qog9.streamlit.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open AreebaBot Live Demo"
                          className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                        >
                          <Sparkles className="w-4 h-4 text-cyan-400" />
                          🚀 Try AreebaBot Live
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open GitHub repository for ${project.title} in a new tab`}
                          className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-mono text-xs flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                        >
                          <GithubIcon className="w-4 h-4 text-slate-300" />
                          GitHub
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-medium flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        Read Case Study & Code
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>

                  </div>

                  {/* Right Showcase Column */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <ProjectVisualIdentity project={project} onOpenAiBot={onOpenAiBot} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenAiBot={onOpenAiBot}
          />
        )}
      </Suspense>
    </section>
  );
}
