import React, { useState } from 'react';
import { Database, Cpu, Sparkles, Layers, Server, Code, CheckCircle2 } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      step: "01",
      title: "User Query & Tokenization",
      tech: "LangChain Parser",
      icon: Code,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      detail: "Incoming query parsed into standardized token representations for semantic vector matching."
    },
    {
      step: "02",
      title: "HuggingFace Embeddings",
      tech: "all-MiniLM-L6-v2",
      icon: Layers,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      detail: "Generates 384-dimensional dense semantic vectors representing document and query embeddings."
    },
    {
      step: "03",
      title: "FAISS Vector Search",
      tech: "HNSW Similarity Index",
      icon: Database,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      detail: "Performs sub-millisecond Top-K cosine similarity search to retrieve relevant document chunks."
    },
    {
      step: "04",
      title: "Groq LLM Acceleration",
      tech: "LLaMA-3 70B Engine",
      icon: Cpu,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      detail: "Injects retrieved context into system prompt and streams hardware-accelerated LLM responses."
    }
  ];

  return (
    <div className="glass-panel glass-cyan-blue p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> AreebaBot Pipeline Architecture
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Retrieval-Augmented Generation (RAG) Flow
          </h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
          <Server className="w-3.5 h-3.5" /> Streamlit Production System
        </div>
      </div>

      {/* Interactive Step Cards */}
      <div className="mt-5 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" role="tablist" aria-label="RAG Pipeline Stages">
        {pipelineSteps.map((s, idx) => {
          const IconComp = s.icon;
          const isActive = activeStep === idx;
          const glowColor = s.color.split(' ')[0].replace('text-', 'bg-');
          
          return (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveStep(idx)}
              className={`group p-4 sm:p-5 rounded-2xl border text-left cursor-pointer transition-all duration-500 relative focus-visible:ring-2 focus-visible:ring-cyan-400 overflow-hidden backdrop-blur-md ${
                isActive
                  ? 'bg-gradient-to-br from-[#0d182e] via-[#09101e] to-[#030712] border-cyan-400/40 shadow-[0_8px_30px_rgba(34,211,238,0.15),0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] -translate-y-1'
                  : 'bg-gradient-to-br from-[#09101e]/80 to-[#030712]/80 border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.02)] hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgba(34,211,238,0.1),0_8px_30px_rgba(168,85,247,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5'
              }`}
            >
              {/* Subtle Animated Light Sweep */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between mb-3 sm:mb-4">
                <span className={`text-[10px] sm:text-xs font-mono font-bold transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'}`}>
                  {s.step}
                </span>
                <div className="relative">
                  {/* Soft Radial Glow Behind Icon */}
                  <div className={`absolute inset-0 blur-md rounded-full transition-opacity duration-300 ${isActive ? 'opacity-80' : 'opacity-40 group-hover:opacity-70'} ${glowColor}`} />
                  
                  {/* Icon Box */}
                  <div className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl border flex items-center justify-center backdrop-blur-sm transition-transform duration-300 ${isActive ? 'scale-105' : 'group-hover:scale-105'} ${s.color}`}>
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 font-mono text-[9px] sm:text-[10px] text-cyan-400 mb-1">{s.tech}</div>
              <h4 className={`relative z-10 font-display font-bold text-xs sm:text-sm leading-snug mb-1.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                {s.title}
              </h4>
              <p className="relative z-10 text-[10px] sm:text-xs text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                {s.detail}
              </p>

              {isActive && (
                <div className="relative z-10 mt-2.5 pt-2 border-t border-cyan-500/20 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" /> Active Stage Visualized
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
