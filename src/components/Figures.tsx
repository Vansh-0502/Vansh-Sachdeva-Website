/*
 * Small, original diagrams used beside experiences and projects.
 * They are explanatory sketches of a concept — none of them show data.
 */

const INK = "rgb(var(--ink))";
const PAPER = "rgb(var(--paper))";
const DIM = "rgb(var(--paper-faint))";
const LIME = "rgb(var(--lime))";
const MONO = "JetBrains Mono, monospace";

/** Mini Traders — a simple share → company diagram. */
export function ShareFigure({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 140" className={`h-auto w-full ${className}`} role="img" aria-label="Diagram: a company divided into many shares, one of them highlighted">
      {Array.from({ length: 40 }).map((_, i) => {
        const col = i % 10;
        const row = Math.floor(i / 10);
        const on = false;
        return (
          <rect
            key={i}
            x={20 + col * 22}
            y={14 + row * 26}
            width={18}
            height={20}
            fill={on ? LIME : "transparent"}
            stroke={on ? LIME : "rgb(var(--paper) / 0.28)"}
          />
        );
      })}
      {/* the highlighted share hops between cells */}
      <rect x={20} y={14} width={18} height={20} fill={LIME} className="share-hop" />
      <text x="20" y="134" fill={DIM} fontSize="9" fontFamily={MONO}>1 COMPANY</text>
      <text x="240" y="134" textAnchor="end" fill={LIME} fontSize="9" fontFamily={MONO}>1 SHARE</text>
    </svg>
  );
}

