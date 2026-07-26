"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useLightbox } from "./LightboxProvider";

type TeamPhotoButtonProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export function TeamPhotoButton({ src, width, height, alt }: TeamPhotoButtonProps) {
  const openLightbox = useLightbox();

  return (
    <button
      type="button"
      onClick={() => openLightbox([{ src, width, height, alt }], 0)}
      aria-label={`Perbesar foto ${alt}`}
      className="group/photo relative block aspect-[4/5] w-full overflow-hidden focus:outline-none"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale transition duration-700 group-hover/photo:scale-105 group-hover/photo:grayscale-0"
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover/photo:bg-ink/25 group-hover/photo:opacity-100">
        <ZoomIn aria-hidden className="h-6 w-6 text-white drop-shadow" />
      </span>
    </button>
  );
}
