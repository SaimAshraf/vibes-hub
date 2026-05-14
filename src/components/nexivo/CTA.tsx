import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState<"idle" | "compiling" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStage("compiling");
    setTimeout(() => setStage("done"), 1800);
  };

  return (
    <section id="contact" className="py-28">
      <div className="container">
        <div className="relative panel overflow-hidden p-8 md:p-16 scanlines">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-40 -right-40 size-96 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">[ 08 / initialize ]</div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.92]">
              <span className="text-primary">$</span> nexivo init
              <br />
              <em className="italic">--your-company</em>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground font-grotesk max-w-xl">
              Free 30-minute AI audit. No slides. No fluff. You leave with a roadmap, ROI math, and either a partner or new respect for AI.
            </p>

            <form onSubmit={submit} className="mt-10 panel p-2 flex items-center gap-2 max-w-2xl scanlines bg-background">
              <span className="pl-3 font-mono text-primary">›</span>
              <input
                type="email"
                required
                disabled={stage !== "idle"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@yourcompany.com"
                className="flex-1 bg-transparent outline-none font-mono text-sm py-3 placeholder:text-muted-foreground/60"
              />
              {stage === "idle" && (
                <Button type="submit" variant="hero" size="lg" className="rounded-md">
                  Initialize <ArrowRight className="size-4" />
                </Button>
              )}
              {stage === "compiling" && (
                <div className="px-5 py-2 font-mono text-xs text-primary flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  compiling audit
                  <span className="inline-block w-2 h-3 bg-primary animate-blink" />
                </div>
              )}
              {stage === "done" && (
                <div className="px-5 py-2 font-mono text-xs text-primary flex items-center gap-2">
                  <Check className="size-4" /> queued · we'll be in touch in 24h
                </div>
              )}
            </form>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-muted-foreground">
              <span>▸ no sales pitch</span>
              <span>▸ no NDA needed</span>
              <span>▸ written follow-up</span>
              <span>▸ <a href="mailto:hello@nexivo.com" className="text-primary hover:underline">hello@nexivo.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
