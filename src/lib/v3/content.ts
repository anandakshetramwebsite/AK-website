/** Version 3 — exact copy from client ananda-homepage.html */

export const V3_WHATSAPP = "917799900060";

export const v3Wa = (text: string) =>
  `https://wa.me/${V3_WHATSAPP}?text=${encodeURIComponent(text)}`;

export const v3Seo = {
  title:
    "Ananda Kshethram — Best Agri Tourism & Farm Retreat near Hyderabad | 60 Min from Gachibowli",
  description:
    "Ananda Kshethram is Hyderabad's top-rated agri tourism destination — 60 minutes from Gachibowli. Farm day outings from ₹1,250, overnight farm stays, school trips ₹499, corporate retreats & summer camps. Telangana's most loved farm experience.",
  keywords:
    "agri tourism Hyderabad, farm outing near Hyderabad, farm stay Hyderabad, school trip farm Hyderabad, agri tourism near Gachibowli, vaksana farms Hyderabad, farm retreat Telangana, nature outing Hyderabad, village experience Hyderabad, best farm near Hyderabad, corporate outing Hyderabad, summer camp Hyderabad, farm day outing, ananda kshethram, agri tourism near me, farm school trip Hyderabad, organic farm Hyderabad, goushala Hyderabad, bullock cart ride Hyderabad, mud bath Hyderabad, night stay farm Hyderabad",
};

