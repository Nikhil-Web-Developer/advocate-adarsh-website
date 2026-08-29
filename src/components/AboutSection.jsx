import React from 'react';
import { Scale, ShieldAlert, FileCheck, Users, Check, ArrowRight, Award, GraduationCap } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function AboutSection({ onOpenBooking }) {
  const { profile, corePillars } = ADVOCATE_DATA;

  const pillarIcons = {
    Scale: Scale,
    ShieldAlert: ShieldAlert,
    FileCheck: FileCheck,
    Users: Users
  };

  return (
    <section id="about" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Chamber Profile & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Distinguished Advocacy <span className="text-gold-gradient">With Unwavering Ethics</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Guiding clients with statutory precision, formidable courtroom representation, and strategic clarity for over a decade and a half.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Biography and Accolades Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              About Adv. Adarsh Kumar Hans
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-base">
              Advocate Adarsh Kumar Hans is a distinguished advocate enrolled with the <span className="text-gold-400 font-semibold">Bar Council of Delhi (Enrolment No. D/1428/2009)</span>. With over 15 years of rigorous trial and appellate practice, he leads a premier litigation chamber representing clients across the <span className="text-white font-medium">Supreme Court of India</span>, <span className="text-white font-medium">High Court of Delhi</span>, District & Sessions Courts, and Specialized National Tribunals.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              Holding academic honors in <span className="text-gold-300 font-semibold">B.A. LL.B. (Hons) and Master of Laws (LL.M.)</span>, Adv. Adarsh combines extensive theoretical jurisprudence with sharp courtroom tact. He specializes in high-stakes Civil & Commercial Litigation, White-Collar Criminal Defense, Ancestral Property & Real Estate, RERA disputes, and Matrimonial settlements.
            </p>

            {/* Credentials Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-navy-900/80 border border-gold-500/20 flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Education & Pedigree</h4>
                  <p className="text-xs text-slate-400 mt-1">B.A. LL.B. (Hons), LL.M. in Commercial & Constitutional Jurisprudence.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/80 border border-gold-500/20 flex items-start space-x-3">
                <Scale className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Bar Standing</h4>
                  <p className="text-xs text-slate-400 mt-1">Delhi High Court Bar Association & Supreme Court Bar Association Member.</p>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center space-x-2 text-gold-400 hover:text-gold-300 font-semibold text-sm group"
              >
                <span>Request Case Evaluation with Adv. Adarsh</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Chamber Highlights & Quote Box */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-gold-500/30 shadow-2xl relative">
              <div className="absolute top-4 right-4 text-gold-500/20">
                <Scale className="w-24 h-24" />
              </div>
              
              <span className="text-gold-400 font-serif text-sm font-bold uppercase tracking-wider block mb-2">
                Chamber Creed
              </span>
              
              <blockquote className="font-playfair italic text-xl text-slate-100 mb-6 leading-relaxed relative z-10">
                "Our practice is founded upon the principle that every matter deserves meticulous preparation, strategic fortitude, and complete fidelity to truth and justice."
              </blockquote>

              <div className="space-y-3 relative z-10 pt-4 border-t border-navy-800">
                <div className="flex items-center space-x-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs">✓</div>
                  <span>Direct client-to-counsel attention with no middle layer.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs">✓</div>
                  <span>Evidence scrutiny and statutory risk auditing.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs">✓</div>
                  <span>Fast-track interim protection and injunctive relief.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => {
            const IconComp = pillarIcons[pillar.icon] || Scale;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/50 hover:bg-navy-900/90 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
