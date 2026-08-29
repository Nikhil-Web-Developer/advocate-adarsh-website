import React, { useState } from 'react';
import { 
  Star, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  X, 
  Quote 
} from 'lucide-react';
import { ADVOCATE_DATA } from '../../data/advocateData';

export default function TestimonialsManager({ onSaveNotification }) {
  const [testimonials, setTestimonials] = useState(
    ADVOCATE_DATA.testimonials.map((t, idx) => ({
      id: `test-${idx + 1}`,
      ...t,
      status: 'Published' // 'Published' | 'Hidden'
    }))
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    matterType: '',
    quote: '',
    rating: 5,
    verified: true,
    status: 'Published'
  });

  const handleOpenAdd = () => {
    setIsEditing(false);
    setFormData({
      name: '',
      designation: 'Business Client',
      matterType: 'Civil Litigation',
      quote: '',
      rating: 5,
      verified: true,
      status: 'Published'
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setIsEditing(true);
    setCurrentId(item.id);
    setFormData({ ...item });
    setModalOpen(true);
  };

  const handleToggleStatus = (id) => {
    const updated = testimonials.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'Published' ? 'Hidden' : 'Published';
        if (onSaveNotification) onSaveNotification(`Testimonial marked as ${nextStatus}.`);
        return { ...t, status: nextStatus };
      }
      return t;
    });
    setTestimonials(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this client testimonial?')) {
      const updated = testimonials.filter(t => t.id !== id);
      setTestimonials(updated);
      if (onSaveNotification) onSaveNotification('Testimonial deleted.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quote) return;

    if (isEditing) {
      setTestimonials(testimonials.map(t => t.id === currentId ? { ...formData, id: currentId } : t));
      if (onSaveNotification) onSaveNotification('Testimonial updated successfully.');
    } else {
      const newObj = {
        id: `test-${Date.now()}`,
        ...formData
      };
      setTestimonials([newObj, ...testimonials]);
      if (onSaveNotification) onSaveNotification('New client testimonial added.');
    }

    setModalOpen(false);
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Client Testimonials Management
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage verified client reviews and feedback displayed on the public website.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-navy-950 text-xs sm:text-sm font-bold shadow-gold-sm hover:scale-105 transition-transform"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Testimonial</span>
        </button>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${
              item.status === 'Hidden' ? 'opacity-60 border-dashed border-slate-300' : 'border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                {/* Stars */}
                <div className="flex items-center space-x-0.5">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  item.status === 'Published' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}>
                  {item.status}
                </span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-[11px] font-semibold text-slate-700 mb-3">
                {item.matterType}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-4">
                "{item.quote}"
              </p>
            </div>

            <div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {item.designation}
                  </p>
                </div>
                {item.verified && (
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-end space-x-2">
                <button
                  onClick={() => handleToggleStatus(item.id)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center space-x-1"
                >
                  {item.status === 'Published' ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Hide</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Publish</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleOpenEdit(item)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-gold-50 hover:text-gold-700 text-slate-700 text-xs font-bold transition-colors flex items-center space-x-1"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                  title="Delete testimonial"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
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
                {isEditing ? 'Edit Client Review' : 'Add New Client Testimonial'}
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
                    Client Name / Initials *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul S. or Dr. Ananya M."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Designation / Industry
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Managing Director, Tech Corp"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Matter Category
                  </label>
                  <input
                    type="text"
                    value={formData.matterType}
                    onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                    placeholder="e.g. Commercial Contract & Recovery"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                    Rating (Stars)
                  </label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-gold-500"
                  >
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★</option>
                    <option value={3}>3 Stars ★★★</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase text-slate-700 mb-1">
                  Client Feedback Quote *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  placeholder="Paste client's feedback quote..."
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
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
