import { Bot, Boxes, Factory, MessagesSquare, ShoppingBag } from "lucide-react";
import { AutomationPanel, ContactBand, Eyebrow, NexPosScreen, ProductLink } from "@/components/nexivo/Visuals";
import { LetsTalkButton } from "@/components/nexivo/LetsTalk";
import { Counter, Reveal, RotatingWord, SmartImage } from "@/components/nexivo/Motion";
import { Button } from "@/components/ui/button";
import CapabilityShowcase from "@/components/nexivo/CapabilityShowcase";
import { products } from "@/data/products";
import hospitality from "@/assets/nexivo-hospitality.jpg";
import factory from "@/assets/nexivo-factory.jpg";
import intelligence from "@/assets/nexivo-intelligence.jpg";
import team from "@/assets/nexivo-team.jpg";

const marquee = ["AI agents", "Voice bots", "WhatsApp automation", "POS & ERP", "Inventory sync", "Auto invoicing", "Live dashboards", "Custom software", "Lead follow-up", "Kitchen orders"];

const steps = [
  { n: "01", t: "Audit", d: "We map the repetitive work eating your team's day." },
  { n: "02", t: "Design", d: "We draw the flow: what triggers, what decides, what acts." },
  { n: "03", t: "Build", d: "Agents, automations and software shipped in short cycles." },
  { n: "04", t: "Run", d: "We monitor it live, tune it and keep it working after launch." },
];

const edge = [
  { t: "We ship systems, not demos", d: "Every build goes live in a real operation with real staff using it daily." },
  { t: "Built for Pakistan first", d: "Tax compliance, local support, offline resilience and WhatsApp-native workflows." },
  { t: "One connected stack", d: "Your agents, automations and software talk to each other instead of piling up." },
  { t: "Fast, senior delivery", d: "Small team, short cycles, direct access to the people building your product." },
];

