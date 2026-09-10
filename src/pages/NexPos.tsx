import { ArrowUpRight, ChefHat, CloudOff, MapPinCheck, MessageCircleMore, MonitorSmartphone, ReceiptText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, Eyebrow, FeatureList, NexPosScreen, OfflineBadge } from "@/components/nexivo/Visuals";
import { SocialRow } from "@/components/nexivo/Socials";
import { liveSites, nexposSocials } from "@/data/site";
import hospitality from "@/assets/nexivo-hospitality.jpg";

const SiteButton = ({ label = "Visit nexposltd.com", variant = "hero", className = "" }: { label?: string; variant?: any; className?: string }) => (
  <Button variant={variant} size="lg" className={className} asChild>
    <a href={liveSites.nexpos} target="_blank" rel="noopener noreferrer">{label} <ArrowUpRight className="size-4" /></a>
  </Button>
);

const groups = [
  ["Core operations", "POS & billing", "Table management", "Kitchen display", "Recipe costing"],
  ["Guest experience", "QR ordering", "3D interactive menu", "Loyalty & rewards", "Promotions"],
  ["Operations & growth", "Multi-branch", "Delivery & riders", "Shift management", "Central reporting"],
  ["Inventory & finance", "Live inventory", "Reorder alerts", "Accounting", "Expense tracking"],
  ["Compliance", "FBR integration", "PRA integration", "Tax-ready invoices"],
  ["Connected & mobile", "Mobile access", "WhatsApp owner report", "Offline operation"],
];
const plans = [
  {n:"Essential",a:"Single-counter cafés",p:"Rs 2,999",f:["POS & compliant billing","Core inventory","Fast counter workflows"]},
  {n:"Pro",a:"Growing restaurants",p:"Rs 7,999",f:["Tables and kitchen routing","Recipe costing","Mobile app access"]},
  {n:"Enterprise",a:"Multi-branch groups",p:"Rs 12,999",f:["Multi-branch control","Delivery management","WhatsApp owner report"]},
];

const NexPos = () => {
  const { open } = useLetsTalk();
  document.title = "NexPos — Restaurant & Café POS by Nexivo";
  return <>
    <section className="nexpos-hero">
      <img src={hospitality} alt="NexPos running inside a busy restaurant kitchen" width={1600} height={1100}/>
      <div className="nexpos-shade" />
      <div className="container nexpos-hero-copy"><Eyebrow>NexPos · by Nexivo</Eyebrow><h1 className="display-title">Built for hospitality.<br/><em>Not adapted from retail.</em></h1><p className="lede">A complete POS and business platform for restaurants, cafés and food businesses across Pakistan.</p><LetsTalkButton>Request your demo</LetsTalkButton></div>
      <div className="nexpos-float-screen"><NexPosScreen /><OfflineBadge /></div>
    </section>

    <section className="section container">
      <div className="section-heading"><div><Eyebrow>Why NexPos</Eyebrow><h2 className="section-title">The floor moves fast.<br/>Your system should too.</h2></div><p>Every workflow is designed for the daily rhythm of hospitality—from the first order to the owner’s end-of-day view.</p></div>
      <div className="icon-features">{[[ReceiptText,"Tax compliant","FBR and provincial integrations from day one"],[CloudOff,"Offline resilient","Keep billing while connectivity is down"],[ChefHat,"Hospitality native","Tables, kitchen tickets and recipe costing"],[MessageCircleMore,"Owner visibility","Daily sales summaries on WhatsApp"],[MapPinCheck,"Local support","People who understand the Pakistani market"],[MonitorSmartphone,"Grows with you","Single counter to multi-branch control"]].map(([I,t,c])=>{const Icon=I as typeof ChefHat;return <article key={String(t)}><Icon/><h3>{t as string}</h3><p>{c as string}</p></article>})}</div>
    </section>

    <section className="section section-contrast"><div className="container"><Eyebrow>22 modules · one platform</Eyebrow><h2 className="section-title max-w-3xl">Counter, kitchen, stockroom and office—finally in sync.</h2><div className="module-groups">{groups.map(g=><article key={g[0]}><h3>{g[0]}</h3><FeatureList items={g.slice(1)}/></article>)}</div></div></section>

    <section className="section container"><div className="section-heading"><div><Eyebrow>Plans</Eyebrow><h2 className="section-title">Start where you are. Grow without switching.</h2></div><p>Monthly pricing in Pakistani Rupees. Annual billing savings are available.</p></div><div className="pricing-grid">{plans.map((p,i)=><article className={i===1?'featured':''} key={p.n}><small>{p.a}</small><h3>{p.n}</h3><strong>{p.p}<span>/ month</span></strong><FeatureList items={p.f}/><Button variant={i===1?'hero':'neon'} className="w-full" onClick={open}>Choose {p.n}</Button></article>)}</div></section>
    <section className="section container journey"><Eyebrow>Guided implementation</Eyebrow><h2 className="section-title">From your menu to your first live shift.</h2><div>{["Discovery call","Configuration","Data migration","Team training","Go live & support"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div></section>
    <ContactBand title="See NexPos live on your own menu." />
  </>;
};
export default NexPos;