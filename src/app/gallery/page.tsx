"use client";
import { useEffect, useState } from "react";

interface ImageData {
  src: string;
  alt?: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selected, setSelected] = useState<ImageData | null>(null);

  useEffect(() => {
    fetch("/gallery/gallery.json")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <main className="bg-black text-white relative">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full border-b border-red-500">
        <img
          src={images[0]?.src || "/media/band-image.jpg"}
          alt="Gallery Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-red-500">Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(img)}
            className="group relative overflow-hidden rounded-md border border-red-800/40 bg-zinc-900 hover:border-red-500 transition"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-40 w-full object-cover group-hover:scale-105 transition duration-300"
            />
          </button>
        ))}
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
          />
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-500"
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
