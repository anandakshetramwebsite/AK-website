"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FARM_ACTIVITIES } from "@/lib/site-copy";

export default function FarmActivities() {
  const [active, setActive] = useState<{
    name: string;
    desc: string;
  } | null>(null);

  return (
    <section id="experience" className="section-pad bg-linen-dark">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            60+ Agri Tourism Activities
          </p>
          <h2 className="heading-section mt-3 text-forest">What Awaits You</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
            From sunrise to bonfire — every hour holds something to discover on
            our farm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {FARM_ACTIVITIES.map((exp, index) => (
            <motion.button
              key={exp.name}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setActive({ name: exp.name, desc: exp.desc })}
              className={`group touch-target relative rounded-xl border bg-ivory p-4 text-left shadow-sm transition-all hover:border-brand-gold/50 hover:shadow-md ${
                "paidAddOn" in exp && exp.paidAddOn
                  ? "border-brand-gold/35 ring-1 ring-brand-gold/20"
                  : "border-forest/10"
              }`}
            >
              {"paidAddOn" in exp && exp.paidAddOn && (
                <span className="absolute -right-px -top-px z-10 whitespace-nowrap rounded-bl-lg rounded-tr-xl border border-brand-gold/50 bg-gradient-to-r from-brand-gold to-warm-gold px-2.5 py-1 text-[9px] font-bold uppercase leading-none tracking-[0.12em] text-brand-crimson shadow-sm">
                  Paid add-on
                </span>
              )}
              <h3
                className={`font-serif text-base font-semibold text-forest group-hover:text-brand-crimson ${
                  "paidAddOn" in exp && exp.paidAddOn ? "pr-14" : ""
                }`}
              >
                {exp.name}
              </h3>
              <p className="mt-1.5 text-sm leading-snug text-forest/65">
                {exp.short}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-midnight-crimson/60 p-4 sm:items-center"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="activity-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-ivory p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="activity-modal-title"
                  className="font-serif text-xl text-forest"
                >
                  {active.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="touch-target rounded-full px-2 text-forest/50 hover:text-brand-crimson"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-forest/80">
                {active.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
