import { PILLAR_IMAGES, PROGRAM_IMAGES } from "./site-images";

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
  /** Omit until a program-specific photo is available */
  image?: string;
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
  note: "1 Hour Drive From Gachibowli, Hyderabad",
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
    image: PROGRAM_IMAGES["family-outing"],
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
    image: PROGRAM_IMAGES["night-stay"],
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
    image: PROGRAM_IMAGES["school-trip"],
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
    image: PROGRAM_IMAGES["corporate-retreat"],
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
    image: PROGRAM_IMAGES["kitty-reunion"],
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
    image: PILLAR_IMAGES.meals,
    span: "col-span-2 row-span-2",
  },
  {
    id: "goushala",
    title: "Goushala & Gou Puja",
    subtitle: "Sacred Gir cows",
    description:
      "Morning rituals, cow puja, and the quiet bond between land, animal, and family.",
    image: PILLAR_IMAGES.goushala,
    span: "col-span-1 row-span-1",
  },
  {
    id: "games",
    title: "60+ Village Games",
    subtitle: "No batteries required",
    description:
      "Lagori, gilli-danda, kabaddi, and dozens more — the games your grandparents played, ready for every age.",
    image: PILLAR_IMAGES.games,
    span: "col-span-1 row-span-1",
  },
  {
    id: "trails",
    title: "Nature Trails & Mud Bath",
    subtitle: "Walk slowly. Notice everything.",
    description:
      "Guided trails through orchards and fields, farm pool, and the mud bath children never want to leave.",
    image: PILLAR_IMAGES.trails,
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
  },
  {
    id: "2",
    name: "Ms. Radha Krishna",
    role: "Class Teacher · DPS Hyderabad",
    quote:
      "Every activity linked to the curriculum. The children didn't realise they were learning. Best agri tourism trip we've done.",
    type: "school" as const,
  },
  {
    id: "3",
    name: "Vikram Nair",
    role: "HR Head · Tech Mahindra, Hyderabad",
    quote:
      "My team bonded more in five hours here than in two years of virtual meetings.",
    type: "corporate" as const,
  },
];

export const HERO_KEYWORDS = [
  "Family Day Outings",
  "Farm Night Stays",
  "Corporate Team Outings",
  "School Trips",
  "Life Skills Summer Camps",
  "Celebrations",
  "Community Gatherings",
];

export const HERO_TRUST_STATS = [
  { value: "1st", label: "Agri Tourism Hub · Hyderabad" },
  { value: "100%", label: "Pure Veg Farm Retreat" },
  { value: "10,000+", label: "Families Welcomed" },
  { value: "500+", label: "School Groups" },
  { value: "60+", label: "Village Activities" },
];

export const PHONE_DISPLAY = "+91 77999 00060";
export const PHONE_TEL = "tel:+917799900060";

export interface CoreExperience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
  waText: string;
  audience: "family" | "corporate" | "school" | "community" | "spiritual";
}

