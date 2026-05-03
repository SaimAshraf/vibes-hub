import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Bot } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const seed: Msg[] = [
  { role: "ai", text: "Hi 👋 I'm Nexa, Nexivo's AI assistant. Ask me what we can automate for you." },
];

const canned: Record<string, string> = {
  default: "We can engineer that. Want me to schedule a free 30-min audit with our team?",
  chatbot: "We build GPT-powered chatbots integrated with your CRM, WhatsApp & site — usually live in <2 weeks.",
  automation: "Workflow automation with n8n + custom AI nodes. Most clients save 40+ hours/week.",
  voice: "AI voice agents for inbound/outbound calls — natural, multilingual, and trained on your scripts.",
};

const reply = (q: string) => {
  const k = q.toLowerCase();
  if (k.includes("chat") || k.includes("bot")) return canned.chatbot;
  if (k.includes("auto") || k.includes("workflow")) return canned.automation;
  if (k.includes("voice") || k.includes("call")) return canned.voice;
  return canned.default;
};

export const Playground = () => {
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  const send = (text?: string) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { role: "ai", text: reply(t) }]), 700);
  };

  return (
    <section id="playground" className="py-28 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">[ 03 / AI Lab ]</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Try the <span className="text-gradient-brand">intelligence</span> live.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Don't take our word for it — talk to Nexa, our in-house AI agent.
              Ask about chatbots, automations, voice agents, ROI — whatever you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Build me a chatbot", "Automate my workflow", "Voice agent for sales"].map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="px-4 py-2 rounded-full text-sm glass hover:border-primary hover:text-primary transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-[var(--shadow-elevated)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[image:var(--gradient-glow)] opacity-40 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="size-10 rounded-xl bg-[image:var(--gradient-cyber)] flex items-center justify-center glow-cyan">
                  <Bot className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-semibold">Nexa</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> online · powered by Nexivo
                  </div>
                </div>
                <Sparkles className="size-4 text-primary ml-auto" />
              </div>

              <div ref={ref} className="h-72 overflow-y-auto py-5 space-y-3 pr-1">
                {msgs.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-[image:var(--gradient-cyber)] text-primary-foreground rounded-br-sm"
                          : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask Nexa anything..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                />
                <Button variant="hero" size="icon" className="rounded-full size-10" onClick={() => send()}>
                  <Send className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
