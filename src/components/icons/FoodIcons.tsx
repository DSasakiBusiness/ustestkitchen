import React from 'react';

export const Hamburger = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6.6 9h10.8c.9 0 1.6-.7 1.6-1.6 0-2-1.7-3.4-3.5-3.4H8.5C6.7 4 5 5.4 5 7.4c0 .9.7 1.6 1.6 1.6z"/>
    <path d="M4 14h16"/>
    <path d="M4 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4H4v4z"/>
    <path d="M6 14v4"/>
    <path d="M18 14v4"/>
  </svg>
);

export const Sushi = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="10" width="16" height="8" rx="2" />
    <path d="M4 12c0-2 3-4 8-4s8 2 8 4" />
    <path d="M10 6c0-2 2-3 2-3s2 1 2 3" />
    <path d="M7 10l5-4 5 4" strokeDasharray="2 2" />
  </svg>
);

export const Ramen = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 13a8 8 0 0 0 16 0" />
    <path d="M4 13h16" />
    <path d="M7 13c0-3 1.5-5 5-5s5 2 5 5" />
    <path d="M8 8V4" />
    <path d="M16 8V4" />
    <path d="M12 8V3" />
  </svg>
);

export const Pizza = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L3 20h18L12 2z" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="10" cy="10" r="1" fill="currentColor" />
    <circle cx="14" cy="11" r="1" fill="currentColor" />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
    <path d="M12 2v6" />
  </svg>
);

export const Drink = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 4h10l-1 12a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3L7 4z" />
    <path d="M15 4V2" />
    <path d="M12 4V2" />
    <path d="M5 9h14" strokeDasharray="2 2" />
  </svg>
);

export const Steak = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 16c-1-1-2-3-2-5s2-5 5-5c3 0 4 2 6 3 3 1.5 5 1 6 0 1-1 3 0 2 2s-1.5 4-3 5-4 1-6 2c-3 1.5-6 0-8-2z" />
      <path d="M8 10c1 0 2 .5 2 1" />
      <path d="M13 13c1 0 2 .5 2 1" />
    </svg>
);

export const foodIcons = [Hamburger, Sushi, Ramen, Pizza, Drink, Steak];
