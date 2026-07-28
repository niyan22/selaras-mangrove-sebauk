"use client";

import Link from "next/link";
import { ArrowRight, Film, ZoomIn } from "lucide-react";
import Image from "next/image";
import { LightboxProvider, useLightbox } from "./LightboxProvider";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Photo = { src: string; width: number; height: number };

const photos: Photo[] = [
  { src: "/gallery/DSC00002.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC00037.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC00045.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC00086.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC09885 (1).JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC09930.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC09932.JPG", width: 1102, height: 1036 },
  { src: "/gallery/DSC09938.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC09942.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC09967.JPG", width: 1125, height: 1088 },
  { src: "/gallery/DSC09997.JPG", width: 2000, height: 1125 },
  { src: "/gallery/IMG_9025.jpg", width: 2000, height: 1500 },
  { src: "/gallery/IMG_9082.jpg", width: 1500, height: 2000 },
  { src: "/gallery/WhatsApp Image 2026-07-28 at 21.29.12.jpeg", width: 828, height: 457 },
  { src: "/gallery/WhatsApp Image 2026-07-28 at 21.29.20.jpeg", width: 960, height: 1280 }
];

const videos = [
  { src: "/video/video selaras.MOV", label: "Video Dokumentasi 1" },
  { src: "/video/IMG_1896.MOV", label: "Video Dokumentasi 2" }
];

function PhotoGrid({ items }: { items: Photo[] }) {
  const openLightbox = useLightbox();

  const lightboxPhotos = items.map((photo, i) => ({
    ...photo,
    alt: `Dokumentasi lapangan Program SELARAS, foto ${i + 1} dari ${items.length}`
  }));

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((photo, i) => (
        <Reveal key={photo.src} delay={i * 0.04}>
          <button
            type="button"
            onClick={() => openLightbox(lightboxPhotos, i)}
            aria-label={`Perbesar foto dokumentasi ${i + 1}`}
            className="group/photo relative block aspect-[16/9] w-full overflow-hidden rounded-lg border border-canopy/10 bg-canopy/10 shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-ember dark:border-white/10 dark:bg-white/5"
          >
            <Image
              src={photo.src}
              alt={lightboxPhotos[i].alt}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/photo:scale-110"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent opacity-70 transition-opacity duration-500 group-hover/photo:opacity-90"
            />
            <span className="absolute inset-0 flex scale-90 items-center justify-center opacity-0 transition-all duration-500 group-hover/photo:scale-100 group-hover/photo:opacity-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                <ZoomIn aria-hidden className="h-5 w-5 drop-shadow" />
              </span>
            </span>
          </button>
        </Reveal>
      ))}
    </div>
  );
}

type GalleryProps = {
  variant?: "full" | "teaser";
  hideHeader?: boolean;
};

export function Gallery({ variant = "full", hideHeader = false }: GalleryProps) {
  const isTeaser = variant === "teaser";
  const items = isTeaser ? photos.slice(0, 3) : photos;

  return (
    <section id="gallery" className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell">
        {hideHeader ? null : (
          <SectionHeader
            eyebrow="Galeri Mangrove"
            title="Catatan visual untuk restorasi dan edukasi."
            description="Dokumentasi kegiatan lapangan Program SELARAS di Desa Sebauk"
          />
        )}
        <div className="mt-14">
          <LightboxProvider>
            <PhotoGrid items={items} />
          </LightboxProvider>
        </div>
        {!isTeaser ? (
          <Reveal delay={0.15} className="mt-14">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canopy text-white dark:bg-ember dark:text-ink">
                <Film aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-canopy dark:text-mist">Video Dokumentasi</h3>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {videos.map((item) => (
                <video
                  key={item.src}
                  controls
                  preload="metadata"
                  aria-label={item.label}
                  className="w-full rounded-lg border border-canopy/12 shadow-glow dark:border-white/10"
                >
                  <source src={item.src} />
                  Peramban Anda tidak mendukung pemutaran video ini.{" "}
                  <a href={item.src}>Unduh videonya di sini</a>.
                </video>
              ))}
            </div>
          </Reveal>
        ) : null}
        {isTeaser ? (
          <Reveal delay={0.2} className="mt-10">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-canopy transition hover:gap-3 hover:text-ember dark:text-ember"
            >
              Lihat galeri lengkap
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
