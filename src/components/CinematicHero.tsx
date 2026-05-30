"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { HERO_TRUST_STATS, HERO_VIDEO_URL } from "@/lib/constants";
import HeroMangoFestivalPromo from "@/components/HeroMangoFestivalPromo";

const LEAVES = [
  { id: 1, x: "8%", y: "15%", size: 80, blur: 2, depth: 0.03 },
  { id: 2, x: "85%", y: "25%", size: 100, blur: 3, depth: 0.05 },
  { id: 3, x: "72%", y: "70%", size: 60, blur: 1.5, depth: 0.04 },
  { id: 4, x: "15%", y: "75%", size: 90, blur: 2.5, depth: 0.06 },
  { id: 5, x: "45%", y: "85%", size: 70, blur: 2, depth: 0.035 },
];

export default function CinematicHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const apply = () => setParallaxEnabled(finePointer.matches);
    apply();
    finePointer.addEventListener("change", apply);
    return () => finePointer.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!parallaxEnabled) return;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, parallaxEnabled]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => {
      void video.play().catch(() => {});
    };
    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  return (
    <section className="relative min-h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          className="h-full w-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-crimson/80 via-deep-crimson/50 to-midnight-crimson/90" />
      </div>

      {parallaxEnabled &&
        LEAVES.map((leaf) => (
          <motion.div
            key={leaf.id}
            className="pointer-events-none absolute z-10 hidden opacity-40 md:block"
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
                fill="#C9941A"
                fillOpacity="0.65"
              />
              <path
                d="M50 15 L50 90"
                stroke="#1C3A14"
                strokeWidth="1.5"
                strokeOpacity="0.35"
              />
            </svg>
          </motion.div>
        ))}

      <div className="relative z-20 flex min-h-[100dvh] min-h-[600px] flex-col">
        <HeroMangoFestivalPromo />

        <div className="flex flex-1 flex-col items-center justify-center px-4 py-6 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full max-w-4xl"
          >
            <p className="font-serif text-base font-light italic tracking-wide text-gold-mist/95 sm:text-lg md:text-xl">
              Ananda Kshethram
            </p>

            <h1 className="mx-auto mt-3 max-w-[18ch] font-serif text-[2.125rem] font-light italic leading-[1.12] tracking-tight text-ivory drop-shadow-lg sm:max-w-4xl sm:text-5xl md:text-6xl lg:text-[3.35rem]">
              Give Your Child a Childhood
              <br />
              <span className="text-warm-gold">Worth Remembering</span>
            </h1>

            <p className="mx-auto mt-4 max-w-md text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-ivory/85 sm:max-w-lg sm:text-xs md:text-sm">
              India&apos;s most soulful farm experience — just 1 hour from
              Hyderabad
            </p>

            <p className="mx-auto mt-2 max-w-xs text-[0.6rem] uppercase leading-relaxed tracking-[0.08em] text-ivory/60 sm:max-w-md sm:text-xs">
              100% pure vegetarian · Chevella, Telangana
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
            >
              <a
                href="#programs"
                className="touch-target w-full rounded-full bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-crimson shadow-xl transition-all active:scale-[0.98] sm:w-auto sm:hover:scale-105 sm:hover:bg-warm-gold"
              >
                Plan Our Visit
              </a>
              <a
                href="https://wa.me/917799900060"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full rounded-full border-2 border-ivory/50 px-8 py-3.5 text-sm font-semibold text-ivory backdrop-blur-sm transition-all active:scale-[0.98] sm:w-auto sm:hover:border-brand-gold sm:hover:text-brand-gold"
              >
                WhatsApp Us →
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mx-4 mb-24 max-w-3xl rounded-2xl border border-brand-gold/30 bg-midnight-crimson/88 px-4 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:mx-auto sm:mb-28 sm:px-6 lg:mb-20"
        >
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-y-4">
            {HERO_TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center justify-center sm:items-stretch"
              >
                {i > 0 && (
                  <span
                    className="mx-3 hidden h-12 w-px shrink-0 bg-brand-gold/70 sm:block"
                    aria-hidden
                  />
                )}
                <div className="w-full px-1 text-center sm:min-w-[5.5rem] sm:px-3">
                  <p className="font-serif text-lg font-semibold leading-none tabular-nums text-warm-gold sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[8px] font-medium uppercase leading-snug tracking-[0.1em] text-ivory sm:mt-2 sm:text-[10px] sm:tracking-[0.14em]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center gap-1.5 text-ivory/50">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
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
