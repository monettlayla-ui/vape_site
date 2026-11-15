import type { Metadata } from "next";
import { CategoryListing } from "@/components/sections/CategoryListing";

export const metadata: Metadata = {
  title: "Our Studs",
  description:
    "Meet our Maine Coon studs, the males at the heart of our breeding program, valued for health testing, temperament and striking features.",
  alternates: { canonical: "/our-coons/studs" },
};

export default function StudsPage() {
  return <CategoryListing categorySlug="studs" categoryLabel="Studs" />;
}
