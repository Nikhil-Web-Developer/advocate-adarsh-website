import React from 'react';
import { Award, BookOpen, Mic, BadgeCheck, Trophy } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

const iconMap = {
  Award,
  BookOpen,
  Mic,
  BadgeCheck
};

export default function Achievements() {
  const { achievements } = ADVOCATE_DATA;

  return (
    <section id="achievements" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Accolades & <span className="text-gold-gradient">Legal Contributions</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Peer-recognized excellence in courtroom advocacy, legal literature, academic contributions, and alternative dispute resolution.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/20 hover:border-gold-500/60 hover:bg-navy-900/90 transition-all duration-300 shadow-xl group text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-gold-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-navy-950 border border-gold-500/30 text-gold-300 text-xs font-bold">
                      {item.year}
                    </span>
                  </div>

                  <span className="text-xs uppercase font-serif tracking-widest text-gold-400 font-bold block mb-1">
                    {item.category}
                  </span>
                  
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs text-slate-400 font-medium mb-3">
                    {item.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
