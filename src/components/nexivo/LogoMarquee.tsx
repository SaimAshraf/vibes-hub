const partners = ["OpenAI", "Google Cloud", "AWS", "Vercel", "Supabase", "n8n", "Stripe", "Anthropic"];

export const LogoMarquee = () => (
  <section className="py-12 border-y border-border/50">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Powered by the best in AI & cloud
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-muted-foreground/60 hover:text-primary transition"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
