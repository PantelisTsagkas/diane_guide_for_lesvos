"use client";

import { useState } from "react";
import AudioButton from "./AudioButton";
import type { Phrase } from "../data/phrases";

interface FlashCardProps {
  phrase: Phrase;
  categoryEmoji: string;
}

export default function FlashCard({ phrase, categoryEmoji }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective w-full cursor-pointer"
      onClick={() => setIsFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-label={`Flashcard: ${phrase.english}. Tap to ${isFlipped ? "see English" : "see Greek"}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((f) => !f);
        }
      }}
    >
      <div
        className={`flip-card-inner relative h-52 w-full ${isFlipped ? "flipped" : ""}`}
      >
        {/* Front — English */}
        <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
          <span className="text-3xl">{categoryEmoji}</span>
          <p className="text-xl font-semibold text-deep-blue text-center">
            {phrase.english}
          </p>
          <p className="text-sm text-gray-400 mt-2">Tap to see Greek</p>
        </div>

        {/* Back — Greek */}
        <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-deep-blue p-6 shadow-lg">
          <p className="text-2xl font-bold text-white text-center">
            {phrase.greek}
          </p>
          <p className="text-base text-sky-blue-light italic text-center">
            {phrase.transliteration}
          </p>
          <p className="text-sm text-white/60 mt-1 text-center">
            {phrase.english}
          </p>
          <div className="mt-2" onClick={(e) => e.stopPropagation()}>
            <AudioButton text={phrase.greek} label={`Listen to ${phrase.greek}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
