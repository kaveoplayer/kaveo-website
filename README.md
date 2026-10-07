# Kaveo website

The public site for [Kaveo](https://github.com/kaveoplayer/kaveo-releases): the landing page,
downloads, support, privacy, third-party licences, and the user guide. Built with
[Starlight](https://starlight.astro.build/) on Astro.

## Run it

```bash
npm ci               # install (npm install the first time a dependency changes)
npm run dev          # import the guide, then serve on http://localhost:4321/
npm run build        # import the guide, generate llms.txt, build into dist/, validate every link
npm run preview      # serve dist/
```

`npm run build` fails on a broken internal link — in the guide or in the site's own pages —
through [starlight-links-validator](https://github.com/HiDeoo/starlight-links-validator).

## Where things are

| path | what it is |
|---|---|
| `site.config.mjs` | **The single place for every address**: the site URL and base path, the releases repository, the issue tracker, discussions, and the licence e-mail. A domain move or a renamed repository is a change here. |
| `src/content/docs/*.md(x)` | The site's own pages: landing (`index.mdx`), download, support, privacy, licences, 404. |
| `upstream/guide/` | The user guide, **verbatim** from Kaveo's `docs/user/`. Written by Kaveo's publish workflow; never edited here. |
| `scripts/import-guide.mjs` | Turns `upstream/guide/` into Starlight pages, and builds the guide's sidebar. |
| `src/content/docs/guide/` | The imported guide. Generated and gitignored. |
| `scripts/generate-llms-txt.mjs` | Writes `llms.txt`, `llms-full.txt` and `robots.txt` into `public/` at build time. |
| `src/styles/custom.css` | Kaveo's palette (from the app's `theme.rs`) on Starlight's colour tokens, light and dark. |
| `src/styles/fonts.css`, `src/assets/fonts/` | Manrope and Space Grotesk, self-hosted. |
| `src/assets/logo.svg`, `public/favicon.svg` | The app icon, as the app itself generates it. |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to `main`. |

## How the guide is imported

Kaveo's guide is written to its own rules (Kaveo's `docs/internal/USER-DOCS.md`): every page has
`title`, `description` and `order` in its front matter, each group directory has an `index.md`
naming the group, images live in `images/<group>/`, and pages link each other with relative `.md`
paths. `scripts/import-guide.mjs` is the only translator between that format and Starlight's:

- `order: N` becomes `sidebar: { order: N }`; a group's `index.md` becomes that group's
  **Overview**, first in the group;
- each group's sidebar **label and position** come from its `index.md` (`title` and `order`),
  interleaved with the guide's top-level pages by `order` — Starlight's own `autogenerate` would
  label a group with its directory name;
- `images/` is copied beside the pages, so `../images/...` keeps resolving;
- links stay as written; `astro-rehype-relative-markdown-links` rewrites them into page URLs.

The import runs before every `dev` and `build`; run it alone with `npm run import-guide`.

## Publishing the guide into this repository

Kaveo's `.github/workflows/publish-user-docs.yml` mirrors its `docs/user/` into this repository's
`upstream/guide/` (an `rsync --delete` scoped to that directory, so it can never touch the site's
own pages) and pushes; the push deploys the site.

## Deploying

GitHub Pages, from `.github/workflows/deploy.yml`, on GitHub-hosted runners — never a self-hosted one: on a
public repository a pull request could run code on that machine. The repository's
Pages source must be set to **GitHub Actions**. The site is served at `https://kaveoplayer.com/`: the
domain is in `public/CNAME` and in `SITE_URL` in `site.config.mjs`, and the DNS zone (at OVH) points
the apex at GitHub Pages' addresses and `www` at `kaveoplayer.github.io`.
