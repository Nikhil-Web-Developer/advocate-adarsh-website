/**
 * AdvocatePro - Private Dashboard Data Store
 * Chambers of Adv. Adarsh Kumar Hans
 */

export const INITIAL_DASHBOARD_DATA = {
  stats: {
    newEnquiries: { count: 24, change: "+12% this month", trend: "up" },
    pendingAppointments: { count: 8, label: "Requires Confirmation" },
    totalVisitors: { count: "1,245", change: "+18% this month", trend: "up" },
    confirmedConsultations: { count: 32, label: "Active Matters" }
  },

  enquiries: [
    {
      id: "ENQ-101",
      clientName: "Rahul Sharma",
      phone: "+91 98101 23456",
      email: "rahul.sharma@example.com",
      matter: "Property Dispute",
      practiceArea: "Property & Real Estate Law",
      message: "Urgent dispute regarding ancestral property partition in South Delhi. Default notice received from co-sharers. Need urgent stay advice.",
      date: "Today, 09:30 AM",
      rawDate: "2026-08-29",
      status: "NEW", // NEW | CONTACTED | CONSULTATION_BOOKED | CLOSED
      priority: "High",
      court: "High Court of Delhi"
    },
    {
      id: "ENQ-102",
      clientName: "Priya Singh",
      phone: "+91 98712 34567",
      email: "priya.singh@corporate.in",
      matter: "Family Matter",
      practiceArea: "Family & Matrimonial Law",
      message: "Looking for legal counsel on mutual consent divorce proceedings and child custody agreement terms without acrimony.",
      date: "Yesterday, 04:15 PM",
      rawDate: "2026-08-28",
      status: "CONTACTED",
      priority: "Medium",
      court: "Saket Family Court"
    },
    {
      id: "ENQ-103",
      clientName: "Amit Kumar",
      phone: "+91 98188 98765",
      email: "amit.k@enterprises.com",
      matter: "Criminal Defense & Bail",
      practiceArea: "Criminal Law & Defense",
      message: "Anticipatory bail application needed in an economic offense inquiry under Section 420 IPC / BNS. Need immediate case review.",
      date: "Yesterday, 02:00 PM",
      rawDate: "2026-08-28",
      status: "NEW",
      priority: "Urgent",
      court: "Delhi High Court"
    },
    {
      id: "ENQ-104",
      clientName: "Vikram Malhotra",
      phone: "+91 99100 54321",
      email: "vikram.m@realtech.in",
      matter: "Commercial Contract Recovery",
      practiceArea: "Civil Law & Commercial Litigation",
      message: "Recovery suit under Order 37 CPC against defaulting vendor for unpaid dues of ₹42 Lakhs with arbitration clause.",
      date: "27 Aug 2026",
      rawDate: "2026-08-27",
      status: "CONSULTATION_BOOKED",
      priority: "High",
      court: "Commercial Court, Tis Hazari"
    },
    {
      id: "ENQ-105",
      clientName: "Meenakshi Gupta",
      phone: "+91 98111 87654",
      email: "meenakshi.g@gmail.com",
      matter: "RERA Delay Compensation",
      practiceArea: "Property & Real Estate Law",
      message: "Builder delayed possession of luxury apartment by 3 years. Seeking refund with statutory interest under Delhi RERA.",
      date: "26 Aug 2026",
      rawDate: "2026-08-26",
      status: "CONTACTED",
      priority: "Medium",
      court: "Delhi RERA Authority"
    },
    {
      id: "ENQ-106",
      clientName: "Kunal Patel",
      phone: "+91 98200 11223",
      email: "kunal@fintechpay.com",
      matter: "Cyber Compliance & Data Theft",
      practiceArea: "Cyber Law & Digital Compliance",
      message: "Ex-employee compromised proprietary database. Need immediate Section 66 IT Act complaint & injunction suit.",
      date: "25 Aug 2026",
      rawDate: "2026-08-25",
      status: "CONSULTATION_BOOKED",
      priority: "High",
      court: "Cyber Cell & High Court"
    },
    {
      id: "ENQ-107",
      clientName: "Sneha Roy",
      phone: "+91 98300 44556",
      email: "sneha.roy@mediahub.com",
      matter: "Consumer Insurance Claim",
      practiceArea: "Consumer Protection Law",
      message: "Health insurance claim of ₹8.5 Lakhs repudiated on arbitrary grounds. Want to file petition before SCDRC.",
      date: "24 Aug 2026",
      rawDate: "2026-08-24",
      status: "CLOSED",
      priority: "Low",
      court: "State Consumer Commission"
    },
    {
      id: "ENQ-108",
      clientName: "Deepak Verma",
      phone: "+91 98109 99887",
      email: "deepak.v@logistics.com",
      matter: "NCLT Section 9 Insolvency",
      practiceArea: "Corporate & Business Advisory",
      message: "Demand notice issued under Section 8 IBC. Ready to file Section 9 operational creditor petition before NCLT New Delhi.",
      date: "23 Aug 2026",
      rawDate: "2026-08-23",
      status: "CLOSED",
      priority: "High",
      court: "NCLT Principal Bench"
    }
  ],

  appointments: [
    {
      id: "APT-201",
      clientName: "Rahul Sharma",
      phone: "+91 98101 23456",
      email: "rahul.sharma@example.com",
      matter: "Property Consultation",
      practiceArea: "Property & Real Estate Law",
      type: "in-person", // in-person | online
      venue: "Chamber No. 342, High Court of Delhi",
      dateGroup: "Today",
      date: "2026-08-29",
      time: "10:00 AM",
      status: "Confirmed", // Pending | Confirmed | Completed | Cancelled
      notes: "Carry original title deeds and family genealogy chart."
    },
    {
      id: "APT-202",
      clientName: "Priya Singh",
      phone: "+91 98712 34567",
      email: "priya.singh@corporate.in",
      matter: "Family Matter - Mutual Consent",
      practiceArea: "Family & Matrimonial Law",
      type: "online",
      venue: "Google Meet / Zoom Encrypted Link",
      dateGroup: "Today",
      date: "2026-08-29",
      time: "02:00 PM",
      status: "Confirmed",
      notes: "Review first motion settlement terms draft."
    },
    {
      id: "APT-203",
      clientName: "Amit Kumar",
      phone: "+91 98188 98765",
      email: "amit.k@enterprises.com",
      matter: "Criminal Bail Hearing Prep",
      practiceArea: "Criminal Law & Defense",
      type: "in-person",
      venue: "Connaught Place Office, Suite 408",
      dateGroup: "Tomorrow",
      date: "2026-08-30",
      time: "11:30 AM",
      status: "Pending",
      notes: "Case diary and notice copy to be inspected."
    },
    {
      id: "APT-204",
      clientName: "Vikram Malhotra",
      phone: "+91 99100 54321",
      email: "vikram.m@realtech.in",
      matter: "Commercial Order 37 Recovery",
      practiceArea: "Civil Law & Commercial Litigation",
      type: "online",
      venue: "Google Meet Link",
      dateGroup: "Tomorrow",
      date: "2026-08-30",
      time: "04:30 PM",
      status: "Confirmed",
      notes: "Invoices, ledger confirmation, and legal notice reply analysis."
    },
    {
      id: "APT-205",
      clientName: "Kunal Patel",
      phone: "+91 98200 11223",
      email: "kunal@fintechpay.com",
      matter: "Cyber Fraud & Evidence Briefing",
      practiceArea: "Cyber Law & Digital Compliance",
      type: "in-person",
      venue: "Chamber No. 342, High Court of Delhi",
      dateGroup: "This Week",
      date: "2026-09-01",
      time: "03:00 PM",
      status: "Pending",
      notes: "Forensic audit report and server logs inspection."
    },
    {
      id: "APT-206",
      clientName: "Sandeep & Meenakshi G.",
      phone: "+91 98111 22334",
      email: "sandeep.g@yahoo.com",
      matter: "Custody Protocol Finalization",
      practiceArea: "Family & Matrimonial Law",
      type: "in-person",
      venue: "Connaught Place Office, Suite 408",
      dateGroup: "This Week",
      date: "2026-09-02",
      time: "05:30 PM",
      status: "Completed",
      notes: "Signed memorandum of settlement."
    }
  ],

  notifications: [
    {
      id: "NOTIF-1",
      title: "New Client Enquiry",
      message: "Rahul Sharma submitted an enquiry regarding a Property Partition dispute in South Delhi.",
      time: "10 mins ago",
      type: "enquiry",
      read: false,
      linkTab: "enquiries"
    },
    {
      id: "NOTIF-2",
      title: "Consultation Request",
      message: "Amit Kumar requested an urgent Criminal Defense bail consultation for tomorrow 11:30 AM.",
      time: "1 hour ago",
      type: "appointment",
      read: false,
      linkTab: "appointments"
    },
    {
      id: "NOTIF-3",
      title: "New Client Review",
      message: "Vikram K. submitted a 5-star verified testimonial for RERA arbitration representation.",
      time: "Yesterday",
      type: "testimonial",
      read: true,
      linkTab: "testimonials"
    },
    {
      id: "NOTIF-4",
      title: "Bar Council Directory Sync",
      message: "Delhi High Court Bar Association advocate directory profile verified for 2026.",
      time: "2 days ago",
      type: "system",
      read: true,
      linkTab: "profile"
    }
  ],

  analytics: {
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
      { source: "Google Organic Search", visitors: 722, share: "58%", icon: "Search" },
      { source: "Direct Website Navigation", visitors: 274, share: "22%", icon: "Globe" },
      { source: "High Court Bar Directory", visitors: 149, share: "12%", icon: "Landmark" },
      { source: "Client Referrals & LinkedIn", visitors: 100, share: "8%", icon: "Share2" }
    ]
  },

  settings: {
    account: {
      advocateName: "Adv. Adarsh Kumar Hans",
      email: "chamber@advocateadarsh.com",
      phone: "+91 98108 45219",
      username: "adv_adarsh_hans"
    },
    notifications: {
      emailAlertsOnEnquiry: true,
      whatsappAlertsOnBooking: true,
      smsDailyAgenda: true,
      marketingNewsletter: false
    },
    calendar: {
      defaultSlotDuration: 45, // mins
      bufferBetweenAppointments: 15, // mins
      allowSameDayBooking: false,
      maxAdvanceBookingDays: 45
    },
    website: {
      bciDisclaimerEnabled: true,
      liveChatEnabled: true,
      publicReviewsVisible: true,
      emergencyPhoneVisible: true
    }
  }
};
