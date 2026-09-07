import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Clinic Accounting | Omar Odeh, CPA",
  description:
    "Omar Odeh, CPA specializes in bookkeeping, budgeting, tax preparation, cash flow, and business management for dental clinics. Contact us today.",
  keywords: [
    "dental clinic accountant",
    "dental CPA",
    "bookkeeping for dental clinics",
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
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and business management built for dental clinics.",
    url: "/dental",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and business management built for dental clinics.",
  },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/dental", label: "Home" },
  { href: "/dental#services", label: "Services" },
  { href: "/dental#about", label: "About" },
];

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA — Dental Clinic Accounting",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management for dental clinics.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com/dental",
    areaServed: "US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav homeHref="/dental" links={links} ctaHref="/dental/contact" />
      <main className="flex-1">{children}</main>
      <Footer
        description="Specialized accounting for dental clinics — bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management."
        privacyHref="/dental/privacy"
        termsHref="/dental/terms"
      />
    </>
  );
}
