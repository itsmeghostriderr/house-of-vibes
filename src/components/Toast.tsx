import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '../types/index.ts';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <aside aria-label="Notifications" className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none max-w-md w-full">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </aside>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />,
  };

  const borderColors = {
    success: 'border-emerald-500/30 bg-[#0c1626]/95',
    error: 'border-rose-500/30 bg-[#1c0f18]/95',
    info: 'border-cyan-500/30 bg-[#0b162c]/95',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border ${borderColors[toast.type]} shadow-2xl backdrop-blur-xl transition-all duration-200 animate-in slide-in-from-bottom-4`}
    >
      {icons[toast.type]}
      <div className="flex-1 min-w-0 pr-2">
        <h4 className="text-sm font-semibold text-white tracking-tight">{toast.title}</h4>
        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        aria-label="Dismiss notification"
        className="text-slate-400 hover:text-white transition-colors p-1 -mr-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
