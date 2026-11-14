import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import type { BlogPost } from "@/lib/blog";

export function BlogDetail({
  post,
  otherPosts,
  prev,
  next,
}: {
  post: BlogPost;
  otherPosts: BlogPost[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}) {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <nav aria-label="Breadcrumb" className="font-nav">
          <Link href="/" className="text-nav-ink/50 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-nav-accent">&gt;</span>
          <Link href="/blogs" className="text-nav-ink/50 hover:underline">
            Blogs
          </Link>
          <span className="mx-2 text-nav-accent">&gt;</span>
          <span className="font-bold text-nav-ink">{post.title}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <h1 className="bg-[linear-gradient(-45deg,#2A1510_0%,#D97A3F_40%,#2A1510_100%)] bg-clip-text font-script text-3xl leading-tight text-transparent md:text-4xl">
              {post.title}
            </h1>

            <p className="mt-4 font-nav text-sm text-nav-ink/50">
              Posted: {post.postedDate}
            </p>

            <div className="mt-4 h-[3px] w-28 bg-[linear-gradient(90deg,#2A1510_0%,#D97A3F_100%)]" />

            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg bg-nav-ink/5 lg:hidden">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 font-nav leading-relaxed text-nav-ink/90">
              {post.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {post.sections.map((section, index) => (
              <div key={index} className="mt-8">
                <h2 className="font-nav text-2xl font-semibold text-nav-ink">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-4 font-nav leading-relaxed text-nav-ink/90">
                  {section.blocks.map((block, i) =>
                    block.type === "p" ? (
                      <p key={i}>{block.text}</p>
                    ) : (
                      <ul key={i} className="list-disc pl-6">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </div>
            ))}

            <div className="mt-8">
              <h2 className="font-nav text-2xl font-semibold text-nav-ink">
                Final thought
              </h2>
              <p className="mt-3 font-nav leading-relaxed text-nav-ink/90">
                {post.finalThought}
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-nav-ink/5">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 300px, 90vw"
                className="object-cover"
              />
            </div>

            <h3 className="mt-8 font-script text-3xl text-nav-ink">
              Latest Posts
            </h3>

            <div className="mt-4 flex flex-col">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blogs/${other.slug}`}
                  className="flex items-center gap-4 border-b border-nav-ink/10 py-3 last:border-b-0"
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-nav-ink/5">
                    <Image
                      src={other.heroImage}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <p className="line-clamp-1 font-nav text-nav-accent hover:underline">
                    {other.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {(prev || next) && (
          <div className="mt-12 flex items-center justify-between border-t border-nav-ink/10 pt-6 font-nav font-bold text-nav-ink/60">
            {prev ? (
              <Link
                href={`/blogs/${prev.slug}`}
                className="inline-flex items-center gap-1 transition-colors hover:text-nav-ink"
              >
                <ChevronLeftIcon className="h-4 w-4" /> Prev
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/blogs/${next.slug}`}
                className="inline-flex items-center gap-1 transition-colors hover:text-nav-ink"
              >
                Next <ChevronRightIcon className="h-4 w-4" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
