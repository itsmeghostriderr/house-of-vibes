import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      {/* Brand Icon: House with H & V and attic window squares */}
      <div className={`relative ${iconDimensions} rounded-xl overflow-hidden bg-[#0d1424] border border-cyan-500/30 flex items-center justify-center p-1 shadow-md shadow-cyan-500/10 shrink-0`}>
        <img
          src="/assets/house_of_vibes_icon.png"
          alt="House of Vibes Logo"
          className="w-full h-full object-contain rounded-lg filter contrast-125"
          onError={(e) => {
            // Fallback to high-precision vector SVG if image file is loading
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Vector SVG Backup to ensure zero missing states */}
        <svg
          viewBox="0 0 100 90"
          className="w-full h-full absolute inset-0 p-1 pointer-events-none"
          fill="none"
          style={{ display: 'none' }}
        >
          {/* House Roof & Chimney */}
          <path d="M50 10L15 42h10v38h50V42h10L50 10z" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round" />
          <path d="M68 18v-8h10v16" stroke="#FFFFFF" strokeWidth="6" />
          {/* 4 Attic Windows */}
          <rect x="44" y="24" width="4" height="4" fill="#FFFFFF" />
          <rect x="52" y="24" width="4" height="4" fill="#FFFFFF" />
          <rect x="44" y="30" width="4" height="4" fill="#FFFFFF" />
          <rect x="52" y="30" width="4" height="4" fill="#FFFFFF" />
          {/* Left H pillar & bar */}
          <path d="M30 46v28M30 60h14" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="square" />
          {/* Right V pillar in electric cyan/blue */}
          <path d="M44 48l12 26 12-26" stroke="#00A3FF" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={`${textSizes} font-black tracking-tight leading-none text-white`}>
            <span>HOUSE OF </span>
            <span className="text-cyan-400">VIBES</span>
          </div>
          <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
            Information Technology Solutions
          </span>
        </div>
      )}
    </div>
  );
};
