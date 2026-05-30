import { MAPS_URL, YOUTUBE_URL, MANGO_FESTIVAL_FORM } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/lib/social";
import BuiltByCredit from "@/components/BuiltByCredit";

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-deep-crimson text-ivory">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-light italic">
              Ananda Kshethram
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75">
              Hyderabad&apos;s peaceful, pure-vegetarian nature escape — where
              families, schools, and teams reconnect with soil, cows, village
              games, and meals that taste like home.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li>
                <a
                  href="#programs"
                  className="transition-colors hover:text-brand-gold"
                >
                  Packages &amp; Pricing
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="transition-colors hover:text-brand-gold"
                >
                  Farm Experiences
                </a>
              </li>
              <li>
                <a
                  href="#school-trust"
                  className="transition-colors hover:text-brand-gold"
                >
                  School Partnerships
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-brand-gold"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={MANGO_FESTIVAL_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold"
                >
                  Mango Festival Registration
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold"
                >
                  Get Directions
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li>
                <a
                  href="tel:+917799900060"
                  className="transition-colors hover:text-brand-gold"
                >
                  +91 77999 00060
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-8 text-center">
          <p className="text-sm text-ivory/60">
            © {new Date().getFullYear()} Ananda Kshethram. All rights reserved.
          </p>
        </div>

        <div className="mt-6 pb-2 pt-2 text-center">
          <BuiltByCredit tone="dark" />
        </div>
      </div>
    </footer>
  );
}
