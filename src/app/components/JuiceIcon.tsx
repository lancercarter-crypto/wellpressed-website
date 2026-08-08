import React, { useId } from 'react';

interface JuiceIconProps {
  colorFrom: string;
  colorTo: string;
  className?: string;
}

/**
 * Stand-in graphic for products that don't have a real product photo yet.
 * Swap the <img>/ImageWithFallback for real photography per-item once available.
 */
export function JuiceBottleIcon({ colorFrom, colorTo, className }: JuiceIconProps) {
  const gradientId = `juice-bottle-${useId()}`;
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colorFrom} />
          <stop offset="100%" stopColor={colorTo} />
        </linearGradient>
      </defs>
      <rect x="40" y="4" width="20" height="14" rx="4" fill="#1c1917" />
      <rect x="42" y="15" width="16" height="16" fill={`url(#${gradientId})`} stroke="#1c1917" strokeWidth="2.5" />
      <path
        d="M30 30 h40 a8 8 0 0 1 8 8 v82 a12 12 0 0 1 -12 12 h-32 a12 12 0 0 1 -12 -12 v-82 a8 8 0 0 1 8 -8 z"
        fill={`url(#${gradientId})`}
        stroke="#1c1917"
        strokeWidth="3"
      />
      <rect x="20" y="82" width="60" height="26" rx="6" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

export function ShotGlassIcon({ colorFrom, colorTo, className }: JuiceIconProps) {
  const gradientId = `shot-glass-${useId()}`;
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colorFrom} />
          <stop offset="100%" stopColor={colorTo} />
        </linearGradient>
      </defs>
      <rect x="8" y="4" width="64" height="10" rx="3" fill="#1c1917" />
      <path
        d="M14 12 h52 l-7 76 a6 6 0 0 1 -6 6 h-26 a6 6 0 0 1 -6 -6 z"
        fill={`url(#${gradientId})`}
        stroke="#1c1917"
        strokeWidth="3"
      />
    </svg>
  );
}
