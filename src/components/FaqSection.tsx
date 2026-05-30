"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HOMEPAGE_FAQS } from "@/lib/site-copy";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-linen">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Before Your Agri Tourism Visit
          </p>
          <h2 className="heading-section mt-3 text-forest">Common Questions</h2>
        </motion.div>

        <ul className="mx-auto max-w-3xl divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-ivory">
          {HOMEPAGE_FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-forest sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`mt-1 shrink-0 text-xl text-brand-gold transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-forest/75 sm:px-6 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
