import type { Metadata } from "next";
import { KknTeam } from "@/components/KknTeam";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Tim",
  description:
    "Kenalan dengan tim mahasiswa KKN Berdampak 2026 di balik Program Penanaman Mangrove Desa Sebauk."
};

export default function TimPage() {
  return (
    <>
      <PageHero
        eyebrow="Tim KKN"
        title="Tim mahasiswa yang mendukung konservasi skala masyarakat."
        description="Sepuluh mahasiswa lintas jurusan Universitas Riau yang menjalankan Program SELARAS di Desa Sebauk."
      />
      <Testimonials />
      <KknTeam variant="full" hideHeader />
    </>
  );
}
