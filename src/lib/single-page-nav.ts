/** Anchor navigation for the one-page homepage */
export const SINGLE_PAGE_NAV = [
  { href: "#experiences", label: "Experiences" },
  { href: "#activities", label: "Activities" },
  { href: "#goushala", label: "Goushala" },
  { href: "#programs", label: "Packages" },
  { href: "#book", label: "Book" },
] as const;

export const FOOTER_NAV = [
  ...SINGLE_PAGE_NAV,
  { href: "#school-trust", label: "School Trips" },
  { href: "#faq", label: "FAQ" },
] as const;

/** Legacy multi-page routes → homepage section */
export const LEGACY_PAGE_REDIRECTS: Record<string, string> = {
  "/about-ak": "/#why",
  "/school-field-trips": "/#school-trust",
  "/corporate-retreats": "/#dedicated",
  "/family-outings": "/#dedicated",
  "/cousins-get-togethers": "/#experiences",
  "/alumni-reunions": "/#experiences",
  "/kitty-parties": "/#experiences",
  "/birthdays-celebrations": "/#dedicated",
  "/night-stay": "/#dedicated",
  "/life-skills-bootcamp": "/#activities",
  "/festival-experiences": "/#goushala",
  "/all-experiences": "/#experiences",
  "/gallery": "/#videos",
  "/blog": "/#faq",
  "/contact-book-now": "/#book",
  "/version-1": "/",
  "/version-2": "/",
  "/version-3": "/",
  "/preview": "/",
};

export const LEGACY_PAGE_PATHS = Object.keys(LEGACY_PAGE_REDIRECTS);
