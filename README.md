# Portfolio — Gara Manideepak

Personal portfolio site. React + TypeScript + Tailwind CSS, built with Vite.

## Run it locally

You need Node.js 18 or newer. Open this folder in VS Code, then in the terminal:

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Other commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally |
| `npm run typecheck` | Check TypeScript without building |

## Where to edit things

All the content lives in `src/data/` — no need to touch the components:

| File | Holds |
| --- | --- |
| `src/data/profile.ts` | Name, intro, email, GitHub, LinkedIn, résumé link |
| `src/data/projects.ts` | The three projects |
| `src/data/skills.ts` | Skill groups |
| `src/data/experience.ts` | Internships |
| `src/data/education.ts` | Degrees |

Images and the résumé PDF live in `public/`. To swap a project screenshot, drop
the new image into `public/project-images/` and point `image` at it in
`projects.ts`.

Colours and fonts are defined once in `tailwind.config.js`.

## Adding a project

Add one object to the array in `src/data/projects.ts`:

```ts
{
  title: "Project name",
  summary: "One line on what it does.",
  detail: "Two or three sentences on how it works and what you built.",
  tags: ["React", "Node.js"],
  image: "project-images/your-screenshot.png",
  github: "https://github.com/...",   // optional
  demo: "https://...",                 // optional
}
```

If a project has no live demo or repo, leave those keys out — the buttons
disappear on their own.

## Deploying

`npm run build` produces a `dist/` folder. Drag that folder onto
[Netlify Drop](https://app.netlify.com/drop), or import the repo on Vercel.
Asset paths are relative (`base: "./"` in `vite.config.ts`), so the build works
from a root domain or a subfolder without changes.

For GitHub Pages, push `dist/` to a `gh-pages` branch — the relative paths mean
you do not have to set a repo name anywhere.
