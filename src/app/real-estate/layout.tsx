import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

export const metadata: Metadata = {
  title: "Real Estate Accounting | Omar Odeh, CPA",
  description:
    "Omar Odeh, CPA specializes in bookkeeping, payroll, tax preparation, cash flow, and fractional CFO services for real estate agents, brokers, and real estate businesses. Contact us today.",
  keywords: [
    "real estate accountant",
    "real estate CPA",
    "bookkeeping for real estate agents",
    "real estate agent payroll",
    "fractional CFO for real estate",
    "real estate business management",
    "real estate tax preparation",
    "1099 tax accountant real estate",
    "real estate cash flow",
  ],
  alternates: {
    canonical: "/real-estate",
  },
  openGraph: {
    title: "Real Estate Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, payroll, fractional CFO, and business management built for real estate businesses.",
    url: "/real-estate",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, payroll, fractional CFO, and business management built for real estate businesses.",
  },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/real-estate", label: "Home" },
  { href: "/real-estate#services", label: "Services" },
  { href: "/real-estate#about", label: "About" },
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

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA — Real Estate Accounting",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, payroll, fractional CFO, and business management for real estate agents, brokers, and real estate businesses.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com/real-estate",
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting Services for Real Estate Professionals",
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
      <Nav homeHref="/real-estate" links={links} ctaHref="/real-estate/contact" />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer
        description="Specialized accounting for real estate professionals — bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, payroll, fractional CFO, and business management."
        privacyHref="/real-estate/privacy"
        termsHref="/real-estate/terms"
      />
    </>
  );
}
