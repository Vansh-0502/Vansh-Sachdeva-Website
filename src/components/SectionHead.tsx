import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  number: string;
  kicker: string;
  title: ReactNode;
  aside?: ReactNode;
};

/**
 * The masthead used at the top of every homepage section: a line that draws
 * across, a section number and kicker, and a large serif title that rises in.
 */
export function SectionHead({ number, kicker, title, aside }: Props) {
  return (
    <Reveal className="sh mb-14 md:mb-20">
      <span aria-hidden className="sh-rule block h-px w-full bg-rule-strong" />
      <div className="flex items-baseline justify-between pt-4">
        <span className="label">
          § {number} — {kicker}
        </span>
        {aside ? <span className="label hidden sm:inline">{aside}</span> : null}
      </div>
      <h2 className="sh-title display mt-8 max-w-[14ch] text-[clamp(2.75rem,7vw,6.25rem)]">{title}</h2>
    </Reveal>
  );
}
