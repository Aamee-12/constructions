import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const propertyImages = [
  { src: "/assets/projects/villa_after.jpg", title: "Gabled Heritage Villa" },
  { src: "/assets/projects/villa_before.jpg", title: "Gabled Heritage Villa · Before" },
  { src: "/assets/projects/project_villa_gabled.jpg", title: "Gabled Heritage Villa · Design" },
  { src: "/assets/projects/mansion_after.jpg", title: "Palatial Colonnade Mansion" },
  { src: "/assets/projects/mansion_before.jpg", title: "Palatial Colonnade Mansion · Before" },
  { src: "/assets/projects/project_luxury_mansion.jpg", title: "Palatial Colonnade Mansion · Design" },
  { src: "/assets/projects/glassvilla_after.jpg", title: "Nocturne Glass Villa" },
  { src: "/assets/projects/glassvilla_before.jpg", title: "Nocturne Glass Villa · Before" },
  { src: "/assets/projects/project_glass_villa.jpg", title: "Nocturne Glass Villa · Design" },
  { src: "/assets/images/project-villa-verden.jpg", title: "Villa Verden" },
  { src: "/assets/images/project-living.jpg", title: "Living Room" },
  { src: "/assets/images/project-dining.jpg", title: "Dining Room" },
  { src: "/assets/images/project-bedroom.jpg", title: "Bedroom" },
  { src: "/assets/images/philosophy-exterior.jpg", title: "Residential Exterior" },
  { src: "/assets/upcoming/upcoming_residence_facade.jpg", title: "Residence Facade · In Progress" },
  { src: "/assets/upcoming/upcoming_elevation_work.jpg", title: "Elevation Work · In Progress" },
  { src: "/assets/upcoming/upcoming_structure_frame.jpg", title: "Structure Frame · In Progress" },
  { src: "/assets/upcoming/upcoming_apartment_render.jpg", title: "Apartment Residence · Design" },
  { src: "/assets/upcoming/upcoming_collage.jpg", title: "Residential Work · In Progress" },
];

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof propertyImages)[number] | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-[#141210] text-[#EBE4D8]">
      <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
        <a href="/" aria-label="HM Constructions and Interiors home"><img src="/assets/logo.png" alt="HM Constructions and Interiors" className="h-10 w-auto" /></a>
        <a href="/" className="text-xs uppercase tracking-[0.2em] text-[#D4AF50] hover:text-white">Home</a>
      </header>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <span className="text-xs uppercase tracking-[0.26em] text-[#C5A880] font-bold">HM Constructions & Interiors</span>
        <h1 className="font-serif text-5xl md:text-7xl mt-3 mb-5">Property Gallery</h1>
        <p className="max-w-2xl text-sm md:text-base leading-relaxed text-[#B5ABA0] mb-12">Explore our completed homes, design views, and residential work in progress. Select any image to view it larger.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyImages.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
              className="group text-left overflow-hidden rounded-xl border border-white/10 bg-[#1D1B18] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF50]"
            >
              <span className="block overflow-hidden">
                <img src={item.src} alt={item.title} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              </span>
              <span className="block p-4 font-serif text-lg text-white">{item.title}</span>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={selectedImage.title}>
          <button type="button" className="absolute inset-0 bg-black/90" onClick={() => setSelectedImage(null)} aria-label="Close image preview" />
          <button type="button" onClick={() => setSelectedImage(null)} aria-label="Close preview" className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-black/60 p-3 text-white hover:bg-black">
            <X className="h-5 w-5" />
          </button>
          <img src={selectedImage.src} alt={selectedImage.title} className="relative z-[1] max-h-[88vh] max-w-[92vw] object-contain shadow-2xl" />
          <p className="absolute bottom-4 left-4 z-10 text-sm text-white drop-shadow">{selectedImage.title}</p>
        </div>
      )}
    </main>
  );
};
