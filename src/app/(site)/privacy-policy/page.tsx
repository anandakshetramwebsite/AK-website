import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { ABOUT_US, BOOKING_EMAIL, POLICY_CONTACT } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Privacy Policy | Ananda Kshethram",
  description:
    "Privacy policy and contact details for Ananda Kshethram — Hyderabad's agri tourism farm retreat near Chevella.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      description="How we handle your information when you book or enquire about Ananda Kshethram."
      sections={[
        {
          heading: "About Us",
          paragraphs: [ABOUT_US],
        },
        {
          heading: "Privacy Policy",
          paragraphs: [
            "We respect your privacy. When you book a visit, enquire about our packages, or contact us, we may collect details such as your name, phone number, email address, visit date, and group size to process your reservation and communicate with you.",
            "We use this information only to manage bookings, respond to enquiries, and improve your experience at the farm. We do not sell your personal information to third parties.",
            "For any questions about how we handle your personal data, please contact us:",
          ],
          list: [
            `Email: ${BOOKING_EMAIL}`,
            `Phone / WhatsApp: ${POLICY_CONTACT.phone}`,
          ],
        },
      ]}
    />
  );
}
