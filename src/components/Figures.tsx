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


/**
 * Accessible Economics — the word "ECON" written in braille. Each cell's
 * raised dots light up in turn. Dots are numbered 1–3 down the left column
 * and 4–6 down the right column, as in standard braille.
 */
export function BrailleFigure({ className = "" }: { className?: string }) {
  const word: { letter: string; dots: number[] }[] = [
    { letter: "E", dots: [1, 5] },
    { letter: "C", dots: [1, 4] },
    { letter: "O", dots: [1, 3, 5] },
    { letter: "N", dots: [1, 3, 4, 5] },
  ];
  const pos = (d: number) => ({ col: d <= 3 ? 0 : 1, row: (d - 1) % 3 });
  return (
    <svg viewBox="0 0 260 140" className={`h-auto w-full ${className}`} role="img" aria-label="The word ECON written in braille, one letter lighting up at a time">
      {word.map((w, i) => {
        const x0 = 30 + i * 56;
        return (
          <g key={w.letter}>
            {[1, 2, 3, 4, 5, 6].map((d) => {
              const { col, row } = pos(d);
              const on = w.dots.includes(d);
              return (
                <circle
                  key={d}
                  cx={x0 + col * 22}
                  cy={22 + row * 26}
                  r={7}
                  fill={on ? LIME : "transparent"}
                  stroke={on ? LIME : "rgb(var(--paper) / 0.28)"}
                  className={on ? "braille-dot" : undefined}
                  style={on ? { animationDelay: `${i * 0.6}s` } : undefined}
                />
              );
            })}
            <text x={x0 + 11} y={112} textAnchor="middle" fill={PAPER} fontSize="11" fontFamily={MONO}>
              {w.letter}
            </text>
          </g>
        );
      })}
      <text x="20" y="134" fill={DIM} fontSize="9" fontFamily={MONO}>BRAILLE</text>
      <text x="240" y="134" textAnchor="end" fill={LIME} fontSize="9" fontFamily={MONO}>READ BY TOUCH</text>
    </svg>
  );
}

/**
 * Econospect — a supply-and-demand diagram. The demand line keeps shifting
 * right and back, and the point where the two lines meet slides with it.
 */
export function MarketFigure({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 140" className={`h-auto w-full ${className}`} role="img" aria-label="Supply and demand diagram: as demand shifts, the market price and quantity move">
      {/* axes */}
      <line x1="30" y1="12" x2="30" y2="118" stroke="rgb(var(--paper) / 0.35)" />
      <line x1="30" y1="118" x2="236" y2="118" stroke="rgb(var(--paper) / 0.35)" />
      <text x="20" y="18" fill={DIM} fontSize="9" fontFamily={MONO}>P</text>
      <text x="240" y="121" fill={DIM} fontSize="9" fontFamily={MONO}>Q</text>
      {/* supply */}
      <line x1="40" y1="110" x2="220" y2="20" stroke={PAPER} strokeWidth="1.4" />
      <text x="223" y="20" fill={PAPER} fontSize="9" fontFamily={MONO}>S</text>
      {/* demand, shifting */}
      <g className="mkt-shift">
        <line x1="40" y1="20" x2="200" y2="100" stroke={LIME} strokeWidth="1.4" />
        <text x="203" y="104" fill={LIME} fontSize="9" fontFamily={MONO}>D</text>
      </g>
      {/* equilibrium point and guides — slide with the meeting point */}
      <defs>
        <clipPath id="mkt-plot">
          <rect x="30" y="0" width="210" height="118" />
        </clipPath>
      </defs>
      <g clipPath="url(#mkt-plot)">
        <g className="mkt-eq">
          <line x1="-120" y1="65" x2="130" y2="65" stroke={LIME} strokeOpacity="0.5" strokeDasharray="3 3" />
          <line x1="130" y1="65" x2="130" y2="200" stroke={LIME} strokeOpacity="0.5" strokeDasharray="3 3" />
          <circle cx="130" cy="65" r="4" fill={LIME} />
        </g>
      </g>
      <text x="30" y="134" fill={DIM} fontSize="9" fontFamily={MONO}>SUPPLY &amp; DEMAND</text>
      <text x="240" y="134" textAnchor="end" fill={LIME} fontSize="9" fontFamily={MONO}>PRICE ADJUSTS</text>
    </svg>
  );
}
