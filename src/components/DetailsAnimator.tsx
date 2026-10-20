"use client";

import { useEffect } from "react";

/**
 * Makes the Work "Responsibilities & what I explored" panels slide open and
 * closed smoothly instead of appearing instantly. Without JavaScript the
 * native <details> element still opens and closes, just without the motion.
 */
export function DetailsAnimator() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new WeakMap<HTMLElement, Animation>();

    const onClick = (e: MouseEvent) => {
      const summary = (e.target as Element | null)?.closest?.(".exp-details > summary");
      if (!summary || reduce.matches) return;
      const details = summary.parentElement as HTMLDetailsElement;
      const panel = details.querySelector<HTMLElement>(":scope > div");
      if (!panel) return;
      e.preventDefault();

      running.get(panel)?.cancel();
      const ease = "cubic-bezier(0.2, 0.7, 0.2, 1)";
      panel.style.overflow = "hidden";

      if (!details.open) {
        details.open = true;
        details.classList.add("exp-opening");
        const h = panel.offsetHeight;
        const pad = getComputedStyle(panel).paddingTop;
        const a = panel.animate(
          [
            { height: "0px", paddingTop: "0px", opacity: 0 },
            { height: `${h}px`, paddingTop: pad, opacity: 1 },
          ],
          { duration: 550, easing: ease }
        );
        running.set(panel, a);
        a.onfinish = () => {
          panel.style.overflow = "";
          details.classList.remove("exp-opening");
        };
      } else {
        const h = panel.offsetHeight;
        const pad = getComputedStyle(panel).paddingTop;
        details.classList.add("exp-closing");
        const a = panel.animate(
          [
            { height: `${h}px`, paddingTop: pad, opacity: 1 },
            { height: "0px", paddingTop: "0px", opacity: 0 },
          ],
          { duration: 420, easing: ease, fill: "forwards" }
        );
        running.set(panel, a);
        a.onfinish = () => {
          details.open = false;
          a.cancel();
          panel.style.overflow = "";
          details.classList.remove("exp-closing");
        };
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
