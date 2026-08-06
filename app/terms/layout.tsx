import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using Point Freight Systems' services.",
  robots: { index: false, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
