import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import { PageRoute } from '../types/index.ts';
import { COMPANY_INFO, SERVICES } from '../data/agencyData.ts';
import { BrandLogo } from './BrandLogo.tsx';

interface FooterProps {
  onNavigate: (page: PageRoute, targetServiceId?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/70">
          {/* Brand and Description */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left"
            >
              <BrandLogo size="md" />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs">
              <a
                href={COMPANY_INFO.phoneTel}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Architecture Desk</span>
              </a>

              <a
                href={COMPANY_INFO.emailMailto}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a
                href={COMPANY_INFO.googleMapsPublishedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-400 hover:text-cyan-400 transition-colors pt-1 leading-relaxed group"
              >
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{COMPANY_INFO.address}</span>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate('services', s.id);
                    }}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About House of Vibes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Case Studies & Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('careers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Careers & Hiring
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Project Estimator & Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation()}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Trust & Standards
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise Security</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  OWASP hardened codebases, ISO/IEC guidelines, and automated security scanning.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>SLA Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  99.99% infrastructure uptime commitments with contractual delivery milestones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} House of Vibes IT Solutions LLP. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Pallav Cross Road, Naranpura, Ahmedabad</span>
            <span aria-hidden="true">&middot;</span>
            <span>CIN: HOV-IT-2021-GJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
