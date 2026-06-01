"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DIVINE_EVENTS,
  GOUSHALA_HIGHLIGHTS,
} from "@/lib/constants";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import SectionEnquiryBar from "@/components/SectionEnquiryBar";
import { whatsappUrl } from "@/lib/site-copy";
import { BRUNDAVANAM_IMAGES } from "@/lib/site-images";

const GOUSHALA_GALLERY = ["Real Goushala", "Desi Gir Cows", "Go Seva"];
const DIVINE_GALLERY = ["Real Events", "Spiritual Gatherings", "Divine Venue"];

export default function BrundavanamSection() {
  return (
    <section id="brundavanam" className="section-pad scroll-mt-20 bg-forest-green text-ivory">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Ananda Brundavanam
          </p>
          <h2 className="heading-section mt-3 text-ivory">
            Goushala &amp; Divine Events Venue
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ivory/80">
            The spiritual, cultural, and traditional dimension of Ananda
            Kshethram — desi Gir cows, Go Seva, rural heritage, and sacred
            celebrations in nature.
          </p>
        </motion.div>

        <div className="mt-10 space-y-10">
          {/* Goushala */}
          <motion.article
            id="goushala"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-24 overflow-hidden rounded-xl border border-brand-gold/20 bg-midnight-crimson/35"
          >
            <div className="grid lg:grid-cols-2">
              <PlaceholderImage
                label="Ananda Brundavanam Goushala"
                src={BRUNDAVANAM_IMAGES.goushalaHero}
                className="aspect-[16/10] w-full lg:aspect-auto lg:min-h-[280px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="p-5 sm:p-7">
                <h3 className="font-serif text-xl italic text-warm-gold sm:text-2xl">
                  Goushala
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">
                  Experience morning Gou Puja, Go Seva, and the quiet bond
                  between desi Gir cows, land, and family — rooted in traditional
                  Indian values.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {GOUSHALA_HIGHLIGHTS.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[11px] font-semibold text-warm-gold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                      Experience
                    </h4>
                    <ul className="mt-1.5 space-y-1 text-xs text-ivory/70">
                      <li>· Guided goushala tours</li>
                      <li>· Morning Gou Puja rituals</li>
                      <li>· Feeding & bonding with Gir cows</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                      Included in visits
                    </h4>
                    <ul className="mt-1.5 space-y-1 text-xs text-ivory/70">
                      <li>· Goushala experience on day outings</li>
                      <li>· Dawn goushala on night stays</li>
                      <li>· Go Seva opportunities</li>
                    </ul>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-brand-gold/40 pl-3 text-sm italic text-ivory/70">
                  &ldquo;Morning at the goushala — where spirituality and village
                  life meet.&rdquo;
                </blockquote>
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {GOUSHALA_GALLERY.map((label, gi) => (
                    <PlaceholderImage
                      key={label}
                      label={label}
                      src={BRUNDAVANAM_IMAGES.goushalaGallery[gi]}
                      className="aspect-square rounded-md"
                      sizes="120px"
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="#goushala"
                    className="rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-crimson"
                  >
                    Explore Goushala
                  </Link>
                  <a
                    href={whatsappUrl(
                      "Hi, I want to know about the Goushala experience at Ananda Brundavanam"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-ivory/35 px-4 py-2 text-xs font-semibold text-ivory"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Divine Events */}
          <motion.article
            id="divine-events"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-24 overflow-hidden rounded-xl border border-brand-gold/20 bg-midnight-crimson/35"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-5 sm:p-7 lg:order-2">
                <h3 className="font-serif text-xl italic text-warm-gold sm:text-2xl">
                  Divine Events Venue
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">
                  A serene, spiritually rooted venue surrounded by nature —
                  for weddings, homams, upanayanams, and sacred gatherings.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {DIVINE_EVENTS.map((event) => (
                    <li
                      key={event}
                      className="rounded-full border border-ivory/15 bg-ivory/5 px-3 py-1 text-[11px] text-ivory/90"
                    >
                      {event}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                      Benefits
                    </h4>
                    <ul className="mt-1.5 space-y-1 text-xs text-ivory/70">
                      <li>· Nature-rooted spiritual setting</li>
                      <li>· Traditional & cultural ambience</li>
                      <li>· Pure vegetarian catering available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                      Event types
                    </h4>
                    <ul className="mt-1.5 space-y-1 text-xs text-ivory/70">
                      <li>· Weddings & receptions</li>
                      <li>· Homams & upanayanams</li>
                      <li>· Shasti poorthi & pujas</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {DIVINE_GALLERY.map((label, gi) => (
                    <PlaceholderImage
                      key={label}
                      label={label}
                      src={BRUNDAVANAM_IMAGES.divineGallery[gi]}
                      className="aspect-square rounded-md"
                      sizes="120px"
                    />
                  ))}
                </div>
                <SectionEnquiryBar
                  actions={["siteVisit", "call"]}
                  waText="Hi, I want to enquire about booking a divine event at Ananda Brundavanam"
                  variant="dark"
                  compact
                />
              </div>
              <PlaceholderImage
                label="Divine Events Venue"
                src={BRUNDAVANAM_IMAGES.divineHero}
                className="aspect-[16/10] w-full lg:order-1 lg:aspect-auto lg:min-h-[280px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
