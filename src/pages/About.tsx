import { ContactBand, Eyebrow, PageIntro } from "@/components/nexivo/Visuals";
import aiOps from "@/assets-pointers/nexivo-ai-ops.jpg.asset.json";

const About=()=>{document.title="About Nexivo — Connected Business Systems";return <>
 <PageIntro label="About Nexivo" title={<>We build outcomes.<br/><em>The technology follows.</em></>} copy="Nexivo is an AI, automation and business software company creating systems that help businesses acquire customers, serve them and operate with less manual effort."/>
 <section className="container about-image"><img src={aiOps.url} alt="Nexivo team collaborating on connected business systems" width={1600} height={1100}/><div><span>NEXT</span><span>VISION</span><span>ORGANIZATION</span></div></section>
 <section className="section container manifesto"><Eyebrow>Our point of view</Eyebrow><p>Traditional development sits underneath what we build, but it is not what we lead with. We connect the customer conversation to the operational system—and measure the result in work that no longer needs chasing.</p></section>
 <section className="section section-contrast"><div className="container principles">{[["01","Outcome first","Start with the work that should move faster."],["02","Connected by design","No isolated tools or dead-end data."],["03","Built for reality","Local context, pressure-tested workflows."],["04","Clear over clever","Powerful systems should still feel obvious."]].map(x=><article key={x[0]}><b>{x[0]}</b><h2>{x[1]}</h2><p>{x[2]}</p></article>)}</div></section>
 <ContactBand/>
 </>};
export default About;