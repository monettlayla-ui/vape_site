import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { InquirySection } from "@/components/sections/InquirySection";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getProducts("current-litters").map((kitten) => ({ id: kitten.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const kitten = getProducts("current-litters").find((k) => k.id === id);

  if (!kitten) return {};

  const description =
    kitten.short_description ??
    kitten.description?.slice(0, 155) ??
    `${kitten.title} is a Maine Coon kitten available from ${siteConfig.fullName} in Brisbane, Australia.`;

  return {
    title: kitten.title,
    description,
    alternates: { canonical: `/current-litters/${kitten.id}` },
    openGraph: kitten.images[0]
      ? { images: [`/${kitten.images[0].local_path}`] }
      : undefined,
  };
}

async function KittenContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const kittens = getProducts("current-litters");
  const index = kittens.findIndex((k) => k.id === id);

  if (index === -1) notFound();

  const kitten = kittens[index];
  const prevKitten = kittens[index - 1];
  const nextKitten = kittens[index + 1];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: kitten.title,
    description: kitten.description ?? undefined,
    image: kitten.images.map((img) => `/${img.local_path}`),
    category: "Maine Coon Kitten",
    offers: {
      "@type": "Offer",
      price: kitten.price ?? undefined,
      priceCurrency: "AUD",
      availability:
        kitten.attributes.sale_status?.toLowerCase() === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      url: `${siteConfig.siteUrl}/current-litters/${kitten.id}`,
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />

      <PageHeader
        title={kitten.title}
        align="left"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Current Litters", href: "/current-litters" },
          { label: kitten.title },
        ]}
      />

      <ProductDetail product={kitten} />

      <InquirySection
        prev={
          prevKitten
            ? { href: `/current-litters/${prevKitten.id}`, label: prevKitten.title }
            : undefined
        }
        next={
          nextKitten
            ? { href: `/current-litters/${nextKitten.id}`, label: nextKitten.title }
            : undefined
        }
      />
    </>
  );
}

export default function KittenPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="flex-1">
      <Suspense fallback={null}>
        <KittenContent params={params} />
      </Suspense>
    </main>
  );
}
