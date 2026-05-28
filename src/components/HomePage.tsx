import Link from "next/link";
import type { SiteContent } from "@/lib/cms/types";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Props = { content: SiteContent };

export default function HomePage({ content }: Props) {
  const { homepage: h, brand, contact } = content;
  const whatsappUrl = buildWhatsAppLink("a family visit to Ananda Kshethram");
  const bookingLink = "/contact-book-now";

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.header.siteName,
    description: brand.positioning,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "10000",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.385,
      longitude: 78.4867,
    },
  };

  return (
    <>
      <main className="bg-warm-cream">
        <section className="bg-deep-crimson pb-14 pt-24 text-ivory md:pb-20">
          <div className="brand-container">
            <p className="text-center text-sm uppercase tracking-[0.2em] text-gold-mist">
              {h.hero.tagline}
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-center font-serif text-[34px] font-semibold leading-tight md:text-6xl">
              {h.hero.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-center text-base text-gold-mist md:text-xl">
              {h.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={bookingLink}
                className="brand-button bg-brand-gold px-8 text-midnight-crimson hover:bg-warm-gold"
              >
                {h.hero.ctaPrimary}
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button border border-gold-mist px-8 text-ivory hover:border-brand-gold hover:text-brand-gold"
              >
                {h.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl bg-midnight-crimson/35 p-4 text-center text-sm md:grid-cols-4">
              {h.stats.map((stat) => (
                <p key={stat}>{stat}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-section-spacing bg-ivory">
          <div className="brand-container">
            <h2 className="text-center font-serif text-3xl text-brand-crimson md:text-5xl">
              Who We Are. What We Mean.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-midnight-crimson/80 md:text-lg">
              {brand.positioning}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">
                  What We Are NOT
                </p>
                {brand.notA.map((line) => (
                  <p key={line} className="mt-2 font-semibold text-brand-crimson">
                    {line}
                  </p>
                ))}
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-gold">
                  Brand Emotion
                </p>
                <p className="mt-2 text-sm text-midnight-crimson/85">
                  {brand.emotions.join(" · ")}
                </p>
              </div>
              <div className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-5 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">
                  Brand Voice
                </p>
                <ul className="mt-2 space-y-1 text-midnight-crimson/85">
                  {brand.voiceNotes.map((note) => (
                    <li key={note}>• {note}</li>
                  ))}
                </ul>
                <p className="mt-4 font-serif text-2xl text-brand-crimson">
                  {brand.promise}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-section-spacing bg-warm-cream">
          <div className="brand-container">
            <h2 className="text-center font-serif text-3xl text-brand-crimson md:text-5xl">
              {h.audienceSectionTitle}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {h.audienceTiles.map((tile) => (
                <article
                  key={tile.title}
                  className="rounded-2xl border border-brand-crimson/15 bg-ivory p-6"
                >
                  <h3 className="font-serif text-2xl text-brand-crimson">{tile.title}</h3>
                  <p className="mt-2 text-midnight-crimson/80">{tile.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-section-spacing bg-gold-mist/35">
          <div className="brand-container grid items-start gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-ivory p-6">
              <h2 className="font-serif text-3xl text-brand-crimson md:text-4xl">
                {h.emotional.headline}
              </h2>
              <p className="mt-4 text-midnight-crimson/85">{h.emotional.body}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-brand-crimson/15 bg-ivory p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">
                  {h.emotional.beforeLabel}
                </p>
                <p className="mt-2 font-serif text-xl text-brand-crimson">
                  {h.emotional.beforeText}
                </p>
              </div>
              <div className="rounded-2xl border border-brand-crimson/15 bg-ivory p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">
                  {h.emotional.afterLabel}
                </p>
                <p className="mt-2 font-serif text-xl text-forest-green">
                  {h.emotional.afterText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-section-spacing bg-ivory">
          <div className="brand-container">
            <h2 className="text-center font-serif text-3xl text-brand-crimson md:text-5xl">
              {h.activitiesTitle}
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {h.activities.map((activity) => (
                <div
                  key={activity}
                  className="rounded-xl border border-brand-crimson/15 bg-warm-cream p-4 text-sm font-medium text-midnight-crimson"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-midnight-crimson py-10 text-gold-mist">
          <div className="brand-container grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {h.stats.map((stat) => (
              <p key={`strip-${stat}`} className="font-semibold">
                {stat}
              </p>
            ))}
          </div>
        </section>

        <section className="brand-section-spacing bg-warm-cream">
          <div className="brand-container">
            <h2 className="font-serif text-3xl text-brand-crimson md:text-5xl">
              {h.schools.title}
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {h.schools.list.map((school) => (
                <p
                  key={school}
                  className="rounded-xl border border-brand-crimson/15 bg-ivory px-4 py-3 text-sm"
                >
                  {school}
                </p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-brand-crimson/15 bg-ivory p-6">
              <p className="font-serif text-2xl text-brand-crimson">{h.schools.famTitle}</p>
              <p className="mt-2 text-midnight-crimson/80">{h.schools.famBody}</p>
            </div>
          </div>
        </section>

        <section className="brand-section-spacing bg-ivory">
          <div className="brand-container">
            <h2 className="text-center font-serif text-3xl text-brand-crimson md:text-5xl">
              {h.packagesTitle}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {h.packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className="rounded-2xl border border-brand-crimson/20 bg-warm-cream p-6"
                >
                  <h3 className="font-serif text-2xl text-brand-crimson">{pkg.name}</h3>
                  <p className="mt-2 text-xl font-semibold text-midnight-crimson">{pkg.price}</p>
                  <ul className="mt-4 space-y-1 text-sm text-midnight-crimson/85">
                    {pkg.includes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-section-spacing bg-gold-mist/35">
          <div className="brand-container">
            <h2 className="text-center font-serif text-3xl text-brand-crimson md:text-5xl">
              {h.testimonialsTitle}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {h.testimonials.map((t) => (
                <blockquote key={t.role} className="rounded-2xl bg-ivory p-6">
                  <p className="font-serif text-2xl text-brand-crimson">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm text-midnight-crimson/70">{t.role}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-section-spacing bg-warm-cream">
          <div className="brand-container">
            <h2 className="font-serif text-3xl text-brand-crimson md:text-5xl">
              {h.instagram.headline}
            </h2>
            <p className="mt-3 text-midnight-crimson/80">{h.instagram.note}</p>
          </div>
        </section>

        <section className="brand-section-spacing bg-ivory">
          <div className="brand-container">
            <h2 className="font-serif text-3xl text-brand-crimson md:text-5xl">{h.faqTitle}</h2>
            <div className="mt-7 space-y-3">
              {h.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-brand-crimson/15 bg-warm-cream p-4"
                >
                  <summary className="cursor-pointer font-medium text-midnight-crimson">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-midnight-crimson/80">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-crimson py-16 text-ivory">
          <div className="brand-container text-center">
            <h2 className="mx-auto max-w-4xl font-serif text-3xl md:text-5xl">
              {h.finalCta.headline}
            </h2>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={bookingLink}
                className="brand-button bg-brand-gold px-8 text-midnight-crimson hover:bg-warm-gold"
              >
                {h.finalCta.ctaPrimary}
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button border border-gold-mist px-8 text-ivory hover:border-brand-gold hover:text-brand-gold"
              >
                {h.finalCta.ctaSecondary}
              </a>
            </div>
            <p className="mt-6 text-sm text-gold-mist/80">{contact.mapsNote}</p>
          </div>
        </section>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white shadow-lg"
      >
        WA
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
