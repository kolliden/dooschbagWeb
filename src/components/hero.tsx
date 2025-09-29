"use client";

import bandData from "@/data/bandData";
import Image from "next/image";

type UpcomingEvent = {
  date: string;
  venue: string;
  [key: string]: unknown;
};

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
            <h2 className="text-4xl font-bold text-red-500 mb-3">Upcoming Shows</h2>
            <ul>
              {(bandData.upcomingEvents as UpcomingEvent[]).length === 0 ? (
                <li>No upcoming shows at the moment. Stay tuned!</li>
              ) : (
                (bandData.upcomingEvents as UpcomingEvent[]).map((event, i) => (
                  <li key={i}>
                    <span className="text-zinc-400">{event.date}</span> – {event.venue}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mission */}
          <div className="bg-zinc-900  p-6 rounded-md shadow-lg">
            <h2 className="text-4xl font-bold text-red-500 mb-3">Our Mission</h2>
            {bandData.mission.split("\n").map((line: string, idx: number) => (
                <p
                  key={idx}
                  className="text-zinc-300 text-xl w-full text-justify mb-3"
                  style={{ textAlignLast: "justify" }}
                >
                  {line || "\u00A0"} {/* keep empty lines from collapsing */}
                </p>
              ))}
          </div>

          {/* Image - Hidden on Mobile */}
          <div className="hidden md:block md:col-span-2 bg-zinc-900 rounded-md shadow-lg border border-red-900">
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
