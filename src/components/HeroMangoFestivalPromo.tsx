"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MANGO_FESTIVAL_EVENT, WHATSAPP_PHONE } from "@/lib/constants";

const DISMISS_KEY = "ak-mango-promo-dismissed";

const SPARKLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 17) % 84)}%`,
  top: `${6 + ((i * 23) % 88)}%`,
  delay: i * 0.25,
  duration: 2.2 + (i % 3) * 0.4,
}));

export default function HeroMangoFestivalPromo() {
  const [visible, setVisible] = useState<boolean | null>(null);
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(MANGO_FESTIVAL_EVENT.whatsappText)}`;

  useEffect(() => {
    setVisible(sessionStorage.getItem(DISMISS_KEY) !== "1");
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  if (visible !== true) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
      className="pointer-events-none relative z-30 mt-[4.75rem] w-full shrink-0 px-4 sm:mt-20 md:fixed md:inset-x-0 md:top-[4.75rem] md:mt-0 md:flex md:justify-end md:px-8 md:pt-2"
    >
      <div className="hero-event-promo pointer-events-auto relative mx-auto w-full max-w-md md:mx-0 md:max-w-[22rem]">
        {SPARKLES.map((s) => (
          <motion.span
            key={s.id}
            className="pointer-events-none absolute hidden rounded-full bg-warm-gold sm:block"
            style={{
              left: s.left,
              top: s.top,
              width: 5,
              height: 5,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.4, 1.2, 0.4],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative overflow-hidden rounded-2xl border-2 border-warm-gold/60 bg-midnight-crimson/94 px-4 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-5 sm:pr-12">
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-warm-gold/15 via-transparent to-brand-crimson/30"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <button
            type="button"
            onClick={dismiss}
            className="touch-target absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/35 bg-midnight-crimson/90 text-lg leading-none text-ivory shadow-md transition-colors hover:border-warm-gold hover:bg-brand-crimson hover:text-warm-gold"
            aria-label="Close Mango Festival announcement"
          >
            ×
          </button>

          <div className="relative text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-warm-gold sm:tracking-[0.22em]">
              ✦ {MANGO_FESTIVAL_EVENT.badge} ✦
            </p>

            <p className="mt-1 font-serif text-lg font-light italic leading-tight text-ivory sm:text-2xl">
              {MANGO_FESTIVAL_EVENT.title}
            </p>

            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="hidden h-px w-5 bg-brand-gold/70 sm:block" aria-hidden />
              <div className="rounded-xl border border-brand-gold/40 bg-brand-crimson/50 px-3 py-2 sm:px-4">
                <p className="font-serif text-2xl font-semibold leading-none text-warm-gold sm:text-4xl">
                  {MANGO_FESTIVAL_EVENT.dateDay}
                </p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-ivory sm:text-[10px] sm:tracking-[0.2em]">
                  {MANGO_FESTIVAL_EVENT.dateMonth}{" "}
                  {MANGO_FESTIVAL_EVENT.dateYear}
                </p>
              </div>
              <span className="hidden h-px w-5 bg-brand-gold/70 sm:block" aria-hidden />
            </div>

            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-gold-mist/90 sm:text-[10px] sm:tracking-[0.14em]">
              {MANGO_FESTIVAL_EVENT.dateWeekday}
            </p>

            <p className="mt-2 text-xs leading-relaxed text-ivory/80">
              {MANGO_FESTIVAL_EVENT.tagline}
            </p>

            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-2">
              <a
                href={MANGO_FESTIVAL_EVENT.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full rounded-full bg-brand-gold px-4 py-3 text-xs font-bold text-brand-crimson shadow-lg active:scale-[0.98] sm:w-auto sm:py-2.5"
              >
                {MANGO_FESTIVAL_EVENT.cta}
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full rounded-full border border-ivory/40 px-4 py-3 text-xs font-semibold text-ivory transition-colors active:bg-ivory/10 sm:w-auto sm:py-2.5 sm:hover:border-warm-gold sm:hover:text-warm-gold"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