export const CORE_EXPERIENCES: CoreExperience[] = [
  {
    id: "family-day",
    title: "Family Day Outings",
    subtitle: "Day visit · All inclusive",
    description:
      "A full day of village games, goushala, bullock carts, mud bath, and sattvic farm meals — for grandparents, parents, and children together.",
    icon: "👨‍👩‍👧‍👦",
    href: "/family-outings",
    waText: "Hi, I want to plan a family day outing at Ananda Kshethram",
    audience: "family",
  },
  {
    id: "night-stay",
    title: "Farm Night Stays",
    subtitle: "Overnight · Bonfire & stars",
    description:
      "Sleep under open skies, enjoy campfire evenings, dawn goushala rituals, and every meal from dinner through breakfast.",
    icon: "🌙",
    href: "/night-stay",
    waText: "Hi, I want to book a farm night stay",
    audience: "family",
  },
  {
    id: "corporate",
    title: "Corporate Team Outings",
    subtitle: "Teams · Startups · Corporates",
    description:
      "Village tournaments, farm meals, bonfire add-ons, and custom branding — where teams remember they are human.",
    icon: "🤝",
    href: "/corporate-retreats",
    waText: "Hi, I want a corporate team outing quote",
    audience: "corporate",
  },
  {
    id: "school",
    title: "School Trips & Educational Visits",
    subtitle: "NEP 2020 aligned · 30+ students",
    description:
      "Curriculum-linked field trips with dedicated coordinators, supervised zones, certificates, and real soil-under-nails learning.",
    icon: "🏫",
    href: "/school-field-trips",
    waText: "Hi, I want to plan a school trip",
    audience: "school",
  },
  {
    id: "summer-camp",
    title: "Life Skills Summer Camps",
    subtitle: "Residential · Holiday camps",
    description:
      "Multi-day residential camps — dawn to bonfire — building independence, farm skills, and character in nature.",
    icon: "⛺",
    href: "/life-skills-bootcamp",
    waText: "Hi, I want to enroll for summer camp",
    audience: "school",
  },
  {
    id: "kitty",
    title: "Kitty Parties",
    subtitle: "Groups · Celebrations",
    description:
      "Mud bath, farm brunch, pottery add-ons, and games your group will photograph all week — a joyfully Indian day away.",
    icon: "🎀",
    href: "/kitty-parties",
    waText: "Hi, I want to plan a kitty party at the farm",
    audience: "community",
  },
  {
    id: "friends",
    title: "Friends Reunions",
    subtitle: "Old friends · New memories",
    description:
      "Reconnect over village games, bullock cart rides, and shared sattvic meals — laughter that feels like home.",
    icon: "👫",
    href: "/cousins-get-togethers",
    waText: "Hi, I want to plan a friends reunion at Ananda Kshethram",
    audience: "community",
  },
  {
    id: "cousins",
    title: "Cousins Get-Togethers",
    subtitle: "Family bonds · Farm fun",
    description:
      "The cousins outing everyone talks about — mud bath, farm train, village games, and a day worth repeating every year.",
    icon: "🤗",
    href: "/cousins-get-togethers",
    waText: "Hi, I want to plan a cousins get-together at the farm",
    audience: "community",
  },
  {
    id: "alumni",
    title: "Alumni Meets",
    subtitle: "Associations · Reunions",
    description:
      "Alumni batches and associations — a peaceful, activity-rich farm venue for meaningful reunions in nature.",
    icon: "🎓",
    href: "/alumni-reunions",
    waText: "Hi, I want to plan an alumni meet at Ananda Kshethram",
    audience: "community",
  },
  {
    id: "celebrations",
    title: "Birthday & Anniversary Celebrations",
    subtitle: "Milestone celebrations",
    description:
      "Celebrate milestones in nature — farm activities, private gathering spaces, sattvic meals, and memories that last.",
    icon: "🎂",
    href: "/birthdays-celebrations",
    waText: "Hi, I want to plan a birthday or anniversary celebration",
    audience: "family",
  },
  {
    id: "community",
    title: "Community Gatherings",
    subtitle: "Societies · Groups · Events",
    description:
      "From community societies to group celebrations — village activities, pure veg meals, and open skies for all.",
    icon: "🪷",
    href: "/alumni-reunions",
    waText: "Hi, I want to plan a community gathering",
    audience: "community",
  },
];

