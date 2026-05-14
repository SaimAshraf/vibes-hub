export const NodeGraph = () => {
  const nodes = [
    { id: "in", x: 40, y: 160, label: "Input", sub: "webhook" },
    { id: "agent", x: 200, y: 80, label: "Agent", sub: "gpt-5.2" },
    { id: "tool", x: 200, y: 240, label: "Tools", sub: "8 active" },
    { id: "logic", x: 360, y: 160, label: "Logic", sub: "n8n" },
    { id: "out1", x: 520, y: 60, label: "CRM", sub: "hubspot" },
    { id: "out2", x: 520, y: 180, label: "Email", sub: "resend" },
    { id: "out3", x: 520, y: 300, label: "DB", sub: "postgres" },
  ];
  const edges: [string, string][] = [
    ["in", "agent"], ["in", "tool"], ["agent", "logic"], ["tool", "logic"],
    ["logic", "out1"], ["logic", "out2"], ["logic", "out3"],
  ];
  const find = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <svg viewBox="0 0 600 360" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="wire" x1="0" x2="1">
          <stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => {
        const A = find(a); const B = find(b);
        return (
          <g key={i}>
            <path
              d={`M${A.x + 40} ${A.y} C ${(A.x + B.x) / 2} ${A.y}, ${(A.x + B.x) / 2} ${B.y}, ${B.x} ${B.y}`}
              stroke="url(#wire)" strokeWidth="1.2" fill="none"
            />
            <path
              d={`M${A.x + 40} ${A.y} C ${(A.x + B.x) / 2} ${A.y}, ${(A.x + B.x) / 2} ${B.y}, ${B.x} ${B.y}`}
              stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none"
              className="animate-dash-flow" style={{ animationDelay: `${i * 0.2}s` }}
            />
          </g>
        );
      })}
      {nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.x}, ${n.y - 18})`}>
          <rect width="80" height="36" rx="6" fill="hsl(230 25% 8%)" stroke="hsl(var(--border))" />
          <rect x="0" y="0" width="3" height="36" fill="hsl(var(--primary))" />
          <text x="10" y="15" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="hsl(var(--foreground))" fontWeight="600">{n.label}</text>
          <text x="10" y="27" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="hsl(var(--muted-foreground))">{n.sub}</text>
          <circle cx="76" cy="18" r="2" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
};