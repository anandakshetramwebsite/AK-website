"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EXPERIENCE_PILLARS } from "@/lib/constants";

export default function ExperienceGrid() {
  return (
    <section id="experience" className="bg-linen-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">
            The Ananda Experience
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-forest md:text-5xl">
            Pillars of Kshethram
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest/70">
            Universal features across every program — from curated gastronomy to
            rural exploration and premium amenities.
          </p>
        </motion.div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {EXPERIENCE_PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl ${pillar.span}`}
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-mango">
                  {pillar.subtitle}
                </p>
                <h3 className="mt-1 font-serif text-xl font-bold text-white md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
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
