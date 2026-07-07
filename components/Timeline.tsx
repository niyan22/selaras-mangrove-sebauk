import { CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const milestones = [
  {
    phase: "01",
    title: "Site Observation",
    date: "February 2026",
    body: "Initial mapping of shoreline conditions, access points, community priorities, and planting opportunities."
  },
  {
    phase: "02",
    title: "Community Coordination",
    date: "March 2026",
    body: "Village leaders, youth groups, and KKN mentors align the planting plan and educational activities."
  },
  {
    phase: "03",
    title: "Seedling Preparation",
    date: "April 2026",
    body: "Mangrove seedlings are selected, staged, and prepared with simple survival-monitoring records."
  },
  {
    phase: "04",
    title: "Planting Day",
    date: "May 2026",
    body: "Students and residents plant seedlings in coordinated zones along the Sebauk coastal edge."
  },
  {
    phase: "05",
    title: "Monitoring Handover",
    date: "June 2026",
    body: "The team documents survival checks and shares a stewardship guide for post-program care."
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="bg-mist py-24 dark:bg-ink md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Interactive Timeline"
          title="From observation to long-term care."
          description="A clear program sequence helps turn one planting event into a documented conservation workflow."
        />
        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-canopy/16 dark:bg-white/14 md:block" />
          <div className="grid gap-5">
            {milestones.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                className="group grid gap-5 rounded-lg border border-canopy/10 bg-white/76 p-5 shadow-sm transition hover:border-ember/50 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.06] md:grid-cols-[84px_1fr]"
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canopy text-sm font-black text-white transition group-hover:bg-ember group-hover:text-ink">
                    {item.phase}
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-tide dark:text-ember">
                      <CalendarDays aria-hidden className="h-4 w-4" />
                      {item.date}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-canopy dark:text-mist">{item.title}</h3>
                  </div>
                  <p className="leading-7 text-ink/68 dark:text-mist/68">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
