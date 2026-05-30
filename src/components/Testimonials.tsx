"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS, YOUTUBE_URL } from "@/lib/constants";
import { YOUTUBE_VIDEOS } from "@/lib/social";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Testimonials() {
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
            Real Voices
          </p>
          <h2 className="heading-section mt-3 text-forest">Hear It From Them</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-forest/70">
            Real visitors to our agri tourism farm. Real words. Zero scripts.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className="rounded-2xl border border-forest/10 bg-white/60 p-5 backdrop-blur-sm sm:p-6"
              >
                <p className="font-serif text-base leading-relaxed text-forest">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-forest/10 pt-4">
                  <p className="font-semibold text-forest">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-forest/55">
                    {t.role}
                  </p>
                </footer>
              </article>
            ))}
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-2">
            {YOUTUBE_VIDEOS.map((video) => (
              <YouTubeEmbed key={video.id} videoId={video.id} title={video.title} />
            ))}
          </div>
          <p className="text-center text-sm text-forest/70">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest hover:text-brand-gold"
            >
              Subscribe on YouTube @anandakshethram →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
