import { Zap, Shield, Cpu, Infinity as Inf } from "lucide-react";
import vizChip from "@/assets/viz-chip.jpg";

const items = [
  { icon: Zap, t: "Ship in weeks, not quarters", d: "Our AI-native stack lets us prototype in days and deploy in weeks." },
  { icon: Cpu, t: "End-to-end engineering", d: "From strategy and design to deployment, integration and 24/7 support." },
  { icon: Shield, t: "Enterprise-grade security", d: "SOC2-aligned practices, encrypted pipelines, private LLM deployments." },
  { icon: Inf, t: "Built to compound", d: "Every workflow we ship makes the next one cheaper, faster and smarter." },
];

export const WhyNexivo = () => (
  <section className="py-28 relative">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">[ 05 / Why Nexivo ]</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Not another agency. <br />
            <span className="text-gradient-brand">An AI partner.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            We're a small, senior team of engineers, designers and AI strategists who care
            obsessively about ROI. No bloat, no buzzwords, no babysitting.
          </p>
          <div className="mt-8 relative rounded-3xl overflow-hidden border border-border glow-cyan">
            <img
              src={vizChip}
              alt="AI chip with glowing circuits flowing into a magenta core"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-4 left-5 font-mono text-xs text-primary">// nexivo.core/v2</div>
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {items.map((i) => (
            <div key={i.t} className="glass rounded-3xl p-6 hover:border-primary/50 transition group">
              <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-cyan transition">
                <i.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
