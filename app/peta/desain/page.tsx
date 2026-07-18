import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MapDesignPlaceholder } from "@/components/MapDesignPlaceholder";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Peta Desain",
  description:
    "Peta desain kawasan restorasi mangrove Desa Sebauk, disusun oleh tim desain program KKN Berdampak 2026."
};

export default function PetaDesainPage() {
  return (
    <>
      <PageHero
        eyebrow="Peta Desain"
        title="Ilustrasi kawasan hasil rancangan tim desain."
        description="Dua peta bergaya ilustrasi ini sedang disiapkan oleh tim desain program untuk melengkapi peta interaktif — menampilkan kawasan restorasi dengan visual yang lebih naratif."
      >
        <Link
          href="/peta"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ember transition hover:gap-3"
        >
          <ArrowLeft aria-hidden className="h-4 w-4" />
          Kembali ke peta interaktif
        </Link>
      </PageHero>

      <section className="bg-mist py-24 dark:bg-ink md:py-32">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2">
            <MapDesignPlaceholder
              label="Peta Desain 1"
              description="Menunggu berkas final dari tim desain. Akan menampilkan kawasan restorasi secara ilustratif."
            />
            <MapDesignPlaceholder
              label="Peta Desain 2"
              description="Menunggu berkas final dari tim desain. Akan melengkapi peta pertama dengan sudut pandang berbeda."
              delay={0.1}
            />
          </div>
        </div>
      </section>
    </>
  );
}
