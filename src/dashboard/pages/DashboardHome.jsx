import React, { useState } from 'react';
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  MapPin, 
  Video, 
  Plus, 
  ChevronRight, 
  FileText, 
  ExternalLink,
  Filter,
  Eye,
  AlertCircle
} from 'lucide-react';

export default function DashboardHome({ 
  stats, 
  enquiries, 
  appointments, 
  analytics, 
  onNavigateTab, 
  onViewEnquiry,
  onOpenNewAppointment 
}) {
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'NEW':
        return <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold">NEW</span>;
      case 'CONTACTED':
        return <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold">CONTACTED</span>;
      case 'CONSULTATION_BOOKED':
      case 'CONSULTATION BOOKED':
        return <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">BOOKED</span>;
      case 'CLOSED':
        return <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-bold">CLOSED</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">{status}</span>;
    }
  };

  return (
    <div className="space-y-8 text-left">
      
      {/* 1. FOUR STATISTIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: New Enquiries */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-slate-500">
              New Enquiries
            </span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-extrabold text-slate-900 mt-3">
            24
          </div>
          <div className="flex items-center space-x-1 text-xs font-semibold text-emerald-600 mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+12% this month</span>
          </div>
        </div>

        {/* Card 2: Pending Appointments */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-slate-500">
              Pending Appointments
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-extrabold text-slate-900 mt-3">
            08
          </div>
          <div className="text-xs font-medium text-slate-500 mt-2 flex items-center space-x-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Requires counsel review</span>
          </div>
        </div>

        {/* Card 3: Total Website Visitors */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-slate-500">
              Total Website Visitors
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-extrabold text-slate-900 mt-3">
            1,245
          </div>
          <div className="flex items-center space-x-1 text-xs font-semibold text-emerald-600 mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+18% this month</span>
          </div>
        </div>

        {/* Card 4: Confirmed Consultations */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-slate-500">
              Confirmed Consultations
            </span>
            <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-extrabold text-slate-900 mt-3">
            32
          </div>
          <div className="text-xs font-medium text-slate-500 mt-2">
            Active Scheduled Matters
          </div>
        </div>

      </div>

      {/* Quick Actions Ribbon */}
      <div className="bg-gradient-to-r from-[#0B192C] to-[#152943] p-5 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-gold-500/30">
        <div className="flex items-center space-x-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-white">
              Chamber Schedule & Quick Dispatch
            </h4>
            <p className="text-xs text-slate-300">
              Schedule urgent bail meetings, court appearances, or client consultations.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onOpenNewAppointment()}
            className="px-4 py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-gold-sm hover:scale-105 transition-all flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Appointment</span>
          </button>
          <button
            onClick={() => onNavigateTab('practices')}
            className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold border border-slate-600 transition-colors"
          >
            Manage Practice Areas
          </button>
        </div>
      </div>

      {/* 2. RECENT ENQUIRIES & UPCOMING SCHEDULE (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col (7 cols): Recent Client Enquiries Table */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Recent Client Enquiries
                </h3>
                <p className="text-xs text-slate-500">
                  Prospective clients and legal matters received through website portal
                </p>
              </div>
              
              <button
                onClick={() => onNavigateTab('enquiries')}
                className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center space-x-1"
              >
                <span>View All</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-slate-400 uppercase tracking-wider font-serif border-b border-slate-100">
                    <th className="pb-3 font-semibold">Client Name</th>
                    <th className="pb-3 font-semibold">Legal Matter</th>
                    <th className="pb-3 font-semibold">Date</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {enquiries.slice(0, 5).map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50/70 transition-colors group">
                      <td className="py-3.5 pr-2">
                        <div className="font-bold text-slate-900 group-hover:text-gold-700 transition-colors">
                          {enq.clientName}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate max-w-[140px]">
                          {enq.phone}
                        </div>
                      </td>
                      <td className="py-3.5 pr-2">
                        <span className="font-medium text-slate-700">
                          {enq.matter}
                        </span>
                      </td>
                      <td className="py-3.5 text-slate-500 whitespace-nowrap">
                        {enq.date.split(',')[0]}
                      </td>
                      <td className="py-3.5">
                        {getStatusBadge(enq.status)}
                      </td>
                      <td className="py-3.5 text-right">
                        <button
                          onClick={() => onViewEnquiry(enq)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-gold-50 hover:text-gold-800 text-slate-700 text-[11px] font-bold border border-slate-200 transition-colors"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4 text-center">
            <button
              onClick={() => onNavigateTab('enquiries')}
              className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
            >
              View All Enquiries ({enquiries.length})
            </button>
          </div>
        </div>

        {/* Right Col (5 cols): Upcoming Appointments */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Upcoming Appointments
                </h3>
                <p className="text-xs text-slate-500">
                  Court chambers & secure video consultations
                </p>
              </div>

              <button
                onClick={() => onNavigateTab('appointments')}
                className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center space-x-1"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Calendar</span>
              </button>
            </div>

            {/* List */}
            <div className="space-y-3">
              {appointments.slice(0, 4).map((apt) => (
                <div 
                  key={apt.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-gold-400 hover:bg-gold-50/20 transition-all text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-gold-700 flex items-center space-x-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{apt.time}</span>
                      <span className="text-slate-400">({apt.dateGroup})</span>
                    </span>
                    
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center space-x-1 ${
                      apt.type === 'in-person' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {apt.type === 'in-person' ? (
                        <>
                          <MapPin className="w-3 h-3" />
                          <span>In-Person</span>
                        </>
                      ) : (
                        <>
                          <Video className="w-3 h-3" />
                          <span>Online Call</span>
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900">
                    {apt.clientName}
                  </h4>
                  <p className="text-[11px] text-slate-600 truncate mt-0.5">
                    {apt.matter}
                  </p>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50 text-[11px] text-slate-400">
                    <span className="truncate max-w-[170px]">{apt.venue}</span>
                    <button
                      onClick={() => onNavigateTab('appointments')}
                      className="text-gold-600 hover:underline font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4">
            <button
              onClick={() => onNavigateTab('appointments')}
              className="w-full py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-sm hover:scale-[1.01] transition-transform"
            >
              View Full Appointment Calendar
            </button>
          </div>
        </div>

      </div>

      {/* 3. PRACTICE AREA DISTRIBUTION */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Practice Area Workload & Inquiry Demand
            </h3>
            <p className="text-xs text-slate-500">
              Active litigation representation distribution across key legal specializations
            </p>
          </div>
          <button 
            onClick={() => onNavigateTab('analytics')}
            className="text-xs font-bold text-gold-600 hover:underline"
          >
            Detailed Analytics
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {analytics.practiceDemand.map((pd, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-700 truncate">
                {pd.name}
              </div>
              <div className="text-xl font-serif font-extrabold text-slate-900 mt-1">
                {pd.percentage}%
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className="bg-gold-500 h-full rounded-full" 
                  style={{ width: `${pd.percentage}%` }}
                />
              </div>
              <div className="text-[10px] text-slate-400 mt-1.5 font-medium">
                {pd.count}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
