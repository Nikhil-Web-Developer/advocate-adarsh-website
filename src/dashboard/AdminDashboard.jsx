import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import DashboardHome from './pages/DashboardHome';
import EnquiriesPage from './pages/EnquiriesPage';
import AppointmentsPage from './pages/AppointmentsPage';
import WebsiteContentPage from './pages/WebsiteContentPage';
import PracticeAreasManager from './pages/PracticeAreasManager';
import ExperienceManager from './pages/ExperienceManager';
import AchievementsManager from './pages/AchievementsManager';
import TestimonialsManager from './pages/TestimonialsManager';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import { INITIAL_DASHBOARD_DATA } from '../data/dashboardData';

export default function AdminDashboard({ onExitToWebsite, onShowToast }) {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [enquiries, setEnquiries] = useState(INITIAL_DASHBOARD_DATA.enquiries);
  const [appointments, setAppointments] = useState(INITIAL_DASHBOARD_DATA.appointments);
  const [notifications, setNotifications] = useState(INITIAL_DASHBOARD_DATA.notifications);
  const [selectedEnquiryForDetail, setSelectedEnquiryForDetail] = useState(null);

  // Enquiry status updater
  const handleUpdateEnquiryStatus = (id, newStatus) => {
    const updated = enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e);
    setEnquiries(updated);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Enquiry Updated',
        message: `Status set to "${newStatus}"`
      });
    }
  };

  // Convert enquiry to appointment
  const handleConvertEnquiryToAppointment = (enquiry) => {
    const newApt = {
      id: `APT-${Math.floor(200 + Math.random() * 800)}`,
      clientName: enquiry.clientName,
      phone: enquiry.phone,
      email: enquiry.email,
      matter: enquiry.matter,
      practiceArea: enquiry.practiceArea,
      type: 'in-person',
      venue: 'Chamber No. 342, High Court of Delhi',
      dateGroup: 'Tomorrow',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '11:30 AM',
      status: 'Confirmed',
      notes: enquiry.message
    };

    setAppointments([newApt, ...appointments]);
    handleUpdateEnquiryStatus(enquiry.id, 'CONSULTATION_BOOKED');
    setCurrentTab('appointments');

    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Consultation Scheduled',
        message: `Appointment created for ${enquiry.clientName}`
      });
    }
  };

  // Add new appointment
  const handleAddAppointment = (newApt) => {
    setAppointments([newApt, ...appointments]);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Appointment Added',
        message: `Consultation logged for ${newApt.clientName}`
      });
    }
  };

  // Update appointment status
  const handleUpdateAppointmentStatus = (id, newStatus) => {
    const updated = appointments.map(a => a.id === id ? { ...a, status: newStatus } : a);
    setAppointments(updated);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Appointment Status',
        message: `Marked as ${newStatus}`
      });
    }
  };

  // Reschedule appointment
  const handleRescheduleAppointment = (id, newDate, newTime) => {
    const updated = appointments.map(a => a.id === id ? { ...a, date: newDate, time: newTime, status: 'Confirmed' } : a);
    setAppointments(updated);
    if (onShowToast) {
      onShowToast({
        type: 'info',
        title: 'Appointment Rescheduled',
        message: `Updated to ${newDate} at ${newTime}`
      });
    }
  };

  // Mark notification as read
  const handleMarkNotificationRead = (notifId) => {
    setNotifications(notifications.map(n => n.id === notifId ? { ...n, read: true } : n));
  };

  // View enquiry from home
  const handleViewEnquiryFromHome = (enquiry) => {
    setSelectedEnquiryForDetail(enquiry);
    setCurrentTab('enquiries');
  };

  return (
    <AdminLayout
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      onExitToWebsite={onExitToWebsite}
      notifications={notifications}
      onMarkNotificationRead={handleMarkNotificationRead}
    >
      {currentTab === 'dashboard' && (
        <DashboardHome
          stats={INITIAL_DASHBOARD_DATA.stats}
          enquiries={enquiries}
          appointments={appointments}
          analytics={INITIAL_DASHBOARD_DATA.analytics}
          onNavigateTab={(tab) => setCurrentTab(tab)}
          onViewEnquiry={handleViewEnquiryFromHome}
          onOpenNewAppointment={() => setCurrentTab('appointments')}
        />
      )}

      {currentTab === 'enquiries' && (
        <EnquiriesPage
          enquiries={enquiries}
          onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
          onConvertEnquiryToAppointment={handleConvertEnquiryToAppointment}
          selectedEnquiryFromHome={selectedEnquiryForDetail}
          onClearSelectedEnquiry={() => setSelectedEnquiryForDetail(null)}
        />
      )}

      {currentTab === 'appointments' && (
        <AppointmentsPage
          appointments={appointments}
          onAddAppointment={handleAddAppointment}
          onUpdateAppointmentStatus={handleUpdateAppointmentStatus}
          onRescheduleAppointment={handleRescheduleAppointment}
        />
      )}

      {currentTab === 'content' && (
        <WebsiteContentPage
          onSaveSuccess={(msg) => onShowToast({ type: 'success', title: 'Content Published', message: msg })}
          onExitToWebsite={onExitToWebsite}
        />
      )}

      {currentTab === 'practices' && (
        <PracticeAreasManager
          onSaveNotification={(msg) => onShowToast({ type: 'success', title: 'Practice Areas', message: msg })}
        />
      )}

      {currentTab === 'experience' && (
        <ExperienceManager
          onSaveNotification={(msg) => onShowToast({ type: 'success', title: 'Experience Timeline', message: msg })}
        />
      )}

      {currentTab === 'achievements' && (
        <AchievementsManager
          onSaveNotification={(msg) => onShowToast({ type: 'success', title: 'Achievements', message: msg })}
        />
      )}

      {currentTab === 'testimonials' && (
        <TestimonialsManager
          onSaveNotification={(msg) => onShowToast({ type: 'success', title: 'Testimonials', message: msg })}
        />
      )}

      {currentTab === 'profile' && (
        <ProfilePage
          onSaveSuccess={(msg) => onShowToast({ type: 'success', title: 'Profile Updated', message: msg })}
          onExitToWebsite={onExitToWebsite}
        />
      )}

      {currentTab === 'analytics' && (
        <AnalyticsPage />
      )}

      {currentTab === 'settings' && (
        <SettingsPage
          onSaveSuccess={(msg) => onShowToast({ type: 'success', title: 'Settings Saved', message: msg })}
        />
      )}
    </AdminLayout>
  );
}
