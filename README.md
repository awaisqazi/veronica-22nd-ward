# Veronica Quiñones for 22nd Ward (concept)

A concept site that visualizes what a 2027 campaign for Chicago's 22nd Ward (Little Village)
alderperson could look like for Veronica Quiñones, co-founder and vice president of the Latina
Sweat Project and a lifelong Little Village resident. Nothing here is a declaration of candidacy.
The site ships with `<meta name="robots" content="noindex, nofollow">`.

Live: https://awaisqazi.github.io/veronica-22nd-ward/

## Stack

Astro 6, vanilla CSS, a small client-side EN/ES toggle (`src/i18n/`), one motion script.
Deploys to GitHub Pages from `main` via `.github/workflows/deploy.yml`.

```bash
npm install
npm run dev
npm run build
```

## Pages

| Route | What it is |
|---|---|
| `/` | Hero, "what we already built", bio teaser, seven planks, the choice-not-handoff banner, key dates |
| `/meet/` | Biography: family, Little Village roots, how she listens |
| `/platform/` | Seven planks with mechanisms, contrasts, first 100 days, slogans |
| `/join/` | Petition sprint, roles, prototype signup form |

## Sources for the bio

- latinasweatproject.com about page (Director; "Vice President" in the bio text) and graduation page ("Co-Founder, Director & Studio Manager")
- Chicago Reader, "Más allá del estudio," Aug 21, 2026 (named as LSP's vice president)
- Chicago Tribune, Aug 6, 2023, on Margarita Quiñones-Peña's book "Homecoming" (family story; Veronica, born in Chicago, youngest of three sisters)
- WGN9 Around Town feature (Veronica appears with members talking about the art gallery)

## Before anything goes public

- Confirm Veronica's title with the LSP board (the LSP site says "Director", "Vice President", and "Co-Founder, Director & Studio Manager" in different places).
- Confirm her address is inside the post-2022 22nd Ward boundary since at least Feb 23, 2026.
- LSP is a 501(c)(3). Photos in `public/images/lsp/` are used here as biography only; replace with
  campaign-owned photography and get written permission or remove before any public launch.
- Verify every number against LSP's public reporting.
- Add "Paid for by" and ISBE disclosure lines once a committee exists.
