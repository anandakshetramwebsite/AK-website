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
    <section id="testimonials" className="section-pad bg-linen">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Voices from the Farm
          </p>
          <h2 className="heading-section mt-3 text-forest">
            Trusted by Schools &amp; Families
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
              className="font-semibold text-forest hover:text-brand-gold"
            >
              Subscribe on YouTube @anandakshethram →
            </a>
          </p>

          {/* Testimonial slider */}
          <div className="relative rounded-2xl border border-forest/10 bg-white/50 p-5 backdrop-blur-sm sm:p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-4xl text-brand-gold">&ldquo;</span>
                <p className="mt-2 font-serif text-lg leading-relaxed text-forest sm:text-xl md:text-2xl">
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
                        ? "w-8 bg-brand-gold"
                        : "w-2 bg-forest/20 hover:bg-brand-crimson/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="touch-target rounded-full border border-forest/20 text-lg text-forest transition-colors hover:border-brand-gold hover:text-brand-gold"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="touch-target rounded-full border border-forest/20 text-lg text-forest transition-colors hover:border-brand-gold hover:text-brand-gold"
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
