import type { Metadata } from "next";
import Version3Home from "@/components/v3/Version3Home";
import { v3Seo } from "@/lib/v3/content";
import "./v3.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TouristAttraction", "LocalBusiness", "AgriculturalBusiness"],
      "@id": "https://anandakshethram.com/#organization",
      name: "Ananda Kshethram Agri Tourism",
      alternateName: [
        "Ananda Kshethram Farm Retreat",
        "Ananda Kshethram Agri-Tourism",
      ],
      description:
        "Hyderabad's premier agri tourism destination offering farm day outings, overnight farm stays, school field trips, corporate retreats, and summer camps. 60 minutes from Gachibowli, Telangana.",
      url: "https://anandakshethram.com",
      telephone: "+917799900060",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chevella",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "17.3153",
        longitude: "78.1503",
      },
      openingHours: "Mo-Su 08:00-18:00",
      sameAs: [
        "https://www.instagram.com/anandakshethram/",
        "https://www.youtube.com/@AnandaKshethram",
        "https://in.linkedin.com/company/ananda-kshethram-agri-farm-retreats",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "10000",
        bestRating: "5",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Agri Tourism Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Farm Day Outing",
            price: "1299",
            priceCurrency: "INR",
            description:
              "All-inclusive farm day outing with 60+ activities, sattvic lunch, goushala visit",
          },
          {
            "@type": "Offer",
            name: "Farm Night Stay",
            price: "1999",
            priceCurrency: "INR",
            description: "All-inclusive overnight farm stay experience",
          },
          {
            "@type": "Offer",
            name: "School Field Trip",
            price: "499",
            priceCurrency: "INR",
            description:
              "NEP 2020-aligned school agri tourism trip. ₹499 without lunch, ₹699 with lunch. Min 30 students.",
          },
          {
            "@type": "Offer",
            name: "Corporate Outing",
            price: "1299",
            priceCurrency: "INR",
            description: "Standard corporate agri tourism outing per person",
          },
        ],
      },
    },
  ],
};

export const metadata: Metadata = {
  title: v3Seo.title,
  description: v3Seo.description,
  keywords: v3Seo.keywords,
  robots: "index, follow",
  alternates: { canonical: "https://anandakshethram.com/" },
  openGraph: {
    type: "website",
    url: "https://anandakshethram.com/",
    title: "Ananda Kshethram — Best Agri Tourism & Farm Retreat near Hyderabad",
    description:
      "60 minutes from Gachibowli. Farm outings, night stays, school trips & corporate retreats. India's most soulful agri tourism experience in Telangana.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananda Kshethram — Best Agri Tourism near Hyderabad",
    description:
      "Farm outings ₹1,299 · Night stays · School trips from ₹499 · Corporate retreats. 60 min from Gachibowli, Hyderabad.",
  },
};

export default function Version3Page() {
  return (
    <>
      <link rel="preload" href="/images/hero-v3-sky.png" as="image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Version3Home />
    </>
  );
}
