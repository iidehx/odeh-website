import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

export const metadata: Metadata = {
  title: "ABA & Therapy Practice Accounting | Omar Odeh, CPA",
  description:
    "Omar Odeh, CPA specializes in bookkeeping, payroll, tax preparation, cash flow, and fractional CFO services for ABA, physical, occupational, and speech therapy practices. Contact us today.",
  keywords: [
    "ABA therapy accountant",
    "ABA practice bookkeeping",
    "therapy practice accountant",
    "physical therapy CPA",
    "bookkeeping for therapy practices",
    "therapy practice payroll",
    "fractional CFO for therapy practices",
    "therapy practice tax preparation",
    "therapy practice cash flow",
  ],
  alternates: {
    canonical: "/therapy",
  },
  openGraph: {
    title: "ABA & Therapy Practice Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, payroll, fractional CFO, and business management built for ABA and therapy practices.",
    url: "/therapy",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABA & Therapy Practice Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, payroll, fractional CFO, and business management built for ABA and therapy practices.",
  },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/therapy", label: "Home" },
  { href: "/therapy#services", label: "Services" },
  { href: "/therapy#about", label: "About" },
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

export default function TherapyLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA — ABA & Therapy Practice Accounting",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, payroll, fractional CFO, and business management for ABA, physical, occupational, and speech therapy practices.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com/therapy",
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting Services for Therapy Practices",
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
      <Nav homeHref="/therapy" links={links} ctaHref="/therapy/contact" />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer
        description="Specialized accounting for ABA and therapy practices — bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, payroll, fractional CFO, and business management."
        privacyHref="/therapy/privacy"
        termsHref="/therapy/terms"
      />
    </>
  );
}
