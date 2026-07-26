const items = [
  "PROGRAM SELARAS",
  "SEBAUK LESTARI DAN ASRI",
  "1.000+ BIBIT MANGROVE",
  "KKN BERDAMPAK 2026",
  "DESA SEBAUK, BENGKALIS",
  "UNIVERSITAS RIAU"
];

export function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-8 motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.3em] text-white/70">
            {item}
            <span className="text-ember">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
