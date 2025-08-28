"use client";

const footerItems = [
    { name: "Gallery", href: "/gallery", isPage: true },
    { name: "About", href: "#about" },
    { name: "Mailing List", href: "#mailing-list" },
    { name: "Timeline", href: "#timeline" },
    { name: "Members", href: "#members" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-8 px-6 relative overflow-hidden">
      {/* Optional grunge overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/media/grunge-texture.png')] bg-repeat pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Footer Links */}
        <ul className="flex gap-6 text-sm uppercase font-bold text-pink-400">
          {footerItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-white transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons (placeholder) */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">IG</a>
          <a href="#" className="hover:text-white transition">FB</a>
          <a href="#" className="hover:text-white transition">YT</a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-zinc-500 text-center mt-6">
        &copy; {new Date().getFullYear()} DOOSCHBAG. All rights reserved.
      </p>
    </footer>
  );
}
