import type { Metadata } from "next";
import { AboutProgram } from "@/components/AboutProgram";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Program",
  description:
    "Detail Program Penanaman Mangrove KKN Berdampak 2026: restorasi garis pantai, edukasi lingkungan, dan pelestarian bersama masyarakat Desa Sebauk."
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Program"
        title="Proyek garis pantai hidup bersama masyarakat Sebauk."
        description="Program Penanaman Mangrove adalah inisiatif konservasi KKN Berdampak 2026 yang berfokus pada restorasi, edukasi, dan dampak nyata bagi masyarakat Bengkalis."
      />
      <AboutProgram variant="full" hideHeader />
    </>
  );
}
