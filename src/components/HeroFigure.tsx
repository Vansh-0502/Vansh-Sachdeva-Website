"use client";

import { useId, useMemo, useState } from "react";
import { milestones } from "@/content/profile";

/*
 * Fig. 1 — an honest "chart": the x-axis is real time (Apr 2025 → Jul 2026)
 * and the marked points are real milestones. The line itself is a drawn
 * curve, not market data, and the caption says so.
 */

const W = 640;
const H = 380;
const PAD = { l: 8, r: 56, t: 64, b: 40 };
const MONTHS = ["A", "M", "J", "J", "A", "S", "O", "N", "D", "J", "F", "M", "A", "M", "J", "J"];
const SPAN = 15; // months shown, Apr 2025 → Jul 2026

// where each milestone sits on the time axis (months after 1 Apr 2025)
const MILESTONE_X = [1.3, 3.1, 5.5, 14.5];

function curve(x: number) {
  const t = x / SPAN;
  return (
    0.1 +
    0.66 * Math.pow(t, 1.25) +
    0.05 * Math.sin(2.1 * x) +
    0.028 * Math.sin(5.3 * x + 1) +
    0.014 * Math.sin(13.7 * x + 0.4)
  );
}

const sx = (x: number) => PAD.l + (x / SPAN) * (W - PAD.l - PAD.r);
const sy = (y: number) => H - PAD.b - y * (H - PAD.t - PAD.b);

