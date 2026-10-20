"use client";

import { useState } from "react";

/** A small "Copy" button next to the email address. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      data-copy={value}
      aria-label={`Copy ${label}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          /* clipboard blocked: the text stays selectable */
        }
      }}
      className="ml-3 inline-flex items-center px-2 py-1 align-middle font-mono text-[0.62rem] uppercase tracking-[0.12em] text-paper-dim ring-1 ring-inset ring-rule transition-colors hover:text-paper hover:ring-rule-strong"
    >
      <span data-copy-label>{done ? "Copied" : "Copy"}</span>
    </button>
  );
}
