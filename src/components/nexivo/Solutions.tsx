import { useState } from "react";
import { ShoppingBag, HeartPulse, Building2, UtensilsCrossed, Factory, Briefcase } from "lucide-react";

const industries = [
  {
    id: "ecom", icon: ShoppingBag, name: "Retail & E-commerce", tag: "conversion.ai",
    flow: ["visitor", "intent.classify()", "agent.recommend()", "cart.recover()", "checkout"],
    metrics: [{ k: "cart recovery", v: "+41%" }, { k: "AOV", v: "+18%" }, { k: "support tickets", v: "−63%" }],
    blurb: "AI agents that recover abandoned carts, recommend smartly, and answer 24/7 — plugged into Shopify, Woo or custom.",
  },
  {
    id: "dine", icon: UtensilsCrossed, name: "Restaurants", tag: "dineflow.os",
    flow: ["call/whatsapp", "voice.agent", "table.reserve()", "kitchen.notify()", "review.followup"],
    metrics: [{ k: "bookings", v: "+212%" }, { k: "no-shows", v: "−47%" }, { k: "hours saved", v: "38/wk" }],
    blurb: "Voice + WhatsApp agents that book tables, run loyalty, and ping the kitchen before the customer hangs up.",
  },
  {
    id: "real", icon: Building2, name: "Real Estate", tag: "broker.ai",
    flow: ["lead.in", "qualify.script()", "schedule.viewing()", "follow.up.x7", "handoff.broker"],
    metrics: [{ k: "leads qualified", v: "9,000+" }, { k: "conversion", v: "4.8×" }, { k: "speed-to-call", v: "<11s" }],
    blurb: "Voice bots that qualify leads in seconds, book viewings, and never miss a follow-up — across 3 languages.",
  },
  {
    id: "health", icon: HeartPulse, name: "Healthcare", tag: "triage.smart",
    flow: ["patient.msg", "triage.symptoms()", "route.specialty()", "appointment.book()", "reminder"],
    metrics: [{ k: "front-desk load", v: "−58%" }, { k: "show rate", v: "+23%" }, { k: "HIPAA", v: "✓" }],
    blurb: "Compliant AI receptionists that triage, route and book — freeing your front desk for the humans in the room.",
  },
  {
    id: "mfg", icon: Factory, name: "Manufacturing", tag: "ops.automate",
    flow: ["sensor.data", "anomaly.detect()", "ticket.open()", "tech.dispatch()", "log.insight"],
    metrics: [{ k: "downtime", v: "−34%" }, { k: "MTTR", v: "−2.1h" }, { k: "reports", v: "auto" }],
    blurb: "Plug Nexivo into your shop floor: anomaly detection, predictive maintenance, English-language reporting.",
  },
  {
    id: "pro", icon: Briefcase, name: "Professional Services", tag: "workflow.ai",
    flow: ["intake", "auto.summarise()", "draft.proposal()", "send.docusign()", "billing"],
    metrics: [{ k: "proposal time", v: "−72%" }, { k: "billable hrs", v: "+11/wk" }, { k: "errors", v: "−90%" }],
    blurb: "Eat your admin alive — intake, drafting, follow-ups and billing handled by agents that learned your firm.",
  },
];

export const Solutions = () => {
  const [active, setActive] = useState(industries[0].id);
  const it = industries.find((i) => i.id === active)!;

  return (
    <section id="solutions" className="py-28 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">[ 02 / industries.switch() ]</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Tailored to <em className="text-primary not-italic">your</em> floor.
            </h2>
          </div>
          <p className="text-muted-foreground font-grotesk max-w-md">
            Different industry, same playbook. Pick yours — the workflow rewires itself.
          </p>
        </div>

        <div className="panel overflow-hidden">
          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-6 border-b border-border/70">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                className={`group relative px-4 py-4 text-left border-r border-border/70 last:border-r-0 transition ${
                  active === ind.id ? "bg-primary/5" : "hover:bg-secondary/40"
                }`}
              >
                {active === ind.id && <span className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />}
                <ind.icon className={`size-5 mb-2 ${active === ind.id ? "text-primary" : "text-muted-foreground"}`} />
                <div className={`font-grotesk text-sm font-semibold ${active === ind.id ? "text-foreground" : "text-muted-foreground"}`}>
                  {ind.name}
                </div>
                <div className="font-mono text-[9px] text-muted-foreground/70 mt-0.5">// {ind.tag}</div>
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div key={it.id} className="grid lg:grid-cols-12 gap-8 p-8 animate-[fade-in_0.3s_ease-out]">
            <div className="lg:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">// {it.tag}</div>
              <h3 className="font-display text-4xl mb-4">{it.name}</h3>
              <p className="text-muted-foreground font-grotesk leading-relaxed">{it.blurb}</p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {it.metrics.map((m) => (
                  <div key={m.k} className="border-l-2 border-primary pl-3">
                    <div className="font-display text-2xl text-foreground">{m.v}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{m.k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="panel p-5 scanlines">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">workflow · {it.id}.flow</div>
                <div className="space-y-2">
                  {it.flow.map((step, i) => (
                    <div key={i} className="flex items-center gap-3 font-mono text-xs">
                      <span className="size-6 rounded border border-border flex items-center justify-center text-[9px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground/90">{step}</span>
                       {i < it.flow.length - 1 && (
                        <span className="flex-1 border-t border-primary/20" />
                      )}
                      {i < it.flow.length - 1 && <span className="text-primary">▸</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
