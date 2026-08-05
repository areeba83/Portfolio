import React, { useState, useEffect } from 'react';
import { X, Cpu, Terminal, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose, onOpenAiBot }) {
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key press & body scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="w-full max-w-4xl bg-[#0b0f17] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col relative">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#0f172a] border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">{project.subtitle}</span>
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Summary & Tags */}
          <div className="space-y-4">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#111827] border border-white/10 p-3.5 rounded-xl">
                    <div className="text-lg font-display font-bold text-cyan-400">{m.value}</div>
                    <div className="text-xs font-medium text-slate-300 mt-0.5">{m.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Architecture Flow */}
          {project.architecture && (
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Architecture Breakdown
              </h4>
              <div className="bg-[#030712] border border-white/10 rounded-2xl p-4 space-y-2.5">
                {project.architecture.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs font-mono text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Key Module Implementation
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 px-2.5 py-1 rounded bg-white/5 border border-white/10 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>

              <div className="bg-[#030712] border border-white/10 rounded-2xl p-4 overflow-x-auto font-mono text-xs text-cyan-200 leading-relaxed shadow-inner">
                <pre>{project.codeSnippet}</pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0f172a] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Live Demo for ${project.title} in a new tab`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Live Demo</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub repository for ${project.title} in a new tab`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-mono transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            )}

            {project.id === 'areeba-bot' && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAiBot();
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 text-xs font-mono transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Test Live RAG Sandbox</span>
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
