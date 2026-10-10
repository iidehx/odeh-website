import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

export const metadata: Metadata = {
  title: "Dental Clinic Accounting | Omar Odeh, CPA",
  description:
    "Omar Odeh, CPA specializes in bookkeeping, payroll, tax preparation, cash flow, and fractional CFO services for dental clinics. Contact us today.",
  keywords: [
    "dental clinic accountant",
    "dental CPA",
    "bookkeeping for dental clinics",
    "dental clinic payroll",
    "fractional CFO for dental clinics",
    "dental clinic management",
    "dental clinic tax preparation",
    "dental clinic cash flow",
    "dental practice accountant",
  ],
  alternates: {
    canonical: "/dental",
  },
  openGraph: {
    title: "Dental Clinic Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, payroll, fractional CFO, and business management built for dental clinics.",
    url: "/dental",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, payroll, fractional CFO, and business management built for dental clinics.",
  },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/dental", label: "Home" },
  { href: "/dental#services", label: "Services" },
  { href: "/dental#about", label: "About" },
];

const SERVICE_NAMES = [
  "Bookkeeping",
  "Budgeting",
  "Financial Consulting",
  "Cash Flow Management",
  "Tax Preparation",
  "Payroll",
  "Fractional CFO",
  "Business Management",
];

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA — Dental Clinic Accounting",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, payroll, fractional CFO, and business management for dental clinics.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com/dental",
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting Services for Dental Clinics",
      itemListElement: SERVICE_NAMES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkipLink />
      <Nav homeHref="/dental" links={links} ctaHref="/dental/contact" />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer
        description="Specialized accounting for dental clinics — bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, payroll, fractional CFO, and business management."
        privacyHref="/dental/privacy"
        termsHref="/dental/terms"
      />
    </>
  );
}
