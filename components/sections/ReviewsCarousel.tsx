"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SpeechIcon } from "@/components/icons/SpeechIcon";
import type { Review } from "@/lib/reviews";
import { StarRating } from "./StarRating";

// A clone of the first slide appended at the end lets the track keep sliding
// forward past the last real slide; once that clone is reached we snap back
// to the real first slide with the transition switched off, so the loop
// reads as continuous instead of rewinding backwards.
export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const track = [...reviews, reviews[0]];
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index !== reviews.length) return;
    const timeout = setTimeout(() => {
      setAnimated(false);
      setIndex(0);
    }, 700);
    return () => clearTimeout(timeout);
  }, [index, reviews.length]);

  useEffect(() => {
    if (animated) return;
    const raf = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(raf);
  }, [animated]);

  const activeDot = index % reviews.length;

  return (
    <div className="md:hidden">
      <div className="overflow-hidden">
        <div
          className={`flex ${animated ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {track.map((review, i) => (
            <div key={`${review.name}-${i}`} className="w-full shrink-0 px-6 text-center">
              <h3 className="font-script text-3xl text-nav-ink">{review.name}</h3>

              <div className="mt-2 flex justify-center">
                <StarRating rating={review.rating} />
              </div>

              <p className="mt-4 font-nav text-lg leading-relaxed text-nav-ink/80">
                {review.text[0]}
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

      <div className="mt-6 flex items-center justify-center gap-2">
        {reviews.map((review, i) => (
          <button
            key={review.name}
            type="button"
            aria-label={`Show review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-colors ${
              i === activeDot ? "bg-nav-accent" : "bg-nav-ink/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
