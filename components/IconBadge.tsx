"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function IconBadge({ children, className, delay = 0 }: IconBadgeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={className}
      initial={reduceMotion ? false : { scale: 0.4, opacity: 0, rotate: -10 }}
      whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 260, damping: 15, delay }}
    >
      {children}
    </motion.span>
  );
}
