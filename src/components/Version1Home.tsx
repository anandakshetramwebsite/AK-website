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
import FarmGallery from "@/components/FarmGallery";
import BrandValuesStrip from "@/components/BrandValuesStrip";
import JoinAnandaBand from "@/components/JoinAnandaBand";
import FaqSection from "@/components/FaqSection";
import FinalInvitation from "@/components/FinalInvitation";
import Footer from "@/components/Footer";
import FallingMangoes from "@/components/FallingMangoes";
import ShareMangoFloater from "@/components/ShareMangoFloater";
import WhatsAppFloater from "@/components/WhatsAppFloater";
import { BookingProvider } from "@/context/BookingContext";
import { getSiteContent } from "@/lib/cms/storage";

export default async function Version1Home() {
  const content = await getSiteContent();
  const media = {
    ...content.media,
    sectionTitle: "Life at the Farm",
    sectionSubtitle: content.media.sectionSubtitle,
    instagram: {
      ...content.media.instagram,
      headline: "@anandakshethram",
      note: "Harvest days, school trips, goushala mornings, and celebrations at Ananda Kshethram.",
    },
  };

  return (
    <BookingProvider>
      <FallingMangoes />
      <ShareMangoFloater />
      <WhatsAppFloater />
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
        <FarmGallery />
        <MediaShowcase media={media} variant="forest" hideVideos />
        <JoinAnandaBand />
        <FaqSection />
        <FinalInvitation />
      </main>
      <Footer />
    </BookingProvider>
  );
}
