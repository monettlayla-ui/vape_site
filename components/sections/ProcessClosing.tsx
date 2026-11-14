import Link from "next/link";
import { QuestionCircleIcon } from "@/components/icons/QuestionCircleIcon";

export function ProcessClosing() {
  return (
    <section className="bg-[#f7f7f7] py-16 text-center">
      <div className="mx-auto max-w-[900px] px-6">
        <p className="font-script text-3xl leading-snug text-nav-ink md:text-4xl">
          Our focus is simple:
          <br />
          Raise exceptional Maine Coons the right way.
        </p>

        <Link
          href="/faqs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-8 py-3 font-nav text-white transition-opacity hover:opacity-90"
        >
          <QuestionCircleIcon className="h-5 w-5" />
          Read our FAQs to learn more
        </Link>
      </div>
    </section>
  );
}
