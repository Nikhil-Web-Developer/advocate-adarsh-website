import React from 'react';
import { X, Scale, Gavel, HeartHandshake, Building2, ShieldAlert, Briefcase, Cpu, UserCheck, CheckCircle2, Bookmark, Calendar, ArrowRight } from 'lucide-react';

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

export default function PracticeModal({ practice, isOpen, onClose, onBookWithPractice }) {
  if (!isOpen || !practice) return null;

  const IconComponent = iconMap[practice.icon] || Scale;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-navy-950 border border-gold-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start space-x-4 mb-6 pr-8">
          <div className="w-14 h-14 rounded-xl bg-navy-800 border border-gold-500/40 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-gold-sm">
            <IconComponent className="w-8 h-8" />
          </div>
          <div>
            <div className="text-xs font-serif uppercase tracking-widest text-gold-400 font-bold mb-1">
              Legal Practice Area
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {practice.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {practice.tagline}
            </p>
          </div>
        </div>

        <div className="gold-divider w-full my-4" />

        {/* Practice Brief */}
        <div className="mb-6">
          <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-gold-400 mb-2">
            Practice Overview
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {practice.brief}
          </p>
        </div>

        {/* Key Statutory Frameworks */}
        <div className="mb-6">
          <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center space-x-2">
            <Bookmark className="w-4 h-4" />
            <span>Key Acts & Statutory Framework</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {practice.statutes.map((statute, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-navy-900 border border-gold-500/30 text-xs font-medium text-slate-200 flex items-center space-x-2"
              >
                <Scale className="w-3.5 h-3.5 text-gold-400" />
                <span>{statute}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Key Legal Services */}
        <div className="mb-6">
          <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Scope of Representation & Services</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
            {practice.services.map((service, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 bg-navy-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Case Approach */}
        <div className="mb-8 p-4 rounded-xl bg-navy-900/90 border-l-4 border-gold-500">
          <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1">
            Litigation & Advisory Methodology
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            "{practice.caseApproach}"
          </p>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-navy-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 text-sm font-medium transition-colors"
          >
            Close Scope
          </button>

          <button
            onClick={() => {
              onClose();
              onBookWithPractice(practice.title);
            }}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm shadow-gold-sm hover:shadow-gold-md hover:scale-[1.02] transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Adv. Adarsh in {practice.title.split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
