import Link from "next/link";
import { getSiteContent } from "@/lib/cms/storage";
import { FOOTER_NAV } from "@/lib/single-page-nav";
import BuiltByCredit from "@/components/BuiltByCredit";
import FooterSocialIcons from "@/components/FooterSocialIcons";
import { LEGAL_PAGE_LINKS } from "@/lib/policies";

export default async function SiteFooter() {
  const content = await getSiteContent();

  return (
    <footer className="bg-midnight-crimson py-14 text-gold-mist">
      <div className="brand-container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-serif text-3xl text-brand-gold">{content.footer.tagline}</h3>
          <p className="mt-3 max-w-sm text-sm text-gold-mist/80">
            {content.footer.description}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Explore</p>
          <ul className="mt-3 space-y-2">
            {FOOTER_NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:text-warm-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Contact</p>
          <a
            href="tel:+917799900060"
            className="mt-3 inline-block text-sm hover:text-warm-gold"
          >
            {content.contact.phone}
          </a>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-brand-gold">Follow Us</p>
          <FooterSocialIcons className="mt-3" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Information</p>
          <ul className="mt-3 space-y-2">
            {LEGAL_PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-warm-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="brand-container mt-10 border-t border-gold-mist/15 pt-5 text-center">
        <p className="text-sm text-gold-mist/70">
          © {new Date().getFullYear()} {content.header.siteName}. All rights reserved.
        </p>
      </div>
      <div className="brand-container pb-4 pt-4 text-center">
        <BuiltByCredit tone="dark" />
      </div>
    </footer>
  );
}
