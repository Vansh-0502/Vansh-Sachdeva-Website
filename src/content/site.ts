/**
 * SITE-WIDE SETTINGS
 * ------------------------------------------------------------------
 * Edit these values first. Everything here is used across the site.
 */

export const site = {
  name: "Vansh Sachdeva",
  monogram: "VS",

  /** Replace with your real domain once you deploy (used for SEO, sitemap, social previews). */
  url: "https://vanshsachdeva.com",

  /** Used in the browser tab and when the link is shared. */
  title: "Vansh Sachdeva — Economics, Finance & Things I Build",
  description:
    "Vansh Sachdeva is a Grade 12 Commerce-with-Mathematics student at Delhi Public School, Sector-45, Gurgaon, exploring economics, finance and quantitative problem-solving through research, internships and GradeEco, an economics-learning site he built.",

  /**
   * Your email address. While this is an empty string, the site shows the
   * placeholder text below instead of a working link. Put your address in
   * (e.g. "name@example.com") and every "email" link starts working.
   */
  email: "vanshsachdeva1000@gmail.com",
  emailPlaceholder: "[YOUR EMAIL ADDRESS]",


  linkedin: "https://www.linkedin.com/in/vansh--sachdeva",

  /** GradeEco's live address. */
  gradeeco: "https://gradeeco.vercel.app/",

  /** GradeEco's Instagram page. */
  gradeecoInstagram: "https://www.instagram.com/gradeeco/",

  /**
   * Your CV. Put the PDF in /public (e.g. /public/Vansh-Sachdeva-CV.pdf) and
   * set this to "/Vansh-Sachdeva-CV.pdf". While it is null, every
   * "Download CV" button is hidden.
   */
  cv: "/Vansh-Sachdeva-CV.pdf" as null | string,

  /**
   * Optional portrait. Put a photo in /public (e.g. /portrait.jpg) and set
   * the path here. Leave null to show the typographic monogram plate instead.
   */
  portrait: { src: "/portrait.jpg", alt: "Vansh Sachdeva" } as null | { src: string; alt: string },

  location: "India",
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/projects/research" },
  { label: "Projects", href: "/#projects" },
  { label: "Awards", href: "/#awards" },
  { label: "Contact", href: "/#contact" },
];

export function emailHref() {
  return site.email ? `mailto:${site.email}` : null;
}

/**
 * Opens a new email to you in Gmail in the browser. Used by the "Write to me"
 * button because it works everywhere a web page does, including places where
 * mailto: links are blocked.
 */
export function composeHref() {
  if (!site.email) return null;
  const params = new URLSearchParams({ view: "cm", fs: "1", to: site.email, su: "Hello Vansh" });
  return `https://mail.google.com/mail/?${params.toString()}`;
}
