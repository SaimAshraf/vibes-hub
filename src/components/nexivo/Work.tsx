const cases = [
  {
    id: "001",
    sector: "RESTAURANT",
    client: "ShopHaus Group · 12 locations",
    title: "DineFlow voice agent",
    summary: "Replaced front-of-house phone load with a multilingual voice agent. Books tables, runs loyalty, follows up.",
    before: { label: "manual bookings/wk", v: 220 },
    after: { label: "auto bookings/wk", v: 690 },
    metrics: [{ k: "hours saved", v: "38/wk" }, { k: "no-shows", v: "−47%" }, { k: "bookings", v: "+212%" }],
    log: ["init: 2025-08-04", "deploy: 12 days", "uptime: 99.97%", "calls handled: 14,902"],
  },
  {
    id: "002",
    sector: "E-COMMERCE",
    client: "Velora · DTC apparel",
    title: "Cart-recovery agent",
    summary: "Personalised AI outreach across email + WhatsApp. Reads intent, offers right incentive, never spams.",
    before: { label: "cart recovery", v: 9 },
    after: { label: "cart recovery", v: 41 },
    metrics: [{ k: "added ARR", v: "$1.2M" }, { k: "open rate", v: "62%" }, { k: "AOV", v: "+18%" }],
    log: ["init: 2025-09-21", "deploy: 9 days", "agents: 3", "messages: 412k"],
  },
  {
    id: "003",
    sector: "REAL ESTATE",
    client: "Velora Realty · 4 cities",
    title: "Lead-qualifying voice bot",
    summary: "Calls inbound leads in <11s, qualifies in 3 languages, books viewings, hands warm leads to brokers.",
    before: { label: "qualified/mo", v: 410 },
    after: { label: "qualified/mo", v: 2980 },
    metrics: [{ k: "leads", v: "9k+" }, { k: "conversion", v: "4.8×" }, { k: "speed", v: "<11s" }],
    log: ["init: 2025-06-12", "deploy: 18 days", "languages: 3", "calls: 31,408"],
  },
];

export const Work = () => (
  <section id="work" className="py-28">
    <div className="container">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">[ 04 / case.files ]</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Receipts.<br /><em className="text-primary not-italic">Not promises.</em>
          </h2>
        </div>
        <p className="text-muted-foreground font-grotesk max-w-sm">
          Three production deployments, real numbers, no NDAs hidden behind a "trust us".
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {cases.map((c) => {
          const beforeBar = (c.before.v / c.after.v) * 100;
          return (
            <article key={c.id} className="panel overflow-hidden flex flex-col group hover:border-primary/40 transition">
              {/* file tab header */}
              <header className="flex items-stretch border-b border-border/70 font-mono text-[10px]">
                <div className="px-3 py-2 bg-primary text-primary-foreground font-semibold">CASE_{c.id}</div>
                <div className="flex-1 px-3 py-2 text-muted-foreground flex items-center justify-between">
                  <span>{c.sector}</span>
                  <span className="text-primary">.md</span>
                </div>
              </header>

              <div className="p-6 flex-1 flex flex-col">
                <div className="font-mono text-[10px] text-muted-foreground mb-2">▸ {c.client}</div>
                <h3 className="font-display text-2xl leading-tight mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground font-grotesk leading-relaxed">{c.summary}</p>

                {/* before/after bars */}
                <div className="mt-6 space-y-3">
                  <div>
                    <div className="flex justify-between font-mono text-[10px] text-muted-foreground mb-1">
                      <span>BEFORE · {c.before.label}</span><span>{c.before.v}</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground/40" style={{ width: `${beforeBar}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px] text-primary mb-1">
                      <span>AFTER · {c.after.label}</span><span>{c.after.v}</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary group-hover:shadow-[0_0_15px_hsl(var(--primary))] transition" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {c.metrics.map((m) => (
                    <div key={m.k} className="border border-border/60 p-2">
                      <div className="font-display text-lg leading-none">{m.v}</div>
                      <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground mt-1">{m.k}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="font-mono text-[9px] text-muted-foreground/70 space-y-0.5 border-t border-border/50 pt-3">
                    {c.log.map((l, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-primary/60">▸</span><span>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
