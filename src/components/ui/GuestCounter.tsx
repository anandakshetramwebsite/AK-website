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
      className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-6 rounded-2xl border border-forest/10 bg-linen-dark/50 p-5"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-forest/70">Adults</span>
        <div className="flex items-center gap-2">
          <button
            onClick={decrementAdults}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors hover:bg-forest/20"
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
            className="flex h-8 w-8 items-center justify-center rounded-full bg-mango text-forest transition-all hover:scale-110"
            aria-label="Increase adults"
          >
            +
          </button>
        </div>
      </div>

      <div className="h-6 w-px bg-forest/20" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-forest/70">Children</span>
        <div className="flex items-center gap-2">
          <button
            onClick={decrementChildren}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors hover:bg-forest/20"
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
            className="flex h-8 w-8 items-center justify-center rounded-full bg-mango text-forest transition-all hover:scale-110"
            aria-label="Increase children"
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
}
