import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

export const metadata: Metadata = {
  title: "Omar Odeh, CPA | Accounting for Growing Businesses",
  description:
    "Omar Odeh, CPA provides bookkeeping, payroll, financial consulting, cash flow management, tax preparation, and fractional CFO services, with specialized experience in dental clinics, therapy practices, and real estate businesses.",
  keywords: [
    "Omar Odeh CPA",
    "small business accountant",
    "bookkeeping services",
    "payroll services",
    "fractional CFO",
    "business tax preparation",
    "cash flow management",
    "budgeting services",
    "financial consulting",
    "CPA near me",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omar Odeh, CPA | Accounting for Growing Businesses",
    description:
      "Bookkeeping, payroll, financial consulting, cash flow management, tax preparation, and fractional CFO services, with specialized experience in dental clinics, therapy practices, and real estate businesses.",
    url: "/",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Odeh, CPA | Accounting for Growing Businesses",
    description:
      "Bookkeeping, payroll, financial consulting, cash flow management, tax preparation, and fractional CFO services, with specialized experience in dental clinics, therapy practices, and real estate businesses.",
  },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#about", label: "About" },
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

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, payroll, fractional CFO, and business management for growing businesses.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com",
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting Services",
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
      <Nav homeHref="/" links={links} ctaHref="#industries" ctaLabel="Get Started" />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer
        description="Omar Odeh, CPA provides accounting for growing businesses, with specialized experience in dental clinics, therapy practices, and real estate businesses."
        privacyHref="/privacy"
        termsHref="/terms"
      />
    </>
  );
}
