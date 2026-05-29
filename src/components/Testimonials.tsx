"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS, YOUTUBE_URL } from "@/lib/constants";
import { YOUTUBE_VIDEOS } from "@/lib/social";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const TYPE_ICONS = {
  corporate: "🏢",
  school: "🎓",
  family: "👨‍👩‍👧‍👦",
};

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="bg-linen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">
            Social Proof
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-forest md:text-5xl">
            Trusted by Institutions &amp; Families
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            {YOUTUBE_VIDEOS.map((video) => (
              <YouTubeEmbed key={video.id} videoId={video.id} title={video.title} />
            ))}
          </div>
          <p className="mb-10 text-center text-sm text-forest/70">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest hover:text-mango"
            >
              Subscribe on YouTube @anandakshethram →
            </a>
          </p>

          {/* Testimonial slider */}
          <div className="relative rounded-2xl border border-forest/10 bg-white/50 p-8 backdrop-blur-sm md:p-12">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-4xl text-mango">&ldquo;</span>
                <p className="mt-2 font-serif text-xl leading-relaxed text-forest md:text-2xl">
                  {TESTIMONIALS[active].quote}
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-xl">
                    {TYPE_ICONS[TESTIMONIALS[active].type]}
                  </span>
                  <div>
                    <cite className="not-italic font-semibold text-forest">
                      {TESTIMONIALS[active].name}
                    </cite>
                    <p className="text-sm text-forest/60">
                      {TESTIMONIALS[active].role}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === active
                        ? "w-8 bg-mango"
                        : "w-2 bg-forest/20 hover:bg-forest/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest transition-colors hover:border-mango hover:text-mango"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest transition-colors hover:border-mango hover:text-mango"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
