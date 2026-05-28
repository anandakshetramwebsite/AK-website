import { promises as fs } from "fs";
import path from "path";
import { DEFAULT_SITE_CONTENT } from "./defaults";
import type {
  AdminCredentials,
  AnalyticsEvent,
  BookingRecord,
  SiteContent,
} from "./types";

const DATA_DIR = path.join(process.cwd(), "data");

const FILES = {
  site: path.join(DATA_DIR, "site-content.json"),
  admin: path.join(DATA_DIR, "admin.json"),
  bookings: path.join(DATA_DIR, "bookings.json"),
  events: path.join(DATA_DIR, "events.json"),
};

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  await ensureDataDir();
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(file: string, data: T) {
  await ensureDataDir();
  await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
}

export async function getSiteContent(): Promise<SiteContent> {
  const saved = await readJson<SiteContent | null>(FILES.site, null);
  if (!saved) {
    await writeJson(FILES.site, DEFAULT_SITE_CONTENT);
    return DEFAULT_SITE_CONTENT;
  }
  return {
    ...DEFAULT_SITE_CONTENT,
    ...saved,
    brand: { ...DEFAULT_SITE_CONTENT.brand, ...saved.brand },
    seo: { ...DEFAULT_SITE_CONTENT.seo, ...saved.seo },
    contact: { ...DEFAULT_SITE_CONTENT.contact, ...saved.contact },
    header: { ...DEFAULT_SITE_CONTENT.header, ...saved.header },
    footer: { ...DEFAULT_SITE_CONTENT.footer, ...saved.footer },
    homepage: {
      ...DEFAULT_SITE_CONTENT.homepage,
      ...saved.homepage,
      hero: {
        ...DEFAULT_SITE_CONTENT.homepage.hero,
        ...saved.homepage?.hero,
      },
      emotional: {
        ...DEFAULT_SITE_CONTENT.homepage.emotional,
        ...saved.homepage?.emotional,
      },
      schools: {
        ...DEFAULT_SITE_CONTENT.homepage.schools,
        ...saved.homepage?.schools,
      },
      instagram: {
        ...DEFAULT_SITE_CONTENT.homepage.instagram,
        ...saved.homepage?.instagram,
      },
      finalCta: {
        ...DEFAULT_SITE_CONTENT.homepage.finalCta,
        ...saved.homepage?.finalCta,
      },
    },
    pages: { ...DEFAULT_SITE_CONTENT.pages, ...saved.pages },
  };
}

export async function saveSiteContent(content: SiteContent) {
  await writeJson(FILES.site, content);
}

export async function getAdminCredentials(): Promise<AdminCredentials | null> {
  return readJson<AdminCredentials | null>(FILES.admin, null);
}

export async function saveAdminCredentials(creds: AdminCredentials) {
  await writeJson(FILES.admin, creds);
}

export async function getBookings(): Promise<BookingRecord[]> {
  return readJson<BookingRecord[]>(FILES.bookings, []);
}

export async function addBooking(booking: BookingRecord) {
  const list = await getBookings();
  list.unshift(booking);
  await writeJson(FILES.bookings, list);
}

export async function getEvents(): Promise<AnalyticsEvent[]> {
  return readJson<AnalyticsEvent[]>(FILES.events, []);
}

export async function addEvent(event: AnalyticsEvent) {
  const list = await getEvents();
  list.push(event);
  const trimmed = list.slice(-5000);
  await writeJson(FILES.events, trimmed);
}
