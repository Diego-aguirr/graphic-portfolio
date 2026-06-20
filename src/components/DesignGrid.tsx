"use client";

import { useState } from "react";
import CategoryNav from "./CategoryNav";
import { DesignCard } from "./DesignCard";
import { ImageRecord } from "@/services/data/types";

interface DesignGridProps {
  images: ImageRecord[];
}

export default function DesignGrid({ images }: DesignGridProps) {
  const [activeCategory, setActiveCategory] = useState("todos");

  const normalizeCategory = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  const filteredImages =
    activeCategory === "todos"
      ? images
      : images.filter(
          (img) => normalizeCategory(img.category) === normalizeCategory(activeCategory)
        );

  return (
    <>
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredImages.map((img) => (
            <DesignCard
              key={img.id}
              design={{
                id: img.id,
                category: img.category,
                title: img.description,
                image: img.url,
                tags: [],
              }}
            />
          ))}

          {filteredImages.length === 0 && (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-500">
                No se encontraron diseños en esta categoría
              </h3>
              <p className="mt-4 text-gray-400">
                Prueba seleccionando otra categoría
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
