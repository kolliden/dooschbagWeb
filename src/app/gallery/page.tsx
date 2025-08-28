// app/gallery/page.tsx
import fs from "fs";
import path from "path";

export default function GalleryPage() {
  // Read image files from /public/gallery
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const images = fs.readdirSync(galleryDir).filter((file) => {
    return /\.(png|jpe?g|gif|webp)$/i.test(file);
  });

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-pink-400 mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((file, i) => (
          <img
            key={i}
            src={`/gallery/${file}`}
            alt={`Gallery Image ${i + 1}`}
            className="w-full h-48 object-cover rounded-md border border-zinc-700 hover:scale-105 transition"
          />
        ))}
      </div>
    </main>
  );
}
