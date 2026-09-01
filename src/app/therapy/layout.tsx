import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Therapy Practice Accounting | Omar Odeh, CPA",
  description:
    "Omar Odeh, CPA specializes in bookkeeping, budgeting, tax preparation, cash flow, and practice management for physical, occupational, and speech therapy practices. Contact us today.",
  keywords: [
    "therapy practice accountant",
    "physical therapy CPA",
    "bookkeeping for therapy practices",
    "therapy practice management",
    "therapy practice tax preparation",
    "therapy practice cash flow",
  ],
  alternates: {
    canonical: "/therapy",
  },
  openGraph: {
    title: "Therapy Practice Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and practice management built for therapy practices.",
    url: "/therapy",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy Practice Accounting | Omar Odeh, CPA",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and practice management built for therapy practices.",
  },
  robots: { index: true, follow: true },
};

export default function TherapyLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Omar Odeh, CPA — Therapy Practice Accounting",
    description:
      "Bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and practice management for therapy practices.",
    email: "Odeh90@gmail.com",
    telephone: "+17142049779",
    url: "https://www.omarodehcpa.com/therapy",
    areaServed: "US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav base="/therapy" />
      <main className="flex-1">{children}</main>
      <Footer
        base="/therapy"
        description="Specialized accounting for therapy practices — bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and practice management."
      />
    </>
  );
}
