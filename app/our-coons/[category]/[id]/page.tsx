import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { InquirySection } from "@/components/sections/InquirySection";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { getProducts } from "@/lib/products";

const CATEGORIES: Record<string, string> = {
  studs: "Studs",
  queens: "Queens",
  graduates: "Graduates",
};

export function generateStaticParams() {
  return Object.keys(CATEGORIES).flatMap((category) =>
    getProducts(category).map((product) => ({ category, id: product.id }))
  );
}

async function CoonContent({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; id: string }>;
  searchParams: Promise<{ journey?: string }>;
}) {
  const { category, id } = await params;
  const { journey } = await searchParams;
  const categoryLabel = CATEGORIES[category];

  if (!categoryLabel) notFound();

  const products = getProducts(category);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) notFound();

  const product = products[index];
  const prevProduct = products[index - 1];
  const nextProduct = products[index + 1];

  return (
    <>
      <PageHeader
        title={product.title}
        align="left"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Maine Coons", href: "/our-coons" },
          { label: categoryLabel, href: `/our-coons/${category}` },
          { label: product.title },
        ]}
      />

      <ProductDetail product={product} showJourney={journey === "1"} />

      <InquirySection
        prev={
          prevProduct
            ? { href: `/our-coons/${category}/${prevProduct.id}`, label: prevProduct.title }
            : undefined
        }
        next={
          nextProduct
            ? { href: `/our-coons/${category}/${nextProduct.id}`, label: nextProduct.title }
            : undefined
        }
      />
    </>
  );
}

export default function CoonPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; id: string }>;
  searchParams: Promise<{ journey?: string }>;
}) {
  return (
    <main className="flex-1">
      <Suspense fallback={null}>
        <CoonContent params={params} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
