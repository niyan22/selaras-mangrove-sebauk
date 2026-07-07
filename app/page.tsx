import { AboutProgram } from "@/components/AboutProgram";
import { AnimatedStats } from "@/components/AnimatedStats";
import { ContactFooter } from "@/components/ContactFooter";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { KknTeam } from "@/components/KknTeam";
import { MapLoader } from "@/components/MapLoader";
import { Timeline } from "@/components/Timeline";
import { WhyMangroves } from "@/components/WhyMangroves";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutProgram />
      <WhyMangroves />
      <Timeline />
      <AnimatedStats />
      <Gallery />
      <MapLoader />
      <KknTeam />
      <ContactFooter />
    </main>
  );
}
