// app/page.tsx — Dark, Myspace-inspired punk band homepage with video card, marquee, neon borders,
// glitter cursor, and grunge vibes. Drop this into your Next.js App Router project.
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/nav";
import Hero from "@/components/hero";
import XXXDivider from "@/components/XXXdevider";
import AboutBand from "@/components/aboutBand";
import Timeline from "@/components/timeline";
import MailingList from "@/components/mailingList";
import Footer from "@/components/footer";
import Members from "@/components/members";

import "./globals.css";


export default function HomePage() {
  return (
    <main className="min-h-dvh bg-[#0a0a0a] text-white grunge-bg">
      <Scanlines />
      <Header />
      <Hero />
      <AboutBand />
      <Timeline />
      <XXXDivider />
      <MailingList />
      <XXXDivider />
      <Members />
      <Footer />
      <GlitterCursor />
    </main>
  );
}

/** CRT scanlines & subtle flicker overlay */
function Scanlines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] mix-blend-overlay opacity-40"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgba(255,255,255,.03) 0 2px, transparent 2px 4px)",
        animation: "crtFlicker 6s infinite",
      }}
    />
  );
}

/** Glitter cursor — lightweight particle trail following mouse */
function GlitterCursor() {
  const [sparks, setSparks] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const id = idRef.current++;
      setSparks((s) => [
        ...s.slice(-40),
        { id, x: e.clientX, y: e.clientY },
      ]);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    if (!sparks.length) return;
    const t = setTimeout(() => setSparks((s) => s.slice(1)), 40);
    return () => clearTimeout(t);
  }, [sparks]);

  const dots = useMemo(() => sparks.map((p, i) => (
    <span
      key={p.id}
      className="pointer-events-none fixed z-[60] block h-1.5 w-1.5 rounded-full"
      style={{
        left: p.x + "px",
        top: p.y + "px",
        background: `radial-gradient(circle, rgba(255,255,255,1) 0 25%, rgba(255,62,165,1) 25% 60%, transparent 60%)`,
        transform: `translate(-50%, -50%) scale(${1 - i / 50})`,
        opacity: 1 - i / 50,
        boxShadow: "0 0 8px #ff3ea5, 0 0 14px #39ff14",
      }}
    />
  )), [sparks]);

  return <>{dots}</>;
}
