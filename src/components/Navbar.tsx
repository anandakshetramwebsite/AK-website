"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BRAND_LOGO, WHATSAPP_PHONE } from "@/lib/constants";
import { SINGLE_PAGE_NAV } from "@/lib/single-page-nav";

const BRAND_WORDS = ["Ananda", "Kshethram"] as const;

const clarifyWord = {
  hidden: { opacity: 0.2, filter: "blur(14px)", y: 6 },
  visible: (index: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.85,
      delay: 0.1 + index * 0.12,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!actionsOpen) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        actionsRef.current &&
        !actionsRef.current.contains(e.target as Node)
      ) {
        setActionsOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [actionsOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-gold/20 bg-forest-green/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2">
          <Image
            src={BRAND_LOGO}
            alt="Ananda Kshethram"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 object-contain drop-shadow-md"
            priority
          />
          <span className="font-serif text-xl font-bold tracking-tight text-white drop-shadow-md transition-colors group-hover:text-mango">
            {BRAND_WORDS.map((word, index) => (
              <motion.span
                key={word}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={clarifyWord}
                className="inline-block"
              >
                {word}
                {index === 0 ? "\u00a0" : ""}
              </motion.span>
            ))}
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {SINGLE_PAGE_NAV.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-mango transition-colors drop-shadow-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div ref={actionsRef} className="relative flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActionsOpen((open) => !open)}
            aria-expanded={actionsOpen}
            aria-label={
              actionsOpen
                ? "Hide WhatsApp and booking options"
                : "Show WhatsApp and booking options"
            }
            className={`flex items-center justify-center p-1 text-4xl leading-none transition-transform sm:text-5xl ${
              actionsOpen ? "scale-110" : "hover:scale-110"
            }`}
          >
            <span aria-hidden>🐄</span>
          </button>

          <AnimatePresence>
            {actionsOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full z-50 mt-2 flex min-w-[11rem] flex-col gap-2 rounded-xl border border-brand-gold/25 bg-forest-green/95 p-2 shadow-xl backdrop-blur-md sm:static sm:mt-0 sm:min-w-0 sm:flex-row sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActionsOpen(false)}
                  className="rounded-full border border-ivory/40 px-4 py-2 text-center text-sm font-semibold text-ivory transition-all hover:border-mango hover:text-mango sm:py-2"
                >
                  WhatsApp
                </a>
                <a
                  href="#programs"
                  onClick={() => setActionsOpen(false)}
                  className="rounded-full bg-mango px-5 py-2 text-center text-sm font-semibold text-forest shadow-lg transition-all hover:scale-105"
                >
                  Book Now
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}
