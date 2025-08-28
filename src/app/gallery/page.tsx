// app/gallery/page.tsx
import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const files = fs.existsSync(galleryDir) ? fs.readdirSync(galleryDir) : [];
  const images = files
    .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
    .map((f) => ({
      src: `/gallery/${f}`,
      alt: f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    }));

  return <GalleryClient images={images} />;
}
