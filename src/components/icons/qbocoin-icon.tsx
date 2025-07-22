import type { SVGProps } from "react";

export function QbocoinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M15.5 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M12 12h.01" />
      <path d="M12 8.5v-2" />
      <path d="M12 17.5v-2" />
    </svg>
  );
}
