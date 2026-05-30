"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACTIVITY_HIGHLIGHTS } from "@/lib/constants";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

interface ActivitiesHighlightProps {
  embedded?: boolean;
}

export default function ActivitiesHighlight({
  embedded = false,
}: ActivitiesHighlightProps) {
  const [active, setActive] = useState<
    (typeof ACTIVITY_HIGHLIGHTS)[number] | null
  >(null);

  const featured = ACTIVITY_HIGHLIGHTS.filter((a) => a.featured);
  const rest = ACTIVITY_HIGHLIGHTS.filter((a) => !a.featured);

  return (
    <section
      id={embedded ? undefined : "activities"}
      className={embedded ? "pb-6 pt-2" : "section-pad village-pattern bg-warm-cream"}
    >
      <div className="container-page">
        {!embedded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center sm:mb-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Activities &amp; Experiences
            </p>
            <h2 className="heading-section mt-3 text-forest">
              The Heart of Every Visit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
              Farm train rides, bullock carts, village games, mud baths,
              campfires, and goushala rituals — 60+ activities that make Ananda
              Kshethram unforgettable.
            </p>
          </motion.div>
        )}

        {embedded && (
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-forest/50">
            Featured on the farm
          </p>
        )}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((activity, index) => (
            <motion.button
              key={activity.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setActive(activity)}
              className="group relative overflow-hidden rounded-xl border border-forest/10 bg-ivory text-left shadow-sm transition-all hover:border-brand-gold/40"
            >
              <PlaceholderImage
                label={activity.title}
                icon={activity.icon}
                className="aspect-[5/3] w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-crimson/90 to-transparent p-3 sm:p-4">
                <h3 className="font-serif text-base font-semibold text-ivory sm:text-lg">
                  {activity.title}
                </h3>
                <p className="text-[10px] text-brand-gold">{activity.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {rest.map((activity) => (
              <motion.button
                key={activity.id}
                type="button"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActive(activity)}
                className="rounded-lg border border-forest/10 bg-ivory p-3 text-left transition-all hover:border-brand-gold/40"
              >
                <span className="text-lg" aria-hidden>
                  {activity.icon}
                </span>
                <h3 className="mt-1 font-serif text-sm font-semibold text-forest">
                  {activity.title}
                </h3>
              </motion.button>
            ))}
          </div>
        )}
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
            aria-labelledby="activity-highlight-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-ivory p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-2xl" aria-hidden>
                    {active.icon}
                  </span>
                  <h3
                    id="activity-highlight-title"
                    className="mt-2 font-serif text-xl text-forest"
                  >
                    {active.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-gold">
                    {active.subtitle}
                  </p>
                </div>
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
                {active.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
