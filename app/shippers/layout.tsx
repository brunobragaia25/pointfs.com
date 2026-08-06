import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shippers",
  description:
    "Connect with vetted carriers to transport any freight safely, transparently, and efficiently from origin to destination.",
};

export default function ShippersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
