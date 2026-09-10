import { useEffect, useRef, useState } from "react";
import { Bot, BrainCircuit, Boxes, Gauge, PhoneCall, Sparkles, Workflow } from "lucide-react";

type Cap = { i: typeof Bot; t: string; d: string; tag: string };

export const capabilities: Cap[] = [
  { i: BrainCircuit, t: "AI agents", d: "Chat, sales and support agents that answer, qualify and act on their own.", tag: "Always answering" },
  { i: PhoneCall, t: "Voice bots", d: "AI receptionists that pick up, book appointments and follow up by call.", tag: "Never a missed call" },
  { i: Workflow, t: "Automation", d: "WhatsApp, CRM, invoicing and reporting workflows stitched end to end.", tag: "Runs by itself" },
  { i: Boxes, t: "Business software", d: "POS, ERP, inventory, dashboards and portals built for your operation.", tag: "Built to fit" },
  { i: Sparkles, t: "Custom builds", d: "Web apps, mobile apps, SaaS products and internal tools from scratch.", tag: "From scratch" },
  { i: Gauge, t: "Data & reporting", d: "Live numbers owners actually read—on screen or straight to WhatsApp.", tag: "Live numbers" },
];

const Chat = () => (
  <div className="cap-mock cap-chat">
    <div className="cm-in">Do you have a table for 6 tonight?</div>
    <div className="cm-out">Yes — 8:30pm works. Booking it now.</div>
    <div className="cm-in">Perfect, book it.</div>
    <div className="cm-out cm-done">Confirmed · sent on WhatsApp</div>
  </div>
);
const Call = () => (
  <div className="cap-mock cap-call">
    <div className="cm-ring"><PhoneCall /></div>
    <b>Incoming call</b>
    <span>Answered in 1 ring · appointment booked</span>
    <div className="cm-wave">{Array.from({ length: 18 }).map((_, i) => <i key={i} style={{ animationDelay: `${i * 60}ms` }} />)}</div>
  </div>
);
const Flow = () => (
  <div className="cap-mock cap-flow">
    {["Message received", "Intent detected", "Order created", "Invoice sent"].map((s, i) => (
      <div key={s} style={{ animationDelay: `${i * 260}ms` }}><i />{s}</div>
    ))}
  </div>
);
const Table = () => (
  <div className="cap-mock cap-table">
    <div className="cm-head"><span>Item</span><span>Stock</span><span>Status</span></div>
    {[["Chicken breast", "42 kg", "OK"], ["Cheese block", "6 kg", "Low"], ["Packaging", "310", "OK"], ["Cooking oil", "2 tins", "Reorder"]].map((r, i) => (
      <div key={r[0]} className="cm-row" style={{ animationDelay: `${i * 180}ms` }}><span>{r[0]}</span><span>{r[1]}</span><b data-s={r[2]}>{r[2]}</b></div>
    ))}
  </div>
);
const Build = () => (
  <div className="cap-mock cap-build">
    {[["Discovery", 100], ["Design", 100], ["Build", 72], ["Launch", 24]].map(([t, v], i) => (
      <div key={t as string} style={{ animationDelay: `${i * 160}ms` }}>
        <span>{t}</span><em><i style={{ width: `${v}%` }} /></em>
      </div>
    ))}
  </div>
);
const Chart = () => (
  <div className="cap-mock cap-chart">
    <div className="cm-bars">{[38, 55, 44, 72, 61, 88, 79].map((h, i) => <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }} />)}</div>
    <div className="cm-legend"><b>Today</b><span>Sales · Orders · Margin</span></div>
  </div>
);

const previews = [Chat, Call, Flow, Table, Build, Chart];

const CapabilityShowcase = () => {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (held) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setActive(a => (a + 1) % capabilities.length), 5200);
    return () => clearInterval(id);
  }, [held]);

  useEffect(() => {
    const el = trackRef.current?.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const Preview = previews[active];
  const cap = capabilities[active];

  return (
    <div className="cap-showcase" onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)}>
      <div className="cap-track" ref={trackRef} role="tablist" aria-label="What we do">
        {capabilities.map((c, i) => {
          const Icon = c.i;
          return (
            <button key={c.t} role="tab" aria-selected={i === active} className={`cap-item${i === active ? " is-active" : ""}`}
              onClick={() => { setActive(i); setHeld(true); }}>
              <Icon />
              <span><b>{c.t}</b><small>{c.tag}</small></span>
            </button>
          );
        })}
      </div>

      <div className="cap-stage" key={active}>
        <div className="cap-stage-head"><b>{cap.t}</b><span>{cap.d}</span></div>
        <Preview />
      </div>

      <div className="cap-dots" aria-hidden="true">
        {capabilities.map((c, i) => <i key={c.t} className={i === active ? "on" : ""} onClick={() => { setActive(i); setHeld(true); }} />)}
      </div>
    </div>
  );
};

export default CapabilityShowcase;
