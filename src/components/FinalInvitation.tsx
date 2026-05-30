import { WHATSAPP_PHONE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/site-copy";

export default function FinalInvitation() {
  return (
    <section
      id="book"
      className="section-pad bg-midnight-crimson text-center text-ivory"
    >
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
          The Invitation
        </p>
        <h2 className="heading-section mx-auto mt-4 max-w-2xl text-ivory">
          Your family deserves one day without screens.
          <br />
          <span className="text-warm-gold">Give them Ananda.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-ivory/70 sm:text-base">
          +91-77999 00060 · Agri Tourism · 60 minutes from Gachibowli,
          Hyderabad · Telangana
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#programs"
            className="touch-target w-full max-w-xs rounded-full bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-crimson shadow-xl transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Book a Visit
          </a>
          <a
            href={whatsappUrl("Hi, I want to plan a visit to Ananda Kshethram")}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target w-full max-w-xs rounded-full border-2 border-ivory/40 px-8 py-3.5 text-sm font-semibold text-ivory transition-colors hover:border-brand-gold hover:text-brand-gold sm:w-auto"
          >
            WhatsApp to Plan →
          </a>
        </div>
        <a
          href={`tel:+${WHATSAPP_PHONE}`}
          className="mt-6 inline-block text-sm text-ivory/60 hover:text-brand-gold"
        >
          Call +91 77999 00060
        </a>
      </div>
    </section>
  );
}
