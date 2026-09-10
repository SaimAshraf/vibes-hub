import { ArrowRight, Bot, Boxes, Factory, MessagesSquare, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, Eyebrow, NexPosScreen, ProductLink } from "@/components/nexivo/Visuals";
import { products } from "@/data/products";
import hospitality from "@/assets/nexivo-hospitality.jpg";
import factory from "@/assets/nexivo-factory.jpg";
import aiOps from "@/assets/nexivo-ai-ops.jpg";

const Home = () => {
  document.title = "Nexivo — AI, Automation & Business Software";
  return <>
    <section className="home-hero">
      <div className="container hero-grid-new">
        <div className="hero-copy-new">
          <Eyebrow>AI · Automation · Business software</Eyebrow>
          <h1 className="display-title">Nexivo builds the systems behind <em>moving businesses.</em></h1>
          <p className="lede">From the first customer message to the final invoice, we connect intelligence with operations.</p>
          <div className="flex flex-wrap gap-3"><Button variant="hero" size="xl" asChild><a href="mailto:nexivoservices@gmail.com">Start a project <ArrowRight /></a></Button><Button variant="neon" size="xl" asChild><a href="/products/nexpos">Meet NexPos</a></Button></div>
        </div>
        <div className="hero-collage" aria-label="Nexivo connected business ecosystem">
          <img className="hero-photo-main" src={hospitality} alt="Restaurant team working around a connected point of sale" width={1600} height={1100} />
          <div className="hero-screen"><NexPosScreen compact /></div>
          <img className="hero-photo-secondary" src={aiOps} alt="Business team managing AI-driven customer operations" width={1600} height={1100} />
          <div className="floating-note"><Bot /><span><b>AI agent</b>Lead qualified</span></div>
        </div>
      </div>
      <div className="container hero-index"><span>01 — Intelligence</span><span>02 — Automation</span><span>03 — Software</span></div>
    </section>

    <section className="section container flagship-grid">
      <div className="flagship-photo"><img src={hospitality} alt="Busy modern restaurant service powered by NexPos" loading="lazy" width={1600} height={1100} /><span>Flagship product</span></div>
      <div className="flagship-copy"><Eyebrow>NexPos by Nexivo</Eyebrow><h2 className="section-title">Hospitality software that knows the dinner rush.</h2><p className="lede">POS, kitchen, recipes, stock, tax compliance and owner reporting—built together for food businesses in Pakistan.</p><ProductLink to="/products/nexpos">Enter NexPos</ProductLink></div>
      <div className="flagship-ui"><NexPosScreen /></div>
    </section>

    <section className="section section-contrast">
      <div className="container"><div className="section-heading"><div><Eyebrow>The connected company</Eyebrow><h2 className="section-title">One studio. Every operational layer.</h2></div><p>We do not drop another disconnected tool into your business. We design the links between conversations, decisions and daily work.</p></div>
        <div className="flow-line">
          {[{i:MessagesSquare,t:'Customer speaks'},{i:Bot,t:'AI understands'},{i:Boxes,t:'Workflow acts'},{i:ShoppingBag,t:'Business fulfils'}].map(({i:Icon,t})=><div key={t}><Icon/><span>{t}</span></div>)}
        </div>
      </div>
    </section>

    <section className="section container">
      <div className="section-heading"><div><Eyebrow>Product universe</Eyebrow><h2 className="section-title">Software shaped around real work.</h2></div><ProductLink to="/products">View every product</ProductLink></div>
      <div className="product-mosaic">
        {products.map((p,i)=><article className={`product-story story-${i+1}`} key={p.slug}><img src={p.image} alt={`${p.name} for ${p.audience}`} loading="lazy" width={1600} height={1100}/><div><small>{p.descriptor}</small><h3>{p.name}</h3><p>{p.promise}</p><ProductLink to={`/products/${p.slug}`}>Explore</ProductLink></div></article>)}
      </div>
    </section>

    <section className="section container visual-case">
      <img src={factory} alt="Connected factory floor using Nexivo software" loading="lazy" width={1600} height={1100}/>
      <div className="case-caption"><Eyebrow>From floor to forecast</Eyebrow><h2>We turn operational complexity into one clear view.</h2><ProductLink to="/work">See our portfolio</ProductLink></div>
      <div className="case-metric"><Factory/><b>Production traced</b><span>Material → recipe → batch → report</span></div>
    </section>
    <ContactBand />
  </>;
};
export default Home;