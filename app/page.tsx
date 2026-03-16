import Image from "next/image";
import Link from "next/link";
import { BookOpen, MessageCircle, Map, ArrowRight } from "lucide-react";
import { phraseCategories } from "./data/phrases";
import AudioButton from "./components/AudioButton";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop";

const navCards = [
  {
    href: "/phrases",
    icon: BookOpen,
    title: "Greek Phrases",
    description: "Learn essential words and phrases with audio pronunciation",
    color: "bg-sky-blue",
  },
  {
    href: "/tips",
    icon: MessageCircle,
    title: "Travel Tips",
    description: "Practical advice for communicating and getting around",
    color: "bg-terracotta",
  },
  {
    href: "/guide",
    icon: Map,
    title: "Lesvos Guide",
    description: "Discover attractions, food, culture, and transport",
    color: "bg-olive",
  },
];

const quickPhrases = phraseCategories[0].phrases.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero with photo background */}
      <section className="relative min-h-[340px] flex items-end overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Turquoise Greek beach with golden sand and blue sky"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 w-full px-4 pb-8 pt-20">
          <div className="mx-auto max-w-lg">
            <p className="text-base text-sky-blue-light font-semibold drop-shadow-sm">
              Kalimera! ☀️
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-white drop-shadow-md">
              Welcome, Diane!
            </h1>
            <p className="mt-3 text-base leading-relaxed text-white/90 drop-shadow-sm">
              Your personal guide to the beautiful island of{" "}
              <span className="font-semibold text-warm-sand">
                Lesvos, Greece
              </span>
              . Learn Greek phrases, discover hidden gems, and feel right at
              home.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md shadow-lg">
              <span>🇬🇷</span>
              <span>Your holiday companion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="px-4 pt-6 pb-4">
        <div className="mx-auto max-w-lg space-y-3">
          {navCards.map(({ href, icon: Icon, title, description, color }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-gray-100 transition-all hover:shadow-md active:scale-[0.98]"
            >
              <div
                className={`${color} flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white`}
              >
                <Icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-deep-blue">{title}</h2>
                <p className="text-sm text-gray-500 leading-snug mt-0.5">
                  {description}
                </p>
              </div>
              <ArrowRight size={18} className="shrink-0 text-gray-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Phrases Preview */}
      <section className="px-4 py-6">
        <div className="mx-auto max-w-lg">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-deep-blue">
              Start Here 👋
            </h2>
            <Link
              href="/phrases"
              className="text-sm font-medium text-sky-blue hover:underline"
            >
              See all
            </Link>
          </div>
          <div className="space-y-2.5">
            {quickPhrases.map((phrase) => (
              <div
                key={phrase.id}
                className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-sm border border-gray-100"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-deep-blue text-sm">
                    {phrase.english}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    <span className="font-medium text-gray-700">
                      {phrase.greek}
                    </span>
                    {" · "}
                    <span className="italic">{phrase.transliteration}</span>
                  </p>
                </div>
                <AudioButton
                  text={phrase.greek}
                  size="sm"
                  label={`Listen to ${phrase.greek}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Fact */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-lg rounded-2xl bg-warm-sand/60 p-5 border border-warm-sand">
          <p className="text-sm font-semibold text-terracotta mb-1">
            🫒 Did you know?
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            Lesvos has over <strong>11 million olive trees</strong> — that is
            roughly half of the island covered in silvery olive groves! The local
            olive oil is among the best in the world.
          </p>
        </div>
      </section>
    </div>
  );
}
