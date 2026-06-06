import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { ABOUT_US } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ananda Kshethram",
  description:
    "Booking terms and conditions for Ananda Kshethram — advance booking required for all farm visits and experiences.",
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyPageLayout
      title="Terms & Conditions"
      description="Please read these terms before booking your visit to Ananda Kshethram."
      sections={[
        {
          heading: "About Us",
          paragraphs: [ABOUT_US],
        },
        {
          heading: "Booking Terms",
          paragraphs: [
            "Advance booking is mandatory. Spot bookings are not guaranteed and are subject to availability and management approval.",
            "All bookings are for pure vegetarian farm experiences. Guests are expected to follow farm rules and staff guidance for safety and the comfort of all visitors.",
            "Ananda Kshethram reserves the right to modify schedules, activities, or access to certain areas based on weather, safety, or operational requirements.",
          ],
        },
      ]}
    />
  );
}
