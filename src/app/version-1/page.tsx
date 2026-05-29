import Link from "next/link";
import Navbar from "@/components/Navbar";
import CinematicHero from "@/components/CinematicHero";
import ProgramHub from "@/components/ProgramHub";
import ExperienceGrid from "@/components/ExperienceGrid";
import Testimonials from "@/components/Testimonials";
import MediaShowcase from "@/components/MediaShowcase";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/context/BookingContext";
import { getSiteContent } from "@/lib/cms/storage";

export default async function Version1Page() {
  const content = await getSiteContent();

  return (
    <BookingProvider>
      <div className="border-b border-forest/10 bg-linen-dark py-2 text-center text-sm text-forest/80">
        Viewing <strong>Version 1</strong> ·{" "}
        <Link href="/" className="font-semibold text-forest underline hover:text-mango">
          Compare versions
        </Link>
        {" · "}
        <Link href="/version-2" className="font-semibold text-forest underline hover:text-mango">
          View Version 2
        </Link>
      </div>
      <Navbar />
      <main>
        <CinematicHero />
        <ProgramHub />
        <ExperienceGrid />
        <Testimonials />
        <MediaShowcase media={content.media} variant="forest" hideVideos />
      </main>
      <Footer />
    </BookingProvider>
  );
}
