import { useEffect, useState } from "react";

export const StatusPill = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}:${String(d.getUTCSeconds()).padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hidden lg:flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-3 py-1.5 rounded-full border border-border/70 bg-background/60 backdrop-blur">
      <span className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] animate-pulse" />
        nexivo.os v2.1
      </span>
      <span className="text-muted-foreground/40">·</span>
      <span>4 agents</span>
      <span className="text-muted-foreground/40">·</span>
      <span className="text-foreground/80">{time} UTC</span>
    </div>
  );
};