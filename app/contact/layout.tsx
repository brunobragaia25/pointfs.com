import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Point Freight Systems for quotes, support, or partnership inquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
