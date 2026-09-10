import { Mail, MoveUpRight, Phone } from "lucide-react";
import { Eyebrow } from "@/components/nexivo/Visuals";
import { useLetsTalk } from "@/components/nexivo/LetsTalk";
import { SocialRow } from "@/components/nexivo/Socials";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, nexivoSocials, nexposSocials } from "@/data/site";

const options = [
  { n: "01", s: "AI & automation", t: "Find what to automate" },
  { n: "02", s: "Product demo", t: "See a Nexivo product live" },
  { n: "03", s: "Custom software", t: "Build around your operation" },
];

const Contact = () => {
  const { open } = useLetsTalk();
  document.title = "Contact Nexivo — Start a Project";
  return (
    <section className="contact-page container">
      <div>
        <Eyebrow>Contact Nexivo</Eyebrow>
        <h1 className="display-title">Tell us what should work <em>better.</em></h1>
        <p className="lede">Pick a starting point. Three quick taps and we’ll have everything we need—no forms to fill in.</p>
      </div>
      <div className="contact-options">
        {options.map(o => (
          <a key={o.n} role="button" tabIndex={0} onClick={open} onKeyDown={e => e.key === "Enter" && open()}>
            <span>{o.n}</span>
            <div><small>{o.s}</small><strong>{o.t}</strong></div>
            <MoveUpRight />
          </a>
        ))}
      </div>
      <div className="contact-direct">
        <a href={`mailto:${EMAIL}`}><Mail />{EMAIL}</a>
        <a href={`tel:${PHONE_TEL}`}><Phone />{PHONE_DISPLAY}</a>
      </div>
      <div className="flex flex-wrap gap-8">
        <SocialRow socials={nexivoSocials} label="Nexivo" />
        <SocialRow socials={nexposSocials} label="NexPos" />
      </div>
    </section>
  );
};
export default Contact;
