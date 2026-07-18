import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#06100e] text-white">
      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">Kontak & Footer</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Terus tumbuhkan kisah garis pantai ini.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
            Untuk kolaborasi, sponsorship, dokumentasi lapangan, atau data program terverifikasi, hubungi
            tim KKN Berdampak 2026 Desa Sebauk.
          </p>
        </Reveal>
        <Reveal className="glass rounded-lg p-6">
          <div className="grid gap-5">
            <a href="mailto:kkn.sebauk@example.org" className="flex items-center gap-4 text-white/80 transition hover:text-white">
              <Mail aria-hidden className="h-5 w-5 text-ember" />
              kkn.sebauk@example.org
            </a>
            <a href="tel:+6200000000000" className="flex items-center gap-4 text-white/80 transition hover:text-white">
              <Phone aria-hidden className="h-5 w-5 text-ember" />
              +62 000 0000 0000
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
            <span>© 2026 Program Penanaman Mangrove - KKN Berdampak Sebauk.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-ember hover:text-ember"
            >
              <Instagram aria-hidden className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-ember hover:text-ember"
            >
              <Facebook aria-hidden className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
