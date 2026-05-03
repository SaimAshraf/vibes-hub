import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const CTA = () => (
  <section id="contact" className="py-28">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2.5rem] glass p-10 md:p-20 text-center">
        <div className="absolute inset-0 bg-[image:var(--gradient-glow)] opacity-60" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-40 -left-40 size-96 rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -right-40 size-96 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">[ Ready? ]</p>
          <h2 className="font-display text-4xl md:text-7xl font-bold leading-[1.05] max-w-4xl mx-auto">
            Let's engineer the <span className="text-gradient-brand">next version</span> of your business.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Book a free 30-minute AI audit. No slides. No fluff. Just a clear plan and ROI math.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Calendar className="size-5" /> Book Free AI Audit <ArrowRight className="size-5" />
            </Button>
            <Button variant="neon" size="xl">hello@nexivo.com</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
