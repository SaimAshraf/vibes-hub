const principles = [
  { n: "01", t: "Outcomes, not hours.", d: "We price on the metric that matters — saved hours, recovered revenue, qualified leads. Not on a timesheet." },
  { n: "02", t: "Senior team, every seat.", d: "No interns ghost-writing your stack. The same hands that pitch you ship your code." },
  { n: "03", t: "Production from day one.", d: "Prototypes are demos. We architect for real load, real users, real edge cases — week one." },
  { n: "04", t: "Compounding by design.", d: "Every workflow we ship plugs into the next. Your automation gets faster and smarter every quarter." },
];

export const WhyNexivo = () => (
  <section className="py-28 relative">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">[ 05 / manifesto.md ]</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            We don't sell <em className="italic">hours.</em>
            <br />
            We sell <span className="text-primary not-italic">outcomes</span>
            <br />
            that <em className="italic">compound.</em>
          </h2>
          <div className="mt-8 panel p-4 font-mono text-[11px] scanlines max-w-sm">
            <div className="text-muted-foreground/70 mb-2">// team.json</div>
            <div className="text-foreground/90">{`{ size: "small", level: "senior",`}</div>
            <div className="text-foreground/90">{`  bs: 0, slides: 0, code: ∞ }`}</div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-px bg-border/60">
          {principles.map((p) => (
            <div key={p.n} className="bg-background p-8 group hover:bg-secondary/30 transition">
              <div className="flex items-start gap-6">
                <div className="font-mono text-xs text-primary pt-2 w-12 shrink-0">{p.n} / 04</div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl leading-tight mb-2">{p.t}</h3>
                  <p className="text-muted-foreground font-grotesk leading-relaxed max-w-xl">{p.d}</p>
                </div>
                <div className="hidden md:block font-mono text-xs text-muted-foreground/40 group-hover:text-primary transition">▸</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
