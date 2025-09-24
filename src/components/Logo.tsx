"use client";
import React from "react";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DefectScan AI logo"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b4dff" />
          <stop offset="100%" stopColor="#00d6b4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="12" fill="url(#g)" />
      <circle cx="32" cy="32" r="18" fill="none" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" />
      <path d="M18 34c6-8 22-8 28 0" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="42" cy="30" r="3" fill="#ffffff" />
    </svg>
  );
}

export default Logo;

