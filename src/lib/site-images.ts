/** Local farm photography — files in public/images (see scripts/prepare-site-photos.sh) */

import galleryManifest from "./gallery-manifest.json";

const img = (path: string) => `/images/${path}`;

export const HERO_POSTER = img("main-entrance.jpg");

/** Homepage hero background carousel (client farm photography) */
export const HERO_CAROUSEL_SLIDES = [
  {
    src: img("farm-stay-shed.jpg"),
    alt: "AK Signature Shed at Ananda Kshethram",
  },
  {
    src: img("sloka-school-group.jpg"),
    alt: "Shloka school trip group photo at the farm",
  },
  {
    src: img("corporate-team.jpg"),
    alt: "Corporate team outing at Ananda Kshethram",
  },
  {
    src: img("kitty-party.jpg"),
    alt: "Kitty party celebration on the farm",
  },
  {
    src: img("family-at-rachabanda.jpg"),
    alt: "Family day outing at Ananda Kshethram",
  },
  {
    src: img("farm-train-ride.jpg"),
    alt: "Farm train ride through the orchards",
  },
  {
    src: img("dandiya-night.jpg"),
    alt: "Dandiya night celebration at the farm",
  },
] as const;

/** Featured activity cards (ActivitiesHighlight) */
export const ACTIVITY_IMAGES: Record<string, string> = {
  "farm-train": img("farm-train-ride.jpg"),
  "bullock-cart": img("bullock-cart-ride.jpg"),
  "village-pond": img("village-pond.jpg"),
  "mud-bath": img("mud-bath.jpg"),
  "village-games": img("tug-of-war.jpg"),
  "box-cricket": img("box-cricket.jpg"),
  "nature-walks": img("miyawaki-forest-tour.jpg"),
  campfire: img("farm-stay-shed.jpg"),
  goushala: img("kids-in-goushala.jpg"),
  seasonal: img("dandiya-night.jpg"),
};

/** “What every visit includes” bento grid */
export const PILLAR_IMAGES: Record<string, string> = {
  meals: img("farm-lunch.jpg"),
  goushala: img("family-in-goushala.jpg"),
  games: img("team-games.jpg"),
  trails: img("mud-bath-2.jpg"),
};

/** Program hub cards */
export const PROGRAM_IMAGES: Record<string, string> = {
  "family-outing": img("family-in-goushala.jpg"),
  "night-stay": img("farm-night-stay-guest-rooms.jpg"),
  "school-trip": img("sloka-school-group.jpg"),
  "corporate-retreat": img("corporate-team.jpg"),
  "kitty-reunion": img("kitty-party.jpg"),
};

/** Dedicated section mini-galleries (family, corporate, school, …) */
export const DEDICATED_GALLERY_IMAGES: Record<
  string,
  readonly [string, string, string]
> = {
  family: [
    img("family-at-rachabanda.jpg"),
    img("kids-on-airswing.jpg"),
    img("farm-lunch.jpg"),
  ],
  "night-stay": [
    img("farm-night-stay-guest-rooms.jpg"),
    img("farm-lunch-2.jpg"),
    img("kids-in-goushala.jpg"),
  ],
  corporate: [
    img("corporate-team.jpg"),
    img("box-cricket.jpg"),
    img("team-games.jpg"),
  ],
  school: [
    img("shloka-school-trip.jpg"),
    img("organic-farming-school.jpg"),
    img("goushala-students.jpg"),
  ],
  celebrations: [
    img("kitty-party.jpg"),
    img("dandiya-night.jpg"),
    img("family-at-rachabanda.jpg"),
  ],
};

export const BRUNDAVANAM_IMAGES = {
  goushalaHero: img("ananda-brundavanam.jpg"),
  goushalaGallery: [
    img("kid-with-gomatha.jpg"),
    img("kids-in-goushala.jpg"),
    img("family-in-goushala.jpg"),
  ] as const,
  divineHero: img("shata-chandi-homam.jpg"),
  divineGallery: [
    img("ab-chandi-homam.jpg"),
    img("ab-homam.jpg"),
    img("shata-chandi-homam.jpg"),
  ] as const,
};

/** Life-at-the-farm photo mosaic — from scripts/prepare-site-photos.sh */
export function galleryImagePaths(): string[] {
  return galleryManifest as string[];
}
