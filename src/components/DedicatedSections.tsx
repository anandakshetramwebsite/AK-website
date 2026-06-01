"use client";

import { motion } from "framer-motion";
import { DEDICATED_SECTIONS } from "@/lib/constants";
import { DEDICATED_GALLERY_IMAGES } from "@/lib/site-images";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import SectionEnquiryBar from "@/components/SectionEnquiryBar";

export default function DedicatedSections() {
  return (
    <section id="dedicated" className="section-pad scroll-mt-20 bg-ivory">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Explore Each Experience
          </p>
          <h2 className="heading-section mt-3 text-forest">
            Tailored for Every Group
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70">
            Family day outings, corporate retreats, school field trips, farm
            night stays, and celebrations — each with dedicated packages and
            inclusions.
          </p>
        </motion.div>

        <div className="mt-12 space-y-16">
          {DEDICATED_SECTIONS.map((block, index) => (
            <motion.article
              key={block.id}
              id={block.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className={`scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">
                  {block.eyebrow}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-light italic text-forest sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-forest/75">
                  {block.description}
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-forest-green">
                      Benefits
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {block.benefits.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-forest/70 before:mr-1.5 before:text-brand-gold before:content-['✦']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-forest-green">
                      Inclusions
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {block.inclusions.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-forest/70 before:mr-1.5 before:text-brand-gold before:content-['·']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <blockquote className="mt-5 border-l-2 border-brand-gold/50 pl-4">
                  <p className="text-sm italic text-forest/80">
                    &ldquo;{block.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-1 text-xs text-forest/55">
                    — {block.testimonial.attr}
                  </footer>
                </blockquote>

                <SectionEnquiryBar
                  waText={block.waText}
                  enquireLabel={block.enquireLabel}
                  actions={["enquire"]}
                  compact
                  className="mt-4"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {block.galleryLabels.map((label, gi) => (
                  <PlaceholderImage
                    key={label}
                    label={label}
                    src={DEDICATED_GALLERY_IMAGES[block.id]?.[gi]}
                    className="aspect-[4/5] rounded-lg sm:aspect-square"
                    sizes="(max-width: 1024px) 33vw, 20vw"
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
