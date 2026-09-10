import { ArrowUpRight, Check, WifiOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LetsTalkButton } from "./LetsTalk";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="eyebrow"><span className="signal-dot" />{children}</div>
);

export const PageIntro = ({ label, title, copy }: { label: string; title: React.ReactNode; copy: string }) => (
  <header className="page-intro container">
    <Eyebrow>{label}</Eyebrow>
    <h1 className="display-title max-w-5xl">{title}</h1>
    <p className="lede max-w-2xl">{copy}</p>
  </header>
);

export const NexPosScreen = ({ compact = false }: { compact?: boolean }) => (
  <div className="product-screen">
    <div className="screen-bar"><span>NEXPOS / LIVE FLOOR</span><span className="text-primary">● ONLINE</span></div>
    <div className="grid grid-cols-[.7fr_1.3fr] gap-3 p-3 sm:p-5">
      <div className="space-y-2">
        {['All items','Main course','Drinks','Desserts'].map((x, i) => <div key={x} className={i === 0 ? 'screen-item active' : 'screen-item'}>{x}</div>)}
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2">
          {['Karahi','Club sandwich','Cold coffee','Pasta'].map((x, i) => <div key={x} className="menu-tile"><span>{x}</span><b>PKR {420 + i * 190}</b></div>)}
        </div>
        {!compact && <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs"><span>Table 07 · 4 items</span><b className="text-primary">PKR 3,210</b></div>}
      </div>
    </div>
  </div>
);

export const ContactBand = ({ title = "Build what your business needs next." }: { title?: string }) => (
  <section className="contact-band">
    <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <div><Eyebrow>Start a conversation</Eyebrow><h2 className="section-title max-w-3xl">{title}</h2></div>
      <LetsTalkButton variant="secondary">Let’s talk</LetsTalkButton>
    </div>
  </section>
);

/** Live automation pipeline panel — the hero's "it's running" moment */
export const AutomationPanel = () => {
  const rows = [
    { t: "Message received", s: "WhatsApp · 0.2s" },
    { t: "Intent understood", s: "AI agent · 0.6s" },
    { t: "Order created", s: "POS · 0.9s" },
    { t: "Invoice + report sent", s: "Automation · 1.4s" },
  ];
  return (
    <div className="auto-panel">
      <div className="screen-bar"><span>NEXIVO / AUTOMATION RUN</span><span className="text-primary">● LIVE</span></div>
      <div className="auto-rows">
        {rows.map((r, i) => (
          <div key={r.t} style={{ animationDelay: `${i * 0.7}s` }}>
            <i /><span><b>{r.t}</b>{r.s}</span><Check />
          </div>
        ))}
      </div>
      <div className="auto-foot"><span>Runs today</span><b>1,284</b><span>Human hours saved</span><b>96</b></div>
    </div>
  );
};

export const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="feature-list">{items.map(item => <li key={item}><Check />{item}</li>)}</ul>
);

export const OfflineBadge = () => <div className="floating-badge"><WifiOff /><span><b>Offline ready</b>Sales sync when connection returns</span></div>;

export const ProductLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">{children}<ArrowUpRight className="size-4" /></Link>
);