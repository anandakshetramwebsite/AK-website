"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_PILLARS } from "@/lib/constants";
import { PILLAR_IMAGES } from "@/lib/site-images";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function ExperienceGrid() {
  return (
    <section id="farm-includes" className="section-pad bg-linen-dark">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            On the Farm
          </p>
          <h2 className="heading-section mt-3 text-forest">
            What Every Visit Includes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
            Sattvic meals, goushala mornings, village games, and nature trails —
            the village-inspired rhythm of Ananda Kshethram, whether you visit
            for a day or stay the night.
          </p>
        </motion.div>

        <div className="grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-3 sm:auto-rows-[180px] md:grid-cols-4 md:auto-rows-[160px]">
          {EXPERIENCE_PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group relative min-h-[180px] overflow-hidden rounded-xl md:min-h-0 ${pillar.span}`}
            >
              <PlaceholderImage
                label={pillar.title}
                src={PILLAR_IMAGES[pillar.id] ?? pillar.image}
                className="absolute inset-0 h-full w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-crimson/90 via-forest-green/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
                  {pillar.subtitle}
                </p>
                <h3 className="mt-0.5 font-serif text-base font-bold text-white sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/80 sm:text-sm">
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
