import CinematicHero from "@/components/CinematicHero";
import ProgramHub from "@/components/ProgramHub";
import ExperienceGrid from "@/components/ExperienceGrid";
import Testimonials from "@/components/Testimonials";
import MediaShowcase from "@/components/MediaShowcase";
import Footer from "@/components/Footer";
import FallingMangoes from "@/components/FallingMangoes";
import { BookingProvider } from "@/context/BookingContext";
import { getSiteContent } from "@/lib/cms/storage";

export default async function Version1Home() {
  const content = await getSiteContent();
  const media = {
    ...content.media,
    sectionTitle: "Real Moments. Real Smiles. Real Ananda.",
    sectionSubtitle:
      "Candid days on the farm — families, students, and teams in their element.",
    instagram: {
      ...content.media.instagram,
      headline: "@anandakshethram",
      note: "Follow along for harvest days, school trips, bonfire nights, and the quiet joy between them.",
    },
  };

  return (
    <BookingProvider>
      <FallingMangoes />
      <main className="relative overflow-x-clip">
        <CinematicHero />
        <ProgramHub />
        <ExperienceGrid />
        <Testimonials />
        <MediaShowcase media={media} variant="forest" hideVideos />
      </main>
      <Footer />
    </BookingProvider>
  );
}
