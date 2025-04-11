import React from 'react';

const JustWalkOutlcom = () => {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" className="mx-auto mb-2">
      {/* Background */}
      <rect x="0" y="0" width="160" height="120" rx="8" fill="#f8f9fa" />

      {/* Monitor */}
      <rect x="30" y="30" width="100" height="60" rx="6" fill="#ffffff" stroke="#232f3e" strokeWidth="2.5" />
      <rect x="35" y="35" width="90" height="50" rx="4" fill="#e9ecef" />

      {/* Code lines */}
      <rect x="40" y="40" width="30" height="6" rx="2" fill="#FF9900" />
      <rect x="40" y="50" width="50" height="6" rx="2" fill="#adb5bd" />
      <rect x="40" y="60" width="40" height="6" rx="2" fill="#adb5bd" />
      <rect x="40" y="70" width="20" height="6" rx="2" fill="#adb5bd" />

      {/* Test Plan Document with QA ENGINEER text */}
      <rect x="10" y="90" width="65" height="20" rx="3" fill="#ffffff" stroke="#232f3e" strokeWidth="1.5" />
      <text x="42.5" y="103" textAnchor="middle" fontSize="7" fill="#232f3e" fontWeight="bold">QA ENGINEER</text>

      {/* Gear for Systems Engineering */}
      <circle cx="130" cy="95" r="10" fill="#ffffff" stroke="#FF9900" strokeWidth="2" />
      <path d="M130 85 L130 105 M120 95 L140 95 M123 88 L137 102 M137 88 L123 102" stroke="#FF9900" strokeWidth="1.5" />

      {/* Performance chart */}
      <polyline points="70,100 80,90 90,95 100,85 110,88" fill="none" stroke="#00cc66" strokeWidth="2" />
      <circle cx="70" cy="100" r="2" fill="#00cc66" />
      <circle cx="80" cy="90" r="2" fill="#00cc66" />
      <circle cx="90" cy="95" r="2" fill="#00cc66" />
      <circle cx="100" cy="85" r="2" fill="#00cc66" />
      <circle cx="110" cy="88" r="2" fill="#00cc66" />

      {/* QA checkmark */}
      <circle cx="135" cy="25" r="10" fill="#ffffff" stroke="#FF9900" strokeWidth="1.5" />
      <path d="M130 25 L134 29 L140 21" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Title */}
      <text x="80" y="14" textAnchor="middle" fill="#232f3e" fontWeight="bold" fontSize="9">
        SYSTEMS & PERFORMANCE
      </text>
    </svg>
  );
};

export default JustWalkOutlcom;
