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
  const descriptionClass = tone === "dark" ? "text-white/68" : "text-ink/70 dark:text-mist/72";

  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-ember">{eyebrow}</p>
      <h2 className={`mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${descriptionClass}`}>{description}</p>
    </Reveal>
  );
}
