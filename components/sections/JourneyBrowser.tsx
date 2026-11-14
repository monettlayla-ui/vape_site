"use client";

import { useMemo, useState } from "react";
import type { JourneyProfile } from "@/lib/journey";
import { JourneyCard } from "./JourneyCard";

type Filter = "all" | "queens" | "studs";

const TABS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "queens", label: "Queens" },
  { key: "studs", label: "Studs" },
];

export function JourneyBrowser({
  entries,
}: {
  entries: { profile: JourneyProfile; href: string }[];
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return entries;
    return entries.filter((e) => e.profile.tag?.toLowerCase() === filter);
  }, [entries, filter]);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex justify-center gap-8 font-nav">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`cursor-pointer border-b-2 pb-1 transition-colors ${
                filter === tab.key
                  ? "border-nav-accent font-bold text-nav-ink"
                  : "border-transparent text-nav-ink/50 hover:text-nav-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map(({ profile, href }) => (
            <JourneyCard key={profile.id} profile={profile} href={href} />
          ))}
        </div>
      </div>
    </section>
  );
}
