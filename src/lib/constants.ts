export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: "family" | "corporate" | "school" | "night-stay" | "all";
  categories: Array<"family" | "corporate" | "school" | "night-stay">;
  image: string;
  adultPrice: number;
  childPrice: number;
  groupDiscount?: { minGroup: number; percent: number };
  badge?: string;
  description: string;
  highlights: string[];
  formUrl?: string;
  featured?: boolean;
}

export interface BookingData {
  programId: string;
  programTitle: string;
  date: string;
  adults: number;
  children: number;
  notes: string;
}

export const WHATSAPP_PHONE = "917799900060";

export const MAPS_URL =
  "https://maps.app.goo.gl/FE6nhgHTa7P2j6d39";

export const YOUTUBE_URL = "https://www.youtube.com/@anandakshethram";

export const MANGO_FESTIVAL_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScaYXPm39s48-8-fDBF5d-JzMO742TQwTGk9iY004GuekmhRg/viewform";

/** Upcoming hero highlight — Mango Festival */
export const MANGO_FESTIVAL_EVENT = {
  badge: "Upcoming at the Farm",
  title: "The Big Mango Festival",
  dateDay: 7,
  dateMonth: "June",
  dateYear: 2026,
  dateLine: "Saturday, 7 June 2026",
  tagline: "Harvest feast · Folk music · Bullock cart trails",
  cta: "Register Now →",
  formUrl: MANGO_FESTIVAL_FORM,
  whatsappText:
    "Hi, I would like to register for the Mango Festival on 7 June at Ananda Kshethram",
} as const;

/** Hero background — client farm footage (CloudFront) */
export const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

