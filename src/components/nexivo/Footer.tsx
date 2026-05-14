import logo from "@/assets/nexivo-logo.jpeg";

export const Footer = () => (
  <footer className="border-t border-border mt-10">
    {/* system log strip */}
    <div className="border-b border-border/60 bg-background/60">
      <div className="container flex flex-wrap items-center gap-x-6 gap-y-1 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="flex items-center gap-1.5 text-primary">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" /> system: healthy
        </span>
        <span>uptime · 99.97%</span>
        <span>build · #2147</span>
        <span>region · blr-1</span>
        <span className="ml-auto">last sync · just now</span>
      </div>
    </div>

    <div className="container py-16">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded overflow-hidden ring-1 ring-primary/30">
              <img src={logo} alt="Nexivo" className="h-full w-full object-cover scale-110" />
            </div>
            <div>
              <div className="font-grotesk font-bold tracking-widest">NEXIVO</div>
              <div className="text-[9px] font-mono text-muted-foreground tracking-widest">NEXT · VISION · ORGANIZATION</div>
            </div>
          </div>
          <p className="mt-6 font-display text-3xl leading-tight max-w-md">
            Engineering intelligence that <em className="text-primary not-italic">never clocks out.</em>
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">// runtime</div>
          <ul className="space-y-2 text-sm font-grotesk">
            <li><a href="#services" className="hover:text-primary transition">Modules</a></li>
            <li><a href="#solutions" className="hover:text-primary transition">Industries</a></li>
            <li><a href="#playground" className="hover:text-primary transition">AI Lab</a></li>
            <li><a href="#work" className="hover:text-primary transition">Case Files</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">// channel</div>
          <a href="mailto:hello@nexivo.com" className="font-display text-2xl text-foreground hover:text-primary transition">hello@nexivo.com</a>
          <div className="mt-3 flex gap-3 font-mono text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">LinkedIn</a><span>·</span>
            <a href="#" className="hover:text-primary">X</a><span>·</span>
            <a href="#" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} nexivo · running 24/7 from bengaluru</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          all systems operational
        </span>
      </div>
    </div>
  </footer>
);
