import { composeHref, emailHref, site } from "@/content/site";
import { CopyButton } from "../CopyButton";
import { EmailLink } from "../EmailLink";
import { Reveal } from "../Reveal";

export function Contact() {
  const mail = emailHref();
  const rows = [
    {
      k: "Email",
      v: (
        <>
          <EmailLink className={mail ? "link link-always break-all" : "text-paper-dim"} />
          {site.email && <CopyButton value={site.email} label="email address" />}
        </>
      ),
    },
    {
      k: "LinkedIn",
      v: (
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link link-always">
          Vansh Sachdeva ↗
        </a>
      ),
    },
    ...(site.cv
      ? [
          {
            k: "CV",
            v: (
              <a href={site.cv} target="_blank" rel="noopener noreferrer" className="link link-always">
                View CV (PDF) ↗
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="label">§ 07 — Contact</p>
          <h2 id="contact-title" className="display mt-8 text-[clamp(3.2rem,11vw,10rem)]">
            Let’s <span className="display-i text-lime">talk.</span>
            <span aria-hidden className="caret ml-[0.06em] inline-block h-[0.72em] w-[0.05em] translate-y-[0.06em] bg-lime" />
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="serif-text text-[1.3rem] leading-[1.45]">
              If you’re reading this for an admissions decision, an internship or a research collaboration — thank you. I’m
              always glad to talk about any of the work here, or about questions I haven’t got to yet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {composeHref() && (
                <a href={composeHref()!} target="_blank" rel="noopener noreferrer" className="btn-solid">
                  Write to me <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            <dl className="rule-t">
              {rows.map((r) => (
                <div key={r.k} className="rule-b grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-4 md:grid-cols-[9rem_1fr]">
                  <dt className="label">{r.k}</dt>
                  <dd className="text-[1.05rem]">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
