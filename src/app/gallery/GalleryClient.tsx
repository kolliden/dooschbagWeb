"use client";
import { useState, useEffect, useCallback } from "react";

export default function GalleryClient({ images }: { images: { src: string; alt?: string }[] }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openAt = (i: number) => {
        setIndex(i);
        setOpen(true);
    };

    const close = useCallback(() => setOpen(false), []);
    const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, close, prev, next]);

    return (
        <main className="bg-black text-white">
            {/* Hero */}
            <section className="relative h-[50vh] w-full overflow-hidden border-b border-red-500">
                <img src="/gallery/image00093.jpeg" alt="Gallery hero"
                    className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-extrabold tracking-wider text-red-500 drop-shadow-[0_0_20px_rgba(255,0,0,0.6)]">
                        Gallery
                    </h1>
                    <br />
                    <p className="text-lg">A collection of our favorite moments</p>
                </div>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {images.map((img, i) => (
                        <button key={img.src} onClick={() => openAt(i)}
                            className="group relative overflow-hidden rounded-md border border-red-800/40 bg-zinc-900 hover:border-red-500 transition">
                            <img src={img.src} alt={img.alt || "gallery image"}
                                className="h-40 w-full object-cover group-hover:scale-105 transition duration-300" />
                        </button>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {open && images[index] && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={close}>
                    <div className="relative max-w-5xl w-fit" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-full overflow-hidden rounded-lg border border-red-500">
                            <img src={images[index].src} alt={images[index].alt || "gallery"}
                                className="w-full h-[70vh] object-contain" />
                        </div>
                        <button onClick={close} className="absolute -top-3 -right-3 rounded-full border border-red-500 bg-black px-3 py-1 hover:bg-red-500 hover:text-black transition">
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