export const v3NavLinks = [
  { href: "#tiles", label: "Experiences" },
  { href: "#school-trust", label: "Schools" },
  { href: "#packages", label: "Pricing" },
  { href: "#tiles", label: "Camps" },
  { href: "#instagram", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export const v3TrustSchools = [
  "Delhi Public School",
  "Oakridge International",
  "Meridian School",
  "Johnson Grammar",
  "Chirec Public School",
  "Bharatiya Vidya Bhavan",
  "The Hyderabad Public School",
  "Sreenidhi International",
];

export const v3Tiles = [
  {
    badge: "Most Booked",
    eyebrow: "Schools & Colleges",
    title: "The Field Trip They'll Describe in Essays",
    body: "NEP 2020-aligned agri tourism learning. Real soil, real science, real joy.",
    cta: "Plan a School Trip →",
    waText: "Hi, I want to plan a school trip",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da280a0e?w=1200&q=80",
    span: "tall" as const,
  },
  {
    eyebrow: "Family Day Outing",
    title: "A Sunday That Becomes a Story",
    body: "Mud, milk, meals and memory. Agri tourism the whole family will cherish.",
    cta: "Plan a Family Day →",
    waText: "Hi, I want to plan a family visit",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
  },
  {
    eyebrow: "Corporate Retreats",
    title: "Where Teams Remember They're Human",
    body: "Village games, farm experiences, bonfire evenings. Agri tourism for your team.",
    cta: "Get Custom Quote →",
    waText: "Hi, I want a corporate retreat quote",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
  },
  {
    eyebrow: "Summer & Holiday Camps",
    title: "Ten Days That Change Who They Are",
    body: "Residential agri tourism camps. Dawn to bonfire. Real independence, real growth.",
    cta: "Enroll for Camps →",
    waText: "Hi, I want to enroll for summer camp",
    image:
      "https://images.unsplash.com/photo-1478131143081-801f4a533e3c?w=1200&q=80",
    span: "wide" as const,
  },
  {
    eyebrow: "Wellness Retreats",
    title: "The Silence You've Been Looking For",
    body: "Goushala mornings, sattvic meals, nature trails. Agri tourism as therapy.",
    cta: "Explore Wellness →",
    waText: "Hi, I want to know about wellness retreats",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
  },
  {
    eyebrow: "Farm Night Stay",
    title: "Sleep Under Skies Your City Has Forgotten",
    body: "Milky Way overhead. Bonfire below. Our overnight agri tourism experience.",
    cta: "Book Night Stay →",
    waText: "Hi, I want to book a farm night stay",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
  },
];

export const v3Experiences = [
  {
    name: "Organic Farming",
    short: "Sow seeds. Watch life begin.",
    desc: "Sow seeds. Watch life begin. Learn the rhythm of the earth with our farmers. Ideal for children and families as part of an agri tourism experience.",
  },
  {
    name: "Goushala & Gou Puja",
    short: "Connect with sacred Gir cows.",
    desc: "Connect with sacred Gir cows. Morning rituals, cow puja, and the ancient bond between farmer and animal.",
  },
  {
    name: "60+ Village Games",
    short: "Games your grandparents played.",
    desc: "Games your grandparents played. Lagori, gilli-danda, kabaddi and 57 more that need no battery.",
  },
  {
    name: "Bullock Cart Rides",
    short: "Rides that make phones disappear.",
    desc: "Rides that make phones disappear. Slow, swaying, magnificent. The classic agri tourism favourite — children ask for a second round every time.",
  },
  {
    name: "Farm Pool & Mud Bath",
    short: "The most therapeutic dirt.",
    desc: "The most therapeutic dirt. Cold water, warm earth, genuine laughter. The bath they actually enjoy.",
  },
  {
    name: "Sattvic Farm Meals",
    short: "Food that knows its origin.",
    desc: "Food that knows its origin. Grown here, harvested this morning, cooked with wood fire and served with love. 100% vegetarian.",
  },
  {
    name: "Pottery & Crafts",
    short: "Make something. Keep it forever.",
    desc: "Make something. Keep it forever. Wheel-thrown pottery, terracotta, natural dyes. Note: pottery is a premium paid add-on not included in standard packages.",
    paidAddOn: true,
  },
  {
    name: "Bonfire Nights",
    short: "Stories, songs, open skies.",
    desc: "Stories, songs, open skies. A fire that doesn't need wi-fi. Nights that feel timeless. Included in night stay packages.",
  },
  {
    name: "Nature Trails",
    short: "Walk slowly. Notice everything.",
    desc: "Walk slowly. Notice everything. Guided trails through orchards, fields and forest edges with our naturalists.",
  },
  {
    name: "School Learning Labs",
    short: "Where textbooks become real.",
    desc: "Where textbooks become real. Science, EVS, social studies — every subject comes alive on our agri tourism farm. NEP 2020 aligned.",
  },
  {
    name: "Farm Train Ride",
    short: "A ride through orchards & fields.",
    desc: "A joyful farm train ride through orchards and fields — a favourite for children, families, and school groups alike.",
  },
  {
    name: "Village Pond",
    short: "Water, mud & village play.",
    desc: "Farm pool and village pond experiences — cold water, warm earth, and the kind of play that city life forgot.",
  },
  {
    name: "Box Cricket",
    short: "Farm tournaments for all ages.",
    desc: "Friendly cricket matches in our farm arena — perfect for families, schools, and corporate team outings.",
  },
  {
    name: "Campfire Experiences",
    short: "Stories under open skies.",
    desc: "Bonfire evenings with songs, stories, and starlight. A fire that doesn't need wi-fi — included in night stay packages.",
  },
  {
    name: "Seasonal Festivals",
    short: "Harvest · Sankranti · Seasonal.",
    desc: "Farm festivals, harvest celebrations, and seasonal experiences that change with the land.",
  },
];

export const v3Stats = [
  { target: 4.9, suffix: " ★", float: true, label: "Average Rating" },
  { target: 10000, suffix: "+ Families", label: "Families Welcomed" },
  { target: 500, suffix: "+ Schools", label: "School Groups" },
  { target: 60, suffix: "+ Activities", label: "Agri Tourism Activities" },
  { prefix: "#", target: 1, suffix: " Agri Tourism", label: "Near Hyderabad" },
];

export const v3SchoolBadges = [
  "Delhi Public School",
  "Oakridge International",
  "Meridian School",
  "Johnson Grammar",
  "Chirec Public School",
  "Bharatiya Vidya Bhavan",
  "+ 94 more schools",
];

export const v3SchoolTestimonials = [
  {
    text: '"Our students came back different — quieter, more curious, more grateful. The best agri tourism field trip we\'ve done. We\'ve booked it twice."',
    attr: "Class Teacher · DPS Hyderabad",
  },
  {
    text: '"The coordinator handled everything. Zero complaints from parents. We\'ve already blocked three dates for next year\'s agri tourism programme."',
    attr: "School Coordinator · Oakridge International",
  },
];

export const v3Packages = [
  {
    badge: "Family & Group Outing",
    name: "Farm Day Outing",
    sub: "Day visit · All inclusive",
    price: "₹1,250",
    suffix: "per person · all inclusive",
    discount: "★ 30+ group discounts available",
    features: [
      "60+ agri tourism activities",
      "Sattvic farm lunch included",
      "Goushala visit & Gou Puja",
      "Bullock cart rides",
      "Village games & mud bath",
    ],
    note: "Pottery available as paid add-on",
    cta: "Book Day Outing →",
    waText: "Hi, I want to book a farm day outing",
    featured: false,
  },
  {
    badge: "Overnight Farm Experience",
    name: "Farm Night Stay",
    sub: "Overnight stay · All inclusive",
    price: "₹1,999",
    suffix: "per person · all inclusive",
    discount: "★ 30+ group discounts available",
    features: [
      "All day agri tourism activities",
      "Bonfire night under open skies",
      "All meals — dinner & breakfast",
      "Farm stay accommodation",
      "Dawn Goushala & nature trail",
    ],
    note: "Pottery available as paid add-on",
    cta: "Book Night Stay →",
    waText: "Hi, I want to book a farm night stay",
    featured: false,
  },
  {
    badge: "★ Most Booked · Schools & Colleges",
    name: "School Agri Tourism Trip",
    sub: "For groups of 30+ students",
    tiers: [
      { price: "₹499", desc: "per student · without lunch" },
      { price: "₹699", desc: "per student · with welcome drink & lunch" },
    ],
    discount: "★ Min. 30 students · Group rates apply",
    features: [
      "NEP 2020 aligned activities",
      "Dedicated on-ground coordinator",
      "Fenced, supervised activity zones",
      "Participation certificates",
      "Customised curriculum itinerary",
    ],
    note: "Pottery available as paid add-on",
    cta: "Plan School Trip →",
    waText: "Hi, I want to plan a school trip",
    featured: true,
  },
  {
    badge: "Corporate Agri Tourism",
    name: "Corporate Outing",
    sub: "Teams, startups & corporates",
    price: "₹1,250",
    suffix: "per person · standard package",
    discount: "★ 30+ group discounts available",
    features: [
      "Full-day agri tourism programme",
      "Village game tournaments",
      "All meals included",
      "Bonfire evening add-on available",
      "Custom branding for events",
    ],
    note: "Pottery available as paid add-on",
    cta: "Get Group Quote →",
    waText: "Hi, I want a corporate outing quote",
    featured: false,
  },
];

export const v3VideoTestimonials = [
  {
    duration: "0:48",
    quote:
      '"I haven\'t seen my son this happy in months. He\'s already asking when we can come back for another agri tourism day."',
    name: "Priya Sharma",
    role: "Mother · Banjara Hills, Hyderabad",
    image:
      "https://images.unsplash.com/photo-1609220136736-443c35ba8b7d?w=800&q=80",
  },
  {
    duration: "1:02",
    quote:
      '"Every activity linked to the curriculum. The children didn\'t realise they were learning. Best agri tourism trip we\'ve done."',
    name: "Ms. Radha Krishna",
    role: "Class Teacher · DPS Hyderabad",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    duration: "0:55",
    quote:
      '"My team bonded more in five hours here than in two years of virtual meetings."',
    name: "Vikram Nair",
    role: "HR Head · Tech Mahindra, Hyderabad",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
];

export const v3IgImages = [
  "https://images.unsplash.com/photo-1464226184884-fa80b87dee0f?w=600&q=80",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
  "https://images.unsplash.com/photo-1500382017468-904a7f67de7d?w=600&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  "https://images.unsplash.com/photo-1478131143081-801f4a533e3c?w=600&q=80",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80",
];

export const v3Faqs = [
  {
    q: "How far is Ananda Kshethram from Hyderabad?",
    a: "Ananda Kshethram is approximately a 1 hour drive from Gachibowli, Hyderabad. Located in the Chevella area, Ranga Reddy District, it's easily accessible from HITEC City, Banjara Hills, Jubilee Hills, and most of Hyderabad via the Outer Ring Road.",
  },
  {
    q: "What is the minimum group size for school agri tourism trips?",
    a: "School pricing of ₹499 (without lunch) or ₹699 (with welcome drink and lunch) applies for groups of 30 or more students. For smaller groups, please WhatsApp us and we'll work out a custom arrangement. We can host up to 400 students per day across our supervised activity zones.",
  },
  {
    q: "Is pottery included in the packages?",
    a: "Pottery and craft workshops are premium paid add-ons available at an additional charge, not included in the standard day outing, night stay, school or corporate packages. They can be added to any booking — WhatsApp us to include pottery in your itinerary.",
  },
  {
    q: "Are there discounts for groups of 30 or more?",
    a: "Yes! Special group discounts apply for parties of 30 or more across all our agri tourism packages — family day outings, night stays, and corporate outings. School pricing already reflects group rates. WhatsApp us at +91-77999 00060 with your group size and we'll send you a custom quote.",
  },
  {
    q: "Is the farm safe for children under 5?",
    a: "Yes, absolutely. We have a dedicated toddler and early childhood zone with age-appropriate agri tourism activities. All animal interaction zones are fenced and supervised. Our staff maintain a high caretaker-to-child ratio throughout the day.",
  },
  {
    q: "What meals are served? Are they vegetarian?",
    a: "All meals at Ananda Kshethram are 100% pure vegetarian sattvic food — freshly prepared using produce grown on our own agri tourism farm. We serve a traditional Telangana thali with seasonal vegetables, dal, rice, roti and farm-fresh accompaniments.",
  },
];

/** Version 3 hero — client sky design (public/images/hero-v3-sky.png) */
export const V3_HERO_BACKGROUND = "/images/hero-v3-sky.png";

export const v3Compare = {
  screen:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  mud: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
};