export interface ActivityHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export const ACTIVITY_HIGHLIGHTS: ActivityHighlight[] = [
  {
    id: "farm-train",
    title: "Farm Train Ride",
    subtitle: "A favourite for all ages",
    description:
      "A joyful ride through orchards and fields — one of the most photographed moments on the farm.",
    icon: "🚂",
    featured: true,
  },
  {
    id: "bullock-cart",
    title: "Bullock Cart Ride",
    subtitle: "Slow, swaying, magnificent",
    description:
      "The classic village experience — phones disappear, laughter returns, and everyone asks for a second round.",
    icon: "🐂",
    featured: true,
  },
  {
    id: "village-pond",
    title: "Village Pond",
    subtitle: "Water, mud & pure joy",
    description:
      "Farm pool and village pond experiences — cold water, warm earth, and the kind of play city life forgot.",
    icon: "💧",
    featured: true,
  },
  {
    id: "mud-bath",
    title: "Mud Bath",
    subtitle: "Therapeutic village dirt",
    description:
      "The mud bath children never want to leave — natural, playful, and wonderfully messy.",
    icon: "🌾",
    featured: true,
  },
  {
    id: "village-games",
    title: "60+ Village Games",
    subtitle: "No batteries required",
    description:
      "Lagori, gilli-danda, kabaddi, and dozens more — the games your grandparents played, ready for every age.",
    icon: "🎯",
    featured: true,
  },
  {
    id: "box-cricket",
    title: "Box Cricket",
    subtitle: "Farm tournaments",
    description:
      "Friendly cricket matches in our farm arena — perfect for families, schools, and corporate teams.",
    icon: "🏏",
  },
  {
    id: "nature-walks",
    title: "Nature Walks",
    subtitle: "Walk slowly. Notice everything.",
    description:
      "Guided trails through orchards, fields, and forest edges with our naturalists.",
    icon: "🌳",
  },
  {
    id: "campfire",
    title: "Campfire Experiences",
    subtitle: "Stories under open skies",
    description:
      "Bonfire evenings with songs, stories, and starlight — included in night stay packages.",
    icon: "🔥",
  },
  {
    id: "goushala",
    title: "Goushala Experience",
    subtitle: "Sacred Gir cows",
    description:
      "Morning rituals, Gou Puja, Go Seva, and the quiet bond between land, animal, and family.",
    icon: "🐄",
    featured: true,
  },
  {
    id: "seasonal",
    title: "Seasonal Activities & Festivals",
    subtitle: "Harvest · Mango · Sankranti",
    description:
      "Farm festivals, harvest celebrations, and seasonal experiences that change with the land.",
    icon: "🥭",
  },
];

export const BRAND_VALUES = [
  "Nature",
  "Village Life",
  "Agri Tourism",
  "Family Bonding",
  "Learning",
  "Celebrations",
  "Spirituality",
  "Meaningful Experiences",
] as const;

export const GOUSHALA_HIGHLIGHTS = [
  "Desi Gir Cows",
  "Goushala Experience",
  "Go Seva",
  "Rural Heritage",
  "Traditional Values",
] as const;

export const DIVINE_EVENTS = [
  "Weddings",
  "Chandi Homams",
  "Upanayanams",
  "Shasti Poorthi Celebrations",
  "Spiritual Gatherings & Pujas",
] as const;

export interface DedicatedSection {
  id: string;
  anchor: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  inclusions: string[];
  galleryLabels: [string, string, string];
  testimonial: { quote: string; attr: string };
  href: string;
  waText: string;
}

