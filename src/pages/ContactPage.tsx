import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/agencyData.ts';
import { validateContactForm, estimateProjectTimeline } from '../utils/validation.ts';
import { createConsultationWhatsAppUrl } from '../utils/whatsapp.ts';

interface ContactPageProps {
  onSuccess: (name: string, serviceTitle: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [budgetTier, setBudgetTier] = useState('$15k-$30k');
  const [timeline, setTimeline] = useState('2-3 Months');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const estimatedTimeline = estimateProjectTimeline(selectedService, budgetTier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm({
      name: fullName,
      email,
      phone,
      service: selectedService,
      message,
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const srv = SERVICES.find((s) => s.id === selectedService);
    const serviceTitle = srv ? srv.title : 'IT Solution';

    // Generate WhatsApp URL with pre-filled scope details
    const waUrl = createConsultationWhatsAppUrl({
      fullName,
      email,
      phone: phone || '+91 7600764647',
      service: serviceTitle,
      budget: budgetTier,
      timeline,
      message,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      onSuccess(fullName, serviceTitle);
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 400);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Initiate Engagement
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Consult With Our Principal Architects
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Reach out directly by phone, WhatsApp, or request a complete project estimation. We respond to all technical queries within 4 business hours.
          </p>
        </div>
      </section>

      {/* Direct Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Direct Phone */}
          <a
            href={COMPANY_INFO.phoneTel}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Direct Telephone
            </div>
            <div className="text-sm sm:text-base font-bold font-mono text-white mt-1 group-hover:text-emerald-400 transition-colors">
              {COMPANY_INFO.phone}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Mon &ndash; Sat, 9:30 AM &ndash; 7:30 PM IST
            </p>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              WhatsApp Desk
            </div>
            <div className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
              Chat on WhatsApp
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Instant response &lt; 15 mins
            </p>
          </a>

          {/* Business Email */}
          <a
            href={COMPANY_INFO.emailMailto}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Inquiries &amp; RFP
            </div>
            <div className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors truncate">
              {COMPANY_INFO.email}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Formal RFPs &amp; Architecture Specs
            </p>
          </a>

          {/* Physical Office Address */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Ahmedabad Studio
            </div>
            <div className="text-xs font-semibold text-white mt-1 line-clamp-2">
              Gate 4, Ambica Apt, Pallav Cross Road, Naranpura
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Gujarat 380063, India
            </p>
          </div>
        </div>
      </section>

      {/* Project Estimator Form & Map Side-by-Side */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: Full Project Estimator */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Project Scope &amp; Estimation Calculator
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell us about your project parameters to receive a formal statement of work and technical breakdown.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Vikram Singhania"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                    Business Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="vikram@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp (+91...)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 7600764647"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-medium text-slate-300 mb-1">
                    Required Service Focus
                  </label>
                  <select
                    id="contact-service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Range Pills */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Target Budget Allocation
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['$5k-$15k', '$15k-$30k', '$30k-$50k', '$50k+'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudgetTier(tier)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                        budgetTier === tier
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Expectations */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Target Launch Schedule
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1-2 Months (Sprint)', '2-4 Months (Standard)', 'Flexible (Quarterly)'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`py-2 px-2.5 text-xs font-medium rounded-lg border transition-all text-center ${
                        timeline === t
                          ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {t.split('(')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="contact-message" className="text-xs font-medium text-slate-300">
                    Project Vision &amp; Requirements *
                  </label>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>Est. Delivery: {estimatedTimeline}</span>
                  </div>
                </div>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Outline key system components, current scale, desired tech stack, or problem statement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NDA signed prior to project review</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-400 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Opening WhatsApp...</span>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Submit &amp; Continue on WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Physical Location Card & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <MapPin className="w-5 h-5 text-rose-400" />
                  <span>House of Vibes Office Location</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400">
                  Verified On Google Maps
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {COMPANY_INFO.address}
              </p>

              {/* Styled interactive map iframe showing House of Vibes */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 h-64 bg-slate-950">
                <iframe
                  title="House of Vibes Google Maps Verified Location"
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={COMPANY_INFO.googleMapsPublishedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30"
                >
                  <span>Open Official Google Maps Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] font-mono text-slate-400">
                  Ahmedabad, Gujarat 380063
                </span>
              </div>
            </div>

            {/* Quick Consultation Assurance */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
                <span>Enterprise SLA Assurance</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Every inquiry is reviewed directly by a Staff Engineer or Technical Co-founder. We do not dispatch non-technical salespeople.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
