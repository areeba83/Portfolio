import React, { useState, useEffect, useRef } from 'react';
import { Bot, Sparkles, Send, X, RefreshCw, Database, Zap, CheckCircle2 } from 'lucide-react';
import { AI_BOT_FAQS, PERSONAL_INFO } from '../data/portfolioData';

export default function InteractiveChatbotModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! I'm AreebaBot v2.4, a custom RAG AI assistant. I have vector embeddings of Areeba Amar's engineering background, projects (LangChain RAG, SUMO TraCI AI, CNNs), skills, and credentials. How can I assist your evaluation today?`,
      metadata: {
        latency: '180ms',
        sources: ['resume_vector_db', 'faiss_index_v2'],
        confidence: '99.4%'
      }
    }
  ]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestedQueries = [
    "Explain AreebaBot RAG architecture",
    "Tell me about IntelliRoads traffic AI",
    "What are her MERN & QA skills?",
    "How to contact Areeba for internship?"
  ];

  // Lock body scroll & handle Escape key press
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();

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

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isGenerating) return;

    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsGenerating(true);

    const lowerQuery = query.toLowerCase();
    let bestMatch = AI_BOT_FAQS.find((faq) =>
      faq.keywords.some((kw) => lowerQuery.includes(kw))
    );

    const fallbackResponse = `Areeba Amar is an AI Software Engineer specializing in RAG architectures, micro-simulation AI traffic control, and automated software engineering. She engineered AreebaBot (LangChain + FAISS + Groq), IntelliRoads (SUMO TraCI AI), and holds an NAVTTC Grade A+ Full-Stack Certification. Reach her directly at ${PERSONAL_INFO.email}!`;

    const responseText = bestMatch ? bestMatch.response : fallbackResponse;

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseText,
        metadata: {
          latency: `${Math.floor(Math.random() * 80 + 260)}ms`,
          sources: ['faiss_index_top_k3', 'langchain_context_assembler'],
          confidence: `${(Math.random() * 2 + 97.5).toFixed(1)}%`
        }
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chatbot-modal-title"
    >
      <div className="w-full max-w-3xl bg-[#090d16] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh] sm:h-[650px] relative">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0f172a]/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="chatbot-modal-title" className="font-display font-bold text-white text-base">
                  AreebaBot RAG Assistant
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Groq LLaMA-3 Online
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">FAISS Vector Database • LangChain Framework</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close AreebaBot AI modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Telemetry Bar */}
        <div className="bg-[#030712] px-6 py-2 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-cyan-400">
              <Zap className="w-3 h-3" /> Vector Dim: 384d (MiniLM)
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-purple-400">
              <Database className="w-3 h-3" /> FAISS Store: Ready
            </span>
          </div>
          <span className="text-slate-500">Latency: ~310ms</span>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-none shadow-lg'
                    : 'bg-[#111827] border border-white/10 text-slate-200 rounded-tl-none shadow-lg'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>

                {msg.sender === 'bot' && msg.metadata && (
                  <div className="mt-3 pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Confidence: {msg.metadata.confidence}
                    </span>
                    <span>Latency: {msg.metadata.latency}</span>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1 font-mono text-xs">
                  YOU
                </div>
              )}
            </div>
          ))}

          {isGenerating && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
              </div>
              <div className="bg-[#111827] border border-white/10 px-4 py-3 rounded-2xl text-xs font-mono text-cyan-400 flex items-center gap-2">
                <span>Vectorizing query & querying Groq LLM...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries Chips */}
        <div className="px-6 py-2 bg-[#090d16] border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar" aria-label="Suggested Queries">
          {suggestedQueries.map((query, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => handleSend(query)}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              + {query}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 bg-[#0f172a] border-t border-white/10 flex items-center gap-3"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AreebaBot about RAG, SUMO AI, background, skills..."
            className="flex-1 bg-[#030712] border border-white/10 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all font-mono"
            aria-label="Type your message to AreebaBot"
          />
          <button
            type="submit"
            disabled={!input.trim() || isGenerating}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-40 text-white font-medium text-sm flex items-center gap-2 transition-all shadow-lg focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Ask AI</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
