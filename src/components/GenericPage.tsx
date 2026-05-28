import Link from "next/link";
import { getSiteContent } from "@/lib/cms/storage";
import { ROUTE_TO_PAGE_KEY } from "@/lib/cms/pages";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Props = { routeKey: string };

export default async function GenericPage({ routeKey }: Props) {
  const content = await getSiteContent();
  const pageKey = ROUTE_TO_PAGE_KEY[routeKey];
  const page = pageKey ? content.pages[pageKey] : null;

  if (!page) {
    return (
      <main className="brand-section-spacing">
        <div className="brand-container">
          <h1 className="font-serif text-4xl text-brand-crimson">Page not found</h1>
        </div>
      </main>
    );
  }

  const whatsappLink = buildWhatsAppLink(page.title);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: page.title },
    ],
  };

  return (
    <main className="bg-warm-cream">
      <section className="bg-deep-crimson py-16 text-ivory md:py-20">
        <div className="brand-container">
          <nav aria-label="Breadcrumb" className="text-xs text-gold-mist/80">
            <Link href="/" className="hover:text-brand-gold">
              Home
            </Link>{" "}
            / <span>{page.title}</span>
          </nav>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-gold-mist">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl md:text-6xl">{page.title}</h1>
          <p className="mt-4 max-w-3xl text-base text-gold-mist/90 md:text-xl">{page.subtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact-book-now"
              className="brand-button bg-brand-gold px-8 text-midnight-crimson hover:bg-warm-gold"
            >
              Book This Experience
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button border border-gold-mist px-8 text-ivory hover:border-brand-gold hover:text-brand-gold"
            >
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>

      <section className="brand-section-spacing bg-ivory">
        <div className="brand-container grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6">
            <h2 className="font-serif text-3xl text-brand-crimson">Why This Experience</h2>
            <ul className="mt-4 space-y-2 text-midnight-crimson/85">
              {page.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6">
            <h2 className="font-serif text-3xl text-brand-crimson">Pricing Snapshot</h2>
            {page.pricing && page.pricing.length > 0 ? (
              <ul className="mt-4 space-y-2 text-midnight-crimson/85">
                {page.pricing.map((price) => (
                  <li key={price}>• {price}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-midnight-crimson/85">
                Customized pricing shared on call based on group size and date.
              </p>
            )}
          </article>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
