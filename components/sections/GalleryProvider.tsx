"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { XIcon } from "@/components/icons/XIcon";
import { GalleryContext } from "./GalleryContext";

export function GalleryProvider({
  images,
  alt,
  children,
}: {
  images: { local_path: string }[];
  alt: string;
  children: ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () =>
    setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (index === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index]);

  return (
    <GalleryContext.Provider value={setIndex}>
      {children}

      {index !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 cursor-pointer text-white/80 transition-colors hover:text-white"
          >
            <XIcon className="h-8 w-8" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 cursor-pointer text-white/80 transition-colors hover:text-white md:left-8"
            >
              <ChevronLeftIcon className="h-10 w-10" />
            </button>
          )}

          <div className="relative h-[75vh] w-[90vw] max-w-4xl">
            <Image
              src={`/${images[index].local_path}`}
              alt={alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 cursor-pointer text-white/80 transition-colors hover:text-white md:right-8"
            >
              <ChevronRightIcon className="h-10 w-10" />
            </button>
          )}
        </div>
      )}
    </GalleryContext.Provider>
  );
}
