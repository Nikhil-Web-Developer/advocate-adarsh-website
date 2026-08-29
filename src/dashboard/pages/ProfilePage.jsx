import React, { useState } from 'react';
import {
  User,
  Save,
  Globe,
  Camera,
  Award,
  GraduationCap,
  Building,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { ADVOCATE_DATA } from '../../data/advocateData';

export default function ProfilePage({ onSaveSuccess, onExitToWebsite }) {
  const [profile, setProfile] = useState({
    name: ADVOCATE_DATA.profile.name,
    title: ADVOCATE_DATA.profile.title,
    degrees: ADVOCATE_DATA.profile.degrees,
    barCouncilNumber: ADVOCATE_DATA.profile.barCouncilNumber,
    experienceYears: 15,
    email: ADVOCATE_DATA.profile.email,
    phone: ADVOCATE_DATA.profile.phone,
    whatsapp: ADVOCATE_DATA.profile.whatsapp,
    courtsAdmitted: ADVOCATE_DATA.profile.courtsAdmitted,
    memberships: "Delhi High Court Bar Association (DHCBA)\nSupreme Court Bar Association (SCBA)\nNew Delhi Bar Association (NDBA)",
    education: "Master of Laws (LL.M.) - Commercial & Constitutional Jurisprudence\nBachelor of Arts & Bachelor of Laws - B.A. LL.B. (Hons)",
    highCourtChamber: ADVOCATE_DATA.profile.locations[0]?.address || '',
    connaughtPlaceOffice: ADVOCATE_DATA.profile.locations[1]?.address || '',
    officeHours: "Monday – Saturday: 10:00 AM – 7:30 PM (By Prior Appointment)"
  });

  const [saving, setSaving] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      if (onSaveSuccess) onSaveSuccess('Advocate professional profile updated successfully.');
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left max-w-5xl">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Advocate Profile & Chamber Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your personal legal qualifications, Bar Council registration, and chamber contact information.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={onExitToWebsite}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 flex items-center space-x-1.5 transition-colors"
          >
            <Globe className="w-4 h-4 text-gold-600" />
            <span>Preview Public Profile</span>
          </button>

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-gold-sm hover:scale-105 transition-all flex items-center space-x-1.5 disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving Profile...' : 'Save Profile'}</span>
          </button>
        </div>
      </div>

      {/* 1. PHOTO & CORE TITLES */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full border-4 border-gold-500/60 overflow-hidden shadow-lg bg-slate-200">
              <img
                src="/assets/images/Advocate.jpeg"
                alt="Adv. Adarsh"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200";
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <Camera className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-serif font-bold text-slate-900">
              {profile.name}
            </h3>
            <p className="text-xs font-semibold text-gold-700">
              {profile.title} &bull; {profile.degrees}
            </p>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold mt-2">
              <Award className="w-3.5 h-3.5 text-gold-600" />
              <span>{profile.barCouncilNumber}</span>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Full Legal Name *
            </label>
            <input
              type="text"
              required
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Professional Designation / Title *
            </label>
            <input
              type="text"
              required
              value={profile.title}
              onChange={(e) => setProfile({ ...profile, title: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Academic Degrees & Honors
            </label>
            <input
              type="text"
              value={profile.degrees}
              onChange={(e) => setProfile({ ...profile, degrees: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Bar Council Enrolment Number *
            </label>
            <input
              type="text"
              required
              value={profile.barCouncilNumber}
              onChange={(e) => setProfile({ ...profile, barCouncilNumber: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>
      </div>

      {/* 2. EDUCATION & BAR ASSOCIATIONS */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <GraduationCap className="w-5 h-5 text-gold-500" />
          <h3 className="font-serif font-bold text-slate-900 text-base">
            Education & Bar Association Memberships
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Academic Qualifications (One per line)
            </label>
            <textarea
              rows={3}
              value={profile.education}
              onChange={(e) => setProfile({ ...profile, education: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Bar Memberships & Standing (One per line)
            </label>
            <textarea
              rows={3}
              value={profile.memberships}
              onChange={(e) => setProfile({ ...profile, memberships: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>
        </div>
      </div>

      {/* 3. CHAMBERS & CONTACTS */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <Building className="w-5 h-5 text-gold-500" />
          <h3 className="font-serif font-bold text-slate-900 text-base">
            Chamber Coordinates & Communication Lines
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Direct Phone Number
            </label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Chamber Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              WhatsApp Contact
            </label>
            <input
              type="text"
              value={profile.whatsapp}
              onChange={(e) => setProfile({ ...profile, whatsapp: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Delhi High Court Chamber
            </label>
            <textarea
              rows={2}
              value={profile.highCourtChamber}
              onChange={(e) => setProfile({ ...profile, highCourtChamber: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Connaught Place Office
            </label>
            <textarea
              rows={2}
              value={profile.connaughtPlaceOffice}
              onChange={(e) => setProfile({ ...profile, connaughtPlaceOffice: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 resize-none"
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
          <span>{saving ? 'Saving Profile Updates...' : 'Save Changes'}</span>
        </button>
      </div>

    </form>
  );
}
