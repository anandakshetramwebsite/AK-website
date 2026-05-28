export type PageContent = {
  title: string;
  description: string;
  eyebrow: string;
  subtitle: string;
  points: string[];
  pricing?: string[];
};

export const PAGE_CONTENT: Record<string, PageContent> = {
  about: {
    title: "About Ananda Kshethram",
    description:
      "Learn how Ananda Kshethram helps families, schools, and teams reconnect with nature near Hyderabad.",
    eyebrow: "Who We Are",
    subtitle:
      "Not a resort. Not a picnic spot. A peaceful, pure-vegetarian nature escape built to reconnect people with relationships, roots, and village life.",
    points: [
      "Warm Indian grandparent-like hospitality",
      "Peaceful, rooted, joyfully Indian experience design",
      "Nature-first programs for children and adults",
    ],
  },
  school: {
    title: "School Field Trips Near Hyderabad",
    description:
      "NEP-aligned school trips near Hyderabad with farm learning, village games, and supervised safe zones.",
    eyebrow: "For Schools",
    subtitle:
      "The field trip that teaches what no textbook can. Children learn with soil, stories, and hands-on farm experiences.",
    points: [
      "NEP-aligned activity flow",
      "Teacher support and group coordinators",
      "Certificate-based learning outcomes",
    ],
    pricing: ["₹500/student with lunch", "₹300/student without lunch"],
  },
  corporate: {
    title: "Corporate Retreats Hyderabad",
    description:
      "Corporate team outings near Hyderabad with village games, sattvic meals, and meaningful team bonding.",
    eyebrow: "For Corporate Teams",
    subtitle:
      "Bonds built in nature last longer than any workshop. Teams reset away from screens and reconnect as humans.",
    points: [
      "Village game-led team bonding",
      "Full-day and overnight formats",
      "Vegetarian curated meals and bonfire add-ons",
    ],
    pricing: ["Starts at ₹1,999/person"],
  },
  family: {
    title: "Family Outings Near Hyderabad",
    description:
      "Three generations. One perfect day. Family farm outings with 60+ activities, meals, and village experiences.",
    eyebrow: "For Families",
    subtitle:
      "A digital detox day where children laugh in mud and grandparents smile at familiar village rhythms.",
    points: [
      "60+ activities across age groups",
      "Goushala, bullock cart, mud and pool fun",
      "Pure vegetarian sattvic meals",
    ],
    pricing: ["₹1,249/adult", "₹899/child"],
  },
  bootcamp: {
    title: "Life Skills Bootcamp",
    description:
      "Life skills camps near Hyderabad with teamwork, responsibility, practical farm tasks, and confidence-building.",
    eyebrow: "For Camps",
    subtitle:
      "The summer they will tell their kids about. A bootcamp that builds resilience, empathy, and practical confidence.",
    points: [
      "Outdoor leadership and accountability activities",
      "Hands-on farming and cooperative tasks",
      "Reflection circles and experiential learning",
    ],
  },
  kitty: {
    title: "Kitty Parties in Nature",
    description:
      "Kitty parties near Hyderabad with joyful farm ambience, sattvic food, and shared moments in nature.",
    eyebrow: "For Kitty Groups",
    subtitle:
      "Nature's most joyful table. Celebrate with your circle in a warm, relaxed, and meaningful setting.",
    points: [
      "Private seating and group activity options",
      "Custom vegetarian menu formats",
      "Photo-friendly rustic experiences",
    ],
  },
  cousins: {
    title: "Cousins Get-Togethers",
    description:
      "Cousins outings near Hyderabad with games, mud fun, farm rides, and memory-rich shared activities.",
    eyebrow: "For Cousins and Family Circles",
    subtitle:
      "Shared laughter, old stories, and one day that feels like childhood again.",
    points: [
      "Village games and multi-age experiences",
      "Day outing and evening options",
      "Group booking support via WhatsApp",
    ],
  },
  alumni: {
    title: "Alumni & Reunion Experiences",
    description:
      "School and college reunion venues near Hyderabad with nature-led bonding and curated day plans.",
    eyebrow: "For Reunions",
    subtitle:
      "Reconnect with people and memories where conversation flows naturally and screens disappear.",
    points: [
      "Structured and free-flow reunion formats",
      "Outdoor games and food-led social blocks",
      "Ideal for school and college batches",
    ],
  },
  birthdays: {
    title: "Birthdays & Celebrations",
    description:
      "Celebrate birthdays near Hyderabad with meaningful farm experiences, food, and family-friendly activities.",
    eyebrow: "For Celebrations",
    subtitle:
      "Celebrate in a way children and elders both remember: nature, laughter, and food that feels like home.",
    points: [
      "Custom celebration slots and group flow",
      "Games, rides, mud, and optional bonfire",
      "Pure-veg meals with add-on planning support",
    ],
  },
  festival: {
    title: "Festival Experiences",
    description:
      "Festival-themed farm experiences near Hyderabad with Indian traditions, community activities, and food.",
    eyebrow: "For Festivals",
    subtitle:
      "Celebrate Indian festivals with community warmth, rituals, food, and earth-connected joy.",
    points: [
      "Theme days around major Indian festivals",
      "Traditional games, puja, and crafts",
      "Family and group-friendly participation",
    ],
  },
  nightStay: {
    title: "Night Stay at Ananda Kshethram",
    description:
      "Overnight farm stay near Hyderabad with bonfire, stargazing, and pure-vegetarian meals.",
    eyebrow: "For Overnight Guests",
    subtitle:
      "Nights that belong to the stars. Stay, slow down, and wake up to village mornings.",
    points: [
      "Bonfire and stargazing atmosphere",
      "Overnight comfort with meal plans",
      "Ideal for families and corporate groups",
    ],
    pricing: ["₹1,999/adult", "₹1,499/child"],
  },
};
