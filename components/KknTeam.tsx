import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, UserRound } from "lucide-react";
import { LightboxProvider } from "./LightboxProvider";
import { SectionHeader } from "./SectionHeader";
import { TeamCard } from "./TeamCard";
import { TeamPhotoButton } from "./TeamPhotoButton";

const members = [
  { name: "Muhammad Reza Maulana", role: "Ketua", major: "Ilmu Kelautan", image: "/reza.JPG", width: 1400, height: 2100 },
  { name: "Ratih Asri Audina", role: "Sekretaris 1", major: "PBSI", image: "/ratih.JPG", width: 1400, height: 2100 },
  {
    name: "Angie Aurellia Wijaya",
    role: "Sekretaris 2",
    major: "Teknik Kimia",
    image: "/angie.JPG",
    width: 1400,
    height: 2100
  },
  { name: "Salsabila", role: "Bendahara", major: "PBSI", image: "/salsa.JPG", width: 1400, height: 2100 },
  {
    name: "M. Adam Bahtiar",
    role: "Koordinator Lapangan",
    major: "Ilmu Kelautan",
    image: "/adam.JPG",
    width: 1400,
    height: 2100
  },
  {
    name: "Salomo Rizky Cassanova",
    role: "Humas",
    major: "Ilmu Kelautan",
    image: "/joshua.JPG",
    width: 1400,
    height: 2100
  },
  {
    name: "Chahniyan Regina Kasih Zebua",
    role: "PDD 1",
    major: "Teknik Informatika",
    image: "/chahni.JPG",
    width: 1400,
    height: 2100
  },
  {
    name: "Angelica Christina Sihombing",
    role: "PDD 2",
    major: "Administrasi Publik",
    image: "/angel.JPG",
    width: 1400,
    height: 2100
  },
  { name: "Nova Sarina", role: "Konsumsi", major: "Administrasi Publik", image: "/nova.jpeg", width: 864, height: 1296 },
  {
    name: "Ridhonius Munthe",
    role: "Perlengkapan",
    major: "Ilmu Pemerintahan",
    image: "/ridho.JPG",
    width: 1400,
    height: 2100
  }
];

const TEASER_AVATAR_LIMIT = 6;

type KknTeamProps = {
  variant?: "full" | "teaser";
  hideHeader?: boolean;
};

export function KknTeam({ variant = "full", hideHeader = false }: KknTeamProps) {
  const isTeaser = variant === "teaser";
  const teaserAvatars = members.slice(0, TEASER_AVATAR_LIMIT);
  const remainingCount = members.length - teaserAvatars.length;

  return (
    <section id="team" className="bg-ink py-24 text-white md:py-32">
      <div className="section-shell">
        {hideHeader ? null : (
          <SectionHeader
            eyebrow="Tim KKN"
            title="Tim mahasiswa yang mendukung konservasi skala masyarakat."
            description="Sepuluh mahasiswa lintas jurusan yang menjalankan Program SELARAS di Desa Sebauk."
            align="center"
            tone="dark"
          />
        )}

        {isTeaser ? (
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex -space-x-4">
              {teaserAvatars.map((member) => (
                <div
                  key={member.name}
                  className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-ink ring-2 ring-white/15"
                >
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="64px" />
                </div>
              ))}
              {remainingCount > 0 ? (
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-white/10 text-sm font-bold ring-2 ring-white/15">
                  +{remainingCount}
                </div>
              ) : null}
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
          <LightboxProvider>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {members.map((member, index) => (
                <TeamCard
                  key={member.name}
                  index={index}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]"
                >
                  <TeamPhotoButton
                    src={member.image}
                    width={member.width}
                    height={member.height}
                    alt={`${member.name}, ${member.role}`}
                  />
                  <div className="p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember text-ink">
                        <UserRound aria-hidden className="h-5 w-5" />
                      </span>
                      <a
                        href="mailto:kkndesasebaukunri@gmail.com"
                        aria-label={`Kirim email ke ${member.name}`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/75 transition hover:border-ember hover:text-ember"
                      >
                        <Mail aria-hidden className="h-5 w-5" />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/58">{member.role}</p>
                    <p className="mt-1 text-sm text-white/40">{member.major}</p>
                  </div>
                </TeamCard>
              ))}
            </div>
          </LightboxProvider>
        )}
      </div>
    </section>
  );
}
