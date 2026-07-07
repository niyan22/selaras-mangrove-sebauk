"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: 1200, suffix: "+", label: "Mangrove seedlings targeted" },
  { value: 3.5, suffix: " ha", label: "Estimated restoration zone" },
  { value: 80, suffix: "+", label: "Residents and students involved" },
  { value: 12, suffix: " mo", label: "Monitoring window" }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 });
  const rounded = useTransform(spring, (latest) =>
    Number.isInteger(value) ? Math.round(latest).toLocaleString("en-US") : latest.toFixed(1)
  );

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function AnimatedStats() {
  return (
    <section className="bg-[linear-gradient(135deg,#0B3D2E,#0E7490_58%,#D7903B)] py-24 text-white md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Animated Statistics"
          title="Measuring the restoration story."
          description="These placeholder indicators can be replaced with verified field data as the KKN team finalizes the program report."
          align="center"
          tone="dark"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
