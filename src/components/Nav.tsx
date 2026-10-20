"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink rule-b" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} — home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper-dim transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:gap-4">
          <ThemeToggle />
          {site.cv && (
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-3.5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper ring-1 ring-inset ring-rule-strong transition-colors hover:bg-lime hover:text-ink hover:ring-lime lg:inline-flex lg:items-center lg:gap-2"
          >
            View CV <span aria-hidden>↗</span>
          </a>
          )}
          {!site.cv && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper lg:inline-flex lg:items-center lg:gap-2"
            >
              <span className="link">LinkedIn</span>
              <span aria-hidden className="text-lime">↗</span>
            </a>
          )}

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pb-10 pt-6">
          <p className="label mb-6">Contents</p>
          <ul className="rule-t">
            {nav.map((item, i) => (
              <li key={item.href} className="rule-b">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="display text-[2.6rem] text-paper">{item.label}</span>
                  <span className="font-mono text-xs text-paper-faint">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            {site.cv && (
              <a href={site.cv} target="_blank" rel="noopener noreferrer" className="btn-line justify-between">
                View CV <span aria-hidden>↗</span>
              </a>
            )}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-solid justify-between">
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
