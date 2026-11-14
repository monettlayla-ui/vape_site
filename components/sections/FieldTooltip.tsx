"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { InfoIcon } from "@/components/icons/InfoIcon";

export function FieldTooltip({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <span ref={ref} className="group relative inline-flex">
      <button
        type="button"
        aria-label="More information"
        onClick={() => setOpen((v) => !v)}
        className="flex h-4 w-4 cursor-help items-center justify-center rounded-full text-nav-ink/50 hover:text-nav-ink"
      >
        <InfoIcon className="h-4 w-4" />
      </button>
      <span
        className={`absolute left-0 top-full z-10 mt-2 w-64 max-w-[75vw] rounded-md bg-nav-ink p-3 text-xs leading-relaxed text-white shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto ${
          open ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
        }`}
      >
        {children}
      </span>
    </span>
  );
}
