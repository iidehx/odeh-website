import type { ReactNode } from "react";

export const linkClasses =
  "font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800";

export default function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
