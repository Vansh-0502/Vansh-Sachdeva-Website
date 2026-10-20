"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Page-change animation. Clicking a link to another page fades the current
 * page out quickly; the new page then fades up in (see .page-in in
 * globals.css).
 */
const FADE_MS = 260;

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const busy = useRef(false);

  // a new page has arrived: drop the "leaving" state so the panel slides away
  useEffect(() => {
    document.documentElement.classList.remove("pt-leaving");
    busy.current = false;
  }, [pathname]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (/\.(pdf|jpg|png)$/i.test(url.pathname)) return;
      if (url.pathname === location.pathname) return; // same page: let the smooth scroll happen
      if (reduce.matches || busy.current) return;

      e.preventDefault();
      e.stopPropagation();
      busy.current = true;
      document.documentElement.classList.add("pt-leaving");
      window.setTimeout(() => router.push(url.pathname + url.search + url.hash), FADE_MS);
    };

    // coming back with the browser's Back button must never show a covered page
    const onShow = () => document.documentElement.classList.remove("pt-leaving");

    document.addEventListener("click", onClick, true);
    window.addEventListener("pageshow", onShow);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("pageshow", onShow);
    };
  }, [router]);

  return null;
}
