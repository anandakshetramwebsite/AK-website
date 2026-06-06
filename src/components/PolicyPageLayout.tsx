import Link from "next/link";
import { LEGAL_PAGE_LINKS, POLICY_CONTACT } from "@/lib/policies";

type PolicySection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

type Props = {
  title: string;
  description: string;
  sections: PolicySection[];
  showContactBlock?: boolean;
  children?: React.ReactNode;
};

export default function PolicyPageLayout({
  title,
  description,
  sections,
  showContactBlock = true,
  children,
}: Props) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: title },
    ],
  };

  return (
    <main className="bg-ivory">
      <section className="bg-deep-crimson py-16 text-ivory md:py-20">
        <div className="brand-container">
          <nav aria-label="Breadcrumb" className="text-xs text-gold-mist/80">
            <Link href="/" className="hover:text-brand-gold">
              Home
            </Link>{" "}
            / <span>{title}</span>
          </nav>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base text-gold-mist/90 md:text-xl">{description}</p>
        </div>
      </section>

      <section className="brand-section-spacing">
        <div className="brand-container grid gap-8 lg:grid-cols-[1fr_280px]">
          <article className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6 md:p-8"
              >
                <h2 className="font-serif text-2xl text-brand-crimson md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3 text-midnight-crimson/85">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.list && section.list.length > 0 && (
                  <ul className="mt-4 space-y-2 text-midnight-crimson/85">
                    {section.list.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {children}

            {showContactBlock && (
              <div className="rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6 md:p-8">
                <h2 className="font-serif text-2xl text-brand-crimson md:text-3xl">Contact Us</h2>
                <ul className="mt-4 space-y-2 text-midnight-crimson/85">
                  <li>
                    Phone / WhatsApp:{" "}
                    <a href={POLICY_CONTACT.phoneTel} className="text-brand-crimson hover:underline">
                      {POLICY_CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      href={`mailto:${POLICY_CONTACT.email}`}
                      className="text-brand-crimson hover:underline"
                    >
                      {POLICY_CONTACT.email}
                    </a>
                  </li>
                  <li>Support Hours: {POLICY_CONTACT.supportHours}</li>
                  <li>
                    {POLICY_CONTACT.location} · {POLICY_CONTACT.locationNote}
                  </li>
                </ul>
              </div>
            )}
          </article>

          <aside className="h-fit rounded-2xl border border-brand-crimson/15 bg-warm-cream p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Information
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {LEGAL_PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-midnight-crimson/80 hover:text-brand-crimson">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
