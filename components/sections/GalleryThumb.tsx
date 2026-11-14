"use client";

import Image from "next/image";
import { useGallery } from "./GalleryContext";

export function GalleryThumb({
  src,
  alt,
  width,
  height,
  index,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  index: number;
}) {
  const open = useGallery();

  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={`View ${alt} photo ${index + 1}`}
      className="group relative block w-full cursor-pointer overflow-hidden rounded-lg bg-nav-ink/5"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
        className="block h-auto w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100">
        <span className="font-nav text-lg font-bold text-white">
          view &rarr;
        </span>
      </div>
    </button>
  );
}
