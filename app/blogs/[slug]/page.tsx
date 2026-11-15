import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetail } from "@/components/sections/BlogDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

function toIsoDate(postedDate: string): string | undefined {
  const cleaned = postedDate.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const parsed = new Date(cleaned);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.intro[0],
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: { images: [post.heroImage], type: "article" },
  };
}

async function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = getBlogPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const post = posts[index];
  const otherPosts = posts.filter((p) => p.slug !== slug);
  const prevPost = posts[index - 1];
  const nextPost = posts[index + 1];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.intro[0],
    image: [post.heroImage],
    datePublished: toIsoDate(post.postedDate),
    author: { "@type": "Organization", name: siteConfig.fullName },
    publisher: { "@type": "Organization", name: siteConfig.fullName },
    mainEntityOfPage: `${siteConfig.siteUrl}/blogs/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <BlogDetail
        post={post}
        otherPosts={otherPosts}
        prev={prevPost ? { slug: prevPost.slug, title: prevPost.title } : undefined}
        next={nextPost ? { slug: nextPost.slug, title: nextPost.title } : undefined}
      />
    </>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="flex-1">
      <Suspense fallback={null}>
        <BlogPostContent params={params} />
      </Suspense>
    </main>
  );
}
