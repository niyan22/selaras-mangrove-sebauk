"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { ArrowRight, Navigation } from "lucide-react";
import { PulseMarker } from "./PulseMarker";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const sebaukPosition: [number, number] = [1.5346833, 102.060403];
const googleMapsUrl = "https://maps.app.goo.gl/FwSNVmxrUfkMkSUB6";

export function InteractiveMap({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="map" className="bg-[#eef5f0] py-24 dark:bg-[#091715] md:py-32">
      <div className="section-shell">
        <div className={hideHeader ? "" : "grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"}>
          {hideHeader ? null : (
            <SectionHeader
              eyebrow="Peta Interaktif"
              title="Area restorasi Desa Sebauk."
              description="Peta ini diarahkan langsung ke lokasi Desa Sebauk, Bengkalis dalam tampilan satelit. Klik penanda atau tautan Google Maps untuk membuka rute langsung."
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
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-tide transition hover:gap-3 dark:text-ember"
                >
                  Buka di Google Maps
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-12 overflow-hidden rounded-lg border border-canopy/12 shadow-glow dark:border-white/10">
          <MapContainer center={sebaukPosition} zoom={14} scrollWheelZoom={false}>
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}" />
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
                <br />
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Buka di Google Maps
                </a>
              </Popup>
            </CircleMarker>
            <PulseMarker position={sebaukPosition} />
          </MapContainer>
        </Reveal>
      </div>
    </section>
  );
}
