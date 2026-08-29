import React, { useState } from 'react';
import { 
  Clock, 
  Plus, 
  Edit3, 
  Trash2, 
  Building, 
  Award, 
  X, 
  CheckCircle 
} from 'lucide-react';
import { ADVOCATE_DATA } from '../../data/advocateData';

export default function ExperienceManager({ onSaveNotification }) {
  const [timeline, setTimeline] = useState(ADVOCATE_DATA.careerTimeline);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [formData, setFormData] = useState({
    period: '2022 – Present',
    role: '',
    organization: '',
    description: '',
    highlight: ''
  });

  const handleOpenAdd = () => {
    setIsEditing(false);
    setFormData({
      period: '2024 – Present',
      role: '',
      organization: 'Chambers of Adv. Adarsh Kumar Hans',
      description: '',
      highlight: ''
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
    if (window.confirm('Delete this career milestone?')) {
      const updated = timeline.filter((_, i) => i !== idx);
      setTimeline(updated);
      if (onSaveNotification) onSaveNotification('Experience milestone removed.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.role || !formData.organization) return;

    if (isEditing && currentIndex >= 0) {
      const updated = [...timeline];
      updated[currentIndex] = formData;
      setTimeline(updated);
      if (onSaveNotification) onSaveNotification('Experience milestone updated.');
    } else {
      setTimeline([formData, ...timeline]);
      if (onSaveNotification) onSaveNotification('New experience milestone added.');
    }

    setModalOpen(false);
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Professional Experience Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your legal career progression, chamber counsel roles, and court achievements.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs sm:text-sm font-bold shadow-gold-sm hover:scale-105 transition-transform"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Experience</span>
        </button>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {timeline.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-start justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0B192C] text-gold-300 text-xs font-bold">
                {item.period}
              </span>

              <h3 className="text-lg font-serif font-bold text-slate-900">
                {item.role}
              </h3>

              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
                <Building className="w-3.5 h-3.5 text-gold-600" />
                <span>{item.organization}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {item.description}
              </p>

              {item.highlight && (
                <div className="p-3 rounded-xl bg-gold-50 border border-gold-200 text-xs text-gold-900 flex items-start space-x-2">
                  <Award className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item.highlight}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
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
                title="Delete milestone"
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
            className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 text-left space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-slate-900 text-lg">
                {isEditing ? 'Edit Career Milestone' : 'Add New Career Experience'}
              </h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Time Period *
                </label>
                <input
                  type="text"
                  required
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  placeholder="e.g. 2020 – Present or 2015 – 2020"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Position / Role Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Senior Counsel & Managing Advocate"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Organization / Law Firm / Chamber *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Chambers of Adv. Adarsh Kumar Hans, New Delhi"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Description of Litigation Work
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Summarize key matters handled, courts practiced, and leadership scope..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Key Achievement / Milestone Highlight
                </label>
                <input
                  type="text"
                  value={formData.highlight}
                  onChange={(e) => setFormData({ ...formData, highlight: e.target.value })}
                  placeholder="e.g. Successfully argued 600+ complex matters in High Court"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
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
                  Save Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
