import Image from "next/image";
import { MAPS_URL, YOUTUBE_URL, MANGO_FESTIVAL_FORM } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/lib/social";

const AI_DEVELOPER_URL = "https://aideveloperindia.store";

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-linen">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold">
              Ananda Kshethram 🌿
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-linen/70">
              Hyderabad&apos;s only 100% pure vegetarian farm retreat. Farm
              retreats, village games, corporate events, photoshoots &amp; more
              — with Desi Gir Cows 🐄
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-mango">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-linen/70">
              <li>
                <a
                  href="#programs"
                  className="transition-colors hover:text-mango"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href={MANGO_FESTIVAL_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mango"
                >
                  Mango Festival Registration
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mango"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mango"
                >
                  Get Directions
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-mango">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-mango">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-mango">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-mango">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-linen/70">
              <li>
                <a
                  href="https://wa.me/917799900060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mango"
                >
                  WhatsApp: +91 7799900060
                </a>
              </li>
              <li>
                <a
                  href="tel:+917799900060"
                  className="transition-colors hover:text-mango"
                >
                  Call: +91 7799900060
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-linen/10 pt-8 text-center text-xs text-linen/50">
          © {new Date().getFullYear()} Ananda Kshethram. All rights reserved.
        </div>
      </div>

      {/* Built by credit — bottom of landing page */}
      <div className="border-t border-linen/10 bg-linen py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:gap-4">
          <span className="text-sm font-medium text-forest/70">Built by</span>
          <a
            href={AI_DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="AI Developer India — visit aideveloperindia.store"
          >
            <Image
              src="/ai-developer-logo.png"
              alt="AI Developer Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-semibold text-forest group-hover:text-mango transition-colors">
              AI Developer India
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
