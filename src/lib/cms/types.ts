export type AudienceTile = { title: string; line: string };
export type PackageCard = { name: string; price: string; includes: string[] };
export type Testimonial = { quote: string; role: string };
export type FaqItem = { question: string; answer: string };
export type PageBlock = {
  title: string;
  description: string;
  eyebrow: string;
  subtitle: string;
  points: string[];
  pricing?: string[];
};

export type SiteContent = {
  brand: {
    promise: string;
    positioning: string;
    notA: string[];
    emotions: string[];
    voiceNotes: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  contact: {
    phone: string;
    whatsapp: string;
    mapsNote: string;
  };
  header: {
    siteName: string;
    nav: { href: string; label: string }[];
  };
  footer: {
    tagline: string;
    description: string;
  };
  media: {
    sectionTitle: string;
    sectionSubtitle: string;
    youtubeVideos: { id: string; title: string }[];
    instagram: {
      headline: string;
      note: string;
      reelUrl: string;
    };
    social: {
      youtubeChannel: string;
      instagram: string;
      linkedin: string;
      facebook: string;
    };
  };
  homepage: {
    hero: {
      tagline: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    stats: string[];
    audienceSectionTitle: string;
    audienceTiles: AudienceTile[];
    emotional: {
      headline: string;
      body: string;
      beforeLabel: string;
      beforeText: string;
      afterLabel: string;
      afterText: string;
    };
    activitiesTitle: string;
    activities: string[];
    schools: {
      title: string;
      list: string[];
      famTitle: string;
      famBody: string;
    };
    packagesTitle: string;
    packages: PackageCard[];
    testimonialsTitle: string;
    testimonials: Testimonial[];
    instagram: { headline: string; note: string };
    faqTitle: string;
    faqs: FaqItem[];
    finalCta: {
      headline: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
  pages: Record<string, PageBlock>;
  blogPosts: { title: string; tag: string }[];
  galleryAlts: string[];
};

export type BookingRecord = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  experienceType: string;
  preferredDate: string;
  groupSize: number;
  notes?: string;
  source: "form" | "whatsapp";
};

export type AnalyticsEvent = {
  id: string;
  type: "page_view" | "booking_intent" | "whatsapp_click";
  path: string;
  experienceType?: string;
  hour: number;
  dayOfWeek: number;
  createdAt: string;
};

export type AdminCredentials = {
  username: string;
  passwordHash: string;
  updatedAt: string;
};
