import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, ThermometerSun, Trees } from "lucide-react";
import { IconBadge } from "./IconBadge";
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

type WhyMangrovesProps = {
  variant?: "full" | "teaser";
  hideHeader?: boolean;
};

export function WhyMangroves({ variant = "full", hideHeader = false }: WhyMangrovesProps) {
  const isTeaser = variant === "teaser";
  const items = isTeaser ? benefits.slice(0, 2) : benefits;

  return (
    <section id="impact" className="bg-ink py-24 text-white md:py-32">
      <div className="section-shell">
        {hideHeader ? null : (
          <SectionHeader
            eyebrow="Mengapa Mangrove Penting"
            title="Bibit kecil bisa menjadi infrastruktur pesisir yang krusial."
            description="Hutan mangrove berada di titik pertemuan darat dan laut, tempat kesehatan ekologi, penghidupan masyarakat, dan ketahanan iklim saling terhubung erat."
            align="center"
            tone="dark"
          />
        )}
        <div className={`mt-16 grid gap-4 sm:grid-cols-2 ${isTeaser ? "" : "lg:grid-cols-4"}`}>
          {items.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal
                key={benefit.title}
                delay={index * 0.08}
                className="min-h-[250px] rounded-lg border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                <IconBadge
                  delay={index * 0.08 + 0.15}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-ember text-ink"
                >
                  <Icon aria-hidden className="h-6 w-6" />
                </IconBadge>
                <h3 className="mt-7 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-white/85">{benefit.body}</p>
              </Reveal>
            );
          })}
        </div>
        {isTeaser ? (
          <Reveal delay={0.24} className="mt-10 flex justify-center">
            <Link
              href="/dampak"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ember transition hover:gap-3"
            >
              Lihat semua dampak
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
