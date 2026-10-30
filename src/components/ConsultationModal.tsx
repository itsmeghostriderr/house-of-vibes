import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, Clock, MessageCircle } from 'lucide-react';
import { SERVICES } from '../data/agencyData.ts';
import { validateContactForm, estimateProjectTimeline } from '../utils/validation.ts';
import { createConsultationWhatsAppUrl } from '../utils/whatsapp.ts';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  onSuccess: (name: string, serviceTitle: string) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES[0].id);
  const [budget, setBudget] = useState('$15k-$30k');
  const [timeline, setTimeline] = useState('2-3 Months');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES.find((s) => s.id === initialServiceId);
      if (match) setService(match.id);
    }
  }, [initialServiceId, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm({
      name: fullName,
      email,
      phone,
      service,
      message,
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const selectedService = SERVICES.find((s) => s.id === service);
    const serviceTitle = selectedService ? selectedService.title : 'Digital Architecture';

    // Generate WhatsApp direct chat link with pre-filled message
    const waUrl = createConsultationWhatsAppUrl({
      fullName,
      email,
      phone,
      service: serviceTitle,
      budget,
      timeline,
      message,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      // Open WhatsApp chat pre-filled with all project inquiry details
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      onSuccess(fullName, serviceTitle);
      // Reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
      onClose();
    }, 400);
  };

  const estimatedVelocity = estimateProjectTimeline(service, budget);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-2xl bg-[#0d1424] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Architecture & Feasibility Advisory</span>
          </div>
          <h2 id="consultation-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Schedule a Free Technical Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Directly review your architecture, timeline, and engineering scope with our senior tech architects.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-xs font-medium text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                placeholder="e.g. Alex Morgan"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                }`}
              />
              {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-xs font-medium text-slate-300 mb-1">
                Business Email *
              </label>
              <input
                id="modal-email"
                type="email"
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                }`}
              />
              {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-phone" className="block text-xs font-medium text-slate-300 mb-1">
                Direct Telephone / WhatsApp *
              </label>
              <input
                id="modal-phone"
                type="tel"
                placeholder="+91 7600764647"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="modal-service" className="block text-xs font-medium text-slate-300 mb-1">
                Requested Service Focus
              </label>
              <select
                id="modal-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Range selector */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Estimated Budget Tier
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['$5k-$15k', '$15k-$30k', '$30k-$50k', '$50k+'].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setBudget(tier)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                    budget === tier
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                      : 'bg-slate-900/60 border-slate-700/80 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="modal-message" className="text-xs font-medium text-slate-300">
                Project Scope or Key Requirements *
              </label>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                <Clock className="w-3 h-3" />
                <span>Est. Delivery: {estimatedVelocity}</span>
              </div>
            </div>
            <textarea
              id="modal-message"
              rows={3}
              placeholder="Outline your application goals, target user scale, integrations, or deadline..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full px-3.5 py-2 rounded-lg bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
              }`}
            />
            {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>NDA protected · Strict confidentiality</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-400 hover:to-teal-500 rounded-lg shadow-lg shadow-emerald-600/30 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Preparing Chat...</span>
                ) : (
                  <>
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span>Confirm &amp; Send via WhatsApp</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
