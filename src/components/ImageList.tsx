"use client";

import { deleteImage } from "@/app/actions/images";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UploadForm from "./UploadForm";
import EditForm from "./EditForm";
import { ImageRecord } from "@/services/data/types";

interface ImageListProps {
  images: ImageRecord[];
}

export default function ImageList({ images }: ImageListProps) {
  const router = useRouter();
  const [editingImage, setEditingImage] = useState<ImageRecord | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  async function handleDelete(id: string) {
    if (confirm("¿Estás seguro de eliminar esta imagen?")) {
      await deleteImage(id);
      router.refresh();
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Imágenes ({images.length})
        </h2>
        <button
          onClick={() => {
            setShowUpload(!showUpload);
            setEditingImage(null);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          {showUpload ? "Cancelar" : "+ Agregar Imagen"}
        </button>
      </div>

      {showUpload && (
        <div className="mb-8">
          <UploadForm
            onSuccess={() => {
              setShowUpload(false);
              router.refresh();
            }}
          />
        </div>
      )}

      {editingImage && (
        <div className="mb-8">
          <EditForm
            image={editingImage}
            onSuccess={() => {
              setEditingImage(null);
              router.refresh();
            }}
            onCancel={() => setEditingImage(null)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={image.url}
              alt={image.description}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-xs text-teal-600 font-medium mb-2 inline-block">
                {image.category}
              </span>
              <p className="text-sm text-gray-700">{image.description}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setEditingImage(image);
                    setShowUpload(false);
                  }}
                  className="text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="text-sm text-red-600 hover:underline cursor-pointer"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No hay imágenes. ¡Agrega una!
        </div>
      )}
    </div>
  );
}
