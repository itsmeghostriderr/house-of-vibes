import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types/index.ts';
import { COMPANY_INFO, SERVICES } from '../data/agencyData.ts';
import { BrandLogo } from './BrandLogo.tsx';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, targetServiceId?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute; hasDropdown?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services', hasDropdown: true },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Careers', page: 'careers' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageRoute, targetServiceId?: string) => {
    onNavigate(page, targetServiceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (!targetServiceId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-[#090d16]/60 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Official Brand Logo & Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left focus:outline-none group whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
            aria-label="House of Vibes Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((item) => (
              <div
                key={item.page}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleLinkClick(item.page)}
                  className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 ${
                    currentPage === item.page
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-500'
                      }`}
                    />
                  )}
                </button>

                {/* Services Dropdown */}
                {item.hasDropdown && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-84 p-2.5 bg-[#0e1526] border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5 flex items-center justify-between">
                      <span>Core Engineering Disciplines</span>
                      <span className="text-[10px] text-cyan-400 font-mono">Jump to Scope</span>
                    </div>
                    <div className="grid gap-1 mt-1">
                      {SERVICES.map((srv) => (
                        <button
                          key={srv.id}
                          onClick={() => {
                            onNavigate('services', srv.id);
                            setServicesDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800/90 transition-colors group flex items-start justify-between"
                        >
                          <div>
                            <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                              {srv.title}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">
                              {srv.shortDesc}
                            </div>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0 mt-0.5" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Direct Tel Trigger */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={COMPANY_INFO.phoneTel}
              aria-label="Call House of Vibes directly at +91 7600764647"
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-800/50"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 7600764647</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg shadow-md shadow-indigo-600/25 hover:shadow-cyan-500/25 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-5 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <div key={item.page}>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleLinkClick(item.page)}
                    className={`text-left flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === item.page
                        ? 'bg-slate-800 text-cyan-400 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.hasDropdown && (
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2 text-slate-400 hover:text-white"
                      aria-label="Toggle Services List"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? 'rotate-180 text-cyan-400' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Sub-Services */}
                {item.hasDropdown && mobileServicesOpen && (
                  <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-slate-800 ml-4 my-1">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleLinkClick('services', s.id)}
                        className="w-full text-left py-1.5 px-2 text-xs text-slate-300 hover:text-cyan-300 rounded hover:bg-slate-800/40 transition-colors"
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono font-medium text-slate-200 bg-slate-800/70 border border-slate-700/60 rounded-lg hover:bg-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: +91 7600764647</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/50"
            >
              <span>WhatsApp Direct Support</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg shadow-lg text-center"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
