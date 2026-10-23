import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabel, getProject, projects } from "@/content/projects";
import { research, statusLabel } from "@/content/research";
import { BrailleFigure, MarketFigure, ShareFigure } from "@/components/Figures";
import { Reveal } from "@/components/Reveal";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.title} — Vansh Sachdeva`, description: p.summary, url: `/projects/${p.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  const figure =
    p.slug === "econospect" ? (
      <MarketFigure />
    ) : p.slug === "mini-traders" ? (
      <ShareFigure />
    ) : p.slug === "community" ? (
      <BrailleFigure />
    ) : null;

  return (
    <article className="pt-24 md:pt-28">
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="rule-b flex items-baseline justify-between pb-3">
          <Link href="/#projects" className="label link hover:text-paper">
            ← All projects
          </Link>
          <span className="label">
            {p.index} · {categoryLabel[p.category]}
          </span>
        </nav>

        <header className="grid gap-10 pb-16 pt-12 md:grid-cols-12 md:pt-16">
          <div className="md:col-span-8">
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-lime">
              {p.kicker}
              {p.status && (
                <span className="inline-flex items-center gap-2 px-2 py-1 text-[0.62rem] ring-1 ring-inset ring-lime/50">
                  <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime motion-reduce:animate-none" />
                  {p.status}
                </span>
              )}
            </p>
            <h1 className="display mt-6 text-[clamp(3.2rem,10vw,8.5rem)]">
              {p.slug === "gradeeco" ? (
                <>
                  Grade<span className="display-i text-lime">Eco</span>
                </>
              ) : (
                p.title
              )}
            </h1>
          </div>
          <dl className="self-end md:col-span-4">
            {[
              ["Role", p.role],
              ...(p.org ? [["Organisation", p.org]] : []),
              ["Dates", p.dates],
            ].map(([k, v]) => (
              <div key={k} className="rule-t grid grid-cols-[7rem_1fr] gap-3 py-3">
                <dt className="label pt-0.5">{k}</dt>
                <dd className="text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="grid gap-14 pb-24 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="serif-text text-[1.45rem] leading-[1.4] md:text-[1.7rem]">{p.intro}</p>
            </Reveal>

            {p.sections.map((s) => (
              <Reveal key={s.heading} className="mt-14">
                <h2 className="label mb-4">{s.heading}</h2>
                <div className="space-y-4 text-[1.05rem] leading-relaxed text-paper-dim">
                  {s.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </Reveal>
            ))}

            {p.contributions && (
              <Reveal className="mt-14">
                <h2 className="label mb-4">My contributions</h2>
                <ol className="rule-t">
                  {p.contributions.map((c, n) => (
                    <li key={c} className="rule-b grid grid-cols-[2.5rem_1fr] py-4">
                      <span className="font-mono text-xs text-lime">{String(n + 1).padStart(2, "0")}</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}

            {p.slug === "research" && (
              <Reveal className="mt-14">
                <h2 className="label mb-4">Research areas</h2>
                <ul className="rule-t">
                  {research.map((r) => (
                    <li key={r.id} className="rule-b py-5">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-lime">{r.subject}</p>
                      <p className="display mt-2 text-[1.6rem] leading-tight">{r.title}</p>
                      <p className="serif-text mt-2 italic text-paper-dim">{r.question}</p>
                      <p className="label mt-3">{statusLabel[r.status]}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {p.links && p.links.length > 0 && (
              <div className="mt-14 flex flex-wrap gap-3">
                {p.links.map((l, n) =>
                  l.href.startsWith("http") ? (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={n === 0 ? "btn-solid" : "btn-line"}>
                      {l.label} <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <Link key={l.href} href={l.href} className={n === 0 ? "btn-solid" : "btn-line"}>
                      {l.label} <span aria-hidden>→</span>
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="md:sticky md:top-24">
              {figure && <div className="mb-10">{figure}</div>}
              <p className="label mb-3">Themes</p>
              <ul className="flex flex-wrap gap-2">
                {p.themes.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <Link href={`/projects/${next.slug}`} className="group rule-t block py-12 md:py-16">
          <span className="label">Next project — {next.index}</span>
          <span className="display mt-4 flex items-baseline justify-between gap-6 text-[clamp(2.4rem,7vw,6rem)] transition-colors group-hover:text-lime">
            {next.title}
            <span aria-hidden className="text-[0.5em] transition-transform group-hover:translate-x-2">→</span>
          </span>
        </Link>
      </div>
    </article>
  );
}
