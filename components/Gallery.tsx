import Image from "next/image";
import { Camera } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=900&q=85",
    title: "Tepi Pasang Surut",
    alt: "Permukaan air pesisir di dekat area restorasi"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    title: "Kanopi Hutan",
    alt: "Kanopi hutan hijau yang lebat"
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    title: "Lanskap Desa",
    alt: "Lanskap pedesaan alami saat golden hour"
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    title: "Gerak Pesisir",
    alt: "Gelombang laut mendekati garis pantai"
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85",
    title: "Karbon Biru",
    alt: "Air pesisir jernih dan vegetasi alami"
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    title: "Pemantauan Lapangan",
    alt: "Pemandangan gunung dan hutan sebagai gambar konservasi sementara"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Galeri Mangrove"
          title="Catatan visual untuk restorasi dan edukasi."
          description="Gambar ini masih sementara untuk peluncuran awal, akan diganti dengan dokumentasi asli hasil kerja lapangan di Desa Sebauk."
        />
        <div className="mt-14 grid auto-rows-[260px] gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <Reveal
              key={image.title}
              delay={index * 0.05}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/12 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <h3 className="text-xl font-bold">{image.title}</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18 backdrop-blur">
                  <Camera aria-hidden className="h-5 w-5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
