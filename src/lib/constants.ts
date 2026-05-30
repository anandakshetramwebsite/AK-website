export interface ProgramPriceTier {
  price: number;
  label: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: "family" | "corporate" | "school" | "night-stay" | "all";
  categories: Array<"family" | "corporate" | "school" | "night-stay">;
  image: string;
  adultPrice: number;
  childPrice: number;
  /** School-style dual pricing (with / without lunch) */
  priceTiers?: ProgramPriceTier[];
  priceNote?: string;
  groupDiscount?: { minGroup: number; percent: number };
  badge?: string;
  packageBadge?: string;
  description: string;
  highlights: string[];
  potteryNote?: string;
  formUrl?: string;
  featured?: boolean;
  waText?: string;
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

export const SITE_URL = "https://anandakshethram.com";

export const BRAND_LOGO = "/ak-logo.png";
export const BRAND_FAVICON = "/ak-favicon.png";

export const FARM_LOCATION = {
  line: "Chevella Mandal, R.R. District, Telangana",
  note: "~60 minutes from Gachibowli, Hyderabad",
} as const;

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
  dateWeekday: "Saturday",
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
    id: "family-outing",
    title: "Farm Day Outing",
    subtitle: "Day visit · All inclusive",
    category: "family",
    categories: ["family"],
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    adultPrice: 1299,
    childPrice: 1299,
    packageBadge: "Family & Group Outing",
    groupDiscount: { minGroup: 30, percent: 10 },
    description:
      "A full day of agri tourism — 60+ activities, sattvic lunch, goushala, bullock carts, village games, and mud bath. One price, all inclusive.",
    highlights: [
      "60+ agri tourism activities",
      "Sattvic farm lunch included",
      "Goushala visit & Gou Puja",
      "Bullock cart rides",
      "Village games & mud bath",
    ],
    potteryNote: "Pottery available as paid add-on",
    waText: "Hi, I want to book a farm day outing",
  },
  {
    id: "night-stay",
    title: "Farm Night Stay",
    subtitle: "Overnight stay · All inclusive",
    category: "night-stay",
    categories: ["night-stay", "family", "corporate"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    adultPrice: 1999,
    childPrice: 1999,
    packageBadge: "Overnight Farm Experience",
    groupDiscount: { minGroup: 30, percent: 10 },
    description:
      "All-day agri tourism, bonfire under open skies, farm stay, and every meal from dinner through breakfast.",
    highlights: [
      "All day agri tourism activities",
      "Bonfire night under open skies",
      "All meals — dinner & breakfast",
      "Farm stay accommodation",
      "Dawn Goushala & nature trail",
    ],
    potteryNote: "Pottery available as paid add-on",
    waText: "Hi, I want to book a farm night stay",
  },
  {
    id: "school-trip",
    title: "School Agri Tourism Trip",
    subtitle: "For groups of 30+ students",
    category: "school",
    categories: ["school"],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    adultPrice: 699,
    childPrice: 499,
    priceTiers: [
      { price: 499, label: "per student · without lunch" },
      { price: 699, label: "per student · with welcome drink & lunch" },
    ],
    packageBadge: "★ Most Booked · Schools & Colleges",
    groupDiscount: { minGroup: 30, percent: 0 },
    priceNote: "★ Min. 30 students · Group rates apply",
    description:
      "NEP 2020-aligned field trips with a dedicated coordinator, supervised zones, certificates, and a curriculum itinerary built for your school.",
    highlights: [
      "NEP 2020 aligned activities",
      "Dedicated on-ground coordinator",
      "Fenced, supervised activity zones",
      "Participation certificates",
      "Customised curriculum itinerary",
    ],
    potteryNote: "Pottery available as paid add-on",
    featured: true,
    waText: "Hi, I want to plan a school trip",
  },
  {
    id: "corporate-retreat",
    title: "Corporate Outing",
    subtitle: "Teams, startups & corporates",
    category: "corporate",
    categories: ["corporate"],
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    adultPrice: 1299,
    childPrice: 0,
    packageBadge: "Corporate Agri Tourism",
    groupDiscount: { minGroup: 30, percent: 10 },
    description:
      "Full-day agri tourism for teams — village tournaments, farm meals, optional bonfire, and custom branding for your event.",
    highlights: [
      "Full-day agri tourism programme",
      "Village game tournaments",
      "All meals included",
      "Bonfire evening add-on available",
      "Custom branding for events",
    ],
    potteryNote: "Pottery available as paid add-on",
    waText: "Hi, I want a corporate outing quote",
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
    role: "Mother · Banjara Hills, Hyderabad",
    quote:
      "I haven't seen my son this happy in months. He's already asking when we can come back for another agri tourism day.",
    type: "family" as const,
    duration: "0:48",
  },
  {
    id: "2",
    name: "Ms. Radha Krishna",
    role: "Class Teacher · DPS Hyderabad",
    quote:
      "Every activity linked to the curriculum. The children didn't realise they were learning. Best agri tourism trip we've done.",
    type: "school" as const,
    duration: "1:02",
  },
  {
    id: "3",
    name: "Vikram Nair",
    role: "HR Head · Tech Mahindra, Hyderabad",
    quote:
      "My team bonded more in five hours here than in two years of virtual meetings.",
    type: "corporate" as const,
    duration: "0:55",
  },
];

