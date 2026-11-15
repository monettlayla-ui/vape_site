import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CoonsBrowser } from "@/components/sections/CoonsBrowser";
import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Maine Coons",
  description: `Meet the Maine Coon studs, queens and graduates at the heart of ${siteConfig.fullName}'s breeding program in Brisbane, Queensland.`,
  alternates: { canonical: "/our-coons" },
};

export default function OurCoonsPage() {
  const products = getAllProducts();

  return (
    <main className="flex-1">
      <PageHeader
        title={`Our ${siteConfig.fullName}`}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Maine Coons" }]}
      />

      <CoonsBrowser products={products} />
    </main>
  );
}
