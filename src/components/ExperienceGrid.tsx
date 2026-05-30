"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EXPERIENCE_PILLARS } from "@/lib/constants";

export default function ExperienceGrid() {
  return (
    <section id="experience" className="section-pad bg-linen-dark">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            On the Farm
          </p>
          <h2 className="heading-section mt-3 text-forest">
            What Every Visit Includes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
            Goushala mornings, village games, sattvic meals, and trails through
            orchards — the same soulful farm rhythm, whether you come for a day
            or stay the night.
          </p>
        </motion.div>

        <div className="grid auto-rows-[minmax(200px,1fr)] grid-cols-1 gap-4 sm:auto-rows-[200px] md:grid-cols-4 md:auto-rows-[180px]">
          {EXPERIENCE_PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative min-h-[200px] overflow-hidden rounded-2xl md:min-h-0 ${pillar.span}`}
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-crimson/90 via-deep-crimson/45 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {pillar.subtitle}
                </p>
                <h3 className="mt-1 font-serif text-lg font-bold text-white sm:text-xl md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-24 md:group-hover:opacity-100">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
