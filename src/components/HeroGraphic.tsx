const motifs = {
  dental: (
    <path
      d="M50 4c-10-11-31-13-45-4-13 8-19 25-19 45 0 18 5 30 10 47 5 15 8 35 15 47 4 6 9 11 15 11 8 0 12-9 14-20 3-12 5-27 17-27s14 15 17 27c2 11 6 20 14 20 6 0 11-5 15-11 7-12 10-32 15-47 5-17 10-29 10-47 0-22-9-38-27-49-13-8-31-7-44 4Z"
      fill="none"
    />
  ),
  therapy: (
    <path
      d="M65 20c-8-16-31-21-42-7-11 14-8 32 4 44l38 32 38-32c12-12 15-30 4-44-11-14-34-9-42 7Z"
      fill="none"
    />
  ),
};

export default function HeroGraphic({ variant }: { variant: "dental" | "therapy" }) {
  return (
    <svg
      viewBox="0 0 480 480"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration representing organized practice finances and growth"
    >
      <defs>
        <pattern id="finance-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#cbd5e1" />
        </pattern>
        <linearGradient id="finance-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="480" rx="24" fill="#f8fafc" />
      <rect x="24" y="24" width="180" height="180" rx="20" fill="url(#finance-grid)" opacity="0.6" />

      <circle cx="360" cy="120" r="70" fill="#fde68a" opacity="0.55" />
      <circle cx="380" cy="380" r="90" fill="#e2e8f0" />

      <rect x="120" y="150" width="260" height="260" rx="28" fill="url(#finance-card)" />

      <g transform="translate(200,215)" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {motifs[variant]}
      </g>

      <g transform="translate(158,320)">
        <rect x="0" y="40" width="22" height="40" rx="3" fill="#b45309" />
        <rect x="32" y="25" width="22" height="55" rx="3" fill="#d97706" />
        <rect x="64" y="10" width="22" height="70" rx="3" fill="#f59e0b" />
        <rect x="96" y="0" width="22" height="80" rx="3" fill="#fbbf24" />
      </g>
    </svg>
  );
}
