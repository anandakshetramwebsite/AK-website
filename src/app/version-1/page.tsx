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
