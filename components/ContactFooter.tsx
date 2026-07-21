import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.32 1.38V7.3s-1.88.09-3.25-1.48Z" />
    </svg>
  );
}

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#06100e] text-white">
      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">Kontak & Footer</p>
          </Reveal>
          <AnimatedHeading
            text="Terus tumbuhkan kisah garis pantai ini."
            className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/68">
              Untuk kolaborasi, sponsorship, dokumentasi lapangan, atau data program terverifikasi, hubungi
              tim KKN Berdampak 2026 Desa Sebauk.
            </p>
          </Reveal>
        </div>
        <Reveal className="glass rounded-lg p-6">
          <div className="grid gap-5">
            <a
              href="mailto:kkndesasebaukunri@gmail.com"
              className="flex items-center gap-4 text-white/80 transition hover:text-white"
            >
              <Mail aria-hidden className="h-5 w-5 text-ember" />
              kkndesasebaukunri@gmail.com
            </a>
            <p className="flex items-start gap-4 text-white/80">
              <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-ember" />
              Desa Sebauk, Kabupaten Bengkalis, Riau, Indonesia
            </p>
          </div>
        </Reveal>
      </section>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-5 py-6 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo Selaras Mangrove Sebauk" width={36} height={36} className="h-9 w-9 object-contain" />
            <span>© 2026 SELARAS - Sebauk Lestari dan Asri, KKN Berdampak.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/kkn.desasebauk2026?igsh=MWM0aTRnNW8ycmt5dw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-ember hover:text-ember"
            >
              <Instagram aria-hidden className="h-5 w-5" />
            </a>
            <a
              href="https://vt.tiktok.com/ZSXC9v2Gf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-ember hover:text-ember"
            >
              <TiktokIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:kkndesasebaukunri@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-ember hover:text-ember"
            >
              <Mail aria-hidden className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
