import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-400" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400" />,
    info: <Info className="w-5 h-5 text-gold-400" />
  };

  return (
    <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
      <div className="glass-panel bg-navy-950/95 border border-gold-500/40 p-4 rounded-xl shadow-2xl flex items-center space-x-3 text-left max-w-sm">
        {icons[toast.type] || icons.info}
        <div className="flex-1 pr-2">
          <h4 className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            {toast.title || 'Notification'}
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            {toast.message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
