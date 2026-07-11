"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const sebaukPosition: [number, number] = [1.4308, 102.1569];

export function InteractiveMap({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="map" className="bg-[#eef5f0] py-24 dark:bg-[#091715] md:py-32">
      <div className="section-shell">
        <div className={hideHeader ? "" : "grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"}>
          {hideHeader ? null : (
            <SectionHeader
              eyebrow="Peta Interaktif"
              title="Area restorasi Desa Sebauk."
              description="Penanda ini menggunakan koordinat publik perkiraan untuk Desa Sebauk, Bengkalis. Akan diganti dengan koordinat zona penanaman yang tepat setelah pemetaan lapangan selesai."
            />
          )}
          <Reveal className="max-w-2xl rounded-lg border border-canopy/10 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tide text-white">
                <Navigation aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-canopy dark:text-mist">Konteks pesisir Bengkalis</h3>
                <p className="mt-2 leading-7 text-ink/68 dark:text-mist/68">
                  Peta interaktif ini mendukung perencanaan, penceritaan, dan lapisan pemantauan di masa
                  depan untuk bibit, jalur akses, dan fasilitas masyarakat.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-12 overflow-hidden rounded-lg border border-canopy/12 shadow-glow dark:border-white/10">
          <MapContainer center={sebaukPosition} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CircleMarker
              center={sebaukPosition}
              radius={16}
              pathOptions={{
                color: "#D7903B",
                fillColor: "#0E7490",
                fillOpacity: 0.72,
                weight: 3
              }}
            >
              <Popup>
                <strong>Desa Sebauk</strong>
                <br />
                Program Penanaman Mangrove - KKN Berdampak 2026
              </Popup>
            </CircleMarker>
          </MapContainer>
        </Reveal>
      </div>
    </section>
  );
}
