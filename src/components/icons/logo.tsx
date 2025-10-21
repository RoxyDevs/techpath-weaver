import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="100"
      height="20"
      aria-label="Tech Path Weaver Logo"
      {...props}
    >
      <style>
        {`
          .logo-text {
            font-family: 'Belleza', sans-serif;
            font-size: 18px;
            fill: hsl(var(--foreground));
          }
          .logo-highlight {
            fill: hsl(var(--primary));
          }
        `}
      </style>
      <text x="0" y="15" className="logo-text">
        Tech<tspan className="logo-highlight font-headline">P</tspan>ath
        Weaver
      </text>
    </svg>
  );
}
