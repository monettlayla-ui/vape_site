import { PageHeader } from "@/components/layout/PageHeader";
import { LitterCard } from "@/components/sections/LitterCard";
import { getProducts } from "@/lib/products";

export function CategoryListing({
  categorySlug,
  categoryLabel,
}: {
  categorySlug: string;
  categoryLabel: string;
}) {
  const products = getProducts(categorySlug);

  return (
    <main className="flex-1">
      <PageHeader
        title={`Our ${categoryLabel}`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Maine Coons", href: "/our-coons" },
          { label: categoryLabel },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 gap-y-16 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <LitterCard
              key={product.id}
              product={product}
              href={`/our-coons/${categorySlug}/${product.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
