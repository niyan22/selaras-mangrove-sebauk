import type { Metadata } from "next";
import { AboutProgram } from "@/components/AboutProgram";
import { PageHero } from "@/components/PageHero";
import { ProgramBackground } from "@/components/ProgramBackground";

export const metadata: Metadata = {
  title: "Program",
  description:
    "SELARAS (Sebauk Lestari dan Asri): latar belakang, tujuan, dan manfaat program konservasi mangrove Tim KKN Universitas Riau di Desa Sebauk, Bengkalis."
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang SELARAS"
        title="SELARAS (Sebauk Lestari dan Asri)."
        description="Program konservasi mangrove Tim KKN Universitas Riau yang mengintegrasikan edukasi, pembibitan, dan penanaman untuk mewujudkan pesisir Desa Sebauk yang lestari dan asri."
      />
      <ProgramBackground />
      <AboutProgram variant="full" hideHeader />
    </>
  );
}
