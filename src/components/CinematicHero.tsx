"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_KEYWORDS } from "@/lib/constants";

const LEAVES = [
  { id: 1, x: "8%", y: "15%", size: 80, blur: 2, depth: 0.03 },
  { id: 2, x: "85%", y: "25%", size: 100, blur: 3, depth: 0.05 },
  { id: 3, x: "72%", y: "70%", size: 60, blur: 1.5, depth: 0.04 },
  { id: 4, x: "15%", y: "75%", size: 90, blur: 2.5, depth: 0.06 },
  { id: 5, x: "45%", y: "85%", size: 70, blur: 2, depth: 0.035 },
];

export default function CinematicHero() {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((i) => (i + 1) % HERO_KEYWORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          className="h-full w-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-green-field-with-trees-and-a-blue-sky-4049-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/40 to-forest/80" />
      </div>

      {/* Parallax mango leaves */}
      {LEAVES.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="pointer-events-none absolute z-10 opacity-40"
          style={{
            left: leaf.x,
            top: leaf.y,
            filter: `blur(${leaf.blur}px)`,
          }}
          animate={{
            x: mouse.x * leaf.depth * 100,
            y: mouse.y * leaf.depth * 80,
            rotate: mouse.x * leaf.depth * 15,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M50 5C50 5 90 30 90 55C90 80 50 95 50 95C50 95 10 80 10 55C10 30 50 5 50 5Z"
              fill="#EAA824"
              fillOpacity="0.6"
            />
            <path
              d="M50 15 L50 90"
              stroke="#1E3F20"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />
          </svg>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-mango/90">
            Hyderabad&apos;s Only 100% Pure Vegetarian Farm Retreat
          </p>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            Ananda Kshethram
          </h1>

          <div className="mt-6 flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <p className="text-lg text-white/90 md:text-xl">
              Hyderabad&apos;s Premier Sanctuary for
            </p>
            <div className="relative h-8 min-w-[280px] overflow-hidden md:h-9">
              <AnimatePresence mode="wait">
                <motion.span
                  key={keywordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 font-serif text-lg font-semibold text-mango md:text-xl"
                >
                  {HERO_KEYWORDS[keywordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#programs"
              className="rounded-full bg-mango px-8 py-3.5 text-sm font-bold text-forest shadow-xl transition-all hover:scale-105 hover:shadow-mango/40"
            >
              Explore Programs
            </a>
            <a
              href="https://wa.me/917799900060"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-mango hover:text-mango"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