export const DEDICATED_SECTIONS: DedicatedSection[] = [
  {
    id: "family",
    anchor: "family-outings",
    eyebrow: "Family Day Outings",
    title: "A Full Day of Village Joy for Every Generation",
    description:
      "Grandparents, parents, and children together — bullock carts, goushala, mud bath, 60+ village games, and a sattvic farm lunch included.",
    benefits: [
      "Bonding across all ages in nature",
      "Screen-free, activity-driven day",
      "100% pure vegetarian farm meals",
    ],
    inclusions: [
      "60+ agri tourism activities",
      "Sattvic farm lunch",
      "Goushala visit & Gou Puja",
      "Bullock cart & farm train rides",
    ],
    galleryLabels: ["Real Families", "Real Activities", "Real Farm Meals"],
    testimonial: {
      quote:
        "I haven't seen my son this happy in months. He's already asking when we can come back.",
      attr: "Priya Sharma · Mother, Hyderabad",
    },
    href: "/family-outings",
    waText: "Hi, I want to plan a family day outing at Ananda Kshethram",
  },
  {
    id: "night-stay",
    anchor: "night-stays",
    eyebrow: "Farm Night Stays",
    title: "Sleep Under Skies Your City Has Forgotten",
    description:
      "Overnight farm stay with bonfire evenings, dawn goushala rituals, nature trails, and every meal from dinner through breakfast.",
    benefits: [
      "Complete escape from city routine",
      "Campfire & starlight experiences",
      "Deeper connection with village life",
    ],
    inclusions: [
      "All-day farm activities",
      "Bonfire night under open skies",
      "Farm stay accommodation",
      "Dinner, breakfast & meals included",
    ],
    galleryLabels: ["Bonfire Nights", "Farm Stay", "Dawn at the Goushala"],
    testimonial: {
      quote:
        "Milky Way overhead. Bonfire below. The kind of night families remember for years.",
      attr: "Family guest · Hyderabad",
    },
    href: "/night-stay",
    waText: "Hi, I want to book a farm night stay",
  },
  {
    id: "corporate",
    anchor: "corporate-outings",
    eyebrow: "Corporate Team Outings",
    title: "Where Teams Remember They Are Human",
    description:
      "Full-day agri tourism for teams — village tournaments, box cricket, farm meals, bonfire add-ons, and custom branding for your event.",
    benefits: [
      "Authentic team bonding beyond boardrooms",
      "Village games & farm tournaments",
      "Custom packages for 30+ teams",
    ],
    inclusions: [
      "Full-day agri tourism programme",
      "Village game tournaments",
      "All meals included",
      "Bonfire evening add-on available",
    ],
    galleryLabels: ["Team Activities", "Box Cricket", "Corporate Gatherings"],
    testimonial: {
      quote:
        "My team bonded more in five hours here than in two years of virtual meetings.",
      attr: "Vikram Nair · HR Head, Tech Mahindra",
    },
    href: "/corporate-retreats",
    waText: "Hi, I want a corporate team outing quote",
  },
  {
    id: "school",
    anchor: "school-trips",
    eyebrow: "School Trips & Educational Visits",
    title: "The Field Trip They'll Describe in Essays",
    description:
      "NEP 2020-aligned agri tourism with dedicated coordinators, supervised zones, participation certificates, and curriculum-linked learning.",
    benefits: [
      "Real soil-under-nails learning",
      "Safe, fenced supervised zones",
      "Certificates & custom itineraries",
    ],
    inclusions: [
      "NEP 2020 aligned activities",
      "Dedicated on-ground coordinator",
      "School learning labs on farm",
      "Pricing from ₹499 per student (30+)",
    ],
    galleryLabels: ["School Groups", "Learning Labs", "Field Activities"],
    testimonial: {
      quote:
        "Every activity linked to the curriculum. The children didn't realise they were learning.",
      attr: "Ms. Radha Krishna · DPS Hyderabad",
    },
    href: "/school-field-trips",
    waText: "Hi, I want to plan a school trip",
  },
  {
    id: "celebrations",
    anchor: "celebrations",
    eyebrow: "Celebrations",
    title: "Kitty Parties, Birthdays, Reunions & Milestones",
    description:
      "From kitty parties and birthday celebrations to cousins reunions and alumni meets — celebrate in nature with village activities and sattvic meals.",
    benefits: [
      "Private gathering spaces on the farm",
      "Unique, photogenic experiences",
      "100% veg celebrations in nature",
    ],
    inclusions: [
      "Farm day activities included",
      "Sattvic farm meals",
      "Mud bath & village games",
      "Custom group arrangements",
    ],
    galleryLabels: ["Birthday Celebrations", "Kitty Parties", "Group Reunions"],
    testimonial: {
      quote:
        "The outing everyone talks about — mud bath, farm brunch, and games all week long.",
      attr: "Kitty party guest · Hyderabad",
    },
    href: "/birthdays-celebrations",
    waText: "Hi, I want to plan a celebration at Ananda Kshethram",
  },
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
