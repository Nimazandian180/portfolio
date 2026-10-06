# Nima Zandian — Portfolio

GitHub Pages URL: https://nimazandian180.github.io/portfolio/
Repository: https://github.com/Nimazandian180/portfolio

A bilingual English/Persian portfolio built with Next.js, React and TypeScript. Includes seven projects, RTL layouts, native accessible project disclosures, resume downloads, contact links, and locally hosted fonts.

## Develop

Node.js 24 is recommended.

```sh
npm ci
npm run dev
```

## Production preview

```sh
npm run build
npm start
```

Open http://localhost:3000/en/ or /fa/.

## Check

```sh
npm test
npm run typecheck
npx playwright install chromium
npm run test:browser
```

Start the production preview before browser tests. Use PLAYWRIGHT_BASE_URL for another host. PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH optionally points to an already installed Chromium.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. Set repository Settings → Pages → Source to **GitHub Actions**. The build reads `base_path` from GitHub's configure-pages action, so fonts, downloads, links and framework assets work for both user sites and project sites.

`npm run build` exports the app to `out/`, adds a root language redirect and `.nojekyll`. To preview a project-site export:

```sh
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
NEXT_PUBLIC_BASE_PATH=/portfolio npm start
```

## Edit content

- `src/lib/content.ts`: localized project descriptions, statuses and page copy.
- `src/components/portfolio.tsx`: sections and contact details.
- `src/app/globals.css`: responsive visual styling.
- `public/resume/`: current English and Persian PDFs.
- `public/fonts/`: locally hosted fonts and license notices.

Project art is conceptual, not product screenshots. Unreleased projects are marked as planned. No user counts or performance gains are fabricated.
