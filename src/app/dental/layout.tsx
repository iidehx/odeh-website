import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DentalNav from "@/components/dental/Nav";
import DentalFooter from "@/components/dental/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odeh Dental | Dental Careers & Recruitment",
  description:
    "Odeh Dental connects dentists, dental assistants, hygienists, and technicians with relevant dental job opportunities. Submit your application today.",
  keywords: [
    "Odeh Dental",
    "Odeh Dental Careers",
    "dental jobs",
    "dental recruitment",
    "dental opportunities",
    "dental hygienist jobs",
    "dental assistant jobs",
  ],
  alternates: {
    canonical: "/dental",
  },
  openGraph: {
    title: "Odeh Dental | Dental Careers & Recruitment",
    description:
      "Connecting dental professionals with relevant opportunities in the dental field.",
    url: "/dental",
    siteName: "Odeh Dental",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odeh Dental | Dental Careers & Recruitment",
    description:
      "Connecting dental professionals with relevant opportunities in the dental field.",
  },
  robots: { index: true, follow: true },
};

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Odeh Dental",
    description:
      "Odeh Dental is a recruitment platform connecting dental professionals with relevant opportunities.",
    url: "https://www.odehhealthcare.com/dental",
  };

  return (
    <div className={`${inter.className} flex min-h-screen flex-col bg-white text-slate-900`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DentalNav />
      <main className="flex-1">{children}</main>
      <DentalFooter />
    </div>
  );
}
