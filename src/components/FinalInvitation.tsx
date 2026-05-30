import { whatsappUrl } from "@/lib/site-copy";

export default function FinalInvitation() {
  return (
    <section
      id="book"
      className="bg-midnight-crimson px-4 py-10 text-center text-ivory sm:px-6 sm:py-12"
    >
      <div className="container-page">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold sm:text-xs">
          The Invitation
        </p>
        <h2 className="mx-auto mt-2 max-w-xl font-serif text-2xl font-light italic leading-snug text-ivory sm:mt-3 sm:text-3xl">
          Your family deserves one day without screens.
          <br />
          <span className="text-warm-gold">Give them Ananda.</span>
        </h2>
        <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
          <a
            href="#programs"
            className="touch-target w-full max-w-[14rem] rounded-full bg-brand-gold px-6 py-2.5 text-sm font-bold text-brand-crimson shadow-lg transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Book a Visit
          </a>
          <a
            href={whatsappUrl("Hi, I want to plan a visit to Ananda Kshethram")}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target w-full max-w-[14rem] rounded-full border border-ivory/40 px-6 py-2.5 text-sm font-semibold text-ivory transition-colors hover:border-brand-gold hover:text-brand-gold sm:w-auto"
          >
            WhatsApp to Plan →
          </a>
        </div>
      </div>
    </section>
  );
}
