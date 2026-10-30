import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  Cloud,
  Palette,
  ChevronLeft,
  ChevronRight,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { PageRoute, CaseStudy } from '../types/index.ts';
import { TechLogo } from '../components/TechLogos.tsx';
import { FAQSection } from '../components/FAQSection.tsx';
import { DesignShowcaseSection } from '../components/DesignShowcaseSection.tsx';
import {
  COMPANY_INFO,
  STATS,
  SERVICES,
  TECH_CATEGORIES,
  TECH_ITEMS,
  CASE_STUDIES,
  TESTIMONIALS,
  CORE_VALUES,
} from '../data/agencyData.ts';

interface HomePageProps {
  onNavigate: (page: PageRoute, targetServiceId?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectCaseStudy,
}) => {
  const [activeTechCategory, setActiveTechCategory] = useState('frontend');
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);

  // Auto-play testimonial carousel
  useEffect(() => {
    if (!isTestimonialAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTestimonialAutoPlaying]);

  const filteredTech = TECH_ITEMS.filter((item) => item.category === activeTechCategory);

  const serviceIconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
    Globe: <Globe className="w-5 h-5 text-indigo-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-emerald-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
    Palette: <Palette className="w-5 h-5 text-purple-400" />,
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800/80">
        {/* Subtle background tech glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/15 to-violet-600/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span>Enterprise IT & Custom AI Agency</span>
                <span className="text-slate-500 mx-2">&middot;</span>
                <span>Ahmedabad &amp; Global</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
                Empowering Digital Evolution with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">
                  Software, AI &amp; Web
                </span>{' '}
                Excellence.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                House of Vibes designs, engineers, and scales high-throughput distributed software, custom AI agent architectures, and ultra-responsive mobile applications for ambitious global enterprises.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/25 transition-all duration-200 active:scale-95"
                >
                  Get Free Consultation
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-colors"
                >
                  Explore Services
                </button>

                <a
                  href={COMPANY_INFO.phoneTel}
                  aria-label="Direct phone call to +91 7600764647"
                  className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-slate-800/40 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91 7600764647</span>
                </a>
              </div>

              {/* Direct Proof Strip */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Fixed Milestone Deliverables</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict NDA &amp; IP Protection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>99.99% SLA Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Studio Asset & Highlights */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900/80 group">
                <img
                  src="/src/assets/images/hero_modern_it_agency_1793362557738.jpg"
                  alt="House of Vibes engineering operations center"
                  className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-85" />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">Full-Stack Velocity &amp; AI Center</span>
                    <span className="text-emerald-400 font-mono">Live Labs</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Bespoke architecture, automated QA, and high-load performance engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Animated Counters Section */}
      <section className="py-12 bg-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tabular-nums tracking-tight">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                Core Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Architectural Depth Across The Full Digital Spectrum
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 whitespace-nowrap self-start md:self-auto"
            >
              <span>View Full Service Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                    {serviceIconMap[service.iconName] || <Cpu className="w-5 h-5 text-cyan-400" />}
                  </div>

                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="text-left text-lg font-bold text-white hover:text-cyan-300 transition-colors block"
                  >
                    {service.title}
                  </button>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onNavigate('services', service.id)}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                    </button>
                    <button
                      onClick={() => onOpenConsultation(service.id)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
                    >
                      <span>Book</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 justify-end">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                      >
                        <TechLogo name={tech} size={12} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack Switcher (Hyperlink InfoSystem Benchmark) */}
      <section className="py-20 bg-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Technology Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Tech Stack &amp; Framework Mastery
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              We select battle-tested, high-concurrency frameworks customized to your latency requirements and scale targets.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-2xl mx-auto mb-10">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTechCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  activeTechCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Tech Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
            {filteredTech.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-sm">
                    <TechLogo name={item.name} size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white font-mono truncate">{item.name}</h3>
                    <span className="text-[10px] text-cyan-400 font-medium block">
                      {item.maturity}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-slate-500">Benchmark Use:</span> {item.useCase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Spotlight */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                Proof of Execution
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Featured Engineering Case Studies
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 whitespace-nowrap self-start md:self-auto"
            >
              <span>Browse All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.slice(0, 2).map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl overflow-hidden bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-950">
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

                  <div className="p-6">
                    <div className="text-xs text-slate-400 mb-1">{study.client}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Quantified Metrics */}
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800">
                      {study.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-base font-bold font-mono text-cyan-400 tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read Architecture Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us: Glassmorphic Feature Matrix */}
      <section className="py-20 bg-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Engineering Values
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Global Enterprises Trust House of Vibes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-white">{val.title}</h3>
                    <Layers className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Benchmark Metric:</span>
                  <span className="font-mono text-cyan-400 font-medium">{val.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section
        className="py-20 border-b border-slate-800/80"
        onMouseEnter={() => setIsTestimonialAutoPlaying(false)}
        onMouseLeave={() => setIsTestimonialAutoPlaying(true)}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            Enterprise Client Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-10">
            Validated By Engineering Leaders Worldwide
          </h2>

          <div className="relative p-8 sm:p-10 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md">
            <blockquote className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed italic">
              "{TESTIMONIALS[activeTestimonialIdx].quote}"
            </blockquote>

            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-sm font-bold text-white">
                  {TESTIMONIALS[activeTestimonialIdx].name}
                </div>
                <div className="text-xs text-slate-400">
                  {TESTIMONIALS[activeTestimonialIdx].role} &middot;{' '}
                  <span className="text-cyan-400 font-medium">
                    {TESTIMONIALS[activeTestimonialIdx].company}
                  </span>{' '}
                  ({TESTIMONIALS[activeTestimonialIdx].location})
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                {TESTIMONIALS[activeTestimonialIdx].metric}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() =>
                  setActiveTestimonialIdx(
                    (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                  )
                }
                aria-label="Previous Testimonial"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonialIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      activeTestimonialIdx === i ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
                }
                aria-label="Next Testimonial"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Design System & UI Craft Showcase */}
      <DesignShowcaseSection onOpenConsultation={onOpenConsultation} />

      {/* Comprehensive Technical & Engagement FAQ Section */}
      <FAQSection onOpenConsultation={onOpenConsultation} />

      {/* High-Conversion CTA Banner */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#090d16] via-[#0d1428] to-[#090d16]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for High Velocity?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Engineer Your Next High-Impact Digital Platform
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            From architecture discovery to multi-region cloud deployment, our senior engineering teams deliver with speed, precision, and enterprise reliability.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-xl shadow-indigo-600/30 transition-all duration-200 active:scale-95"
            >
              Start Your Project With Us
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct Chat</span>
            </a>

            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-2 px-5 py-3.5 text-sm font-mono text-slate-300 hover:text-white bg-slate-900/80 border border-slate-700 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: +91 7600764647</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
