import React, { useState, useEffect } from 'react';
import { ShieldCheck, Scale, Check } from 'lucide-react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('bci_disclaimer_accepted_react');
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bci_disclaimer_accepted_react', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-navy-950 border border-gold-500/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/40 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-gold-sm">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-serif uppercase tracking-widest text-gold-400 font-bold block">
              Bar Council of India Rule 36 Compliance
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
              Statutory Legal Disclaimer
            </h3>
          </div>
        </div>

        <div className="gold-divider w-full my-3" />

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[48vh] overflow-y-auto pr-2">
          <p>
            As per the rules of the <strong className="text-white">Bar Council of India</strong>, advocates and legal practitioners are strictly prohibited from soliciting work or advertising their services in any form or manner.
          </p>
          <p>
            By accessing this website (<strong className="text-gold-300">advocateadarsh.com</strong>), the user acknowledges and confirms that:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-300">
            <li>
              The user is seeking information relating to Adv. Adarsh Kumar Hans and chambers solely for their own information and personal knowledge.
            </li>
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from the advocate or chamber members to solicit any legal work.
            </li>
            <li>
              The information provided under this website is solely available at the user's request for informational purposes only and should not be construed as legal advice or creating an advocate-client relationship.
            </li>
            <li>
              Adv. Adarsh Kumar Hans is not liable for any consequence of any action taken by the user relying on material / information provided under this website.
            </li>
          </ul>
        </div>

        <div className="pt-6 mt-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-slate-400 flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Advocates Act, 1961 Standards</span>
          </span>

          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm shadow-gold-md hover:shadow-gold-lg hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <Check className="w-4 h-4 text-navy-950" />
            <span>I Agree & Proceed to Website</span>
          </button>
        </div>
      </div>
    </div>
  );
}
