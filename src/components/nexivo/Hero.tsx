import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* background grid + glows */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-40 bg-[image:var(--gradient-glow)]" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl bg-primary/20 animate-pulse-glow" />
      <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full blur-3xl bg-accent/20 animate-pulse-glow" />

      {/* Floating orb visual */}
      <img
        src={heroOrb}
        alt="Nexivo neural intelligence orb"
        width={1280}
        height={1280}
        className="hidden md:block absolute right-[-120px] top-24 w-[520px] opacity-70 mix-blend-screen animate-float pointer-events-none select-none"
      />
      <img
        src={heroOrb}
        alt=""
        width={400}
        height={400}
        className="hidden md:block absolute left-[-100px] bottom-10 w-[300px] opacity-40 mix-blend-screen animate-float pointer-events-none select-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-8 animate-float">
            <span className="size-2 rounded-full bg-primary animate-pulse-glow shadow-[0_0_12px_hsl(var(--primary))]" />
            v1.0 · Next-Vision Organization
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
            Intelligence that <span className="text-gradient-brand">scales.</span>
            <br />
            Automation that <span className="text-gradient">works.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We don't just build software. We engineer AI agents, autonomous workflows
            and bespoke platforms that work for you{" "}
            <span className="text-foreground font-medium">24/7.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Sparkles className="size-5" />
                Launch Your AI Audit
                <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button variant="neon" size="xl" asChild>
              <a href="#work">
                <Play className="size-4" /> See Our Work
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {[
              { v: "120+", l: "Projects Delivered" },
              { v: "1.2M", l: "Hours Automated" },
              { v: "4.8x", l: "Avg. ROI" },
              { v: "24/7", l: "AI Uptime" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5 hover:border-primary/50 transition group">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
