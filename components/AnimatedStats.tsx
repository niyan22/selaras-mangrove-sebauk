"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: 1000, suffix: "+", label: "Target bibit mangrove" },
  { value: 1200, suffix: " m²", label: "Perkiraan zona restorasi" },
  { value: 60, suffix: "+", label: "Warga dan mahasiswa terlibat" }
];

function formatValue(value: number) {
  return Number.isInteger(value) ? Math.round(value).toLocaleString("id-ID") : value.toFixed(1);
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 });
  const rounded = useTransform(spring, (latest) => formatValue(latest));

  useEffect(() => {
    if (inView && !reduceMotion) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value, reduceMotion]);

  if (reduceMotion) {
    return (
      <span ref={ref}>
        {formatValue(value)}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function AnimatedStats() {
  return (
    <section className="animate-tide bg-[linear-gradient(135deg,#0B3D2E,#0E7490_58%,#D7903B)] py-24 text-white md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Statistik Animasi"
          title="Mengukur kisah restorasi."
          description="Indikator ini masih sementara dan akan diganti dengan data lapangan terverifikasi setelah tim KKN menuntaskan laporan program."
          align="center"
          tone="dark"
        />
        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="glass rounded-lg p-6">
              <p className="font-display text-5xl font-semibold md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-5 min-h-14 text-sm font-semibold uppercase tracking-[0.18em] text-white/76">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
