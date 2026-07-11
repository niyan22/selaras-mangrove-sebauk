import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Program Penanaman Mangrove - KKN Berdampak 2026",
    short_name: "Mangrove Sebauk",
    description:
      "Program restorasi pesisir dan penanaman mangrove di Desa Sebauk, Bengkalis, Riau.",
    start_url: "/",
    display: "standalone",
    background_color: "#06100e",
    theme_color: "#0B3D2E",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
