"use client";

import { motion } from "framer-motion";
import SectionEnquiryBar from "@/components/SectionEnquiryBar";
import { ANANDA_QUESTION } from "@/lib/site-copy";

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
            {ANANDA_QUESTION.quote}
          </blockquote>
          <div className="mx-auto mt-6 h-px w-16 bg-brand-gold/60" />
          <p className="mt-6 text-base leading-relaxed text-forest/80 sm:text-lg">
            {ANANDA_QUESTION.body}
          </p>

          <ul className="mx-auto mt-8 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
            {ANANDA_QUESTION.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-forest/85"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <SectionEnquiryBar actions={["book"]} compact className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
