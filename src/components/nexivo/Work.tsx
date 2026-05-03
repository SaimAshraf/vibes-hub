const cases = [
  { tag: "Restaurants", title: "DineFlow saved 38 hrs/week", metric: "+212% bookings", color: "from-fuchsia-500 to-pink-500" },
  { tag: "E-commerce", title: "AI agent recovered 41% carts", metric: "$1.2M added ARR", color: "from-cyan-400 to-blue-500" },
  { tag: "Real Estate", title: "Voice bot qualified 9k leads", metric: "4.8x conversion", color: "from-violet-500 to-indigo-500" },
];

export const Work = () => (
  <section id="work" className="py-28">
    <div className="container">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">[ 04 / Selected Work ]</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Real outcomes. <span className="text-gradient">No fluff.</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <article
            key={i}
            className="group relative h-80 rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-80`} />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative h-full p-7 flex flex-col justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-background/40 backdrop-blur text-xs font-mono">
                {c.tag}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight">{c.title}</h3>
                <div className="mt-3 font-mono text-sm text-foreground/90">→ {c.metric}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
