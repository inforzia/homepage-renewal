import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://inforzia.io";

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
        <html lang="ko">
            <head>
                <link href="https://cdn.jsdelivr.net" rel="preconnect" />
                <link
                    crossOrigin=""
                    href="https://fonts.gstatic.com"
                    rel="preconnect"
                />
                <link
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
