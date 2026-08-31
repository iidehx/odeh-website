export default function DentalHeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration representing modern dental care"
    >
      <defs>
        <pattern
          id="dental-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#cbd5e1" />
        </pattern>
        <linearGradient id="dental-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="480" rx="24" fill="#f8fafc" />
      <rect
        x="24"
        y="24"
        width="180"
        height="180"
        rx="20"
        fill="url(#dental-grid)"
        opacity="0.6"
      />

      <circle cx="360" cy="120" r="70" fill="#ccfbf1" />
      <circle cx="380" cy="380" r="90" fill="#e2e8f0" />

      <rect
        x="120"
        y="150"
        width="260"
        height="260"
        rx="28"
        fill="url(#dental-card)"
      />
      <g transform="translate(200,225)" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 4c-10-11-31-13-45-4-13 8-19 25-19 45 0 18 5 30 10 47 5 15 8 35 15 47 4 6 9 11 15 11 8 0 12-9 14-20 3-12 5-27 17-27s14 15 17 27c2 11 6 20 14 20 6 0 11-5 15-11 7-12 10-32 15-47 5-17 10-29 10-47 0-22-9-38-27-49-13-8-31-7-44 4Z" />
      </g>

      <rect
        x="60"
        y="330"
        width="130"
        height="90"
        rx="16"
        fill="#ffffff"
        stroke="#e2e8f0"
        strokeWidth="2"
      />
      <g transform="translate(84,354)" stroke="#0f766e" strokeWidth="3" strokeLinecap="round">
        <path d="M0 20 14 34 42 4" fill="none" />
      </g>
      <rect x="84" y="386" width="82" height="8" rx="4" fill="#cbd5e1" />
      <rect x="84" y="400" width="56" height="8" rx="4" fill="#e2e8f0" />
    </svg>
  );
}
