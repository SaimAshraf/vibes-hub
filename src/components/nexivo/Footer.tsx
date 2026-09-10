import logo from "@/assets/nexivo-logo.png";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border mt-10">
    {/* system log strip */}
    <div className="container py-12 md:py-16">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Nexivo" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-grotesk font-bold tracking-widest">NEXIVO</div>
              <div className="text-[9px] font-mono text-muted-foreground tracking-widest">NEXT · VISION · ORGANIZATION</div>
            </div>
          </div>
          <p className="mt-6 font-display text-2xl sm:text-3xl leading-tight max-w-md">
            Intelligence connected to <em className="text-primary not-italic">real operations.</em>
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">// explore</div>
          <ul className="space-y-2 text-sm font-grotesk">
            <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link to="/products" className="hover:text-primary transition">Products</Link></li>
            <li><Link to="/products/nexpos" className="hover:text-primary transition">NexPos</Link></li>
            <li><Link to="/work" className="hover:text-primary transition">Work</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">// channel</div>
          <a href="mailto:nexivoservices@gmail.com" className="font-display text-xl sm:text-2xl text-foreground hover:text-primary transition break-all">nexivoservices@gmail.com</a>
          <div className="mt-4">
            <a
              href="https://www.instagram.com/nexivoservices?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:border-primary hover:text-primary transition font-mono text-xs"
            >
              <Instagram className="size-4" /> @nexivoservices
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Nexivo AI (Private) Limited</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          all systems operational
        </span>
      </div>
    </div>
  </footer>
);
