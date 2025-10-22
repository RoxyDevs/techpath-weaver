import type { SVGProps } from "react";

export function VerifiedBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Verified creator badge"
      {...props}
    >
      <path d="M11.563 3.32a2.38 2.38 0 0 1 .874 0l.283.085.282-.085a2.38 2.38 0 0 1 2.38 2.38l.085.283-.085.282a2.38 2.38 0 0 1-2.38 2.38l-.282.085.282.085a2.38 2.38 0 0 1 2.38 2.38l.085.283-.085.282a2.38 2.38 0 0 1-2.38 2.38l-.282.085.282.085a2.38 2.38 0 0 1 2.38 2.38l.085.283-.085.282a2.38 2.38 0 0 1-2.38 2.38l-.283.085-.282-.085a2.38 2.38 0 0 1-2.38-2.38l-.085-.282.085-.282a2.38 2.38 0 0 1 2.38-2.38l.282-.085-.282-.085a2.38 2.38 0 0 1-2.38-2.38l-.085-.283.085-.282a2.38 2.38 0 0 1 2.38-2.38l.283-.085-.283-.085z" fill="#F472B6" strokeWidth={0} />
      <path d="m9 12 2 2 4-4" stroke="white" strokeWidth={2.5} />
    </svg>
  );
}
