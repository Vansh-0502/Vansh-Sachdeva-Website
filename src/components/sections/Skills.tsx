import { skills, tools } from "@/content/profile";
import { Reveal } from "../Reveal";

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="py-20 md:py-24">
      <div className="wrap">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">§ 05 — Skills</p>
            <h2 id="skills-title" className="display mt-5 text-[clamp(2.4rem,5vw,3.75rem)]">
              What the work <span className="display-i">built.</span>
            </h2>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-paper-dim">
              Grouped by where they came from. No ratings or percentages — the experience above is the evidence.
            </p>
          </div>

          <div className="reveal-stagger grid gap-10 sm:grid-cols-3 md:col-span-8">
            {skills.map((g, gi) => (
              <div key={g.group}>
                <p className="flex items-baseline gap-3 border-b border-rule-strong pb-3">
                  <span className="font-mono text-xs text-lime">{String.fromCharCode(65 + gi)}</span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em]">{g.group}</span>
                </p>
                <ul>
                  {g.items.map((s) => (
                    <li key={s} className="rule-b py-3 serif-text text-[1.08rem] leading-snug">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
        {tools.length > 0 && (
          <p className="mt-10 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper-dim md:ml-[33.333%] md:pl-6">
            Tools — <span className="text-paper">{tools.join(" · ")}</span>
          </p>
        )}
      </div>
    </section>
  );
}
