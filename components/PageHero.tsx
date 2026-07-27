"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { AmbientParticles } from "./AmbientParticles";
import { AnimatedHeading } from "./AnimatedHeading";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="animate-tide absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(215,144,59,0.22),transparent_38%),radial-gradient(circle_at_82%_100%,rgba(14,116,144,0.28),transparent_45%)]" />
      <AmbientParticles count={10} />
      <motion.div
        className="section-shell relative z-10 py-20 md:py-28"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/64 transition hover:text-white"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Beranda
          </Link>
        </motion.div>
        <motion.p variants={item} className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-ember">
          {eyebrow}
        </motion.p>
        <AnimatedHeading
          as="h1"
          text={title}
          trigger="mount"
          delay={0.25}
          className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight md:mt-8 md:text-6xl"
        />
        {description ? (
          <motion.p variants={item} className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white md:mt-8">
            {description}
          </motion.p>
        ) : null}
        {children ? (
          <motion.div variants={item} className="mt-8">
            {children}
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  );
}
