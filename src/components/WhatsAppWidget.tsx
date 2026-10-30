import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData.ts';

export const WhatsAppWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-slate-900/95 border border-emerald-500/30 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-200 mb-1">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="font-semibold text-emerald-400">Direct Architecture Desk</span>
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Close message preview"
              className="text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Have a project in mind? Connect directly with our lead architects on WhatsApp.
          </p>
          <div className="mt-2 text-[10px] text-slate-400 font-mono">
            Typical response: &lt; 15 mins
          </div>
        </div>
      )}

      {/* Main Floating Trigger */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with House of Vibes at +91 7600764647"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white rounded-full shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white stroke-transparent" />
      </a>
    </div>
  );
};
