import logo from "@/assets/home/nexivo-mark.png";
import { LetsTalkButton } from "./LetsTalk";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialRow } from "./Socials";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, nexivoSocials, nexposSocials } from "@/data/site";

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
            <li><Link to="/team" className="hover:text-primary transition">Team</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">// channel</div>
          <LetsTalkButton size="lg">Let’s talk</LetsTalkButton>
          <a href={`mailto:${EMAIL}`} className="block mt-4 text-sm text-muted-foreground hover:text-primary transition break-all">{EMAIL}</a>
          <a href={`tel:${PHONE_TEL}`} className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
            <Phone className="size-4" /> {PHONE_DISPLAY}
          </a>
          <div className="mt-5 space-y-3">
            <SocialRow socials={nexivoSocials} label="Nexivo" />
            <SocialRow socials={nexposSocials} label="NexPos" />
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
