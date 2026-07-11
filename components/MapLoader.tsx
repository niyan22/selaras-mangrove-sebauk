"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(
  () => import("@/components/InteractiveMap").then((mod) => mod.InteractiveMap),
  {
    ssr: false,
    loading: () => (
      <section id="map" className="bg-mist py-24 dark:bg-ink">
        <div className="section-shell">
          <div className="h-[520px] animate-pulse rounded-lg bg-canopy/15 dark:bg-white/10" />
        </div>
      </section>
    )
  }
);

export function MapLoader({ hideHeader = false }: { hideHeader?: boolean }) {
  return <InteractiveMap hideHeader={hideHeader} />;
}
