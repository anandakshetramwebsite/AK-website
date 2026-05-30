import type { SiteContent } from "./types";

export const DEFAULT_SITE_CONTENT: SiteContent = {
  brand: {
    promise: "Reconnect With Life.",
    positioning:
      "Ananda Kshethram is Hyderabad's peaceful, pure-vegetarian nature escape — where families, schools, corporates, and communities reconnect with nature, relationships, village life, and the kind of experiences that stay with you long after you leave.",
    notA: ["Not a resort", "Not a picnic spot", 'Not a "venue"'],
    emotions: ["Peaceful", "Rooted", "Joyfully Indian"],
    voiceNotes: [
      "Warm Indian grandparent vibe",
      "Earthy, honest, land-connected",
      "Never startup-style or luxury spa tone",
    ],
  },
  seo: {
    title:
      "Ananda Kshethram — Best Agri Tourism & Farm Retreat near Hyderabad | 60 Min from Gachibowli",
    description:
      "Farm outings · Night stays · School trips · Corporate retreats. Hyderabad's top-rated agri tourism.",
    keywords: [
      "Farm outing near Hyderabad",
      "School trips near Hyderabad",
      "Corporate team outing Hyderabad",
      "Agri tourism Hyderabad",
      "Family outing near Hyderabad",
      "Nature retreat Hyderabad",
      "Mud bath near Hyderabad",
      "Summer camp Hyderabad",
      "Digital detox retreat Hyderabad",
    ],
  },
  contact: {
    phone: "+91 77999 00060",
    whatsapp: "917799900060",
    mapsNote: "60 minutes from Gachibowli, Hyderabad",
  },
  header: {
    siteName: "Ananda Kshethram",
    nav: [
      { href: "#experiences", label: "Experiences" },
      { href: "#activities", label: "Activities" },
      { href: "#goushala", label: "Goushala" },
      { href: "#programs", label: "Packages" },
      { href: "#book", label: "Book" },
    ],
  },
  footer: {
    tagline: "Reconnect With Life.",
    description:
      "Hyderabad's peaceful, pure-vegetarian nature escape for families, schools, corporates, and communities.",
  },
  media: {
    sectionTitle: "See Ananda. Feel Ananda.",
    sectionSubtitle:
      "Real farm moments from families, schools, and teams — watch our stories and follow us for daily joy from the fields.",
    youtubeVideos: [
      {
        id: "GMEZvjBJH4I",
        title: "Ananda Kshethram — Farm Experience Highlights",
      },
      {
        id: "vkNjAIvCSZo",
        title: "Guest Stories at Ananda Kshethram",
      },
    ],
    instagram: {
      headline: "Real Moments. Real Smiles. Real Ananda.",
      note: "Follow us on Instagram for live updates from the farm.",
      reelUrl: "https://www.instagram.com/reel/DLHB_VGyJ_E/",
    },
    social: {
      youtubeChannel: "https://www.youtube.com/@anandakshethram",
      instagram: "https://www.instagram.com/anandakshethram/",
      linkedin:
        "https://www.linkedin.com/company/ananda-kshethram-agri-farm-retreats/",
      facebook: "https://www.facebook.com/share/18jj2KjyNQ/",
    },
  },
  homepage: {
    hero: {
      tagline: "Reconnect With Life",
      headline: "Give Your Child a Childhood Worth Remembering",
      subheadline:
        "India's most soulful farm experience — just 1 hour from Hyderabad",
      ctaPrimary: "Plan Our Visit",
      ctaSecondary: "WhatsApp Us →",
    },
    stats: [
      "4.9★ Google Rated",
      "10,000+ Families Welcomed",
      "500+ School Groups",
      "#1 Farm Retreat Hyderabad",
    ],
    audienceSectionTitle: "Experiences by Audience",
    audienceTiles: [
      { title: "Schools", line: "The Field Trip That Teaches What No Textbook Can" },
      { title: "Families", line: "Three Generations. One Perfect Day." },
      {
        title: "Corporate",
        line: "Bonds Built in Nature Last Longer Than Any Workshop",
      },
      { title: "Camps", line: "The Summer They'll Tell Their Kids About" },
      { title: "Kitty Parties", line: "Nature's Most Joyful Table" },
      { title: "Night Camps", line: "Nights That Belong to the Stars" },
    ],
    emotional: {
      headline:
        "When did your child last plant something and watch it grow?",
      body: "Milk a cow? Win a game that didn't have a touchscreen? Children are drifting away from soil. The farm reconnects them to life.",
      beforeLabel: "Before",
      beforeText: "Child on screen",
      afterLabel: "After",
      afterText: "Child in mud laughing",
    },
    activitiesTitle: "Experience Showcase",
    activities: [
      "Organic Farming",
      "Goushala & Gou Puja",
      "60+ Village Games",
      "Bullock Cart & Farm Train",
      "Farm Pool & Mud Bath",
      "Sattvic Meals",
      "Pottery & Crafts",
      "Bonfire Nights",
      "Nature Trails",
      "School Learning Labs",
    ],
    schools: {
      title: "Trusted by schools across Hyderabad",
      list: [
        "Delhi Public School",
        "Oakridge International",
        "Meridian School",
        "Johnson Grammar",
        "Chirec Public School",
        "Bharatiya Vidya Bhavan",
        "The Hyderabad Public School",
        "Sreenidhi International",
      ],
      famTitle: "Free Familiarisation Visit for Teachers",
      famBody:
        "Meet the team, review safety protocols, and experience the learning flow before booking student groups.",
    },
    packagesTitle: "Transparent Package Pricing",
    packages: [
      {
        name: "Family Farm Day",
        price: "₹1,249/adult · ₹899/child",
        includes: [
          "60+ activities",
          "Sattvic lunch",
          "Goushala access",
          "Bullock cart rides",
        ],
      },
      {
        name: "School Journey",
        price: "₹500/student with lunch · ₹300 without",
        includes: [
          "NEP-aligned activities",
          "Group coordinator",
          "Supervised zones",
          "Certificate",
        ],
      },
      {
        name: "Corporate Reset",
        price: "Starts ₹1,999/person",
        includes: [
          "Full-day program",
          "Village games",
          "Meals included",
          "Bonfire options",
        ],
      },
      {
        name: "Overnight Stay",
        price: "₹1,999/adult · ₹1,499/child",
        includes: ["Bonfire", "Stargazing", "Breakfast", "Morning nature walk"],
      },
    ],
    testimonialsTitle: "Voices from Families, Teachers, and Teams",
    testimonials: [
      {
        quote: "I haven't seen my son this happy in months.",
        role: "Parent",
      },
      {
        quote: "Children didn't realise they were learning.",
        role: "Teacher",
      },
      {
        quote:
          "Bonded more in five hours than two years of virtual meetings.",
        role: "Corporate HR",
      },
    ],
    instagram: {
      headline: "Real Moments. Real Smiles. Real Ananda.",
      note: "Instagram feed — connect Smash Balloon when account is ready.",
    },
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How far is Ananda Kshethram from Hyderabad?",
        answer:
          "About 60 minutes from Gachibowli, making it ideal for day trips and school outings.",
      },
      {
        question: "What is the minimum group size?",
        answer:
          "Group minimums vary by experience. WhatsApp us with your group size and we will recommend the best package.",
      },
      {
        question: "How is child safety handled on-site?",
        answer:
          "Supervised zones, trained coordinators, and clear activity boundaries for all school and family groups.",
      },
      {
        question: "Do you serve only pure-vegetarian meals?",
        answer: "Yes. Ananda Kshethram is 100% pure vegetarian (sattvic).",
      },
      {
        question: "Can we host private events?",
        answer:
          "Yes — birthdays, kitty parties, reunions, and corporate offsites can be planned with custom flows.",
      },
      {
        question: "What should we carry for a visit?",
        answer:
          "Comfortable clothes, closed shoes, sunscreen, and a change of clothes for mud/pool activities.",
      },
    ],
    finalCta: {
      headline:
        "Your family deserves one day without screens. Give them Ananda.",
      ctaPrimary: "Book a Visit",
      ctaSecondary: "WhatsApp to Plan →",
    },
  },
  pages: {
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
  },
  blogPosts: [
    {
      title: "Why Farm Outings Matter for Screen-Tired Children",
      tag: "Parenting",
    },
    {
      title: "How Schools Can Plan High-Impact Nature Field Trips",
      tag: "Education",
    },
    {
      title: "Corporate Team Bonding Beyond Conference Rooms",
      tag: "Corporate",
    },
  ],
  galleryAlts: [
    "Family farm outing near Hyderabad with children playing in mud",
    "School trips near Hyderabad students learning organic farming",
    "Corporate team outing Hyderabad village games activity",
    "Agri tourism Hyderabad bullock cart farm ride",
    "Nature retreat Hyderabad bonfire evening gathering",
    "Pure vegetarian farm meals served in traditional style",
  ],
};
