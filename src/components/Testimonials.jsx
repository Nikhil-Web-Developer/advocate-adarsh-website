import React from 'react';
import { MessageSquareQuote, Star, CheckCircle, Quote } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function Testimonials() {
  const { testimonials } = ADVOCATE_DATA;

  return (
    <section id="testimonials" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Trusted by <span className="text-gold-gradient">Individuals & Enterprises</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Genuine assessments from corporate executives, business owners, and individuals who sought our advocacy during crucial moments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 rounded-2xl border border-gold-500/20 hover:border-gold-500/50 hover:bg-navy-900/90 transition-all duration-300 shadow-xl group text-left flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30 group-hover:text-gold-400/60 transition-colors" />
                </div>

                {/* Matter Pill */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-navy-950 border border-gold-500/30 text-[11px] font-semibold text-gold-300 mb-3">
                  {item.matterType}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.designation}
                  </p>
                </div>
                {item.verified && (
                  <div className="flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
