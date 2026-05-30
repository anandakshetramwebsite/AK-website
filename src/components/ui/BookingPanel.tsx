"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { getWhatsAppUrl } from "@/lib/constants";

export default function BookingPanel() {
  const { booking, updateBooking, selectedProgram } = useBooking();

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
      className="mx-auto mt-8 max-w-2xl scroll-mt-24 rounded-2xl border-2 border-forest/10 bg-white/40 p-4 backdrop-blur-sm sm:p-6"
    >
      <h3 className="font-serif text-lg font-bold text-forest">
        Booking Details
      </h3>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="booking-date"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest/60"
          >
            Target Date
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
            Notes / Inquiries
          </label>
          <input
            id="booking-notes"
            type="text"
            placeholder="Evening pottery slot, dietary needs..."
            value={booking.notes}
            onChange={(e) => updateBooking({ notes: e.target.value })}
            className="min-h-12 w-full rounded-xl border border-forest/15 bg-linen px-4 py-3 text-base text-forest placeholder:text-forest/40 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
          />
        </div>
      </div>

      {selectedProgram && (
        <p className="mt-3 text-sm text-forest/70">
          Selected:{" "}
          <span className="font-semibold text-forest">
            {selectedProgram.title}
          </span>
        </p>
      )}

      <button
        id="btn-whatsapp-submit"
        onClick={handleWhatsAppSubmit}
        className="touch-target mt-5 w-full rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-lg transition-all active:scale-[0.98] hover:scale-[1.02] hover:shadow-[#25D366]/30"
      >
        Send Booking via WhatsApp 💬
      </button>
    </motion.div>
  );
}
