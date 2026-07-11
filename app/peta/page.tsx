import type { Metadata } from "next";
import { MapLoader } from "@/components/MapLoader";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Peta",
  description:
    "Peta interaktif area restorasi mangrove Desa Sebauk, Bengkalis, Riau, Indonesia."
};

export default function PetaPage() {
  return (
    <>
      <PageHero
        eyebrow="Peta Interaktif"
        title="Area restorasi Desa Sebauk."
        description="Penanda ini menggunakan koordinat publik perkiraan untuk Desa Sebauk, Bengkalis. Akan diganti dengan koordinat zona penanaman yang tepat setelah pemetaan lapangan selesai."
      />
      <MapLoader hideHeader />
    </>
  );
}
