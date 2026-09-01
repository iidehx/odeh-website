import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.omarodehcpa.com"),
  title: "Omar Odeh, CPA | Dental & Therapy Practice Accounting",
  description:
    "Omar Odeh, CPA specializes in accounting for dental and therapy practices — bookkeeping, budgeting, financial consulting, cash flow, tax preparation, and practice management.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omar Odeh, CPA | Dental & Therapy Practice Accounting",
    description:
      "Specialized accounting for dental and therapy practices.",
    url: "/",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">{children}</body>
    </html>
  );
}
