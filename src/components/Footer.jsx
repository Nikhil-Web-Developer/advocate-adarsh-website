import React from 'react';
import { Scale, ChevronUp, MapPin, Phone, Mail, ShieldAlert, Award } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function Footer({ onOpenBooking, onSelectPractice, onOpenAdmin }) {
  const { profile, practiceAreas } = ADVOCATE_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-gold-500/25 text-slate-400 text-xs sm:text-sm relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800 text-left">
          
          {/* Col 1: Brand & Chamber Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-gold-sm">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  Adv. Adarsh Kumar Hans
                </span>
                <span className="text-[11px] text-gold-400 font-semibold tracking-wider uppercase">
                  Advocate & Legal Consultant
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Practicing Advocate before the High Court of Delhi, Supreme Court of India, and specialized tribunals across civil, criminal, property, and commercial corporate jurisprudence.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-gold-500/20 text-gold-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-gold-400" />
              <span>{profile.barCouncilNumber}</span>
            </div>
          </div>

          {/* Col 2: Practice Areas Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-gold-400">
              Practice Domains
            </h4>
            <ul className="space-y-2 text-xs">
              {practiceAreas.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <button
                    onClick={() => {
                      handleNavClick('practice-areas');
                      if (onSelectPractice) onSelectPractice(pa);
                    }}
                    className="hover:text-gold-300 transition-colors text-left"
                  >
                    {pa.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-gold-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-gold-300 transition-colors">
                  About Adv. Adarsh
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('experience')} className="hover:text-gold-300 transition-colors">
                  Experience & Timeline
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('courts')} className="hover:text-gold-300 transition-colors">
                  Courts & Forums
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('insights')} className="hover:text-gold-300 transition-colors">
                  Case Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-gold-300 transition-colors">
                  Chambers Location
                </button>
              </li>
              <li className="pt-1">
                <button 
                  onClick={() => onOpenAdmin && onOpenAdmin()} 
                  className="text-gold-400 font-bold hover:underline flex items-center space-x-1"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>AdvocatePro Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Chamber Addresses & Schedule (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-gold-400">
              Chambers
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Chamber No. 342, High Court of Delhi, New Delhi - 110503</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Suite 408, Mercantile House, Connaught Place, New Delhi - 110001</span>
              </div>
              <div className="flex items-center space-x-2 pt-1 text-gold-300">
                <Phone className="w-4 h-4 text-gold-400" />
                <a href={`tel:${profile.phoneClean}`} className="hover:underline">
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BCI Disclaimer Summary */}
        <div className="py-6 border-b border-navy-800 text-[11px] text-slate-400 leading-relaxed text-left space-y-2">
          <div className="flex items-center space-x-2 text-gold-400 font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Statutory Disclaimer (Bar Council of India)</span>
          </div>
          <p>
            The rules of the Bar Council of India prohibit law practices and advocates from advertising or soliciting work through websites or public communications. The information provided on this website is solely available at the user's voluntary request for informational and knowledge purposes only.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Chambers of Adv. Adarsh Kumar Hans. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-gold-400 transition-colors p-1"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
