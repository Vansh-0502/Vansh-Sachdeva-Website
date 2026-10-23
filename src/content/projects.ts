/**
 * PROJECTS
 * ------------------------------------------------------------------
 * Every project here gets a row on the homepage AND its own page at
 * /projects/<slug>. To add a project, copy an entry and change the slug.
 *
 * category: "project" | "research" | "education"  (drives the filters)
 */

export type Category = "project" | "research" | "education";

export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  category: Category;
  role: string;
  org?: string;
  dates: string;
  year: string;
  /** One sentence used in lists. */
  summary: string;
  /** Optional short status shown as a small badge, e.g. "In progress". */
  status?: string;
  /** The longer introduction used at the top of the detail page. */
  intro: string;
  sections: { heading: string; body: string[] }[];
  contributions?: string[];
  themes: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const categoryLabel: Record<Category, string> = {
  project: "Projects",
  research: "Research",
  education: "Education",
};

export const projects: Project[] = [
  {
    slug: "gradeeco",
    index: "P.01",
    title: "GradeEco",
    kicker: "An economics-learning platform I designed and built",
    category: "project",
    role: "Founder · Designer & Developer",
    dates: "Built 2025–26 · Launched 15 June 2026",
    year: "2026",
    featured: true,
    summary:
      "A website that explains CBSE Economics for Grades 11 and 12 clearly and in order — designed, written and built by me.",
    intro:
      "GradeEco is an economics-learning website I developed independently for students studying CBSE Economics in Grades 11 and 12. Its aim is simple: explain economic concepts clearly and systematically, so the reasoning behind them is as visible as the definitions.",
    sections: [
      {
        heading: "The problem",
        body: [
          "Economics is easy to revise as a list of separate chapters, and much harder to understand as one connected way of thinking.",
          "GradeEco tries to make it more accessible by explaining concepts clearly and in a sensible order, so each idea builds on the one before it.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "I worked on every layer of it — the structure of the site, the interface, the educational content and the build itself. It is the project where my interest in economics and my interest in making things meet most directly.",
        ],
      },
      {
        heading: "Where it goes next",
        body: [
          "The platform is designed to grow. Notes, flashcards and further learning resources are natural next additions, and I am thinking about how it could become a sustainable educational product rather than a one-off website.",
        ],
      },
    ],
    contributions: [
      "Designed the site's structure and user interface.",
      "Developed and organised the educational content.",
      "Built the website and its learning experience.",
      "Explored how to make economics education more accessible.",
      "Thinking through how it can grow into a sustainable product.",
    ],
    themes: ["Product design", "Web development", "Economics education"],
    links: [
      { label: "Visit GradeEco", href: "https://gradeeco.vercel.app/" },
      { label: "Instagram", href: "https://www.instagram.com/gradeeco/" },
    ],
  },
  {
    slug: "econospect",
    index: "P.02",
    title: "Econospect",
    kicker: "A learning platform for economics and finance",
    category: "project",
    role: "Creator",
    dates: "Live",
    year: "2026",
    summary:
      "A learning platform that makes economics and finance easier to understand, with clear explanations, interactive tools and real-world context.",
    intro:
      "Econospect is a learning platform I made to help people understand money, markets and economies. It brings together clear explanations, interactive tools and real-world context, so the ideas are easier to follow and to use.",
    sections: [
      {
        heading: "What it covers",
        body: [
          "How money, markets and economies work, explained in plain language.",
          "Interactive tools that let you see a concept in action rather than only read about it.",
          "Real-world context, so each idea is connected to something you can recognise.",
        ],
      },
    ],
    themes: ["Economics education", "Finance", "Web development"],
    links: [{ label: "Visit Econospect", href: "https://finance-and-economics-educational-platform.vercel.app/" }],
  },
  {
    slug: "mini-traders",
    index: "P.03",
    title: "Project Mini Traders",
    kicker: "Teaching younger students how markets work",
    category: "education",
    role: "Designer & Session Lead",
    dates: "15 Sep 2025 – 30 Jan 2026",
    year: "2025",
    summary:
      "A financial-literacy initiative I designed and ran, introducing younger students to markets, valuation and risk through simulated trading.",
    intro:
      "Project Mini Traders was a financial-literacy initiative: a series of sessions I designed and conducted to introduce younger students to how financial markets work.",
    sections: [
      {
        heading: "What the sessions covered",
        body: [
          "Financial markets and what a share actually is; basic investing concepts; how companies are valued; why share prices move; and the relationship between risk and return.",
        ],
      },
      {
        heading: "How they ran",
        body: [
          "Each session paired a short explanation with something to do — simulated trading exercises and discussions of real market events — so the ideas had somewhere to land.",
          "It connected my own interest in markets with teaching and communication — the same idea of making economics accessible that sits behind GradeEco.",
        ],
      },
    ],
    themes: ["Financial literacy", "Teaching", "Communication"],
    links: [{ label: "Visit Mini Traders", href: "https://mini-traders.vercel.app/" }],
  },
  {
    slug: "community",
    index: "P.04",
    title: "Accessible Economics",
    kicker: "Volunteering and teaching materials",
    category: "education",
    role: "Volunteer · Collaborator",
    dates: "Ongoing",
    year: "2025",
    summary:
      "Volunteering at the National School for the Blind, and co-creating economics and finance teaching materials for government-aided schools.",
    intro:
      "A smaller but important thread in my work: making economic and financial ideas reachable for students who don't usually get good material on them.",
    sections: [
      {
        heading: "What this involves",
        body: [
          "Volunteering at the National School for the Blind.",
          "Collaborating on economics and finance teaching materials intended for government-aided schools.",
          "The common thread is translation — turning complex concepts into resources that are genuinely usable by the people they are meant for.",
        ],
      },
    ],
    themes: ["Accessibility", "Teaching materials", "Volunteering"],
    links: [{ label: "Visit Accessible Economics", href: "https://economics-and-finance-teaching-modu.vercel.app/" }],
  },
  {
    slug: "research",
    index: "P.05",
    title: "Economics & Finance Research",
    kicker: "Retail investor participation & financial inclusion",
    category: "research",
    role: "Independent researcher",
    dates: "2025 – present",
    year: "2025",
    status: "Still in progress",
    summary:
      "Ongoing research on retail investor participation and financial inclusion in India.",
    intro:
      "Alongside school, I am researching retail investor participation and financial inclusion in India: who takes part in the country's financial markets, and what helps or stops more people from doing so. This work is still in progress.",
    sections: [
      {
        heading: "How I approach it",
        body: [
          "Each project is framed around a question rather than a topic, and starts from what has already been written about it.",
          "The research is still in progress, so there are no findings or publications to share yet.",
        ],
      },
    ],
    themes: ["Retail investors", "Financial inclusion", "Indian markets"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
