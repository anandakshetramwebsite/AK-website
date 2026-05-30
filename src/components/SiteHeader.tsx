import Image from "next/image";
import Link from "next/link";
import { getSiteContent } from "@/lib/cms/storage";
import { BRAND_LOGO } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default async function SiteHeader() {
  const content = await getSiteContent();
  const whatsappUrl = buildWhatsAppLink("booking an Ananda Kshethram experience");

  return (
    <header className="sticky top-0 z-40 border-b border-brand-crimson/15 bg-midnight-crimson text-ivory">
      <div className="brand-container flex min-h-16 items-center justify-between gap-4 py-2">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={BRAND_LOGO}
            alt={content.header.siteName}
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain"
            priority
          />
          <span className="font-serif text-2xl tracking-tight text-gold-mist">
            {content.header.siteName}
          </span>
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          {content.header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gold-mist/90 transition-colors hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-button bg-brand-gold px-5 text-midnight-crimson hover:bg-warm-gold"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
