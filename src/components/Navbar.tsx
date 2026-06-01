"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                className="text-sm font-medium text-white/90 transition-colors hover:text-mango drop-shadow-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ivory/40 px-4 py-2 text-center text-sm font-semibold text-ivory transition-all hover:border-mango hover:text-mango"
          >
            WhatsApp
          </a>
          <a
            href="#programs"
            className="rounded-full bg-mango px-5 py-2 text-center text-sm font-semibold text-forest shadow-lg transition-all hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
