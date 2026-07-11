import Link from "next/link";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function MapTeaser() {
  return (
    <section className="bg-[#eef5f0] py-24 dark:bg-[#091715] md:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Peta Interaktif"
            title="Area restorasi Desa Sebauk."
            description="Lihat lokasi zona restorasi di peta interaktif, lengkap dengan konteks pesisir Bengkalis dan rencana pemantauan mendatang."
          />
          <Reveal className="animate-tide relative overflow-hidden rounded-lg border border-canopy/12 bg-gradient-to-br from-canopy via-tide to-ember p-10 text-white shadow-glow dark:border-white/10">
            <MapPin aria-hidden className="h-10 w-10 text-white/85" />
            <p className="mt-6 text-2xl font-semibold">Desa Sebauk, Bengkalis, Riau</p>
            <p className="mt-3 max-w-md leading-7 text-white/78">
              Koordinat perkiraan area restorasi mangrove — jelajahi peta lengkap dan konteks pesisirnya.
            </p>
            <Link
              href="/peta"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/14 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur-md transition hover:gap-3 hover:bg-white/22"
            >
              <Navigation aria-hidden className="h-4 w-4" />
              Buka peta interaktif
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
