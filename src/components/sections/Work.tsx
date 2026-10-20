import { experience } from "@/content/experience";
import { SectionHead } from "../SectionHead";
import { ExperienceEntry } from "../ExperienceEntry";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-ink-2 py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          number="02"
          kicker="Work & experience"
          aside="2025 — 2026"
          title={
            <span id="work-title">
              Where I’ve seen it <span className="display-i">up close.</span>
            </span>
          }
        />
        <ol className="rule-t">
          {experience.map((e) => (
            <ExperienceEntry key={e.id} item={e} />
          ))}
        </ol>
      </div>
    </section>
  );
}
