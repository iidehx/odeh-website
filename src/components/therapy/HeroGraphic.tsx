export default function TherapyHeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration representing warmth and care in therapy"
    >
      <defs>
        <linearGradient id="therapy-blob" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c2703d" />
          <stop offset="100%" stopColor="#9a5730" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="480" rx="32" fill="#fdf6ec" />
      <circle cx="120" cy="110" r="90" fill="#e8d9c3" opacity="0.7" />
      <circle cx="390" cy="360" r="80" fill="#d9e4d3" />

      <path
        d="M240 90c70 0 140 45 140 130s-70 170-140 170S100 305 100 220 170 90 240 90Z"
        fill="url(#therapy-blob)"
      />

      <g transform="translate(175,175)" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M65 20c-8-16-31-21-42-7-11 14-8 32 4 44l38 32 38-32c12-12 15-30 4-44-11-14-34-9-42 7Z" />
      </g>

      <rect
        x="60"
        y="320"
        width="150"
        height="100"
        rx="24"
        fill="#ffffff"
        stroke="#e7ddcf"
        strokeWidth="2"
      />
      <g transform="translate(88,348)" stroke="#9a5730" strokeWidth="3" strokeLinecap="round">
        <path d="M5 25c8-18 18-25 25-25s10 30 20 30 10-20 22-20 15 10 22 10" fill="none" />
      </g>
      <rect x="88" y="392" width="90" height="8" rx="4" fill="#e7ddcf" />
    </svg>
  );
}
