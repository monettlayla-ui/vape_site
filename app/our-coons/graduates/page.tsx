import type { Metadata } from "next";
import { CategoryListing } from "@/components/sections/CategoryListing";

export const metadata: Metadata = {
  title: "Our Graduates",
  description:
    "See our Maine Coon graduates, kittens who have grown up and moved on to their loving forever homes across Australia.",
  alternates: { canonical: "/our-coons/graduates" },
};

export default function GraduatesPage() {
  return <CategoryListing categorySlug="graduates" categoryLabel="Graduates" />;
}
