import type { Metadata } from "next";
import { KknTeam } from "@/components/KknTeam";
import { PageHero } from "@/components/PageHero";

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
        description="Profil ini masih sementara dan akan diperbarui dengan daftar resmi KKN Berdampak 2026, logo mitra, dan kredit pembimbing."
      />
      <KknTeam variant="full" hideHeader />
    </>
  );
}
