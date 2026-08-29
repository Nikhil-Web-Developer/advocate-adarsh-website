import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Scale } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function FAQSection() {
  const { faqs } = ADVOCATE_DATA;
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState('');

  const filteredFaqs = faqs.filter(
    f => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="faqs" className="py-24 bg-navy-900/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Legal Queries & Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base">
            Clear, transparent answers regarding consultation protocols, professional privilege, and litigation processes.
          </p>
        </div>

        {/* Search input for FAQs */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-gold-400/80 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search legal queries or process questions..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-navy-950/80 border border-gold-500/30 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-navy-900/90 border-gold-500/50 shadow-gold-sm' 
                    : 'bg-navy-950/70 border-gold-500/15 hover:border-gold-500/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-white text-base sm:text-lg pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-gold-500 text-navy-950' : 'bg-navy-800 text-gold-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-navy-800/60 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-slate-400 text-sm">
            No matching questions found for "{query}". Please contact the chamber desk directly.
          </div>
        )}

      </div>
    </section>
  );
}
