import React, { useState } from 'react';
import { 
  FileEdit, 
  Save, 
  Globe, 
  CheckCircle, 
  Sparkles, 
  Building, 
  Phone, 
  Mail, 
  ShieldCheck,
  ExternalLink 
} from 'lucide-react';
import { ADVOCATE_DATA } from '../../data/advocateData';

export default function WebsiteContentPage({ onSaveSuccess, onExitToWebsite }) {
  const [content, setContent] = useState({
    headline: ADVOCATE_DATA.profile.headline,
    subheadline: ADVOCATE_DATA.profile.subheadline,
    aboutShort: "Advocate Adarsh Kumar Hans is an experienced advocate enrolled with the Bar Council of Delhi (Enrolment No. D/1428/2009). With over 15 years of active trial and appellate practice before the Supreme Court of India, High Court of Delhi, and District Courts.",
    aboutDetailed: "Holding honors in B.A. LL.B. (Hons) and Master of Laws (LL.M.), Adv. Adarsh specializes in high-stakes Civil & Commercial Litigation, White-Collar Criminal Defense, Property Disputes, and Family Law with unyielding commitment to legal ethics and strategic precision.",
    creedQuote: "Our practice is founded upon the principle that every matter deserves meticulous preparation, strategic fortitude, and complete fidelity to truth and justice.",
    delhiHighCourtAddress: "Chamber No. 342, Lawyers Chambers Block III, High Court of Delhi, New Delhi - 110503",
    connaughtPlaceAddress: "Suite 408, Mercantile House, 15 K.G. Marg, Connaught Place, New Delhi - 110001",
    officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM (By Prior Appointment)",
    chamberHelpline: "+91 98108 45219",
    chamberEmail: "chamber@advocateadarsh.com"
  });

  const [saving, setSaving] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      if (onSaveSuccess) {
        onSaveSuccess('Public website content updated successfully.');
      }
    }, 600);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 text-left max-w-5xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Website Content Management (CMS)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Modify public website copy, hero announcements, biography, and chamber contact details without touching code.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={onExitToWebsite}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 flex items-center space-x-1.5 transition-colors"
          >
            <Globe className="w-4 h-4 text-gold-600" />
            <span>Preview Public Site</span>
          </button>

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-gold-sm hover:scale-105 transition-all flex items-center space-x-1.5 disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      {/* 1. HERO SECTION CONTENT */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <Sparkles className="w-5 h-5 text-gold-500" />
          <h3 className="font-serif font-bold text-slate-900 text-base">
            Hero & Headline Section
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Main Headline Quote
            </label>
            <input
              type="text"
              value={content.headline}
              onChange={(e) => setContent({ ...content, headline: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Subheadline / Introduction Statement
            </label>
            <textarea
              rows={2}
              value={content.subheadline}
              onChange={(e) => setContent({ ...content, subheadline: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>
        </div>
      </div>

      {/* 2. ABOUT ME & CHAMBER CREED */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <ShieldCheck className="w-5 h-5 text-gold-500" />
          <h3 className="font-serif font-bold text-slate-900 text-base">
            About Adv. Adarsh & Chambers Philosophy
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Short Summary Description (Appears in About Lead)
            </label>
            <textarea
              rows={2}
              value={content.aboutShort}
              onChange={(e) => setContent({ ...content, aboutShort: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Detailed Biography & Academic Jurisprudence
            </label>
            <textarea
              rows={3}
              value={content.aboutDetailed}
              onChange={(e) => setContent({ ...content, aboutDetailed: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Chamber Creed Quote
            </label>
            <input
              type="text"
              value={content.creedQuote}
              onChange={(e) => setContent({ ...content, creedQuote: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>
      </div>

      {/* 3. CHAMBERS LOCATIONS & TIMINGS */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <Building className="w-5 h-5 text-gold-500" />
          <h3 className="font-serif font-bold text-slate-900 text-base">
            Chambers Addresses & Office Timings
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Delhi High Court Chamber Address
            </label>
            <textarea
              rows={2}
              value={content.delhiHighCourtAddress}
              onChange={(e) => setContent({ ...content, delhiHighCourtAddress: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Connaught Place Office Address
            </label>
            <textarea
              rows={2}
              value={content.connaughtPlaceAddress}
              onChange={(e) => setContent({ ...content, connaughtPlaceAddress: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Office Hours
            </label>
            <input
              type="text"
              value={content.officeHours}
              onChange={(e) => setContent({ ...content, officeHours: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Helpline Phone Number
            </label>
            <input
              type="text"
              value={content.chamberHelpline}
              onChange={(e) => setContent({ ...content, chamberHelpline: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold text-slate-700 uppercase tracking-wider mb-1">
              Chamber Email
            </label>
            <input
              type="email"
              value={content.chamberEmail}
              onChange={(e) => setContent({ ...content, chamberEmail: e.target.value })}
              className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm shadow-gold-md hover:scale-105 transition-all flex items-center space-x-2 disabled:opacity-60"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Publishing Updates...' : 'Save & Publish to Public Website'}</span>
        </button>
      </div>

    </form>
  );
}
