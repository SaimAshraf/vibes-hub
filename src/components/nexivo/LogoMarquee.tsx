import { Ticker } from "./Ticker";

const stack = ["OpenAI", "Anthropic", "Gemini", "n8n", "Supabase", "Vercel", "AWS", "Stripe", "Twilio", "HubSpot", "Postgres", "Resend"];
const outcomes = ["−38 hrs/wk", "+212% bookings", "$1.2M ARR", "4.8× conv.", "−61% ops cost", "9k leads qualified", "41% cart recovery", "<2s response"];

export const LogoMarquee = () => (
  <section className="relative">
    <Ticker />
    <div className="py-10 border-b border-border/60 bg-background/40">
      <div className="container">
        <div className="flex items-center gap-4 mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">// stack.orchestrate</span>
          <span className="flex-1 h-px bg-border/60" />
          <span>12 integrations</span>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...stack, ...stack].map((p, i) => (
              <span key={i} className="font-grotesk text-xl font-semibold text-muted-foreground/70 hover:text-primary transition">
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-12 animate-marquee-rev whitespace-nowrap">
            {[...outcomes, ...outcomes].map((p, i) => (
              <span key={i} className="font-mono text-sm text-primary/80">
                ▸ {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
