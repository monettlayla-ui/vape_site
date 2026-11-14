"use client";

import { useState } from "react";
import { ChevronIcon } from "@/components/icons/ChevronIcon";

export function CollapsibleNote({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full rounded-lg bg-[#f7f7f7] p-8 md:p-10">
      <h3 className="font-script text-3xl text-nav-ink">{title}</h3>

      <div
        className={`relative mt-4 font-nav leading-relaxed text-nav-ink/90 ${
          open ? "" : "max-h-28 overflow-hidden"
        }`}
      >
        {paragraphs.map((p, i) => (
          <p key={i} className={i > 0 ? "mt-4" : undefined}>
            {p}
          </p>
        ))}
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f7f7f7] to-transparent" />
        )}
      </div>

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-3 inline-flex cursor-pointer items-center gap-1 font-nav font-bold text-nav-accent"
        >
          Read More
          <ChevronIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
