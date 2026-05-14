const steps = [
  {
    n: "01", t: "Discover", cmd: "audit.run()",
    log: ["scanning ops, sales, support…", "identified 14 automation candidates", "ROI projection: $480k/yr", "deliverable: roadmap.pdf"],
    days: "Day 1–3",
  },
  {
    n: "02", t: "Architect", cmd: "design.systems()",
    log: ["agent topology · drafted", "tool schemas · defined", "data contracts · signed off", "deliverable: spec.md + figma"],
    days: "Day 4–10",
  },
  {
    n: "03", t: "Deploy", cmd: "ship.production()",
    log: ["agents trained on your data", "integrations · live", "QA · 312 scenarios passed", "deliverable: production runtime"],
    days: "Day 11–28",
  },
  {
    n: "04", t: "Optimize", cmd: "loop.compound()",
    log: ["weekly insight reports", "A/B tests on live agents", "new tools added monthly", "deliverable: a smarter business"],
    days: "Day 29 → ∞",
  },
];

export const Process = () => (
  <section className="py-28 relative">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">[ 06 / runtime.lifecycle ]</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            From <em className="italic">audit</em> to
            <br /> <span className="text-primary">autonomous</span> in 28 days.
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-12 h-px bg-border hidden md:block" />
        <div className="grid md:grid-cols-4 gap-px bg-border/60">
          {steps.map((s, i) => (
            <div key={s.n} className="bg-background p-6 relative group hover:bg-secondary/30 transition">
              <div className="flex items-center justify-between mb-6 relative">
                <div className="size-12 rounded border border-primary bg-background flex items-center justify-center font-mono text-sm text-primary z-10 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  {s.n}
                </div>
                <div className="font-mono text-[9px] text-muted-foreground">{s.days}</div>
              </div>
              <h3 className="font-display text-3xl mb-1">{s.t}</h3>
              <div className="font-mono text-[11px] text-primary mb-4">$ {s.cmd}</div>
              <div className="font-mono text-[10px] space-y-1.5 text-muted-foreground">
                {s.log.map((l, j) => (
                  <div key={j} className="flex gap-2">
                    <span className="text-primary/70">▸</span>
                    <span className={j === s.log.length - 1 ? "text-foreground/80" : ""}>{l}</span>
                  </div>
                ))}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-12 text-primary font-mono">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);