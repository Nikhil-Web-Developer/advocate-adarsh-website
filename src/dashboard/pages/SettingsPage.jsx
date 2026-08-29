import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Save, 
  ShieldCheck, 
  Bell, 
  Calendar, 
  Lock, 
  Download, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react';
import { INITIAL_DASHBOARD_DATA } from '../../data/dashboardData';

export default function SettingsPage({ onSaveSuccess }) {
  const [settings, setSettings] = useState(INITIAL_DASHBOARD_DATA.settings);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (onSaveSuccess) onSaveSuccess('Chamber system settings saved successfully.');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    setPasswordUpdated(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    if (onSaveSuccess) onSaveSuccess('Admin security password updated.');
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(INITIAL_DASHBOARD_DATA, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `AdvocatePro_Chamber_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    if (onSaveSuccess) onSaveSuccess('Client and appointment data exported to JSON.');
  };

  return (
    <div className="space-y-8 text-left max-w-4xl">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-slate-900">
          Chamber & System Settings
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Configure appointment calendars, notification triggers, website privacy, and security controls.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* 1. NOTIFICATION SETTINGS */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Bell className="w-5 h-5 text-gold-500" />
            <h3 className="font-serif font-bold text-slate-900 text-base">
              Alerts & Notifications
            </h3>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer hover:bg-slate-100/70 transition-colors">
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">Email Alerts on New Client Enquiry</div>
                <div className="text-xs text-slate-500">Receive instant email to chamber@advocateadarsh.com when an inquiry is submitted</div>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.emailAlertsOnEnquiry}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, emailAlertsOnEnquiry: e.target.checked }
                })}
                className="w-4 h-4 text-gold-600 rounded focus:ring-gold-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer hover:bg-slate-100/70 transition-colors">
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">WhatsApp Alert on Consultation Bookings</div>
                <div className="text-xs text-slate-500">Send automatic WhatsApp dispatch notification to chamber counsel</div>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.whatsappAlertsOnBooking}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, whatsappAlertsOnBooking: e.target.checked }
                })}
                className="w-4 h-4 text-gold-600 rounded focus:ring-gold-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer hover:bg-slate-100/70 transition-colors">
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">Daily Court & Consultation Agenda SMS</div>
                <div className="text-xs text-slate-500">Receive SMS summary at 08:30 AM every court working morning</div>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.smsDailyAgenda}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, smsDailyAgenda: e.target.checked }
                })}
                className="w-4 h-4 text-gold-600 rounded focus:ring-gold-500"
              />
            </label>
          </div>
        </div>

        {/* 2. APPOINTMENT CALENDAR RULES */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Calendar className="w-5 h-5 text-gold-500" />
            <h3 className="font-serif font-bold text-slate-900 text-base">
              Appointment Scheduling Constraints
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                Default Consultation Duration
              </label>
              <select
                value={settings.calendar.defaultSlotDuration}
                onChange={(e) => setSettings({
                  ...settings,
                  calendar: { ...settings.calendar, defaultSlotDuration: Number(e.target.value) }
                })}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
              >
                <option value={30}>30 Minutes</option>
                <option value={45}>45 Minutes (Recommended)</option>
                <option value={60}>60 Minutes</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                Buffer Time Between Appointments
              </label>
              <select
                value={settings.calendar.bufferBetweenAppointments}
                onChange={(e) => setSettings({
                  ...settings,
                  calendar: { ...settings.calendar, bufferBetweenAppointments: Number(e.target.value) }
                })}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
              >
                <option value={10}>10 Minutes</option>
                <option value={15}>15 Minutes</option>
                <option value={30}>30 Minutes</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. WEBSITE PRIVACY & BCI COMPLIANCE */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-5 h-5 text-gold-500" />
            <h3 className="font-serif font-bold text-slate-900 text-base">
              Website & Bar Council Compliance
            </h3>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer">
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">Bar Council Rule 36 Disclaimer Modal</div>
                <div className="text-xs text-slate-500">Require first-time website visitors to acknowledge statutory legal disclaimer</div>
              </div>
              <input
                type="checkbox"
                checked={settings.website.bciDisclaimerEnabled}
                onChange={(e) => setSettings({
                  ...settings,
                  website: { ...settings.website, bciDisclaimerEnabled: e.target.checked }
                })}
                className="w-4 h-4 text-gold-600 rounded focus:ring-gold-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer">
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">Verified Client Reviews Visible on Homepage</div>
                <div className="text-xs text-slate-500">Display anonymized, verified client testimonials</div>
              </div>
              <input
                type="checkbox"
                checked={settings.website.publicReviewsVisible}
                onChange={(e) => setSettings({
                  ...settings,
                  website: { ...settings.website, publicReviewsVisible: e.target.checked }
                })}
                className="w-4 h-4 text-gold-600 rounded focus:ring-gold-500"
              />
            </label>
          </div>
        </div>

        {/* Save Settings Trigger */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm shadow-gold-sm hover:scale-105 transition-all flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save System Preferences</span>
          </button>
        </div>

      </form>

      {/* 4. CHANGE PASSWORD */}
      <form onSubmit={handlePasswordChange} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <Lock className="w-5 h-5 text-gold-500" />
          <h3 className="font-serif font-bold text-slate-900 text-base">
            Change Advocate Security Password
          </h3>
        </div>

        {passwordUpdated && (
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Security password updated successfully.</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
          >
            Update Password
          </button>
        </div>
      </form>

      {/* 5. DATA EXPORT & DANGER ZONE */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3 className="font-serif font-bold text-slate-900 text-base">
            Chamber Data Archive & Danger Zone
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 gap-4">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              Export Complete Chamber Database
            </h4>
            <p className="text-xs text-slate-500">
              Download all client enquiries, appointment logs, practice data, and settings as a secure JSON archive.
            </p>
          </div>

          <button
            type="button"
            onClick={handleExportData}
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 shadow-sm flex items-center space-x-1.5 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-gold-600" />
            <span>Export Archive</span>
          </button>
        </div>
      </div>

    </div>
  );
}
