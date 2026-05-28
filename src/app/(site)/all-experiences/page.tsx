import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Experiences | Ananda Kshethram",
  description:
    "Browse all family, school, corporate, reunion, celebration, and overnight experiences at Ananda Kshethram.",
};

const EXPERIENCE_PAGES = [
  { href: "/school-field-trips", label: "School Field Trips" },
  { href: "/corporate-retreats", label: "Corporate Retreats" },
  { href: "/family-outings", label: "Family Outings" },
  { href: "/life-skills-bootcamp", label: "Life Skills Bootcamp" },
  { href: "/kitty-parties", label: "Kitty Parties" },
  { href: "/cousins-get-togethers", label: "Cousins Get-Togethers" },
  { href: "/alumni-reunions", label: "Alumni & Reunions" },
  { href: "/birthdays-celebrations", label: "Birthdays & Celebrations" },
  { href: "/festival-experiences", label: "Festival Experiences" },
  { href: "/night-stay", label: "Night Stay" },
];

export default function AllExperiencesPage() {
  return (
    <main className="brand-section-spacing bg-warm-cream">
      <section className="brand-container">
        <h1 className="font-serif text-4xl text-brand-crimson md:text-6xl">
          All Experiences
        </h1>
        <p className="mt-4 max-w-3xl text-midnight-crimson/80">
          Explore dedicated experiences for families, schools, corporates, and
          communities — each built around emotional storytelling and nature-first
          connection.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {EXPERIENCE_PAGES.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-2xl border border-brand-crimson/20 bg-ivory p-5 font-medium text-brand-crimson transition-colors hover:bg-gold-mist/50"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
