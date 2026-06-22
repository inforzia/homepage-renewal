import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://inforzia.io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inforzia Homepage Renewal",
    template: "%s | Inforzia",
  },
  description:
    "Static-first corporate website built with Next.js and prepared for Netlify hosting.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inforzia Homepage Renewal",
    description:
      "Static-first corporate website built with Next.js and prepared for Netlify hosting.",
    url: "/",
    siteName: "Inforzia",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inforzia Homepage Renewal",
    description:
      "Static-first corporate website built with Next.js and prepared for Netlify hosting.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
