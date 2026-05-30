"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionEnquiryBar from "@/components/SectionEnquiryBar";
import { ANANDA_COMPARE_IMAGES, ANANDA_QUESTION } from "@/lib/site-copy";

export default function AnandaQuestion() {
  return (
    <section
      id="why"
      className="bg-linen px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-5 lg:px-8 lg:pb-24"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            {ANANDA_QUESTION.eyebrow}
          </p>
          <blockquote className="heading-section mt-4 text-forest">
            &ldquo;{ANANDA_QUESTION.quote}&rdquo;
          </blockquote>
          <div className="mx-auto mt-6 h-px w-16 bg-brand-gold/60" />
          <p className="mt-6 text-base leading-relaxed text-forest/80 sm:text-lg">
            {ANANDA_QUESTION.body}
          </p>
          <SectionEnquiryBar actions={["plan"]} compact className="mx-auto" />
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <motion.figure
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-forest/10 bg-ivory shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={ANANDA_COMPARE_IMAGES.screen}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-midnight-crimson/25" />
            </div>
            <figcaption className="px-4 py-4 text-center text-sm font-medium text-forest/80 sm:px-5 sm:text-base">
              {ANANDA_QUESTION.screenCaption}
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-brand-gold/30 bg-ivory shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={ANANDA_COMPARE_IMAGES.mud}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <figcaption className="bg-forest-green px-4 py-4 text-center text-sm font-medium text-ivory sm:px-5 sm:text-base">
              {ANANDA_QUESTION.farmCaption}
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
