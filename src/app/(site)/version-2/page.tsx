import type { Metadata } from "next";
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
  return <HomePage content={content} />;
}
