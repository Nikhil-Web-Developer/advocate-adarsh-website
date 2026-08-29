import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MessageSquare, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowRight, 
  X, 
  ExternalLink,
  Shield,
  FileText,
  UserCheck
} from 'lucide-react';

export default function EnquiriesPage({ 
  enquiries, 
  onUpdateEnquiryStatus, 
  onConvertEnquiryToAppointment,
  selectedEnquiryFromHome,
  onClearSelectedEnquiry
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [activeEnquiry, setActiveEnquiry] = useState(selectedEnquiryFromHome || null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Sync if opened from home
  React.useEffect(() => {
    if (selectedEnquiryFromHome) {
      setActiveEnquiry(selectedEnquiryFromHome);
    }
  }, [selectedEnquiryFromHome]);

  const filteredEnquiries = enquiries.filter(enq => {
    const matchesSearch = 
      enq.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enq.matter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enq.phone.includes(searchQuery);

    const matchesStatus = 
      statusFilter === 'ALL' || 
      enq.status === statusFilter ||
      (statusFilter === 'CONSULTATION_BOOKED' && enq.status === 'CONSULTATION BOOKED');

    return matchesSearch && matchesStatus;
  });

  const getStatusPill = (status) => {
    switch (status) {
      case 'NEW':
        return <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">NEW</span>;
      case 'CONTACTED':
        return <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">CONTACTED</span>;
      case 'CONSULTATION_BOOKED':
      case 'CONSULTATION BOOKED':
        return <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">CONSULTATION BOOKED</span>;
      case 'CLOSED':
        return <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-bold">CLOSED</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">{status}</span>;
    }
  };

  const counts = {
    ALL: enquiries.length,
    NEW: enquiries.filter(e => e.status === 'NEW').length,
    CONTACTED: enquiries.filter(e => e.status === 'CONTACTED').length,
    CONSULTATION_BOOKED: enquiries.filter(e => e.status === 'CONSULTATION_BOOKED' || e.status === 'CONSULTATION BOOKED').length,
    CLOSED: enquiries.filter(e => e.status === 'CLOSED').length
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Header & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Client Enquiries & Legal Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage prospective client leads, legal notices, and consultation inquiries submitted through the website.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client, phone, or legal matter..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {[
              { id: 'ALL', label: 'All' },
              { id: 'NEW', label: 'New' },
              { id: 'CONTACTED', label: 'Contacted' },
              { id: 'CONSULTATION_BOOKED', label: 'Consultation Booked' },
              { id: 'CLOSED', label: 'Closed' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  statusFilter === tab.id
                    ? 'bg-[#0B192C] text-gold-300 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  statusFilter === tab.id ? 'bg-gold-500 text-navy-950' : 'bg-slate-200 text-slate-700'
                }`}>
                  {counts[tab.id] || 0}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Enquiries Grid / List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredEnquiries.map((enquiry) => (
          <div
            key={enquiry.id}
            className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
              enquiry.status === 'NEW' ? 'border-l-4 border-l-blue-500 border-slate-200' : 'border-slate-200'
            }`}
          >
            {/* Left: Client & Matter Details */}
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-base font-serif font-bold text-slate-900">
                  {enquiry.clientName}
                </h3>
                {getStatusPill(enquiry.status)}
                <span className="text-xs text-slate-400 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{enquiry.date}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                <span className="font-semibold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded-md border border-gold-200">
                  {enquiry.matter}
                </span>
                <a href={`tel:${enquiry.phone}`} className="flex items-center space-x-1 text-slate-700 hover:text-gold-600 font-medium">
                  <Phone className="w-3 h-3 text-slate-400" />
                  <span>{enquiry.phone}</span>
                </a>
                <a href={`mailto:${enquiry.email}`} className="flex items-center space-x-1 text-slate-700 hover:text-gold-600 font-medium">
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>{enquiry.email}</span>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                "{enquiry.message}"
              </p>
            </div>

            {/* Right: Quick Action Controls */}
            <div className="flex flex-wrap lg:flex-col items-end gap-2 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100">
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setActiveEnquiry(enquiry);
                    setContactModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Contact Client</span>
                </button>

                <button
                  onClick={() => setActiveEnquiry(enquiry)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
                >
                  View Details
                </button>
              </div>

              {/* Status Switcher Dropdown */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-[11px] text-slate-400 font-medium">Set Status:</span>
                <select
                  value={enquiry.status}
                  onChange={(e) => onUpdateEnquiryStatus(enquiry.id, e.target.value)}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-semibold focus:outline-none focus:border-gold-500"
                >
                  <option value="NEW">NEW</option>
                  <option value="CONTACTED">CONTACTED</option>
                  <option value="CONSULTATION_BOOKED">BOOKED</option>
                  <option value="CLOSED">CLOSED</option>
                </select>
              </div>

            </div>
          </div>
        ))}

        {filteredEnquiries.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-sm">
            No client enquiries found matching your search and filter criteria.
          </div>
        )}
      </div>

      {/* 4. ENQUIRY DETAIL MODAL / SLIDE-OVER */}
      {activeEnquiry && !contactModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => {
            setActiveEnquiry(null);
            if (onClearSelectedEnquiry) onClearSelectedEnquiry();
          }}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 text-left space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-gold-600 tracking-wider">
                  {activeEnquiry.id}
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  {activeEnquiry.clientName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Legal Enquiry Submitted: {activeEnquiry.date}
                </p>
              </div>
              
              <button 
                onClick={() => setActiveEnquiry(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Matter Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Practice Domain</span>
                <span className="font-bold text-slate-800">{activeEnquiry.practiceArea}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Legal Matter</span>
                <span className="font-bold text-gold-700">{activeEnquiry.matter}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Court Forum</span>
                <span className="font-bold text-slate-800">{activeEnquiry.court || 'Delhi High Court'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Phone Number</span>
                <a href={`tel:${activeEnquiry.phone}`} className="font-bold text-slate-800 hover:text-gold-600">
                  {activeEnquiry.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Email Address</span>
                <a href={`mailto:${activeEnquiry.email}`} className="font-bold text-slate-800 hover:text-gold-600 truncate block">
                  {activeEnquiry.email}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Current Status</span>
                {getStatusPill(activeEnquiry.status)}
              </div>
            </div>

            {/* Message Body */}
            <div>
              <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-slate-600 mb-2">
                Client Statement / Facts of Matter
              </h4>
              <div className="p-4 rounded-xl bg-slate-100 text-slate-800 text-sm leading-relaxed border border-slate-200/60">
                {activeEnquiry.message}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    onUpdateEnquiryStatus(activeEnquiry.id, 'CONTACTED');
                    setActiveEnquiry({ ...activeEnquiry, status: 'CONTACTED' });
                  }}
                  className="px-3.5 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-300 text-xs font-bold hover:bg-amber-100 transition-colors"
                >
                  Mark as Contacted
                </button>

                <button
                  onClick={() => {
                    onConvertEnquiryToAppointment(activeEnquiry);
                    setActiveEnquiry(null);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-sm hover:scale-105 transition-all flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onUpdateEnquiryStatus(activeEnquiry.id, 'CLOSED');
                  setActiveEnquiry({ ...activeEnquiry, status: 'CLOSED' });
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-bold transition-colors"
              >
                Close Enquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. CONTACT CLIENT MODAL (WhatsApp / Call) */}
      {contactModalOpen && activeEnquiry && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setContactModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 p-6 text-left space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-slate-900 text-lg">
                Contact {activeEnquiry.clientName}
              </h3>
              <button 
                onClick={() => setContactModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Initiate direct counsel contact regarding: <strong className="text-slate-800">{activeEnquiry.matter}</strong>
            </p>

            <div className="space-y-3">
              {/* WhatsApp Trigger */}
              <a
                href={`https://wa.me/${activeEnquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hello ${activeEnquiry.clientName}, this is the Chambers of Adv. Adarsh Kumar Hans regarding your inquiry for ${activeEnquiry.matter}. How may we assist you?`
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => onUpdateEnquiryStatus(activeEnquiry.id, 'CONTACTED')}
                className="w-full p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>

              {/* Call Trigger */}
              <a
                href={`tel:${activeEnquiry.phone}`}
                onClick={() => onUpdateEnquiryStatus(activeEnquiry.id, 'CONTACTED')}
                className="w-full p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {activeEnquiry.phone}</span>
              </a>

              {/* Email Trigger */}
              <a
                href={`mailto:${activeEnquiry.email}?subject=Chamber Consultation Inquiry: ${activeEnquiry.matter}`}
                onClick={() => onUpdateEnquiryStatus(activeEnquiry.id, 'CONTACTED')}
                className="w-full p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center space-x-2 border border-slate-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Send Email ({activeEnquiry.email})</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
