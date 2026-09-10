import { createContext, useContext, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Instagram, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { EMAIL, PHONE_DISPLAY, PHONE_TEL, nexivoSocials } from "@/data/site";

type Answers = { need?: string; business?: string; timing?: string; name?: string; contact?: string };

const steps = [
  { key: "need", q: "What do you need help with?", options: ["AI agents & chatbots", "Automation of daily work", "Business software (POS / ERP)", "Not sure yet — advise me"] },
  { key: "business", q: "What kind of business is it?", options: ["Restaurant / café", "Factory / production", "Retail & e-commerce", "Services / other"] },
  { key: "timing", q: "How soon do you want to start?", options: ["As soon as possible", "This quarter", "Just exploring"] },
] as const;

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useLetsTalk = () => useContext(Ctx);

const buildMail = (a: Answers) => {
  const subject = `Project enquiry — ${a.need ?? "Nexivo"}`;
  const body = [
    "Hi Nexivo,",
    "",
    `I need: ${a.need ?? "—"}`,
    `Business type: ${a.business ?? "—"}`,
    `Timeline: ${a.timing ?? "—"}`,
    a.name ? `Name: ${a.name}` : null,
    a.contact ? `Contact: ${a.contact}` : null,
    "",
    "Please get back to me with next steps.",
  ].filter(Boolean).join("\n");
  return { subject, body, href: `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
};

export const LetsTalkProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const [a, setA] = useState<Answers>({});
  const [copied, setCopied] = useState(false);

  const total = steps.length + 2; // questions + details + summary
  const mail = useMemo(() => buildMail(a), [a]);

  const reset = () => { setI(0); setA({}); setCopied(false); };
  const close = () => { setOpen(false); window.setTimeout(reset, 300); };
  const pick = (key: string, value: string) => { setA(p => ({ ...p, [key]: value })); setI(n => n + 1); };

  return (
    <Ctx.Provider value={{ open: () => { reset(); setOpen(true); } }}>
      {children}
      {open && (
        <div className="lt-overlay" role="dialog" aria-modal="true" aria-label="Let's talk">
          <button className="lt-backdrop" aria-label="Close" onClick={close} />
          <div className="lt-panel">
            <div className="lt-head">
              <span className="lt-step">Step {Math.min(i + 1, total)} / {total}</span>
              <button onClick={close} aria-label="Close"><X className="size-4" /></button>
            </div>
            <div className="lt-progress"><i style={{ width: `${((i + 1) / total) * 100}%` }} /></div>

            <div className="lt-body" key={i}>
              {i < steps.length && (
                <>
                  <h3>{steps[i].q}</h3>
                  <div className="lt-options">
                    {steps[i].options.map(o => (
                      <button key={o} onClick={() => pick(steps[i].key, o)}>
                        <span>{o}</span><ArrowRight className="size-4" />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {i === steps.length && (
                <>
                  <h3>Anything we should call you?</h3>
                  <p className="lt-sub">Totally optional — you can skip this.</p>
                  <div className="lt-fields">
                    <input placeholder="Your name" value={a.name ?? ""} onChange={e => setA(p => ({ ...p, name: e.target.value }))} />
                    <input placeholder="Phone or WhatsApp" value={a.contact ?? ""} onChange={e => setA(p => ({ ...p, contact: e.target.value }))} />
                  </div>
                  <div className="lt-actions">
                    <Button variant="hero" size="lg" onClick={() => setI(i + 1)}>Continue <ArrowRight className="size-4" /></Button>
                    <button className="lt-skip" onClick={() => setI(i + 1)}>Skip</button>
                  </div>
                </>
              )}

              {i === steps.length + 1 && (
                <>
                  <h3>Here's your message.</h3>
                  <p className="lt-sub">Already written for you. Send it, or copy it if you prefer.</p>
                  <div className="lt-summary">
                    <div><small>Need</small><b>{a.need ?? "—"}</b></div>
                    <div><small>Business</small><b>{a.business ?? "—"}</b></div>
                    <div><small>Timeline</small><b>{a.timing ?? "—"}</b></div>
                    {a.name && <div><small>Name</small><b>{a.name}</b></div>}
                    {a.contact && <div><small>Contact</small><b>{a.contact}</b></div>}
                  </div>
                  <div className="lt-actions">
                    <Button variant="hero" size="lg" asChild>
                      <a href={mail.href}><Mail className="size-4" /> Send to Nexivo</a>
                    </Button>
                    <button
                      className="lt-skip"
                      onClick={() => { navigator.clipboard?.writeText(`${mail.subject}\n\n${mail.body}`); setCopied(true); }}
                    >
                      {copied ? <><Check className="size-4" /> Copied</> : <><Copy className="size-4" /> Copy message</>}
                    </button>
                  </div>
                  <a className="lt-insta" href={nexivoSocials.instagram} target="_blank" rel="noreferrer">
                    <Instagram className="size-4" /> Rather message on Instagram
                  </a>
                  <a className="lt-insta" href={`tel:${PHONE_TEL}`}>
                    <Phone className="size-4" /> Or call {PHONE_DISPLAY}
                  </a>
                </>
              )}
            </div>

            {i > 0 && (
              <button className="lt-back" onClick={() => setI(i - 1)}><ArrowLeft className="size-4" /> Back</button>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
};

export const LetsTalkButton = ({
  children = "Let's talk",
  variant = "hero",
  size = "xl",
  className = "",
}: { children?: React.ReactNode; variant?: any; size?: any; className?: string }) => {
  const { open } = useLetsTalk();
  return (
    <Button variant={variant} size={size} className={className} onClick={open}>
      {children} <ArrowRight className="size-4" />
    </Button>
  );
};
