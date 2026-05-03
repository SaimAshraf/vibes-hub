import { Bot, Workflow, Code2, Brain, PhoneCall, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Agents & Chatbots", desc: "Conversational AI, voice bots and autonomous agents that handle your customers, leads and ops.", color: "from-cyan-400 to-blue-500" },
  { icon: Workflow, title: "Intelligent Automation", desc: "n8n, RPA and custom workflows that eliminate repetitive tasks and unlock your team's bandwidth.", color: "from-fuchsia-500 to-purple-500" },
  { icon: Code2, title: "Custom Software", desc: "Web apps, mobile apps and SaaS platforms — designed and engineered for scale.", color: "from-blue-400 to-indigo-500" },
  { icon: Brain, title: "AI Integration & Consulting", desc: "We embed AI into your existing stack with strategy, architecture and shipping.", color: "from-pink-500 to-rose-500" },
  { icon: PhoneCall, title: "Calling & Communication", desc: "AI voice agents for sales, support and outreach that sound (and convert) like humans.", color: "from-cyan-400 to-teal-400" },
  { icon: BarChart3, title: "Data & Business Intelligence", desc: "Pipelines, dashboards and AI-powered analytics that turn data into decisions.", color: "from-violet-500 to-fuchsia-500" },
];

export const Services = () => (
  <section id="services" className="py-28 relative">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">[ 01 / Services ]</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          What we <span className="text-gradient-brand">engineer</span>.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Six core capabilities. One mission — make your business autonomous, intelligent and unfairly fast.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative glass rounded-3xl p-7 hover:-translate-y-1 hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />
            <div className="relative">
              <div className={`inline-flex items-center justify-center size-12 rounded-2xl bg-gradient-to-br ${s.color} shadow-lg`}>
                <s.icon className="size-6 text-white" />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 font-mono text-[10px] text-muted-foreground/60">
                0{i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
