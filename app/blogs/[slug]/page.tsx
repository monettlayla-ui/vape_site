import { Suspense } from "react";
import { notFound } from "next/navigation";
import { BlogDetail } from "@/components/sections/BlogDetail";
import { getBlogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
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

  return (
    <BlogDetail
      post={post}
      otherPosts={otherPosts}
      prev={prevPost ? { slug: prevPost.slug, title: prevPost.title } : undefined}
      next={nextPost ? { slug: nextPost.slug, title: nextPost.title } : undefined}
    />
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
