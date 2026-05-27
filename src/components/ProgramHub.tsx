"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROGRAMS } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";
import ProgramCard from "@/components/ui/ProgramCard";
import GuestCounter from "@/components/ui/GuestCounter";
import BookingPanel from "@/components/ui/BookingPanel";

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
    <section id="programs" className="bg-linen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">
            Program Hub
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-forest md:text-5xl">
            Choose Your Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest/70">
            Farm retreats, village games, corporate events, photoshoots &amp;
            more — curated for every occasion.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeFilter === filter.id
                  ? "bg-forest text-linen shadow-lg"
                  : "bg-linen-dark text-forest/70 hover:bg-forest/10"
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
            className="mt-10 flex gap-5 overflow-x-auto pb-6 scrollbar-hide md:flex-wrap md:justify-center md:overflow-visible"
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
      </div>
    </section>
  );
}
