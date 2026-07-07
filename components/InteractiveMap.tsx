"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const sebaukPosition: [number, number] = [1.4308, 102.1569];

export function InteractiveMap() {
  return (
    <section id="map" className="bg-[#eef5f0] py-24 dark:bg-[#091715] md:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Interactive Map"
            title="Sebauk Village restoration area."
            description="The marker uses approximate public coordinates for Sebauk Village, Bengkalis. Replace with exact planting-zone coordinates when field mapping is complete."
          />
          <Reveal className="rounded-lg border border-canopy/10 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tide text-white">
                <Navigation aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-canopy dark:text-mist">Bengkalis coastal context</h3>
                <p className="mt-2 leading-7 text-ink/68 dark:text-mist/68">
                  The interactive map supports planning, storytelling, and future monitoring layers for
                  seedlings, access paths, and community facilities.
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
                <strong>Sebauk Village</strong>
                <br />
                Mangrove Planting Program - KKN Berdampak 2026
              </Popup>
            </CircleMarker>
          </MapContainer>
        </Reveal>
      </div>
    </section>
  );
}
