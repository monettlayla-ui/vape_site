import type { Metadata } from "next";
import { CategoryListing } from "@/components/sections/CategoryListing";

export const metadata: Metadata = {
  title: "Our Queens",
  description:
    "Meet our Maine Coon queens, the mothers of our litters, selected for health, temperament and confident nature.",
  alternates: { canonical: "/our-coons/queens" },
};

export default function QueensPage() {
  return <CategoryListing categorySlug="queens" categoryLabel="Queens" />;
}
