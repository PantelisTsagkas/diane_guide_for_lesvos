"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import GuideCard from "../components/GuideCard";
import { guideSections } from "../data/guide";

const LesvosMap = dynamic(() => import("../components/LesvosMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[220px] rounded-2xl border border-gray-200 bg-gray-100 animate-pulse" />
  ),
});

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState(guideSections[0].id);
  const section = guideSections.find((s) => s.id === activeSection)!;

  const allMappableEntries = guideSections.flatMap((s) =>
    s.entries.filter((e) => e.coordinates)
  );

  return (
    <div className="flex flex-col">
      <Header
        title="Lesvos Guide"
        subtitle="Discover the best of the island"
        emoji="🗺️"
        backgroundImage="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1200&q=80&auto=format&fit=crop"
        imageAlt="Scenic Greek coastal village with colourful boats and blue sea"
      />

      <div className="px-4 pt-5 pb-8 mx-auto w-full max-w-lg">
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-deep-blue mb-2">
            Island map
          </h3>
          <LesvosMap entries={allMappableEntries} />
        </div>

        <CategoryTabs
          categories={guideSections.map(({ id, label, emoji }) => ({
            id,
            label,
            emoji,
          }))}
          activeId={activeSection}
          onSelect={setActiveSection}
        />

        <div className="mt-5 space-y-3">
          {section.entries.map((entry) => (
            <GuideCard key={entry.id} entry={entry} />
          ))}
        </div>

        {/* Island Quick Facts */}
        <div className="mt-8 rounded-2xl bg-warm-sand/60 p-5 border border-warm-sand">
          <h3 className="font-bold text-base text-terracotta mb-3">
            🏝️ Lesvos Quick Facts
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white p-3 text-center">
              <p className="text-lg font-bold text-deep-blue">1,633 km²</p>
              <p className="text-xs text-gray-500 mt-0.5">3rd largest Greek island</p>
            </div>
            <div className="rounded-xl bg-white p-3 text-center">
              <p className="text-lg font-bold text-deep-blue">~86,000</p>
              <p className="text-xs text-gray-500 mt-0.5">Population</p>
            </div>
            <div className="rounded-xl bg-white p-3 text-center">
              <p className="text-lg font-bold text-deep-blue">11M+</p>
              <p className="text-xs text-gray-500 mt-0.5">Olive trees</p>
            </div>
            <div className="rounded-xl bg-white p-3 text-center">
              <p className="text-lg font-bold text-deep-blue">370 km</p>
              <p className="text-xs text-gray-500 mt-0.5">Coastline</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
