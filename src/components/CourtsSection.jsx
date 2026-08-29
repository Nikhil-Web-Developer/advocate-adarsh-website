import React from 'react';
import { Landmark, Scale, Building2, Gavel, MapPin, CheckCircle2 } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

const iconMap = {
  Landmark,
  Scale,
  Building2,
  Gavel
};

export default function CourtsSection() {
  const { courts } = ADVOCATE_DATA;

  return (
    <section id="courts" className="py-24 bg-navy-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Court Jurisdictions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Courts & <span className="text-gold-gradient">Judicial Forums</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Regular courtroom advocacy before constitutional apex courts, trial sessions, and specialized statutory tribunals.
          </p>
        </div>

        {/* Courts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courts.map((court) => {
            const IconComp = iconMap[court.icon] || Landmark;
            return (
              <div
                key={court.id}
                className="glass-panel p-8 rounded-2xl border border-gold-500/25 hover:border-gold-500/60 hover:bg-navy-900/95 transition-all duration-300 shadow-xl group text-left flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-gold-sm">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-navy-950 border border-gold-500/40 text-gold-300 text-xs font-bold shadow-sm">
                      {court.badge}
                    </span>
                  </div>

                  {/* Court Name & Level */}
                  <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                    {court.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gold-400 mb-3">
                    {court.level}
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-2 text-xs sm:text-sm text-slate-400 mb-4 bg-navy-950/60 p-2.5 rounded-lg border border-slate-800">
                    <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{court.location}</span>
                  </div>

                  {/* Description of Matters */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {court.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800 flex items-center justify-between text-xs text-gold-400/90 font-medium">
                  <span>Authorized Legal Representation</span>
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
