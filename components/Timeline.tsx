import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const milestones = [
  {
    phase: "01",
    title: "Observasi Lokasi",
    date: "Februari 2026",
    body: "Pemetaan awal kondisi garis pantai, titik akses, prioritas masyarakat, dan peluang lokasi penanaman."
  },
  {
    phase: "02",
    title: "Koordinasi Masyarakat",
    date: "Maret 2026",
    body: "Tokoh desa, kelompok pemuda, dan pendamping KKN menyelaraskan rencana penanaman serta kegiatan edukasi."
  },
  {
    phase: "03",
    title: "Persiapan Bibit",
    date: "April 2026",
    body: "Bibit mangrove dipilih, disiapkan, dan dicatat dengan sistem pemantauan kelangsungan hidup yang sederhana."
  },
  {
    phase: "04",
    title: "Hari Penanaman",
    date: "Mei 2026",
    body: "Mahasiswa dan warga menanam bibit di zona-zona yang telah dikoordinasikan di sepanjang tepi pesisir Sebauk."
  },
  {
    phase: "05",
    title: "Serah Terima Pemantauan",
    date: "Juni 2026",
    body: "Tim mendokumentasikan pemeriksaan kelangsungan hidup bibit dan membagikan panduan pelestarian pascaprogram."
  }
];

type TimelineProps = {
  variant?: "full" | "teaser";
  hideHeader?: boolean;
};

export function Timeline({ variant = "full", hideHeader = false }: TimelineProps) {
  const isTeaser = variant === "teaser";
  const items = isTeaser ? [milestones[0], milestones[milestones.length - 1]] : milestones;

  return (
    <section id="timeline" className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell">
        {hideHeader ? null : (
          <SectionHeader
            eyebrow="Linimasa Interaktif"
            title="Dari observasi hingga perawatan jangka panjang."
            description="Urutan program yang jelas membantu mengubah satu acara penanaman menjadi alur kerja konservasi yang terdokumentasi."
          />
        )}
        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-canopy/16 dark:bg-white/14 md:block" />
          <div className="grid gap-5">
            {items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                className="group grid gap-5 rounded-lg border border-canopy/10 bg-white/76 p-5 shadow-sm transition hover:border-ember/50 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.06] md:grid-cols-[84px_1fr]"
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canopy text-sm font-black text-white transition group-hover:bg-ember group-hover:text-ink">
                    {item.phase}
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-tide dark:text-ember">
                      <CalendarDays aria-hidden className="h-4 w-4" />
                      {item.date}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-canopy dark:text-mist">{item.title}</h3>
                  </div>
                  <p className="leading-7 text-ink/68 dark:text-mist/68">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        {isTeaser ? (
          <Reveal delay={0.2} className="mt-10">
            <Link
              href="/linimasa"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-canopy transition hover:gap-3 hover:text-ember dark:text-ember"
            >
              Lihat linimasa lengkap
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
