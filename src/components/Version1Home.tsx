import CinematicHero from "@/components/CinematicHero";
import Navbar from "@/components/Navbar";
import CoreExperiences from "@/components/CoreExperiences";
import DedicatedSections from "@/components/DedicatedSections";
import ProgramHub from "@/components/ProgramHub";
import AnandaQuestion from "@/components/AnandaQuestion";
import ActivitiesSection from "@/components/ActivitiesSection";
import ExperienceGrid from "@/components/ExperienceGrid";
import BrundavanamSection from "@/components/BrundavanamSection";
import SchoolPartners from "@/components/SchoolPartners";
import Testimonials from "@/components/Testimonials";
import MediaShowcase from "@/components/MediaShowcase";
import BrandValuesStrip from "@/components/BrandValuesStrip";
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
      "Real families, real activities, real farm experiences, real goushala, real events — authentic Ananda Kshethram visuals coming soon.",
    instagram: {
      ...content.media.instagram,
      headline: "@anandakshethram · Agri Tourism Hyderabad",
      note: "Follow along for harvest days, school trips, bonfire nights, goushala mornings, and the quiet joy between them.",
    },
  };

  return (
    <BookingProvider>
      <FallingMangoes />
      <ShareMangoFloater />
      <Navbar />
      <main className="relative overflow-x-clip">
        <CinematicHero />
        <AnandaQuestion />
        <BrandValuesStrip />
        <CoreExperiences />
        <DedicatedSections />
        <ActivitiesSection />
        <ExperienceGrid />
        <BrundavanamSection />
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
