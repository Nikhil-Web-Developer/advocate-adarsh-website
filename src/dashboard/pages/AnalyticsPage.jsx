import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MessageSquare, 
  Calendar, 
  Percent, 
  Search, 
  Globe, 
  Landmark, 
  Share2, 
  ArrowUpRight 
} from 'lucide-react';
import { ADVOCATE_DATA } from '../../data/advocateData';

export default function AnalyticsPage() {
  const analytics = {
    totalVisitors: "1,245",
    profileViews: "3,420",
    contactEnquiries: "68",
    consultationRequests: "42",
    conversionRate: "3.4%",
    monthlyVisitors: [
      { month: "Jan", visitors: 820, enquiries: 18 },
      { month: "Feb", visitors: 940, enquiries: 22 },
      { month: "Mar", visitors: 1050, enquiries: 26 },
      { month: "Apr", visitors: 980, enquiries: 20 },
      { month: "May", visitors: 1120, enquiries: 28 },
      { month: "Jun", visitors: 1190, enquiries: 31 },
      { month: "Jul", visitors: 1210, enquiries: 29 },
      { month: "Aug", visitors: 1245, enquiries: 34 }
    ],
    practiceDemand: [
      { name: "Civil & Commercial", percentage: 32, count: "380 Matters" },
      { name: "Property & Real Estate", percentage: 26, count: "290 Matters" },
      { name: "Criminal Defense", percentage: 22, count: "320 Matters" },
      { name: "Family & Matrimonial", percentage: 12, count: "210 Matters" },
      { name: "Corporate & NCLT", percentage: 8, count: "110 Matters" }
    ],
    trafficSources: [
      { source: "Google Organic Search", visitors: 722, share: 58, icon: Search },
      { source: "Direct Website Navigation", visitors: 274, share: 22, icon: Globe },
      { source: "High Court Bar Directory", visitors: 149, share: 12, icon: Landmark },
      { source: "Client Referrals & LinkedIn", visitors: 100, share: 8, icon: Share2 }
    ]
  };

  const maxVisitors = Math.max(...analytics.monthlyVisitors.map(m => m.visitors));

  return (
    <div className="space-y-8 text-left">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-slate-900">
          Chamber Practice Analytics & Portal Insights
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Real-time metrics on website visitor traffic, prospective client enquiries, and practice vertical demand.
        </p>
      </div>

      {/* 5 KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-serif font-bold uppercase tracking-wider text-slate-500 block">
            Website Visitors
          </span>
          <div className="text-2xl font-serif font-extrabold text-slate-900 mt-2">
            {analytics.totalVisitors}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" /> +18% MoM
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-serif font-bold uppercase tracking-wider text-slate-500 block">
            Profile Views
          </span>
          <div className="text-2xl font-serif font-extrabold text-slate-900 mt-2">
            {analytics.profileViews}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" /> +24% MoM
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-serif font-bold uppercase tracking-wider text-slate-500 block">
            Contact Enquiries
          </span>
          <div className="text-2xl font-serif font-extrabold text-slate-900 mt-2">
            {analytics.contactEnquiries}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Total Leads Logged
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-serif font-bold uppercase tracking-wider text-slate-500 block">
            Consultation Requests
          </span>
          <div className="text-2xl font-serif font-extrabold text-slate-900 mt-2">
            {analytics.consultationRequests}
          </div>
          <span className="text-[11px] text-gold-700 font-semibold mt-1 block">
            32 Confirmed
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
          <span className="text-[11px] font-serif font-bold uppercase tracking-wider text-slate-500 block">
            Conversion Rate
          </span>
          <div className="text-2xl font-serif font-extrabold text-emerald-700 mt-2">
            {analytics.conversionRate}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Visitor to Consultation
          </span>
        </div>
      </div>

      {/* 2 MAIN CHARTS: Visitors & Monthly Enquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Visitors Chart (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Website Visitors Over Time
                </h3>
                <p className="text-xs text-slate-500">
                  Monthly unique audience looking for advocate representation
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                Active Growth
              </span>
            </div>

            {/* Custom Bar Graph */}
            <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2">
              {analytics.monthlyVisitors.map((item, idx) => {
                const heightPercent = Math.round((item.visitors / maxVisitors) * 100);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <span className="text-[10px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.visitors}
                    </span>
                    <div className="w-full bg-slate-100 rounded-t-lg h-36 flex items-end overflow-hidden">
                      <div 
                        className="w-full bg-gradient-to-t from-[#0B192C] to-gold-500 rounded-t-lg transition-all duration-500 group-hover:brightness-110"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-500">
            <span>Peak Month: August (1,245 visitors)</span>
            <span className="font-bold text-slate-700">Average: 1,069 / mo</span>
          </div>
        </div>

        {/* Traffic Sources (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="pb-4 border-b border-slate-100 mb-5">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Traffic Acquisition Channels
              </h3>
              <p className="text-xs text-slate-500">
                How clients discover the Chambers of Adv. Adarsh
              </p>
            </div>

            <div className="space-y-4">
              {analytics.trafficSources.map((item, idx) => {
                const IconC = item.icon;
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <IconC className="w-4 h-4 text-gold-600" />
                        <span className="font-bold text-slate-800">{item.source}</span>
                      </div>
                      <span className="font-mono text-slate-600 font-semibold">{item.share}% ({item.visitors})</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gold-500 h-full rounded-full" 
                        style={{ width: `${item.share}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-6 text-xs text-slate-600">
            <p>
              💡 <strong>SEO Insight</strong>: Organic search accounts for 58% of incoming clients, primarily searching for Supreme Court & High Court civil/criminal counsel.
            </p>
          </div>
        </div>

      </div>

      {/* Practice Demand Breakdown */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="pb-4 border-b border-slate-100 mb-5">
          <h3 className="font-serif text-lg font-bold text-slate-900">
            Practice Vertical Inquiry Distribution
          </h3>
          <p className="text-xs text-slate-500">
            Volume of prospective client inquiries categorized by statutory field
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {analytics.practiceDemand.map((pd, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-800 block truncate">
                {pd.name}
              </span>
              <div className="text-2xl font-serif font-extrabold text-slate-900 mt-1">
                {pd.percentage}%
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className="bg-gold-500 h-full rounded-full"
                  style={{ width: `${pd.percentage}%` }}
                />
              </div>
              <span className="text-[11px] text-slate-500 mt-1.5 block">
                {pd.count}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
