import { Link, useLocation } from "react-router-dom";
import { Eyebrow } from "@/components/nexivo/Visuals";

const links = [
  { to: "/", t: "Home" },
  { to: "/services", t: "Services" },
  { to: "/products", t: "Products" },
  { to: "/products/nexpos", t: "NexPos" },
  { to: "/work", t: "Portfolio" },
  { to: "/contact", t: "Contact" },
];

const NotFound = () => {
  const location = useLocation();
  document.title = "Page not found — Nexivo";

  return (
    <section className="section container page-intro">
      <Eyebrow>404</Eyebrow>
      <h1 className="display-title">This page moved, or never existed.</h1>
      <p className="lede">Nothing is broken—the address <code className="text-primary">{location.pathname}</code> just isn’t part of the site. Pick a page below.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary">
            {l.t}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NotFound;
