import { ShoppingBag, HeartPulse, Building2, UtensilsCrossed, Factory, Briefcase } from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "Retail & E-commerce", tag: "Conversion AI" },
  { icon: HeartPulse, name: "Healthcare", tag: "Smart Triage" },
  { icon: Building2, name: "Real Estate", tag: "Lead Bots" },
  { icon: UtensilsCrossed, name: "Restaurants", tag: "DineFlow" },
  { icon: Factory, name: "Manufacturing", tag: "Ops Automation" },
  { icon: Briefcase, name: "Professional Services", tag: "Workflow AI" },
];

export const Solutions = () => (
  <section id="solutions" className="py-28 relative">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">[ 02 / Solutions ]</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Built for <span className="text-gradient">your industry</span>.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          From storefronts to factory floors — we ship vertical AI that already speaks your language.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
        {industries.map((it) => (
          <div
            key={it.name}
            className="group relative bg-card p-8 hover:bg-secondary transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition">
                <it.icon className="size-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{it.name}</h3>
                <p className="text-xs font-mono text-muted-foreground mt-1">// {it.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
