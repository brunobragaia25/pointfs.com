import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Join the Point Freight Systems team and help redefine what it means to move freight.",
};

export default function WorkWithUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
