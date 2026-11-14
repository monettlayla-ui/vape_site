import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { InquirySection } from "@/components/sections/InquirySection";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { getProducts } from "@/lib/products";

export function generateStaticParams() {
  return getProducts("current-litters").map((kitten) => ({ id: kitten.id }));
}

async function KittenContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const kittens = getProducts("current-litters");
  const index = kittens.findIndex((k) => k.id === id);

  if (index === -1) notFound();

  const kitten = kittens[index];
  const prevKitten = kittens[index - 1];
  const nextKitten = kittens[index + 1];

  return (
    <>
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
