"use client";

import { useState, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight, Trophy, RotateCcw } from "lucide-react";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import FlashCard from "../components/FlashCard";
import AudioButton from "../components/AudioButton";
import { phraseCategories } from "../data/phrases";
import type { Phrase } from "../data/phrases";

type Mode = "cards" | "quiz";

export default function PhrasesPage() {
  const [activeCategory, setActiveCategory] = useState(phraseCategories[0].id);
  const [cardIndex, setCardIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("cards");
  const [quizState, setQuizState] = useState<{
    questionIdx: number;
    score: number;
    answered: string | null;
    finished: boolean;
  }>({ questionIdx: 0, score: 0, answered: null, finished: false });

  const category = phraseCategories.find((c) => c.id === activeCategory)!;
  const phrases = category.phrases;

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
    setCardIndex(0);
    setQuizState({ questionIdx: 0, score: 0, answered: null, finished: false });
  }, []);

  const nextCard = () => setCardIndex((i) => Math.min(i + 1, phrases.length - 1));
  const prevCard = () => setCardIndex((i) => Math.max(i - 1, 0));

  // Quiz logic
  const quizQuestions = useMemo(() => {
    const shuffled = [...phrases].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(5, shuffled.length)).map((phrase) => {
      const wrong = phrases
        .filter((p) => p.id !== phrase.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      const options = [...wrong, phrase].sort(() => Math.random() - 0.5);
      return { phrase, options };
    });
  }, [phrases, activeCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentQ = quizQuestions[quizState.questionIdx];

  const handleAnswer = (selected: Phrase) => {
    if (quizState.answered) return;
    const correct = selected.id === currentQ.phrase.id;
    setQuizState((s) => ({ ...s, answered: selected.greek, score: correct ? s.score + 1 : s.score }));

    setTimeout(() => {
      setQuizState((s) => {
        const nextIdx = s.questionIdx + 1;
        if (nextIdx >= quizQuestions.length) {
          return { ...s, finished: true, answered: null };
        }
        return { ...s, questionIdx: nextIdx, answered: null };
      });
    }, 1200);
  };

  const resetQuiz = () => {
    setQuizState({ questionIdx: 0, score: 0, answered: null, finished: false });
  };

  return (
    <div className="flex flex-col">
      <Header
        title="Greek Phrases"
        subtitle="Tap a card to flip it, tap the speaker to listen"
        emoji="📖"
        backgroundImage="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80&auto=format&fit=crop"
        imageAlt="White-washed Greek buildings with blue doors and bougainvillea"
      />

      <div className="px-4 pt-5 pb-6 mx-auto w-full max-w-lg">
        {/* Category Tabs */}
        <CategoryTabs
          categories={phraseCategories.map(({ id, label, emoji }) => ({ id, label, emoji }))}
          activeId={activeCategory}
          onSelect={handleCategoryChange}
        />

        {/* Mode Toggle */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setMode("cards")}
            className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-all ${
              mode === "cards"
                ? "bg-deep-blue text-white shadow"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            📇 Flashcards
          </button>
          <button
            onClick={() => { setMode("quiz"); resetQuiz(); }}
            className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-all ${
              mode === "quiz"
                ? "bg-deep-blue text-white shadow"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            🧠 Practice Quiz
          </button>
        </div>

        {/* Flashcards Mode */}
        {mode === "cards" && (
          <div className="mt-5">
            <FlashCard
              phrase={phrases[cardIndex]}
              categoryEmoji={category.emoji}
            />

            {/* Card Navigation */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={prevCard}
                disabled={cardIndex === 0}
                className="flex items-center gap-1 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm border border-gray-200 disabled:opacity-30 transition-all active:scale-95"
                aria-label="Previous card"
              >
                <ChevronLeft size={18} />
                Prev
              </button>
              <span className="text-sm font-medium text-gray-500">
                {cardIndex + 1} / {phrases.length}
              </span>
              <button
                onClick={nextCard}
                disabled={cardIndex === phrases.length - 1}
                className="flex items-center gap-1 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm border border-gray-200 disabled:opacity-30 transition-all active:scale-95"
                aria-label="Next card"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Phrase List */}
            <div className="mt-6 space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                All {category.label} Phrases
              </h3>
              {phrases.map((phrase, idx) => (
                <div
                  key={phrase.id}
                  className={`flex w-full items-center gap-3 rounded-xl p-3 transition-all ${
                    idx === cardIndex
                      ? "bg-deep-blue/5 border border-deep-blue/20"
                      : "bg-white border border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  <button
                    onClick={() => setCardIndex(idx)}
                    className="flex-1 min-w-0 text-left"
                  >
                    <p className="text-sm font-medium text-deep-blue">
                      {phrase.english}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {phrase.greek} · <span className="italic">{phrase.transliteration}</span>
                    </p>
                  </button>
                  <AudioButton text={phrase.greek} size="sm" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quiz Mode */}
        {mode === "quiz" && !quizState.finished && currentQ && (
          <div className="mt-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Question {quizState.questionIdx + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-olive">
                Score: {quizState.score}
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 w-full rounded-full bg-gray-200 mb-5">
              <div
                className="h-full rounded-full bg-sky-blue transition-all duration-500"
                style={{
                  width: `${((quizState.questionIdx) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-center mb-4">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                How do you say...
              </p>
              <p className="text-xl font-bold text-deep-blue">
                {currentQ.phrase.english}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.options.map((option) => {
                let btnStyle = "bg-white border-gray-200 text-gray-700 hover:border-sky-blue";
                if (quizState.answered) {
                  if (option.id === currentQ.phrase.id) {
                    btnStyle = "bg-green-50 border-green-400 text-green-700";
                  } else if (option.greek === quizState.answered) {
                    btnStyle = "bg-red-50 border-red-400 text-red-700";
                  } else {
                    btnStyle = "bg-white border-gray-100 text-gray-400";
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option)}
                    disabled={!!quizState.answered}
                    className={`rounded-xl border p-3.5 text-left transition-all ${btnStyle}`}
                  >
                    <span className="font-medium text-base">{option.greek}</span>
                    <span className="block text-xs mt-0.5 opacity-70 italic">
                      {option.transliteration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Quiz Complete */}
        {mode === "quiz" && quizState.finished && (
          <div className="mt-5 rounded-2xl bg-white p-8 text-center shadow-sm border border-gray-100">
            <Trophy size={48} className="mx-auto text-terracotta mb-3" />
            <h3 className="text-xl font-bold text-deep-blue">
              {quizState.score === quizQuestions.length ? "Perfect!" : "Nice try!"}
            </h3>
            <p className="text-gray-500 mt-1">
              You got{" "}
              <span className="font-bold text-olive">
                {quizState.score}/{quizQuestions.length}
              </span>{" "}
              correct
            </p>
            <p className="mt-3 text-sm text-gray-400">
              {quizState.score === quizQuestions.length
                ? "You're ready for Lesvos! 🎉"
                : "Keep practising — you'll get there! 💪"}
            </p>
            <button
              onClick={resetQuiz}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-deep-blue px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-deep-blue/90 active:scale-95"
            >
              <RotateCcw size={16} />
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
