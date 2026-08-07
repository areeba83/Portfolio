import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, FileText, Cpu, Zap, Terminal, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, BRAND_VALUES } from '../data/portfolioData';
import { LinkedinIcon } from './SocialIcons';

// Sub-component: Futuristic AI Network & Data Stream Visualizer (Right Side)
function FuturisticAiVisualizer({ mousePos }) {
  const canvasRef = useRef(null);
  const activeNode = 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const nodes = [
      { id: 0, x: width * 0.2, y: height * 0.3, label: 'Search & RAG', type: 'input' },
      { id: 1, x: width * 0.5, y: height * 0.25, label: 'Knowledge Base', type: 'process' },
      { id: 2, x: width * 0.8, y: height * 0.35, label: 'AI Inference', type: 'llm' },
      { id: 3, x: width * 0.3, y: height * 0.65, label: 'Traffic Automation', type: 'signal' },
      { id: 4, x: width * 0.7, y: height * 0.7, label: 'Neural Models', type: 'vision' },
    ];

    const connections = [
      [0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [2, 4]
    ];

    let t = 0;

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      const targetOffX = (mousePos.x - window.innerWidth / 2) * 0.015;
      const targetOffY = (mousePos.y - window.innerHeight / 2) * 0.015;

      const centerX = width / 2 + targetOffX;
      const centerY = height / 2 + targetOffY;

      ctx.save();
      ctx.translate(centerX, centerY);

      ctx.beginPath();
      ctx.ellipse(0, 0, 150, 65, t * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([6, 10]);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, 100, 45, -t * 0.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.restore();

      connections.forEach(([i, j]) => {
        const n1 = nodes[i];
        const n2 = nodes[j];

        const x1 = n1.x + targetOffX;
        const y1 = n1.y + targetOffY;
        const x2 = n2.x + targetOffX;
        const y2 = n2.y + targetOffY;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.stroke();

        const progress = (t * 0.5 + i * 0.3) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      nodes.forEach((n) => {
        const nx = n.x + targetOffX;
        const ny = n.y + targetOffY;

        const auraGrad = ctx.createRadialGradient(nx, ny, 0, nx, ny, 20);
        auraGrad.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
        auraGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = auraGrad;
        ctx.fillRect(nx - 20, ny - 20, 40, 40);

        ctx.beginPath();
        ctx.arc(nx, ny, 5, 0, Math.PI * 2);
        ctx.fillStyle = n.id === activeNode ? '#38bdf8' : '#a855f7';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, 9, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      if (!prefersReducedMotion && !document.hidden) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && !prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, activeNode]);

  return (
    <div className="relative w-full h-[560px] lg:h-[600px] flex items-center justify-center select-none">

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Floating Glass Panel 1: Live AI System Status (Top Right) */}
      <div className="absolute top-2 right-2 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10 max-w-[calc(100%-16px)] sm:max-w-none">
        <div
          className="glass-panel p-3 sm:p-4 rounded-2xl border border-cyan-500/25 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-102"
          style={{
            transform: `translate3d(${(mousePos.x - window.innerWidth / 2) * 0.012}px, ${(mousePos.y - window.innerHeight / 2) * 0.012}px, 0)`
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-white flex items-center gap-1.5">
                AreebaBot AI Assistant
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">Status: <span className="text-cyan-300">Active & Ready</span></div>
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-white/10 font-mono text-[10px] text-slate-300">
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Core Domain:</span>
              <span className="text-cyan-300 font-semibold">RAG & Knowledge Search</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Tech Stack:</span>
              <span className="text-purple-300 font-semibold">Python & AI Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glass Panel 2: Intelligent Code Pipeline (Bottom Left) */}
      <div className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-10 w-[calc(100%-16px)] max-w-[260px] sm:max-w-[270px]">
        <div
          className="glass-panel p-3 sm:p-4 rounded-2xl border border-purple-500/25 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-102"
          style={{
            transform: `translate3d(${(mousePos.x - window.innerWidth / 2) * -0.01}px, ${(mousePos.y - window.innerHeight / 2) * -0.01}px, 0)`
          }}
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px] font-mono text-slate-300 font-semibold">ai_application.py</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
              ONLINE
            </span>
          </div>

          <div className="font-mono text-[10px] leading-relaxed text-purple-200 bg-[#030712]/90 p-2.5 rounded-xl border border-white/5 space-y-1">
            <div><span className="text-slate-500">01</span> query = "System Architecture"</div>
            <div><span className="text-slate-500">02</span> response = ai_model.generate(query)</div>
            <div className="text-[9px] text-emerald-400 pt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Context Grounding
            </div>
          </div>
        </div>
      </div>

      {/* Center Interactive Core Badge */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[calc(100%-32px)] max-w-[230px]">
        <div
          className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0f172a]/90 via-[#0b0f17]/90 to-[#1e1b4b]/80 border border-white/15 shadow-2xl backdrop-blur-2xl text-center space-y-3 transition-transform duration-500 hover:border-cyan-400/40"
          style={{
            transform: `translate3d(${(mousePos.x - window.innerWidth / 2) * 0.015}px, ${(mousePos.y - window.innerHeight / 2) * 0.015}px, 0)`
          }}
        >
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center mx-auto text-cyan-300">
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>

          <div>
            <div className="text-xs font-mono font-bold text-white tracking-wide">APPLIED AI & FULL-STACK</div>
            <div className="text-[10px] font-mono text-cyan-400 mt-0.5">AI Systems • Automation • Web</div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Areeba Amar</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function Hero({ _onOpenAiBot, _onOpenResume }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 text-xs font-mono shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" /> NAVTTC MERN Grade A+
          </span>
          <span className="text-slate-500 hidden sm:inline text-xs font-mono">•</span>
          <span className="text-slate-400 text-xs font-mono">UMT Software Engineering</span>
        </div>

        {/* Cinematic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Personal Introduction & Story */}
          <div className="lg:col-span-7 space-y-8 text-left">

            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Software Engineer Portfolio</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-white leading-[1.1] sm:leading-[1.05] break-words">
                <span className="shimmer-text">Areeba Amar</span>
              </h1>

              <p className="text-lg sm:text-2xl font-display font-bold text-cyan-400 tracking-tight leading-snug">
                Software Engineer | Applied AI & Full-Stack Development
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              Building AI-powered applications, scalable web solutions, and intelligent automation through practical software engineering.
            </p>

            {/* Brand Values Pills */}
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-mono text-slate-400">
              {BRAND_VALUES.map((val, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span className="font-semibold">{val.label}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5 w-full">
              <a
                href="#projects"
                className="relative group inline-flex justify-center items-center gap-3 px-7 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-display font-semibold text-sm transition-all duration-300 hover:scale-[1.02] shadow-xl focus-visible:ring-2 focus-visible:ring-cyan-400 w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1WH3-Ye9DegE7jUFIKS5XQv4q1VAn2QCV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-slate-300 hover:text-white font-display font-medium text-sm backdrop-blur-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-400 w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn Profile"
                className="inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-slate-300 hover:text-white font-display font-medium text-sm backdrop-blur-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-400 w-full sm:w-auto"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Handcrafted Futuristic AI Visualization */}
          <div className="lg:col-span-5 relative">
            <FuturisticAiVisualizer mousePos={mousePos} />
          </div>

        </div>

      </div>
    </section>
  );
}
