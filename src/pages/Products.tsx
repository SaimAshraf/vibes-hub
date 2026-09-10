import { ContactBand, PageIntro, ProductLink } from "@/components/nexivo/Visuals";
import { products } from "@/data/products";
import hospitality from "@/assets-pointers/nexivo-hospitality.jpg.asset.json";

const Products=()=>{document.title="Business Software Products — Nexivo";return <>
  <PageIntro label="Nexivo products" title={<>Built for the work.<br/><em>Not the category.</em></>} copy="A family of connected operating systems shaped around restaurants, commerce, institutions and production floors."/>
  <section className="container products-lead"><img src={hospitality.url} alt="Hospitality business running Nexivo software" width={1600} height={1100}/><div><small>Flagship / 01</small><h2>NexPos</h2><p>Restaurant and café POS built around service pressure, local compliance and owner visibility.</p><ProductLink to="/products/nexpos">Explore NexPos</ProductLink></div></section>
  <section className="section container product-index">{products.map((p,i)=><article key={p.slug}><span>0{i+2}</span><img src={p.image} alt={`${p.name} product environment`} loading="lazy" width={1600} height={1100}/><div><small>{p.audience}</small><h2>{p.name}</h2><p>{p.promise}</p><ProductLink to={`/products/${p.slug}`}>Open product</ProductLink></div></article>)}</section>
  <ContactBand />
 </>};
export default Products;