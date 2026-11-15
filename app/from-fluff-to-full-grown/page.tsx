import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { JourneyBrowser } from "@/components/sections/JourneyBrowser";
import { getJourneyProfiles } from "@/lib/journey";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "From Fluff to Full Grown: Maine Coon Growth Journeys",
  description:
    "Watch our Maine Coon kittens grow from tiny bundles of fluff into full-grown adults, with photo journeys for each cat.",
  alternates: { canonical: "/from-fluff-to-full-grown" },
};

const CATEGORIES = ["current-litters", "studs", "queens", "graduates"];

function findHref(journeyId: string): string | undefined {
  for (const category of CATEGORIES) {
    const exists = getProducts(category).some((p) => p.id === journeyId);
    if (exists) {
      const base =
        category === "current-litters"
          ? `/current-litters/${journeyId}`
          : `/our-coons/${category}/${journeyId}`;
      return `${base}?journey=1`;
    }
  }
  return undefined;
}

export default function JourneyPage() {
  const entries = getJourneyProfiles()
    .map((profile) => ({ profile, href: findHref(profile.id) }))
    .filter((entry): entry is { profile: typeof entry.profile; href: string } =>
      Boolean(entry.href)
    );

  return (
    <main className="flex-1">
      <PageHeader
        title="From Fluff to Full Grown"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Their Journey" }]}
      />

      <section className="bg-[#f7f7f7] px-6 pb-14 text-center">
        <p className="mx-auto max-w-[900px] font-nav leading-relaxed text-nav-ink/90">
          See how our beautiful kittens develop from tiny bundles of fluff
          into elegant young cats and full-grown adults. This page gives you
          a visual journey through each cat&apos;s growth, helping you
          understand how features, coat, colouring, and personality can
          evolve over time. Each profile includes the cat&apos;s name, a
          short description, and images from important stages such as
          kitten, young cat, adolescent, and adult, giving future owners a
          clearer picture of what to expect as their kitten matures.
        </p>
      </section>

      <JourneyBrowser entries={entries} />
    </main>
  );
}
