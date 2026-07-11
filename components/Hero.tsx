"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sprout } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Program", href: "program" },
  { label: "Dampak", href: "impact" },
  { label: "Linimasa", href: "timeline" },
  { label: "Galeri", href: "gallery" },
  { label: "Peta", href: "map" },
  { label: "Tim", href: "team" }
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-texture bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(215,144,59,0.24),transparent_30%),linear-gradient(90deg,rgba(8,20,18,0.78),rgba(8,20,18,0.18))]" />
      <header className="absolute left-0 right-0 top-0 z-20">
        <nav className="section-shell flex items-center justify-between py-5">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember text-ink">
              <Sprout aria-hidden className="h-5 w-5" />
            </span>
            Mangrove Sebauk
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/84 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={`#${item.href}`} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <div id="top" className="section-shell relative z-10 flex min-h-screen items-center pb-24 pt-32">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm text-white/90 backdrop-blur-lg">
            <MapPin aria-hidden className="h-4 w-4 text-ember" />
            Desa Sebauk, Bengkalis, Riau, Indonesia
          </div>
          <h1 className="max-w-5xl font-display text-[clamp(3.1rem,9vw,8.8rem)] font-semibold leading-[0.88] tracking-normal">
            Program Penanaman Mangrove
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
            KKN Berdampak 2026 bermitra dengan masyarakat pesisir untuk memulihkan garis pantai,
            menjaga keanekaragaman hayati, dan membangun ketahanan iklim jangka panjang di Desa Sebauk.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-[#e2a860] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Lihat Program
            </a>
            <a
              href="#map"
              className="inline-flex items-center justify-center rounded-full border border-white/28 bg-white/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white/22 focus:outline-none focus:ring-2 focus:ring-ember"
            >
              Lihat Lokasi
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#program"
        aria-label="Gulir ke bagian program"
        className="absolute bottom-7 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-white/14 backdrop-blur-md"
      >
        <ArrowDown aria-hidden className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
