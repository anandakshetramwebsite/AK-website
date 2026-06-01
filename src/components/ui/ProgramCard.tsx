"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Program, ProgramPriceTier } from "@/lib/constants";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { calculateGroupDiscount, WHATSAPP_PHONE } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";

interface ProgramCardProps {
  program: Program;
  index: number;
}

function PriceTierRotator({ tiers }: { tiers: ProgramPriceTier[] }) {
  const [tierIndex, setTierIndex] = useState(0);

  useEffect(() => {
    if (tiers.length < 2) return;
    const interval = setInterval(() => {
      setTierIndex((i) => (i + 1) % tiers.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [tiers.length]);

  const tier = tiers[tierIndex];

  return (
    <div
      className="mt-3 min-h-7 overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={tier.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="flex items-baseline gap-x-2 leading-tight"
        >
          <span className="shrink-0 text-lg font-bold text-brand-gold">
            ₹{tier.price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-forest/60">{tier.label}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
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
      className={`group relative flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border-2 transition-colors ${
        isSelected
          ? "border-brand-gold shadow-xl shadow-brand-gold/20"
          : "border-forest/10 hover:border-brand-crimson/30"
      } ${isExpanded ? "col-span-full" : ""}`}
      onClick={handleSelect}
      data-program-id={program.id}
    >
      <div
        className={`relative flex flex-1 flex-col ${isExpanded ? "md:flex-row" : ""}`}
      >
        <div
          className={`relative overflow-hidden ${
            isExpanded
              ? "h-48 w-full md:h-auto md:min-h-[320px] md:w-1/2"
              : "h-44"
          }`}
        >
          {program.image ? (
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <PlaceholderImage
              label={program.title}
              className="absolute inset-0 h-full w-full bg-gradient-to-br from-mango/25 via-linen-dark to-forest-green/20"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-crimson/65 to-transparent" />

          {program.packageBadge && (
            <span className="absolute left-3 top-3 max-w-[85%] rounded-full bg-linen/95 px-3 py-1 text-[10px] font-semibold leading-tight text-forest backdrop-blur-sm sm:text-xs">
              {program.packageBadge}
            </span>
          )}

          {program.badge && !program.packageBadge && (
            <span className="absolute left-3 top-3 rounded-full bg-linen/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
              {program.badge}
            </span>
          )}
        </div>

        <div
          className={`flex flex-1 flex-col bg-linen p-4 sm:p-5 ${isExpanded ? "md:w-1/2 md:p-6" : ""}`}
        >
          <h3 className="font-serif text-lg font-bold text-forest">
            {program.title}
          </h3>
          <p className="mt-1 text-sm text-forest/60">{program.subtitle}</p>

          {program.priceTiers ? (
            <PriceTierRotator tiers={program.priceTiers} />
          ) : (
            <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-lg font-bold text-brand-gold">
                ₹{program.adultPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-forest/50">
                {program.childPrice === program.adultPrice
                  ? "per person · all inclusive"
                  : "Adult"}
              </span>
              {program.childPrice > 0 &&
                program.childPrice !== program.adultPrice && (
                  <>
                    <span className="text-forest/30">·</span>
                    <span className="text-sm font-semibold text-forest/70">
                      ₹{program.childPrice.toLocaleString("en-IN")} Child
                    </span>
                  </>
                )}
            </div>
          )}

          {program.priceNote && (
            <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-brand-crimson/20 bg-brand-crimson/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-crimson">
              {program.priceNote.replace(/^★\s*/, "✦ ")}
            </span>
          )}

          {program.groupDiscount && !program.priceNote && (
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/35 bg-gradient-to-r from-brand-gold/15 to-warm-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-crimson">
              <span className="text-brand-gold" aria-hidden>
                ✦
              </span>
              {program.groupDiscount.minGroup}+ · group rates
            </span>
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

              {program.potteryNote && (
                <p className="mt-3 text-xs italic text-forest/55">
                  {program.potteryNote}
                </p>
              )}

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
                {program.waText && (
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(program.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="touch-target rounded-full bg-brand-gold px-5 py-2.5 text-xs font-bold text-brand-crimson shadow-md transition-all hover:scale-105 hover:bg-warm-gold"
                  >
                    {isSchool ? "Plan School Trip" : "Book via WhatsApp"}
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
                  className="touch-target rounded-full border border-forest/20 px-5 py-2.5 text-xs font-semibold text-forest transition-all hover:border-brand-gold"
                >
                  Build enquiry
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
