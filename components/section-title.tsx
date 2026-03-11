export function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <div className="text-sm uppercase tracking-[0.28em] text-yellow/80">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-7 text-white/62">{copy}</p>
    </div>
  );
}
