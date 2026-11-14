import { ReviewsGrid } from "@/components/sections/ReviewsGrid";
import { SubmitTestimonialButton } from "@/components/sections/SubmitTestimonialButton";
import { siteConfig } from "@/lib/site-config";

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <section
        className="bg-[#f7f7f7] py-16 text-center"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(42,21,16,0.05) 0 10px, transparent 10px 20px)",
        }}
      >
        <div className="mx-auto max-w-[900px] px-6">
          <p className="font-nav font-bold text-nav-accent">Reviews</p>

          <h1 className="mt-2 font-script text-5xl text-nav-ink md:text-6xl">
            Feedback From Our Customers
          </h1>

          <p className="mt-4 font-nav leading-relaxed text-nav-ink/90">
            We&apos;re always grateful when our customers take the time to
            share their experience with us. Feedback means a lot, not only
            because it helps others learn more about {siteConfig.fullName},
            but because it helps us continue to grow and improve. Our
            business relies strongly on happy customers and word of mouth,
            so every kind word, suggestion and review is genuinely
            appreciated.
          </p>

          <div className="mt-6 inline-block rounded-full border-2 border-dashed border-white p-1">
            <SubmitTestimonialButton className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-6 py-3 font-nav text-white transition-opacity hover:opacity-90" />
          </div>
        </div>
      </section>

      <ReviewsGrid />
    </main>
  );
}
