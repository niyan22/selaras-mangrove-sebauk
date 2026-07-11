import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Linimasa",
  description:
    "Linimasa lengkap Program Penanaman Mangrove KKN Berdampak 2026 di Desa Sebauk, dari observasi lokasi hingga serah terima pemantauan."
};

export default function LinimasaPage() {
  return (
    <>
      <PageHero
        eyebrow="Linimasa Interaktif"
        title="Dari observasi hingga perawatan jangka panjang."
        description="Urutan program yang jelas membantu mengubah satu acara penanaman menjadi alur kerja konservasi yang terdokumentasi."
      />
      <Timeline variant="full" hideHeader />
    </>
  );
}
