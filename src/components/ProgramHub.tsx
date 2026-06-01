"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { PROGRAMS } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";
import ProgramCard from "@/components/ui/ProgramCard";
import BookingPanel from "@/components/ui/BookingPanel";
import AudienceRotator from "@/components/AudienceRotator";
import SectionEnquiryBar from "@/components/SectionEnquiryBar";

const FILTERS = [
  { id: "all", label: "All Packages" },
  { id: "family", label: "Day Outing Packages" },
  { id: "night-stay", label: "Night Stay Packages" },
  { id: "school", label: "School Trip Packages" },
  { id: "corporate", label: "Corporate Packages" },
  { id: "events", label: "Event Bookings" },
];

export default function ProgramHub() {
  const { activeFilter, setActiveFilter } = useBooking();

  const filteredPrograms = useMemo(() => {
    if (activeFilter === "all") return PROGRAMS;
    if (activeFilter === "events") {
      return PROGRAMS.filter(
        (p) => p.id === "mango-festival" || p.id === "kitty-reunion"
      );
    }
    return PROGRAMS.filter((p) => p.categories.includes(activeFilter as never));
  }, [activeFilter]);

  return (
    <section id="programs" className="section-pad scroll-mt-20 bg-linen">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Packages &amp; Booking
          </p>
          <h2 className="heading-section mt-3 text-forest">
            Day Outings · Night Stays · School · Corporate · Events
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
            Transparent pricing — day outing packages, night stay packages, school
            trip packages, corporate packages, and event booking enquiries.
          </p>

          <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-brand-gold/40 bg-ivory shadow-[0_4px_24px_rgba(201,148,26,0.12)]">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            <div className="flex flex-col items-center gap-4 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-5">
              <div
                className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold to-warm-gold shadow-md ring-2 ring-brand-gold/25"
                aria-hidden
              >
                <span className="font-serif text-xl font-bold leading-none text-brand-crimson">
                  30+
                </span>
                <span className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-brand-crimson/80">
                  guests
                </span>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Group discount
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-forest/85 sm:text-base">
                  Special rates on day outings, night stays, and corporate
                  bookings when your party is{" "}
                  <span className="font-semibold text-forest">
                    30 or more
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="border-t border-brand-gold/25 bg-linen/40 px-4 py-4 sm:px-6 sm:py-4">
              <AudienceRotator />
            </div>
          </div>
        </motion.div>

        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-visible sm:px-0">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileTap={{ scale: 0.97 }}
              className={`shrink-0 snap-start rounded-full px-3.5 py-2.5 text-xs font-semibold transition-all sm:px-4 sm:text-sm ${
                activeFilter === filter.id
                  ? "bg-brand-crimson text-ivory shadow-lg"
                  : "bg-linen-dark text-forest/70 hover:bg-brand-crimson/10"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {filteredPrograms.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </motion.div>

        <BookingPanel />

        {filteredPrograms.length === 0 && (
          <p className="mt-10 text-center text-forest/50">
            No programs match this filter.
          </p>
        )}

        <SectionEnquiryBar
          actions={["book", "enquire"]}
          waText="Hi, I want to book a package at Ananda Kshethram"
          compact
        />
      </div>
    </section>
  );
}
