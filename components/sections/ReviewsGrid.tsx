import { getReviews } from "@/lib/reviews";
import { StarRating } from "./StarRating";

export function ReviewsGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1300px] columns-1 gap-6 px-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {getReviews().map((review) => (
          <div
            key={review.name}
            className="break-inside-avoid bg-[#f7f7f7] p-8"
          >
            <h3 className="font-script text-2xl text-nav-ink">
              {review.name}
            </h3>

            <div className="mt-2">
              <StarRating rating={review.rating} />
            </div>

            <div className="mt-4 flex flex-col gap-4 font-nav leading-relaxed text-nav-ink/90">
              {review.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
