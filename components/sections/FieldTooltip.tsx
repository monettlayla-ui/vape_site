import type { ReactNode } from "react";
import { InfoIcon } from "@/components/icons/InfoIcon";

export function FieldTooltip({ children }: { children: ReactNode }) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-label="More information"
        className="flex h-4 w-4 cursor-help items-center justify-center rounded-full text-nav-ink/50 hover:text-nav-ink"
      >
        <InfoIcon className="h-4 w-4" />
      </button>
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-64 -translate-x-1/2 rounded-md bg-nav-ink p-3 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
        {children}
      </span>
    </span>
  );
}
