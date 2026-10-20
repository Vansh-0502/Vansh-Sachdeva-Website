import Link from "next/link";
import { nav, site } from "@/content/site";
import { EmailLink } from "./EmailLink";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="rule-t bg-ink">
      <div className="wrap grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="display inline-block text-[2rem] transition-colors hover:text-lime" aria-label="Vansh Sachdeva on LinkedIn">
            Vansh <span className="display-i">Sachdeva</span>
          </a>
          <p className="mt-3 max-w-sm text-sm text-paper-dim">
            Economics, finance and the things I build. Grade 12, Delhi Public School, Sector-45, Gurgaon.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="label mb-4">Sections</p>
          <ul className="grid grid-cols-2 gap-y-2 text-sm md:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link text-paper-dim hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="label mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link text-paper-dim hover:text-paper">
                LinkedIn ↗
              </a>
            </li>
            {site.cv && (
              <li>
                <a href={site.cv} target="_blank" rel="noopener noreferrer" className="link text-paper-dim hover:text-paper">
                  View CV ↗
                </a>
              </li>
            )}
            <li>
              <EmailLink className="text-paper-dim" />
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap">
        <div className="rule-t flex flex-col justify-between gap-2 py-5 sm:flex-row">
          <p className="label">© {year} Vansh Sachdeva</p>
        </div>
      </div>
    </footer>
  );
}
