import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ananda Kshethram — Choose Website Version",
  description:
    "Compare Version 1 and Version 2 of the Ananda Kshethram website for client review.",
};

export default function VersionChooserPage() {
  return (
    <main className="min-h-screen bg-warm-cream px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
          Ananda Kshethram
        </p>
        <h1 className="mt-3 font-serif text-4xl text-brand-crimson md:text-6xl">
          Choose a Website Version
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-midnight-crimson/80">
          Review both designs and pick the direction you prefer. Version 1 is the
          cinematic original. Version 2 follows today&apos;s client brief with
          crimson-gold branding and full content.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/version-1"
            className="rounded-2xl border border-brand-crimson/20 bg-ivory p-6 text-left transition hover:border-brand-gold hover:shadow-lg"
          >
            <p className="text-xs uppercase tracking-widest text-brand-gold">Version 1</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-crimson">Yesterday Original</h2>
            <p className="mt-2 text-sm text-midnight-crimson/70">
              Cinematic hero, program hub, experience grid, testimonials, and social
              media.
            </p>
          </Link>
          <Link
            href="/version-2"
            className="rounded-2xl border border-brand-crimson/20 bg-ivory p-6 text-left transition hover:border-brand-gold hover:shadow-lg"
          >
            <p className="text-xs uppercase tracking-widest text-brand-gold">Version 2</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-crimson">Client Brief Applied</h2>
            <p className="mt-2 text-sm text-midnight-crimson/70">
              Full homepage, 16 pages, pricing, FAQs, CMS admin, and analytics-ready
              booking flow.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
