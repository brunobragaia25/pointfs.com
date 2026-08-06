import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://www.pointfs.com";
const title = "Point Freight Systems | Where every LOAD hits the POINT.";
const description =
  "Point Freight Systems delivers comprehensive ground transportation solutions. Your Freight. Our Focus. Always on POINT.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Point Freight Systems",
  },
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Point Freight Systems",
    images: [{ url: "/images/image-hero.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/image-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
