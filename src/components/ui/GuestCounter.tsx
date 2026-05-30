"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function GuestCounter() {
  const { booking, updateBooking } = useBooking();

  const incrementAdults = () =>
    updateBooking({ adults: Math.min(booking.adults + 1, 50) });
  const decrementAdults = () =>
    updateBooking({ adults: Math.max(booking.adults - 1, 1) });
  const incrementChildren = () =>
    updateBooking({ children: Math.min(booking.children + 1, 50) });
  const decrementChildren = () =>
    updateBooking({ children: Math.max(booking.children - 1, 0) });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mt-8 flex max-w-lg flex-col items-stretch justify-center gap-5 rounded-2xl border border-forest/10 bg-linen-dark/50 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:p-5"
    >
      <div className="flex items-center justify-between gap-3 sm:justify-center">
        <span className="text-sm font-medium text-forest/70">Adults</span>
        <div className="flex items-center gap-2">
          <button
            onClick={decrementAdults}
            className="touch-target rounded-full bg-forest/10 text-lg text-forest transition-colors hover:bg-forest/20"
            aria-label="Decrease adults"
          >
            −
          </button>
          <span
            id="adult-count"
            className="min-w-[2rem] text-center text-lg font-bold text-forest"
          >
            {booking.adults}
          </span>
          <button
            id="btn-add-adult"
            onClick={incrementAdults}
            className="touch-target rounded-full bg-brand-gold text-lg text-brand-crimson transition-all hover:scale-110"
            aria-label="Increase adults"
          >
            +
          </button>
        </div>
      </div>

      <div className="hidden h-6 w-px bg-forest/20 sm:block" />

      <div className="flex items-center justify-between gap-3 sm:justify-center">
        <span className="text-sm font-medium text-forest/70">Children</span>
        <div className="flex items-center gap-2">
          <button
            onClick={decrementChildren}
            className="touch-target rounded-full bg-forest/10 text-lg text-forest transition-colors hover:bg-forest/20"
            aria-label="Decrease children"
          >
            −
          </button>
          <span
            id="child-count"
            className="min-w-[2rem] text-center text-lg font-bold text-forest"
          >
            {booking.children}
          </span>
          <button
            id="btn-add-child"
            onClick={incrementChildren}
            className="touch-target rounded-full bg-brand-gold text-lg text-brand-crimson transition-all hover:scale-110"
            aria-label="Increase children"
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
}
