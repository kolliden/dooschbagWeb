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
      <NoiseOverlay />
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
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes glowPulse { 0%,100%{ filter: drop-shadow(0 0 0px #ff3ea5); } 50%{ filter: drop-shadow(0 0 6px #ff3ea5); } }
        @keyframes borderPulse { 0%{ opacity:.35 } 50%{ opacity:.9 } 100%{ opacity:.35 } }
        @keyframes crtFlicker { 0%{opacity:.95} 5%{opacity:.7} 10%{opacity:.98} 15%{opacity:.85} 22%{opacity:.96} 50%{opacity:.9} 100%{opacity:.95} }
        /* Fake paper/grunge using multi-layer gradients */
        .grunge-bg {
          background-image:
            radial-gradient(transparent 0 60%, rgba(255,255,255,0.02)),
            linear-gradient(transparent 0, rgba(255,255,255,0.03) 100%),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 6px, transparent 6px 12px);
          background-blend-mode: overlay, overlay, normal;
        }
        .neon-border {
          position: relative;
          border: 1px solid #3a3a3a;
          border-radius: 10px;
        }
        .neon-border:before {
          content: "";
          position: absolute; inset: -2px;
          border-radius: 12px;
          background: conic-gradient(from 0deg,
            #ff3ea5, #39ff14, #00e5ff, #ff3ea5);
          filter: blur(8px);
          opacity: .35; pointer-events: none;
          animation: borderPulse 3.2s infinite linear;
        }
      `}</style>
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

/** Film/noise overlay */
function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[4] opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(255,255,255,.04), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,.05), transparent 35%), radial-gradient(circle at 50% 50%, rgba(255,255,255,.03), transparent 45%)",
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
