import React, { useState } from 'react';
import {
  Award,
  Plus,
  Edit3,
  Trash2,
  BookOpen,
  Mic,
  BadgeCheck,
  X,
  Trophy
} from 'lucide-react';
import { ADVOCATE_DATA } from '../../data/advocateData';

export default function AchievementsManager({ onSaveNotification }) {
  const [achievements, setAchievements] = useState(ADVOCATE_DATA.achievements);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [formData, setFormData] = useState({
    year: '2024',
    category: 'Award & Recognition',
    title: '',
    institution: '',
    description: '',
    icon: 'Award'
  });

  const handleOpenAdd = () => {
    setIsEditing(false);
    setFormData({
      year: '2024',
      category: 'Award & Recognition',
      title: '',
      institution: '',
      description: '',
      icon: 'Award'
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item, idx) => {
    setIsEditing(true);
    setCurrentIndex(idx);
    setFormData({ ...item });
    setModalOpen(true);
  };

  const handleDelete = (idx) => {
    if (window.confirm('Delete this achievement entry?')) {
      const updated = achievements.filter((_, i) => i !== idx);
      setAchievements(updated);
      if (onSaveNotification) onSaveNotification('Achievement removed.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    if (isEditing && currentIndex >= 0) {
      const updated = [...achievements];
      updated[currentIndex] = formData;
      setAchievements(updated);
      if (onSaveNotification) onSaveNotification('Achievement updated.');
    } else {
      setAchievements([formData, ...achievements]);
      if (onSaveNotification) onSaveNotification('New achievement added.');
    }

    setModalOpen(false);
  };

  return (
    <div className="space-y-6 text-left">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Achievements & Recognitions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your legal accolades, journal publications, keynote addresses, and ADR certifications.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs sm:text-sm font-bold shadow-gold-sm hover:scale-105 transition-transform"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Achievement</span>
        </button>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-serif font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded border border-gold-200">
                  {item.category}
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  {item.year}
                </span>
              </div>

              <h3 className="font-serif font-bold text-slate-900 text-base mb-1">
                {item.title}
              </h3>

              <p className="text-xs text-slate-500 font-medium mb-3">
                {item.institution}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-end space-x-2">
              <button
                onClick={() => handleOpenEdit(item, idx)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-gold-50 hover:text-gold-700 text-slate-700 text-xs font-bold transition-colors flex items-center space-x-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>

              <button
                onClick={() => handleDelete(idx)}
                className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                title="Delete achievement"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 text-left space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-slate-900 text-lg">
                {isEditing ? 'Edit Achievement' : 'Add New Legal Achievement'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Year *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder="e.g. 2024"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Award & Recognition">Award & Recognition</option>
                    <option value="Publication">Publication</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Certification & ADR">Certification & ADR</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Title of Award / Paper / Distinction *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Excellence in Civil Litigation Distinction"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Conferring Institution / Journal
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="e.g. Delhi Legal Conclave / Indian Journal of Law"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief summary of the honor and legal relevance..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                >
                  Save Achievement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
