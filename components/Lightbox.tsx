"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export type LightboxPhoto = { src: string; width: number; height: number; alt: string };

type LightboxProps = {
  photos: LightboxPhoto[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const photo = open ? photos[index] : null;

  useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index! + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index! - 1 + photos.length) % photos.length);
    }

    window.addEventListener("keydown", handleKey);
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open, index, photos.length, onClose, onNavigate]);

  if (!open || !photo) return null;

  return (
    <div
      className="animate-lightbox-in fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ember"
      >
        <X aria-hidden className="h-5 w-5" />
      </button>

      {photos.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! - 1 + photos.length) % photos.length);
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ember sm:left-4"
          >
            <ChevronLeft aria-hidden className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! + 1) % photos.length);
            }}
            aria-label="Foto berikutnya"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ember sm:right-4"
          >
            <ChevronRight aria-hidden className="h-6 w-6" />
          </button>
        </>
      ) : null}

      <div
        key={photo.src}
        onClick={(e) => e.stopPropagation()}
        className="animate-lightbox-zoom relative flex max-h-[85vh] max-w-[92vw] items-center justify-center"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-[85vh] w-auto max-w-[92vw] rounded-lg object-contain"
          sizes="92vw"
          quality={90}
          priority
        />
      </div>

      {photos.length > 1 ? (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md">
          {index! + 1} / {photos.length}
        </div>
      ) : null}
    </div>
  );
}
