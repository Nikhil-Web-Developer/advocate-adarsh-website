import React from 'react';
import { Clock, Briefcase, Handshake, Scale } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function StatsRibbon() {
  const icons = [Clock, Briefcase, Handshake, Scale];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {ADVOCATE_DATA.statistics.map((stat, idx) => {
          const IconComponent = icons[idx] || Scale;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex items-center space-x-4 border border-gold-500/20 group"
            >
              <div className="w-14 h-14 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 flex-shrink-0 shadow-gold-sm">
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-extrabold text-white group-hover:text-gold-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gold-400">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
