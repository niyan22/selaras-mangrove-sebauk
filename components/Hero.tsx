"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { useRef } from "react";
import { AmbientParticles } from "./AmbientParticles";

const MotionLink = motion(Link);

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[92vh] overflow-hidden text-white">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 scale-110 bg-hero-texture bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(215,144,59,0.24),transparent_30%),linear-gradient(90deg,rgba(8,20,18,0.78),rgba(8,20,18,0.18))]" />
      <AmbientParticles />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="section-shell relative z-10 flex min-h-[92vh] items-center pb-24 pt-20"
      >
        <motion.div className="max-w-4xl" variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm text-white/90 backdrop-blur-lg"
          >
            <MapPin aria-hidden className="h-4 w-4 text-ember" />
            Desa Sebauk, Bengkalis, Riau, Indonesia
          </motion.div>
          <motion.h1
            variants={item}
            className="max-w-5xl text-balance font-display text-[clamp(3.1rem,9vw,8.8rem)] font-semibold leading-[0.88] tracking-normal"
          >
            Program Penanaman Mangrove
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/86 md:text-xl">
            KKN Berdampak 2026 bermitra dengan masyarakat pesisir untuk memulihkan garis pantai,
            menjaga keanekaragaman hayati, dan membangun ketahanan iklim jangka panjang di Desa Sebauk.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MotionLink
              href="/program"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-[#e2a860] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Lihat Program
            </MotionLink>
            <MotionLink
              href="/peta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border border-white/28 bg-white/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-colors hover:bg-white/22 focus:outline-none focus:ring-2 focus:ring-ember"
            >
              Lihat Lokasi
            </MotionLink>
          </motion.div>
        </motion.div>
      </motion.div>

      <a
        href="#beranda-konten"
        aria-label="Gulir ke konten berikutnya"
        className="absolute bottom-7 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-white/14 backdrop-blur-md transition hover:bg-white/24"
      >
        <ArrowDown aria-hidden className="h-5 w-5 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
