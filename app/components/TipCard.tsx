"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Tip } from "../data/tips";

interface TipCardProps {
  tip: Tip;
}

export default function TipCard({ tip }: TipCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-gray-50"
        aria-expanded={isOpen}
        aria-controls={`tip-content-${tip.id}`}
      >
        <span className="text-2xl shrink-0">{tip.emoji}</span>
        <span className="flex-1 font-semibold text-deep-blue text-base">
          {tip.title}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`tip-content-${tip.id}`}
        className={`accordion-content ${isOpen ? "open" : ""}`}
        role="region"
        aria-labelledby={`tip-title-${tip.id}`}
      >
        <div>
          <div className="px-4 pb-4 pt-0">
            <p className="text-sm leading-relaxed text-gray-600 pl-9">
              {tip.content}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
