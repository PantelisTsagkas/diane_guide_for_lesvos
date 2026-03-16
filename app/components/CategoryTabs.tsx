"use client";

interface CategoryTabsProps {
  categories: { id: string; label: string; emoji: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function CategoryTabs({
  categories,
  activeId,
  onSelect,
}: CategoryTabsProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4"
      role="tablist"
      aria-label="Phrase categories"
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(cat.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
              isActive
                ? "bg-deep-blue text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
