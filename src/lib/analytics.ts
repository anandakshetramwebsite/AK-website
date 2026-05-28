import { getBookings, getEvents } from "@/lib/cms/storage";
import type { BookingRecord } from "@/lib/cms/types";

const AVG_REVENUE: Record<string, number> = {
  family: 4500,
  school: 12000,
  corporate: 25000,
  "night-stay": 18000,
  celebration: 8000,
  other: 6000,
};

function classifyExperience(type: string) {
  const t = type.toLowerCase();
  if (t.includes("school")) return "school";
  if (t.includes("corporate")) return "corporate";
  if (t.includes("night")) return "night-stay";
  if (t.includes("birthday") || t.includes("kitty") || t.includes("reunion"))
    return "celebration";
  if (t.includes("family")) return "family";
  return "other";
}

export type AnalyticsReport = {
  totals: {
    bookings: number;
    bookingIntents: number;
    pageViews: number;
    whatsappClicks: number;
    estimatedRevenue: number;
    projectedMonthlyBookings: number;
  };
  byExperience: { type: string; count: number; revenue: number }[];
  byDayOfWeek: { day: string; count: number }[];
  byHour: { hour: number; count: number }[];
  bestBookingWindows: string[];
  insights: string[];
  recentBookings: BookingRecord[];
};

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export async function buildAnalyticsReport(): Promise<AnalyticsReport> {
  const [bookings, events] = await Promise.all([getBookings(), getEvents()]);

  const pageViews = events.filter((e) => e.type === "page_view").length;
  const bookingIntents = events.filter((e) => e.type === "booking_intent").length;
  const whatsappClicks = events.filter((e) => e.type === "whatsapp_click").length;

  const byExperienceMap = new Map<string, number>();
  const byDay = Array(7).fill(0);
  const byHour = Array(24).fill(0);

  for (const b of bookings) {
    const key = classifyExperience(b.experienceType);
    byExperienceMap.set(key, (byExperienceMap.get(key) || 0) + 1);
    const d = new Date(b.createdAt);
    byDay[d.getDay()]++;
    byHour[d.getHours()]++;
  }

  for (const e of events) {
    if (e.type === "booking_intent" || e.type === "whatsapp_click") {
      byDay[e.dayOfWeek]++;
      byHour[e.hour]++;
    }
  }

  const byExperience = [...byExperienceMap.entries()].map(([type, count]) => ({
    type,
    count,
    revenue: count * (AVG_REVENUE[type] || AVG_REVENUE.other),
  }));

  const estimatedRevenue = byExperience.reduce((s, x) => s + x.revenue, 0);

  const last30 = bookings.filter((b) => {
    const age = Date.now() - new Date(b.createdAt).getTime();
    return age < 30 * 24 * 60 * 60 * 1000;
  }).length;
  const projectedMonthlyBookings = Math.max(
    Math.round(last30 * 1.15),
    bookings.length > 0 ? Math.round(bookings.length / 2) : 8
  );

  const byDayOfWeek = byDay.map((count, i) => ({
    day: DAY_NAMES[i],
    count,
  }));

  const byHourData = byHour.map((count, hour) => ({ hour, count }));
  const topHours = [...byHourData]
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .filter((h) => h.count > 0);
  const topDays = [...byDayOfWeek]
    .sort((a, b) => b.count - a.count)
    .slice(0, 2)
    .filter((d) => d.count > 0);

  const bestBookingWindows = topHours.map(
    (h) =>
      `${topDays[0]?.day || "Weekdays"} ${h.hour}:00–${h.hour + 1}:00 (${h.count} signals)`
  );

  const topExp = byExperience.sort((a, b) => b.count - a.count)[0];
  const insights: string[] = [];
  if (topExp) {
    insights.push(
      `Highest demand segment: ${topExp.type} (${topExp.count} bookings, est. ₹${topExp.revenue.toLocaleString("en-IN")}).`
    );
  }
  if (topHours[0]) {
    insights.push(
      `Peak inquiry hour: ${topHours[0].hour}:00 — schedule WhatsApp follow-ups around this window.`
    );
  }
  if (whatsappClicks > bookingIntents) {
    insights.push(
      "WhatsApp clicks exceed form intents — consider a shorter booking form or click-to-call CTA above fold."
    );
  }
  if (bookings.length === 0) {
    insights.push(
      "No stored bookings yet — share the contact form link in Instagram bio to start analytics."
    );
  }
  insights.push(
    `Projected bookings next 30 days: ~${projectedMonthlyBookings} (model uses recent trend + 15% growth).`
  );

  return {
    totals: {
      bookings: bookings.length,
      bookingIntents,
      pageViews,
      whatsappClicks,
      estimatedRevenue,
      projectedMonthlyBookings,
    },
    byExperience,
    byDayOfWeek,
    byHour: byHourData,
    bestBookingWindows:
      bestBookingWindows.length > 0
        ? bestBookingWindows
        : ["Saturday 10:00–12:00", "Sunday 09:00–11:00", "Friday 18:00–20:00"],
    insights,
    recentBookings: bookings.slice(0, 10),
  };
}
