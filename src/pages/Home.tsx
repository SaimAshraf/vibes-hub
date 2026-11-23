import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLetsTalk } from "@/components/nexivo/LetsTalk";
import { PHONE_TEL, nexivoSocials } from "@/data/site";
import "@/styles/home.css";

import mark from "@/assets/home/nexivo-mark.png";
import orb from "@/assets/home/orb.webp";
import flow from "@/assets/home/flow.webp";
import chip from "@/assets/home/chip.webp";
import restaurant from "@/assets/home/restaurant.webp";
import workWorqwize from "@/assets/home/work-worqwize.webp";
import npWordmark from "@/assets/home/nexpos-wordmark.png";
import npDashboard from "@/assets/home/nexpos-dashboard.webp";
import burger from "@/assets/home/burger.webp";
import wings from "@/assets/home/wings.webp";
import chilli from "@/assets/home/chilli.webp";
import coke from "@/assets/home/coke.webp";
import mint from "@/assets/home/mint.webp";
import siteWall from "@/assets/home/site-wall.webp";
import wFood from "@/assets/home/w-food.webp";
import wRetail from "@/assets/home/w-retail.webp";
import wTeam from "@/assets/home/w-team.webp";

const WHATSAPP = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}`;

/* ---------- small inline icons (no extra bundle weight) ---------- */
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
);
const IconArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
);
const IconRecover = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg>
);

/* ==========================================================
   HERO — slow wall of websites
   The wall is one pre-rendered image (42 sample sites) that slides
   on a single GPU layer: smooth even on low-end phones.
   ========================================================== */
const serif = "'Instrument Serif', Georgia, serif";

const SiteWall = memo(() => (
  <div className="nxh-wall" aria-hidden="true">
    <div className="nxh-wall-plane">
      <div className="nxh-wall-strip" style={{ backgroundImage: `url(${siteWall})` }} />
    </div>
  </div>
));
SiteWall.displayName = "SiteWall";

const Hero = () => {
  const { open } = useLetsTalk();
  return (
    <section className="nxh-hero" id="top">
      <SiteWall />
      <div className="nxh-hero-veil" aria-hidden="true" />
      <div className="nxh-hero-fade" aria-hidden="true" />
      <div className="nxh-hero-in">
        <h1 aria-label="Nexivo">
          <span className="nxh-mark" style={{ margin: "0 auto" }}><img src={mark} alt="" width={310} height={400} /></span>
          <span className="nxh-word-wrap">
            <span className="nxh-word-glow" aria-hidden="true" />
            <span className="nxh-word">NEXIVO</span>
          </span>
        </h1>
        <p className="nxh-tagline">We build the <em className="nxh-grad-text">agents</em> that run your business.</p>
        <div className="nxh-hero-ctas">
          <button type="button" className="nxh-btn nxh-btn--grad" onClick={open}><IconMail />Let’s talk</button>
          <a className="nxh-btn nxh-btn--glass" href={WHATSAPP} target="_blank" rel="noreferrer"><IconWhatsApp />WhatsApp us</a>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================
   WHAT WE BUILD — 3 cards; swipe carousel on phones
   ========================================================== */
const Tags = ({ items }: { items: string[] }) => (
  <div className="nxh-tags">{items.map((t) => <span key={t}>{t}</span>)}</div>
);

const Build = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // Only state change is the active index, found with IntersectionObserver —
  // no scroll listener, no re-render while the finger is moving.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof IntersectionObserver === "undefined") return;
    const cards = Array.from(track.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root: track, threshold: 0.6 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const isActive = (i: number) => String(active === i);

  return (
    <section className="nxh-wrap nxh-build-sec" id="services">
      <div className="nxh-head">
        <h2 className="nxh-h2">What we <em className="nxh-teal">build.</em></h2>
        <span className="nxh-kicker">01 / Capabilities</span>
      </div>

      <div className="nxh-build" ref={trackRef}>
        {/* AI agents */}
        <Link to="/services" className="nxh-card nxh-card--ai" data-index={0} data-active={isActive(0)}>
          <img className="nxh-card-bg" src={orb} alt="" loading="lazy" decoding="async" />
          <div className="nxh-card-shade" />
          <span className="nxh-card-num">01</span>
          <div className="nxh-chip nxh-float">
            <span className="nxh-chip-ico"><IconRecover /></span>
            <span><b>Missed call recovered</b><span>Automation · follow-up sent</span></span>
          </div>
          <div className="nxh-card-foot">
            <Tags items={["Chat agents", "Voice bots", "Automations"]} />
            <div className="nxh-card-title">
              <h3>AI <em className="nxh-teal">agents</em></h3>
              <span className="nxh-arrow" aria-hidden="true"><IconArrow /></span>
            </div>
          </div>
        </Link>

        {/* Business software */}
        <Link to="/services" className="nxh-card nxh-card--biz" data-index={1} data-active={isActive(1)}>
          <img className="nxh-card-bg" src={chip} alt="" loading="lazy" decoding="async" />
          <div className="nxh-card-shade" />
          <span className="nxh-card-num">02</span>
          <div className="nxh-app nxh-float-2" aria-hidden="true">
            <div className="nxh-app-win">
              <div className="nxh-app-side">
                <img src={mark} alt="" />
                <i className="on" /><i /><i /><i />
              </div>
              <div className="nxh-app-main">
                <div className="nxh-app-top"><span>Orders</span><span className="nxh-live">● Live</span></div>
                <div className="nxh-app-kpis">
                  <div><small>Revenue</small><b>284.5k</b></div>
                  <div><small>Orders</small><b>128</b></div>
                  <div><small>Growth</small><b style={{ color: "#B8FF3D" }}>+12%</b></div>
                </div>
                <div className="nxh-app-table">
                  <div className="nxh-app-row nxh-app-row--head"><span>Order</span><span>Amount</span><span>Status</span></div>
                  <div className="nxh-app-row"><span>#4821</span><span>PKR 6,400</span><span style={{ color: "#B8FF3D" }}>Paid</span></div>
                  <div className="nxh-app-row"><span>#4820</span><span>PKR 2,150</span><span style={{ color: "#17DECA" }}>Packed</span></div>
                  <div className="nxh-app-row nxh-app-row--m-hide"><span>#4819</span><span>PKR 9,800</span><span style={{ color: "#17DECA" }}>Shipped</span></div>
                  <div className="nxh-app-row nxh-app-row--m-hide"><span>#4818</span><span>PKR 1,250</span><span style={{ color: "#FF4D5E" }}>Low stock</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="nxh-card-foot">
            <Tags items={["POS & ERP", "Inventory", "Data & dashboards"]} />
            <div className="nxh-card-title">
              <h3>Business <em className="nxh-teal">software</em></h3>
              <span className="nxh-arrow" aria-hidden="true"><IconArrow /></span>
            </div>
          </div>
        </Link>

        {/* Websites */}
        <Link to="/services" className="nxh-card nxh-card--web" data-index={2} data-active={isActive(2)}>
          <img className="nxh-card-bg" src={flow} alt="" loading="lazy" decoding="async" />
          <div className="nxh-card-shade" />
          <div className="nxh-web-copy">
            <span className="nxh-card-num">03</span>
            <h3>Websites that <em className="nxh-grad-text">move.</em></h3>
            <Tags items={["3D & motion", "Shopify & e-commerce", "Web apps"]} />
          </div>
          <div className="nxh-stack nxh-float" aria-hidden="true">
            <div className="nxh-win nxh-win--back-l">
              <div className="nxh-win-bar" style={{ background: "#1a1a1a" }}><i /><i /><i /></div>
              <div className="nxh-win-body">
                <img src={wRetail} alt="" loading="lazy" style={{ filter: "brightness(.55) saturate(.8)" }} />
                <div style={{ position: "absolute", left: 18, top: 18, display: "flex", flexDirection: "column", gap: 8, color: "#F5F5F5" }}>
                  <b style={{ fontSize: 11, letterSpacing: ".3em", fontWeight: 600 }}>MAISON</b>
                  <span style={{ fontFamily: serif, fontSize: 30, lineHeight: 0.95, marginTop: 50 }}>The winter<br />edit.</span>
                  <span style={{ alignSelf: "flex-start", padding: "6px 12px", background: "#C8A97E", color: "#111", fontSize: 10, fontWeight: 700 }}>Shop now</span>
                </div>
              </div>
            </div>
            <div className="nxh-win nxh-win--back-r">
              <div className="nxh-win-bar" style={{ background: "#0f221d" }}><i style={{ background: "#2b4a42" }} /><i style={{ background: "#2b4a42" }} /><i style={{ background: "#2b4a42" }} /></div>
              <div className="nxh-win-body">
                <img src={wTeam} alt="" loading="lazy" style={{ filter: "brightness(.5)" }} />
                <div style={{ position: "absolute", left: 18, right: 18, top: 18, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, color: "#EFFFF8", textAlign: "right" }}>
                  <b style={{ fontSize: 12, fontWeight: 600 }}>Bloom Health</b>
                  <span style={{ fontFamily: serif, fontSize: 28, lineHeight: 0.95, marginTop: 46 }}>Care that<br />answers.</span>
                  <span style={{ padding: "6px 12px", borderRadius: 9999, background: "#6FE3B5", color: "#062018", fontSize: 10, fontWeight: 700 }}>Book a visit</span>
                </div>
              </div>
            </div>
            <div className="nxh-win nxh-win--front">
              <div className="nxh-win-bar" style={{ background: "#120c08", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                <i style={{ background: "#FF4D5E" }} /><i style={{ background: "#3a3028" }} /><i style={{ background: "#3a3028" }} />
                <span className="nxh-url">korakitchen.pk</span>
              </div>
              <div className="nxh-win-body">
                <img src={wFood} alt="" loading="lazy" style={{ filter: "brightness(.6) saturate(.9)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(20,12,8,.85) 0%, rgba(20,12,8,.2) 70%)" }} />
                <div style={{ position: "absolute", left: 22, right: 22, top: 14, display: "flex", justifyContent: "space-between", fontSize: 10, color: "#F6EDE3" }}>
                  <b style={{ fontFamily: serif, fontSize: 16, fontWeight: 400 }}>Kora Kitchen</b>
                  <span style={{ display: "flex", gap: 14, opacity: 0.75 }}><span>Menu</span><span>Story</span><span>Visit</span></span>
                </div>
                <div style={{ position: "absolute", left: 22, top: 60, display: "flex", flexDirection: "column", gap: 10, color: "#F6EDE3", maxWidth: 260 }}>
                  <span style={{ fontSize: 9, letterSpacing: ".16em", textTransform: "uppercase", color: "#F2B544" }}>Lahore · since 2019</span>
                  <span style={{ fontFamily: serif, fontSize: 40, lineHeight: 0.92 }}>Fire, smoke &amp; <em>slow food.</em></span>
                  <span style={{ alignSelf: "flex-start", padding: "8px 16px", borderRadius: 9999, background: "#F2B544", color: "#1A120D", fontSize: 11, fontWeight: 700 }}>Reserve a table</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="nxh-dots" aria-hidden="true">
        {[0, 1, 2].map((i) => <i key={i} className={active === i ? "on" : ""} />)}
      </div>
    </section>
  );
};

/* ==========================================================
   NEXPOS
   ========================================================== */
const NexPos = () => (
  <section className="nxh-wrap nxh-np-sec" id="nexpos">
    <div className="nxh-np">
      <div className="nxh-np-glow" aria-hidden="true" />
      <div className="nxh-np-copy">
        <img src={npWordmark} alt="NexPOS — every operation, one platform" width={220} height={51} loading="lazy" />
        <span className="nxh-np-pill"><i />fresh orders, zero chaos</span>
        <h2>Restaurant POS built for <span>Pakistan.</span></h2>
        <p className="nxh-np-lede">Guests order from the table. Your kitchen gets the ticket before the waiter turns around.</p>
        <div className="nxh-np-cta">
          <Link to="/products/nexpos" className="nxh-btn nxh-btn--red nxh-btn--lg">Explore NexPOS <IconArrowUpRight /></Link>
          <span>from <b>Rs. 2,999</b>/month</span>
        </div>
        <div className="nxh-np-stats">
          <div><b>40+</b><span>screens</span></div>
          <div><b>3</b><span>portals</span></div>
          <div><b>5</b><span>staff roles</span></div>
          <div><b style={{ color: "#E3372D" }}>&lt;500ms</b><span>live sync</span></div>
        </div>
      </div>
      <div className="nxh-np-art">
        <img className="nxh-np-dash" src={npDashboard} alt="NexPOS restaurant dashboard with live floor, kitchen and orders" loading="lazy" decoding="async" />
        <img className="nxh-food nxh-food--wings nxh-float" src={wings} alt="" loading="lazy" />
        <img className="nxh-food nxh-food--burger nxh-float-2" src={burger} alt="" loading="lazy" />
        <img className="nxh-food nxh-food--chilli" src={chilli} alt="" loading="lazy" />
        <img className="nxh-food nxh-food--coke nxh-float-2" src={coke} alt="" loading="lazy" />
        <img className="nxh-food nxh-food--mint" src={mint} alt="" loading="lazy" />
      </div>
    </div>
  </section>
);

/* ==========================================================
   OUR WORK — 2 featured; full list lives on /work
   ========================================================== */
const OurWork = () => (
  <section className="nxh-wrap nxh-work-sec" id="work">
    <div className="nxh-head">
      <h2 className="nxh-h2">Our <em className="nxh-teal">work.</em></h2>
      <Link to="/work" className="nxh-btn nxh-btn--ghost">See all our work <IconArrow /></Link>
    </div>
    <div className="nxh-works">
      <a className="nxh-work" href="https://site.worqwize.com" target="_blank" rel="noreferrer">
        <div className="nxh-work-img">
          <img src={workWorqwize} alt="WorqWize homepage" loading="lazy" decoding="async" style={{ objectPosition: "top left" }} />
          <span className="nxh-work-tag">Website</span>
        </div>
        <div className="nxh-work-info">
          <div><h3>WorqWize</h3><p>Field-service platform · homepage redesign</p></div>
          <span className="nxh-arrow" aria-hidden="true"><IconArrowUpRight /></span>
        </div>
      </a>

      {/* Placeholder project — replace with a real client site before launch */}
      <Link className="nxh-work nxh-work--kora" to="/work">
        <div className="nxh-work-img">
          <div className="nxh-kora" aria-hidden="true">
            <img src={restaurant} alt="" loading="lazy" decoding="async" />
            <div className="nxh-kora-shade" />
            <div className="nxh-kora-nav"><b>Kora Kitchen</b><span><span>Menu</span><span>Story</span><span>Visit</span><em>Order online</em></span></div>
            <div className="nxh-kora-copy">
              <small>Lahore · since 2019</small>
              <strong>Fire, smoke &amp; <em>slow food.</em></strong>
              <i>Reserve a table</i>
            </div>
          </div>
          <span className="nxh-work-tag">Website</span>
        </div>
        <div className="nxh-work-info">
          <div><h3>Kora Kitchen</h3><p>Restaurant website · online reservations</p></div>
          <span className="nxh-arrow" aria-hidden="true"><IconArrowUpRight /></span>
        </div>
      </Link>
    </div>
  </section>
);

/* ==========================================================
   LET'S TALK
   ========================================================== */
const Cta = () => {
  const { open } = useLetsTalk();
  return (
    <section className="nxh-wrap nxh-cta-sec" id="contact">
      <div className="nxh-cta">
        <img src={flow} alt="" loading="lazy" decoding="async" />
        <div className="nxh-cta-in">
          <h2>Let’s <em className="nxh-grad-text">talk.</em></h2>
          <p>Tell us what eats your team’s day.</p>
          <div className="nxh-cta-btns">
            <button type="button" className="nxh-btn nxh-btn--grad nxh-btn--lg" onClick={open}><IconMail />Let’s talk</button>
            <a className="nxh-btn nxh-btn--glass nxh-btn--lg" href={WHATSAPP} target="_blank" rel="noreferrer"><IconWhatsApp />WhatsApp us</a>
            <a className="nxh-btn nxh-btn--ghost nxh-btn--lg" href={nexivoSocials.instagram} target="_blank" rel="noreferrer" style={{ borderColor: "rgba(242,245,247,.35)", background: "rgba(14,16,22,.55)" }}>DM us on Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = "Nexivo — AI, Automation & Business Software";
  }, []);
  return (
    <div className="nxh">
      <Hero />
      <Build />
      <NexPos />
      <OurWork />
      <Cta />
    </div>
  );
};

export default Home;
