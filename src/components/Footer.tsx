import Image from "next/image";
import { BRAND_LOGO, MAPS_URL, MANGO_FESTIVAL_FORM } from "@/lib/constants";
import BuiltByCredit from "@/components/BuiltByCredit";
import FooterSocialIcons from "@/components/FooterSocialIcons";

const EXPLORE_LINKS = [
  { href: "#experiences", label: "Experiences" },
  { href: "#activities", label: "Activities" },
  { href: "#goushala", label: "Goushala" },
  { href: "#divine-events", label: "Divine Events" },
  { href: "#dedicated", label: "Family & Night Stay" },
  { href: "#programs", label: "Packages" },
  { href: "#school-trust", label: "School Trips" },
  { href: "#book", label: "Book" },
  { href: "#faq", label: "FAQ" },
  { href: MANGO_FESTIVAL_FORM, label: "Mango Festival", external: true },
  { href: MAPS_URL, label: "Directions", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-deep-crimson text-ivory">
      <div className="container-page py-8 sm:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Image
                src={BRAND_LOGO}
                alt="Ananda Kshethram"
                width={44}
                height={44}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <h3 className="font-serif text-xl font-light italic">
                Ananda Kshethram
              </h3>
            </div>
            <p className="mt-2 max-w-sm text-sm leading-snug text-ivory/75">
              Hyderabad&apos;s first agri tourism hub and only pure veg farm
              retreat — families, schools, corporates, and communities.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Explore
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ivory/70">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </h4>
            <a
              href="tel:+917799900060"
              className="mt-3 inline-block text-sm font-medium text-ivory transition-colors hover:text-brand-gold"
            >
              +91 77999 00060
            </a>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Follow Us
            </p>
            <FooterSocialIcons className="mt-2" />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ivory/55">
            © {new Date().getFullYear()} Ananda Kshethram. All rights reserved.
          </p>
          <BuiltByCredit tone="dark" />
        </div>
      </div>
    </footer>
  );
}
