import { ArrowRight, Bot, Boxes, BrainCircuit, Factory, Gauge, MessagesSquare, PhoneCall, ShieldCheck, ShoppingBag, Sparkles, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, Eyebrow, NexPosScreen, ProductLink } from "@/components/nexivo/Visuals";
import { Reveal, SmartImage } from "@/components/nexivo/Motion";
import { products } from "@/data/products";
import hospitality from "@/assets/nexivo-hospitality.jpg";
import factory from "@/assets/nexivo-factory.jpg";
import aiOps from "@/assets/nexivo-ai-ops.jpg";

const capabilities = [
  { i: BrainCircuit, t: "AI agents", d: "Chat, sales and support agents that answer, qualify and act on their own." },
  { i: PhoneCall, t: "Voice bots", d: "AI receptionists that pick up, book appointments and follow up by call." },
  { i: Workflow, t: "Automation", d: "WhatsApp, CRM, invoicing and reporting workflows stitched end to end." },
  { i: Boxes, t: "Business software", d: "POS, ERP, inventory, dashboards and portals built for your operation." },
  { i: Sparkles, t: "Custom builds", d: "Web apps, mobile apps, SaaS products and internal tools from scratch." },
  { i: Gauge, t: "Data & reporting", d: "Live numbers owners actually read—on screen or straight to WhatsApp." },
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
          <h1 className="display-title">Nexivo builds the systems behind <em>moving businesses.</em></h1>
          <p className="lede">From the first customer message to the final invoice, we connect intelligence with operations.</p>
          <div className="flex flex-wrap gap-3"><Button variant="hero" size="xl" asChild><a href="mailto:nexivoservices@gmail.com">Start a project <ArrowRight /></a></Button><Button variant="neon" size="xl" asChild><a href="/products/nexpos">Meet NexPos</a></Button></div>
        </div>
        <div className="hero-collage float-slow" aria-label="Nexivo connected business ecosystem">
          <SmartImage wrapperClassName="hero-photo-main" className="hero-photo-main" src={hospitality} alt="Restaurant team working around a connected point of sale" width={1600} height={1100} />
          <div className="hero-screen"><NexPosScreen compact /></div>
          <SmartImage wrapperClassName="hero-photo-secondary" className="hero-photo-secondary" src={aiOps} alt="Business team managing AI-driven customer operations" loading="lazy" width={1600} height={1100} />
          <div className="floating-note"><Bot /><span><b>AI agent</b>Lead qualified</span></div>
        </div>
      </div>
      <div className="container hero-index"><span>01 — Intelligence</span><span>02 — Automation</span><span>03 — Software</span></div>
    </section>

    <section className="section container">
      <Reveal className="section-heading"><div><Eyebrow>What we do</Eyebrow><h2 className="section-title">Intelligence, automation and software—under one roof.</h2></div><p>Six capabilities we combine into one working system for your business, instead of six tools you have to babysit.</p></Reveal>
      <div className="cap-grid">
        {capabilities.map(({ i: Icon, t, d }, n) => (
          <Reveal key={t} delay={n * 70} className="cap-card"><Icon /><h3>{t}</h3><p>{d}</p></Reveal>
        ))}
      </div>
      <Reveal delay={120}><ProductLink to="/services">See all services</ProductLink></Reveal>
    </section>

    <section className="section container flagship-grid">
      <Reveal className="flagship-photo"><SmartImage src={hospitality} alt="Busy modern restaurant service powered by NexPos" loading="lazy" width={1600} height={1100} /><span>Flagship product</span></Reveal>
      <Reveal delay={90} className="flagship-copy"><Eyebrow>NexPos by Nexivo</Eyebrow><h2 className="section-title">Hospitality software that knows the dinner rush.</h2><p className="lede">POS, kitchen, recipes, stock, tax compliance and owner reporting—built together for food businesses in Pakistan.</p><ProductLink to="/products/nexpos">Enter NexPos</ProductLink></Reveal>
      <Reveal delay={160} className="flagship-ui"><NexPosScreen /></Reveal>
    </section>

    <section className="section section-contrast">
      <div className="container"><Reveal className="section-heading"><div><Eyebrow>The connected company</Eyebrow><h2 className="section-title">One studio. Every operational layer.</h2></div><p>We do not drop another disconnected tool into your business. We design the links between conversations, decisions and daily work.</p></Reveal>
        <div className="flow-line">
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
