import { ContactBand, Eyebrow, PageIntro, ProductLink } from "@/components/nexivo/Visuals";
import hospitality from "@/assets/nexivo-hospitality.jpg";
import factory from "@/assets/nexivo-factory.jpg";
import commerce from "@/assets/nexivo-commerce.jpg";
import aiOps from "@/assets/nexivo-ai-ops.jpg";

const cases=[
 {tag:"Hospitality systems",title:"A restaurant operation, seen as one connected service.",image:hospitality,to:"/products/nexpos",detail:"Product demonstration · NexPos"},
 {tag:"Production control",title:"Traceability from ingredient to finished batch.",image:factory,to:"/products/fms",detail:"Product demonstration · FMS / PIMS"},
 {tag:"Commerce operations",title:"Orders and fulfilment without the spreadsheet relay.",image:commerce,to:"/products/bizzops",detail:"Product demonstration · BizzOps"},
 {tag:"AI transformation",title:"Customer conversations that continue into action.",image:aiOps,to:"/services",detail:"Solution capability · AI + automation"},
];
const WorkPage=()=>{document.title="Work & Product Demonstrations — Nexivo";return <><PageIntro label="Selected work" title={<>Systems you can <em>see working.</em></>} copy="Visual product demonstrations across hospitality, production, commerce and customer operations."/><section className="section container work-grid">{cases.map((c,i)=><article className={i%3===0?'wide':''} key={c.title}><img src={c.image} alt={c.title} loading={i?'lazy':'eager'} width={1600} height={1100}/><div><Eyebrow>{c.tag}</Eyebrow><h2>{c.title}</h2><small>{c.detail}</small><ProductLink to={c.to}>View system</ProductLink></div></article>)}</section><ContactBand/></>};
export default WorkPage;