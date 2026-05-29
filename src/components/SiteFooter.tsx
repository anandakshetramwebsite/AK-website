import Link from "next/link";
import { getSiteContent } from "@/lib/cms/storage";
import SocialLinks from "@/components/SocialLinks";
import BuiltByCredit from "@/components/BuiltByCredit";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default async function SiteFooter() {
  const content = await getSiteContent();
  const whatsappUrl = buildWhatsAppLink("planning a group outing");

  return (
    <footer className="bg-midnight-crimson py-14 text-gold-mist">
      <div className="brand-container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-3xl text-brand-gold">{content.footer.tagline}</h3>
          <p className="mt-3 max-w-sm text-sm text-gold-mist/80">
            {content.footer.description}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Explore</p>
          <ul className="mt-3 space-y-2">
            {content.header.nav.slice(1, 7).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-warm-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Contact</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm hover:text-warm-gold"
          >
            WhatsApp: {content.contact.phone}
          </a>
          <p className="mt-2 text-sm text-gold-mist/80">{content.contact.mapsNote}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-brand-gold">Follow Us</p>
          <SocialLinks
            media={content.media}
            className="mt-2 [&_a]:border-gold-mist/30 [&_a]:bg-midnight-crimson [&_a]:text-gold-mist [&_a]:hover:border-brand-gold [&_a]:hover:text-brand-gold"
          />
          <Link href="/admin" className="mt-4 inline-block text-xs text-gold-mist/50 hover:text-gold-mist">
            Admin
          </Link>
        </div>
      </div>
      <div className="brand-container mt-10 border-t border-gold-mist/15 pt-5 text-center">
        <p className="text-xs text-gold-mist/70">
          © {new Date().getFullYear()} {content.header.siteName}. All rights reserved.
        </p>
        <BuiltByCredit tone="dark" />
      </div>
    </footer>
  );
}
