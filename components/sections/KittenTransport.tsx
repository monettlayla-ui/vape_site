import Image from "next/image";
import Link from "next/link";
import { PinIcon } from "@/components/icons/PinIcon";
import { getBlogPosts } from "@/lib/blog";
import { FaqAccordion } from "./FaqAccordion";

const LOCATIONS = [
  "Brisbane & regional Queensland",
  "Sydney, Newcastle & NSW",
  "Melbourne & Victoria",
  "Adelaide & South Australia",
  "Perth & Western Australia",
  "Canberra & ACT",
  "Plus many more locations across Australia",
];

export function KittenTransport() {
  return (
    <section className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-script text-4xl text-nav-ink md:text-5xl">
            Bringing Your Kitten Home
          </h2>

          <div className="mt-5 h-[3px] w-28 bg-[linear-gradient(90deg,#2A1510_0%,#D97A3F_100%)]" />

          <p className="mt-6 font-nav text-xl font-bold text-nav-ink">
            Trusted Transport options for interstate families and regional
            areas
          </p>

          <p className="mt-4 font-nav leading-relaxed text-nav-ink/90">
            Not in Brisbane? No problem. We regularly help organise safe,
            reliable transport for Maine Coon kittens to homes across
            Australia. We&apos;ll explain the process clearly and help you
            understand timing, travel arrangements, and what to expect on
            collection or delivery day.
          </p>

          <p className="mt-6 font-nav font-bold text-nav-ink">
            We regularly send Maine Coon kittens to loving homes in:
          </p>

          <ul className="mt-2">
            {LOCATIONS.map((location) => (
              <li
                key={location}
                className="flex items-center gap-3 border-b border-nav-ink/10 py-3 font-nav text-nav-ink/90"
              >
                <PinIcon className="h-5 w-5 shrink-0 text-nav-accent" />
                {location}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-nav leading-relaxed text-nav-ink/90">
            Your kitten will travel safely in a climate-controlled cabin,
            with care taken every step of the way to ensure a smooth and
            comfortable journey.
          </p>
        </div>

        <div className="rounded-2xl bg-[linear-gradient(135deg,#D97A3F_0%,#7A2E1D_60%,#2A1510_100%)] p-8 text-white shadow-2xl md:p-10">
          <h3 className="font-nav text-3xl font-bold">Latest Blogs &amp; News</h3>

          <div className="mt-4 flex flex-col">
            {getBlogPosts().map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="flex flex-col items-center gap-4 border-b border-white/20 py-6 text-center transition-opacity last:border-b-0 hover:opacity-80 sm:flex-row sm:py-4 sm:text-left"
              >
                <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full bg-white/10 sm:h-12 sm:w-12">
                  <Image
                    src={post.heroImage}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 48px, 160px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-nav text-sm text-white/70">
                    Posted: {post.postedDate}
                  </p>
                  <p className="font-nav font-bold leading-snug">
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <h3 className="mt-8 font-nav text-3xl font-bold">
            Popular Questions
          </h3>

          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
