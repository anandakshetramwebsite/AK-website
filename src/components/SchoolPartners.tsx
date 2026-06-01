"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  SCHOOL_BADGES,
  SCHOOL_TESTIMONIALS,
  whatsappUrl,
} from "@/lib/site-copy";

export default function SchoolPartners() {
  return (
    <section
      id="school-trust"
      className="section-pad bg-deep-crimson text-ivory"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            School Agri Tourism Partnerships
          </p>
          <h2 className="heading-section mt-3 text-ivory">
            Trusted by 100+ Schools Across Hyderabad
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3"
        >
          {SCHOOL_BADGES.map((school, index) => {
            const isMore = school.startsWith("+");
            return (
              <span
                key={school}
                className={`school-badge-shine rounded-full border px-4 py-2 text-center text-xs font-medium sm:text-sm ${
                  isMore
                    ? "border-brand-gold/60 bg-brand-gold/15 text-brand-gold"
                    : "border-ivory/20 bg-ivory/5 text-ivory/85"
                }`}
                style={
                  {
                    "--shine-delay": `${(index * 0.38) % 3.4}s`,
                  } as CSSProperties
                }
              >
                <span className="relative z-10">{school}</span>
              </span>
            );
          })}
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SCHOOL_TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.attr}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-ivory/10 bg-midnight-crimson/50 p-6 sm:p-8"
            >
              <p className="font-serif text-lg leading-relaxed text-ivory/95">
                {t.text}
              </p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
                {t.attr}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-6 rounded-2xl border border-brand-gold/30 bg-midnight-crimson/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="max-w-xl">
            <h3 className="font-serif text-xl text-ivory sm:text-2xl">
              Free Familiarisation Visit for Teachers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory/75 sm:text-base">
              Are you a school coordinator or principal? See our agri tourism
              farm, meet our team, plan your visit — zero commitment before you
              book.
            </p>
          </div>
          <a
            href={whatsappUrl("Hi, I want to request a FAM visit")}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target shrink-0 rounded-full bg-brand-gold px-6 py-3.5 text-center text-sm font-bold text-brand-crimson shadow-lg transition-transform hover:scale-[1.02]"
          >
            Request FAM Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
