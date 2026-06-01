"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HERO_CAROUSEL_SLIDES } from "@/lib/site-images";

const SLIDE_MS = 5500;

export default function HeroImageCarousel() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const slideCount = HERO_CAROUSEL_SLIDES.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slideCount) + slideCount) % slideCount);
    },
    [slideCount]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reducedMotion || slideCount < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, slideCount]);

  const slide = HERO_CAROUSEL_SLIDES[index];

  return (
    <div className="absolute inset-0" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.src}
          initial={reducedMotion ? false : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {slideCount > 1 && (
        <div
          className="absolute bottom-28 left-0 right-0 z-10 flex justify-center gap-1.5 px-4 sm:bottom-32"
          role="tablist"
          aria-label="Hero photo gallery"
        >
          {HERO_CAROUSEL_SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1} of ${slideCount}: ${s.alt}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-brand-gold"
                  : "w-1.5 bg-ivory/50 hover:bg-ivory/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
