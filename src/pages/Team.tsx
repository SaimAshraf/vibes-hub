import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { Eyebrow } from "@/components/nexivo/Visuals";
import { Reveal } from "@/components/nexivo/Motion";
import { LetsTalkButton } from "@/components/nexivo/LetsTalk";
import { founders, disciplines } from "@/data/team";

/** Adds is-lit when the element is mostly in view (B&W → colour) */
const useLit = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [lit, setLit] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setLit(e.isIntersecting), { threshold: 0.45 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return { ref, lit };
};

const Chapter = ({ f, i }: { f: typeof founders[number]; i: number }) => {
  const { ref, lit } = useLit();
  return (
    <article ref={ref} className={`tm-chapter ${i % 2 ? "is-flip" : ""} ${lit ? "is-lit" : ""}`}>
      <span className="tm-ghost" aria-hidden="true">{f.role}</span>
      <div className="tm-portrait">
        <img src={f.img} alt={`${f.name}, ${f.title} of Nexivo`} width={640} height={800} loading="lazy" />
        <i className="tm-scan" />
        <b className="tm-index">0{i + 1}</b>
      </div>
      <div className="tm-copy">
        <span className="tm-role">{f.role} · {f.title}</span>
        <h2>{f.name.split(" ").map((w, k) => <span key={k} style={{ transitionDelay: `${k * 90}ms` }}>{w}</span>)}</h2>
        <p>{f.focus}</p>
        <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="tm-link"><Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-4" /></a>
      </div>
    </article>
  );
};

const Team = () => {
  useEffect(() => { document.title = "Team — The Founders of Nexivo"; }, []);
  const [flipped, setFlipped] = useState<number | null>(null);
  return (
    <>
      <section className="tm-hero container">
        <div className="tm-hero-copy">
          <Eyebrow>Founders · Nexivo</Eyebrow>
          <h1 className="display-title">
            {["The", "people", "behind", "the"].map((w, k) => <span key={w + k} className="tm-word" style={{ animationDelay: `${0.2 + k * 0.12}s` }}>{w}</span>)}
            <em className="tm-word" style={{ animationDelay: ".75s" }}>systems.</em>
          </h1>
          <p className="lede">Four founders. One connected company — technology, vision, operations and growth working as one.</p>
        </div>
        <div className="tm-strips" aria-hidden="true">
          {founders.map((f, i) => (
            <div key={f.name} className="tm-strip" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
              <img src={f.img} alt="" width={640} height={800} />
              <i className="tm-scan" style={{ animationDelay: `${1.2 + i * 0.3}s` }} />
              <span>{f.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tm-chapters container">
        {founders.map((f, i) => <Chapter key={f.name} f={f} i={i} />)}
      </section>

      <section className="section section-contrast">
        <div className="container">
          <Reveal><Eyebrow>The core four</Eyebrow><h2 className="section-title mb-12">One table. <em>Four seats.</em></h2></Reveal>
          <div className="tm-core">
            {founders.map((f, i) => (
              <button key={f.name} className={`tm-card ${flipped === i ? "is-flipped" : ""}`} onClick={() => setFlipped(flipped === i ? null : i)} aria-label={`${f.name}, ${f.title}`}>
                <div className="tm-card-in">
                  <div className="tm-face"><img src={f.img} alt="" width={640} height={800} loading="lazy" /><span>{f.short}</span></div>
                  <div className="tm-face tm-back">
                    <b>{f.role}</b><span>{f.title}</span>
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}><Linkedin className="size-4" /> Profile</a>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <Reveal><Eyebrow>The wider team</Eyebrow><h2 className="section-title max-w-4xl">Behind the founders, <em>a connected crew.</em></h2>
          <p className="lede max-w-2xl mt-6">Our team is organised like the systems we build — every discipline linked, nothing working in isolation.</p></Reveal>
        <div className="tm-map">
          <div className="tm-hub"><span>Founders</span><b>4</b></div>
          {disciplines.map((d, i) => (
            <Reveal key={d.name} delay={i * 110} className={`tm-node n${i}`}>
              <i className="tm-wire" /><small>0{i + 1}</small><h3>{d.name}</h3><p>{d.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-band">
        <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><Eyebrow>Work with us</Eyebrow><h2 className="section-title max-w-3xl">Want to build with this team?</h2></div>
          <LetsTalkButton variant="secondary">Let’s talk</LetsTalkButton>
        </div>
      </section>
    </>
  );
};
export default Team;