const Home = () => {
  document.title = "Nexivo — AI, Automation & Business Software";
  return <>
    <section className="home-hero">
      <div className="container hero-grid-new">
        <div className="hero-copy-new stagger-in">
          <Eyebrow>AI · Automation · Business software</Eyebrow>
          <h1 className="display-title">We build the <em><RotatingWord words={["agents", "automations", "systems", "software"]} /></em> that run your business.</h1>
          <p className="lede">From the first customer message to the final invoice—work that used to need people watching it now runs itself.</p>
          <div className="flex flex-wrap gap-3"><LetsTalkButton>Let’s talk</LetsTalkButton><Button variant="neon" size="xl" asChild><a href="/products/nexpos">Meet NexPos</a></Button></div>
        </div>
        <div className="hero-collage float-slow" aria-label="Nexivo automation in motion">
          <SmartImage wrapperClassName="hero-photo-main" className="hero-photo-main" src={intelligence} alt="Layered data planes representing Nexivo's connected intelligence" width={1600} height={1100} />
          <div className="hero-screen"><AutomationPanel /></div>
          <SmartImage wrapperClassName="hero-photo-secondary" className="hero-photo-secondary" src={team} alt="Nexivo team monitoring automated business operations" loading="lazy" width={1600} height={1100} />
          <div className="floating-note"><Bot /><span><b>AI agent</b>Lead qualified · 0.8s</span></div>
        </div>
      </div>
      <div className="container hero-index"><span>01 — Intelligence</span><span>02 — Automation</span><span>03 — Software</span></div>
    </section>

    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{[...marquee, ...marquee].map((m, i) => <span key={i}>{m}<i>◆</i></span>)}</div>
    </div>

    <section className="section container">
      <div className="metric-row">
        <Reveal><b><Counter to={120} suffix="+" /></b><span>Systems shipped</span><em><i style={{width:"82%"}}/></em></Reveal>
        <Reveal delay={90}><b><Counter to={1.2} decimals={1} suffix="M" /></b><span>Hours automated</span><em><i style={{width:"68%"}}/></em></Reveal>
        <Reveal delay={180}><b><Counter to={99.7} decimals={1} suffix="%" /></b><span>Run success rate</span><em><i style={{width:"97%"}}/></em></Reveal>
        <Reveal delay={270}><b>24/7</b><span>Agents on duty</span><em><i style={{width:"100%"}}/></em></Reveal>
      </div>
    </section>

    <section className="section container">
      <Reveal className="section-heading"><div><Eyebrow>What we do</Eyebrow><h2 className="section-title">Intelligence, automation and software—under one roof.</h2></div><p>Six capabilities we combine into one working system for your business, instead of six tools you have to babysit.</p></Reveal>
      <CapabilityShowcase />
      <Reveal delay={120}><ProductLink to="/services">See all services</ProductLink></Reveal>
    </section>

    <section className="section container">
      <Reveal className="section-heading"><div><Eyebrow>How we work</Eyebrow><h2 className="section-title">Four steps from busywork to running by itself.</h2></div><p>Short cycles, visible progress, and a system that keeps working after we hand it over.</p></Reveal>
      <div className="step-rail">
        {steps.map((s, n) => <Reveal key={s.n} delay={n * 90} className="step-cell"><span>{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal>)}
      </div>
    </section>

    <section className="section container flagship-grid">
      <Reveal className="flagship-photo"><SmartImage src={hospitality} alt="Busy modern restaurant service powered by NexPos" loading="lazy" width={1600} height={1100} /><span>Flagship product</span></Reveal>
      <Reveal delay={90} className="flagship-copy"><Eyebrow>NexPos by Nexivo</Eyebrow><h2 className="section-title">Hospitality software that knows the dinner rush.</h2><p className="lede">POS, kitchen, recipes, stock, tax compliance and owner reporting—built together for food businesses in Pakistan.</p><ProductLink to="/products/nexpos">Enter NexPos</ProductLink></Reveal>
      <Reveal delay={160} className="flagship-ui"><NexPosScreen /></Reveal>
    </section>

    <section className="section section-contrast">
      <div className="container"><Reveal className="section-heading"><div><Eyebrow>The connected company</Eyebrow><h2 className="section-title">One studio. Every operational layer.</h2></div><p>We do not drop another disconnected tool into your business. We design the links between conversations, decisions and daily work.</p></Reveal>
        <div className="flow-line">
          <div className="flow-pulse" aria-hidden="true" />
          {[{i:MessagesSquare,t:'Customer speaks'},{i:Bot,t:'AI understands'},{i:Boxes,t:'Workflow acts'},{i:ShoppingBag,t:'Business fulfils'}].map(({i:Icon,t},n)=><Reveal key={t} delay={n*110}><Icon/><span>{t}</span></Reveal>)}
        </div>
      </div>
    </section>

    <section className="section container">
      <Reveal className="section-heading"><div><Eyebrow>Why Nexivo</Eyebrow><h2 className="section-title">What makes working with us different.</h2></div><p>No template agency output. We take responsibility for the system running after launch day.</p></Reveal>
      <div className="edge-grid">
        {edge.map((e, n) => (
          <Reveal key={e.t} delay={n * 80} className="edge-card"><span>0{n + 1}</span><h3>{e.t}</h3><p>{e.d}</p></Reveal>
        ))}
      </div>
    </section>

    <section className="section container">
      <Reveal className="section-heading"><div><Eyebrow>Product universe</Eyebrow><h2 className="section-title">Software shaped around real work.</h2></div><ProductLink to="/products">View every product</ProductLink></Reveal>
      <div className="product-mosaic">
        {products.map((p,i)=><Reveal as="article" delay={i*80} key={p.slug} className={`product-story story-${i+1}`}><SmartImage src={p.image} alt={`${p.name} for ${p.audience}`} loading="lazy" width={1600} height={1100}/><div><small>{p.descriptor}</small><h3>{p.name}</h3><p>{p.promise}</p><ProductLink to={`/products/${p.slug}`}>Explore</ProductLink></div></Reveal>)}
      </div>
    </section>

    <section className="section container visual-case">
      <SmartImage src={factory} alt="Connected factory floor using Nexivo software" loading="lazy" width={1600} height={1100}/>
      <Reveal className="case-caption"><Eyebrow>From floor to forecast</Eyebrow><h2>We turn operational complexity into one clear view.</h2><ProductLink to="/work">See our portfolio</ProductLink></Reveal>
      <div className="case-metric"><Factory/><b>Production traced</b><span>Material → recipe → batch → report</span></div>
    </section>
    <ContactBand />
  </>;
};
export default Home;