export const PROGRAMS: Program[] = [
  {
    id: "school-trip",
    title: "School Field Trip",
    subtitle: "NEP-aligned learning on the farm",
    category: "school",
    categories: ["school"],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    adultPrice: 500,
    childPrice: 300,
    groupDiscount: { minGroup: 30, percent: 10 },
    badge: "NEP 2020",
    description:
      "A full day where science, EVS, and life skills meet soil, cows, and village games. Dedicated coordinator, supervised zones, and certificates for every child.",
    highlights: [
      "Dedicated farm coordinator",
      "NEP 2020 activity design",
      "Participation certificate",
      "Free FAM visit for teachers",
    ],
    featured: true,
  },
  {
    id: "family-outing",
    title: "Family Farm Day",
    subtitle: "Three generations, one perfect Sunday",
    category: "family",
    categories: ["family"],
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    adultPrice: 1249,
    childPrice: 899,
    groupDiscount: { minGroup: 10, percent: 12 },
    badge: "100% Veg",
    description:
      "10AM to 5:30PM of mud, milking, meals, and laughter. Welcome drink, sattvic lunch, hi-tea, and 60+ activities the whole family can share.",
    highlights: [
      "60+ farm activities",
      "Sattvic lunch & hi-tea",
      "Goushala visit & Gou Puja",
      "Bullock cart rides",
    ],
  },
  {
    id: "corporate-retreat",
    title: "Corporate Team Reset",
    subtitle: "Bonds built away from screens",
    category: "corporate",
    categories: ["corporate"],
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    adultPrice: 1999,
    childPrice: 0,
    groupDiscount: { minGroup: 20, percent: 15 },
    badge: "From 20 guests",
    description:
      "Half-day, full-day, or overnight programs with village tournaments, farm meals, and space to breathe. Custom quotes within two hours on WhatsApp.",
    highlights: [
      "Half / full day & overnight options",
      "Village game tournaments",
      "All meals included",
      "Bonfire evening available",
    ],
  },
  {
    id: "night-stay",
    title: "Overnight Farm Stay",
    subtitle: "Sleep under skies the city forgot",
    category: "night-stay",
    categories: ["night-stay", "family", "corporate"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    adultPrice: 1999,
    childPrice: 1499,
    groupDiscount: { minGroup: 8, percent: 15 },
    badge: "Bonfire nights",
    description:
      "Full farm day plus night under the stars — bonfire, farm morning, and every meal taken care of. Children below 2 stay free.",
    highlights: [
      "Full day + overnight stay",
      "All meals included",
      "Bonfire evening",
      "Farm morning experience",
    ],
  },
  {
    id: "kitty-reunion",
    title: "Kitty Party at the Farm",
    subtitle: "The outing everyone talks about",
    category: "family",
    categories: ["family"],
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    adultPrice: 1499,
    childPrice: 999,
    groupDiscount: { minGroup: 12, percent: 10 },
    badge: "100% Veg",
    description:
      "Mud bath, pottery, farm brunch, and games your group will photograph all week. A peaceful, joyfully Indian day away from restaurant tables.",
    highlights: [
      "Mud bath & farm pool",
      "Pottery (paid add-on)",
      "Sattvic farm brunch",
      "Private gathering space",
    ],
  },
  {
    id: "mango-festival",
    title: "Mango Festival",
    subtitle: "Seasonal harvest celebration",
    category: "family",
    categories: ["family", "school"],
    image:
      "https://images.unsplash.com/photo-1559187633-09d0dbafab9c?w=800&q=80",
    adultPrice: 1299,
    childPrice: 899,
    groupDiscount: { minGroup: 15, percent: 15 },
    badge: "7 June · Register",
    description:
      "Join us on Saturday, 7 June for banana-leaf feasts, bullock cart trails, folk music, and the kind of summer memory children carry for years.",
    highlights: [
      "Farm-fresh mango season",
      "Traditional banana-leaf meal",
      "Bullock cart sunset trail",
      "Live folk performances",
    ],
    formUrl: MANGO_FESTIVAL_FORM,
  },
];

export const EXPERIENCE_PILLARS = [
  {
    id: "meals",
    title: "Sattvic Farm Meals",
    subtitle: "Food that knows its origin",
    description:
      "Grown here, harvested this morning, cooked with care. Every meal is 100% vegetarian and served with the warmth of a farm kitchen.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    id: "goushala",
    title: "Goushala & Gou Puja",
    subtitle: "Sacred Gir cows",
    description:
      "Morning rituals, cow puja, and the quiet bond between land, animal, and family.",
    image:
      "https://images.unsplash.com/photo-1560493676-2b2d3da9993a?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "games",
    title: "60+ Village Games",
    subtitle: "No batteries required",
    description:
      "Lagori, gilli-danda, kabaddi, and dozens more — the games your grandparents played, ready for every age.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "trails",
    title: "Nature Trails & Mud Bath",
    subtitle: "Walk slowly. Notice everything.",
    description:
      "Guided trails through orchards and fields, farm pool, and the mud bath children never want to leave.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    span: "col-span-2 row-span-1",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Mother of two, Banjara Hills",
    quote:
      "I have not seen my son this happy in months. He is already asking when we can come back to the farm.",
    type: "family" as const,
  },
  {
    id: "2",
    name: "Ms. Radha Krishna",
    role: "Class Teacher, DPS Hyderabad",
    quote:
      "Every activity linked to the curriculum. The children did not realise they were learning — and neither did we complain.",
    type: "school" as const,
  },
  {
    id: "3",
    name: "Vikram Nair",
    role: "HR Head, Tech Mahindra",
    quote:
      "My team bonded more in five hours here than in two years of virtual meetings. We are booking again for autumn.",
    type: "corporate" as const,
  },
  {
    id: "4",
    name: "School Coordinator",
    role: "Oakridge International, Hyderabad",
    quote:
      "The coordinator handled everything. Zero complaints from parents — we have already blocked three dates for next year.",
    type: "school" as const,
  },
];

export const HERO_KEYWORDS = [
  "School Field Trips",
  "Family Outings",
  "Corporate Retreats",
  "Farm Night Stays",
];

export const HERO_TRUST_STATS = [
  { value: "4.9★", label: "Google Rated" },
  { value: "10,000+", label: "Families Welcomed" },
  { value: "500+", label: "School Groups" },
  { value: "#1", label: "Farm Retreat near Hyderabad" },
];

export function formatWhatsAppMessage(booking: BookingData): string {
  const program = PROGRAMS.find((p) => p.id === booking.programId);
  const programTitle = booking.programTitle || program?.title || "General Inquiry";

  let groupNote = "";
  if (program?.groupDiscount && booking.adults >= program.groupDiscount.minGroup) {
    groupNote = ` (Group Discount ${program.groupDiscount.percent}% Applied 🎟️)`;
  } else if (
    program?.groupDiscount &&
    booking.adults + booking.children >= program.groupDiscount.minGroup
  ) {
    groupNote = ` (Group Discount ${program.groupDiscount.percent}% Applied 🎟️)`;
  }

  const dateLine = booking.date
    ? `📅 Target Date: ${booking.date}\n\n`
    : "";

  const notesLine = booking.notes
    ? `\n💬 Additional Notes/Inquiries:\n  "${booking.notes}"\n`
    : "";

  return `Ananda Kshethram Booking Request 🌿
──────────────────────────────────────────
👤 Program: ${programTitle}
${dateLine}👥 Attendance Details:
  • Adults: ${booking.adults}${groupNote}
  • Children: ${booking.children}${notesLine}
──────────────────────────────────────────`;
}

export function getWhatsAppUrl(booking: BookingData): string {
  const message = formatWhatsAppMessage(booking);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function calculateGroupDiscount(
  program: Program,
  adults: number,
  children: number
): number {
  if (!program.groupDiscount) return 0;
  const total = adults + children;
  if (total >= program.groupDiscount.minGroup) {
    return program.groupDiscount.percent;
  }
  return 0;
}
