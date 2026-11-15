import type { Metadata } from "next";
import Image from "next/image";
import { ProcessClosing } from "@/components/sections/ProcessClosing";
import { ProcessCommitment } from "@/components/sections/ProcessCommitment";
import { ProcessPerspectives } from "@/components/sections/ProcessPerspectives";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Process",
  description: `Learn what to expect when reserving a Maine Coon kitten from ${siteConfig.fullName}, including our health guarantees, updates and breeding standards.`,
  alternates: { canonical: "/our-process" },
};

export default function OurProcessPage() {
  return (
    <main className="flex-1">
      <section className="relative isolate flex min-h-[700px] items-center overflow-hidden">
        <Image
          src="/pages/our-process/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative z-10 mx-4 max-w-[620px] bg-white p-10 shadow-xl sm:ml-10 sm:p-14 md:ml-20">
          <h1 className="font-script text-5xl leading-[1.15] text-nav-ink md:text-6xl">
            Understanding the {siteConfig.brandPrimary} Process
          </h1>

          <div className="mt-6 h-[3px] w-32 bg-[linear-gradient(90deg,#2A1510_0%,#D97A3F_100%)]" />

          <h2 className="mt-7 font-nav text-2xl font-bold text-nav-ink">
            What to Expect When Reserving Your Maine Coon Kitten
          </h2>

          <div className="mt-5 flex flex-col gap-5 font-nav text-lg leading-relaxed text-nav-ink/90">
            <p>
              Welcoming a Maine Coon into your family is an exciting
              experience. We understand that once you reserve your kitten,
              the anticipation begins immediately.
            </p>
            <p>
              At {siteConfig.brandPrimary}, we value that excitement — and
              we also believe in being clear about how our breeding and
              update process works.
            </p>
          </div>
        </div>
      </section>

      <ProcessPerspectives />
      <ProcessCommitment />
      <ProcessClosing />
    </main>
  );
}
