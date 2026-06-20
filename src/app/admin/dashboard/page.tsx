import { getImages } from "@/app/actions/images";
import ImageList from "@/components/ImageList";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const images = await getImages();

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 md:pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center pt-6 md:pt-8">
            Panel de Administración
          </h1>
          <LogoutButton />
        </header>
        <ImageList images={images} />
      </div>
    </section>
  );
}
