import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { NodeGraph } from "./NodeGraph";

const bootLines = [
  "$ nexivo init --client=visitor",
  "› loading runtime modules ........ ok",
  "› spawning 4 agents .............. ok",
  "› compiling intelligence ......... ok",
  "› ready.",
];

export const Hero = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= bootLines.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 350 : 280);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-30 bg-[image:var(--gradient-glow)]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            {/* Boot terminal */}
            <div className="panel p-4 font-mono text-[11px] sm:text-xs mb-8 max-w-md scanlines">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-border/60">
                <span className="size-2 rounded-full bg-signal" />
                <span className="size-2 rounded-full bg-yellow-500/60" />
                <span className="size-2 rounded-full bg-primary" />
                <span className="ml-2 text-muted-foreground/70">nexivo@os ~ boot</span>
              </div>
              {bootLines.slice(0, step).map((l, i) => (
                <div key={i} className={i === bootLines.length - 1 ? "text-primary" : "text-foreground/80"}>
                  {l}
                </div>
              ))}
              {step < bootLines.length && (
                <div className="text-foreground/80">
                  {bootLines[step]?.slice(0, 0)}<span className="inline-block w-2 h-3 bg-primary animate-blink align-middle" />
                </div>
              )}
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-5">
              [ runtime · v2.1 · bengaluru ]
            </div>

            <h1 className="font-display text-[3.25rem] sm:text-7xl md:text-[5.5rem] leading-[0.95] tracking-tight">
              We build the <em className="text-primary not-italic">agents</em>
              <br />
              that <span className="italic">run</span> your
              <br />
              <span className="text-gradient-brand">business.</span>
            </h1>

            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-grotesk">
              Nexivo is an automation OS. We engineer AI agents, voice bots and
              autonomous workflows that <span className="text-foreground">don't sleep, don't quit, don't forget.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Initialize audit <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button variant="neon" size="xl" asChild>
                <a href="#playground">
                  <Play className="size-4" /> Talk to Nexa
                </a>
              </Button>
            </div>
          </div>

          {/* Node graph panel */}
          <div className="lg:col-span-5">
            <div className="panel relative overflow-hidden p-5 scanlines">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                <span>// workflow.runtime</span>
                <span className="text-primary flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" /> running
                </span>
              </div>
              <div className="aspect-[5/3]">
                <NodeGraph />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[9px]">
                <div className="panel p-2"><div className="text-muted-foreground/60">latency</div><div className="text-primary">84ms</div></div>
                <div className="panel p-2"><div className="text-muted-foreground/60">success</div><div className="text-primary">99.7%</div></div>
                <div className="panel p-2"><div className="text-muted-foreground/60">runs/24h</div><div className="text-primary">12,481</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 border-y border-border/60 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
          {[
            { v: "120+", l: "Projects shipped" },
            { v: "1.2M", l: "Hours automated" },
            { v: "4.8×", l: "Average ROI" },
            { v: "24/7", l: "Agent uptime" },
          ].map((s, i) => (
            <div key={s.l} className="p-6 group">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                0{i + 1} · metric
              </div>
              <div className="font-display text-4xl md:text-5xl text-foreground group-hover:text-primary transition">
                {s.v}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
