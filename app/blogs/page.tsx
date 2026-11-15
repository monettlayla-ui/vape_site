import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blogs & News",
  description:
    "Breeder insights, buyer guides and Maine Coon care tips covering health, pricing, growth stages and what to expect when bringing home a kitten.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  const posts = getBlogPosts();

  return (
    <main className="flex-1">
      <PageHeader
        title="Blogs & News"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-nav-ink/5">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-nav text-sm text-nav-ink/50">
                Posted: {post.postedDate}
              </p>
              <h2 className="mt-1 font-nav text-xl font-bold leading-snug text-nav-ink">
                {post.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
