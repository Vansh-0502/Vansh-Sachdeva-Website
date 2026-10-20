/**
 * The site's wordmark: a square monogram tile beside the name set in two
 * weights, with a small descriptor underneath.
 */
export function Logo() {
  return (
    <span className="logo group/logo flex items-center gap-3">
      <span
        aria-hidden
        className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden ring-1 ring-lime transition-colors duration-300 group-hover/logo:bg-lime"
      >
        {/* fill that sweeps up on hover */}
        <span className="absolute inset-x-0 bottom-0 h-0 bg-lime transition-all duration-300 group-hover/logo:h-full" />
        <span className="display relative text-[1.35rem] leading-none tracking-[-0.06em] text-paper transition-colors duration-300 group-hover/logo:text-ink">
          V<span className="display-i text-lime transition-colors duration-300 group-hover/logo:text-ink">S</span>
        </span>
        {/* corner tick */}
        <span className="logo-dot absolute right-[3px] top-[3px] h-1 w-1 bg-lime transition-colors group-hover/logo:bg-ink" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="display whitespace-nowrap text-[1.15rem] tracking-[-0.01em] text-paper">
          Vansh <span className="display-i">Sachdeva</span>
        </span>
      </span>
    </span>
  );
}
