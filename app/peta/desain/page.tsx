import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LightboxProvider } from "@/components/LightboxProvider";
import { MapDesignImage } from "@/components/MapDesignImage";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

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
        description="Peta bergaya ilustrasi ini sudah disiapkan oleh tim desain program untuk melengkapi peta interaktif — menampilkan kawasan restorasi dengan visual yang lebih naratif."
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
          <LightboxProvider>
            <Reveal className="mx-auto max-w-3xl">
              <MapDesignImage
                src="/Mangrove Garpan.jpg.jpeg"
                width={2400}
                height={1440}
                alt="Peta desain kawasan restorasi mangrove Desa Sebauk"
              />
              <p className="mt-4 text-center leading-6 text-ink/56 dark:text-mist/56">
                Peta bergaya ilustrasi ini disiapkan oleh tim untuk melengkapi peta interaktif yang akan
                menampilkan garis pantai dan kawasan mangrove.
              </p>
            </Reveal>
          </LightboxProvider>
        </div>
      </section>
    </>
  );
}
