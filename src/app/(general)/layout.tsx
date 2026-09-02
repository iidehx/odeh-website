import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Omar Odeh, CPA | Accounting for Growing Businesses",
  description:
    "Omar Odeh, CPA provides bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management, with specialized experience in dental, therapy, and real estate.",
  keywords: [
    "Omar Odeh CPA",
    "small business accountant",
    "bookkeeping services",
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
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management, with specialized experience in dental, therapy, and real estate.",
    url: "/",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Odeh, CPA | Accounting for Growing Businesses",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management, with specialized experience in dental, therapy, and real estate.",
  },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#about", label: "About" },
];

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management for growing businesses.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com",
    areaServed: "US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav homeHref="/" links={links} ctaHref="#industries" ctaLabel="Get Started" />
      <main className="flex-1">{children}</main>
      <Footer
        description="Omar Odeh, CPA provides accounting for growing businesses, with specialized experience in dental, therapy, and real estate."
        privacyHref="/privacy"
        termsHref="/terms"
      />
    </>
  );
}
