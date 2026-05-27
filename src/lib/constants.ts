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

export const YOUTUBE_URL = "https://www.youtube.com/@AnandaKshethram";

export const MANGO_FESTIVAL_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScaYXPm39s48-8-fDBF5d-JzMO742TQwTGk9iY004GuekmhRg/viewform";

export const PROGRAMS: Program[] = [
  {
    id: "mango-festival",
    title: "The Big Mango Festival",
    subtitle: "Seasonal harvest celebration",
    category: "family",
    categories: ["family", "school"],
    image:
      "https://images.unsplash.com/photo-1605027990121-475872963789?w=800&q=80",
    adultPrice: 2500,
    childPrice: 1500,
    groupDiscount: { minGroup: 15, percent: 15 },
    badge: "100% Veg 🌱",
    description:
      "Celebrate Hyderabad's finest mango harvest with farm-to-table feasts, pottery workshops, bullock cart rides, and live folk performances under the stars.",
    highlights: [
      "Banana-leaf traditional feast",
      "Pottery & artisan crafts",
      "Bullock cart sunset trail",
      "Live folk music",
    ],
    formUrl: MANGO_FESTIVAL_FORM,
    featured: true,
  },
  {
    id: "corporate-retreat",
    title: "Corporate Wellness Retreat",
    subtitle: "Team bonding reimagined",
    category: "corporate",
    categories: ["corporate"],
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    adultPrice: 3500,
    childPrice: 0,
    groupDiscount: { minGroup: 20, percent: 20 },
    badge: "Premium",
    description:
      "Elevate your team offsite with curated farm experiences, breakout spaces, farm-to-table dining, and wellness activities in a pristine natural setting.",
    highlights: [
      "Dedicated conference zones",
      "Team-building games",
      "Gourmet veg catering",
      "Luxury rest amenities",
    ],
  },
  {
    id: "school-trip",
    title: "Magical School Expedition",
    subtitle: "Educational farm discovery",
    category: "school",
    categories: ["school"],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da280a0e?w=800&q=80",
    adultPrice: 1800,
    childPrice: 1200,
    groupDiscount: { minGroup: 30, percent: 10 },
    badge: "Educational",
    description:
      "Hands-on learning through organic farming, Gir cow interactions, traditional games, and nature walks designed for curious young minds.",
    highlights: [
      "Desi Gir cow experience",
      "Organic farming demo",
      "Traditional village games",
      "Nature trail exploration",
    ],
  },
  {
    id: "family-outing",
    title: "Family Day Escape",
    subtitle: "Weekend sanctuary",
    category: "family",
    categories: ["family"],
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    adultPrice: 2200,
    childPrice: 1400,
    groupDiscount: { minGroup: 10, percent: 12 },
    badge: "100% Veg 🌱",
    description:
      "Create lasting memories with your loved ones — from bullock cart adventures to banana-leaf feasts and pottery making in our lush green sanctuary.",
    highlights: [
      "Full-day farm activities",
      "Traditional games",
      "Farm-fresh lunch",
      "Photo-worthy spots",
    ],
  },
  {
    id: "night-stay",
    title: "Sanctuary Night Stay",
    subtitle: "Sleep under the stars",
    category: "night-stay",
    categories: ["night-stay", "family", "corporate"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    adultPrice: 4500,
    childPrice: 2800,
    groupDiscount: { minGroup: 8, percent: 15 },
    badge: "Exclusive",
    description:
      "Experience the farm after dusk with bonfire gatherings, stargazing, premium cottage accommodations, and a sunrise breakfast spread.",
    highlights: [
      "Premium cottage stay",
      "Bonfire & stargazing",
      "Sunrise breakfast",
      "Morning nature walk",
    ],
  },
  {
    id: "kitty-reunion",
    title: "Kitty & Reunion Soirée",
    subtitle: "Celebrate together",
    category: "family",
    categories: ["family"],
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    adultPrice: 2000,
    childPrice: 1200,
    groupDiscount: { minGroup: 12, percent: 10 },
    badge: "100% Veg 🌱",
    description:
      "Host your kitty party or family reunion in an enchanting farm setting with curated activities, photo booths, and bespoke vegetarian menus.",
    highlights: [
      "Private event space",
      "Custom menu options",
      "Group activities",
      "Photoshoot spots",
    ],
  },
];

export const EXPERIENCE_PILLARS = [
  {
    id: "gastronomy",
    title: "Pure Gastronomy",
    subtitle: "Farm-to-Table Excellence",
    description:
      "Curated 100% vegetarian dining on banana leaves — farm-fresh ingredients harvested hours before your feast.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    id: "exploration",
    title: "Rural Exploration",
    subtitle: "Authentic Village Life",
    description:
      "Pottery making, bullock cart rides, traditional games, and Gir cow interactions.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "amenities",
    title: "Modern Amenities",
    subtitle: "Premium Comfort",
    description:
      "Pristine restrooms, shaded pavilions, and luxury rest areas for corporate and family guests.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099925?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: "wellness",
    title: "Wellness & Nature",
    subtitle: "Agro-Luxury Sanctuary",
    description:
      "Mist-kissed mornings, lush green trails, and mindful moments in Hyderabad's premier eco-retreat.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    span: "col-span-2 row-span-1",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "HR Director, TechCorp Hyderabad",
    quote:
      "Ananda Kshethram transformed our annual offsite. The farm-to-table dining and team activities exceeded every expectation.",
    type: "corporate" as const,
  },
  {
    id: "2",
    name: "Dr. Rajesh Kumar",
    role: "Principal, Green Valley International School",
    quote:
      "Our students learned more in one day here than weeks in a classroom. The Gir cow experience and pottery workshop were unforgettable.",
    type: "school" as const,
  },
  {
    id: "3",
    name: "Anitha & Family",
    role: "Family Outing Guest",
    quote:
      "From the bullock cart ride to the banana-leaf feast — pure magic. Our kids still talk about the mango festival every day!",
    type: "family" as const,
  },
  {
    id: "4",
    name: "Vikram Reddy",
    role: "Event Coordinator, Fortune 500",
    quote:
      "Institutional-grade facilities in a breathtaking natural setting. We've booked three corporate retreats here already.",
    type: "corporate" as const,
  },
];

export const HERO_KEYWORDS = [
  "Corporate Retreats",
  "Unforgettable Family Outings",
  "Magical School Trips",
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
