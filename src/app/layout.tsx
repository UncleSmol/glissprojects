import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.glissprojectssa.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gliss Projects SA Pty Ltd | Mining and Industrial Services",
    template: "%s | Gliss Projects SA",
  },
  description:
    "Mining, industrial supply, maintenance, construction, and project solutions for operations in eMalahleni and across South Africa.",
  applicationName: "Gliss Projects SA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Gliss Projects SA Pty Ltd",
    title: "Gliss Projects SA Pty Ltd | Mining and Industrial Services",
    description:
      "Mining, industrial supply, maintenance, construction, and project solutions for South African operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={geistSans.variable} suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
