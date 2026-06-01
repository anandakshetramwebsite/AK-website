"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { getWhatsAppUrl } from "@/lib/constants";

export default function BookingPanel() {
  const { booking, updateBooking, selectedProgram } = useBooking();

  const incrementAdults = () =>
    updateBooking({ adults: Math.min(booking.adults + 1, 50) });
  const decrementAdults = () =>
    updateBooking({ adults: Math.max(booking.adults - 1, 1) });
  const incrementChildren = () =>
    updateBooking({ children: Math.min(booking.children + 1, 50) });
  const decrementChildren = () =>
    updateBooking({ children: Math.max(booking.children - 1, 0) });

  const handleWhatsAppSubmit = () => {
    const url = getWhatsAppUrl(booking);
    window.open(url, "_blank");
  };

  return (
    <motion.div
      id="booking"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mt-10 max-w-2xl scroll-mt-24 rounded-2xl border-2 border-forest/10 bg-white/40 p-4 backdrop-blur-sm sm:p-6"
    >
      <h3 className="font-serif text-lg font-bold text-forest">
        Booking Details
      </h3>

      {selectedProgram && (
        <p className="mt-4 rounded-lg bg-brand-gold/10 px-3 py-2 text-sm text-forest">
          Selected package:{" "}
          <span className="font-semibold">{selectedProgram.title}</span>
        </p>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="booking-date"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest/60"
          >
            Visit Date
          </label>
          <input
            id="booking-date"
            type="date"
            value={booking.date}
            onChange={(e) => updateBooking({ date: e.target.value })}
            className="min-h-12 w-full rounded-xl border border-forest/15 bg-linen px-4 py-3 text-base text-forest focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
          />
        </div>

        <div>
          <label
            htmlFor="booking-notes"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest/60"
          >
            Notes (optional)
          </label>
          <input
            id="booking-notes"
            type="text"
            placeholder="Group type, dietary needs, add-ons..."
            value={booking.notes}
            onChange={(e) => updateBooking({ notes: e.target.value })}
            className="min-h-12 w-full rounded-xl border border-forest/15 bg-linen px-4 py-3 text-base text-forest placeholder:text-forest/40 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-forest/10 bg-linen-dark/50 p-4 sm:p-5">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">
          Guest Count
        </p>
        <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <div className="flex items-center justify-between gap-3 sm:justify-start">
            <span className="text-sm font-medium text-forest/70">Adults</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decrementAdults}
                className="touch-target flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-lg text-forest transition-colors hover:bg-forest/20"
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
                type="button"
                id="btn-add-adult"
                onClick={incrementAdults}
                className="touch-target flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-lg text-brand-crimson transition-all hover:scale-110"
                aria-label="Increase adults"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-start">
            <span className="text-sm font-medium text-forest/70">Children</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decrementChildren}
                className="touch-target flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-lg text-forest transition-colors hover:bg-forest/20"
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
                type="button"
                id="btn-add-child"
                onClick={incrementChildren}
                className="touch-target flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-lg text-brand-crimson transition-all hover:scale-110"
                aria-label="Increase children"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        id="btn-whatsapp-submit"
        onClick={handleWhatsAppSubmit}
        className="touch-target mt-6 w-full rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-lg transition-all active:scale-[0.98] hover:scale-[1.02] hover:shadow-[#25D366]/30"
      >
        Send Booking via WhatsApp
      </button>
    </motion.div>
  );
}
