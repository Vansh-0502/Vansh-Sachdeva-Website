# Vansh Sachdeva — personal website

Next.js 15 · React 19 · TypeScript · Tailwind CSS. No other runtime dependencies; fonts are self-hosted (Fraunces, Inter, JetBrains Mono).

## Run it on your computer

You need Node.js 20 or newer (https://nodejs.org).

```bash
npm install
npm run dev        # open http://localhost:3000
```

To check a production build: `npm run build` then `npm start`.

## Before you publish — checklist

1. **CV** — put your PDF in `public/` (e.g. `public/Vansh-Sachdeva-CV.pdf`), then in `src/content/site.ts` set `cv: "/Vansh-Sachdeva-CV.pdf"`. While `cv` is `null`, every "Download CV" button stays hidden.
2. **Domain** — in `site.ts`, set `url` to the address the site ends up at (for example `https://vansh-sachdeva.vercel.app`). It is used for search engines and link previews.
3. **Research statuses** — `src/content/research.ts` feeds the Research project page. Every entry says "Status to be confirmed" until you change its `status`.

## Where to edit things

All the words live in `src/content/` — you shouldn't need to touch the components to change text.

| What | File |
| --- | --- |
| Name, email, LinkedIn, CV path, photo, domain | `src/content/site.ts` |
| Hero, About, Skills, "Off the clock" | `src/content/profile.ts` |
| SUPROS / Air India / Modulus entries (add SUPROS dates here) | `src/content/experience.ts` |
| Projects (homepage + each `/projects/<slug>` page) | `src/content/projects.ts` |
| Awards & Honours | `src/content/awards.ts` |
| Research topics (shown on the Research project page) | `src/content/research.ts` |
| Software tools you use (hidden while empty) | `tools` in `src/content/profile.ts` |

## Add your photo

Put a photo in `public/` (e.g. `public/portrait.jpg`, portrait orientation works best), then in `src/content/site.ts`:

```ts
portrait: { src: "/portrait.jpg", alt: "Vansh Sachdeva" },
```

It appears in the About section (shown in black and white to match the design). Until then a typographic "VS" plate is shown.

## Add videos

In `src/content/profile.ts` → `beyond.reels`, add entries like:

```ts
{ title: "Short film", year: "2025", embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID" }
```

They replace the placeholder film-strip frames automatically.

## Attach a research paper

Put the PDF in `public/papers/`, then on the entry in `research.ts` (it will show on the Research project page):

```ts
link: { label: "Read the paper (PDF)", href: "/papers/your-paper.pdf" },
```

## Deploy (free, about 5 minutes)

**Vercel** (made by the Next.js team):

1. Put this folder in a GitHub repository.
2. Go to https://vercel.com → sign in with GitHub → **Add New → Project** → pick the repository → **Deploy**. No settings needed.
3. To use your own domain: Project → **Settings → Domains**. Then update `url` in `site.ts` and push.

Every push to GitHub redeploys the site.

Netlify or Cloudflare Pages also work with their Next.js presets.

## How it's built

- `src/app/` — pages, metadata, `sitemap.xml`, `robots.txt`, icon
- `src/components/sections/` — one file per homepage section
- `src/components/` — nav, footer, the hero chart, diagrams, expandable rows
- `public/og.png` — the image shown when the link is shared

Animations respect the "reduce motion" system setting, and everything is readable if JavaScript doesn't load.
