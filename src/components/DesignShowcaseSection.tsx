import React, { useState } from 'react';
import { Palette, CheckCircle2, Sliders, Layout, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { DESIGN_TOKENS } from '../data/agencyData.ts';

interface DesignShowcaseSectionProps {
  onOpenConsultation?: () => void;
}

export const DesignShowcaseSection: React.FC<DesignShowcaseSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'surfaces' | 'motion'>('tokens');

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#070b14] relative overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>UI/UX Product Engineering &amp; Design Craft</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Design Systems Engineered for Global Conversion
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              We reject generic templates. Every interface is crafted with mathematical spatial discipline, domain-authentic color allocation (60-30-10), tactile micro-interactions, and rigorous WCAG AA accessibility.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('tokens')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'tokens'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Design Tokens</span>
            </button>
            <button
              onClick={() => setActiveTab('surfaces')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'surfaces'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Glassmorphism &amp; Depth</span>
            </button>
            <button
              onClick={() => setActiveTab('motion')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'motion'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Micro-Interactions</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Token List */}
          <div className="lg:col-span-7 space-y-4">
            {activeTab === 'tokens' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                {DESIGN_TOKENS.map((token, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white font-mono">{token.name}</span>
                      <span className="text-[10px] text-cyan-400 font-mono">Verified Standard</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{token.value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'surfaces' && (
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold text-white">Subtle Layer Elevation Without Visual Clutter</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We avoid multi-nested card borders and candy badges. Instead, our design language employs 16px backdrop-blur frosted acrylic glass panels with 1px translucent borders that preserve clean reading hierarchy and 4.5:1 text contrast.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 text-xs">
                    <span className="text-cyan-400 font-mono font-semibold block mb-0.5">WCAG AA Standard</span>
                    <span className="text-slate-400">Strict 4.5:1 text luminance ratio across all views.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-indigo-500/20 text-xs">
                    <span className="text-indigo-400 font-mono font-semibold block mb-0.5">Zero-Pill Discipline</span>
                    <span className="text-slate-400">Clean unboxed metadata separated by quiet dots.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'motion' && (
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold text-white">High-Frequency 60fps Compositor Transitions</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  All interactive states utilize compositor-only animations (<code className="text-cyan-400 font-mono">transform</code>, <code className="text-cyan-400 font-mono">opacity</code>). No layout thrashing or delayed scroll-reveals that lock up user productivity.
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-lg font-mono font-bold text-cyan-400">&le;150ms</div>
                    <div className="text-[10px] text-slate-400">Hover Settle Time</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-lg font-mono font-bold text-emerald-400">60 FPS</div>
                    <div className="text-[10px] text-slate-400">Animation Smoothness</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-lg font-mono font-bold text-indigo-400">0 ms</div>
                    <div className="text-[10px] text-slate-400">Content Lockup Delay</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Visual Design Canvas Preview */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0e172e] border border-slate-700/80 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    HOV Interactive UI Lab
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Figma &rarr; Code
                </span>
              </div>

              {/* Sample Live Interactive Component Preview */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Adaptive Design Tokens</span>
                  <span className="font-mono text-cyan-400 text-[11px]">&lt;12ms compile</span>
                </div>

                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 w-3/4 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Responsive Fluidity</span>
                  <span className="text-white font-mono font-semibold">100% WCAG AA</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Tailwind v4 utility architecture with semantic variants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Comprehensive Figma master components with auto-layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Cross-platform design alignment (Web, iOS, Android)</span>
                </div>
              </div>

              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Custom Design System Review</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
