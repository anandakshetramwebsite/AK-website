import type { Metadata } from "next";
import Link from "next/link";
import HomePage from "@/components/HomePage";
import { getSiteContent } from "@/lib/cms/storage";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
  };
}

export default async function Version2Page() {
  const content = await getSiteContent();
  return (
    <>
      <div className="border-b border-brand-crimson/15 bg-gold-mist/50 py-2 text-center text-sm text-midnight-crimson/80">
        Viewing <strong>Version 2</strong> ·{" "}
        <Link href="/" className="font-semibold text-brand-crimson underline hover:text-brand-gold">
          Compare versions
        </Link>
        {" · "}
        <Link href="/version-1" className="font-semibold text-brand-crimson underline hover:text-brand-gold">
          View Version 1
        </Link>
      </div>
      <HomePage content={content} />
    </>
  );
}
