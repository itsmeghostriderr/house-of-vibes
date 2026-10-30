import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { CaseStudy } from '../types/index.ts';
import { CASE_STUDIES } from '../data/agencyData.ts';
import { TechLogo } from '../components/TechLogos.tsx';

interface PortfolioPageProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenConsultation: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectCaseStudy,
  onOpenConsultation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'AI & ML',
    'Web Apps',
    'Mobile Apps',
    'Enterprise Software',
  ];

  const filteredStudies =
    selectedFilter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === selectedFilter);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Selected Works
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Case Studies in High-Scale Engineering
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Real systems deployed in production. Explore how our engineering squads solved complex latency bottlenecks, built autonomous AI platforms, and scaled enterprise ERPs.
          </p>
        </div>

        {/* Dynamic Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-8 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl w-fit">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedFilter === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-slate-900/90 border border-slate-700 text-cyan-300 rounded-lg backdrop-blur-md">
                    {study.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="text-xs text-slate-400 mb-1">{study.client}</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Quantified Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 mt-5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-base font-bold font-mono text-cyan-400 tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-300 font-medium">
                          {m.label}
                        </div>
                        <div className="text-[10px] text-emerald-400">
                          {m.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-300"
                      >
                        <TechLogo name={tech} size={13} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onSelectCaseStudy(study)}
                  aria-label={`View full case study for ${study.title}`}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 group-hover:border-cyan-500/30"
                >
                  <span>View Full Case Study &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Project Lead Strip */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center max-w-3xl mx-auto">
          <Layers className="w-8 h-8 mx-auto text-cyan-400 mb-3" />
          <h3 className="text-lg font-bold text-white">Have a Unique Engineering Challenge?</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
            We sign enterprise NDAs before reviewing proprietary architectures, data schemas, or codebases.
          </p>
          <button
            onClick={() => onOpenConsultation()}
            className="mt-5 px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg"
          >
            Request Private Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
};
