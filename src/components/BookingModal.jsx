import React from 'react';
import { X, Calendar, Scale } from 'lucide-react';
import ConsultationBooking from './ConsultationBooking';

export default function BookingModal({ isOpen, onClose, initialPractice = '', onBookingSuccess }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-950 border border-gold-500/40 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6 pr-8 text-left">
          <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-gold-sm">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-serif uppercase tracking-widest text-gold-400 font-bold">
              Chambers of Adv. Adarsh Kumar Hans
            </span>
            <h3 className="text-2xl font-serif font-bold text-white leading-tight">
              Schedule Legal Consultation
            </h3>
          </div>
        </div>

        <div className="gold-divider w-full my-4" />

        <ConsultationBooking 
          initialPractice={initialPractice} 
          onBookingSuccess={onBookingSuccess} 
        />
      </div>
    </div>
  );
}
