"use client";

import { useMemo, useState } from "react";
import { LitterCard } from "@/components/sections/LitterCard";
import type { Product } from "@/lib/products";

type Filter = "all" | "male" | "female" | "current-litters" | "graduates" | "queens" | "studs";

const TABS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "male", label: "Male" },
  { key: "female", label: "Female" },
  { key: "current-litters", label: "Current Litters" },
  { key: "graduates", label: "Graduates" },
  { key: "queens", label: "Queens" },
  { key: "studs", label: "Studs" },
];

export function CoonsBrowser({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (filter === "male" || filter === "female") {
        if (product.attributes.gender?.toLowerCase() !== filter) return false;
      } else if (filter !== "all") {
        if (product.categories[0]?.slug !== filter) return false;
      }

      if (search.trim()) {
        if (!product.title.toLowerCase().includes(search.trim().toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [products, filter, search]);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-4 border-b border-nav-ink/10 pb-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6 font-nav">
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

          <div className="relative w-full md:w-64">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-nav-ink/40"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-md bg-[#f2f2f2] py-2.5 pl-9 pr-4 font-nav text-sm text-nav-ink outline-none placeholder:text-nav-ink/40"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center font-nav text-nav-ink/60">
            No matches found.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product) => {
              const categorySlug = product.categories[0]?.slug ?? "";
              const href =
                categorySlug === "current-litters"
                  ? `/current-litters/${product.id}`
                  : `/our-coons/${categorySlug}/${product.id}`;

              return (
                <LitterCard
                  key={`${categorySlug}-${product.id}`}
                  product={product}
                  href={href}
                  showDescription={false}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
