import type { GuideEntry } from "../data/guide";

interface GuideCardProps {
  entry: GuideEntry;
}

export default function GuideCard({ entry }: GuideCardProps) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0 mt-0.5">{entry.emoji}</span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-deep-blue leading-snug">
            {entry.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {entry.description}
          </p>
        </div>
      </div>
    </article>
  );
}
