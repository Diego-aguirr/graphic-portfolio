"use client";

const categories = [
  { name: "Todos", slug: "todos" },
  { name: "Branding", slug: "branding" },
  { name: "Digital", slug: "digital" },
  { name: "Impresión", slug: "impresion" },
  { name: "Eventos", slug: "eventos" },
  { name: "Packaging", slug: "packaging" },
];

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="w-full bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-center gap-3">
        {categories.map(({ name, slug }) => (
          <button
            key={slug}
            onClick={() => onCategoryChange(slug)}
            className={`px-6 py-2 rounded-full border border-gray-200 hover:border-teal-500 
              text-gray-600 hover:text-teal-600 transition-all duration-300
              ${
                activeCategory === slug
                  ? "border-teal-500 text-teal-600 font-semibold bg-teal-50"
                  : ""
              }`}
          >
            {name}
          </button>
        ))}
      </div>
    </nav>
  );
}
