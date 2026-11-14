import { siteConfig } from "@/lib/site-config";
import { PolaroidCarousel } from "./PolaroidCarousel";

export function Welcome() {
  return (
    <section className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-script text-4xl leading-[1.25] text-nav-ink md:text-5xl">
            Welcome to
            <br />
            {siteConfig.fullName}
          </h2>

          <p className="mt-4 font-nav text-lg text-nav-ink">
            Breeder of Quality European Giant Maine Coons.
          </p>

          <div className="mt-5 h-[3px] w-28 bg-[linear-gradient(90deg,#2A1510_0%,#D97A3F_100%)]" />

          <p className="mt-6 font-nav leading-relaxed text-nav-ink/90">
            {siteConfig.fullName} is a Maine Coon breeder in Brisbane,
            Queensland, offering pedigree Maine Coon kittens for sale
            Australia-wide. Maine Coons are known for their gentle nature,
            impressive size, and affectionate personalities, making them a
            popular choice for families, singles, and quieter households
            alike.
          </p>

          <p className="mt-4 font-nav leading-relaxed text-nav-ink/90">
            Our kittens are placed as pets only and are not offered for
            breeding. We&apos;re happy to answer your questions, share
            updates, and guide you through availability and timing.
          </p>
        </div>

        <PolaroidCarousel />
      </div>
    </section>
  );
}
