import { AboutProgram } from "@/components/AboutProgram";
import { AnimatedStats } from "@/components/AnimatedStats";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { KknTeam } from "@/components/KknTeam";
import { MapTeaser } from "@/components/MapTeaser";
import { Timeline } from "@/components/Timeline";
import { WhyMangroves } from "@/components/WhyMangroves";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="beranda-konten">
        <AboutProgram variant="teaser" />
        <WhyMangroves variant="teaser" />
        <AnimatedStats />
        <Timeline variant="teaser" />
        <Gallery variant="teaser" />
        <MapTeaser />
        <KknTeam variant="teaser" />
      </div>
    </>
  );
}
