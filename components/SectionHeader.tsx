import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light"
}: SectionHeaderProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-canopy dark:text-mist";
  const descriptionClass = tone === "dark" ? "text-white/90" : "text-ink/70 dark:text-mist";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">{eyebrow}</p>
      </Reveal>
      <AnimatedHeading
        as="h2"
        text={title}
        className={`mt-6 text-balance font-display text-4xl font-semibold leading-tight md:mt-8 md:text-6xl ${titleClass}`}
      />
      <Reveal delay={0.2}>
        <p className={`mt-7 text-pretty text-lg leading-8 md:mt-8 ${descriptionClass}`}>{description}</p>
      </Reveal>
    </div>
  );
}
