import { method } from "@/content/profile";
import { Reveal } from "../Reveal";

/**
 * Understand → Investigate → Build, drawn as one continuous ruled line
 * with three stations rather than three cards.
 */
export function Method() {
  return (
    <section aria-labelledby="method-title" className="relative bg-ink-2 py-20 md:py-28">
      <div className="wrap">
        <Reveal className="grid gap-8 md:grid-cols-12">
          <p className="label md:col-span-3">How the pieces connect</p>
          <h2 id="method-title" className="serif-text text-[1.6rem] leading-[1.3] md:col-span-8 md:text-[2.1rem]">
            Everything here follows the same loop: I try to <em className="italic text-lime">understand</em> how something
            works, <em className="italic text-lime">investigate</em> it properly, then <em className="italic text-lime">build</em>{" "}
            something that makes it easier for someone else.
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid md:mt-24 md:grid-cols-3">
          {/* the connecting line (desktop) */}
          <span aria-hidden className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-rule-strong md:block">
            <span className="flow-dot-x absolute -top-[2px] left-0 h-[5px] w-[5px] rounded-full bg-lime" />
          </span>
          {method.map((m, i) => (
            <Reveal as="li" key={m.verb} delay={i * 140} className="relative pb-12 md:pb-0 md:pr-10">
              {/* vertical line (mobile) */}
              {i < method.length - 1 && (
                <span aria-hidden className="absolute bottom-0 left-[1.15rem] top-10 w-px bg-rule-strong md:hidden">
                  <span className="flow-dot-y absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-lime" />
                </span>
              )}
              <div className="flex items-center gap-4">
                <span className="relative z-10 flex h-[2.3rem] w-[2.3rem] items-center justify-center bg-ink-2 font-mono text-xs text-lime ring-1 ring-lime">
                  {m.numeral}
                </span>
                {i < method.length - 1 && (
                  <span aria-hidden className="relative z-10 hidden bg-ink-2 px-2 font-mono text-xs text-paper-faint md:inline">
                    →
                  </span>
                )}
                {i === method.length - 1 && (
                  <span aria-hidden className="relative z-10 hidden bg-ink-2 px-2 font-mono text-xs text-paper-faint md:inline">
                    ↺ back to I
                  </span>
                )}
              </div>
              <div className="pl-14 md:pl-0">
                <h3 className="display mt-6 text-[2.6rem] md:text-[3.2rem]">{m.verb}</h3>
                <p className="mt-4 max-w-[34ch] text-paper-dim">{m.line}</p>
                <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-paper-faint">
                  Seen in — <span className="text-paper-dim">{m.where}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
