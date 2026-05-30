import Link from "next/link";
import type { Metadata } from "next";
import BuiltByCredit from "@/components/BuiltByCredit";

export const metadata: Metadata = {
  title: "Preview — Other Website Versions | Ananda Kshethram",
  description:
    "Internal preview of alternate Ananda Kshethram website versions (not the live site).",
  robots: { index: false, follow: false },
};

/** Archived version picker — live site is /. Versions 2 & 3 kept for reference only. */
export default function PreviewVersionsPage() {
  return (
    <main className="min-h-screen bg-warm-cream px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
          Internal preview
        </p>
        <h1 className="mt-3 font-serif text-3xl text-brand-crimson sm:text-4xl md:text-5xl">
          Alternate Website Versions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-midnight-crimson/80 sm:text-base">
          The live site is{" "}
          <Link href="/" className="font-semibold text-brand-crimson underline hover:text-brand-gold">
            the homepage
          </Link>
          . Versions 2 and 3 are saved here for reference — not linked from the public site.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/version-2"
            className="rounded-2xl border border-brand-crimson/20 bg-ivory p-6 text-left transition hover:border-brand-gold hover:shadow-lg"
          >
            <p className="text-xs uppercase tracking-widest text-brand-gold">Version 2</p>
            <h2 className="mt-2 font-serif text-2xl text-brand-crimson sm:text-3xl">
              Client Brief Applied
            </h2>
            <p className="mt-2 text-sm text-midnight-crimson/70">
              Full homepage, 16 pages, pricing, FAQs, CMS admin, and analytics-ready booking flow.
            </p>
          </Link>
          <Link
            href="/version-3"
            className="rounded-2xl border border-brand-crimson/20 bg-ivory p-6 text-left transition hover:border-brand-gold hover:shadow-lg"
          >
            <p className="text-xs uppercase tracking-widest text-brand-gold">Version 3</p>
            <h2 className="mt-2 font-serif text-2xl text-brand-crimson sm:text-3xl">
              Client Homepage
            </h2>
            <p className="mt-2 text-sm text-midnight-crimson/70">
              Exact client HTML copy — hero tiles, pricing, school trust, FAQ, and Instagram.
            </p>
          </Link>
        </div>
        <p className="mt-8">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-crimson hover:text-brand-gold"
          >
            ← Back to live site
          </Link>
        </p>
      </div>
      <footer className="mx-auto mt-16 max-w-4xl border-t border-brand-crimson/15 pt-6 text-center">
        <p className="text-sm text-midnight-crimson/60">
          © {new Date().getFullYear()} Ananda Kshethram. All rights reserved.
        </p>
        <BuiltByCredit tone="cream" />
      </footer>
    </main>
  );
}
