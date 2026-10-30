import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, HelpCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/agencyData.ts';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  onOpenConsultation?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Engineering Questions',
  subtitle = 'Everything you need to know about our sprints, pricing models, code ownership, and technical SLAs.',
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(FAQS[0].id);

  const categories = ['All', 'Process', 'Engagement', 'Security & IP', 'Architecture', 'AI & ML'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQS
      : FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#060a12]/70 relative overflow-hidden" id="faq">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparency &amp; Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-2xl max-w-2xl mx-auto mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg text-slate-400 bg-slate-800/80 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/30 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Action Help Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">Have a Specific Project Question?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Discuss architecture, NDA, or budget directly with our leadership team.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md transition-all"
              >
                Book Discovery Call
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
