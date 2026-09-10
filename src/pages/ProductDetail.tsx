import { useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ContactBand, Eyebrow, FeatureList, ProductLink } from "@/components/nexivo/Visuals";
import { LetsTalkButton } from "@/components/nexivo/LetsTalk";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(item => item.slug === slug);
  if (!product) return <NotFound />;
  document.title = `${product.name} — Nexivo`;

  return <>
    <section className="product-hero container">
      <div className="product-hero-copy">
        <Eyebrow>{product.audience}</Eyebrow>
        <p className="text-sm text-muted-foreground">{product.descriptor}</p>
        <h1 className="display-title">{product.name}</h1>
        <p className="lede">{product.promise}</p>
      <div className="mt-6">
        {product.site ? (
          <Button variant="hero" size="lg" asChild>
            <a href={product.site} target="_blank" rel="noopener noreferrer">
              Visit {product.site.replace("https://", "")} <ArrowUpRight className="size-4" />
            </a>
          </Button>
        ) : (
          <LetsTalkButton size="lg">Talk to us about {product.name}</LetsTalkButton>
        )}
      </div>
      </div>
      <div className="product-photo-wrap">
        <img src={product.image} alt={`${product.audience} using connected operations software`} width={1600} height={1100} />
        <div className="interface-overlay">
          <span>Operations overview</span><strong>12 connected modules</strong>
          <div className="mini-chart">{[36,64,49,82,71,94].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
        </div>
      </div>
    </section>
    <section className="section container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div><Eyebrow>One source of truth</Eyebrow><h2 className="section-title">Every moving part, connected.</h2><p className="lede mt-5">{product.timeline}. Designed around the people doing the work, with management visibility built in.</p></div>
      <div className="module-grid">{product.modules.map((m,i)=><div className="module-cell" key={m}><small>{String(i+1).padStart(2,'0')}</small><span>{m}</span></div>)}</div>
    </section>
    <section className="section section-contrast"><div className="container grid gap-10 md:grid-cols-2"><div><Eyebrow>Built for pressure</Eyebrow><h2 className="section-title">Control without complexity.</h2></div><FeatureList items={product.strengths} /></div></section>
    {product.pricing && (
      <section className="section container">
        <Eyebrow>Investment</Eyebrow>
        <h2 className="section-title">Simple, transparent pricing.</h2>
        <div className="pricing-block">
          {product.pricing.setup && (
            <article><small>One-time · setup & onboarding</small><strong>{product.pricing.setup}</strong><span>one-time payment</span></article>
          )}
          <article className="featured"><small>Recurring · all modules included</small><strong>{product.pricing.monthly}</strong><span>per month</span><FeatureList items={product.pricing.includes} /></article>
        </div>
        <p className="text-sm text-muted-foreground mt-6 max-w-2xl">{product.pricing.note}</p>
      </section>
    )}
    <section className="section container"><ProductLink to="/products">Explore the full product ecosystem</ProductLink></section>
    <ContactBand title={`See ${product.name} working around your operation.`} />
  </>;
};

export default ProductDetail;