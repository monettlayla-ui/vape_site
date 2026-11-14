import Image from "next/image";
import { FaqList } from "@/components/sections/FaqList";
import { faqCategories } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

export default function FaqsPage() {
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
            Frequently Asked Questions
          </h1>

          <div className="mt-6 h-[3px] w-32 bg-[linear-gradient(90deg,#2A1510_0%,#D97A3F_100%)]" />

          <h2 className="mt-7 font-nav text-2xl font-bold text-nav-ink">
            Maine Coon Kittens Australia
          </h2>

          <div className="mt-5 flex flex-col gap-5 font-nav text-lg leading-relaxed text-nav-ink/90">
            <p>
              Welcome! Below you&apos;ll find answers to common questions
              about our kittens, processes and what to expect before
              bringing home a Maine Coon from {siteConfig.fullName}. If you
              don&apos;t see your question here, feel free to contact us,
              we&apos;re happy to help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1400px] px-6 sm:pl-10 md:pl-20 md:pr-16">
          <FaqList categories={faqCategories} />
        </div>
      </section>
    </main>
  );
}
