"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Program } from "@/lib/constants";
import { calculateGroupDiscount } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";

interface ProgramCardProps {
  program: Program;
  index: number;
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
  const {
    booking,
    updateBooking,
    expandedProgramId,
    setExpandedProgramId,
  } = useBooking();

  const isExpanded = expandedProgramId === program.id;
  const isSelected = booking.programId === program.id;
  const isSchool = program.category === "school";
  const discount = calculateGroupDiscount(
    program,
    booking.adults,
    booking.children
  );

  const handleSelect = () => {
    updateBooking({
      programId: program.id,
      programTitle: program.title,
    });
    setExpandedProgramId(isExpanded ? null : program.id);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 transition-colors ${
        isSelected
          ? "border-brand-gold shadow-xl shadow-brand-gold/20"
          : "border-forest/10 hover:border-brand-crimson/30"
      } ${isExpanded ? "w-full max-w-3xl" : "w-full max-w-md sm:max-w-sm md:w-80"}`}
      onClick={handleSelect}
      data-program-id={program.id}
    >
      <div className={`relative ${isExpanded ? "flex flex-col md:flex-row" : ""}`}>
        <div
          className={`relative overflow-hidden ${
            isExpanded
              ? "h-48 w-full md:h-auto md:min-h-[320px] md:w-1/2"
              : "h-44"
          }`}
        >
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-crimson/65 to-transparent" />

          {program.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-linen/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
              {program.badge}
            </span>
          )}

          {program.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-brand-crimson">
              Most Booked
            </span>
          )}
        </div>

        <div className={`bg-linen p-4 sm:p-5 ${isExpanded ? "md:w-1/2 md:p-6" : ""}`}>
          <h3 className="font-serif text-lg font-bold text-forest">
            {program.title}
          </h3>
          <p className="mt-1 text-sm text-forest/60">{program.subtitle}</p>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="text-lg font-bold text-brand-gold">
              ₹{program.adultPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-forest/50">
              {isSchool ? "Student (with lunch)" : "Adult"}
            </span>
            {program.childPrice > 0 && (
              <>
                <span className="text-forest/30">·</span>
                <span className="text-sm font-semibold text-forest/70">
                  ₹{program.childPrice.toLocaleString("en-IN")}{" "}
                  {isSchool ? "without lunch" : "Child (3–12)"}
                </span>
              </>
            )}
          </div>

          {program.groupDiscount && (
            <p className="mt-2 text-xs font-medium text-forest/70">
              Group of {program.groupDiscount.minGroup}+ →{" "}
              <span className="text-brand-gold font-bold">
                {program.groupDiscount.percent}% OFF
              </span>
            </p>
          )}

          {discount > 0 && isSelected && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-2 rounded-lg bg-brand-gold/15 px-3 py-1.5 text-xs font-semibold text-forest"
            >
              🎟️ {discount}% group discount applied!
            </motion.p>
          )}

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4"
            >
              <p className="text-sm leading-relaxed text-forest/80">
                {program.description}
              </p>
              <ul className="mt-3 space-y-1.5">
                {program.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-xs text-forest/70"
                  >
                    <span className="text-brand-gold">✦</span> {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                {program.formUrl && (
                  <a
                    href={program.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="touch-target rounded-full border border-forest/20 px-4 py-2.5 text-xs font-semibold text-forest transition-colors hover:border-brand-gold hover:text-brand-crimson"
                  >
                    Register via Form
                  </a>
                )}
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateBooking({
                      programId: program.id,
                      programTitle: program.title,
                    });
                  }}
                  className="touch-target rounded-full bg-brand-gold px-5 py-2.5 text-xs font-bold text-brand-crimson shadow-md transition-all hover:scale-105 hover:bg-warm-gold"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {isSelected && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-brand-gold ring-offset-2 ring-offset-linen"
          aria-hidden
        />
      )}
    </motion.article>
  );
}
