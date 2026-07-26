"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useLightbox } from "./LightboxProvider";

type MapDesignImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export function MapDesignImage({ src, width, height, alt }: MapDesignImageProps) {
  const openLightbox = useLightbox();

  return (
    <button
      type="button"
      onClick={() => openLightbox([{ src, width, height, alt }], 0)}
      aria-label={`Perbesar ${alt}`}
      className="group/photo relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-canopy/12 shadow-glow focus:outline-none dark:border-white/10"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 group-hover/photo:scale-105"
        sizes="(min-width: 768px) 60vw, 100vw"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover/photo:bg-ink/20 group-hover/photo:opacity-100">
        <ZoomIn aria-hidden className="h-8 w-8 text-white drop-shadow" />
      </span>
    </button>
  );
}
