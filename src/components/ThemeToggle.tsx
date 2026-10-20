"use client";

/**
 * Switches between the dark and light colour schemes. The choice is
 * remembered in the browser; the site starts in dark mode otherwise.
 * The icon shows the mode you will switch to.
 */
export function ThemeToggle() {
  const flip = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("vs-theme", next);
    } catch {
      /* storage blocked: the switch still works for this visit */
    }
  };
  return (
    <button
      type="button"
      data-theme-toggle
      onClick={flip}
      aria-label="Switch between dark and light mode"
      title="Dark / light mode"
      className="theme-toggle relative flex h-9 w-9 items-center justify-center text-paper ring-1 ring-inset ring-rule-strong transition-colors hover:text-lime hover:ring-lime"
    >
      {/* sun — shown in dark mode */}
      <svg aria-hidden viewBox="0 0 24 24" className="tt-sun h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
      </svg>
      {/* moon — shown in light mode */}
      <svg aria-hidden viewBox="0 0 24 24" className="tt-moon h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
