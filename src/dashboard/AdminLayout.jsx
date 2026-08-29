import React, { useState } from 'react';
import {
  Scale,
  LayoutDashboard,
  MessageSquare,
  Calendar,
  FileEdit,
  Briefcase,
  Clock,
  Award,
  Star,
  User,
  TrendingUp,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  Globe,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'enquiries', label: 'Client Enquiries', icon: MessageSquare, badge: 24 },
  { id: 'appointments', label: 'Appointments', icon: Calendar, badge: 8 },
  { id: 'content', label: 'Website Content', icon: FileEdit },
  { id: 'practices', label: 'Practice Areas', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: Clock },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'testimonials', label: 'Testimonials', icon: Star },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({
  currentTab,
  setCurrentTab,
  onExitToWebsite,
  notifications,
  onMarkNotificationRead,
  children
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNavSelect = (tabId) => {
    setCurrentTab(tabId);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row text-slate-800 antialiased font-sans">

      {/* 1. LEFT SIDEBAR (Desktop & Mobile Drawer) */}

      {/* Mobile Backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 bottom-0 left-0 z-50
        w-72 bg-[#0B192C] text-slate-300 flex flex-col justify-between
        border-r border-[#152943] shadow-2xl transition-transform duration-300 ease-in-out
        ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>

        {/* Top: Brand Header */}
        <div>
          <div className="p-6 border-b border-[#152943] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#152943] border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-gold-sm">
                <Scale className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif text-lg font-bold text-white tracking-wide">AdvocatePro</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-300 font-bold border border-gold-500/30">
                    SaaS
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Private Chambers Suite
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Advocate Mini Profile in Sidebar */}
          <div className="px-6 py-4 bg-[#070F1C]/70 border-b border-[#152943]/60 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-gold-500/50 overflow-hidden flex-shrink-0 bg-navy-800">
              <img
                src="/assets/images/Advocate.jpeg"
                alt="Adv. Adarsh Kumar Hans"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200";
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white truncate">
                Adv. Adarsh Kumar Hans
              </h4>
              <p className="text-[11px] text-gold-400 truncate">
                Supreme Court & High Court
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-280px)]">
            <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Chamber Management
            </div>
            {NAV_ITEMS.map((item) => {
              const IconComp = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavSelect(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${isActive
                    ? 'bg-gradient-to-r from-gold-500/20 to-gold-500/5 text-gold-300 border border-gold-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-[#152943]/60'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComp className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isActive
                      ? 'bg-gold-400 text-navy-950'
                      : 'bg-navy-800 text-slate-300 border border-slate-700'
                      }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar: Actions */}
        <div className="p-4 border-t border-[#152943] bg-[#070F1C]/90 space-y-2">
          <button
            onClick={onExitToWebsite}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#152943] hover:bg-[#1E3A5F] text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <Globe className="w-4 h-4 text-gold-400" />
              <span>Public Website</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button
            onClick={onExitToWebsite}
            className="w-full flex items-center space-x-2.5 px-3.5 py-2 rounded-xl text-rose-400 hover:bg-rose-950/40 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Exit Dashboard</span>
          </button>
        </div>

      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">

        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm">

          {/* Left: Mobile Toggle & Page Greeting */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                  Good Morning, Adv. Adarsh Kumar Hans 👋
                </h1>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Here is an overview of your professional activity, enquiries, and court calendar.
              </p>
            </div>
          </div>

          {/* Right: Quick Search, Notifications, Avatar */}
          <div className="flex items-center space-x-3 sm:space-x-4">

            {/* Live Mode Badge */}
            <div className="hidden md:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Chambers Live</span>
            </div>

            {/* Notification Bell with Panel */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown Panel */}
              {notificationsOpen && (
                <div
                  className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <div className="font-serif font-bold text-sm text-slate-900">
                      Notifications ({unreadCount} New)
                    </div>
                    <span className="text-[11px] text-gold-600 font-semibold cursor-pointer hover:underline">
                      Mark all read
                    </span>
                  </div>

                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        onClick={() => {
                          onMarkNotificationRead(notif.id);
                          if (notif.linkTab) setCurrentTab(notif.linkTab);
                          setNotificationsOpen(false);
                        }}
                        className={`p-3.5 hover:bg-slate-50 cursor-pointer transition-colors text-left flex items-start space-x-3 ${!notif.read ? 'bg-amber-50/40' : ''
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${notif.type === 'enquiry' ? 'bg-blue-100 text-blue-700' :
                          notif.type === 'appointment' ? 'bg-amber-100 text-amber-700' :
                            notif.type === 'testimonial' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
                          }`}>
                          <Bell className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">
                            {notif.title}
                          </div>
                          <p className="text-xs text-slate-600 leading-snug mt-0.5 line-clamp-2">
                            {notif.message}
                          </p>
                          <span className="text-[10px] text-slate-400 font-medium mt-1 block">
                            {notif.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 pt-2 border-t border-slate-100 text-center">
                    <button
                      onClick={() => { setCurrentTab('enquiries'); setNotificationsOpen(false); }}
                      className="text-xs text-slate-600 hover:text-gold-600 font-semibold"
                    >
                      View All Activity
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Advocate Avatar Menu */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center space-x-2.5 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <div className="w-9 h-9 rounded-full border-2 border-gold-500 overflow-hidden bg-slate-200">
                  <img
                    src="public/assets/images/Advocate.jpeg"
                    alt="Adv. Adarsh"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-xs font-bold text-slate-900 leading-none">
                    Adv. Adarsh
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                    Managing Counsel
                  </div>
                </div>
              </button>

              {userDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-left animate-in fade-in zoom-in-95 duration-150"
                  onClick={() => setUserDropdownOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">Adv. Adarsh Kumar Hans</p>
                    <p className="text-[11px] text-slate-500">chamber@advocateadarsh.com</p>
                  </div>
                  <button
                    onClick={() => setCurrentTab('profile')}
                    className="w-full px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span>My Profile</span>
                  </button>
                  <button
                    onClick={() => setCurrentTab('settings')}
                    className="w-full px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-500" />
                    <span>Chamber Settings</span>
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button
                    onClick={onExitToWebsite}
                    className="w-full px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center space-x-2"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Exit Dashboard</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </header>

        {/* Content Body Container */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
