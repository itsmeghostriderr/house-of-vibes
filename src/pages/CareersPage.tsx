import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Briefcase,
  ChevronDown,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { JobOpening } from '../types/index.ts';
import { JOB_OPENINGS, BENEFITS } from '../data/agencyData.ts';

interface CareersPageProps {
  onApplyJob: (job: JobOpening) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onApplyJob }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(JOB_OPENINGS[0].id);

  const departments = ['All', 'Engineering', 'AI & ML', 'Mobile', 'Design'];

  const filteredJobs =
    selectedDepartment === 'All'
      ? JOB_OPENINGS
      : JOB_OPENINGS.filter((j) => j.department === selectedDepartment);

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Careers at House of Vibes
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Build High-Impact Systems with Elite Engineers
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            We are assembling a tight, world-class squad of builders in Ahmedabad. No endless corporate meetings, no legacy red tape—just pure craft, architectural autonomy, and high compensation.
          </p>
        </div>
      </section>

      {/* Benefits & Culture Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            Culture &amp; Compensation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Designed for Peak Engineering Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white">{b.title}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Active Opportunities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Open Engineering &amp; Design Roles
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Accordion List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(job.id)}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-cyan-400">{job.department}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="text-slate-400 font-mono text-xs">{job.type}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Experience: {job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 font-mono">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{job.salaryRange}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onApplyJob(job);
                      }}
                      aria-label={`Apply now for ${job.title}`}
                      className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg shadow-md transition-all whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                    <div
                      className={`p-2 rounded-lg text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40 space-y-5 animate-in fade-in duration-150">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1.5">
                          {job.responsibilities.map((r, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2">
                          Candidate Requirements
                        </h4>
                        <ul className="space-y-1.5">
                          {job.requirements.map((req, reqIdx) => (
                            <li key={reqIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Immediate joining available for qualified senior candidates.
                      </span>
                      <button
                        onClick={() => onApplyJob(job)}
                        className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md transition-colors"
                      >
                        Submit Application &amp; CV
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
