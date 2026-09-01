import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Practice Accounting | Omar Odeh, CPA",
  description:
    "Omar Odeh, CPA specializes in bookkeeping, budgeting, tax preparation, cash flow, and practice management for dental practices. Contact us today.",
  keywords: [
    "dental practice accountant",
    "dental CPA",
    "bookkeeping for dental practices",
    "dental practice management",
    "dental practice tax preparation",
    "dental practice cash flow",
  ],
  alternates: {
    canonical: "/dental",
  },
  openGraph: {
    title: "Dental Practice Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and practice management built for dental practices.",
    url: "/dental",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Practice Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and practice management built for dental practices.",
  },
  robots: { index: true, follow: true },
};

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA — Dental Practice Accounting",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and practice management for dental practices.",
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
      <Nav base="/dental" />
      <main className="flex-1">{children}</main>
      <Footer
        base="/dental"
        description="Specialized accounting for dental practices — bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and practice management."
      />
    </>
  );
}
