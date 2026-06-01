import { PHONE_TEL, WHATSAPP_PHONE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/site-copy";

export type CtaAction =
  | "book"
  | "plan"
  | "enquire"
  | "whatsapp"
  | "call"
  | "siteVisit";

interface SectionEnquiryBarProps {
  /** Which CTAs to show in this section — spread across the site, not all at once */
  actions?: CtaAction[];
  waText?: string;
  compact?: boolean;
  /** For dark sections (Brundavanam, final invite) */
  variant?: "light" | "dark";
  className?: string;
}

const SITE_VISIT_TEXT =
  "Hi, I would like to schedule a site visit at Ananda Kshethram";

export default function SectionEnquiryBar({
  actions = ["book", "whatsapp"],
  waText = "Hi, I want to plan a visit to Ananda Kshethram",
  compact = false,
  variant = "light",
  className = "",
}: SectionEnquiryBarProps) {
  const isDark = variant === "dark";

  const btnBase = isDark
    ? "rounded-full border border-ivory/35 bg-ivory/10 px-4 py-2 text-xs font-semibold text-ivory transition-colors hover:border-brand-gold hover:text-brand-gold"
    : "rounded-full border border-forest/20 bg-ivory px-4 py-2 text-xs font-semibold text-forest transition-colors hover:border-brand-gold";

  const btnPrimary = isDark
    ? "rounded-full bg-brand-gold px-4 py-2 text-xs font-bold text-brand-crimson shadow-md"
    : "rounded-full bg-brand-gold px-4 py-2 text-xs font-bold text-brand-crimson shadow-sm";

  const btnAccent = isDark
    ? "rounded-full border border-brand-gold/45 bg-brand-gold/15 px-4 py-2 text-xs font-semibold text-warm-gold"
    : "rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-xs font-semibold text-brand-crimson";

  const labels: Record<CtaAction, { href: string; label: string; external?: boolean; style: string }> = {
    book: { href: "#programs", label: "Book Your Visit", style: btnPrimary },
    plan: { href: "#experiences", label: "Plan Your Outing", style: btnBase },
    enquire: {
      href: whatsappUrl(waText),
      label: "Enquire Now",
      external: true,
      style: btnBase,
    },
    whatsapp: {
      href: `https://wa.me/${WHATSAPP_PHONE}`,
      label: "WhatsApp Us",
      external: true,
      style: btnBase,
    },
    call: { href: PHONE_TEL, label: "Call Now", style: btnBase },
    siteVisit: {
      href: whatsappUrl(SITE_VISIT_TEXT),
      label: "Schedule a Site Visit",
      external: true,
      style: btnAccent,
    },
  };

  return (
    <div
      className={`flex flex-col items-center gap-2 ${compact ? "mt-6" : "mt-8"} ${
        compact || isDark
          ? ""
          : "rounded-xl border border-forest/10 bg-linen/50 p-4 sm:p-5"
      } ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        {actions.map((action) => {
          const cta = labels[action];
          return (
            <a
              key={action}
              href={cta.href}
              {...(cta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cta.style}
            >
              {cta.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
