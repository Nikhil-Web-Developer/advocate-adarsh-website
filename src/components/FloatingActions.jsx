import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function FloatingActions({ onOpenBooking }) {
  const { profile } = ADVOCATE_DATA;

  return (
    <aside aria-label="Floating Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      
      {/* Quick Consultation Booking FAB */}
      <button
        onClick={onOpenBooking}
        className="group flex items-center space-x-2 bg-navy-900/90 hover:bg-navy-800 text-gold-400 hover:text-white p-3 sm:px-4 sm:py-2.5 rounded-full border border-gold-500/40 shadow-xl backdrop-blur-md transition-all hover:scale-105"
        title="Schedule Consultation"
      >
        <Calendar className="w-5 h-5 text-gold-400" />
        <span className="hidden sm:inline text-xs font-serif font-bold tracking-wider">
          Book Consultation
        </span>
      </button>

      {/* Direct WhatsApp FAB */}
      <a
        href={profile.socialLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 shadow-emerald-900/50 group relative"
        title="Direct WhatsApp Support"
        aria-label="Direct WhatsApp Support"
      >
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
        <MessageSquare className="w-6 h-6" />
      </a>

    </aside>
  );
}
