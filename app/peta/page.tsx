import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenTool } from "lucide-react";
import { MapLoader } from "@/components/MapLoader";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

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
        description="Peta ini diarahkan langsung ke lokasi Desa Sebauk, Bengkalis dalam tampilan satelit. Klik penanda atau tautan Google Maps untuk membuka rute langsung."
      />
      <MapLoader hideHeader />

      <section className="bg-mist py-16 dark:bg-ink md:py-20">
        <div className="section-shell">
          <Reveal className="animate-tide flex flex-col items-start gap-5 rounded-lg border border-canopy/12 bg-gradient-to-br from-canopy via-tide to-ember p-8 text-white shadow-glow dark:border-white/10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/14 backdrop-blur-md">
                <PenTool aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-bold">Ada juga peta bergaya ilustrasi.</p>
                <p className="mt-1 max-w-md text-sm leading-6 text-white/78">
                  Peta hasil rancangan tim desain sudah bisa dilihat untuk melengkapi tampilan ini.
                </p>
              </div>
            </div>
            <Link
              href="/peta/desain"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/14 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur-md transition hover:gap-3 hover:bg-white/22"
            >
              Lihat peta desain
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
