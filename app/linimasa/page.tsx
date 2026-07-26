import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Linimasa",
  description:
    "Linimasa lengkap Program SELARAS di Desa Sebauk: survei lapangan, pelatihan PELITA 2026, pengumpulan dan pembibitan propagul, hingga monitoring bibit mangrove."
};

export default function LinimasaPage() {
  return (
    <>
      <PageHero
        eyebrow="Linimasa Interaktif"
        title="Dari survei lapangan hingga monitoring bibit."
        description="Rekam jejak kegiatan Program SELARAS di Desa Sebauk, terdokumentasi lengkap dengan tanggal, lokasi, dan foto lapangan."
      />
      <Timeline variant="full" hideHeader />
    </>
  );
}
