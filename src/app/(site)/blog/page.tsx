import type { Metadata } from "next";
import { getSiteContent } from "@/lib/cms/storage";

export const metadata: Metadata = {
  title: "Blog | Ananda Kshethram",
  description: "Stories and guides from Ananda Kshethram.",
};

export default async function BlogPage() {
  const content = await getSiteContent();
  return (
    <main className="brand-section-spacing bg-warm-cream">
      <section className="brand-container">
        <h1 className="font-serif text-4xl text-brand-crimson md:text-6xl">
          Blog / Content Hub
        </h1>
        <div className="mt-8 space-y-4">
          {content.blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-brand-crimson/15 bg-ivory p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{post.tag}</p>
              <h2 className="mt-2 font-serif text-3xl text-brand-crimson">{post.title}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
