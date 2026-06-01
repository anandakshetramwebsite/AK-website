import type { Metadata } from "next";
import FarmGallery from "@/components/FarmGallery";
import MediaShowcase from "@/components/MediaShowcase";
import { getSiteContent } from "@/lib/cms/storage";

export const metadata: Metadata = {
  title: "Gallery | Ananda Kshethram",
  description:
    "Photos and videos from Ananda Kshethram — farm outings, school trips, goushala mornings, and celebrations near Hyderabad.",
};

export default async function GalleryPage() {
  const content = await getSiteContent();
  return (
    <main className="bg-ivory">
      <FarmGallery />
      <MediaShowcase media={content.media} variant="forest" hideVideos />
    </main>
  );
}
