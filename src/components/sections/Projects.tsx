import Link from "next/link";
import { categoryLabel, projects, type Category } from "@/content/projects";
import { site } from "@/content/site";
import { SectionHead } from "../SectionHead";
import { BrailleFigure, MarketFigure, ShareFigure } from "../Figures";

/*
 * The filters are plain radio buttons styled as tabs, and the hiding is done
 * in CSS (see .pfilter in globals.css), so they work even without JavaScript.
 */

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "project", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
];

const secondaryFigure: Record<string, React.ReactNode> = {
  econospect: <MarketFigure />,
  "mini-traders": <ShareFigure />,
  community: <BrailleFigure />,
};

function StatusBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-lime ring-1 ring-inset ring-lime/50">
      <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime motion-reduce:animate-none" />
      {text}
    </span>
  );
}

export function Projects() {
  const feature = projects.find((p) => p.featured)!;
  const secondary = projects.filter((p) => !p.featured && secondaryFigure[p.slug]);
  const rest = projects.filter((p) => !p.featured && !secondaryFigure[p.slug]);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="wrap pfilter">
        <SectionHead
          number="03"
          kicker="Projects"
          aside="Things I’ve built, run & researched"
          title={
            <span id="projects-title">
              Learning by <span className="display-i">making</span> things.
            </span>
          }
        />

        {/* filters */}
        <fieldset className="reveal mb-12">
          <legend className="sr-only">Filter projects</legend>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <span key={f.id}>
                <input
                  type="radio"
                  name="project-filter"
                  id={`pf-${f.id}`}
                  value={f.id}
                  defaultChecked={f.id === "all"}
                  className="peer sr-only"
                />
                <label
                  htmlFor={`pf-${f.id}`}
                  className="inline-block cursor-pointer px-3.5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper-dim ring-1 ring-inset ring-rule transition-colors hover:text-paper hover:ring-rule-strong peer-checked:bg-paper peer-checked:text-ink peer-checked:ring-paper peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lime"
                >
                  {f.label}
                </label>
              </span>
            ))}
          </div>
        </fieldset>

        {/* feature: GradeEco */}
        <article data-cat={feature.category} className="reveal grid gap-10 bg-ink-2 p-6 ring-1 ring-rule sm:p-8 md:grid-cols-12 md:p-12">
          <div className="flex flex-col md:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-lime px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink">Featured</span>
              <span className="label">
                {feature.index} · {categoryLabel[feature.category]}
              </span>
            </div>
            <h3 className="track-in display mt-8 text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.85]">
              Grade<span className="display-i text-lime">Eco</span>
            </h3>
            <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper-dim">{feature.role}</p>
            <p className="serif-text mt-7 max-w-[44ch] text-[1.3rem] leading-snug">{feature.summary}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.gradeeco} target="_blank" rel="noopener noreferrer" className="btn-solid">
                Visit GradeEco <span aria-hidden>↗</span>
              </a>
              <a href={site.gradeecoInstagram} target="_blank" rel="noopener noreferrer" className="btn-line">
                Instagram <span aria-hidden>↗</span>
              </a>
              <Link href="/projects/gradeeco" className="btn-line">
                How I built it <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 md:border-l md:border-rule md:pl-10">
            <dl className="grid grid-cols-2 gap-4 rule-b pb-5 text-sm">
              <div>
                <dt className="label">Built</dt>
                <dd className="mt-1">2025 – 2026</dd>
              </div>
              <div>
                <dt className="label">Launched</dt>
                <dd className="mt-1">15 June 2026</dd>
              </div>
            </dl>
            <p className="label mb-4 mt-6">What I did</p>
            <ul className="space-y-3">
              {feature.contributions?.map((c) => (
                <li key={c} className="flex gap-3 text-[0.95rem] leading-snug text-paper-dim">
                  <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-lime" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* secondary entries: a full-width card, figure beside the text */}
        <div className="reveal-stagger mt-6 grid gap-6">
          {secondary.map((p) => {
            const site = p.links?.find((l) => l.href.startsWith("http"));
            return (
              <article
                key={p.slug}
                data-cat={p.category}
                className="group grid items-center gap-8 p-6 ring-1 ring-rule transition-colors duration-300 hover:bg-ink-2 hover:ring-rule-strong sm:p-8 md:grid-cols-12 md:gap-10 md:p-12"
              >
                <Link
                  href={`/projects/${p.slug}`}
                  aria-label={`${p.title} — read more`}
                  className="block opacity-80 transition-opacity group-hover:opacity-100 md:col-span-5"
                >
                  {secondaryFigure[p.slug]}
                </Link>
                <div className="md:col-span-7">
                  <span className="label">
                    {p.index} · {categoryLabel[p.category]}
                  </span>
                  <h3 className="display mt-6 text-[2.4rem] leading-none md:text-[3.2rem]">
                    <Link href={`/projects/${p.slug}`} className="transition-colors hover:text-lime">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-lime">{p.kicker}</p>
                  <p className="mt-5 max-w-[52ch] text-paper-dim">{p.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {site && (
                      <a href={site.href} target="_blank" rel="noopener noreferrer" className="btn-solid">
                        {site.label} <span aria-hidden>↗</span>
                      </a>
                    )}
                    <Link href={`/projects/${p.slug}`} className="btn-line">
                      Read more <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* remaining as an index */}
        <ul className="reveal-stagger mt-12 rule-t">
          {rest.map((p) => (
            <li key={p.slug} data-cat={p.category} className="rule-b">
              <Link
                href={`/projects/${p.slug}`}
                className="group grid gap-2 py-6 transition-colors hover:bg-ink-2 md:grid-cols-[6rem_1fr_1.3fr_2rem] md:items-baseline md:gap-6 md:px-2"
              >
                <span className="label">{p.index}</span>
                <span className="display flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[1.9rem] leading-tight transition-transform duration-500 group-hover:translate-x-1.5">
                  {p.title}
                  {p.status && <StatusBadge text={p.status} />}
                </span>
                <span className="text-sm text-paper-dim">{p.summary}</span>
                <span aria-hidden className="hidden text-paper-faint group-hover:text-lime md:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
