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
  eyebrow: "Why Ananda Kshethram",
  quote:
    "When did your family last milk a cow, ride a bullock cart, play village games, and eat a meal that grew on the same soil you walked?",
  body: "Ananda Kshethram is Hyderabad's first agri tourism hub and only pure veg farm retreat — a living village experience for families, schools, corporates, and communities. Nature, learning, celebrations, and spirituality come together here, just 60 minutes from Gachibowli.",
  screenCaption:
    "City life keeps us busy — but rarely connected to soil, cows, and each other.",
  farmCaption: "One day here reconnects families, teams, and communities.",
} as const;
