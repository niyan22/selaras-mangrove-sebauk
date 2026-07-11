import { Leaf, ShieldCheck, ThermometerSun, Trees } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Pemecah Gelombang Alami",
    body: "Akar mangrove memperlambat gelombang dan menstabilkan sedimen di sepanjang zona pasang surut."
  },
  {
    icon: Trees,
    title: "Penyimpan Karbon Biru",
    body: "Mangrove yang sehat mampu menyimpan karbon dalam biomassa dan tanah pesisir selama puluhan tahun."
  },
  {
    icon: Leaf,
    title: "Rumah Keanekaragaman Hayati",
    body: "Anakan ikan, kepiting, burung, dan serangga bergantung pada kompleksitas habitat mangrove."
  },
  {
    icon: ThermometerSun,
    title: "Adaptasi Perubahan Iklim",
    body: "Vegetasi pesisir yang dipulihkan membantu masyarakat beradaptasi dengan perubahan kondisi garis pantai."
  }
];

export function WhyMangroves() {
  return (
    <section id="impact" className="bg-ink py-24 text-white md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Mengapa Mangrove Penting"
          title="Bibit kecil bisa menjadi infrastruktur pesisir yang krusial."
          description="Hutan mangrove berada di titik pertemuan darat dan laut, tempat kesehatan ekologi, penghidupan masyarakat, dan ketahanan iklim saling terhubung erat."
          align="center"
          tone="dark"
        />
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal
                key={benefit.title}
                delay={index * 0.08}
                className="min-h-[250px] rounded-lg border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember text-ink">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <h3 className="mt-7 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-white/66">{benefit.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
