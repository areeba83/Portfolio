import React from 'react';
import { GraduationCap, BookOpen, Rocket } from 'lucide-react';

export default function ExperienceEducation() {
  const academicProjects = [
    {
      title: "Car Management System (OOP Project)",
      tech: "C++ • Object-Oriented Principles",
      desc: "Simulated modular vehicle dynamics leveraging inheritance and polymorphism across modular Wheel, Engine, and CarController classes."
    },
    {
      title: "Study Abroad Recommendation Advisor (SRE)",
      tech: "Software Requirements • Prototyping",
      desc: "Led UI/UX requirement gathering, entity workflow diagramming, and smart recommendation prototyping for study abroad advisors."
    },
    {
      title: "University Database Management System",
      tech: "SQL • Database Design & Normalization",
      desc: "Normalized a relational database schema and designed tree-structured indexes for high-speed record retrieval."
    },
    {
      title: "IoT Voice Assistant Prototype",
      tech: "Embedded Systems • Product Strategy",
      desc: "Developed an Alexa-like voice prototype, leading market validation, gotomarket research, and iterative user feedback loops."
    }
  ];

  return (
    <section className="py-32 relative z-10 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-mono text-xs">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Education & Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Degree Card */}
          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                2023 – 2027 (7th Semester)
              </span>
              <span className="text-xs font-mono text-slate-500">Lahore, Pakistan</span>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                BS Software Engineering
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                University of Management and Technology (UMT)
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Specializing in Applied AI, Deep Learning, Natural Language Processing, and Quality Engineering. Actively engaged in engineering research and software re-engineering.
            </p>

            {/* Coursework Pills */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-bold">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Advanced Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Natural Language Processing",
                  "Deep Learning",
                  "Software Re-Engineering",
                  "Software Quality Engineering",
                  "Data Structures & Algorithms",
                  "Object Oriented Programming"
                ].map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Projects Grid */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Rocket className="w-3.5 h-3.5 text-purple-400" /> Additional Academic Projects
            </h3>

            {academicProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-[#0b0f17]/70 border border-white/[0.06] hover:border-white/20 p-5 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-display font-bold text-white text-sm">{proj.title}</h4>
                  <span className="text-[10px] font-mono text-cyan-400">{proj.tech}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{proj.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
