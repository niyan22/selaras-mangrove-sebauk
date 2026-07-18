"use client";

import L from "leaflet";
import { useMemo } from "react";
import { Marker } from "react-leaflet";
import { useReducedMotion } from "framer-motion";

export function PulseMarker({ position }: { position: [number, number] }) {
  const reduceMotion = useReducedMotion();

  const icon = useMemo(() => {
    const ringClass = reduceMotion ? "" : "animate-ping";
    return L.divIcon({
      className: "",
      html: `
        <span class="relative flex h-5 w-5">
          <span class="absolute inline-flex h-full w-full ${ringClass} rounded-full bg-ember opacity-70"></span>
          <span class="relative inline-flex h-5 w-5 rounded-full border-2 border-white/80 bg-ember"></span>
        </span>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  }, [reduceMotion]);

  return <Marker position={position} icon={icon} interactive={false} />;
}
