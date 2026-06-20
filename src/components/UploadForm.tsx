"use client";

import { createImage } from "@/app/actions/images";

interface UploadFormProps {
  onSuccess: () => void;
}

export default function UploadForm({ onSuccess }: UploadFormProps) {
  async function handleSubmit(formData: FormData) {
    const data = {
      url: formData.get("url") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
    };

    try {
      await createImage(data);
      onSuccess();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Error al crear imagen");
    }
  }

  return (
    <form action={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800">Nueva Imagen</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          URL de la imagen
        </label>
        <input
          type="text"
          name="url"
          required
          placeholder="/img/design1.jpg"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
          placeholder="Logo minimalista para TechStartup"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Categoría
        </label>
        <select
          name="category"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">Seleccionar categoría</option>
          <option value="branding">Branding</option>
          <option value="digital">Digital</option>
          <option value="impresion">Impresión</option>
          <option value="eventos">Eventos</option>
          <option value="packaging">Packaging</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all disabled:opacity-50"
      >
        Guardar Imagen
      </button>
    </form>
  );
}
