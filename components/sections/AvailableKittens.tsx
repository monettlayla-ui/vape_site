import Link from "next/link";
import { PawIcon } from "@/components/icons/PawIcon";
import { CatCard } from "./CatCard";

const KITTENS = [
  {
    name: "Light Black Silver Girl",
    image:
      "/categories/current-litters/products/light-black-silver-girl/images/01.jpg",
    href: "/current-litters/light-black-silver-girl",
  },
  {
    name: "Black Silver Tortie Girl",
    image:
      "/categories/current-litters/products/black-silver-tortie/images/01.jpg",
    href: "/current-litters/black-silver-tortie",
  },
  {
    name: "Black Silver Girl",
    image:
      "/categories/current-litters/products/black-silver-girl/images/01.jpg",
    href: "/current-litters/black-silver-girl",
  },
  {
    name: "Black Silver Shaded Boy #01",
    image:
      "/categories/current-litters/products/black-silver-girl-copy/images/01.jpg",
    href: "/current-litters/black-silver-girl-copy",
  },
  {
    name: "Black Silver Shaded Girl",
    image:
      "/categories/current-litters/products/black-silver-shaded-girl/images/01.jpg",
    href: "/current-litters/black-silver-shaded-girl",
  },
  {
    name: "Blue Boy",
    image: "/categories/current-litters/products/blue-boy/images/01.jpg",
    href: "/current-litters/blue-boy",
  },
  {
    name: "Black Classic Polly Girl",
    image:
      "/categories/current-litters/products/black-classic-polly-girl/images/01.jpg",
    href: "/current-litters/black-classic-polly-girl",
  },
  {
    name: "Valerian",
    image: "/categories/current-litters/products/valerian/images/01.jpg",
    href: "/current-litters/valerian",
  },
  {
    name: "Miso",
    image: "/categories/current-litters/products/miso/images/01.jpg",
    href: "/current-litters/miso",
  },
];

export function AvailableKittens() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <h2 className="bg-[linear-gradient(-45deg,#2A1510_0%,#D97A3F_40%,#2A1510_100%)] bg-clip-text font-script text-5xl text-transparent md:text-6xl">
          Our Available Kittens
        </h2>

        <p className="mt-6 font-nav text-lg leading-relaxed text-nav-ink/90">
          As a Brisbane-based Maine Coon breeder, we raise affectionate
          kittens for pet homes throughout Australia. Whether you&apos;re
          local to Brisbane or elsewhere in Australia, we&apos;re here to
          help you find the right match.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap justify-center gap-x-14 gap-y-20 px-6">
        {KITTENS.map((kitten) => (
          <div key={kitten.name} className="w-[260px]">
            <CatCard
              {...kitten}
              bold={false}
              ctaLabel="Read more"
              showArrow={false}
            />
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center px-6">
        <Link
          href="/current-litters"
          className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-8 py-4 font-nav text-lg text-white transition-opacity hover:opacity-90"
        >
          <PawIcon className="h-5 w-5" />
          View Current Kittens
        </Link>
      </div>
    </section>
  );
}
