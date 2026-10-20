import { createElement, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  id?: string;
  stagger?: boolean;
};

/**
 * Marks its children to animate in the first time they scroll into view.
 * The watching is done once for the whole page by <RevealObserver />.
 * `stagger` animates each direct child one after another instead.
 */
export function Reveal({ children, as = "div", delay = 0, className = "", id, stagger = false }: Props) {
  return createElement(
    as,
    { id, className: `${stagger ? "reveal-stagger" : "reveal"} ${className}`, style: { "--d": `${delay}ms` } as React.CSSProperties },
    children
  );
}
