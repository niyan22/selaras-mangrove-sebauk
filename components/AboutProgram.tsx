import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Handshake, Waves } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    icon: Waves,
    title: "Perlindungan Pesisir",
    body: "Menanam bibit mangrove asli di titik-titik garis pantai yang rentan untuk mengurangi tekanan abrasi."
  },
  {
    icon: BookOpen,
    title: "Edukasi Lingkungan",
    body: "Lokakarya masyarakat dan materi ramah sekolah menjelaskan ekologi mangrove dengan bahasa yang mudah dipahami."
  },
  {
    icon: Handshake,
    title: "Pelestarian Lokal",
    body: "Kelompok warga, mahasiswa, dan mitra berkoordinasi memantau pertumbuhan setelah hari penanaman seremonial."
  }
];

type AboutProgramProps = {
  variant?: "full" | "teaser";
  hideHeader?: boolean;
};

export function AboutProgram({ variant = "full", hideHeader = false }: AboutProgramProps) {
  const isTeaser = variant === "teaser";

  return (
    <section id="program" className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          {hideHeader ? null : (
            <SectionHeader
              eyebrow="Tentang Program"
              title="Proyek garis pantai hidup bersama masyarakat Sebauk."
              description="Program Penanaman Mangrove adalah inisiatif konservasi KKN Berdampak 2026 yang berfokus pada restorasi, edukasi, dan dampak nyata bagi masyarakat Bengkalis."
            />
          )}

          {isTeaser ? (
            <Reveal delay={0.1}>
              <Link
                href="/program"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-canopy transition hover:gap-3 hover:text-ember dark:text-ember"
              >
                Selengkapnya tentang program
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
              </Link>
            </Reveal>
          ) : (
            <div className="mt-10 grid gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Reveal
                    key={pillar.title}
                    delay={index * 0.08}
                    className="rounded-lg border border-canopy/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canopy text-white dark:bg-ember dark:text-ink">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-canopy dark:text-mist">{pillar.title}</h3>
                        <p className="mt-2 leading-7 text-ink/68 dark:text-mist/68">{pillar.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>

        <Reveal className="relative min-h-[420px] overflow-hidden rounded-lg shadow-glow lg:min-h-[620px]">
          <Image
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1300&q=85"
            alt="Pemandangan pesisir dengan air dan vegetasi"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <div className="glass absolute bottom-6 left-6 right-6 rounded-lg p-6 text-white">
            <p className="text-sm uppercase tracking-[0.22em] text-ember">Fokus Program</p>
            <p className="mt-3 text-2xl font-semibold">Memulihkan, mengedukasi, memantau, dan menyerahterimakan.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
