import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { TimelineTrack } from "./TimelineTrack";

type Milestone = {
  phase: string;
  day: string;
  date: string;
  title: string;
  location?: string;
  photos: string[];
};

const milestones: Milestone[] = [
  {
    phase: "01",
    day: "Selasa",
    date: "23 Juni 2026",
    title: "Survei Kondisi Lapangan",
    location: "Wisata Mangrove Sebauk",
    photos: [
      "/Linimasa/linimasa-23-juni-4.jpeg",
      "/Linimasa/linimasa-23-juni-1.jpeg",
      "/Linimasa/linimasa-23-juni-2.jpeg",
      "/Linimasa/linimasa-23-juni-3.jpeg"
    ]
  },
  {
    phase: "02",
    day: "Selasa",
    date: "30 Juni 2026",
    title: "Pelatihan Pembibitan dan Edukasi Mangrove Berkelanjutan (PELITA) 2026",
    location: "Wisata Taman Mangrove Kelapapati, Paghet Seghagah",
    photos: ["/Linimasa/linimasa-30-juni-2.jpeg", "/Linimasa/linimasa-30-juni-1.jpeg"]
  },
  {
    phase: "03",
    day: "Sabtu",
    date: "04 Juli 2026",
    title: "Pengumpulan Propagul Bersama Ketua Kelompok Mangrove KEMPAS",
    location: "Wisata Mangrove Sebauk",
    photos: ["/Linimasa/linimasa-04-juli-1.jpeg"]
  },
  {
    phase: "04",
    day: "Senin",
    date: "06 Juli 2026",
    title: "Pembibitan Propagul Mangrove Bersama Ketua KEMPAS Day-1",
    location: "Wisata Mangrove Sebauk",
    photos: [
      "/Linimasa/linimasa-06-juli-3.jpeg",
      "/Linimasa/linimasa-06-juli-1.jpeg",
      "/Linimasa/linimasa-06-juli-2.jpeg"
    ]
  },
  {
    phase: "05",
    day: "Rabu",
    date: "08 Juli 2026",
    title: "Pembibitan Propagul Mangrove Bersama Ketua KEMPAS Day-2",
    location: "Wisata Mangrove Sebauk",
    photos: ["/Linimasa/linimasa-08-juli-1.jpeg"]
  },
  {
    phase: "06",
    day: "Kamis",
    date: "09 Juli 2026",
    title: "Pembibitan Propagul Mangrove Bersama Ketua KEMPAS Day-3",
    location: "Wisata Mangrove Sebauk",
    photos: [
      "/Linimasa/linimasa-09-juli-4.jpeg",
      "/Linimasa/linimasa-09-juli-1.jpeg",
      "/Linimasa/linimasa-09-juli-2.jpeg",
      "/Linimasa/linimasa-09-juli-3.jpeg"
    ]
  },
  {
    phase: "07",
    day: "Kamis",
    date: "23 Juli 2026",
    title: "Monitoring dan Evaluasi Bibit Mangrove Selama 3 Minggu",
    photos: ["/Linimasa/linimasa-23-juli-1.jpeg"]
  }
];

type TimelineProps = {
  variant?: "full" | "teaser";
  hideHeader?: boolean;
};

function PhotoFrame({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-canopy/10 dark:bg-white/5">
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
    </div>
  );
}

export function Timeline({ variant = "full", hideHeader = false }: TimelineProps) {
  const isTeaser = variant === "teaser";
  const items = isTeaser ? [milestones[0], milestones[milestones.length - 1]] : milestones;

  return (
    <section id="timeline" className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell">
        {hideHeader ? null : (
          <SectionHeader
            eyebrow="Linimasa Interaktif"
            title="Dari survei lapangan hingga monitoring bibit."
            description="Rekam jejak kegiatan Program SELARAS di Desa Sebauk, terdokumentasi lengkap dengan tanggal, lokasi, dan foto lapangan."
          />
        )}
        <TimelineTrack>
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
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-tide dark:text-ember">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays aria-hidden className="h-4 w-4" />
                    {item.day}, {item.date}
                  </span>
                  {item.location ? (
                    <span className="inline-flex items-center gap-2 text-ink/56 dark:text-mist/56">
                      <MapPin aria-hidden className="h-4 w-4" />
                      {item.location}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-xl font-bold leading-snug text-canopy dark:text-mist md:text-2xl">
                  {item.title}
                </h3>

                <div
                  className={`mt-5 grid gap-2 ${
                    item.photos.length === 1
                      ? "max-w-sm grid-cols-1"
                      : item.photos.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {item.photos.map((src, photoIndex) => (
                    <PhotoFrame
                      key={src}
                      src={src}
                      alt={`Dokumentasi kegiatan ${item.title}, foto ${photoIndex + 1} dari ${item.photos.length}`}
                      sizes={
                        item.photos.length === 1
                          ? "(min-width: 768px) 384px, 100vw"
                          : "(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
                      }
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </TimelineTrack>
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
