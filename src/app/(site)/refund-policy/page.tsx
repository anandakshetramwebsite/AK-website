import type { Metadata } from "next";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { ABOUT_US } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Ananda Kshethram",
  description:
    "Refund and cancellation policy for Ananda Kshethram bookings — 100% refund for cancellations 48 hours before visit date.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyPageLayout
      title="Refund & Cancellation Policy"
      description="Our refund, cancellation, and rescheduling policy for all Ananda Kshethram bookings."
      sections={[
        {
          heading: "About Us",
          paragraphs: [ABOUT_US],
        },
        {
          heading: "Refund & Cancellation Policy",
          paragraphs: [
            "We understand plans can change. Please review the following policy before confirming your booking.",
          ],
          list: [
            "100% refund for cancellations made 48 hours before the visit date.",
            "No refund for cancellations within 48 hours of the visit date.",
            "One-time rescheduling is allowed, subject to management approval and availability.",
            "Approved refunds are processed within 3 working days.",
          ],
        },
      ]}
    />
  );
}
