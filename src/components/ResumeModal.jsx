import React, { useEffect } from 'react';
import { X, Download, FileText, MapPin, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  // Lock body scroll & handle Escape key press
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="w-full max-w-4xl bg-[#0b0f17] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col relative">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0f172a] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="font-display font-bold text-white text-base">Areeba Amar — Curriculum Vitae</h3>
              <p className="text-xs text-slate-400 font-mono">Applied AI & Software Engineering Specialist</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Resume Request`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/30 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-3.5 h-3.5" /> Request PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close Curriculum Vitae modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-200 font-sans">
          
          {/* Resume Banner Header */}
          <div className="border-b border-white/10 pb-6 space-y-3">
            <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">
              AREEBA AMAR
            </h1>
            <p className="text-sm font-semibold text-cyan-400 font-mono">
              Software Engineering Student • Full-Stack Development, QA Automation & Applied AI
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Lahore, Pakistan</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-purple-400" /> {PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
              Profile Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-[#030712] p-4 rounded-2xl border border-white/5">
              Software Engineering undergraduate (7th semester, UMT Lahore) with hands-on experience across full-stack development, test automation, and applied AI/NLP. Shipped a production RAG chatbot, a fully-automated Selenium test suite, and multiple deep learning models. Currently building an AI-driven traffic signal optimization system as a final year project. NAVTTC-certified MERN stack developer (A+) and selected candidate for the Microsoft International Certification exam. Looking for a Summer 2026 internship to contribute to a real engineering team and keep building things that ship.
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-bold">
              Technical Skills Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-[#111827] p-3.5 rounded-xl border border-white/5">
                <span className="text-cyan-400 font-bold">Languages:</span> Python, Java, C++, C, JavaScript
              </div>
              <div className="bg-[#111827] p-3.5 rounded-xl border border-white/5">
                <span className="text-indigo-400 font-bold">Web & Frameworks:</span> MERN Stack (MongoDB, Express, React, Node.js), Django, REST APIs
              </div>
              <div className="bg-[#111827] p-3.5 rounded-xl border border-white/5">
                <span className="text-purple-400 font-bold">AI / ML / NLP:</span> LangChain, FAISS, HuggingFace, TensorFlow/Keras, RNN/LSTM/GRU, Prompt Engineering
              </div>
              <div className="bg-[#111827] p-3.5 rounded-xl border border-white/5">
                <span className="text-emerald-400 font-bold">Testing & QA:</span> Selenium (Python), Page Object Model, White-Box & Black-Box Testing
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-bold">
              Key Engineering Projects
            </h3>
            <div className="space-y-4">
              <div className="bg-[#030712] p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-white text-base">AreebaBot — RAG-Based Personal AI Chatbot</h4>
                  <span className="text-[10px] font-mono text-cyan-400">Live on Streamlit</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  <li>Engineered a Retrieval-Augmented Generation chatbot using LangChain, FAISS vector search, HuggingFace embeddings, and Groq LLM inference for fast, context-aware responses.</li>
                  <li>Designed and deployed a custom Streamlit UI with persistent chat history and a polished navy/amber theme.</li>
                </ul>
              </div>

              <div className="bg-[#030712] p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-white text-base">IntelliRoads — AI-Based Traffic Signal Optimization</h4>
                  <span className="text-[10px] font-mono text-purple-400">Final Year Project</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  <li>Designing an AI-driven traffic signal control system with SUMO and Python TraCI to reduce simulated urban congestion.</li>
                  <li>Own sprint planning and technical documentation as Scrum team lead.</li>
                </ul>
              </div>

              <div className="bg-[#030712] p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-white text-base">E-Commerce Test Automation Suite</h4>
                  <span className="text-[10px] font-mono text-emerald-400">Software Quality Engineering</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  <li>Built an 11-case automated regression suite in Selenium (Python) using Page Object Model, achieving 100% pass rate.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-bold">
                Education
              </h3>
              <div className="bg-[#111827] p-4 rounded-2xl border border-white/5">
                <h4 className="font-display font-bold text-white text-sm">BS Software Engineering</h4>
                <p className="text-xs text-cyan-400">UMT Lahore (2023 – 2027)</p>
                <p className="text-xs text-slate-400 mt-2">Currently in 7th Semester</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-bold">
                Certifications
              </h3>
              <div className="bg-[#111827] p-4 rounded-2xl border border-white/5 space-y-2 text-xs">
                <div className="text-emerald-400 font-bold">● NAVTTC JavaScript Fullstack (MERN) — Grade A+</div>
                <div className="text-cyan-400 font-bold">● Microsoft Intl Certification Selected Candidate</div>
                <div className="text-slate-300">● GDSC Web 3.0 Fusion & ACM UMT Workshops</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
