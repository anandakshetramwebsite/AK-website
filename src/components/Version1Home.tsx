import CinematicHero from "@/components/CinematicHero";
import ProgramHub from "@/components/ProgramHub";
import AnandaQuestion from "@/components/AnandaQuestion";
import FarmActivities from "@/components/FarmActivities";
import SchoolPartners from "@/components/SchoolPartners";
import Testimonials from "@/components/Testimonials";
import MediaShowcase from "@/components/MediaShowcase";
import JoinAnandaBand from "@/components/JoinAnandaBand";
import FaqSection from "@/components/FaqSection";
import FinalInvitation from "@/components/FinalInvitation";
import Footer from "@/components/Footer";
import FallingMangoes from "@/components/FallingMangoes";
import ShareMangoFloater from "@/components/ShareMangoFloater";
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
      headline: "@anandakshethram · Agri Tourism Hyderabad",
      note: "Follow along for harvest days, school trips, bonfire nights, and the quiet joy between them.",
    },
  };

  return (
    <BookingProvider>
      <FallingMangoes />
      <ShareMangoFloater />
      <main className="relative overflow-x-clip">
        <CinematicHero />
        <AnandaQuestion />
        <FarmActivities />
        <ProgramHub />
        <SchoolPartners />
        <Testimonials />
        <MediaShowcase media={media} variant="forest" hideVideos />
        <JoinAnandaBand />
        <FaqSection />
        <FinalInvitation />
      </main>
      <Footer />
    </BookingProvider>
  );
}
