import { WHATSAPP_PHONE } from "@/lib/constants";

export default function FinalInvitation() {
  return (
    <section
      id="book"
      className="bg-midnight-crimson px-4 py-12 text-center text-ivory sm:px-6 sm:py-14"
    >
      <div className="container-page">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
          Plan Your Visit
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-2xl font-light italic leading-snug text-ivory sm:text-3xl">
          Book your agri tourism experience at Ananda Kshethram
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ivory/75">
          Day outings, night stays, school trips, corporate retreats, and
          celebrations — pure vegetarian, nature-rooted, one hour from Hyderabad.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#programs"
            className="touch-target min-w-[11rem] rounded-full bg-brand-gold px-8 py-3 text-sm font-bold text-brand-crimson shadow-lg transition-transform hover:scale-[1.02]"
          >
            Book Your Visit
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target min-w-[11rem] rounded-full border border-ivory/45 px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
