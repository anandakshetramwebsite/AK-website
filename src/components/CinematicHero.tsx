"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HERO_TRUST_STATS, HERO_VIDEO_URL, MAPS_URL, FARM_LOCATION } from "@/lib/constants";
import { HERO_POSTER } from "@/lib/site-images";

const HERO_DESCRIPTION =
  "Experience Hyderabad's First Agri Tourism Hub and Only Pure Veg Farm Retreat. Enjoy Family Day Outings, Farm Night Stays, School Trips, Corporate Team Outings, Life Skills Summer Camps, Celebrations, and Authentic Village Experiences.";
import HeroMangoFestivalPromo from "@/components/HeroMangoFestivalPromo";

export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
          poster={HERO_POSTER}
          className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center lg:min-h-[120%] lg:min-w-[120%] lg:object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-crimson/80 via-midnight-crimson/50 to-midnight-crimson/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(58,8,8,0.72)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-crimson/90 via-transparent to-forest-green/30" />
      </div>

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
              The Best Getaway Destination
              <br />
              <span className="text-warm-gold">Near Hyderabad</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ivory/90 sm:text-base">
              {HERO_DESCRIPTION}
            </p>

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
                <span className="inline-flex items-center gap-1.5">
                  {FARM_LOCATION.note}
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
                href="https://wa.me/917799900060"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full max-w-[11rem] rounded-full border-2 border-ivory/70 bg-midnight-crimson/60 px-6 py-3 text-sm font-semibold text-ivory backdrop-blur-sm sm:w-auto"
              >
                WhatsApp Us
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
