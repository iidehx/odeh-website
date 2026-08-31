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

export function UsersIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20" />
      <circle cx="9.5" cy="8" r="3.25" />
      <path d="M15.5 6.2a3 3 0 0 1 0 5.9M19 20v-1.5a3 3 0 0 0-2.1-2.87" />
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

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.7L4 16.3V20h3.7l5.3-5.3a4 4 0 0 0 4.7-5.4l-2.6 2.6-2-2Z" />
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

export function LayersIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
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

export function UploadIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 15.5V4.5M8 8.3 12 4.3l4 4M5 16.5v2A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5v-2" />
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

export function LeafIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M5 19c0-8.5 5-14 14-14 0 9-5.5 14-14 14Z" />
      <path d="M5 19c3-4 6-6.5 9-9" />
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

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 3.5c.5 3 2 4.5 5 5-3 .5-4.5 2-5 5-.5-3-2-4.5-5-5 3-.5 4.5-2 5-5Z" />
      <path d="M18.5 15c.3 1.4 1 2.1 2.4 2.4-1.4.3-2.1 1-2.4 2.4-.3-1.4-1-2.1-2.4-2.4 1.4-.3 2.1-1 2.4-2.4Z" />
    </svg>
  );
}

export function EarIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M8.5 20c-2-1.4-3.5-3.9-3.5-7A7 7 0 0 1 19 11.5c0 2.5-1.5 3.7-3 4.8-1 .8-1.5 1.5-1.5 2.7a2.5 2.5 0 0 1-5 0" />
      <path d="M11.5 14.5a2 2 0 1 0 0-4" />
    </svg>
  );
}
