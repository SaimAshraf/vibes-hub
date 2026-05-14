const modules = [
  {
    id: "agents",
    title: "Agents & Chatbots",
    cmd: "agents.deploy()",
    code: [
      "import { Agent } from 'nexivo'",
      "",
      "export const sales = new Agent({",
      "  model: 'gpt-5.2',",
      "  tools: [crm, calendar, email],",
      "  voice: true,",
      "})",
      "",
      "// → handling 1.4k chats/day",
    ],
    status: "RUNNING",
  },
  {
    id: "workflows",
    title: "Intelligent Workflows",
    cmd: "workflows.orchestrate()",
    code: [
      "trigger: webhook('/order')",
      "  → enrich(customer)",
      "  → classify(intent)",
      "  → if (vip) notify(slack)",
      "  → upsert(hubspot)",
      "  → reply(personalised)",
      "// avg 1.2s · 99.7% success",
    ],
    status: "RUNNING",
  },
  {
    id: "voice",
    title: "AI Voice Agents",
    cmd: "voice.dial()",
    code: [
      "agent.persona = 'sdr_natalie'",
      "agent.languages = ['en','hi','es']",
      "agent.script = './qualify-lead.md'",
      "",
      "→ booked 318 meetings last month",
      "→ avg call · 2m 41s",
    ],
    status: "RUNNING",
  },
  {
    id: "software",
    title: "Custom Software",
    cmd: "build.app(spec)",
    code: [
      "stack: react + supabase + ai",
      "design: bespoke, brand-native",
      "ship: 2–6 weeks",
      "",
      "→ 40+ products in production",
    ],
    status: "DEPLOYED",
  },
  {
    id: "data",
    title: "Data & BI",
    cmd: "data.illuminate()",
    code: [
      "pipelines: airbyte + dbt",
      "warehouse: bigquery / pg",
      "agent.analyst.ask('why churn ↑?')",
      "",
      "→ insights in english, not sql",
    ],
    status: "RUNNING",
  },
  {
    id: "consulting",
    title: "AI Strategy",
    cmd: "audit.run()",
    code: [
      "scan: ops, sales, support",
      "score: automation potential",
      "ship: roadmap + ROI math",
      "",
      "→ free 30-min audit",
    ],
    status: "READY",
  },
];

export const Services = () => (
  <section id="services" className="py-28 relative">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">[ 01 / modules.list() ]</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Six modules.<br />
            One <em className="text-primary not-italic">runtime.</em>
          </h2>
        </div>
        <p className="text-muted-foreground font-grotesk max-w-sm">
          Pick a module — or compose them. Every Nexivo build is a small senior team shipping production code, not slides.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m, i) => (
          <article
            key={m.id}
            className="panel overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <header className="flex items-center justify-between px-4 py-2.5 border-b border-border/70 bg-background/60">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-signal" />
                <span className="size-2 rounded-full bg-yellow-500/60" />
                <span className="size-2 rounded-full bg-primary" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">module_{String(i + 1).padStart(2, "0")}.ts</span>
              <span className={`font-mono text-[9px] px-2 py-0.5 rounded ${m.status === "DEPLOYED" ? "bg-accent/15 text-accent" : m.status === "READY" ? "bg-signal/15 text-signal" : "bg-primary/15 text-primary"}`}>
                {m.status}
              </span>
            </header>
            <div className="p-5">
              <div className="font-mono text-[11px] text-primary mb-1">$ {m.cmd}</div>
              <h3 className="font-display text-2xl mb-4">{m.title}</h3>
              <pre className="font-mono text-[11px] leading-5 text-foreground/70 group-hover:text-foreground/90 transition whitespace-pre-wrap">
                {m.code.map((l, idx) => (
                  <div key={idx} className="flex">
                    <span className="w-6 text-muted-foreground/40 select-none text-right pr-2">{idx + 1}</span>
                    <span className={l.startsWith("//") || l.startsWith("→") ? "text-primary/80" : ""}>{l || "\u00A0"}</span>
                  </div>
                ))}
              </pre>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
