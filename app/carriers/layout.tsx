import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freight Carriers",
  description:
    "More loads, fewer empty miles, faster pay and top-tier support. Partner with Point Freight Systems and keep your trucks rolling.",
};

export default function CarriersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
