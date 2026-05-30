"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROGRAMS } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";
import ProgramCard from "@/components/ui/ProgramCard";
import GuestCounter from "@/components/ui/GuestCounter";
import BookingPanel from "@/components/ui/BookingPanel";
import AudienceRotator from "@/components/AudienceRotator";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "family", label: "Family Outings" },
  { id: "corporate", label: "Corporate Retreats" },
  { id: "school", label: "School Trips" },
  { id: "night-stay", label: "Night Stays" },
];

export default function ProgramHub() {
  const { activeFilter, setActiveFilter } = useBooking();

  const filteredPrograms = useMemo(() => {
    if (activeFilter === "all") return PROGRAMS;
    return PROGRAMS.filter((p) => p.categories.includes(activeFilter as never));
  }, [activeFilter]);

  return (
    <section id="programs" className="section-pad bg-linen">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Packages &amp; Pricing
          </p>
          <h2 className="heading-section mt-3 text-forest">Choose Your Visit</h2>

          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-brand-crimson/10 bg-ivory/80 px-4 py-4 shadow-sm sm:px-5">
            <AudienceRotator />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
            Transparent rates for families, schools, and teams. Pick a program,
            set your group size, and send a WhatsApp enquiry in one step.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileTap={{ scale: 0.97 }}
              className={`shrink-0 snap-start rounded-full px-4 py-3 text-sm font-semibold transition-all sm:px-5 ${
                activeFilter === filter.id
                  ? "bg-brand-crimson text-ivory shadow-lg"
                  : "bg-linen-dark text-forest/70 hover:bg-brand-crimson/10"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Guest counter & booking panel */}
        <BookingPanel />
        <GuestCounter />

        {/* Program grid / slider */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 flex flex-col gap-5 sm:mt-10 md:flex-row md:flex-wrap md:justify-center"
          >
            {filteredPrograms.map((program, index) => (
              <ProgramCard
                key={program.id}
                program={program}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPrograms.length === 0 && (
          <p className="mt-10 text-center text-forest/50">
            No programs match this filter.
          </p>
        )}

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-forest/65">
          Need something custom? We build packages around your group.{" "}
          <a
            href="https://wa.me/917799900060"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-crimson hover:text-brand-gold"
          >
            WhatsApp us →
          </a>
        </p>
      </div>
    </section>
  );
}
