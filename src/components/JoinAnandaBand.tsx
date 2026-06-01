import { whatsappUrl } from "@/lib/site-copy";

export default function JoinAnandaBand() {
  return (
    <section className="section-pad bg-linen">
      <div className="container-page">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-brand-gold/35 bg-ivory px-6 py-8 text-center shadow-[0_4px_24px_rgba(123,21,21,0.06)] sm:px-8 sm:py-10 md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Stay connected
            </p>
            <h2 className="heading-section mt-2 text-forest">
              Join the Ananda Family
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-forest/75 sm:text-base">
              Never miss a camp batch, seasonal agri tourism event, or special
              programme. Join our WhatsApp Broadcast Group.
            </p>
          </div>
          <a
            href={whatsappUrl(
              "I want to join the Ananda Kshethram broadcast group"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target shrink-0 rounded-full bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-crimson shadow-lg transition-all hover:bg-warm-gold hover:shadow-brand-gold/25"
          >
            Join Broadcast Group
          </a>
        </div>
      </div>
    </section>
  );
}
