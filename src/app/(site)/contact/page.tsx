import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { MAPS_URL } from "@/lib/constants";
import { POLICY_CONTACT } from "@/lib/policies";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us | Ananda Kshethram",
  description:
    "Contact Ananda Kshethram for bookings and enquiries. Phone, WhatsApp, and email — support 9 AM to 9 PM daily.",
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppLink("a visit to Ananda Kshethram");

  return (
    <PolicyPageLayout
      title="Contact Us"
      description="Reach our team for bookings, group enquiries, and visit planning. We respond fastest on WhatsApp."
      showContactBlock={false}
      sections={[
        {
          heading: "Get In Touch",
          paragraphs: [
            "Advance booking is recommended for all visits. Share your group type, preferred date, and group size — our team will confirm availability and pricing.",
          ],
          list: [
            `Phone / WhatsApp: ${POLICY_CONTACT.phone}`,
            `Email: ${POLICY_CONTACT.email}`,
            `Support Hours: ${POLICY_CONTACT.supportHours}`,
            `${POLICY_CONTACT.location} · ${POLICY_CONTACT.locationNote}`,
          ],
        },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6 md:p-8">
          <h2 className="font-serif text-2xl text-brand-crimson md:text-3xl">Book Online</h2>
          <p className="mt-3 text-sm text-midnight-crimson/80">
            Submit your details and our team will call you back to confirm your visit.
          </p>
          <div className="mt-5">
            <BookingForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6 md:p-8">
            <h2 className="font-serif text-2xl text-brand-crimson md:text-3xl">WhatsApp</h2>
            <p className="mt-3 text-midnight-crimson/85">
              Fastest way to plan your visit — share date, group size, and experience type.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button mt-5 bg-brand-gold px-8 text-midnight-crimson hover:bg-warm-gold"
            >
              WhatsApp Us →
            </a>
          </div>

          <div className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6 md:p-8">
            <h2 className="font-serif text-2xl text-brand-crimson md:text-3xl">Directions</h2>
            <p className="mt-3 text-midnight-crimson/85">
              {POLICY_CONTACT.location}. {POLICY_CONTACT.locationNote}.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button mt-5 border border-brand-crimson/30 px-8 text-brand-crimson hover:border-brand-crimson"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6 md:p-8">
            <h2 className="font-serif text-2xl text-brand-crimson md:text-3xl">Email & Phone</h2>
            <ul className="mt-4 space-y-2 text-midnight-crimson/85">
              <li>
                <a href={POLICY_CONTACT.phoneTel} className="text-brand-crimson hover:underline">
                  {POLICY_CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${POLICY_CONTACT.email}`}
                  className="text-brand-crimson hover:underline"
                >
                  {POLICY_CONTACT.email}
                </a>
              </li>
            </ul>
            <Link
              href="/#book"
              className="mt-5 inline-block text-sm font-semibold text-brand-crimson hover:underline"
            >
              View packages on homepage →
            </Link>
          </div>
        </div>
      </div>
    </PolicyPageLayout>
  );
}
