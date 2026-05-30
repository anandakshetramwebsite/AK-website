import { BRAND_VALUES, WHATSAPP_PHONE } from "@/lib/constants";

export default function FinalInvitation() {
  return (
    <section
      id="book"
      className="bg-midnight-crimson px-4 py-12 text-center text-ivory sm:px-6 sm:py-14"
    >
      <div className="container-page">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
          Your Ananda Experience Awaits
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl font-serif text-2xl font-light italic leading-snug sm:text-3xl">
          The complete Ananda Kshethram ecosystem — nature, village life, agri
          tourism, and meaningful experiences
        </h2>
        <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-x-2 gap-y-1">
          {BRAND_VALUES.map((value) => (
            <span key={value} className="text-xs text-ivory/60 sm:text-sm">
              {value}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#programs"
            className="touch-target rounded-full bg-brand-gold px-8 py-3 text-sm font-bold text-brand-crimson shadow-lg transition-transform hover:scale-[1.02]"
          >
            Book Your Visit
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target rounded-full border border-ivory/45 px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            WhatsApp Us
          </a>
        </div>
        <p className="mx-auto mt-5 max-w-md text-xs text-ivory/50">
          Call, site visits, and custom packages — use the enquiry options
          throughout this page or reach us anytime.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs text-ivory/45 hover:text-brand-gold"
        >
          anandakshethram.com · Chevella, Telangana
        </a>
      </div>
    </section>
  );
}
