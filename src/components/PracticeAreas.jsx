import React, { useState } from 'react';
import { Scale, Gavel, HeartHandshake, Building2, ShieldAlert, Briefcase, Cpu, UserCheck, ArrowRight, Search, Bookmark, Sparkles } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

const iconMap = {
  Scale,
  Gavel,
  HeartHandshake,
  Building2,
  ShieldAlert,
  Briefcase,
  Cpu,
  UserCheck
};

export default function PracticeAreas({ onSelectPractice, onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPractices = ADVOCATE_DATA.practiceAreas.filter(area => 
    area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.brief.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.statutes.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="practice-areas" className="py-24 bg-navy-900/50 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Practice Jurisdictions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Comprehensive <span className="text-gold-gradient">Legal Practice Areas</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Strategically structured legal defense and advisory across key civil, criminal, commercial, and property disciplines.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 text-gold-400/80 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search practice areas or statutory acts..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-navy-950/80 border border-gold-500/30 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPractices.map((practice, idx) => {
            const IconComponent = iconMap[practice.icon] || Scale;
            return (
              <div
                key={practice.id}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-gold-500/20 hover:border-gold-500/60 hover:bg-navy-900/90 transition-all duration-300 group hover:-translate-y-1.5 shadow-lg"
              >
                <div>
                  {/* Card Top: Icon & Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-gold-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-sm font-bold text-slate-500 group-hover:text-gold-400/80 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-white mb-2.5 group-hover:text-gold-300 transition-colors line-clamp-2">
                    {practice.title}
                  </h3>

                  {/* Brief */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {practice.brief}
                  </p>

                  {/* Statutes Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {practice.statutes.slice(0, 2).map((st, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-navy-950/80 text-gold-300/90 border border-gold-500/20 flex items-center space-x-1"
                      >
                        <Bookmark className="w-3 h-3 text-gold-400" />
                        <span className="truncate max-w-[170px]">{st}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectPractice(practice)}
                  className="w-full py-2.5 px-4 rounded-xl bg-navy-800/80 hover:bg-gold-500 hover:text-navy-950 text-slate-200 text-xs font-bold border border-slate-700 hover:border-gold-400 flex items-center justify-center space-x-2 transition-all duration-200 group-hover:shadow-gold-sm"
                >
                  <span>Explore Practice Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {filteredPractices.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No practice areas found matching "{searchQuery}". Try a different keyword or view all areas.
          </div>
        )}

        {/* Practice Area Footer Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-serif font-bold text-white text-lg">
                Have a Complex or Multi-Disciplinary Legal Matter?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Our chambers provide tailored pre-litigation analysis and constitutional legal opinions.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm shadow-gold-sm hover:shadow-gold-md hover:scale-105 transition-all whitespace-nowrap"
          >
            Schedule Chamber Review
          </button>
        </div>

      </div>
    </section>
  );
}
