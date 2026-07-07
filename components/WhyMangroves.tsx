import { Leaf, ShieldCheck, ThermometerSun, Trees } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Natural Breakwaters",
    body: "Mangrove roots slow waves and stabilize sediment across tidal zones."
  },
  {
    icon: Trees,
    title: "Blue Carbon Stores",
    body: "Healthy mangroves can lock carbon in biomass and coastal soil for decades."
  },
  {
    icon: Leaf,
    title: "Biodiversity Nurseries",
    body: "Juvenile fish, crabs, birds, and insects rely on mangrove habitat complexity."
  },
  {
    icon: ThermometerSun,
    title: "Climate Adaptation",
    body: "Restored coastal vegetation helps communities adapt to changing shoreline conditions."
  }
];

export function WhyMangroves() {
  return (
    <section id="impact" className="bg-ink py-24 text-white md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why Mangroves Matter"
          title="Small seedlings can become critical coastal infrastructure."
          description="Mangrove forests sit at the meeting point of land and sea, where ecological health, community livelihoods, and climate resilience are deeply connected."
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
