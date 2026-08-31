import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import TherapyNav from "@/components/therapy/Nav";
import TherapyFooter from "@/components/therapy/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-therapy-serif",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-therapy-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odeh Therapy | Therapy Careers & Recruitment",
  description:
    "Odeh Therapy connects physical, occupational, and speech therapy professionals with relevant job opportunities. Submit your application today.",
  keywords: [
    "Odeh Therapy",
    "Odeh Therapy Careers",
    "therapy jobs",
    "therapy recruitment",
    "therapy opportunities",
    "physical therapist jobs",
    "occupational therapist jobs",
    "speech therapist jobs",
  ],
  alternates: {
    canonical: "/therapy",
  },
  openGraph: {
    title: "Odeh Therapy | Therapy Careers & Recruitment",
    description:
      "Connecting therapy professionals with relevant opportunities in the field.",
    url: "/therapy",
    siteName: "Odeh Therapy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odeh Therapy | Therapy Careers & Recruitment",
    description:
      "Connecting therapy professionals with relevant opportunities in the field.",
  },
  robots: { index: true, follow: true },
};

export default function TherapyLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Odeh Therapy",
    description:
      "Odeh Therapy is a recruitment platform connecting therapy professionals with relevant opportunities.",
    url: "https://www.odehhealthcare.com/therapy",
  };

  return (
    <div
      className={`${lora.variable} ${nunito.variable} flex min-h-screen flex-col bg-[#fdf6ec] text-stone-900`}
      style={{ fontFamily: "var(--font-therapy-sans)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TherapyNav />
      <main className="flex-1">{children}</main>
      <TherapyFooter />
    </div>
  );
}
