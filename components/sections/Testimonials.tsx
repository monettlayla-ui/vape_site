import Link from "next/link";
import { PeopleIcon } from "@/components/icons/PeopleIcon";
import { SpeechIcon } from "@/components/icons/SpeechIcon";
import { getReviews } from "@/lib/reviews";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { StarRating } from "./StarRating";

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export function Testimonials() {
  const reviews = getReviews().slice(0, 7);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <p className="font-nav text-lg text-nav-accent">
          Happy Cats, Happy Families
        </p>

        <h2 className="mt-2 font-script text-6xl text-nav-ink md:text-7xl">
          What Our Customers Say
        </h2>
      </div>

      <div className="relative mx-auto mt-10 max-w-[900px] px-6">
        <div className="h-px bg-nav-ink/15" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nav-accent" />
      </div>

      <div className="mt-14">
        <ReviewsCarousel reviews={reviews} />

        <div className="hidden max-w-full overflow-x-auto px-6 md:block">
          <div className="mx-auto flex w-max gap-10 pb-4">
            {reviews.map((review) => (
              <div key={review.name} className="w-[320px] shrink-0 snap-start">
                <h3 className="font-script text-3xl text-nav-ink">
                  {review.name}
                </h3>

                <div className="mt-2">
                  <StarRating rating={review.rating} />
                </div>

                <p className="mt-4 font-nav text-lg leading-relaxed text-nav-ink/80">
                  {truncate(review.text[0], 160)}
                </p>

                <Link
                  href="/testimonials"
                  className="mt-3 inline-flex items-center gap-2 font-nav text-lg text-nav-accent hover:underline"
                >
                  <SpeechIcon className="h-5 w-5" />
                  Full Testimonial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 px-6">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-6 py-3 font-nav text-lg text-white transition-opacity hover:opacity-90"
        >
          <SpeechIcon className="h-5 w-5" />
          Leave Us a Review
        </Link>

        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 rounded-full bg-nav-ink px-6 py-3 font-nav text-lg text-white transition-opacity hover:opacity-90"
        >
          <PeopleIcon className="h-5 w-5" />
          Read All Reviews
        </Link>
      </div>
    </section>
  );
}
