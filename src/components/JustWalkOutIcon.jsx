import React from 'react';

const JustWalkOutIcon = () => {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" className="mx-auto mb-2">
      {/* Background */}
      <rect x="0" y="0" width="160" height="120" rx="8" fill="#f8f9fa" />
      
      {/* Store outline */}
      <rect x="15" y="15" width="130" height="85" rx="6" fill="#fff" stroke="#232f3e" strokeWidth="2.5" />
      
      {/* Ceiling lights */}
      <rect x="25" y="20" width="20" height="3" rx="1.5" fill="#ccc" />
      <rect x="70" y="20" width="20" height="3" rx="1.5" fill="#ccc" />
      <rect x="115" y="20" width="20" height="3" rx="1.5" fill="#ccc" />
      
      {/* Store shelves */}
      <rect x="25" y="35" width="30" height="40" rx="2" fill="#f0f0f0" stroke="#ddd" />
      <rect x="65" y="35" width="30" height="40" rx="2" fill="#f0f0f0" stroke="#ddd" />
      <rect x="105" y="35" width="30" height="40" rx="2" fill="#f0f0f0" stroke="#ddd" />
      
      {/* Store entrance */}
      <rect x="50" y="85" width="60" height="15" fill="#fff" stroke="#232f3e" strokeWidth="2.5" />
      <path d="M50 85 L110 85" stroke="#232f3e" strokeWidth="1.5" strokeDasharray="3,2" />
      
      {/* Digital gates */}
      <rect x="47" y="80" width="4" height="20" rx="1" fill="#FF9900" />
      <rect x="109" y="80" width="4" height="20" rx="1" fill="#FF9900" />
      <rect x="47" y="80" width="4" height="6" fill="#FF9900" opacity="0.6" />
      <rect x="109" y="80" width="4" height="6" fill="#FF9900" opacity="0.6" />
      
      {/* Person walking out with shopping bag */}
      <circle cx="80" cy="75" r="6" fill="#232f3e" />
      <path d="M80 81 L80 95 M75 85 L85 85 M80 95 L75 105 M80 95 L85 105" stroke="#232f3e" strokeWidth="2.5" />
      <path d="M90 85 C90 80 85 78 85 83 L85 90 L75 90 L75 83 C75 78 70 80 70 85" fill="none" stroke="#FF9900" strokeWidth="2.5" />
      
      {/* Shopping items in bag (implied) */}
      <rect x="72" y="86" width="16" height="3" rx="1" fill="#FF9900" />
      
      {/* Digital sensors */}
      <circle cx="47" cy="78" r="1.5" fill="#00ccff" />
      <circle cx="109" cy="78" r="1.5" fill="#00ccff" />
      
      {/* QR/Scanner symbols */}
      <rect x="114" y="25" width="16" height="16" rx="2" fill="#fff" stroke="#FF9900" strokeWidth="1.5" />
      <path d="M117 28 h6 v6 h-6 z M126 28 h2 v2 h-2 z M117 36 h2 v2 h-2 z M126 36 h4 v4 h-4 z" fill="#FF9900" />
      
      {/* Shopping items on shelves */}
      <rect x="28" y="40" width="8" height="5" rx="1" fill="#FF9900" opacity="0.7" />
      <rect x="38" y="40" width="10" height="6" rx="1" fill="#FF9900" opacity="0.8" />
      <rect x="30" y="50" width="9" height="7" rx="1" fill="#FF9900" opacity="0.6" />
      <rect x="42" y="50" width="7" height="5" rx="1" fill="#FF9900" opacity="0.9" />
      <rect x="31" y="62" width="11" height="4" rx="1" fill="#FF9900" opacity="0.7" />
      
      <rect x="68" y="40" width="9" height="6" rx="1" fill="#FF9900" opacity="0.8" />
      <rect x="80" y="40" width="10" height="5" rx="1" fill="#FF9900" opacity="0.7" />
      <rect x="70" y="50" width="8" height="7" rx="1" fill="#FF9900" opacity="0.6" />
      <rect x="82" y="52" width="9" height="5" rx="1" fill="#FF9900" opacity="0.8" />
      <rect x="72" y="62" width="12" height="5" rx="1" fill="#FF9900" opacity="0.7" />
      
      <rect x="108" y="40" width="9" height="5" rx="1" fill="#FF9900" opacity="0.7" />
      <rect x="120" y="40" width="10" height="6" rx="1" fill="#FF9900" opacity="0.8" />
      <rect x="110" y="50" width="8" height="7" rx="1" fill="#FF9900" opacity="0.9" />
      <rect x="122" y="50" width="7" height="5" rx="1" fill="#FF9900" opacity="0.6" />
      <rect x="111" y="62" width="12" height="4" rx="1" fill="#FF9900" opacity="0.8" />
      
      {/* Mobile phone with app */}
      <rect x="30" y="95" width="10" height="18" rx="2" fill="#333" />
      <rect x="31" y="97" width="8" height="14" rx="1" fill="#fff" />
      <rect x="33" y="99" width="4" height="4" rx="1" fill="#FF9900" opacity="0.8" />
      <rect x="33" y="104" width="4" height="1" rx="0.5" fill="#333" />
      <rect x="33" y="106" width="4" height="1" rx="0.5" fill="#333" />
      <rect x="33" y="108" width="4" height="1" rx="0.5" fill="#333" />
      
      {/* Just Walk Out text banner */}
      <rect x="6" y="5" width="150" height="16" rx="6" fill="#232f3e" />
      <text x="81" y="16" textAnchor="middle" fill="#FF9900" fontWeight="bold" fontSize="9">JUST WALK OUT TECHNOLOGY</text>
      
      {/* Quality Assurance icon */}
      <circle cx="135" cy="95" r="10" fill="#fff" stroke="#FF9900" strokeWidth="1.5" />
      <path d="M130 95 L134 99 L140 91" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
};

export default JustWalkOutIcon;