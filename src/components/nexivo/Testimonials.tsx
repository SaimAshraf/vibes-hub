const threads = [
  {
    channel: "#wins",
    person: "Maya R.",
    role: "COO · ShopHaus",
    initial: "MR",
    color: "bg-primary text-primary-foreground",
    time: "2:41 PM",
    msg: "ok i need to say it. nexivo replaced 3 SaaS tools with one custom workflow. our ops team has time to *think* again 🤯",
    react: ["🔥 4", "🚀 7"],
  },
  {
    channel: "#sales",
    person: "Daniel K.",
    role: "Founder · Velora Realty",
    initial: "DK",
    color: "bg-accent text-accent-foreground",
    time: "9:08 AM",
    msg: "their voice agent books more meetings than our 4-person SDR team. no exaggeration. it called a lead at 11pm and closed a viewing.",
    react: ["💯 9", "👀 3"],
  },
  {
    channel: "#engineering",
    person: "Priya S.",
    role: "Head of Ops · MedSync",
    initial: "PS",
    color: "bg-signal text-background",
    time: "Yesterday",
    msg: "felt like working with a senior product team, not an agency. they pushed back on bad ideas. that alone was worth the engagement.",
    react: ["✅ 12"],
  },
];

export const Testimonials = () => (
  <section className="py-28">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">[ 07 / inbox ]</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
          What clients say<br />when <em className="italic">we're not in</em> the room.
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {threads.map((t, i) => (
          <div key={i} className="panel p-5 hover:border-primary/30 transition">
            <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-4 pb-3 border-b border-border/60">
              <span className="text-primary">{t.channel}</span>
              <span>{t.time}</span>
            </div>
            <div className="flex items-start gap-3">
              <div className={`size-10 rounded-md ${t.color} flex items-center justify-center font-grotesk font-bold text-sm shrink-0`}>
                {t.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-grotesk font-semibold text-sm">{t.person}</span>
                  <span className="font-mono text-[9px] text-muted-foreground">{t.role}</span>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed font-grotesk">{t.msg}</p>
                <div className="mt-3 flex gap-1.5">
                  {t.react.map((r) => (
                    <span key={r} className="px-2 py-0.5 rounded-full border border-border/70 text-[10px] font-mono bg-background/60 hover:border-primary/50 transition">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="mt-2 font-mono text-[9px] text-primary/70">✓✓ seen</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
