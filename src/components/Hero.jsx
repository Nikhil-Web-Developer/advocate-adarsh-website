import React from 'react';
import { Award, Calendar, MessageSquare, Mail, ShieldCheck, Landmark, Scale, Clock, CheckCircle2 } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function Hero({ onOpenBooking }) {
  const { profile, trustBadges } = ADVOCATE_DATA;

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-navy-950">
      {/* Subtle Background Glows & Patterns */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Background Court Texture / Subtle Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Bar Council Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 text-gold-300 text-xs font-semibold tracking-wide shadow-gold-sm">
              <Award className="w-4 h-4 text-gold-400" />
              <span>{profile.barCouncilNumber}</span>
            </div>

            {/* Advocate Name & Titles */}
            <div>
              <p className="text-gold-400 font-serif text-sm sm:text-base font-semibold tracking-widest uppercase mb-1">
                Advocate & Legal Consultant
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
                Adv. Adarsh <br className="hidden sm:inline" />
                <span className="text-gold-gradient">Kumar Hans</span>
              </h1>

              <div className="flex flex-wrap items-center gap-2 mt-3 text-slate-300 text-sm font-medium">
                <span className="text-gold-300 font-semibold">{profile.degrees}</span>
                <span className="text-slate-600">•</span>
                <span>{profile.courtsAdmitted}</span>
              </div>
            </div>

            {/* Headline Quote */}
            <div className="p-4 rounded-xl bg-navy-900/60 border-l-4 border-gold-500 backdrop-blur-sm">
              <p className="font-playfair italic text-lg sm:text-xl text-slate-200 leading-snug">
                "{profile.headline}"
              </p>
            </div>

            {/* Narrative Intro */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {profile.subheadline} Committed to protecting your statutory rights, commercial interests, and personal liberties through strategic jurisprudence and meticulous preparation.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-base shadow-gold-md hover:shadow-gold-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-5 h-5 text-navy-950" />
                <span>Book a Consultation</span>
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-navy-800/90 border border-slate-700 text-slate-200 font-semibold text-base hover:text-white hover:border-gold-500/50 hover:bg-navy-700/60 transition-all"
              >
                <Mail className="w-5 h-5 text-gold-400" />
                <span>Contact Chambers</span>
              </button>

              <a
                href={profile.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-semibold text-base hover:bg-emerald-900/50 hover:border-emerald-400 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-End Advocate Portrait & Floating Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">

              {/* Outer Golden Glow Border Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 rounded-2xl opacity-60 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse-subtle" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-navy-900 border-2 border-gold-500/50 shadow-2xl">
                <img
                  src={profile.portraitImg}
                  alt="Adv. Adarsh Kumar Hans"
                  className="w-full h-auto object-cover object-top max-h-[520px] transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to a placeholder portrait if local image path differs
                    e.target.onerror = null;
                    e.target.src = "public/assets/images/Advocate.jpeg";
                  }}
                />

                {/* Gradient Vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />

                {/* Court Seal Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center space-x-2 bg-navy-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-500/30">
                    <Scale className="w-4 h-4 text-gold-400" />
                    <span className="font-serif font-semibold text-white">Chamber Practice</span>
                  </div>
                  <span className="text-gold-400 font-serif font-bold">New Delhi</span>
                </div>
              </div>

              {/* Floating Experience Badge Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-navy-900/95 backdrop-blur-xl border border-gold-500/40 p-4 rounded-xl shadow-2xl flex items-center space-x-3.5 animate-float">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient flex items-center justify-center text-navy-950 font-bold shadow-gold-sm">
                  <Clock className="w-6 h-6 text-navy-950" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-extrabold text-gold-400 leading-none">
                    15+ Years
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">
                    Active Courtroom Advocacy
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
