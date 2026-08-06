import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Point Freight Systems delivers a comprehensive portfolio of highly specialized ground transportation solutions, combining technical mastery with reliable service.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
