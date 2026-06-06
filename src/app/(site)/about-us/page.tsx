import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { ABOUT_US, ABOUT_US_HIGHLIGHTS } from "@/lib/policies";

export const metadata: Metadata = {
  title: "About Us | Ananda Kshethram",
  description:
    "About Ananda Kshethram — Hyderabad's first agri tourism hub and only pure veg farm retreat near Chevella.",
};

export default function AboutUsPage() {
  return (
    <PolicyPageLayout
      title="About Us"
      description="Hyderabad's peaceful, pure-vegetarian nature escape — where families, schools, corporates, and communities reconnect with village life."
      sections={[
        {
          heading: "Who We Are",
          paragraphs: [
            ABOUT_US,
            "Not a resort. Not a picnic spot. Ananda Kshethram is a peaceful, rooted, joyfully Indian experience — built to help people reconnect with relationships, roots, and meaningful village life.",
            "We welcome families, schools, corporate teams, and community groups for day outings, night stays, celebrations, and learning experiences across 60+ farm activities.",
          ],
        },
        {
          heading: "What Makes Us Different",
          paragraphs: [
            "More than a getaway — a place to reconnect with nature, people, and meaningful experiences.",
          ],
          list: [...ABOUT_US_HIGHLIGHTS],
        },
        {
          heading: "Our Promise",
          paragraphs: [
            "Warm Indian hospitality, nature-first programs for children and adults, and a safe, spacious green campus where every visit feels personal and memorable.",
          ],
        },
      ]}
    />
  );
}
