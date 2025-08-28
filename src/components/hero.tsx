"use client";

import bandData from "@/data/bandData";

export default function Hero() {
  return (
<section className="relative bg-black text-white py-12 px-6 min-h-screen">
  <div className="max-w-7xl mx-auto grid gap-4">
    {/* Top Row: video wide, shows narrow */}
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-zinc-900  p-2 rounded-md shadow-lg">
        <video
          src={bandData.hero.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-100 object-cover rounded-md"
        />
      </div>
      <div className="col-span-1 bg-zinc-900  p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold text-pink-400 mb-3">Upcoming Shows</h2>
        <ul className="space-y-2 text-sm">
          {bandData.upcomingEvents.map((date, i) => (
            <li key={i}>
              <span className="text-zinc-400">{date.date}</span> - {date.venue}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom Row: mission narrow, image wide */}
    <div className="grid grid-cols-3 gap-4">
      {/* Mission (narrow, left) */}
      <div className="col-span-1 bg-zinc-900  p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold text-pink-400 mb-3">Our Mission</h2>
        <p className="text-zinc-300 text-sm">{bandData.mission}</p>
      </div>

      {/* Image (wide, right) */}
      <div className="col-span-2 bg-zinc-900  p-2 rounded-md shadow-lg">
        <img
          src={bandData.hero.image}
          alt="Band promo"
          className="w-full h-80 object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</section>

  );
}
