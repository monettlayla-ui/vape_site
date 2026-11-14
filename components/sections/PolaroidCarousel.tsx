"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/categories/current-litters/products/black-classic-polly-girl/images/01.jpg",
  "/categories/current-litters/products/black-silver-girl/images/01.jpg",
  "/categories/current-litters/products/black-silver-girl-copy/images/01.jpg",
  "/categories/current-litters/products/black-silver-shaded-girl/images/01.jpg",
  "/categories/current-litters/products/black-silver-tortie/images/01.jpg",
  "/categories/current-litters/products/blue-boy/images/01.jpg",
  "/categories/current-litters/products/light-black-silver-girl/images/01.jpg",
  "/categories/current-litters/products/miso/images/01.jpg",
  "/categories/current-litters/products/valerian/images/01.jpg",
];

// A clone of the first slide appended at the end lets the track keep sliding
// forward past the last real slide; once that clone is reached we snap back
// to the real first slide with the transition switched off, so the loop
// reads as continuous instead of rewinding backwards.
const TRACK = [...SLIDES, SLIDES[0]];

export function PolaroidCarousel() {
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [hovered]);

  useEffect(() => {
    if (index !== SLIDES.length) return;
    const timeout = setTimeout(() => {
      setAnimated(false);
      setIndex(0);
    }, 700);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (animated) return;
    const raf = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(raf);
  }, [animated]);

  const activeDot = index % SLIDES.length;

  return (
    <div className="relative mx-auto flex w-full max-w-[380px] flex-col items-center">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full overflow-hidden shadow-2xl transition-transform duration-300 ease-out hover:-rotate-2 hover:shadow-[0_35px_60px_-15px_rgba(42,21,16,0.45)]"
      >
        <div
          className={`flex ${animated ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TRACK.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-full shrink-0 border-[10px] border-b-[40px] border-white bg-white"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-nav-ink/5">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 380px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-6 flex items-center gap-2">
        {SLIDES.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-colors ${
              i === activeDot ? "bg-nav-accent" : "bg-nav-ink/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
