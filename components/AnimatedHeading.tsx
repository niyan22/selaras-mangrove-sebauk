"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement } from "react";

const word = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
  }
};

type AnimatedHeadingProps = {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  trigger?: "inView" | "mount";
  delay?: number;
};

export function AnimatedHeading({ text, as = "h2", className, trigger = "inView", delay = 0 }: AnimatedHeadingProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return createElement(as, { className }, text);
  }

  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.045, delayChildren: delay } }
  };
  const viewportProps =
    trigger === "inView"
      ? { whileInView: "visible", viewport: { once: true, margin: "-80px" } }
      : { animate: "visible" };

  return (
    <Tag className={className} variants={container} initial="hidden" aria-label={text} {...viewportProps}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          aria-hidden="true"
          className={`inline-block ${i < words.length - 1 ? "mr-[0.28em]" : ""}`}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}
