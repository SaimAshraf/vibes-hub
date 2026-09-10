import { Bot, Cable, ChartNoAxesCombined, MessagesSquare, PhoneCall, Workflow } from "lucide-react";
import { ContactBand, Eyebrow, PageIntro } from "@/components/nexivo/Visuals";
import aiOps from "@/assets/nexivo-ai-ops.jpg";

const pillars = [
  {icon:MessagesSquare,title:"Conversational AI",copy:"Chatbots and customer-service agents for web, WhatsApp, Instagram and Facebook.",items:["Multilingual support","Knowledge-base answers","Human escalation with context"]},
  {icon:PhoneCall,title:"AI voice",copy:"Inbound and outbound agents for calls, bookings, qualification and reminders.",items:["24/7 AI receptionist","Call transcription","CRM logging and analytics"]},
  {icon:Bot,title:"Agentic systems",copy:"AI agents that understand, decide and complete multi-step work across your tools.",items:["Sales and support agents","Department-specific agents","Multi-agent hand-offs"]},
  {icon:Workflow,title:"Automation",copy:"Rebuild repetitive processes as reliable flows with fewer manual hand-offs.",items:["CRM and lead nurturing","WhatsApp automation","Invoices, reports and HR"]},
  {icon:Cable,title:"Business software",copy:"Purpose-built systems designed around how your operation actually runs.",items:["ERP, CRM and POS","Inventory and portals","SaaS and mobile apps"]},
  {icon:ChartNoAxesCombined,title:"Data intelligence",copy:"Turn documents and operational data into visible decisions.",items:["OCR and document processing","Dashboards and forecasting","Private company knowledge AI"]},
];

const ServicesPage=()=>{document.title="AI & Automation Services — Nexivo";return <>
  <PageIntro label="What we build" title={<>AI that talks, thinks and <em>acts.</em></>} copy="Nexivo connects customer-facing intelligence to the software running behind the scenes." />
  <section className="container service-stage"><img src={aiOps} alt="Team operating a connected AI customer service system" width={1600} height={1100}/><div className="service-stage-card"><span>Incoming lead</span><strong>Qualified by AI</strong><span>CRM updated</span><strong>Meeting booked</strong></div></section>
  <section className="section container service-list">{pillars.map(({icon:Icon,title,copy,items},i)=><article key={title}><div><small>0{i+1}</small><Icon/></div><h2>{title}</h2><p>{copy}</p><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</section>
  <section className="section section-contrast"><div className="container"><Eyebrow>Flagship offering</Eyebrow><h2 className="section-title max-w-4xl">One connected transformation, not another isolated chatbot.</h2><div className="transformation-flow">{["Ad or enquiry","AI WhatsApp agent","Qualification","CRM","Sales follow-up","Voice call","Appointment","Invoice","Analytics"].map((x,i)=><span key={x}><b>{String(i+1).padStart(2,'0')}</b>{x}</span>)}</div></div></section>
  <ContactBand title="Find the highest-value automation in your business." />
 </>};
export default ServicesPage;