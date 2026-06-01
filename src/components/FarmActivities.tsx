"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FARM_ACTIVITIES, whatsappUrl } from "@/lib/site-copy";

interface FarmActivitiesProps {
  embedded?: boolean;
}

export default function FarmActivities({ embedded = false }: FarmActivitiesProps) {
  const [active, setActive] = useState<{
    name: string;
    desc: string;
  } | null>(null);

  return (
    <section
      id="experience"
      className={
        embedded
          ? "border-t border-forest/10 bg-linen-dark px-4 pb-14 pt-8 sm:px-6 lg:px-8"
          : "section-pad bg-linen-dark"
      }
    >
      <div className={embedded ? "container-page mx-auto max-w-7xl" : "container-page"}>
        {!embedded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center sm:mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Complete Activity List
            </p>
            <h2 className="heading-section mt-3 text-forest">
              60+ Village Activities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
              From farm train rides and bullock carts to mud baths, box cricket,
              campfires, and goushala rituals — tap any activity to learn more.
            </p>
          </motion.div>
        )}

        {embedded && (
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-forest/50">
            All activities included in your visit
          </p>
        )}

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {FARM_ACTIVITIES.map((exp, index) => (
            <motion.button
              key={exp.name}
              type="button"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.02, 0.2) }}
              onClick={() => setActive({ name: exp.name, desc: exp.desc })}
              className={`group relative rounded-lg border bg-ivory p-3 text-left transition-all hover:border-brand-gold/50 ${
                "paidAddOn" in exp && exp.paidAddOn
                  ? "border-brand-gold/35"
                  : "border-forest/10"
              }`}
            >
              {"paidAddOn" in exp && exp.paidAddOn && (
                <span className="absolute -right-px -top-px rounded-bl-md rounded-tr-lg bg-brand-gold px-1.5 py-0.5 text-[8px] font-bold uppercase text-brand-crimson">
                  Add-on
                </span>
              )}
              <h3 className="font-serif text-sm font-semibold leading-snug text-forest group-hover:text-brand-crimson">
                {exp.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs leading-snug text-forest/60">
                {exp.short}
              </p>
            </motion.button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={whatsappUrl(
              "Hi, I want to know more about activities at Ananda Kshethram"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-forest-green px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-forest-light"
          >
            Enquire About Activities
          </a>
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
