import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryProvider } from "@/components/sections/GalleryProvider";
import { GalleryThumb } from "@/components/sections/GalleryThumb";
import { getGalleryImages } from "@/lib/gallery";

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main className="flex-1">
      <PageHeader
        title="Maine Coon Cat & Kitten Gallery Australia"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1400px] px-6">
          <GalleryProvider images={images} alt="Maine Coon cat">
            <div className="columns-2 gap-4 sm:columns-3 lg:columns-5 [&>*]:mb-4">
              {images.map((img, i) => (
                <GalleryThumb
                  key={img.local_path}
                  src={`/${img.local_path}`}
                  alt="Maine Coon cat"
                  width={img.width}
                  height={img.height}
                  index={i}
                />
              ))}
            </div>
          </GalleryProvider>
        </div>
      </section>
    </main>
  );
}
