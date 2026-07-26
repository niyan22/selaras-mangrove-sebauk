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
        description="Dokumentasi visual asli dari kegiatan lapangan Program SELARAS di Desa Sebauk — dari survei hingga penanaman mangrove. Klik foto untuk melihat versi penuh."
      />
      <Gallery variant="full" hideHeader />
    </>
  );
}
