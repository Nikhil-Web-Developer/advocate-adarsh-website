import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Video, User, Phone, Mail, FileText, CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { ADVOCATE_DATA } from '../data/advocateData';

export default function ConsultationBooking({ initialPractice = '', onBookingSuccess }) {
  const [mode, setMode] = useState('in-person'); // 'in-person' | 'video'
  const [selectedPractice, setSelectedPractice] = useState(initialPractice || '');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  // Initialize date limits
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Default 2 days ahead
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 2);
    if (defaultDate.getDay() === 0) { // If Sunday, move to Monday
      defaultDate.setDate(defaultDate.getDate() + 1);
    }
    
    setSelectedDate(defaultDate.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    if (initialPractice) {
      setSelectedPractice(initialPractice);
    }
  }, [initialPractice]);

  const timeSlots = [
    '11:00 AM',
    '12:30 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '06:45 PM'
  ];

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Please provide your full legal name';
    if (!phone.trim() || phone.trim().length < 8) errs.phone = 'Please provide a valid contact number';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email address';
    if (!selectedPractice) errs.practice = 'Please select a legal practice area';
    if (!selectedDate) errs.date = 'Please select your preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `AKH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const bookingData = {
        refId,
        name,
        phone,
        email,
        mode,
        practice: selectedPractice,
        date: selectedDate,
        time: selectedTime,
        message: message.trim() || 'General legal consultation request'
      };

      setBookingConfirmed(bookingData);
      setIsSubmitting(false);

      if (onBookingSuccess) {
        onBookingSuccess(bookingData);
      }
    }, 600);
  };

  const getWhatsAppMessageUrl = () => {
    if (!bookingConfirmed) return '#';
    const text = encodeURIComponent(
      `*New Consultation Booking Request*\n\n` +
      `*Ref ID:* ${bookingConfirmed.refId}\n` +
      `*Client:* ${bookingConfirmed.name}\n` +
      `*Phone:* ${bookingConfirmed.phone}\n` +
      `*Email:* ${bookingConfirmed.email}\n` +
      `*Mode:* ${bookingConfirmed.mode === 'in-person' ? 'In-Person Chamber' : 'Encrypted Video Consultation'}\n` +
      `*Practice Area:* ${bookingConfirmed.practice}\n` +
      `*Preferred Date:* ${bookingConfirmed.date}\n` +
      `*Time Slot:* ${bookingConfirmed.time}\n` +
      `*Notes:* ${bookingConfirmed.message}`
    );
    return `https://wa.me/${ADVOCATE_DATA.profile.whatsapp}?text=${text}`;
  };

  if (bookingConfirmed) {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-gold-400 bg-navy-950 text-center max-w-xl mx-auto shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-serif font-bold tracking-widest text-gold-400 uppercase">
          Consultation Request Received
        </span>
        <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-2">
          Appointment Scheduled
        </h3>
        
        <p className="text-slate-300 text-sm mb-6">
          Your consultation request has been logged under Reference ID: <strong className="text-gold-300 font-mono text-base">{bookingConfirmed.refId}</strong>. Our chamber manager will confirm the schedule via phone & email.
        </p>

        {/* Summary Card */}
        <div className="bg-navy-900/90 rounded-xl p-5 border border-gold-500/20 text-left text-xs sm:text-sm space-y-2.5 mb-6 text-slate-300">
          <div className="flex justify-between border-b border-navy-800 pb-2">
            <span className="text-slate-400">Mode of Meeting:</span>
            <span className="font-semibold text-white capitalize">{bookingConfirmed.mode === 'in-person' ? 'In-Person Chamber' : 'Encrypted Video Call'}</span>
          </div>
          <div className="flex justify-between border-b border-navy-800 pb-2">
            <span className="text-slate-400">Practice Area:</span>
            <span className="font-semibold text-gold-300">{bookingConfirmed.practice}</span>
          </div>
          <div className="flex justify-between border-b border-navy-800 pb-2">
            <span className="text-slate-400">Scheduled Date:</span>
            <span className="font-semibold text-white">{bookingConfirmed.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Time Slot:</span>
            <span className="font-semibold text-white">{bookingConfirmed.time}</span>
          </div>
        </div>

        {/* WhatsApp Fast Track Button */}
        <div className="space-y-3">
          <a
            href={getWhatsAppMessageUrl()}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/25 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Notify Chamber Instantly via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setBookingConfirmed(null);
              setName('');
              setPhone('');
              setEmail('');
              setMessage('');
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-navy-900 border border-slate-700 text-slate-300 text-xs font-semibold hover:text-white hover:border-gold-500/40 transition-colors"
          >
            Book Another Consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      
      {/* 1. Mode Selection */}
      <div>
        <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-2">
          Consultation Format
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setMode('in-person')}
            className={`p-3.5 rounded-xl border flex items-center justify-center space-x-2.5 text-xs sm:text-sm font-semibold transition-all ${
              mode === 'in-person'
                ? 'bg-gold-gradient text-navy-950 border-gold-400 shadow-gold-sm'
                : 'bg-navy-900/80 text-slate-300 border-slate-800 hover:border-gold-500/30'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>In-Person Chamber</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('video')}
            className={`p-3.5 rounded-xl border flex items-center justify-center space-x-2.5 text-xs sm:text-sm font-semibold transition-all ${
              mode === 'video'
                ? 'bg-gold-gradient text-navy-950 border-gold-400 shadow-gold-sm'
                : 'bg-navy-900/80 text-slate-300 border-slate-800 hover:border-gold-500/30'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Secure Video Call</span>
          </button>
        </div>

        <div className="mt-2 text-[11px] text-slate-400 flex items-center space-x-1.5">
          {mode === 'in-person' ? (
            <>
              <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>Chamber No. 342, High Court of Delhi / Connaught Place Chamber</span>
            </>
          ) : (
            <>
              <Video className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Encrypted High-Definition Video Conference (Google Meet / Zoom)</span>
            </>
          )}
        </div>
      </div>

      {/* 2. Practice Area Selection */}
      <div>
        <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-2">
          Legal Practice Area *
        </label>
        <select
          value={selectedPractice}
          onChange={(e) => {
            setSelectedPractice(e.target.value);
            if (errors.practice) setErrors({ ...errors, practice: null });
          }}
          className={`w-full px-4 py-3 rounded-xl bg-navy-900 border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
            errors.practice 
              ? 'border-rose-500 focus:ring-rose-500' 
              : 'border-gold-500/30 focus:border-gold-400 focus:ring-gold-400'
          }`}
        >
          <option value="">Select Legal Practice Category</option>
          {ADVOCATE_DATA.practiceAreas.map((area) => (
            <option key={area.id} value={area.title}>
              {area.title}
            </option>
          ))}
        </select>
        {errors.practice && (
          <p className="text-xs text-rose-400 mt-1 flex items-center space-x-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.practice}</span>
          </p>
        )}
      </div>

      {/* 3. Date & Time Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-2">
            Preferred Date *
          </label>
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                if (errors.date) setErrors({ ...errors, date: null });
              }}
              min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
              className={`w-full px-4 py-3 rounded-xl bg-navy-900 border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                errors.date 
                  ? 'border-rose-500 focus:ring-rose-500' 
                  : 'border-gold-500/30 focus:border-gold-400 focus:ring-gold-400'
              }`}
            />
          </div>
          {errors.date && (
            <p className="text-xs text-rose-400 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.date}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-2">
            Preferred Time Slot
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
          >
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 4. Client Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: null });
              }}
              placeholder="e.g. Rajesh Sharma"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-900 border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                errors.name 
                  ? 'border-rose-500 focus:ring-rose-500' 
                  : 'border-gold-500/30 focus:border-gold-400 focus:ring-gold-400'
              }`}
            />
          </div>
          {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
            Contact Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors({ ...errors, phone: null });
              }}
              placeholder="+91 98765 43210"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-900 border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                errors.phone 
                  ? 'border-rose-500 focus:ring-rose-500' 
                  : 'border-gold-500/30 focus:border-gold-400 focus:ring-gold-400'
              }`}
            />
          </div>
          {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
          Email Address *
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            placeholder="client@domain.com"
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-900 border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
              errors.email 
                ? 'border-rose-500 focus:ring-rose-500' 
                : 'border-gold-500/30 focus:border-gold-400 focus:ring-gold-400'
            }`}
          />
        </div>
        {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-400 mb-1.5">
          Brief Summary of Legal Dispute / Matter
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Kindly mention key facts, existing notices, court name, or urgent relief required..."
          className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none"
        />
      </div>

      {/* Confidentiality Notice */}
      <div className="text-[11px] text-slate-400 flex items-center space-x-1.5 bg-navy-950/60 p-2.5 rounded-lg border border-slate-800">
        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
        <span>All communications are covered by attorney-client professional privilege.</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm sm:text-base shadow-gold-md hover:shadow-gold-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
      >
        <CalendarIcon className="w-5 h-5" />
        <span>{isSubmitting ? 'Confirming Appointment...' : 'Confirm & Schedule Consultation'}</span>
      </button>

    </form>
  );
}
