import { about } from "@/content/profile";
import { site } from "@/content/site";
import { Reveal } from "../Reveal";
import { SectionHead } from "../SectionHead";

function PortraitPlate() {
  if (site.portrait) {
    return (
      <figure className="relative mx-auto aspect-square w-full max-w-[20rem] overflow-hidden">
        {/* outer dashed ring */}
        <span aria-hidden className="absolute inset-[5px] rounded-full border border-dashed border-rule-strong" />
        <span aria-hidden className="absolute inset-[5px] rounded-full portrait-orbit">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime" />
        </span>
        <span className="absolute inset-[6%] overflow-hidden rounded-full bg-ink-3 ring-1 ring-lime">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.portrait.src}
            alt={site.portrait.alt}
            width={720}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </span>
      </figure>
    );
  }
  // typographic plate shown until a real photograph is added
  return (
    <div className="relative flex aspect-[4/5] w-full flex-col justify-between bg-ink-3 p-5 ring-1 ring-rule">
      <span className="label">Plate I</span>
      <span aria-hidden className="display self-center text-[9rem] leading-none text-paper">
        V<span className="display-i text-lime">S</span>
      </span>
      <span className="label">Vansh Sachdeva</span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          number="01"
          kicker="About"
          aside="Commerce · Mathematics · CBSE"
          title={
            <span id="about-title">
              More about <span className="display-i">me.</span>
            </span>
          }
        />

        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <div className="mx-auto max-w-[18rem] md:max-w-none">
                <PortraitPlate />
              </div>
              <dl className="mt-8 rule-t">
                {about.facts.map((f) => (
                  <div key={f.label} className="rule-b grid grid-cols-[6.5rem_1fr] gap-3 py-3">
                    <dt className="label pt-0.5">{f.label}</dt>
                    <dd className="text-sm text-paper">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="serif-text text-[1.55rem] leading-[1.35] md:text-[2rem]">
                <span className="float-left mr-3 mt-1 display text-[4.6rem] leading-[0.8] text-lime md:text-[5.6rem]">I</span>
                {about.lede.replace(/^I/, "")}
              </p>
            </Reveal>
            <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-paper-dim md:columns-1">
              {about.paragraphs.map((p, i) => (
                <Reveal as="p" key={i} delay={i * 80}>
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <p className="label mb-5">How I work</p>
              <ol className="rule-t">
                {about.approach.map((a, i) => (
                  <li key={a.title} className="rule-b grid grid-cols-[2.5rem_1fr] gap-4 py-5 md:grid-cols-[3rem_14rem_1fr]">
                    <span className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-[1.5rem] leading-tight">{a.title}</span>
                    <span className="col-start-2 text-paper-dim md:col-start-auto">{a.body}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
