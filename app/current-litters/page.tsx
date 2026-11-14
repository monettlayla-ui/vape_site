import { PageHeader } from "@/components/layout/PageHeader";
import { LitterCard } from "@/components/sections/LitterCard";
import { getProducts } from "@/lib/products";

export default function CurrentLittersPage() {
  const kittens = getProducts("current-litters");

  return (
    <main className="flex-1">
      <PageHeader
        title="Our Current Litters"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Current Litters" }]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 gap-y-16 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {kittens.map((kitten) => (
            <LitterCard
              key={kitten.id}
              product={kitten}
              href={`/current-litters/${kitten.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
