import logo from "@/assets/nexivo-logo.jpeg";

export const Footer = () => (
  <footer className="border-t border-border py-14">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden ring-1 ring-primary/30">
              <img src={logo} alt="Nexivo" className="h-full w-full object-cover scale-110" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">NEXIVO</div>
              <div className="text-[10px] font-mono text-muted-foreground tracking-widest">NEXT-VISION-ORGANIZATION</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md">
            AI-powered automation & custom software. We engineer intelligence that works for you 24/7.
          </p>
        </div>
        <div>
          <div className="font-display font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#work" className="hover:text-primary">Work</a></li>
            <li><a href="#playground" className="hover:text-primary">AI Lab</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold mb-4">Connect</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@nexivo.com</li>
            <li>LinkedIn · X · Instagram</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Nexivo. All rights reserved.</span>
        <span>Built with intelligence ⚡ in 2026</span>
      </div>
    </div>
  </footer>
);
