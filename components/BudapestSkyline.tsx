"use client";

export default function BudapestSkyline() {
  return (
    <svg
      viewBox="0 0 1200 400"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Parliament Building */}
      <rect x="400" y="200" width="80" height="150" fill="url(#skyGradient)" />
      <polygon points="440,200 400,150 480,150" fill="url(#skyGradient)" />
      <rect x="430" y="120" width="20" height="30" fill="url(#skyGradient)" />
      
      {/* Chain Bridge */}
      <line x1="200" y1="300" x2="600" y2="300" stroke="url(#skyGradient)" strokeWidth="4" />
      <rect x="250" y="250" width="15" height="50" fill="url(#skyGradient)" />
      <rect x="535" y="250" width="15" height="50" fill="url(#skyGradient)" />
      
      {/* Buildings */}
      <rect x="100" y="280" width="60" height="70" fill="url(#skyGradient)" />
      <rect x="180" y="260" width="50" height="90" fill="url(#skyGradient)" />
      <rect x="650" y="240" width="70" height="110" fill="url(#skyGradient)" />
      <rect x="750" y="270" width="55" height="80" fill="url(#skyGradient)" />
      <rect x="850" y="250" width="65" height="100" fill="url(#skyGradient)" />
    </svg>
  );
}
