"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImagePaths } from "@/lib/site-images";

const GALLERY = galleryImagePaths().filter((src) => src.length > 0);

export default function FarmGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (GALLERY.length === 0) return null;

  return (
    <section id="gallery" className="section-pad scroll-mt-20 bg-ivory">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Photo Gallery
          </p>
          <h2 className="heading-section mt-3 text-forest">
            Life at Ananda Kshethram
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70">
            Harvest days, school trips, goushala mornings, village games, and
            celebrations — moments from our farm, shared with families who visit
            us.
          </p>
        </motion.div>

        <div className="mt-10 columns-2 gap-2 sm:columns-3 lg:columns-4">
          {GALLERY.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: Math.min(index * 0.02, 0.3) }}
              onClick={() => setLightbox(src)}
              className="group mb-2 block w-full break-inside-avoid overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src={src}
                  alt={`Ananda Kshethram farm — photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-crimson/85 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged photo"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={lightbox}
                  alt="Ananda Kshethram"
                  fill
                  className="rounded-lg object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -right-1 -top-10 rounded-full px-3 py-1 text-sm text-ivory/90 hover:text-white"
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
