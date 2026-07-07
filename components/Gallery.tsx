import Image from "next/image";
import { Camera } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=900&q=85",
    title: "Tidal Edge",
    alt: "Coastal water surface near a restoration area"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    title: "Forest Canopy",
    alt: "Dense green forest canopy"
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    title: "Village Landscape",
    alt: "Natural rural landscape during golden hour"
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    title: "Coastal Motion",
    alt: "Ocean waves approaching shoreline"
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85",
    title: "Blue Carbon",
    alt: "Clear coastal water and natural vegetation"
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    title: "Field Monitoring",
    alt: "Mountain and forest scenery as placeholder conservation image"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Mangrove Gallery"
          title="A visual record for restoration and education."
          description="Use these placeholder images for launch, then swap in original documentation from Sebauk Village fieldwork."
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
