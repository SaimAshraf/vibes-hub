const events = [
  "agent_07 closed lead #4821",
  "workflow:invoice-sync ran in 1.2s",
  "voicebot answered 14 calls",
  "scraper:competitor-prices · OK",
  "n8n flow inventory→shopify · 312 rows",
  "gpt5 inference · 84ms · cached",
  "agent_03 booked meeting #918",
  "rag.index rebuilt · 1.4M chunks",
  "alert · cart-recovery sent 41",
  "deploy nexivo.os · build #2147 · green",
  "stripe.charge $1,240 · auto-reconciled",
  "support ticket #5512 · resolved by agent_11",
];

export const Ticker = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="border-y border-border/70 bg-background/60 backdrop-blur overflow-hidden">
    <div className="flex items-stretch font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      <div className="shrink-0 px-4 py-2 bg-primary text-primary-foreground font-semibold flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-primary-foreground animate-pulse" /> LIVE
      </div>
      <div className="overflow-hidden flex-1 [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
        <div className={`flex gap-10 whitespace-nowrap py-2 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
          {[...events, ...events].map((e, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-primary">▸</span>
              <span className="text-foreground/70">{e}</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-muted-foreground/50">{String(Math.floor(Math.random() * 99)).padStart(2, "0")}:{String(Math.floor(Math.random() * 59)).padStart(2, "0")} UTC</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);