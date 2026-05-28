import type { Metadata } from "next";
import MediaShowcase from "@/components/MediaShowcase";
import { getSiteContent } from "@/lib/cms/storage";

export const metadata: Metadata = {
  title: "Gallery | Ananda Kshethram",
  description: "Videos, reels, and real moments from Ananda Kshethram near Hyderabad.",
};

export default async function GalleryPage() {
  const content = await getSiteContent();
  return (
    <main className="bg-ivory">
      <section className="brand-section-spacing">
        <div className="brand-container">
          <h1 className="font-serif text-4xl text-brand-crimson md:text-6xl">Gallery</h1>
          <p className="mt-4 max-w-3xl text-midnight-crimson/80">
            Watch our farm stories, follow us on social media, and see real guest moments.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.galleryAlts.map((alt) => (
              <article
                key={alt}
                className="aspect-[4/3] rounded-2xl border border-brand-crimson/15 bg-warm-cream p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Photo Slot</p>
                <p className="mt-2 text-sm text-midnight-crimson/80">{alt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <MediaShowcase media={content.media} />
    </main>
  );
}
