import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { PageRoute } from '../types/index.ts';
import { COMPANY_INFO, WORKFLOW_STEPS, CORE_VALUES, STATS } from '../data/agencyData.ts';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState(WORKFLOW_STEPS[0].step);

  const activeStepData =
    WORKFLOW_STEPS.find((s) => s.step === selectedWorkflowStep) || WORKFLOW_STEPS[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            About House of Vibes
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Precision Engineered for Global Velocity
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Founded with a conviction that enterprise software should be fast, resilient, and beautifully crafted, House of Vibes bridges deep architectural rigor with rapid product execution.
          </p>
        </div>
      </section>

      {/* Story & Team Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A High-Caliber Engineering Collective
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Based at Pallav Cross Road in Ahmedabad, Gujarat, House of Vibes operates as an elite team of senior full-stack architects, machine learning engineers, and product designers. We reject bloated agency bureaucracy in favor of tight, senior-only engineering squads that integrate directly with client founders and CTOs.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether architecting high-throughput distributed backend pipelines handling millions of daily events, implementing secure vector-grounded LLM microservices, or building buttery 60fps mobile applications, we operate with transparent source repositories, bi-weekly staging drops, and contractual SLA guarantees.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-bold font-mono text-cyan-400">2021</div>
                <div className="text-xs text-slate-400 mt-0.5">Established in Ahmedabad</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Senior In-House Team</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-bold font-mono text-indigo-400">14+</div>
                <div className="text-xs text-slate-400 mt-0.5">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
              <img
                src="/src/assets/images/agency_team_collaboration_1793362559977.jpg"
                alt="House of Vibes engineering team collaboration"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Naranpura Technology Headquarters</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Workflow Roadmap */}
      <section className="py-20 bg-[#060a12] border-y border-slate-800/80 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our 6-Stage Engineering Delivery Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Click each phase to inspect exact sprint activities, timeline estimates, and production handover artifacts.
            </p>
          </div>

          {/* Interactive Steps Selector Bar */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
            {WORKFLOW_STEPS.map((step) => {
              const isSelected = step.step === selectedWorkflowStep;
              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedWorkflowStep(step.step)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-950/60 to-indigo-950/60 border-cyan-400/80 shadow-lg shadow-cyan-950/50'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                    STEP {step.step}
                  </div>
                  <div className={`text-xs font-medium mt-1 line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {step.name.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400">{activeStepData.phase}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeStepData.step}. {activeStepData.name}
                </h3>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-200 self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typical Duration: {activeStepData.duration}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mt-5 leading-relaxed">
              {activeStepData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  Core Sprint Activities
                </h4>
                <ul className="space-y-2">
                  {activeStepData.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  Key Deliverables &amp; Artifacts
                </h4>
                <ul className="space-y-2">
                  {activeStepData.outputs.map((out, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            Culture &amp; Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The House of Vibes Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{val.desc}</p>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500">Measurable Standard:</span>
                <span className="font-mono text-cyan-400 font-medium">{val.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0e1628] border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ready to partner with an engineering-first team?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
            Schedule a technical discovery session with our architects and receive a preliminary architecture plan within 48 hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 border border-slate-700 rounded-xl"
            >
              Contact Our Ahmedabad Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
