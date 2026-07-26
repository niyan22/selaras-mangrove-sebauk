"use client";

import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
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
  { src: "/gallery/DSC09932.JPG", width: 1125, height: 2000 },
  { src: "/gallery/DSC09938.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC09942.JPG", width: 2000, height: 1125 },
  { src: "/gallery/DSC09967.JPG", width: 1125, height: 2000 },
  { src: "/gallery/DSC09997.JPG", width: 2000, height: 1125 }
];

const video = { src: "/gallery/IMG_1896.MOV" };

function PhotoGrid({ items }: { items: Photo[] }) {
  const openLightbox = useLightbox();

  const lightboxPhotos = items.map((photo, i) => ({
    ...photo,
    alt: `Dokumentasi lapangan Program SELARAS, foto ${i + 1} dari ${items.length}`
  }));

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((photo, i) => (
        <Reveal key={photo.src} delay={i * 0.04} className={photo.width < photo.height ? "row-span-2" : ""}>
          <button
            type="button"
            onClick={() => openLightbox(lightboxPhotos, i)}
            aria-label={`Perbesar foto dokumentasi ${i + 1}`}
            className={`group/photo relative block w-full overflow-hidden rounded-lg bg-canopy/10 focus:outline-none focus:ring-2 focus:ring-ember dark:bg-white/5 ${
              photo.width < photo.height ? "aspect-[9/16]" : "aspect-[16/9]"
            }`}
          >
            <Image
              src={photo.src}
              alt={lightboxPhotos[i].alt}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/photo:scale-105"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover/photo:bg-ink/25 group-hover/photo:opacity-100">
              <ZoomIn aria-hidden className="h-6 w-6 text-white drop-shadow" />
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
            description="Dokumentasi visual asli dari kegiatan lapangan Program SELARAS di Desa Sebauk — dari survei hingga penanaman mangrove. Klik foto untuk melihat versi penuh."
          />
        )}
        <div className="mt-14">
          <LightboxProvider>
            <PhotoGrid items={items} />
          </LightboxProvider>
        </div>
        {!isTeaser ? (
          <Reveal delay={0.15} className="mt-14">
            <h3 className="font-display text-2xl font-bold text-canopy dark:text-mist">Video Dokumentasi</h3>
            <video
              controls
              preload="metadata"
              className="mt-5 w-full max-w-3xl rounded-lg border border-canopy/12 shadow-glow dark:border-white/10"
            >
              <source src={video.src} />
              Peramban Anda tidak mendukung pemutaran video ini.{" "}
              <a href={video.src}>Unduh videonya di sini</a>.
            </video>
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
