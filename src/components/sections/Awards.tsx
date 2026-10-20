import { awards } from "@/content/awards";
import { Reveal } from "../Reveal";
import { SectionHead } from "../SectionHead";

/** The award picture in a circular frame, with a dot that keeps circling it. */
function AwardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative aspect-square w-44 shrink-0 overflow-hidden md:w-52">
      <span aria-hidden className="absolute inset-[4px] rounded-full border border-dashed border-rule-strong" />
      <span aria-hidden className="portrait-orbit absolute inset-[4px] rounded-full">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime" />
      </span>
      <span className="absolute inset-[7%] overflow-hidden rounded-full ring-1 ring-lime">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={640} height={640} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </span>
    </figure>
  );
}

/** A row of squares that light up one after another, on a loop. */
function Marks({ count, caption }: { count: number; caption: string }) {
  return (
    <div>
      <div aria-hidden className="flex gap-1.5">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className="award-mark h-3 w-3 ring-1 ring-inset ring-lime"
            style={{ animationDelay: `${i * 0.35}s`, ["--n" as string]: count } as React.CSSProperties}
          />
        ))}
      </div>
      <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-paper-faint">{caption}</p>
    </div>
  );
}

export function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="bg-ink-2 py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          number="04"
          kicker="Awards & Honours"
          aside="Recognition"
          title={
            <span id="awards-title">
              Awards &amp; <span className="display-i">honours.</span>
            </span>
          }
        />

        <ol className="reveal-stagger rule-t">
          {awards.map((a, i) => (
            <li key={a.id} className="rule-b grid gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <div className="flex flex-col items-start gap-6 md:col-span-5">
                <AwardImage src={a.image.src} alt={a.image.alt} />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-2 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.02]">{a.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {a.facts.map((f) => (
                      <li key={f} className="tag">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-7">
                <p className="serif-text max-w-[60ch] text-[1.2rem] leading-[1.5]">{a.body}</p>
                {a.detail && (
                  <div className="mt-8">
                    <p className="label mb-4">{a.detail.heading}</p>
                    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      {a.detail.items.map((d) => (
                        <li key={d.name} className="flex gap-3">
                          <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-lime" />
                          <span>
                            <span className="block text-paper">{d.name}</span>
                            <span className="block text-[0.92rem] leading-snug text-paper-dim">{d.text}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-8">
                  <Marks count={a.marks.count} caption={a.marks.caption} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
