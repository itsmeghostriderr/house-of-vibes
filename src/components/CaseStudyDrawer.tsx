import React from 'react';
import { X, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types/index.ts';
import { TechLogo } from './TechLogos.tsx';

interface CaseStudyDrawerProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestDiscussion: (studyTitle: string) => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  caseStudy,
  isOpen,
  onClose,
  onRequestDiscussion,
}) => {
  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end">
      {/* Click outside backdrop */}
      <div className="flex-1" onClick={onClose} aria-hidden="true" />

      {/* Drawer Body */}
      <div
        className="relative w-full max-w-2xl bg-[#0b101d] border-l border-slate-800 h-full overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Case Study Details"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900/80 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Client Header */}
        <div className="flex items-center gap-2 text-xs text-cyan-400 mb-2">
          <span>{caseStudy.category}</span>
          <span aria-hidden="true">&middot;</span>
          <span className="text-slate-400">{caseStudy.client}</span>
        </div>

        <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
          {caseStudy.title}
        </h2>

        {/* Feature Hero Image */}
        <div className="mt-6 rounded-xl overflow-hidden border border-slate-800 relative bg-slate-950">
          <img
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            className="w-full h-64 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-transparent to-transparent opacity-80" />
        </div>

        {/* Executive Summary */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
            Executive Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* Key Quantified Impact Cards */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
            Validated Business Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xl font-bold font-mono text-cyan-400 tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs font-medium text-slate-200 mt-0.5">
                  {m.label}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1">
                  {m.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/30">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Architectural Solution
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Architecture Checklist */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              System Architecture & Infrastructure Highlights
            </h3>
          </div>
          <ul className="space-y-2.5">
            {caseStudy.architecture.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Technologies & Frameworks Deployed
          </h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
              >
                <TechLogo name={tech} size={15} />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Interested in implementing a similar architecture?
          </span>
          <button
            onClick={() => {
              onRequestDiscussion(caseStudy.title);
              onClose();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Request Architecture Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
