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
      <PageHero eyebrow="Galeri Mangrove" title="Catatan visual untuk restorasi dan edukasi." />
      <Gallery variant="full" hideHeader />
    </>
  );
}
