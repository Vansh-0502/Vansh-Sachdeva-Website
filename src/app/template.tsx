/** Re-mounts on every page change, so each new page's content rises in. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
