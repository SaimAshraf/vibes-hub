import dineImg from "@/assets/case-dine.jpg";
import ecomImg from "@/assets/case-ecom.jpg";
import realestateImg from "@/assets/case-realestate.jpg";

const cases = [
  { tag: "Restaurants", title: "DineFlow saved 38 hrs/week", metric: "+212% bookings", img: dineImg },
  { tag: "E-commerce", title: "AI agent recovered 41% carts", metric: "$1.2M added ARR", img: ecomImg },
  { tag: "Real Estate", title: "Voice bot qualified 9k leads", metric: "4.8x conversion", img: realestateImg },
];

export const Work = () => (
  <section id="work" className="py-28">
    <div className="container">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">[ 04 / Selected Work ]</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Real outcomes. <span className="text-gradient">No fluff.</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <article
            key={i}
            className="group relative h-80 rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition cursor-pointer"
          >
            <img
              src={c.img}
              alt={c.title}
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 group-hover:from-background/90 transition" />
            <div className="relative h-full p-7 flex flex-col justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-background/40 backdrop-blur text-xs font-mono">
                {c.tag}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight">{c.title}</h3>
                <div className="mt-3 font-mono text-sm text-primary">→ {c.metric}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
