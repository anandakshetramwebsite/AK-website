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
    <div
      className={`flex flex-col items-center justify-center gap-2 sm:flex-row ${
        isLight ? "text-forest" : "text-ivory"
      }`}
    >
      <p
        className={`text-base md:text-lg ${
          isLight ? "text-forest/80" : "text-ivory/90"
        }`}
      >
        A peaceful day for
      </p>
      <div className="relative h-8 w-full min-w-0 max-w-[280px] overflow-hidden sm:min-w-[240px] md:h-9">
        <AnimatePresence mode="wait">
          <motion.span
            key={keywordIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className={`absolute inset-0 font-serif text-lg font-semibold italic md:text-xl ${
              isLight ? "text-brand-crimson" : "text-brand-gold"
            }`}
          >
            {HERO_KEYWORDS[keywordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
