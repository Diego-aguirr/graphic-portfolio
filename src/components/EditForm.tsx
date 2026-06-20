"use client";

import { updateImage } from "@/app/actions/images";
import { useRouter } from "next/navigation";

interface EditFormProps {
  image: {
    id: string;
    url: string;
    description: string;
    category: string;
  };
  onSuccess: () => void;
  onCancel: () => void;
}

export default function EditForm({ image, onSuccess, onCancel }: EditFormProps) {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const data = {
      description: formData.get("description") as string,
      category: formData.get("category") as string,
    };

    try {
      await updateImage(image.id, data);
      onSuccess();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Error al actualizar imagen");
    }
  }

  return (
    <form action={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 space-y-6 w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 text-center">Editar Imagen</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          URL (no editable)
        </label>
        <input
          type="text"
          value={image.url}
          disabled
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <input
          type="text"
          name="description"
          required
          defaultValue={image.description}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Categoría
        </label>
        <select
          name="category"
          required
          defaultValue={image.category}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
        >
          <option value="branding">Branding</option>
          <option value="digital">Digital</option>
          <option value="impresion">Impresión</option>
          <option value="eventos">Eventos</option>
          <option value="packaging">Packaging</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3 rounded-lg hover:from-teal-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
        >
          Actualizar
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
