"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type MapDesignPlaceholderProps = {
  label: string;
  description: string;
  delay?: number;
};

export function MapDesignPlaceholder({ label, description, delay = 0 }: MapDesignPlaceholderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal delay={delay}>
      <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-canopy/25 bg-gradient-to-br from-canopy/[0.06] via-tide/[0.05] to-ember/[0.06] p-8 text-center dark:border-white/20">
        <motion.span
          className="flex h-16 w-16 items-center justify-center rounded-full bg-canopy/10 text-canopy dark:bg-white/10 dark:text-mist"
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ImageIcon aria-hidden className="h-7 w-7" />
        </motion.span>
        <div>
          <p className="font-bold text-canopy dark:text-mist">{label}</p>
          <p className="mt-1 text-sm leading-6 text-ink/56 dark:text-mist/56">{description}</p>
        </div>
      </div>
    </Reveal>
  );
}
