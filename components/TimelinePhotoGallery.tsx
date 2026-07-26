"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useLightbox } from "./LightboxProvider";

type Photo = { src: string; width: number; height: number };

export function TimelinePhotoGallery({ photos, title }: { photos: Photo[]; title: string }) {
  const openLightbox = useLightbox();

  const gridClass =
    photos.length === 1
      ? "max-w-sm grid-cols-1"
      : photos.length === 2
        ? "grid-cols-2"
        : "grid-cols-2 sm:grid-cols-3";

  const lightboxPhotos = photos.map((photo, i) => ({
    ...photo,
    alt: `Dokumentasi kegiatan ${title}, foto ${i + 1} dari ${photos.length}`
  }));

  return (
    <div className={`mt-5 grid gap-2 ${gridClass}`}>
      {photos.map((photo, i) => (
        <button
          key={photo.src}
          type="button"
          onClick={() => openLightbox(lightboxPhotos, i)}
          aria-label={`Perbesar dokumentasi ${title}, foto ${i + 1} dari ${photos.length}`}
          className="group/photo relative aspect-[4/3] overflow-hidden rounded-md bg-canopy/10 focus:outline-none focus:ring-2 focus:ring-ember dark:bg-white/5"
        >
          <Image
            src={photo.src}
            alt={lightboxPhotos[i].alt}
            fill
            className="object-cover transition duration-300 group-hover/photo:scale-105"
            sizes={
              photos.length === 1
                ? "(min-width: 768px) 384px, 100vw"
                : "(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
            }
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover/photo:bg-ink/25 group-hover/photo:opacity-100">
            <ZoomIn aria-hidden className="h-6 w-6 text-white drop-shadow" />
          </span>
        </button>
      ))}
    </div>
  );
}
