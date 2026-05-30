"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CORE_EXPERIENCES, WHATSAPP_PHONE } from "@/lib/constants";

const AUDIENCE_FILTERS = [
  { id: "all", label: "All" },
  { id: "family", label: "Families" },
  { id: "corporate", label: "Corporates" },
  { id: "school", label: "Schools" },
  { id: "community", label: "Communities" },
] as const;

export default function CoreExperiences() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? CORE_EXPERIENCES
      : CORE_EXPERIENCES.filter((exp) => exp.audience === filter);

  return (
    <section id="experiences" className="section-pad scroll-mt-20 bg-linen">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Core Experiences
          </p>
          <h2 className="heading-section mt-3 text-forest">
            For Families, Schools, Corporates &amp; Communities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
            Ananda Kshethram caters to{" "}
            <strong className="font-semibold text-forest">families</strong>,{" "}
            <strong className="font-semibold text-forest">schools</strong>,{" "}
            <strong className="font-semibold text-forest">corporates</strong>,
            and{" "}
            <strong className="font-semibold text-forest">communities</strong> —
            with day outings, night stays, camps, and celebrations.
          </p>
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {AUDIENCE_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === f.id
                  ? "bg-forest-green text-ivory"
                  : "border border-forest/15 bg-ivory text-forest/70 hover:border-brand-gold/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group flex items-start gap-3 rounded-xl border border-forest/10 bg-ivory p-4 shadow-sm transition-all hover:border-brand-gold/35"
            >
              <span className="mt-0.5 shrink-0 text-xl" aria-hidden>
                {exp.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-gold">
                  {exp.subtitle}
                </p>
                <h3 className="mt-0.5 font-serif text-base font-semibold text-forest">
                  {exp.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm leading-snug text-forest/65">
                  {exp.description}
                </p>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: filtered.length * 0.03 }}
            className="flex min-h-[9.5rem] flex-col items-center justify-center rounded-xl border border-brand-gold/45 bg-forest-green p-5 text-center shadow-sm sm:min-h-0"
          >
            <span className="text-2xl" aria-hidden>
              🌿
            </span>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-gold">
              Not sure which fits?
            </p>
            <h3 className="mt-1.5 font-serif text-base font-semibold italic leading-snug text-ivory sm:text-lg">
              Plan your farm experience
            </h3>
            <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-ivory/75">
              Tell us your group size and occasion — we&apos;ll suggest the
              right package.
            </p>
            <div className="mt-4 flex w-full max-w-[12rem] flex-col gap-2">
              <a
                href="#programs"
                className="rounded-full bg-brand-gold px-4 py-2.5 text-sm font-bold text-brand-crimson shadow-md transition-transform hover:scale-[1.02]"
              >
                Book Your Visit
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ivory/45 px-4 py-2 text-xs font-semibold text-ivory transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Grid CTA card fills the 12th slot — no duplicate bar below */}
      </div>
    </section>
  );
}
