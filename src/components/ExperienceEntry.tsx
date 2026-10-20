import type { Experience } from "@/content/experience";
import { Reveal } from "./Reveal";

/**
 * One row of the Work timeline. The detail panel uses a native
 * <details> element, so it opens and closes even without JavaScript.
 */
export function ExperienceEntry({ item, defaultOpen = false }: { item: Experience; defaultOpen?: boolean }) {
  return (
    <Reveal as="li" id={`exp-${item.id}`} className="rule-b scroll-mt-20">
      <div className="grid gap-x-10 gap-y-6 py-10 md:grid-cols-12 md:py-14">
        {/* date rail */}
        <div className="flex items-baseline gap-4 md:col-span-2 md:flex-col md:gap-2">
          <span className="font-mono text-xs text-lime">{item.index}</span>
          {item.start ? (
            <>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-paper">{item.start}</span>
              <span aria-hidden className="relative hidden h-10 w-px bg-rule-strong md:block">
                <span className="rail-dot absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-paper-dim">
                <span className="md:hidden">– </span>
                {item.end}
              </span>
            </>
          ) : (
            <>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-paper">Internship</span>
              <span aria-hidden className="relative hidden h-10 w-px bg-rule-strong md:block">
                <span className="rail-dot absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
            </>
          )}
        </div>

        <div className="md:col-span-10">
          <div className="grid gap-x-10 gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <h3 className="display text-[clamp(2.6rem,6vw,4.75rem)]">{item.org}</h3>
              <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-paper">
                {item.role}
                {item.withPerson && (
                  <span className="text-paper-dim">
                    {" "}
                    · {item.withPerson.label}: {item.withPerson.name}
                  </span>
                )}
              </p>
            </div>
            <p className="serif-text max-w-[46ch] text-[1.3rem] leading-snug">{item.summary}</p>
          </div>

          <details className="exp-details group mt-7" open={defaultOpen}>
            <summary className="exp-summary inline-flex cursor-pointer list-none items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper-dim hover:text-paper [&::-webkit-details-marker]:hidden">
              <span className="exp-icon relative flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-inset ring-rule-strong group-hover:ring-lime group-open:rotate-[135deg] group-open:ring-lime group-open:text-lime">
                <span className="leading-none">+</span>
              </span>
              <span className="group-open:hidden">Responsibilities &amp; what I explored</span>
              <span className="hidden group-open:inline">Less detail</span>
            </summary>

            <div className="pt-8">
              <p className="max-w-[70ch] leading-relaxed text-paper-dim">{item.context}</p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="label mb-3">What I did</p>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-[0.95rem] leading-snug">
                        <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-paper-dim" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label mb-3">Areas explored</p>
                  <ul className="space-y-2.5">
                    {item.explored.map((r) => (
                      <li key={r} className="flex gap-3 text-[0.95rem] leading-snug">
                        <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-lime" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Skills developed">
                {item.skills.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </Reveal>
  );
}
