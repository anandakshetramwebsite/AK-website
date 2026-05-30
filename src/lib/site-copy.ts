/**
 * Shared homepage copy (aligned with client build guide / Version 3).
 * Version 1 is the live site — import from here, not from /version-3 routes.
 */
export {
  v3Experiences as FARM_ACTIVITIES,
  v3Stats as HERO_STATS_COPY,
  v3TrustSchools as TRUST_SCHOOLS,
  v3SchoolBadges as SCHOOL_BADGES,
  v3SchoolTestimonials as SCHOOL_TESTIMONIALS,
  v3Packages as PRICING_PACKAGES,
  v3VideoTestimonials as VIDEO_TESTIMONIALS,
  v3Faqs as HOMEPAGE_FAQS,
  v3Compare as ANANDA_COMPARE_IMAGES,
  v3Wa as whatsappUrl,
} from "@/lib/v3/content";

export const ANANDA_QUESTION = {
  eyebrow: "The Ananda Question",
  quote:
    "When did your child last plant something and watch it grow? Milk a cow? Win a game that didn't have a touchscreen?",
  body: "Ananda Kshethram exists to answer that question. A living, breathing agri tourism farm where childhood is not remembered — it is happening, right now, in real soil, real sunlight, and real joy. Just 60 minutes from Gachibowli, Hyderabad.",
  screenCaption:
    "The average Indian city child spends 6 hours a day on screens.",
  farmCaption: "One day of agri tourism here changes that.",
} as const;
