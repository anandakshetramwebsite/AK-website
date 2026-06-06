import { FARM_LOCATION, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const BOOKING_EMAIL = "anandakshethrambookings@gmail.com";
export const SUPPORT_HOURS = "9:00 AM – 9:00 PM (Daily)";

export const ABOUT_US =
  "Ananda Kshetram is Hyderabad's First Agri Tourism Hub and Only Pure Veg Farm Retreat, located near Chevella, just 1 Hour Drive from Gachibowli, Hyderabad.";

export const POLICY_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
] as const;

export const POLICY_CONTACT = {
  phone: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  email: BOOKING_EMAIL,
  supportHours: SUPPORT_HOURS,
  location: FARM_LOCATION.line,
  locationNote: FARM_LOCATION.note,
} as const;
