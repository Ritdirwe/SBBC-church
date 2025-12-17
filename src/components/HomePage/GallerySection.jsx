import ImageGallery from "@/components/ImageGallery";

export function GallerySection() {
  return (
    <section data-animate className="py-20 px-6 bg-[#0e1219]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Community in Action
        </h2>
        <ImageGallery />
      </div>
    </section>
  );
}
