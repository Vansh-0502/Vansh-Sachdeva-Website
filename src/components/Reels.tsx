"use client";

import { useEffect, useRef } from "react";
import { beyond } from "@/content/profile";
import { initReels } from "@/lib/reels";

/**
 * "Selected edits": each video plays silently on a loop inside a camera
 * viewfinder while it is on screen. Clicking it opens a large player with
 * sound. Behaviour lives in lib/reels.js.
 */
export function Reels() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) initReels(ref.current);
  }, []);

  const reels = beyond.reels;
  return (
    <div ref={ref} className="mt-16 md:mt-24">
      <div data-reels>
        <div className="reveal flex items-baseline justify-between border-b border-rule-strong pb-3">
          <p className="label">Selected edits</p>
          <p className="label">Tap a video to watch with sound</p>
        </div>

        <ul className="reveal-stagger mt-10 grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
          {reels.map((r, i) => (
            <li key={r.src}>
              <figure data-reel data-title={r.title} data-kind={r.kind} className="reel group">
                <button
                  type="button"
                  data-reel-open
                  aria-label={`Play ${r.title} (${r.kind}) with sound`}
                  className="relative block w-full overflow-hidden bg-ink-3 text-left ring-1 ring-rule transition-shadow duration-500 hover:ring-lime focus-visible:ring-lime"
                >
                  <video
                    src={r.src}
                    poster={r.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden
                    tabIndex={-1}
                    className="block aspect-video w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* shade so the labels stay readable */}
                  <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/40" />
                  {/* viewfinder corners */}
                  <span aria-hidden className="reel-corner left-3 top-3 border-l border-t" />
                  <span aria-hidden className="reel-corner right-3 top-3 border-r border-t" />
                  <span aria-hidden className="reel-corner bottom-3 left-3 border-b border-l" />
                  <span aria-hidden className="reel-corner bottom-3 right-3 border-b border-r" />
                  {/* top bar: live dot + timecode */}
                  <span aria-hidden className="pointer-events-none absolute inset-x-6 top-5 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/85">
                    <span className="flex items-center gap-2">
                      <span className="reel-dot h-1.5 w-1.5 rounded-full bg-[#ff4d3d]" />
                      Edit {String(i + 1).padStart(2, "0")}
                    </span>
                    <span data-reel-time>00:00:00</span>
                  </span>
                  {/* centre play button */}
                  <span aria-hidden className="reel-play pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/60 backdrop-blur-sm md:h-16 md:w-16">
                      <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-white"><path d="M7 4.5v15l12-7.5z" /></svg>
                    </span>
                  </span>
                  {/* bottom caption */}
                  <span className="pointer-events-none absolute inset-x-6 bottom-5 flex items-end justify-between gap-4 text-white">
                    <span>
                      <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/70">{r.kind}</span>
                      <span className="display mt-1 block text-[1.8rem] leading-none md:text-[2.4rem]">{r.title}</span>
                    </span>
                    <span className="font-mono text-[0.68rem] text-white/70">{r.length}</span>
                  </span>
                </button>
              </figure>
            </li>
          ))}
        </ul>

        {/* large player */}
        <div
          data-reel-modal
          hidden
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="reel-modal fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md md:p-10"
        >
          <figure className="reel-modal-inner w-full max-w-5xl">
            <div className="mb-3 flex items-end justify-between gap-4 text-white">
              <span>
                <span data-reel-modal-kind className="block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/60" />
                <span data-reel-modal-title className="display mt-1 block text-[1.8rem] leading-none md:text-[2.4rem]" />
              </span>
              <button
                type="button"
                data-reel-close
                aria-label="Close video"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white ring-1 ring-white/40 transition-colors hover:bg-white hover:text-black"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
              </button>
            </div>
            <video controls playsInline className="block aspect-video w-full bg-black" />
          </figure>
        </div>
      </div>
    </div>
  );
}
