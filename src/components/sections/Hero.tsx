import Link from "next/link";
import { hero } from "@/content/profile";
import { site } from "@/content/site";
import { HeroFigure } from "../HeroFigure";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pt-24 md:pt-28">
      <div className="wrap">
        {/* masthead */}
        <div className="rule-b flex items-baseline justify-between gap-4 pb-3">
          <span className="label">Economics · Finance · Building</span>
          <span className="label text-right">Grade 12 · India</span>
        </div>

        <h1
          id="hero-title"
          className="display rise mt-10 text-[clamp(3.1rem,11.2vw,10.5rem)] md:mt-14"
        >
          <span style={{ ["--d" as string]: "60ms" }} className="display-i text-paper-dim">
            {hero.greeting}
          </span>
          <br />
          <span style={{ ["--d" as string]: "200ms" }}>
            Vansh <span className="display-i text-lime">Sachdeva.</span>
          </span>
        </h1>

        <div className="mt-14 grid gap-14 pb-20 md:mt-20 md:grid-cols-12 md:gap-10 md:pb-28">
          <div className="flex flex-col md:col-span-5 lg:col-span-5">
            <p className="serif-text text-[1.3rem] leading-[1.45] text-paper md:text-[1.4rem]">
              {hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/#work" className="btn-solid">
                Explore my work <span aria-hidden>→</span>
              </Link>
              <Link href="/#contact" className="btn-line">
                Get in touch
              </Link>
              {site.cv && (
                <a href={site.cv} target="_blank" rel="noopener noreferrer" className="btn-line">
                  View CV <span aria-hidden>↗</span>
                </a>
              )}
            </div>

            <ul className="mt-auto grid grid-cols-2 gap-px pt-12" aria-label="At a glance">
              {hero.strip.map((s) => (
                <li key={s} className="rule-t pt-2.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-paper-dim">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <HeroFigure />
          </div>
        </div>
      </div>
    </section>
  );
}
