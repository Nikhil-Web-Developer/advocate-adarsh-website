import React, { useState } from 'react';
import { Briefcase, CheckCircle2, Lightbulb, Scale } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function CaseCategories() {
  const { caseCategories } = ADVOCATE_DATA;
  const [selectedId, setSelectedId] = useState(caseCategories[0]?.id || '');

  return (
    <section id="insights" className="py-24 bg-navy-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Case Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Categorized <span className="text-gold-gradient">Litigation Experience</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Empirical track record across diverse legal verticals, emphasizing high-probability strategies and procedural mastery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseCategories.map((category) => {
            const isSelected = selectedId === category.id;
            return (
              <div
                key={category.id}
                onClick={() => setSelectedId(category.id)}
                className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? 'border-gold-400 bg-navy-900 shadow-gold-md scale-[1.02]'
                    : 'border-gold-500/20 hover:border-gold-500/50 hover:bg-navy-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold-gradient text-navy-950 text-xs font-extrabold shadow-sm">
                      {category.count}
                    </span>
                    <Scale className="w-5 h-5 text-gold-400 opacity-60" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {category.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950/90 border border-gold-500/20 text-xs text-slate-200 mt-2">
                  <div className="flex items-center space-x-1.5 text-gold-400 font-semibold mb-1">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Chamber Strategy</span>
                  </div>
                  <p className="text-slate-300 italic leading-snug">
                    "{category.keyInsight}"
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
