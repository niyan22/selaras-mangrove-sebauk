"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  hue: "ember" | "mist";
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 16 + Math.random() * 18,
    delay: Math.random() * -30,
    drift: (Math.random() - 0.5) * 60,
    hue: Math.random() > 0.6 ? "ember" : "mist"
  }));
}

export function AmbientParticles({ count = 16 }: { count?: number }) {
  const reduceMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);
  const shouldRender = useMemo(() => !reduceMotion, [reduceMotion]);

  useEffect(() => {
    if (shouldRender) {
      setParticles(makeParticles(count));
    }
  }, [shouldRender, count]);

  if (!shouldRender || particles.length === 0) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute bottom-0 rounded-full blur-[1px] ${
            p.hue === "ember" ? "bg-ember/60" : "bg-mist/50"
          }`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `drift-up ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift-x" as string]: `${p.drift}px`
          }}
        />
      ))}
    </div>
  );
}
