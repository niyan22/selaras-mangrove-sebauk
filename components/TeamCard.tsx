"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type TeamCardProps = {
  children: ReactNode;
  index: number;
  className?: string;
};

export function TeamCard({ children, index, className }: TeamCardProps) {
  const reduceMotion = useReducedMotion();
  const tilt = index % 2 === 0 ? -7 : 7;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34, rotate: tilt, scale: 0.94 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
