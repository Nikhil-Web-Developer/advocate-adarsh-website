import React, { useState, useEffect } from 'react';
import { Scale, Calendar, Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function Navbar({ onOpenBooking, onOpenAdmin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'practice-areas', 'experience', 'courts', 'achievements', 'insights', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'practice-areas', label: 'Practice Areas' },
    { id: 'experience', label: 'Experience' },
    { id: 'courts', label: 'Courts' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'insights', label: 'Case Insights' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-gold-500/25 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-navy-950/90 via-navy-950/60 to-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-11 h-11 rounded-lg bg-navy-800 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:border-gold-400 group-hover:scale-105 transition-all shadow-gold-sm">
              <Scale className="w-6 h-6 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-white tracking-wider group-hover:text-gold-300 transition-colors">
                Adv. Adarsh
              </span>
              <span className="text-xs text-gold-400/90 font-medium tracking-widest uppercase">
                Senior Advocate
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${isActive
                    ? 'text-gold-400 bg-navy-800/80 border border-gold-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800/40'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onOpenAdmin && onOpenAdmin()}
              className="hidden md:inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-navy-800 hover:bg-navy-700 text-gold-400 border border-gold-500/30 transition-colors"
              title="Advocate Private Dashboard"
            >
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Chamber Portal</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gold-gradient text-navy-950 hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-navy-800 border border-slate-700 text-slate-200 hover:text-gold-400 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-navy-950 border-l border-gold-500/20 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                <div className="flex items-center space-x-2">
                  <Scale className="w-5 h-5 text-gold-400" />
                  <span className="font-serif font-bold text-white text-base">Adv. Adarsh Kumar Hans</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col space-y-1 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${activeSection === link.id
                      ? 'text-gold-400 bg-navy-800/80 border border-gold-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-navy-900'
                      }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-navy-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin && onOpenAdmin();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-navy-800 border border-gold-500/40 text-gold-300 font-bold text-xs flex items-center justify-center space-x-2 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>AdvocatePro Private Portal</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-gold-gradient text-navy-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-gold-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>

              <a
                href={`tel:${ADVOCATE_DATA.profile.phoneClean}`}
                className="w-full py-2 px-4 rounded-lg bg-navy-800 border border-slate-700 text-slate-200 text-sm font-medium flex items-center justify-center space-x-2 hover:border-gold-500/40"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>{ADVOCATE_DATA.profile.phone}</span>
              </a>

              <a
                href={ADVOCATE_DATA.profile.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-4 rounded-lg bg-emerald-950/60 border border-emerald-600/40 text-emerald-400 text-sm font-medium flex items-center justify-center space-x-2 hover:bg-emerald-900/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chamber</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
