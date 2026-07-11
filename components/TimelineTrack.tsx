"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function TimelineTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-16">
      <div className="absolute left-5 top-0 hidden h-full w-px bg-canopy/16 dark:bg-white/14 md:block" />
      <motion.div
        aria-hidden
        className="absolute left-5 top-0 hidden h-full w-px origin-top bg-ember md:block"
        style={{ scaleY: reduceMotion ? 1 : scaleY }}
      />
      <div className="grid gap-5">{children}</div>
    </div>
  );
}
