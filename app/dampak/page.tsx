import type { Metadata } from "next";
import { AnimatedStats } from "@/components/AnimatedStats";
import { PageHero } from "@/components/PageHero";
import { WhyMangroves } from "@/components/WhyMangroves";

export const metadata: Metadata = {
  title: "Dampak",
  description:
    "Mengapa mangrove penting bagi Desa Sebauk: pemecah gelombang alami, penyimpan karbon biru, rumah keanekaragaman hayati, dan target dampak program."
};

export default function DampakPage() {
  return (
    <>
      <PageHero
        eyebrow="Mengapa Mangrove Penting"
        title="Bibit kecil bisa menjadi infrastruktur pesisir yang krusial."
        description="Hutan mangrove berada di titik pertemuan darat dan laut, tempat kesehatan ekologi, penghidupan masyarakat, dan ketahanan iklim saling terhubung erat."
      />
      <WhyMangroves variant="full" hideHeader />
      <AnimatedStats />
    </>
  );
}
