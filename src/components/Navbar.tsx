"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MAPS_URL, YOUTUBE_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Reviews" },
  { href: MAPS_URL, label: "Location", external: true },
  { href: YOUTUBE_URL, label: "Videos", external: true },
];

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
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-serif text-xl font-bold tracking-tight text-white drop-shadow-md group-hover:text-mango transition-colors">
            Ananda Kshethram
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/90 hover:text-mango transition-colors drop-shadow-sm"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-mango transition-colors drop-shadow-sm"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/917799900060"
          className="hidden rounded-full bg-mango px-5 py-2 text-sm font-semibold text-forest shadow-lg transition-all hover:scale-105 hover:shadow-mango/30 md:block"
        >
          Book Now
        </a>
      </nav>
    </motion.header>
  );
}
