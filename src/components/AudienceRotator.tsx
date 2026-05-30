"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_KEYWORDS } from "@/lib/constants";

type Props = {
  /** light = cream/forest sections, dark = on crimson if needed later */
  variant?: "light" | "dark";
};

export default function AudienceRotator({ variant = "light" }: Props) {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const isLight = variant === "light";

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((i) => (i + 1) % HERO_KEYWORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`flex flex-wrap items-baseline justify-center gap-x-1.5 text-center text-base leading-snug md:text-lg ${
        isLight ? "text-forest/80" : "text-ivory/90"
      }`}
    >
      <span>A peaceful day for</span>
      <span
        className="relative inline-block h-[1.35em] min-w-[10.5rem] overflow-hidden sm:min-w-[11.5rem] md:min-w-[13.5rem]"
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={keywordIndex}
            initial={{ opacity: 0, y: "0.5em" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-0.5em" }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-x-0 bottom-0 whitespace-nowrap font-serif text-lg font-semibold italic leading-none md:text-xl ${
              isLight ? "text-brand-crimson" : "text-brand-gold"
            }`}
          >
            {HERO_KEYWORDS[keywordIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}
