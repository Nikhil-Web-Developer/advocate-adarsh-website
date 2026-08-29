import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, Scale, ShieldCheck } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function ContactSection({ onBookingRequest }) {
  const { profile } = ADVOCATE_DATA;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Subtle Ambient light */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Chamber Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Chambers & <span className="text-gold-gradient">Contact Information</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Reach our legal chambers directly for court representation inquiries, legal opinions, or appointment scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Chamber Addresses & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Location Cards */}
            {profile.locations.map((loc, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-serif uppercase tracking-wider text-gold-400 font-bold block">
                      {loc.type}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white">
                      {loc.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                  {loc.address}
                </p>

                <div className="flex items-start space-x-2 text-xs text-slate-400 pt-2 border-t border-navy-800">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{loc.timing}</span>
                </div>
              </div>
            ))}

            {/* Direct Contact Metrics */}
            <div className="glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4">
              <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-gold-400">
                Direct Telecommunications
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${profile.phoneClean}`}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900 hover:bg-navy-800 border border-slate-800 text-slate-200 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-slate-400">Chamber Helpline</div>
                    <div className="font-semibold text-white">{profile.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900 hover:bg-navy-800 border border-slate-800 text-slate-200 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-slate-400">Electronic Mail</div>
                    <div className="font-semibold text-white">{profile.email}</div>
                  </div>
                </a>

                <a
                  href={profile.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/40 text-emerald-300 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-emerald-400/80">WhatsApp Messenger</div>
                    <div className="font-semibold text-emerald-200">Chat with Chamber Counsel</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Electronic Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-gold-500/30 text-left shadow-2xl">
              
              <div className="mb-6">
                <span className="text-xs font-serif uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  Confidential Inquiry
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Send a Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Our chamber desk responds to initial legal inquiries within 24 business hours.
                </p>
              </div>

              {isSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to the Chambers of Adv. Adarsh Kumar Hans. Our associate counsel will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-navy-800 border border-gold-500/40 text-gold-300 text-xs font-semibold hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98123 45678"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                        Subject / Matter Type
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. High Court Appeal / Property Dispute"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                      Case Details & Inquiry
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize the facts, stage of proceedings, court jurisdiction, or specific counsel required..."
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm sm:text-base shadow-gold-md hover:shadow-gold-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Transmitting Information...' : 'Dispatch Confidential Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
