"use client";

import Image from "next/image";
import { useGallery } from "./GalleryContext";

export function GalleryImage({
  src,
  alt,
  index,
  sizes,
}: {
  src: string;
  alt: string;
  index: number;
  sizes: string;
}) {
  const open = useGallery();

  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={`View ${alt} photo ${index + 1}`}
      className="group absolute inset-0 h-full w-full cursor-pointer"
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
        <span className="rounded-full bg-white/90 px-4 py-1.5 font-nav text-sm font-bold text-nav-ink">
          View
        </span>
      </div>
    </button>
  );
}
