type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ToothIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 4c-1.5-1.3-3.5-1.5-5-.5C5 4.7 4 6.6 4 9c0 2 .6 3.4 1.1 5.2.5 1.7.9 3.9 1.7 5.3.4.7 1 1.2 1.7 1.2.9 0 1.3-1 1.6-2.3.3-1.3.5-3 1.9-3s1.6 1.7 1.9 3c.3 1.3.7 2.3 1.6 2.3.7 0 1.3-.5 1.7-1.2.8-1.4 1.2-3.6 1.7-5.3C19.4 12.4 20 11 20 9c0-2.4-1-4.3-3-5.5-1.5-1-3.5-.8-5 .5Z" />
    </svg>
  );
}

export function HeartHandIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 8.5c-1-2-3.8-2.6-5.2-.9-1.4 1.7-1 4 .5 5.4L12 17l4.7-4c1.5-1.4 2-3.7.5-5.4-1.4-1.7-4.2-1.1-5.2.9Z" />
    </svg>
  );
}

export function CalculatorIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}

export function PieChartIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12V3.5Z" />
      <path d="M15.5 3.9A8.5 8.5 0 0 1 20.1 8.5H15.5V3.9Z" />
    </svg>
  );
}

export function ActivityIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M3 12h4l2.5-7 4 14 2.5-7H21" />
    </svg>
  );
}

export function TrendingUpIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M3.5 16.5 9.5 10.5 13.5 14.5 20.5 7" />
      <path d="M14.5 7h6v6" />
    </svg>
  );
}

export function ReceiptIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M6 3.5h12v17l-2.5-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 20.5v-17Z" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="m3 12 4-4 4 3 3-3 3.5 3.5" />
      <path d="M14 8.5 17.5 5 21 8.5l-4.5 4.5-2-1.5" />
      <path d="M7 11 4 14l3 3 2.5-2" />
    </svg>
  );
}

export function ClipboardCheckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="6" y="4.5" width="12" height="16" rx="2" />
      <path d="M9.5 4.5V4a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 4v.5" />
      <path d="M9.5 13.5 11.25 15.25 14.75 11.25" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 3.5 5 6v5.5c0 4.4 3 7.9 7 9 4-1.1 7-4.6 7-9V6l-7-2.5Z" />
      <path d="M9 12l2.1 2.1L15.5 9.6" />
    </svg>
  );
}

export function FileTextIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M8 3.5h5.5L18 8v11.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" />
      <path d="M13.5 3.5V8H18M9.5 12.5h5M9.5 15.5h5" />
    </svg>
  );
}

export function MessageCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 4c-4.7 0-8.5 3.2-8.5 7.2 0 2.3 1.2 4.3 3.1 5.7-.1.9-.5 2.1-1.3 3.1 1.5-.1 2.9-.6 4-1.4.8.2 1.7.3 2.7.3 4.7 0 8.5-3.2 8.5-7.2S16.7 4 12 4Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function AlertCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v5M12 16h.01" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12.2 2.6 2.6 4.8-5.6" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M6.6 3.8 9.2 6.4a1.5 1.5 0 0 1-.1 2.1L7.5 10c1 2.5 3 4.5 5.5 5.5l1.5-1.6a1.5 1.5 0 0 1 2.1-.1l2.6 2.6a1.5 1.5 0 0 1 0 2.1l-1.1 1.1c-.6.6-1.5.9-2.3.6-3.4-1.1-6.5-3.1-9-5.6s-4.5-5.6-5.6-9c-.3-.8 0-1.7.6-2.3l1.1-1.1a1.5 1.5 0 0 1 2.1 0Z" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
