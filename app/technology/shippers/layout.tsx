import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology for Shippers",
  description:
    "See how Point Freight Systems' shipper platform gives you real-time visibility and control over every shipment.",
};

export default function TechnologyShippersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
