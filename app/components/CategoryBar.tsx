"use client";

import { JSX } from "react";

interface CategoryBarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categoryLinks = [
  { name: "Cars & Minivan" },
  { name: "Trucks" },
  { name: "Crossovers & SUVs" },
  { name: "Upcoming Vehicles" },
];

export default function CategoryBar({
  selectedCategory,
  onCategorySelect,
}: CategoryBarProps): JSX.Element {
  return (
    <div className="flex justify-center gap-4 flex-wrap mb-6">
      {categoryLinks.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onCategorySelect(cat.name)}
          className={`text-sm font-medium px-4 py-2 rounded-full transition ${
            selectedCategory === cat.name
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
