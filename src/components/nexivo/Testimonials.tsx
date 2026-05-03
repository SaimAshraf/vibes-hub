const tests = [
  { q: "Nexivo replaced 3 SaaS tools with one custom AI workflow. Game-changing.", a: "Maya R.", r: "COO, ShopHaus" },
  { q: "Their voice agent books more meetings than our SDR team. No exaggeration.", a: "Daniel K.", r: "Founder, Velora Realty" },
  { q: "Felt like working with a senior product team, not an agency.", a: "Priya S.", r: "Head of Ops, MedSync" },
];

export const Testimonials = () => (
  <section className="py-28">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">[ 06 / Voices ]</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
        Teams that shipped with us, <span className="text-gradient">stayed with us.</span>
      </h2>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {tests.map((t, i) => (
          <blockquote key={i} className="glass rounded-3xl p-7 relative hover:border-primary/40 transition">
            <div className="font-display text-5xl text-primary leading-none mb-3">"</div>
            <p className="text-foreground/90 leading-relaxed">{t.q}</p>
            <footer className="mt-6 pt-5 border-t border-border">
              <div className="font-semibold">{t.a}</div>
              <div className="text-xs text-muted-foreground font-mono">{t.r}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);
