/**
 * ABOUT, EDUCATION, SKILLS & BEYOND
 * ------------------------------------------------------------------
 * The text for the About, Education, Skills and "Off the clock"
 * sections. Edit freely — the layout adapts.
 */

export const hero = {
  greeting: "Hi, I’m",
  name: "Vansh Sachdeva",
  intro:
    "I’m a Grade 12 student at Delhi Public School, Sector-45, Gurgaon, exploring economics, finance and quantitative problem-solving through research, internships and projects I’ve built myself.",
  strip: ["Grade 12 · CBSE", "Commerce with Mathematics", "Economics & Finance", "India"],
};

export const method = [
  {
    numeral: "I",
    verb: "Understand",
    line: "How economic ideas, financial markets and human decisions actually work — not just what the definitions say.",
    where: "Reading, coursework, SUPROS",
  },
  {
    numeral: "II",
    verb: "Investigate",
    line: "Research real questions, weigh the evidence, and build an argument that holds up.",
    where: "Research projects, Air India, Modulus Systems",
  },
  {
    numeral: "III",
    verb: "Build",
    line: "Turn what I learn into something other people can use — sites, lessons, resources.",
    where: "GradeEco, Mini Traders, teaching materials",
  },
];

export const about = {
  lede:
    "I’m drawn to economics because it explains things I see every day — why prices move, why people save or don’t, why a sensible-looking decision can turn out to be a bad one.",
  paragraphs: [
    "I study Commerce with Mathematics under the CBSE curriculum at Delhi Public School, Sector-45, Gurgaon. The classroom gave me the vocabulary; a lot of what I’ve learned about how it applies has come from outside it — from an investment banking internship at SUPROS and research assistance with Air India, from research on Indian markets and consumer behaviour, and from building GradeEco.",
    "What keeps me interested is the overlap. Markets are mathematical, but the people in them aren’t always rational. Incentives look simple on paper and get complicated in practice. I like questions that need both the numbers and an understanding of behaviour to answer.",
    "I also like making things. When I understand an idea properly, my instinct is to turn it into something useful for someone else — a website, a session for younger students, a clearer set of notes.",
  ],
  facts: [
    { label: "School", value: "Delhi Public School, Sector-45, Gurgaon" },
    { label: "Curriculum", value: "CBSE · Grade 12" },
    { label: "Stream", value: "Commerce with Mathematics" },
    { label: "Direction", value: "Economics and Finance" },
  ],
  approach: [
    { title: "Start with a question", body: "A topic is too wide to work on. A question tells me what evidence I need." },
    { title: "Read before deciding", body: "Find out what’s already known before forming a view, and say where the evidence runs out." },
    { title: "Explain it simply", body: "If I can’t explain it plainly, I haven’t understood it yet." },
  ],
};

export const education = {
  school: "Delhi Public School, Sector-45, Gurgaon",
  qualification: "Senior Secondary · Grade 12",
  curriculum: "CBSE",
  stream: "Commerce with Mathematics",
  overall: "99.4",
  predicted: [
    { subject: "Mathematics", score: "100" },
    { subject: "Economics", score: "100" },
    { subject: "Accountancy", score: "100" },
  ],
  subjects: ["Mathematics", "Economics", "Accountancy", "Business Studies", "English", "Physical Education"],
  statement:
    "Economics and Mathematics appeal to me for the same reason: each rewards careful reasoning. Economics asks how people and systems behave; mathematics gives a precise way to describe it. Put together, they let you take a real-world question, reduce it to something you can analyse, and then check the answer against what actually happens.",
  awards: [{ title: "Economics Proficiency Award" }] as { title: string; note?: string }[],
};

export const skills = [
  {
    group: "Economics & Finance",
    items: [
      "Economic analysis",
      "Financial-market research",
      "Risk and return",
      "Behavioural-finance concepts",
      "Financial-literacy teaching",
    ],
  },
  {
    group: "Research & Analysis",
    items: [
      "Literature review",
      "Research synthesis",
      "Financial-process data analysis",
      "Structured problem-solving",
      "Analytical writing",
    ],
  },
  {
    group: "Digital & Creative",
    items: ["Website design & development", "Educational content", "Video editing & visual storytelling"],
  },
];

/**
 * Specific software you use (e.g. "Excel", "Figma", "Premiere Pro").
 * Leave empty to hide the line. Only add tools you actually use.
 */
export const tools: string[] = [];

export const beyond = {
  lede:
    "Outside economics, I edit video. I like the part of filmmaking where raw footage turns into a story — deciding what to keep, what to cut and what order makes it land.",
  note:
    "It’s a different kind of problem from research, but not as different as it sounds: both are about taking a lot of material and finding the structure in it.",
  frames: [
    { word: "Select", line: "Hours of footage, a few seconds worth keeping." },
    { word: "Sequence", line: "The order of shots is the argument." },
    { word: "Pace", line: "Where to hold, where to cut." },
    { word: "Finish", line: "Sound, colour, titles — the details people feel." },
  ],
  /**
   * Your edited videos, shown under the film strip. Put the .mp4 and a
   * still image (poster) in /public/videos and add a line here.
   */
  reels: [
    {
      title: "iPad",
      kind: "Product edit",
      length: "0:46",
      src: "/videos/ipad-edit.mp4",
      poster: "/videos/ipad-edit.jpg",
    },
    {
      title: "Desk setup",
      kind: "B-roll edit",
      length: "0:07",
      src: "/videos/desk-setup.mp4",
      poster: "/videos/desk-setup.jpg",
    },
  ] as { title: string; kind: string; length: string; src: string; poster: string }[],
};

/**
 * Points plotted on the hero figure — a timeline of real milestones.
 * The vertical position is decorative (it is not a measurement of anything).
 */
export const milestones = [
  { date: "May 2025", label: "Air India — research assistance begins", short: "Air India" },
  { date: "Jul 2025", label: "SUPROS — investment banking internship", short: "SUPROS" },
  { date: "Sep 2025", label: "Project Mini Traders — first sessions", short: "Mini Traders" },
  { date: "Jun 2026", label: "GradeEco — launched 15 June", short: "GradeEco" },
];
