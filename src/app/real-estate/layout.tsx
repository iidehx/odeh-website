import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Real Estate Accounting | Omar Odeh, CPA",
  description:
    "Omar Odeh, CPA specializes in bookkeeping, budgeting, tax preparation, cash flow, and business management for real estate agents, brokers, and real estate businesses. Contact us today.",
  keywords: [
    "real estate accountant",
    "real estate CPA",
    "bookkeeping for real estate agents",
    "real estate business management",
    "real estate tax preparation",
    "real estate cash flow",
  ],
  alternates: {
    canonical: "/real-estate",
  },
  openGraph: {
    title: "Real Estate Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and business management built for real estate businesses.",
    url: "/real-estate",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and business management built for real estate businesses.",
  },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/real-estate", label: "Home" },
  { href: "/real-estate#services", label: "Services" },
  { href: "/real-estate#about", label: "About" },
];

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA — Real Estate Accounting",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management for real estate agents, brokers, and real estate businesses.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com/real-estate",
    areaServed: "US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav homeHref="/real-estate" links={links} ctaHref="/real-estate/contact" />
      <main className="flex-1">{children}</main>
      <Footer
        description="Specialized accounting for real estate professionals — bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management."
        privacyHref="/real-estate/privacy"
        termsHref="/real-estate/terms"
      />
    </>
  );
}
