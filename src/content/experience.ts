/**
 * WORK & RESEARCH EXPERIENCE
 * ------------------------------------------------------------------
 * Each entry renders as one row in the "Work" timeline on the homepage.
 */

export type Experience = {
  id: string;
  index: string;
  org: string;
  role: string;
  dates: string;
  /** Short dates for the timeline rail. Leave start empty to show "Internship". */
  start: string;
  end: string;
  withPerson?: { label: string; name: string };
  summary: string;
  context: string;
  responsibilities: string[];
  explored: string[];
  skills: string[];
};

export const experience: Experience[] = [
  {
    id: "supros",
    index: "01",
    org: "SUPROS",
    role: "Investment Banking Intern",
    /**
     * Add the internship dates here, e.g. dates: "Jun 2025 – Jul 2025",
     * start: "Jun 2025", end: "Jul 2025". While start is empty the timeline
     * shows "Internship" instead of dates.
     */
    dates: "Jul 2025 – Aug 2025",
    start: "Jul 2025",
    end: "Aug 2025",
    withPerson: { label: "Mentor", name: "Ms. Soumya Chauhan" },
    summary:
      "An investment-banking project on M&A, IPOs, corporate finance and how companies are valued.",
    context:
      "I completed this internship under the guidance of Ms. Soumya Chauhan, an investment banking professional with experience at J.P. Morgan. It was organised as a structured investment-banking project, working through the concepts behind deals and the analysis that supports them.",
    responsibilities: [
      "Researched M&A, IPOs and corporate-finance concepts through a structured investment-banking project.",
      "Analysed company financials and industry trends to evaluate business performance.",
      "Studied valuation methodologies and their application in investment-banking analysis.",
    ],
    explored: [
      "How mergers, acquisitions and IPOs are structured and why companies pursue them.",
      "Reading company financials to judge how a business is performing.",
      "Valuation methods and where each is used in investment-banking work.",
    ],
    skills: ["M&A and IPOs", "Corporate finance", "Financial statement analysis", "Valuation"],
  },
  {
    id: "air-india",
    index: "02",
    org: "Air India",
    role: "Research & Analysis Assistance",
    dates: "10 May 2025 – 19 Aug 2025",
    start: "May 2025",
    end: "Aug 2025",
    withPerson: { label: "Worked with", name: "Capt. Sameer Bagai" },
    summary:
      "Research assistance on the economics of running an airline — routes, fuel, demand and financing.",
    context:
      "Aviation is one of the clearest places to watch economics and finance collide: thin margins, volatile fuel prices, expensive assets and demand that swings with the wider economy. I assisted with research and analysis on several of these questions.",
    responsibilities: [
      "Assisted with research and analytical work on aviation operations and financial economics, across the four areas listed alongside.",
    ],
    explored: [
      "What makes one airline route profitable and another not.",
      "Fuel hedging and commodity-price risk.",
      "The financial implications of demand recovery in Indian aviation.",
      "How interest rates and currency movements feed into aircraft leasing and fleet financing.",
    ],
    skills: ["Industry research", "Commodity & currency risk", "Financial economics", "Analytical writing"],
  },
  {
    id: "modulus",
    index: "03",
    org: "Modulus Systems",
    role: "Research Collaborator",
    dates: "2025 – 2026",
    start: "2025",
    end: "2026",
    summary:
      "Research on how social media shapes the buying behaviour of people aged 16–24.",
    context:
      "This project looked at how influencer endorsements, visual commerce, algorithm-driven discovery and targeted advertising can affect purchase intent. For me it sat right at the meeting point of behavioural economics, consumer psychology and digital markets.",
    responsibilities: [
      "Reviewed existing research on social media and consumer behaviour.",
      "Assisted with building the research framework.",
      "Supported analysis of survey and digital-analytics data.",
    ],
    explored: [
      "Influencer endorsements and how they shape purchase intent.",
      "Visual commerce and algorithm-driven product discovery.",
      "Targeted advertising and its effect on consumer behaviour.",
    ],
    skills: ["Literature review", "Research design", "Survey data", "Behavioural economics"],
  },
];
