# Portfolio Implementation Plan
> Execute inline using executing-plans. User authorized routine decisions and no additional approval rounds.
**Goal:** Build and deploy Nima's bilingual portfolio to GitHub Pages.
**Architecture:** Next.js App Router static locale pages; typed shared data; server-rendered accessible components; native links and disclosure interactions.
**Tech Stack:** Next.js, React, TypeScript, CSS, self-hosted fonts.
**Spec:** ../specs/2026-10-06-portfolio-design.md
## Global Constraints
Seven truthful projects; English/Persian; approved warm editorial direction; GitHub Pages; correct public versus planned statuses.
## Review Focus
RTL navigation; mobile overflow; language routes and invalid locales; PDF downloads; keyboard/reduced-motion interaction.
## Tasks
- [x] Create package/config, localized content and locale validation; test invalid locales and localized project status.
- [x] Build page components, artwork, typography, responsive CSS, metadata and resume links.
- [x] Verify production build and route/assets responses; inspect desktop and mobile in both languages.
- [ ] Deploy through GitHub CLI; complete account login if needed; verify deployed URL.

## Verification
Production export and TypeScript pass. Six Playwright checks pass at 1440px and 390px in both languages, including locale switching, keyboard disclosure, reduced motion, PDF/font/social-image responses, and invalid routes. Repeated against /portfolio base path successfully. Desktop English and mobile Persian screenshots reviewed. GitHub CLI authorization pending before repository creation and publication.