export function HeroFigure() {
  const [active, setActive] = useState(milestones.length - 1);
  const uid = useId().replace(/:/g, "");

  const { line, area } = useMemo(() => {
    const pts: string[] = [];
    const end = 14.5;
    for (let i = 0; i <= 160; i++) {
      const x = (i / 160) * end;
      pts.push(`${sx(x).toFixed(1)},${sy(curve(x)).toFixed(1)}`);
    }
    const line = `M${pts.join(" L")}`;
    const area = `${line} L${sx(end).toFixed(1)},${H - PAD.b} L${sx(0)},${H - PAD.b} Z`;
    return { line, area };
  }, []);

  const m = milestones[active];
  const ax = sx(MILESTONE_X[active]);
  const ay = sy(curve(MILESTONE_X[active]));

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.min(milestones.length - 1, a + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    }
  };

  // pick nearest milestone to the pointer
  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    let best = 0;
    let bd = Infinity;
    MILESTONE_X.forEach((x, i) => {
      const d = Math.abs(sx(x) - px);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    setActive(best);
  };

  return (
    <figure className="relative">
      <div className="flex items-baseline justify-between pb-3">
        <span className="label">Fig. 1 — Milestones, plotted</span>
        <span className="label hidden sm:inline">Apr 2025 → Jul 2026</span>
      </div>

      <div
        tabIndex={0}
        role="group"
        aria-roledescription="interactive timeline"
        aria-label="Timeline of milestones. Use the left and right arrow keys to move between them."
        onKeyDown={onKey}
        className="relative outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
      >
        {/* readout */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 max-w-[70%] bg-ink/90 py-1 pr-3" aria-live="polite">
          <p data-rdate className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-lime">{m.date}</p>
          <p data-rlabel className="mt-1 text-[0.9rem] leading-snug text-paper sm:text-base">{m.label}</p>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          data-hero
          className="block h-auto w-full touch-pan-y"
          onPointerMove={onMove}
          onPointerDown={onMove}
          aria-hidden
        >
          <defs>
            <pattern id={`hatch-${uid}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="rgb(var(--lime))" strokeWidth="0.8" strokeOpacity="0.22" />
            </pattern>
          </defs>

          {/* horizontal gridlines */}
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1={PAD.l} x2={W - PAD.r} y1={sy(g)} y2={sy(g)} stroke="rgb(var(--paper) / 0.08)" strokeDasharray="2 4" />
          ))}

          {/* month axis */}
          <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b} stroke="rgb(var(--paper) / 0.32)" />
          {MONTHS.map((_, i) => (
            <g key={i}>
              <line x1={sx(i)} x2={sx(i)} y1={H - PAD.b} y2={H - PAD.b + (i === 0 || i === 9 ? 10 : 4)} stroke="rgb(var(--paper) / 0.32)" />
            </g>
          ))}
          <text x={sx(0) + 3} y={H - PAD.b + 22} fill="rgb(var(--paper-dim))" fontSize="10" fontFamily="JetBrains Mono, monospace">2025</text>
          <text x={sx(9) + 3} y={H - PAD.b + 22} fill="rgb(var(--paper-dim))" fontSize="10" fontFamily="JetBrains Mono, monospace">2026</text>

          {/* area + line */}
          <path d={area} fill={`url(#hatch-${uid})`} className="fade-late" />
          <path
            id={`hero-line-${uid}`}
            d={line}
            fill="none"
            stroke="rgb(var(--paper))"
            strokeWidth="1.4"
            strokeLinejoin="round"
            className="draw-line"
            style={{ ["--len" as string]: 1400 }}
          />

          {/* a point that keeps travelling along the line */}
          <g className="hero-traveller fade-late">
            <circle r="7" fill="rgb(var(--lime))" opacity="0.18">
              <animateMotion dur="10s" repeatCount="indefinite" begin="2.6s">
                <mpath href={`#hero-line-${uid}`} />
              </animateMotion>
            </circle>
            <circle r="2.6" fill="rgb(var(--lime))">
              <animateMotion dur="10s" repeatCount="indefinite" begin="2.6s">
                <mpath href={`#hero-line-${uid}`} />
              </animateMotion>
            </circle>
          </g>

          {/* crosshair */}
          <g className="fade-late">
            <line data-vx x1={ax} x2={ax} y1={PAD.t - 8} y2={H - PAD.b} stroke="rgb(var(--lime))" strokeOpacity="0.6" strokeDasharray="3 3" style={{ transition: "all .35s cubic-bezier(.2,.7,.2,1)" }} />
            <line data-hy x1={PAD.l} x2={W - PAD.r} y1={ay} y2={ay} stroke="rgb(var(--lime))" strokeOpacity="0.25" strokeDasharray="3 3" style={{ transition: "all .35s cubic-bezier(.2,.7,.2,1)" }} />
          </g>

          {/* milestones */}
          {MILESTONE_X.map((x, i) => {
            const cx = sx(x);
            const cy = sy(curve(x));
            const on = i === active;
            return (
              <g key={i} className="fade-late">
                {i === milestones.length - 1 && <circle cx={cx} cy={cy} r="6" fill="rgb(var(--lime))" className="pulse-dot" />}
                <rect
                  data-ms={i}
                  data-cx={cx}
                  data-cy={cy}
                  data-date={milestones[i].date}
                  data-label={milestones[i].label}
                  x={cx - (on ? 5 : 3.5)}
                  y={cy - (on ? 5 : 3.5)}
                  width={on ? 10 : 7}
                  height={on ? 10 : 7}
                  fill={on ? "rgb(var(--lime))" : "rgb(var(--ink))"}
                  stroke="rgb(var(--lime))"
                  strokeWidth="1.2"
                  style={{ transition: "all .25s" }}
                />
              </g>
            );
          })}

          {/* right-edge price-style tag for active point */}
          <g data-tag className="fade-late" style={{ transition: "transform .35s cubic-bezier(.2,.7,.2,1)", transform: `translateY(${ay}px)` }}>
            <rect x={W - PAD.r + 4} y={-9} width={PAD.r - 6} height={18} fill="rgb(var(--lime))" />
            <text data-tagtext x={W - PAD.r + 9} y={4} fontSize="10" fontFamily="JetBrains Mono, monospace" fill="rgb(var(--ink))">
              {String(active + 1).padStart(2, "0")}/{String(milestones.length).padStart(2, "0")}
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-[0.8rem] leading-snug text-paper-dim">
          Each marker is a milestone, from May 2025 to June 2026. Hover, tap or use ←&nbsp;→ to read them.
        </span>
      </figcaption>

      {/* accessible list of the same data */}
      <ol className="sr-only">
        {milestones.map((ms) => (
          <li key={ms.label}>
            {ms.date}: {ms.label}
          </li>
        ))}
      </ol>
    </figure>
  );
}
