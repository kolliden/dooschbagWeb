"use client";
import Image from "next/image";

const footerItems = [
    { name: "Gallery", href: "/gallery", isPage: true },
    { name: "About", href: "#about" },
    { name: "Mailing List", href: "#mailing-list" },
    { name: "Timeline", href: "#timeline" },
    { name: "Members", href: "#members" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-8 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
        {/* Left: Logo & Slogan */}
          <Image
            src="/logo.png"
            alt="Dooschbag Logo"
            width={56}
            height={28}
            className="h-14 w-full object-contain mb-1"
            priority
          />
          <span className="text-xs text-zinc-400 italic text-center md:text-left">Knocking on wood since day one.</span>
        </div>

        {/* Center: Footer Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm uppercase font-bold text-zinc-500 w-full md:w-auto">
          {footerItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-white transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          {/* YouTube Icon */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block align-middle"
            >
              <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.116C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.39.57A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.108 2.116C4.772 20.5 12 20.5 12 20.5s7.228 0 9.39-.57a2.994 2.994 0 0 0 2.108-2.116C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800 my-6" />

      {/* Bottom Row: Legal Links & Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex gap-4 text-xs text-zinc-500">
          <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-white transition">Terms</a>
        </div>
        <p className="text-xs text-zinc-500 text-center sm:text-right mt-2 sm:mt-0">
          &copy; {new Date().getFullYear()} DOOSCHBAG. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
