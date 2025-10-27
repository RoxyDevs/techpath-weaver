
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      aria-label="TechPath Weaver Logo"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#logo-gradient)" stroke="hsl(var(--border))" strokeWidth="2" />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontFamily="Visage, sans-serif"
        fontSize="30"
        fill="hsl(var(--primary-foreground))"
      >
        TW
      </text>
    </svg>
  );
}
