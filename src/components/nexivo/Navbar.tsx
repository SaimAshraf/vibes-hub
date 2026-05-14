import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/nexivo-logo.jpeg";
import { StatusPill } from "./StatusPill";

const links = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#playground", label: "AI Lab" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container flex items-center justify-between px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass rounded-md shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.25)]" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-md overflow-hidden ring-1 ring-primary/30 group-hover:ring-primary transition">
            <img src={logo} alt="Nexivo logo" className="h-full w-full object-cover scale-110" />
          </div>
          <span className="font-grotesk font-bold text-lg tracking-[0.2em]">
            NEXIVO
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <StatusPill />
          <Button variant="hero" size="sm" className="rounded-md" asChild>
            <a href="#contact">
              Initialize <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden container mt-2">
          <div className="glass rounded-2xl p-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="rounded-full" asChild>
              <a href="#contact">Talk to AI</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
