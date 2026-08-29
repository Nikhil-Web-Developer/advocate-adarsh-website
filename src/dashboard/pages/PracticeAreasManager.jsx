import React, { useState } from 'react';
import { 
  Scale, 
  Plus, 
  Edit3, 
  Trash2, 
  Bookmark, 
  CheckCircle, 
  X, 
  Gavel, 
  HeartHandshake, 
  Building2, 
  ShieldAlert, 
  Briefcase, 
  Cpu, 
  UserCheck 
} from 'lucide-react';
import { ADVOCATE_DATA } from '../../data/advocateData';

export default function PracticeAreasManager({ onSaveNotification }) {
  const [practiceList, setPracticeList] = useState(ADVOCATE_DATA.practiceAreas);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    tagline: '',
    brief: '',
    icon: 'Scale',
    statutes: '',
    services: '',
    caseApproach: ''
  });

  const handleOpenAdd = () => {
    setIsEditing(false);
    setFormData({
      id: `practice-${Date.now()}`,
      title: '',
      tagline: '',
      brief: '',
      icon: 'Scale',
      statutes: 'Code of Civil Procedure, 1908\nSpecific Relief Act, 1963',
      services: 'Trial Court Representation\nAppeals & Injunction Suits',
      caseApproach: 'Strategic pre-litigation scrutiny and proactive relief.'
    });
    setEditModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setIsEditing(true);
    setFormData({
      id: item.id,
      title: item.title,
      tagline: item.tagline,
      brief: item.brief,
      icon: item.icon || 'Scale',
      statutes: Array.isArray(item.statutes) ? item.statutes.join('\n') : item.statutes,
      services: Array.isArray(item.services) ? item.services.join('\n') : item.services,
      caseApproach: item.caseApproach || ''
    });
    setEditModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this practice area from the public website?')) {
      const updated = practiceList.filter(p => p.id !== id);
      setPracticeList(updated);
      if (onSaveNotification) onSaveNotification('Practice area removed successfully.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    const formattedObj = {
      id: formData.id,
      title: formData.title,
      tagline: formData.tagline,
      brief: formData.brief,
      icon: formData.icon,
      statutes: formData.statutes.split('\n').filter(Boolean),
      services: formData.services.split('\n').filter(Boolean),
      caseApproach: formData.caseApproach
    };

    if (isEditing) {
      setPracticeList(practiceList.map(p => p.id === formData.id ? formattedObj : p));
      if (onSaveNotification) onSaveNotification(`"${formData.title}" updated successfully.`);
    } else {
      setPracticeList([...practiceList, formattedObj]);
      if (onSaveNotification) onSaveNotification(`New practice area "${formData.title}" added.`);
    }

    setEditModalOpen(false);
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Practice Areas Management
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage legal vertical descriptions, governing statutes, and litigation approaches displayed on your website.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs sm:text-sm font-bold shadow-gold-sm hover:scale-105 transition-transform"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Practice Area</span>
        </button>
      </div>

      {/* Grid of Practice Area Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practiceList.map((practice, idx) => (
          <div
            key={practice.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 border border-gold-200 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-serif font-bold text-slate-900 text-base mb-1">
                {practice.title}
              </h3>
              <p className="text-xs text-gold-700 font-semibold mb-3">
                {practice.tagline}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {practice.brief}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 block uppercase">
                  Key Governing Acts:
                </span>
                <div className="flex flex-wrap gap-1">
                  {(practice.statutes || []).slice(0, 2).map((st, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 truncate max-w-[200px]">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-end space-x-2">
              <button
                onClick={() => handleOpenEdit(practice)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-gold-50 hover:text-gold-700 text-slate-700 text-xs font-bold transition-colors flex items-center space-x-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>

              <button
                onClick={() => handleDelete(practice.id)}
                className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                title="Delete practice area"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {editModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setEditModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 text-left space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-slate-900 text-lg">
                {isEditing ? 'Edit Practice Area' : 'Create New Legal Practice Area'}
              </h3>
              <button 
                onClick={() => setEditModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Practice Area Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Constitutional & Writ Litigation"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    placeholder="e.g. Article 226 & Article 32 Writs"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Short Summary Brief (For Card Preview)
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Summarize the core scope of this legal practice..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Key Statutes (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.statutes}
                    onChange={(e) => setFormData({ ...formData, statutes: e.target.value })}
                    placeholder="Constitution of India&#10;High Court Rules, 2018"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500 resize-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Services Scope (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    placeholder="Writ of Mandamus / Certiorari&#10;Stay Applications"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500 resize-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Litigation Approach Strategy
                </label>
                <input
                  type="text"
                  value={formData.caseApproach}
                  onChange={(e) => setFormData({ ...formData, caseApproach: e.target.value })}
                  placeholder="e.g. Rapid pre-litigation scrutiny and immediate interim protective relief."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                >
                  {isEditing ? 'Update Practice Area' : 'Save Practice Area'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
