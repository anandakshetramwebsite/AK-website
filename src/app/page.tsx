import Navbar from "@/components/Navbar";
import CinematicHero from "@/components/CinematicHero";
import ProgramHub from "@/components/ProgramHub";
import ExperienceGrid from "@/components/ExperienceGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <CinematicHero />
        <ProgramHub />
        <ExperienceGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
