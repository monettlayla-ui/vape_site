"use client";

import { useState } from "react";
import type { Faq, FaqCategory } from "@/lib/faqs";

function formatBold(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function FaqAnswer({ answer }: { answer: Faq["answer"] }) {
  if (typeof answer === "string") {
    return (
      <p className="mt-3 font-nav text-lg leading-relaxed text-nav-ink/90">
        {formatBold(answer)}
      </p>
    );
  }

  return (
    <div className="mt-3 flex flex-col gap-3 font-nav text-lg leading-relaxed text-nav-ink/90">
      {answer.map((block, i) => {
        if (block.type === "p") return <p key={i}>{formatBold(block.text)}</p>;
        if (block.type === "link")
          return (
            <a
              key={i}
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nav-accent hover:underline"
            >
              {block.text}
            </a>
          );
        return (
          <ul key={i} className="list-disc pl-6">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

function FaqCategorySection({ category }: { category: FaqCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="font-nav text-4xl font-bold text-nav-ink">
        {category.title}
      </h2>

      <div className="mt-6 flex flex-col">
        {category.faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.question} className="border-b border-nav-ink/10 py-4">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-nav text-lg text-nav-ink"
              >
                {faq.question}
                <span aria-hidden="true" className="text-2xl leading-none text-nav-ink/60">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && <FaqAnswer answer={faq.answer} />}
            </div>
          );
        })}
      </div>

      {category.note && (
        <p className="mt-6 font-nav text-lg leading-relaxed text-nav-ink/90">
          {category.note}
        </p>
      )}
    </div>
  );
}

export function FaqList({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="flex flex-col gap-14">
      {categories.map((category) => (
        <FaqCategorySection key={category.title} category={category} />
      ))}
    </div>
  );
}
