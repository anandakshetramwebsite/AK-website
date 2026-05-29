"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  v3Compare,
  v3Experiences,
  v3Faqs,
  V3_HERO_BACKGROUND,
  v3IgImages,
  v3NavLinks,
  v3Packages,
  v3SchoolBadges,
  v3SchoolTestimonials,
  v3Stats,
  v3Tiles,
  v3TrustSchools,
  v3VideoTestimonials,
  v3Wa,
} from "@/lib/v3/content";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="white" width={size} height={size} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`v3-reveal-up ${className}`}>
      {children}
    </div>
  );
}

export default function Version3Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expModal, setExpModal] = useState<{ name: string; desc: string } | null>(
    null
  );
  const [statValues, setStatValues] = useState<string[]>(
    v3Stats.map(() => "0")
  );
  const statsTriggered = useRef(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animateCounter = useCallback(
    (
      index: number,
      target: number,
      duration: number,
      isFloat: boolean,
      prefix: string,
      suffix: string
    ) => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = isFloat
          ? (target * eased).toFixed(1)
          : String(Math.floor(target * eased));
        setStatValues((prev) => {
          const next = [...prev];
          next[index] = `${prefix}${v}${suffix}`;
          return next;
        });
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    },
    []
  );

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting || statsTriggered.current) return;
        statsTriggered.current = true;
        v3Stats.forEach((s, i) => {
          animateCounter(
            i,
            s.target,
            1500,
            !!s.float,
            s.prefix ?? "",
            s.suffix ?? ""
          );
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animateCounter]);

  useEffect(() => {
    const cards = document.querySelectorAll(
      ".v3-compare-left, .v3-compare-right"
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!expModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpModal(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [expModal]);

  const marqueeSchools = [...v3TrustSchools, ...v3TrustSchools];

  return (
    <div className="v3-root">
      <nav
        className={`v3-nav ${navScrolled ? "scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <div className="v3-nav-left">
          <div className="v3-nav-logo-badge">
            <span>AK</span>
          </div>
          <div>
            <span className="v3-nav-brand-name">Ananda Kshethram</span>
            <span className="v3-nav-brand-sub">
              Agri Tourism · 60 Min from Gachibowli
            </span>
          </div>
        </div>
        <div className="v3-nav-center">
          {v3NavLinks.map((l) => (
            <a key={l.label + l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="v3-nav-right">
          <a
            href={v3Wa("Hi, I want to book a visit")}
            target="_blank"
            rel="noopener noreferrer"
            className="v3-nav-wa-mobile"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href={v3Wa("Hi, I want to book a visit")}
            target="_blank"
            rel="noopener noreferrer"
            className="v3-nav-book"
          >
            Book a Visit
          </a>
        </div>
      </nav>

      <section className="v3-hero" aria-label="Ananda Kshethram agri tourism hero">
        <div
          className="v3-hero-bg"
          style={{ backgroundImage: `url('${V3_HERO_BACKGROUND}')` }}
          role="img"
          aria-label="Sunbeams through clouds over open sky"
        />
        <div className="v3-hero-sky-tint" aria-hidden="true" />
        <div className="v3-hero-bottom-gradient" />
        <div className="v3-hero-content">
          <div className="v3-hero-eyebrow">
            <span className="v3-gold-line" />
            <span className="v3-hero-eyebrow-text">
              Agri Tourism · 60 Minutes from Gachibowli
            </span>
            <span className="v3-gold-line" />
          </div>
          <h1 className="v3-hero-h1">
            Give Your Child a Childhood
            <br />
            <em>Worth Remembering</em>
          </h1>
          <p className="v3-hero-sub">
            Hyderabad&apos;s most soulful agri tourism experience · Telangana
          </p>
          <div className="v3-hero-ctas">
            <a
              href={v3Wa("Hi, I want to book a visit")}
              target="_blank"
              rel="noopener noreferrer"
              className="v3-btn-primary"
            >
              Book a Visit
            </a>
            <a
              href="https://wa.me/917799900060"
              target="_blank"
              rel="noopener noreferrer"
              className="v3-btn-outline"
            >
              WhatsApp Us →
            </a>
          </div>
          <div className="v3-hero-stats">
            <div className="v3-hero-stat">
              <span className="v3-hero-stat-num">4.9 ★</span>
              <span className="v3-hero-stat-label">Rating</span>
            </div>
            <div className="v3-hero-stat">
              <span className="v3-hero-stat-num">10,000+</span>
              <span className="v3-hero-stat-label">Families</span>
            </div>
            <div className="v3-hero-stat">
              <span className="v3-hero-stat-num">500+</span>
              <span className="v3-hero-stat-label">School Groups</span>
            </div>
            <div className="v3-hero-stat">
              <span className="v3-hero-stat-num">#1</span>
              <span className="v3-hero-stat-label">Agri Tourism, Hyd</span>
            </div>
          </div>
        </div>
      </section>

      <div className="v3-trust-bar">
        <div className="v3-trust-bar-label">
          Trusted by schools across Hyderabad for agri tourism field trips
        </div>
        <div className="v3-trust-bar-track">
          <div className="v3-trust-bar-schools" aria-hidden="true">
            {marqueeSchools.map((school, i) => (
              <span key={`${school}-${i}`}>{school}</span>
            ))}
          </div>
        </div>
      </div>

      <section id="tiles" className="v3-tiles">
        <Reveal className="v3-tiles-header">
          <span className="v3-eyebrow">Agri Tourism Experiences</span>
          <h2 className="v3-section-h2">Plan Your Getaway</h2>
          <p className="v3-section-sub">
            Six agri tourism experiences. One destination. Endless memories.
          </p>
        </Reveal>
        <div className="v3-tiles-grid">
          {v3Tiles.map((tile) => (
            <a
              key={tile.title}
              href={v3Wa(tile.waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="v3-tile"
            >
              <div
                className="v3-tile-bg"
                style={{ backgroundImage: `url('${tile.image}')` }}
              />
              <div className="v3-tile-gradient" />
              {tile.badge && (
                <div className="v3-tile-badge">{tile.badge}</div>
              )}
              <div className="v3-tile-content">
                <div className="v3-tile-eyebrow">{tile.eyebrow}</div>
                <h3 className="v3-tile-title">{tile.title}</h3>
                <p className="v3-tile-body">{tile.body}</p>
                <span className="v3-tile-cta">{tile.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="why" className="v3-why">
        <div className="v3-why-rings" aria-hidden="true">
          <div className="v3-why-ring" />
          <div className="v3-why-ring" />
          <div className="v3-why-ring" />
        </div>
        <div className="v3-why-content">
          <Reveal>
            <span className="v3-eyebrow">The Ananda Question</span>
          </Reveal>
          <Reveal>
            <blockquote className="v3-why-quote">
              &ldquo;When did your child last plant something and watch it grow?
              Milk a cow? Win a game that didn&apos;t have a touchscreen?&rdquo;
            </blockquote>
          </Reveal>
          <Reveal>
            <div className="v3-why-rule" />
          </Reveal>
          <Reveal>
            <p className="v3-why-body">
              Ananda Kshethram exists to answer that question. A living,
              breathing agri tourism farm where childhood is not remembered — it
              is happening, right now, in real soil, real sunlight, and real
              joy. Just 60 minutes from Gachibowli, Hyderabad.
            </p>
          </Reveal>
          <div className="v3-why-compare">
            <div className="v3-compare-left">
              <div
                className="v3-why-compare-img screen"
                style={{ backgroundImage: `url('${v3Compare.screen}')` }}
              />
              <p className="v3-why-compare-caption">
                The average Indian city child spends 6 hours a day on screens.
              </p>
            </div>
            <div className="v3-compare-right">
              <div
                className="v3-why-compare-img"
                style={{ backgroundImage: `url('${v3Compare.mud}')` }}
              />
              <p className="v3-why-compare-caption">
                One day of agri tourism here changes that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        id="stats"
        className="v3-stats"
        aria-label="Ananda Kshethram by the numbers"
      >
        <div className="v3-stats-row">
          {v3Stats.map((s, i) => (
            <div key={s.label} className="v3-stat-item">
              <span className="v3-stat-num">{statValues[i]}</span>
              <span className="v3-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="experiences" className="v3-experiences">
        <Reveal className="v3-experiences-header">
          <span className="v3-eyebrow">60+ Agri Tourism Activities</span>
          <h2 className="v3-section-h2">What Awaits You</h2>
          <p className="v3-section-sub">
            From sunrise to bonfire — every hour holds something to discover on
            our farm.
          </p>
        </Reveal>
        <div className="v3-exp-grid">
          {v3Experiences.map((exp) => (
            <button
              key={exp.name}
              type="button"
              className="v3-exp-tile"
              onClick={() => setExpModal({ name: exp.name, desc: exp.desc })}
            >
              <div className="v3-exp-tile-name">{exp.name}</div>
              <div className="v3-exp-tile-desc">{exp.short}</div>
              {exp.paidAddOn && (
                <span className="v3-exp-tile-paid">Paid Add-On</span>
              )}
            </button>
          ))}
        </div>
      </section>

      <div
        className={`v3-exp-modal-overlay ${expModal ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="v3-exp-modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) setExpModal(null);
        }}
      >
        {expModal && (
          <div className="v3-exp-modal">
            <button
              type="button"
              className="v3-exp-modal-close"
              aria-label="Close"
              onClick={() => setExpModal(null)}
            >
              ✕
            </button>
            <div className="v3-exp-modal-video">
              <span>Video coming soon</span>
            </div>
            <h3 className="v3-exp-modal-title" id="v3-exp-modal-title">
              {expModal.name}
            </h3>
            <p className="v3-exp-modal-desc">{expModal.desc}</p>
          </div>
        )}
      </div>

      <section id="school-trust" className="v3-school-trust">
        <Reveal className="v3-school-trust-header">
          <span className="v3-eyebrow">School Agri Tourism Partnerships</span>
          <h2 className="v3-section-h2">
            Trusted by 500+ Schools Across Hyderabad
          </h2>
        </Reveal>
        <Reveal className="v3-school-badges">
          {v3SchoolBadges.map((b) => (
            <span key={b} className="v3-school-badge">
              {b}
            </span>
          ))}
        </Reveal>
        <Reveal className="v3-school-testimonials">
          {v3SchoolTestimonials.map((t) => (
            <div key={t.attr} className="v3-school-testimonial">
              <p className="v3-school-testimonial-text">{t.text}</p>
              <p className="v3-school-testimonial-attr">{t.attr}</p>
            </div>
          ))}
        </Reveal>
        <Reveal>
          <div className="v3-fam-card">
            <div>
              <h3 className="v3-fam-card-title">
                Free Familiarisation Visit for Teachers
              </h3>
              <p className="v3-fam-card-sub">
                Are you a school coordinator or principal? See our agri
                tourism farm, meet our team, plan your visit — zero commitment
                before you book.
              </p>
            </div>
            <div className="v3-fam-card-cta">
              <a
                href={v3Wa("Hi, I want to request a FAM visit")}
                target="_blank"
                rel="noopener noreferrer"
                className="v3-btn-primary"
              >
                Request FAM Visit →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="packages" className="v3-packages">
        <Reveal className="v3-packages-header">
          <span className="v3-eyebrow">Transparent Agri Tourism Pricing</span>
          <h2 className="v3-section-h2">Honest Packages. No Surprises.</h2>
          <p className="v3-section-sub">
            Everything included. Everything explained. Choose your agri tourism
            experience.
          </p>
        </Reveal>

        <Reveal className="v3-packages-note">
          ★ <strong>Group Discount:</strong> Special rates apply for groups of 30
          or more. WhatsApp us for your group quote →{" "}
          <a
            href={v3Wa("Hi, I have a group of 30+ and want a discount")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--cr)", textDecoration: "underline" }}
          >
            +91-77999 00060
          </a>
        </Reveal>

        <Reveal className="v3-packages-grid">
          {v3Packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`v3-pkg-card ${pkg.featured ? "featured" : ""}`}
            >
              <span className="v3-pkg-badge">{pkg.badge}</span>
              <div className="v3-pkg-name">{pkg.name}</div>
              <div className="v3-pkg-sub">{pkg.sub}</div>
              {pkg.tiers ? (
                <div className="v3-pkg-tiers">
                  {pkg.tiers.map((tier) => (
                    <div key={tier.price} className="v3-pkg-tier">
                      <span className="v3-pkg-tier-price">{tier.price}</span>
                      <span className="v3-pkg-tier-desc">{tier.desc}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="v3-pkg-price">{pkg.price}</div>
                  <div className="v3-pkg-price-suffix">{pkg.suffix}</div>
                </>
              )}
              <div className="v3-pkg-discount-badge">{pkg.discount}</div>
              <div
                className="v3-pkg-rule"
                style={
                  pkg.featured
                    ? { background: "rgba(201,148,26,0.25)" }
                    : undefined
                }
              />
              <ul className="v3-pkg-features">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
                <li className="note">{pkg.note}</li>
              </ul>
              <a
                href={v3Wa(pkg.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  pkg.featured ? "v3-pkg-cta-filled" : "v3-pkg-cta-outline"
                }
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </Reveal>

        <p className="v3-packages-custom">
          Need something custom? We build packages around your group.{" "}
          <a
            href={v3Wa("Hi, I need a custom package")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us →
          </a>
        </p>
      </section>

      <section id="testimonials" className="v3-testimonials">
        <Reveal className="v3-testimonials-header">
          <span className="v3-eyebrow">Real Voices</span>
          <h2 className="v3-section-h2">Hear It From Them</h2>
          <p className="v3-section-sub">
            Real visitors to our agri tourism farm. Real words. Zero scripts.
          </p>
        </Reveal>
        <Reveal className="v3-testimonials-grid">
          {v3VideoTestimonials.map((t) => (
            <div key={t.name} className="v3-test-card">
              <div
                className="v3-test-thumb"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  const thumb = e.currentTarget;
                  const overlay = thumb.querySelector(".v3-test-thumb-overlay");
                  if (overlay instanceof HTMLElement)
                    overlay.style.display = "none";
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.currentTarget.click();
                  }
                }}
              >
                <div
                  className="v3-test-thumb-bg"
                  style={{ backgroundImage: `url('${t.image}')` }}
                />
                <div className="v3-test-thumb-overlay">
                  <div className="v3-test-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="v3-test-duration">{t.duration}</span>
              </div>
              <div className="v3-test-body">
                <p className="v3-test-quote">{t.quote}</p>
                <p className="v3-test-name">{t.name}</p>
                <p className="v3-test-role">{t.role}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="instagram" className="v3-instagram">
        <Reveal className="v3-ig-header">
          <span className="v3-ig-handle">
            @anandakshethram · Agri Tourism Hyderabad
          </span>
          <h2 className="v3-section-h2">
            Real Moments. Real Smiles. Real Ananda.
          </h2>
        </Reveal>
        <Reveal className="v3-ig-grid">
          {v3IgImages.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/anandakshethram/"
              target="_blank"
              rel="noopener noreferrer"
              className="v3-ig-cell"
            >
              <div
                className="v3-ig-cell-bg"
                style={{ backgroundImage: `url('${img}')` }}
              />
              <div className="v3-ig-cell-hover">
                <span>+</span>
              </div>
            </a>
          ))}
        </Reveal>
        <div className="v3-ig-follow">
          <a
            href="https://www.instagram.com/anandakshethram/"
            target="_blank"
            rel="noopener noreferrer"
            className="v3-ig-follow-btn"
          >
            Follow @anandakshethram →
          </a>
        </div>
      </section>

      <section id="wa-band" className="v3-wa-band">
        <div className="v3-wa-band-icon">
          <svg viewBox="0 0 24 24" fill="#5E0F0F" width={22} height={22}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <h2 className="v3-wa-band-h2">Join the Ananda Family</h2>
        <p className="v3-wa-band-sub">
          Never miss a camp batch, seasonal agri tourism event, or special
          programme. Join our WhatsApp Broadcast Group.
        </p>
        <a
          href={v3Wa("I want to join the Ananda Kshethram broadcast group")}
          target="_blank"
          rel="noopener noreferrer"
          className="v3-wa-band-cta"
        >
          Join Now →
        </a>
      </section>

      <section id="faq" className="v3-faq">
        <Reveal className="v3-faq-header">
          <span className="v3-eyebrow">Before Your Agri Tourism Visit</span>
          <h2 className="v3-section-h2">Common Questions</h2>
        </Reveal>
        <Reveal className="v3-faq-list">
          {v3Faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`v3-faq-item ${openFaq === i ? "open" : ""}`}
            >
              <button
                type="button"
                className="v3-faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="v3-faq-question-text">{faq.q}</span>
                <span className="v3-faq-icon">+</span>
              </button>
              <div
                className="v3-faq-answer"
                style={{
                  maxHeight: openFaq === i ? "400px" : "0",
                }}
              >
                <p className="v3-faq-answer-inner">{faq.a}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="final-cta" className="v3-final-cta">
        <div className="v3-final-rings" aria-hidden="true">
          <div className="v3-final-ring" />
          <div className="v3-final-ring" />
          <div className="v3-final-ring" />
        </div>
        <Reveal className="v3-final-content">
          <span className="v3-eyebrow" style={{ letterSpacing: "0.24em" }}>
            The Invitation
          </span>
          <h2 className="v3-final-h1">
            Your family deserves one day without screens.
            <br />
            Give them <em>Ananda.</em>
          </h2>
          <p className="v3-final-address">
            +91-77999 00060 · Agri Tourism · 60 Minutes from Gachibowli,
            Hyderabad · Telangana
          </p>
          <div className="v3-final-ctas">
            <a
              href={v3Wa("Hi, I want to book a visit")}
              target="_blank"
              rel="noopener noreferrer"
              className="v3-btn-primary"
            >
              Book a Visit
            </a>
            <a
              href={v3Wa("Hi, I want to plan a visit")}
              target="_blank"
              rel="noopener noreferrer"
              className="v3-btn-outline"
            >
              WhatsApp to Plan →
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="v3-footer">
        <div className="v3-footer-grid">
          <div>
            <div className="v3-footer-brand-badge">
              <div className="v3-footer-logo">
                <span>AK</span>
              </div>
              <span className="v3-footer-brand-name">Ananda Kshethram</span>
            </div>
            <p className="v3-footer-tagline">
              Agri Tourism · Where Soil Meets Soul
            </p>
            <div className="v3-footer-contact">
              <div>📞 +91-77999 00060</div>
              <div>📍 60 Minutes from Gachibowli, Hyderabad · Telangana</div>
              <div>🕐 Open daily 8:00 AM – 6:00 PM</div>
              <div>✉ hello@anandakshethram.com</div>
            </div>
          </div>
          <div>
            <div className="v3-footer-col-title">Explore</div>
            <ul className="v3-footer-links">
              <li>
                <a href="#tiles">All Agri Tourism Experiences</a>
              </li>
              <li>
                <a href="#school-trust">School Trips</a>
              </li>
              <li>
                <a href="#packages">Corporate Retreats</a>
              </li>
              <li>
                <a href="#tiles">Summer Camps</a>
              </li>
              <li>
                <a href="#tiles">Farm Night Stay</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="v3-footer-col-title">Discover</div>
            <ul className="v3-footer-links">
              <li>
                <a href="#">Blog &amp; Stories</a>
              </li>
              <li>
                <a href="#instagram">Gallery</a>
              </li>
              <li>
                <a href="#">Awards &amp; Press</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a
                  href="https://wa.me/917799900060"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="v3-footer-col-title">Connect</div>
            <ul className="v3-footer-links v3-footer-social-links">
              <li>
                <a
                  href="https://www.instagram.com/anandakshethram/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@AnandaKshethram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/anandakshethram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/company/ananda-kshethram-agri-farm-retreats"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="v3-footer-map-preview">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60918.40!2d78.1503!3d17.3153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf3e5c6a6fa09%3A0x1!2sChevella%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ananda Kshethram location map"
              />
            </div>
          </div>
        </div>
        <div className="v3-footer-bottom">
          <span className="v3-footer-copyright">
            © 2024 Ananda Kshethram Agri Tourism. All rights reserved.
          </span>
          <span className="v3-footer-mantra">
            Powered by nature. Rooted in tradition. Loved by Hyderabad.
          </span>
        </div>
      </footer>

      <a
        id="wa-float"
        href={v3Wa("Hi, I want to book a visit to Ananda Kshethram")}
        target="_blank"
        rel="noopener noreferrer"
        className="v3-wa-float"
        aria-label="Chat on WhatsApp"
      >
        <div className="v3-wa-pulse" />
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
