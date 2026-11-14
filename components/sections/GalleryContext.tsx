"use client";

import { createContext, useContext } from "react";

export const GalleryContext = createContext<((index: number) => void) | null>(
  null
);

export function useGallery() {
  const open = useContext(GalleryContext);
  if (!open) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return open;
}
