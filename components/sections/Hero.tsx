import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden">
      <Image
        src="/categories/queens/products/chloe/images/01.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* gradient scrim: fades from solid white into the photo, so the text
          area and the image blend into one scene instead of a hard-edged box.
          Only used from sm+ — on mobile the card background below provides
          its own contrast against the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(246,237,227,0.97)_0%,rgba(246,237,227,0.97)_38%,rgba(246,237,227,0)_72%)] sm:block"
      />

      <div className="relative z-10 mx-6 max-w-[460px] rounded-2xl bg-[#F6EDE3]/95 px-6 py-8 text-center shadow-xl sm:ml-10 sm:max-w-[460px] sm:rounded-none sm:bg-transparent sm:px-6 sm:py-6 sm:text-left sm:shadow-none md:ml-20">
        <p className="font-script text-2xl text-nav-ink">
          Maine Coon for Sale Australia
        </p>

        <h1 className="mt-2 bg-[linear-gradient(-45deg,#2A1510_0%,#D97A3F_40%,#2A1510_100%)] bg-clip-text font-script text-5xl leading-[1.2] text-transparent md:text-6xl">
          {siteConfig.brandPrimary}
        </h1>

        <p className="mt-4 font-nav text-[17px] font-bold text-nav-ink">
          Explore our current Maine Coon kittens available across Australia.
          Brisbane based. Safe nationwide transport available.
        </p>

        <p className="mt-4 hidden font-nav text-[16px] leading-relaxed text-nav-ink/90 sm:block">
          We are a Brisbane-based Maine Coon breeder raising pedigree European
          Giant Maine Coons kittens for pet homes across Australia. Our focus
          is on health, temperament, and confident kittens raised in a family
          home environment. Whether you are in Brisbane, regional Queensland,
          or interstate, we can help you find the right Maine Coon for your
          home.
        </p>

        <Link
          href="/current-litters"
          className="mt-6 block rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-8 py-3 text-center font-nav text-[17px] font-medium text-white transition-opacity hover:opacity-90"
        >
          View our Maine Coon for sale!
        </Link>
      </div>
    </section>
  );
}
