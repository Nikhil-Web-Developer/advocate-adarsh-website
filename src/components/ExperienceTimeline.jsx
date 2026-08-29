import React from 'react';
import { History, Award, CheckCircle2, Building, ArrowUpRight } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function ExperienceTimeline() {
  const { careerTimeline } = ADVOCATE_DATA;

  return (
    <section id="experience" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Litigation Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            15+ Years of <span className="text-gold-gradient">Advocacy & Leadership</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            A distinguished progression from foundational trial courtroom advocacy to senior counsel representation in constitutional High Courts.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold-500 via-gold-400/50 to-navy-800 hidden sm:block" />

          <div className="space-y-12">
            {careerTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-navy-950 border-2 border-gold-400 items-center justify-center z-10 shadow-gold-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-gold-500/25 hover:border-gold-500/60 hover:bg-navy-900/90 transition-all duration-300 shadow-xl group text-left">
                      
                      {/* Period Badge */}
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-950 border border-gold-500/30 text-gold-300 text-xs font-bold mb-3">
                        <History className="w-3.5 h-3.5 text-gold-400" />
                        <span>{item.period}</span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                        {item.role}
                      </h3>
                      
                      <div className="flex items-center space-x-2 text-gold-400/90 text-xs sm:text-sm font-medium mt-1 mb-3">
                        <Building className="w-4 h-4 flex-shrink-0" />
                        <span>{item.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlight Pill */}
                      <div className="p-3 rounded-xl bg-navy-950/80 border border-gold-500/20 text-xs text-slate-200 flex items-start space-x-2.5">
                        <Award className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item.highlight}</span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
