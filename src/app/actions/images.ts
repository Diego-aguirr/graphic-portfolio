"use server";

import { ImageRecord } from "@/services/data/types";
import { staticImages } from "@/services/data/static-images";

export async function getImages(): Promise<ImageRecord[]> {
  return staticImages;
}

export async function getImagesByCategory(
  category: string
): Promise<ImageRecord[]> {
  return staticImages.filter(
    (img) => img.category.toLowerCase() === category.toLowerCase()
  );
}

export async function createImage(data: {
  url: string;
  description: string;
  category: string;
}): Promise<ImageRecord> {
  const newImage: ImageRecord = {
    id: Date.now().toString(),
    url: data.url,
    description: data.description,
    category: data.category,
    created_at: new Date().toISOString(),
  };
  staticImages.push(newImage);
  return newImage;
}

export async function updateImage(
  id: string,
  data: { description?: string; category?: string }
): Promise<void> {
  const index = staticImages.findIndex((img) => img.id === id);
  if (index === -1) {
    throw new Error("Imagen no encontrada");
  }
  if (data.description !== undefined) {
    staticImages[index].description = data.description;
  }
  if (data.category !== undefined) {
    staticImages[index].category = data.category;
  }
}

export async function deleteImage(id: string): Promise<void> {
  const index = staticImages.findIndex((img) => img.id === id);
  if (index === -1) {
    throw new Error("Imagen no encontrada");
  }
  staticImages.splice(index, 1);
}
