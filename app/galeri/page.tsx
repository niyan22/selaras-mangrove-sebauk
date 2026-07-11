import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri visual dokumentasi restorasi dan edukasi mangrove di Desa Sebauk, Bengkalis, Riau."
};

export default function GaleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri Mangrove"
        title="Catatan visual untuk restorasi dan edukasi."
        description="Gambar ini masih sementara untuk peluncuran awal, akan diganti dengan dokumentasi asli hasil kerja lapangan di Desa Sebauk."
      />
      <Gallery variant="full" hideHeader />
    </>
  );
}
