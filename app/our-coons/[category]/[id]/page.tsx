import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { InquirySection } from "@/components/sections/InquirySection";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}): Promise<Metadata> {
  const { category, id } = await params;
  const categoryLabel = CATEGORIES[category];
  if (!categoryLabel) return {};

  const product = getProducts(category).find((p) => p.id === id);
  if (!product) return {};

  const description =
    product.short_description ??
    product.description?.slice(0, 155) ??
    `${product.title} is one of our Maine Coon ${categoryLabel.toLowerCase()} at ${siteConfig.fullName} in Brisbane, Australia.`;

  return {
    title: `${product.title} | ${categoryLabel}`,
    description,
    alternates: { canonical: `/our-coons/${category}/${product.id}` },
    openGraph: product.images[0]
      ? { images: [`/${product.images[0].local_path}`] }
      : undefined,
  };
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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description ?? undefined,
    image: product.images.map((img) => `/${img.local_path}`),
    category: `Maine Coon ${categoryLabel}`,
    offers: {
      "@type": "Offer",
      price: product.price ?? undefined,
      priceCurrency: "AUD",
      availability:
        product.attributes.sale_status?.toLowerCase() === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      url: `${siteConfig.siteUrl}/our-coons/${category}/${product.id}`,
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />

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
