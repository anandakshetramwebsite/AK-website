"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ALL_MANGOS = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${4 + ((i * 11.7) % 92)}%`,
  delay: i * 0.65,
  duration: 9 + (i % 5) * 1.8,
  sizeRem: 0.9 + (i % 4) * 0.3,
  drift: (i % 2 === 0 ? 1 : -1) * (24 + (i % 6) * 10),
  rotateEnd: 360 + (i % 3) * 120,
  mobileOnly: i < 8,
}));

export default function FallingMangoes() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const widthMq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setReducedMotion(motionMq.matches);
      setIsDesktop(widthMq.matches);
    };
    update();
    motionMq.addEventListener("change", update);
    widthMq.addEventListener("change", update);
    return () => {
      motionMq.removeEventListener("change", update);
      widthMq.removeEventListener("change", update);
    };
  }, []);

  if (reducedMotion) return null;

  const mangos = isDesktop
    ? ALL_MANGOS
    : ALL_MANGOS.filter((m) => m.mobileOnly);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[15] overflow-hidden"
      aria-hidden
    >
      {mangos.map((m) => (
        <motion.span
          key={m.id}
          className="absolute -top-12 select-none opacity-60 drop-shadow-md sm:opacity-75"
          style={{ left: m.left, fontSize: `${m.sizeRem}rem` }}
          initial={{ y: "-5vh", x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "105vh",
            x: [0, m.drift, m.drift * 0.5, 0],
            rotate: [0, m.rotateEnd * 0.5, m.rotateEnd],
            opacity: [0, 0.75, 0.75, 0],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: "linear",
            times: [0, 0.08, 0.92, 1],
            x: {
              duration: m.duration,
              repeat: Infinity,
              delay: m.delay,
              ease: "easeInOut",
            },
          }}
        >
          🥭
        </motion.span>
      ))}
    </div>
  );
}
