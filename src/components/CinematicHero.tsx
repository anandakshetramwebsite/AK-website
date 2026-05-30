"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { HERO_TRUST_STATS, HERO_VIDEO_URL, HERO_KEYWORDS, MAPS_URL, FARM_LOCATION } from "@/lib/constants";
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
    <section id="top" className="relative min-h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center lg:min-h-[120%] lg:min-w-[120%] lg:object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-crimson/80 via-midnight-crimson/50 to-midnight-crimson/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(58,8,8,0.72)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-crimson/90 via-transparent to-forest-green/30" />
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

        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-4 pt-20 text-center sm:px-6 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full max-w-3xl"
          >
            <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2">
              <span className="rounded-full border border-brand-gold/60 bg-brand-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-warm-gold sm:text-[11px]">
                Hyderabad&apos;s First Agri Tourism Hub
              </span>
              <span className="rounded-full border border-ivory/40 bg-forest-green/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ivory sm:text-[11px]">
                Hyderabad&apos;s Only Pure Veg Farm Retreat
              </span>
            </div>

            <h1
              className="mx-auto mt-5 max-w-2xl font-serif text-[1.75rem] font-medium italic leading-[1.2] tracking-tight text-ivory sm:text-4xl md:text-[2.75rem]"
              style={{
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.45)",
              }}
            >
              Where Nature, Village Life
              <br />
              <span className="text-warm-gold">&amp; Meaningful Memories Meet</span>
            </h1>

            <div className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2">
              {HERO_KEYWORDS.map((kw) => (
                <span
                  key={kw}
                  className="rounded-lg border border-ivory/15 bg-ivory/95 px-3 py-2 text-[11px] font-semibold leading-snug text-forest-green shadow-sm sm:text-xs"
                >
                  {kw}
                </span>
              ))}
            </div>

            <p className="mx-auto mt-5 inline-flex max-w-xl flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-brand-gold/45 bg-brand-gold/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-ivory sm:text-xs">
              <span className="text-warm-gold">100% pure vegetarian</span>
              <span className="text-ivory/40" aria-hidden>
                ·
              </span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-wrap items-center justify-center gap-x-2 text-ivory transition-colors hover:text-warm-gold"
                aria-label={`Open ${FARM_LOCATION.line} in Google Maps`}
              >
                <span>Chevella</span>
                <span className="text-ivory/40" aria-hidden>
                  ·
                </span>
                <span>{FARM_LOCATION.note.split(", ")[0]},</span>
                <span className="inline-flex items-center gap-1.5">
                  {FARM_LOCATION.note.split(", ")[1]}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-9 w-9 shrink-0 text-warm-gold transition-transform group-hover:scale-105 sm:h-12 sm:w-12"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3"
            >
              <a
                href="#programs"
                className="touch-target w-full max-w-[11rem] rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-crimson shadow-xl sm:w-auto"
              >
                Book Your Visit
              </a>
              <a
                href="#experiences"
                className="touch-target w-full max-w-[11rem] rounded-full border-2 border-ivory/70 bg-midnight-crimson/60 px-6 py-3 text-sm font-semibold text-ivory backdrop-blur-sm sm:w-auto"
              >
                Plan Your Outing
              </a>
              <a
                href="https://wa.me/917799900060"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full max-w-[11rem] rounded-full border-2 border-ivory/70 bg-midnight-crimson/60 px-6 py-3 text-sm font-semibold text-ivory backdrop-blur-sm sm:w-auto"
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
          className="mx-4 mb-6 mt-auto max-w-3xl rounded-xl border border-brand-gold/25 bg-midnight-crimson/85 px-4 py-4 backdrop-blur-md sm:mx-auto sm:mb-8 sm:px-5"
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-3 lg:gap-y-0">
            {HERO_TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="w-full px-1 text-center sm:px-2"
              >
                <p className="font-serif text-lg font-semibold leading-none tabular-nums text-warm-gold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[8px] font-medium uppercase leading-snug tracking-[0.1em] text-ivory sm:mt-2 sm:text-[10px] sm:tracking-[0.14em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
