"use client";

import { useState, useCallback } from "react";
import { Volume2 } from "lucide-react";

interface AudioButtonProps {
  text: string;
  label?: string;
  size?: "sm" | "md";
}

export default function AudioButton({ text, label, size = "md" }: AudioButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "el-GR";
    utterance.rate = 0.85;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [text]);

  const iconSize = size === "sm" ? 16 : 20;
  const btnClass =
    size === "sm"
      ? "p-1.5 rounded-lg"
      : "p-2.5 rounded-xl";

  return (
    <button
      onClick={speak}
      className={`${btnClass} transition-all active:scale-95 ${
        isSpeaking
          ? "bg-sky-blue text-white shadow-md"
          : "bg-sky-blue/10 text-sky-blue hover:bg-sky-blue/20"
      }`}
      aria-label={label || `Listen to "${text}" in Greek`}
      type="button"
    >
      <Volume2 size={iconSize} className={isSpeaking ? "animate-pulse" : ""} />
    </button>
  );
}
