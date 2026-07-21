import { HeartHandshake, Target } from "lucide-react";
import { IconBadge } from "./IconBadge";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  {
    icon: Target,
    title: "Tujuan Program SELARAS",
    body: "Meningkatkan kesadaran dan partisipasi masyarakat dalam pelestarian ekosistem mangrove melalui edukasi, pembibitan, penanaman, serta kolaborasi berbagai pihak guna mewujudkan pengelolaan pesisir yang berkelanjutan."
  },
  {
    icon: HeartHandshake,
    title: "Manfaat Program SELARAS",
    body: "Mendukung kelestarian ekosistem mangrove, meningkatkan kepedulian masyarakat terhadap lingkungan pesisir, memperkuat kolaborasi antar pemangku kepentingan, serta memberikan manfaat ekologis, sosial, dan edukatif bagi keberlanjutan Desa Sebauk."
  }
];

export function ProgramBackground() {
  return (
    <section className="bg-white py-24 dark:bg-[#0a1917] md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Latar Belakang"
          title="Mengapa SELARAS hadir di Desa Sebauk."
          description="Lahir dari kepedulian terhadap ekosistem pesisir Desa Sebauk yang menghadapi ancaman abrasi, dan pentingnya menjaga hutan mangrove sebagai benteng alami pantai."
        />
        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <p className="text-lg leading-8 text-ink/72 dark:text-mist/72">
            Program SELARAS (Sebauk Lestari dan Asri) lahir dari kepedulian Tim KKN Universitas
            Riau terhadap kondisi ekosistem pesisir Desa Sebauk yang menghadapi ancaman abrasi
            serta pentingnya menjaga keberlanjutan hutan mangrove sebagai benteng alami pantai.
            Berdasarkan hasil observasi dan diskusi bersama pemerintah desa serta masyarakat,
            ditemukan bahwa upaya pelestarian mangrove perlu diimbangi dengan edukasi dan
            keterlibatan aktif masyarakat agar manfaat konservasi dapat dirasakan secara
            berkelanjutan. Berangkat dari kondisi tersebut, Tim KKN menginisiasi program SELARAS
            yang mengintegrasikan edukasi, pembibitan, dan penanaman mangrove sebagai langkah
            nyata dalam mewujudkan pesisir yang lestari, meningkatkan kesadaran lingkungan, serta
            memperkuat kolaborasi antara masyarakat, pemerintah, akademisi, dan mitra lainnya.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={0.15 + index * 0.1}
                className="rounded-lg border border-canopy/12 bg-mist/60 p-7 dark:border-white/10 dark:bg-white/[0.05]"
              >
                <IconBadge
                  delay={0.3 + index * 0.1}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-canopy text-white dark:bg-ember dark:text-ink"
                >
                  <Icon aria-hidden className="h-6 w-6" />
                </IconBadge>
                <h3 className="mt-5 text-xl font-bold text-canopy dark:text-mist">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink/68 dark:text-mist/68">{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
