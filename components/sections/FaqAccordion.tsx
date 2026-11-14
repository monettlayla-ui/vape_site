"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How do we ship kittens safely across Australia?",
    answer:
      "We can assist with safe, reliable transport options Australia-wide. We work with trusted pet transport providers to help ensure a smooth and comfortable journey.",
  },
  {
    question: "Can we visit the kittens before choosing one?",
    answer:
      "For the health and safety of our cats, our cattery is closed to visitors. For genuine enquiries, we're happy to share updates and arrange FaceTime so you can see your kitten as they grow.",
  },
  {
    question: "What paperwork is provided?",
    answer:
      "Each kitten is provided with vet records, pedigree papers, and microchip transfer paperwork.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-4 flex flex-col">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question} className="border-b border-white/20 py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className={`flex w-full cursor-pointer items-center justify-between gap-4 text-left font-nav font-bold text-white transition-all ${
                open ? "rounded-lg border border-dashed border-white/60 px-4 py-3" : ""
              }`}
            >
              {faq.question}
              <span aria-hidden="true" className="text-xl leading-none">
                {open ? "−" : "+"}
              </span>
            </button>
            {open && (
              <p className="mt-3 font-nav text-sm leading-relaxed text-white/85">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
