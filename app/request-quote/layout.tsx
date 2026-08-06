import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Freight Quote",
  description:
    "Request a freight quote from Point Freight Systems and get your shipment moving fast.",
};

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
