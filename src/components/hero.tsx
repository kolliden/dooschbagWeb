"use client";

import bandData from "@/data/bandData";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white py-12 px-4 sm:px-6 md:min-h-screen">
      <div className="max-w-7xl mx-auto grid gap-6">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Video */}
          <div className="md:col-span-2 bg-zinc-900 border border-red-900 rounded-md shadow-lg">
            <video
              src={bandData.hero.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 md:h-96 object-cover rounded-md"
            />
          </div>

          {/* Upcoming Shows */}
          <div className="bg-zinc-900 p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold text-red-500 mb-3">
              Upcoming Shows
            </h2>
            <ul className="space-y-2 text-sm">
              {bandData.upcomingEvents.map((date, i) => (
                <li key={i}>
                  <span className="text-zinc-400">{date.date}</span> - {date.venue}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mission */}
          <div className="bg-zinc-900 p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold text-red-500 mb-3">Our Mission</h2>
            <p className="text-zinc-300 text-sm">{bandData.mission}</p>
          </div>

          {/* Image - Hidden on Mobile */}
            <div className="hidden md:block md:col-span-2 bg-zinc-900 p-2 rounded-md shadow-lg">
            <Image
              src={bandData.hero.image}
              alt="Band promo"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover rounded-md"
            />
            </div>
        </div>
      </div>
    </section>
  );
}
