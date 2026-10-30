import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = '', size = 18 }) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  // 1. Node.js
  if (norm.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#339933" />
        <path d="M12 4.1l6.9 4v7.8L12 19.9l-6.9-4V8.1L12 4.1z" fill="#026e00" />
        <path d="M10.5 8.5v7h2.2v-4.5l2.8 4.5h2.2V8.5h-2.2v4.5l-2.8-4.5h-2.2z" fill="#ffffff" />
      </svg>
    );
  }

  // 2. React / React 19 / React Native
  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={`shrink-0 ${className}`}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 3. Next.js
  if (norm.includes('next')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#38BDF8" strokeWidth="1.2" />
        <path d="M7.5 7.5v9h2v-5.2l6.2 5.2h1.8v-9h-2v5.2L9.3 7.5H7.5z" fill="#ffffff" />
      </svg>
    );
  }

  // 4. TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M4 11h6v2H8v6H6v-6H4v-2zm8 1.5c0-.8.7-1.5 1.5-1.5h4v2h-3.5v1h2c1.1 0 2 .9 2 2v1.5c0 1.1-.9 2-2 2h-4.5v-2H16v-1h-2.5c-.8 0-1.5-.7-1.5-1.5v-2.5z" fill="#ffffff" />
      </svg>
    );
  }

  // 5. Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
      </svg>
    );
  }

  // 6. Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M11.9 2c-3.5 0-3.3 1.5-3.3 1.5v1.6h6.7v1H5.7S2 5.7 2 9.3c0 3.5 2.3 3.4 2.3 3.4h1.4v-1.9s-.1-2.3 2.3-2.3h4V6.2s.2-4.2-4.2-4.2zm-2 1.2a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="#3776AB" />
        <path d="M12.1 22c3.5 0 3.3-1.5 3.3-1.5v-1.6H8.7v-1h9.6s3.7.4 3.7-3.2c0-3.5-2.3-3.4-2.3-3.4h-1.4v1.9s.1 2.3-2.3 2.3h-4v2.3s-.2 4.2 4.2 4.2zm2-1.2a.9.9 0 110-1.8.9.9 0 010-1.8z" fill="#FFD43B" />
      </svg>
    );
  }

  // 7. Go / Golang
  if (norm.includes('go') || norm.includes('golang')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <rect width="24" height="24" rx="4" fill="#00ADD8" />
        <text x="5" y="17" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">GO</text>
      </svg>
    );
  }

  // 8. PostgreSQL
  if (norm.includes('postgres') || norm.includes('sql') || norm.includes('pgvector')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <circle cx="12" cy="12" r="11" fill="#336791" />
        <path d="M12 5c-3.9 0-7 2.7-7 6 0 1.9 1 3.7 2.6 4.8l-.6 3.2 3.1-1.4c.6.2 1.3.4 1.9.4 3.9 0 7-2.7 7-6s-3.1-6-7-6zm-2 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#ffffff" />
      </svg>
    );
  }

  // 9. Redis
  if (norm.includes('redis')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <rect width="24" height="24" rx="4" fill="#D82C20" />
        <path d="M6 9l6-3 6 3-6 3-6-3zm0 4l6 3 6-3v2l-6 3-6-3v-2z" fill="#ffffff" />
      </svg>
    );
  }

  // 10. Flutter
  if (norm.includes('flutter')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M14.3 2L4 12.3l3.2 3.2L19.4 3.3h-5.1z" fill="#47C5FB" />
        <path d="M14.3 12.3L9.6 17l4.7 4.7h5.1L14.7 17l4.7-4.7h-5.1z" fill="#02569B" />
        <path d="M9.6 17l3.2-3.2 3.2 3.2-3.2 3.2z" fill="#0175C2" />
      </svg>
    );
  }

  // 11. Swift
  if (norm.includes('swift')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <rect width="24" height="24" rx="4" fill="#F05138" />
        <path d="M19.5 17.5c-3.1 3-8.4 2.6-11.8-.4 3.4 1.4 7.2.7 9.5-1.5-2.2-.4-4.1-1.8-5-3.8 2.2.6 4.6.1 5.9-1.2-2.3-.5-4.2-2.3-4.8-4.6 2.3.9 5 .6 6.2-.8-3.1-1-6.7.8-8 3.9C9.7 7 8 5.6 6 5c1 1.7 1.5 3.7 1.3 5.7C5.9 9.3 4.8 7.9 4.5 6.3c-.3 3.6 1.8 7 5.1 8.4-2.8-.2-5.4-1.6-6.6-4.2 1.6 4.8 6.4 8 11.5 7.7 2.2-.1 4.1-.7 5-1.7z" fill="#ffffff" />
      </svg>
    );
  }

  // 12. Kotlin
  if (norm.includes('kotlin')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M22 2H2v20h20L12 12l10-10z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E4485D" />
            <stop offset="0.5" stopColor="#C711E1" />
            <stop offset="1" stopColor="#7F52FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 13. Docker
  if (norm.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm6 6h2v2h-2v-2zm-9 0h2v2H7v-2zm3 0h2v2h-2v-2zm-6 0h2v2H4v-2z" fill="#2496ED" />
        <path d="M22.5 11.8c-.5-.4-1.5-.5-2.2-.2-.2-.6-.6-1.2-1.2-1.6-.1 0-.3-.1-.4-.1 0 1.5-.7 2.8-2 3.6-2.5 1.5-6.2 1.5-8.7 0-1.4-.9-2.2-2.3-2.2-3.8H1c-.3 1.1-.1 2.3.5 3.3 1.6 2.7 5.5 4.3 10.5 4.3 6.5 0 10.3-2.8 11-5.5z" fill="#2496ED" />
      </svg>
    );
  }

  // 14. Kubernetes
  if (norm.includes('kubernetes')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <circle cx="12" cy="12" r="10.5" fill="#326CE5" />
        <path d="M12 6l5 3v6l-5 3-5-3V9l5-3z" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="2" fill="#ffffff" />
      </svg>
    );
  }

  // 15. AWS / Amazon
  if (norm.includes('aws') || norm.includes('amazon')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <rect width="24" height="24" rx="4" fill="#232F3E" />
        <path d="M6 15.5c4 2 8 2 12 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 14.5l2 1.2-1.2 2" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        <text x="4.5" y="11.5" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">aws</text>
      </svg>
    );
  }

  // 16. Google Cloud / Gemini
  if (norm.includes('gemini') || norm.includes('google')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M12 2C12 7.52 7.52 12 2 12c5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" fill="url(#gemini-grad)" />
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1BA1E3" />
            <stop offset="0.5" stopColor="#5B68F5" />
            <stop offset="1" stopColor="#BA43E3" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 17. PyTorch
  if (norm.includes('pytorch')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M13.5 3a7.5 7.5 0 00-6.2 11.7l1.4-1.4A5.5 5.5 0 0113.5 5V3z" fill="#EE4C2C" />
        <path d="M15 6a1 1 0 110-2 1 1 0 010 2z" fill="#EE4C2C" />
        <path d="M13.5 11v6.5a4.5 4.5 0 11-4.5-4.5h2v2h-2a2.5 2.5 0 102.5 2.5V11h2z" fill="#EE4C2C" />
      </svg>
    );
  }

  // 18. Terraform
  if (norm.includes('terraform')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <rect width="24" height="24" rx="4" fill="#5C4EE5" />
        <path d="M6 7l4 2.3v4.6L6 11.6V7zm4.5 2.6l4-2.3v4.6l-4 2.3V9.6zm4.5 7l4-2.3v4.6l-4 2.3v-4.6z" fill="#ffffff" />
      </svg>
    );
  }

  // 19. Kafka
  if (norm.includes('kafka')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <circle cx="12" cy="12" r="10" fill="#231F20" stroke="#00B4D8" strokeWidth="1.2" />
        <circle cx="7" cy="12" r="2" fill="#ffffff" />
        <circle cx="17" cy="7" r="2" fill="#ffffff" />
        <circle cx="17" cy="17" r="2" fill="#ffffff" />
        <path d="M7 12l10-5M7 12l10 5" stroke="#00B4D8" strokeWidth="1.5" />
      </svg>
    );
  }

  // 20. LangChain / LlamaIndex / Qdrant / Pinecone
  if (norm.includes('langchain') || norm.includes('llama') || norm.includes('qdrant') || norm.includes('pinecone')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <rect width="24" height="24" rx="4" fill="#0E2F3F" stroke="#10B981" strokeWidth="1" />
        <path d="M8 12h8M12 8v8M9 9l6 6M15 9l-6 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 21. Figma
  if (norm.includes('figma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
        <path d="M8 4h4v4H8z" fill="#F24E1E" />
        <path d="M12 4h4a4 4 0 010 8h-4V4z" fill="#FF7262" />
        <path d="M8 8h4v4H8z" fill="#A259FF" />
        <path d="M8 12h4v4H8z" fill="#0ACF83" />
        <path d="M8 16a4 4 0 004 4v-4H8z" fill="#1ABCFE" />
      </svg>
    );
  }

  // Default clean code badge icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
      <rect width="24" height="24" rx="5" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.2" />
      <path d="M8 10l-3 2 3 2M16 10l3 2-3 2M13 7l-2 10" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