export const HERO_KEYWORDS = [
  "School Field Trips",
  "Family Outings",
  "Corporate Retreats",
  "Farm Night Stays",
];

export const HERO_TRUST_STATS = [
  { value: "4.9 ★", label: "Average Rating" },
  { value: "10,000+", label: "Families Welcomed" },
  { value: "500+", label: "School Groups" },
  { value: "60+", label: "Agri Tourism Activities" },
  { value: "#1", label: "Agri Tourism Near Hyderabad" },
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

/** Prefilled message for “Share with a friend” via WhatsApp (ASCII-safe for all devices) */
export function buildFarmShareMessage(siteUrl: string = SITE_URL): string {
  const event = MANGO_FESTIVAL_EVENT;
  const tagline = event.tagline.replace(/\s*·\s*/g, " | ");

  return [
    "*ANANDA KSHETHRAM*",
    "Agri tourism & farm retreats near Hyderabad",
    "",
    "Hi! I wanted to share this farm with you - looks perfect for a family day, school trip, or team outing.",
    "",
    "----------------------------------------",
    "UPCOMING EVENT",
    "----------------------------------------",
    `*${event.title}*`,
    `${event.dateWeekday}, ${event.dateDay} ${event.dateMonth} ${event.dateYear}`,
    tagline,
    `Register: ${event.formUrl}`,
    "",
    "----------------------------------------",
    "LOCATION",
    "----------------------------------------",
    FARM_LOCATION.line,
    FARM_LOCATION.note,
    `Directions: ${MAPS_URL}`,
    "",
    "----------------------------------------",
    "PACKAGES (starting from)",
    "----------------------------------------",
    "1. Farm Day Outing - Rs.1,299 per person (day visit, all inclusive)",
    "2. Farm Night Stay - Rs.1,999 per person (overnight, meals included)",
    "3. School agri tourism trip - Rs.499 or Rs.699 per student (min. 30 students)",
    "4. Corporate outing - Rs.1,299 per person",
    "5. Mango Festival - Rs.1,299 adult | Rs.899 child (7 June 2026)",
    "",
    "Group discounts available for 30+ guests.",
    "",
    "----------------------------------------",
    "CONTACT",
    "----------------------------------------",
    "Call / WhatsApp: +91 77999 00060",
    `Website: ${siteUrl}`,
    "",
    "100% vegetarian farm | 60+ activities | School-friendly",
  ].join("\n");
}

export function getFarmShareWhatsAppUrl(siteUrl: string = SITE_URL): string {
  return `https://wa.me/?text=${encodeURIComponent(buildFarmShareMessage(siteUrl))}`;
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
