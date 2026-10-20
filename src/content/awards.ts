/**
 * AWARDS & HONOURS
 * ------------------------------------------------------------------
 * Each entry is one row in the "Awards & Honours" section.
 * `marks` draws the small row of squares beside it (e.g. one per year).
 */

export type Award = {
  id: string;
  title: string;
  body: string;
  /** Short facts shown as small labels. */
  facts: string[];
  marks: { count: number; caption: string };
  /** Picture shown in the circular frame (file lives in /public). */
  image: { src: string; alt: string };
  detail?: { heading: string; items: { name: string; text: string }[] };
};

export const awards: Award[] = [
  {
    id: "gold-medal",
    title: "The Principal’s Gold Medal",
    body: "Awarded for scoring above 90% for more than eight consecutive years at school.",
    facts: ["90%+ every year", "8+ consecutive years"],
    marks: { count: 8, caption: "Eight consecutive years above 90%" },
    image: { src: "/award-gold-medal.jpg", alt: "Delhi Public School, Gurgaon Gold Medal 2025–26 for Continuous Academic Excellence, awarded to Vansh Sachdeva" },
  },
  {
    id: "duke-of-edinburgh",
    title: "Duke of Edinburgh’s International Award — Bronze",
    body: "The Duke of Edinburgh’s International Award is a non-competitive programme for young people, run in more than 100 countries. Instead of rewarding a single performance, it asks participants to set their own goals and keep working at them over a long period. The Bronze level takes at least six months and covers four sections, each of which has to be completed.",
    facts: ["Bronze level", "Minimum six months", "Four sections"],
    marks: { count: 4, caption: "Four sections, all completed" },
    image: { src: "/award-dofe.png", alt: "The International Award for Young People emblem on a map of India" },
    detail: {
      heading: "The four sections",
      items: [
        { name: "Voluntary Service", text: "Regular volunteering that gives time to the community." },
        { name: "Physical Recreation", text: "A sport or physical activity, kept up and improved over time." },
        { name: "Skills", text: "Building a personal skill or interest week by week." },
        { name: "Adventurous Journey", text: "A planned expedition, completed as part of a team." },
      ],
    },
  },
];
