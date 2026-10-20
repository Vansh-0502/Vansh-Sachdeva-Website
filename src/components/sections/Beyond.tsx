import { beyond } from "@/content/profile";
import { Reveal } from "../Reveal";
import { Reels } from "../Reels";

function Sprockets() {
  return (
    <div aria-hidden className="flex justify-around px-1 py-1.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="h-2 w-3 shrink-0 rounded-[1px] bg-ink" />
      ))}
    </div>
  );
}

type Frame = { word: string; line: string };

/** One cell of film: sprocket holes above and below, the frame in between. */
function FilmFrame({ f, i }: { f: Frame; i: number }) {
  return (
    <div className="w-[15rem] shrink-0 bg-ink-3 sm:w-[18rem]">
      <Sprockets />
      <div className="group relative mx-1 flex aspect-[4/3] flex-col justify-between gap-3 bg-ink p-4 sm:p-5">
        <span className="flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.1em] text-paper-faint">
          <span>Sc. {String(i + 1).padStart(2, "0")}</span>
          <span>00:0{i}:{String(i * 12 + 4).padStart(2, "0")}</span>
        </span>
        <span className="display-i mt-auto text-[2.4rem] leading-none transition-colors duration-300 group-hover:text-lime sm:text-[2.9rem]">
          {f.word}
        </span>
        <span className="min-h-[2.6em] text-[0.85rem] leading-snug text-paper-dim">{f.line}</span>
        <span aria-hidden className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-rule-strong" />
        <span aria-hidden className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-rule-strong" />
      </div>
      <Sprockets />
    </div>
  );
}

/**
 * A film strip that rolls sideways forever. The frames are drawn twice in a
 * row and the row slides left by exactly one copy, so the loop has no seam.
 * With reduced motion it stops and can be scrolled by hand.
 */
function FilmRoll({ frames }: { frames: Frame[] }) {
  const reel = [...frames, ...frames];
  return (
    <div className="film-roll overflow-hidden ring-1 ring-rule" role="region" aria-label="Film strip: the four stages of an edit">
      <div className="film-track flex w-max">
        <ol className="flex">
          {reel.map((f, i) => (
            <li key={`a${i}`} aria-hidden={i >= frames.length || undefined}>
              <FilmFrame f={f} i={i % frames.length} />
            </li>
          ))}
        </ol>
        <div aria-hidden className="flex">
          {reel.map((f, i) => (
            <FilmFrame key={`b${i}`} f={f} i={i % frames.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Beyond() {
  const hasReels = beyond.reels.length > 0;
  return (
    <section aria-labelledby="beyond-title" className="py-20 md:py-28">
      <div className="wrap">
        <Reveal className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label">§ 06 — Off the clock</p>
            <h2 id="beyond-title" className="display mt-5 text-[clamp(2.6rem,6vw,5rem)]">
              Beyond the <span className="display-i">classroom.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <p className="serif-text text-[1.35rem] leading-[1.4]">{beyond.lede}</p>
            <p className="mt-5 text-paper-dim">{beyond.note}</p>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <FilmRoll frames={beyond.frames} />
          <p className="mt-4 text-[0.8rem] text-paper-faint">The four stages of an edit, as I think about them.</p>
        </Reveal>

        {hasReels && <Reels />}
      </div>
    </section>
  );
}
