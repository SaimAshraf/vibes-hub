import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/nexivo-logo.png";

const links = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/products/nexpos", label: "NexPos" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

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
        className={`container flex items-center justify-between px-4 sm:px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass rounded-md" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Nexivo logo" className="h-8 w-8 object-contain" />
          <span className="font-grotesk font-bold text-base sm:text-lg tracking-[0.2em]">
            NEXIVO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({isActive}) => `text-[11px] uppercase font-semibold text-muted-foreground hover:text-primary transition relative group ${isActive ? "text-primary" : ""}`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" className="rounded-md" asChild>
            <Link to="/contact">Let’s talk <ArrowRight className="size-4" /></Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="md:hidden container mt-2">
          <div className="glass rounded-md p-5 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-lg border-b border-border py-3 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </NavLink>
            ))}
            <Button variant="hero" size="sm" className="mt-3" asChild>
              <Link to="/contact">Start a project</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
