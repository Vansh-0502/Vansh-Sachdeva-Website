/**
 * RESEARCH JOURNAL
 * ------------------------------------------------------------------
 * Each entry is one row in the research journal on the homepage.
 *
 * STATUS — only set a status once you have confirmed it:
 *   "tbc"          → shows "Status to be confirmed"   (default, safe)
 *   "in-progress"  → "In progress"
 *   "submitted"    → "Submitted"
 *   "under-review" → "Under review"
 *   "published"    → "Published"   (add `link` to the paper)
 *
 * To attach a paper, put the PDF in /public/papers/ and set
 *   link: { label: "Read the paper (PDF)", href: "/papers/your-file.pdf" }
 * or link to the journal page instead.
 *
 * NOTE: your activities document lists three articles submitted to the
 * Journal of Student Science and Technology (JSST.uk) and two papers in
 * progress. Confirm which entry is which, then update the statuses below
 * (and add `venue: "JSST"` where it applies).
 */

export type ResearchStatus = "tbc" | "in-progress" | "submitted" | "under-review" | "published";

export type ResearchEntry = {
  id: string;
  number: string;
  subject: string;
  title: string;
  question: string;
  abstract: string;
  approach: string;
  status: ResearchStatus;
  venue?: string;
  date?: string;
  link?: { label: string; href: string };
};

export const statusLabel: Record<ResearchStatus, string> = {
  tbc: "Status to be confirmed",
  "in-progress": "Still in progress",
  submitted: "Submitted",
  "under-review": "Under review",
  published: "Published",
};

export const research: ResearchEntry[] = [
  {
    id: "financial-inclusion",
    number: "No. 01",
    subject: "Development · Finance",
    title: "Retail investor participation and financial inclusion",
    question:
      "Who participates in India's financial markets, and what helps or stops more people from taking part?",
    abstract:
      "More Indians than ever hold investments, yet participation is still uneven. This project looks at retail investor participation as part of the wider question of financial inclusion.",
    approach: "Review of existing research on retail participation and financial-inclusion policy.",
    status: "in-progress",
  },
];

/** The open questions shown in the "Questions I'm working on" margin. */
export const openQuestions = [
  "How do changes in interest rates affect equity markets in emerging economies?",
  "Why do investors sometimes make decisions that conflict with conventional financial reasoning?",
  "How does access to digital payments change saving, spending and participation in the financial system?",
];
