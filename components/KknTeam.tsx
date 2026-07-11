import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, UserRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const members = [
  {
    name: "Alya Prameswari",
    role: "Koordinator Program",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85"
  },
  {
    name: "Raka Wiratama",
    role: "Ketua Pemetaan Lapangan",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85"
  },
  {
    name: "Nadira Salsabila",
    role: "Edukasi & Sosialisasi",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85"
  },
  {
    name: "Fajar Mahendra",
    role: "Ketua Dokumentasi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85"
  }
];

type KknTeamProps = {
  variant?: "full" | "teaser";
  hideHeader?: boolean;
};

export function KknTeam({ variant = "full", hideHeader = false }: KknTeamProps) {
  const isTeaser = variant === "teaser";

  return (
    <section id="team" className="bg-ink py-24 text-white md:py-32">
      <div className="section-shell">
        {hideHeader ? null : (
          <SectionHeader
            eyebrow="Tim KKN"
            title="Tim mahasiswa yang mendukung konservasi skala masyarakat."
            description="Profil ini masih sementara dan akan diperbarui dengan daftar resmi KKN Berdampak 2026, logo mitra, dan kredit pembimbing."
            align="center"
            tone="dark"
          />
        )}

        {isTeaser ? (
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex -space-x-4">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-ink ring-2 ring-white/15"
                >
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="64px" />
                </div>
              ))}
            </div>
            <p className="text-white/70">
              {members.length} mahasiswa lintas divisi menjalankan program ini di lapangan.
            </p>
            <Link
              href="/tim"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ember transition hover:gap-3"
            >
              Kenalan dengan tim
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, index) => (
              <Reveal
                key={member.name}
                delay={index * 0.08}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember text-ink">
                      <UserRound aria-hidden className="h-5 w-5" />
                    </span>
                    <a
                      href="mailto:kkn.sebauk@example.org"
                      aria-label={`Kirim email ke ${member.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/75 transition hover:border-ember hover:text-ember"
                    >
                      <Mail aria-hidden className="h-5 w-5" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/58">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
