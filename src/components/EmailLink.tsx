import { composeHref, site } from "@/content/site";

/** Your email address, linked to a new Gmail message (opens in a new tab). */
export function EmailLink({ className = "" }: { className?: string }) {
  const href = composeHref();
  if (!href) {
    return (
      <span className={className} title="Add your email address in src/content/site.ts">
        {site.emailPlaceholder}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {site.email}
    </a>
  );
}
