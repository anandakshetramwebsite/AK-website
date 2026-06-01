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
    "More Than A Getaway — A Place To Reconnect With Nature, People & Meaningful Experiences.",
  body: "Ananda Kshethram is Hyderabad's First Agri Tourism Hub and Only Pure Veg Farm Retreat, helping families, schools, corporates, and communities reconnect with nature, village life, and meaningful human connections — just 1 Hour Drive from Hyderabad.",
  highlights: [
    "Hyderabad's First Agri Tourism Hub",
    "Hyderabad's Only Pure Veg Farm Retreat",
    "Authentic Village Experiences",
    "Nature & Farm-Based Learning",
    "Family-Friendly Environment",
    "Corporate Team Bonding Activities",
    "Safe & Spacious Green Campus",
    "Just 1 Hour Drive From Hyderabad",
  ],
  screenCaption:
    "City life keeps us busy — but rarely connected to soil, cows, and each other.",
  farmCaption: "One day here reconnects families, teams, and communities.",
} as const;
