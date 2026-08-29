import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Video, 
  Plus, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Search, 
  Filter, 
  User, 
  Phone, 
  Mail, 
  X,
  FileText,
  ChevronLeft,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

export default function AppointmentsPage({ 
  appointments, 
  onAddAppointment, 
  onUpdateAppointmentStatus, 
  onRescheduleAppointment 
}) {
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'calendar'
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [rescheduleModalApt, setRescheduleModalApt] = useState(null);
  const [newRescheduleDate, setNewRescheduleDate] = useState('');
  const [newRescheduleTime, setNewRescheduleTime] = useState('11:30 AM');

  // New appointment form state
  const [newApt, setNewApt] = useState({
    clientName: '',
    phone: '',
    email: '',
    matter: '',
    practiceArea: 'Civil Law & Commercial Litigation',
    type: 'in-person',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '11:00 AM',
    venue: 'Chamber No. 342, High Court of Delhi',
    notes: ''
  });

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = 
      apt.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.matter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.phone.includes(searchQuery);

    const matchesStatus = filterStatus === 'ALL' || apt.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleCreateAppointment = (e) => {
    e.preventDefault();
    if (!newApt.clientName || !newApt.phone) return;

    const aptObj = {
      id: `APT-${Math.floor(100 + Math.random() * 900)}`,
      ...newApt,
      dateGroup: 'Scheduled',
      status: 'Confirmed'
    };

    onAddAppointment(aptObj);
    setIsAddModalOpen(false);
    setNewApt({
      clientName: '',
      phone: '',
      email: '',
      matter: '',
      practiceArea: 'Civil Law & Commercial Litigation',
      type: 'in-person',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '11:00 AM',
      venue: 'Chamber No. 342, High Court of Delhi',
      notes: ''
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">Confirmed</span>;
      case 'Pending':
        return <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">Pending Review</span>;
      case 'Completed':
        return <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">Completed</span>;
      case 'Cancelled':
        return <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold">Cancelled</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">{status}</span>;
    }
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Consultation Appointments
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your daily court chambers consultations and encrypted video conferences.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs sm:text-sm font-bold shadow-gold-sm hover:scale-105 transition-transform"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add New Appointment</span>
        </button>
      </div>

      {/* Control Bar: Tabs, Search, Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Dual Mode View Tabs */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'list' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'calendar' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Calendar View
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search appointment or client..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex flex-wrap gap-1 w-full md:w-auto">
            {['ALL', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  filterStatus === st 
                    ? 'bg-[#0B192C] text-gold-300' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* 1. LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filteredAppointments.map((apt) => (
            <div 
              key={apt.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left Details */}
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {apt.id}
                  </span>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {apt.clientName}
                  </h3>
                  {getStatusBadge(apt.status)}
                  
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold flex items-center space-x-1 ${
                    apt.type === 'in-person' ? 'bg-amber-100 text-amber-800' : 'bg-indigo-100 text-indigo-800'
                  }`}>
                    {apt.type === 'in-person' ? <MapPin className="w-3 h-3" /> : <Video className="w-3 h-3" />}
                    <span>{apt.type === 'in-person' ? 'In-Person Chamber' : 'Online Call'}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                  <span className="font-semibold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    {apt.matter}
                  </span>
                  <span className="flex items-center space-x-1 font-bold text-slate-800">
                    <CalendarIcon className="w-3.5 h-3.5 text-gold-500" />
                    <span>{apt.date}</span>
                  </span>
                  <span className="flex items-center space-x-1 font-bold text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-gold-500" />
                    <span>{apt.time}</span>
                  </span>
                  <a href={`tel:${apt.phone}`} className="flex items-center space-x-1 hover:text-gold-600">
                    <Phone className="w-3 h-3 text-slate-400" />
                    <span>{apt.phone}</span>
                  </a>
                </div>

                {apt.notes && (
                  <p className="text-xs text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    Note: "{apt.notes}"
                  </p>
                )}
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-wrap lg:flex-col items-end gap-2 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100">
                {apt.status === 'Pending' && (
                  <button
                    onClick={() => onUpdateAppointmentStatus(apt.id, 'Confirmed')}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-colors flex items-center space-x-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Accept Appointment</span>
                  </button>
                )}

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setRescheduleModalApt(apt);
                      setNewRescheduleDate(apt.date);
                      setNewRescheduleTime(apt.time);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-colors flex items-center space-x-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reschedule</span>
                  </button>

                  {apt.status !== 'Completed' && apt.status !== 'Cancelled' && (
                    <button
                      onClick={() => onUpdateAppointmentStatus(apt.id, 'Completed')}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 transition-colors"
                    >
                      Completed
                    </button>
                  )}

                  {apt.status !== 'Cancelled' && (
                    <button
                      onClick={() => onUpdateAppointmentStatus(apt.id, 'Cancelled')}
                      className="px-3 py-1.5 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredAppointments.length === 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-sm">
              No appointments found matching your search criteria.
            </div>
          )}
        </div>
      )}

      {/* 2. CALENDAR VIEW */}
      {viewMode === 'calendar' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                August – September 2026 Schedule
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold-100 text-gold-800 font-bold">
                {appointments.length} Consultations
              </span>
            </div>
          </div>

          {/* Simple Clean Grid of Next 7 Days */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {[
              { day: 'Mon', date: '25 Aug', count: 0 },
              { day: 'Tue', date: '26 Aug', count: 1 },
              { day: 'Wed', date: '27 Aug', count: 1 },
              { day: 'Thu', date: '28 Aug', count: 2 },
              { day: 'Fri', date: '29 Aug (Today)', count: 2, today: true },
              { day: 'Sat', date: '30 Aug', count: 2 },
              { day: 'Sun', date: '31 Aug', count: 0, courtHoliday: true },
            ].map((d, i) => (
              <div 
                key={i} 
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between min-h-[140px] ${
                  d.today ? 'bg-amber-50/50 border-gold-400 ring-2 ring-gold-400/30' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>{d.day}</span>
                    <span className={d.today ? 'text-gold-700 font-extrabold' : 'text-slate-400'}>{d.date.split(' ')[0]}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {d.courtHoliday ? 'Court Closed' : `${d.count} Consultations`}
                  </div>
                </div>

                {d.count > 0 && (
                  <div className="space-y-1 mt-2">
                    <span className="block text-[10px] px-2 py-1 rounded bg-white font-bold text-slate-800 border border-slate-200 truncate">
                      {d.today ? '10:00 AM Rahul S.' : '11:30 AM Amit K.'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. ADD APPOINTMENT MODAL */}
      {isAddModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 text-left space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-slate-900 text-lg">
                Create New Client Appointment
              </h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAppointment} className="space-y-4">
              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={newApt.clientName}
                  onChange={(e) => setNewApt({ ...newApt, clientName: e.target.value })}
                  placeholder="e.g. Sunil Narang"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newApt.phone}
                    onChange={(e) => setNewApt({ ...newApt, phone: e.target.value })}
                    placeholder="+91 98111 22334"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newApt.email}
                    onChange={(e) => setNewApt({ ...newApt, email: e.target.value })}
                    placeholder="client@domain.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Legal Matter Brief
                </label>
                <input
                  type="text"
                  value={newApt.matter}
                  onChange={(e) => setNewApt({ ...newApt, matter: e.target.value })}
                  placeholder="e.g. Injunction Hearing / Bail Matter"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Format
                  </label>
                  <select
                    value={newApt.type}
                    onChange={(e) => setNewApt({ ...newApt, type: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  >
                    <option value="in-person">In-Person Chamber</option>
                    <option value="online">Encrypted Video Call</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={newApt.date}
                    onChange={(e) => setNewApt({ ...newApt, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={newApt.time}
                    onChange={(e) => setNewApt({ ...newApt, time: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Chamber Notes & Instructions
                </label>
                <textarea
                  rows={2}
                  value={newApt.notes}
                  onChange={(e) => setNewApt({ ...newApt, notes: e.target.value })}
                  placeholder="Instructions for documents or briefing..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                >
                  Save & Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. RESCHEDULE MODAL */}
      {rescheduleModalApt && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setRescheduleModalApt(null)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 p-6 text-left space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-slate-900 text-base">
                Reschedule: {rescheduleModalApt.clientName}
              </h3>
              <button 
                onClick={() => setRescheduleModalApt(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-serif font-bold text-slate-600 mb-1">
                New Date *
              </label>
              <input
                type="date"
                value={newRescheduleDate}
                onChange={(e) => setNewRescheduleDate(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-serif font-bold text-slate-600 mb-1">
                New Time Slot *
              </label>
              <select
                value={newRescheduleTime}
                onChange={(e) => setNewRescheduleTime(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
              >
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:30 PM">03:30 PM</option>
                <option value="05:00 PM">05:00 PM</option>
                <option value="06:30 PM">06:30 PM</option>
              </select>
            </div>

            <div className="pt-2 flex justify-end space-x-2">
              <button
                onClick={() => setRescheduleModalApt(null)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
              >
                Back
              </button>
              <button
                onClick={() => {
                  onRescheduleAppointment(rescheduleModalApt.id, newRescheduleDate, newRescheduleTime);
                  setRescheduleModalApt(null);
                }}
                className="px-4 py-1.5 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-sm"
              >
                Confirm Reschedule
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
