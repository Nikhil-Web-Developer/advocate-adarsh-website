import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRibbon from './components/StatsRibbon';
import AboutSection from './components/AboutSection';
import PracticeAreas from './components/PracticeAreas';
import PracticeModal from './components/PracticeModal';
import ExperienceTimeline from './components/ExperienceTimeline';
import CourtsSection from './components/CourtsSection';
import Achievements from './components/Achievements';
import CaseCategories from './components/CaseCategories';
import Testimonials from './components/Testimonials';
import ConsultationBooking from './components/ConsultationBooking';
import BookingModal from './components/BookingModal';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import DisclaimerModal from './components/DisclaimerModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AdminDashboard from './dashboard/AdminDashboard';
import { Calendar, Scale, ShieldCheck, Lock, ExternalLink } from 'lucide-react';

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState(null);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPractice, setBookingPractice] = useState('');
  const [toast, setToast] = useState(null);

  // Check URL hash for direct #admin route
  useEffect(() => {
    if (window.location.hash === '#admin') {
      setIsAdminMode(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setIsAdminMode(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenPracticeModal = (practice) => {
    setSelectedPractice(practice);
    setIsPracticeModalOpen(true);
  };

  const handleClosePracticeModal = () => {
    setIsPracticeModalOpen(false);
  };

  const handleOpenBookingModal = (practiceTitle = '') => {
    setBookingPractice(practiceTitle);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleBookingSuccess = (bookingData) => {
    setToast({
      type: 'success',
      title: 'Consultation Logged',
      message: `Appointment request ${bookingData.refId} successfully submitted.`
    });
  };

  // If Advocate Admin Dashboard Mode is Active:
  if (isAdminMode) {
    return (
      <div className="min-h-screen bg-slate-50">
        <AdminDashboard
          onExitToWebsite={() => {
            setIsAdminMode(false);
            window.location.hash = '';
          }}
          onShowToast={setToast}
        />
        <Toast toast={toast} onClose={() => setToast(null)} />
      </div>
    );
  }

  // Public Website View
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-950 relative">
      
      {/* Statutory Disclaimer Dialog */}
      <DisclaimerModal />

      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBookingModal()} 
        onOpenAdmin={() => {
          setIsAdminMode(true);
          window.location.hash = 'admin';
        }}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBookingModal()} />

        {/* 2. Key Metrics Ribbon */}
        <StatsRibbon />

        {/* 3. About Advocate & Core Pillars */}
        <AboutSection onOpenBooking={() => handleOpenBookingModal()} />

        {/* 4. Practice Areas Grid & Search */}
        <PracticeAreas 
          onSelectPractice={handleOpenPracticeModal}
          onOpenBooking={() => handleOpenBookingModal()} 
        />

        {/* 5. Career & Experience Timeline */}
        <ExperienceTimeline />

        {/* 6. Courts & Judicial Forums */}
        <CourtsSection />

        {/* 7. Achievements, Publications & ADR */}
        <Achievements />

        {/* 8. Categorized Case Insights */}
        <CaseCategories />

        {/* 9. Verified Client Testimonials */}
        <Testimonials />

        {/* 10. Embedded Consultation Booking Section */}
        <section id="book-consultation" className="py-24 bg-navy-900/60 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>Appointment Scheduling</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                Schedule a <span className="text-gold-gradient">Legal Consultation</span>
              </h2>
              <div className="gold-divider w-24 mx-auto my-4" />
              <p className="text-slate-300 text-base">
                Choose your convenient consultation format (In-Person Delhi Chamber or High-Definition Encrypted Video Conference).
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-gold-500/30 shadow-2xl">
              <ConsultationBooking 
                initialPractice={bookingPractice} 
                onBookingSuccess={handleBookingSuccess} 
              />
            </div>
          </div>
        </section>

        {/* 11. Chambers Location & Contact Inquiry */}
        <ContactSection onBookingRequest={() => handleOpenBookingModal()} />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBookingModal()}
        onSelectPractice={handleOpenPracticeModal}
        onOpenAdmin={() => {
          setIsAdminMode(true);
          window.location.hash = 'admin';
        }}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={() => handleOpenBookingModal()} />

      {/* Practice Scope Modal */}
      <PracticeModal
        practice={selectedPractice}
        isOpen={isPracticeModalOpen}
        onClose={handleClosePracticeModal}
        onBookWithPractice={(title) => handleOpenBookingModal(title)}
      />

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        initialPractice={bookingPractice}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
