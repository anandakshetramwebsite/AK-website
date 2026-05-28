import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { getSiteContent } from "@/lib/cms/storage";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact & Book Now | Ananda Kshethram",
    description:
      "Book family outings, school trips, corporate retreats, and night stays at Ananda Kshethram.",
  };
}

export default async function ContactBookNowPage() {
  const content = await getSiteContent();
  const whatsappUrl = buildWhatsAppLink("a visit to Ananda Kshethram");

  return (
    <main className="bg-ivory">
      <section className="bg-deep-crimson py-16 text-ivory md:py-20">
        <div className="brand-container">
          <h1 className="font-serif text-4xl md:text-6xl">Contact & Book Now</h1>
          <p className="mt-4 max-w-3xl text-gold-mist/90">
            Fastest booking path is WhatsApp. Share group type, date, and group size — or
            submit the form below and our team will reach out.
          </p>
        </div>
      </section>

      <section className="brand-section-spacing">
        <div className="brand-container grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6">
            <h2 className="font-serif text-3xl text-brand-crimson">Book Online</h2>
            <div className="mt-5">
              <BookingForm />
            </div>
          </article>
          <article className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6">
            <h2 className="font-serif text-3xl text-brand-crimson">Direct Contact</h2>
            <ul className="mt-4 space-y-2 text-midnight-crimson/85">
              <li>• WhatsApp: {content.contact.phone}</li>
              <li>• Call: {content.contact.phone}</li>
              <li>• {content.contact.mapsNote}</li>
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button mt-5 bg-brand-gold px-8 text-midnight-crimson hover:bg-warm-gold"
            >
              WhatsApp to Plan →
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
