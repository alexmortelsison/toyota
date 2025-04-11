"use client";

interface CategoryBarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categoryLinks = [
  { name: "Cars & Minivan" },
  { name: "Trucks" },
  { name: "Crossovers & SUVs" },
  { name: "Electrified" },
  { name: "Upcoming Vehicles" },
];

export default function CategoryBar({
  selectedCategory,
  onCategorySelect,
}: CategoryBarProps) {
  return (
    <div className="flex space-x-10 border-b pb-2 items-center justify-center pt-12">
      {categoryLinks.map((item) => (
        <button
          key={item.name}
          onClick={() => onCategorySelect(item.name)}
          className={`text-sm font-medium px-1 transition ${
            selectedCategory === item.name
              ? "underline underline-offset-12 border-black text-black"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
