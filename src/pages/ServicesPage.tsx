import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  Cloud,
  Palette,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Layers,
} from 'lucide-react';
import { PageRoute } from '../types/index.ts';
import { SERVICES } from '../data/agencyData.ts';
import { TechLogo } from '../components/TechLogos.tsx';
import { FAQSection } from '../components/FAQSection.tsx';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: (serviceId?: string) => void;
  targetServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  targetServiceId,
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [focusedServiceId, setFocusedServiceId] = useState<string | null>(null);

  useEffect(() => {
    if (targetServiceId) {
      const match = SERVICES.find((s) => s.id === targetServiceId);
      if (match) {
        setActiveCategoryFilter(match.category);
        setFocusedServiceId(match.id);
        setTimeout(() => {
          const el = document.getElementById(match.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 120);
      }
    }
  }, [targetServiceId]);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'software', label: 'Custom Software' },
    { id: 'web', label: 'Web & SaaS' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & ML Solutions' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const filteredServices =
    activeCategoryFilter === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategoryFilter);

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
    Globe: <Globe className="w-6 h-6 text-indigo-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-emerald-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    Cloud: <Cloud className="w-6 h-6 text-sky-400" />,
    Palette: <Palette className="w-6 h-6 text-purple-400" />,
  };

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Engineering Spectrum
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High-Precision IT Solutions &amp; Intelligent Software Architectures
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Inspired by the depth and enterprise rigor of Sapphire Solutions, our engineering practices combine battle-tested systems engineering with modern generative AI capabilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mt-8 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeCategoryFilter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services List / Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`p-8 sm:p-10 rounded-2xl transition-all duration-300 scroll-mt-28 ${
              focusedServiceId === service.id
                ? 'bg-gradient-to-b from-[#0f1d35] to-slate-900/90 border-2 border-cyan-400 shadow-2xl shadow-cyan-950/80 ring-4 ring-cyan-500/20'
                : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700/80'
            }`}
          >
            {focusedServiceId === service.id && (
              <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Focus Discipline</span>
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Overview & Deliverables */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    {iconMap[service.iconName] || <Cpu className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400">
                      0{index + 1}. {service.category.toUpperCase()}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Key Capabilities */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Key Capabilities &amp; Workflows</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Contractual Handover Deliverables</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-emerald-400 font-mono text-xs">&rarr;</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tech Stack & Booking CTA */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950/60 border border-slate-800 space-y-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Benchmark Business Outcome</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {service.businessImpact}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-800/80">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                      Core Technologies Utilized
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200"
                        >
                          <TechLogo name={tech} size={15} />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenConsultation(service.id)}
                    aria-label={`Book service: ${service.title}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Includes initial feasibility analysis &amp; sprint estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Embedded FAQ Section */}
      <div className="mt-16">
        <FAQSection
          title="Service Delivery &amp; Architecture FAQs"
          subtitle="Answers to common questions about contracts, stack selection, and deployment pipelines."
          onOpenConsultation={() => onOpenConsultation()}
        />
      </div>
    </div>
  );
};
