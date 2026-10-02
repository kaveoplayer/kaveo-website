#!/usr/bin/env node

/**
 * The only translator from Kaveo's guide format to Starlight's.
 *
 * Input: `upstream/guide/`, a verbatim copy of Kaveo's `docs/user/` (written there by Kaveo's
 * publish workflow, never edited here). Output: `src/content/docs/guide/`, generated and gitignored.
 *
 * What it translates:
 *   - front matter: the guide's top-level `order: N` becomes Starlight's `sidebar: { order: N }`;
 *     `title` and `description` pass through untouched. A group's `index.md` is that group's
 *     overview page, so it is ordered first inside the group and labelled "Overview".
 *   - images: `images/` is copied beside the pages, so the guide's relative `../images/...` paths
 *     stay valid and Astro optimises them.
 *   - the sidebar: each group directory becomes a sidebar group whose LABEL and ORDER come from its
 *     `index.md` (Starlight's `autogenerate` would label it with the directory name), interleaved
 *     with the guide's top-level pages by `order`. `guideSidebar()` returns it for astro.config.mjs.
 *
 * Cross-page links are left as the guide writes them (relative `.md` paths); the
 * astro-rehype-relative-markdown-links plugin turns them into page URLs, and
 * starlight-links-validator fails the build on any that point nowhere.
 *
 * A page the guide's rules would refuse (no front matter, no `title`, no integer `order`) fails
 * the import loudly rather than producing a page with no place in the sidebar.
 */

import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse, stringify } from 'yaml';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..');
export const UPSTREAM_DIR = join(ROOT, 'upstream', 'guide');
export const OUT_DIR = join(ROOT, 'src', 'content', 'docs', 'guide');

/** The URL segment the guide is published under (`/guide/...`). */
export const GUIDE_SLUG = 'guide';

const IMAGES_DIR = 'images';
const FRONT_MATTER = /^---\n([\s\S]*?)\n---\n?/;

/** Split a guide page into its parsed front matter and its body. Throws on a page the guide refuses. */
export function readPage(path, text) {
  const match = text.match(FRONT_MATTER);
  if (!match) throw new Error(`${path}: no front matter (the guide requires title, description, order)`);
  const data = parse(match[1]) ?? {};
  if (typeof data.title !== 'string' || data.title.trim() === '') {
    throw new Error(`${path}: front matter has no title`);
  }
  if (!Number.isInteger(data.order)) {
    throw new Error(`${path}: front matter has no integer order`);
  }
  return { data, body: text.slice(match[0].length) };
}

/** The guide's front matter, rewritten for Starlight. */
export function translateFrontMatter(data, { isGroupIndex }) {
  const { order, ...rest } = data;
  const sidebar = isGroupIndex ? { order: 0, label: 'Overview' } : { order };
  return { ...rest, sidebar };
}

function pagesIn(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => e.name);
}

function groupsIn(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && e.name !== IMAGES_DIR)
    .map((e) => e.name);
}

/**
 * The guide's top level as an ordered list: one entry per root page and per group directory, each
 * with its title and order, the root `index.md` excluded (it is the guide's overview).
 * Read synchronously so astro.config.mjs can call it while it builds its configuration.
 */
export function guideOutline(srcDir = UPSTREAM_DIR) {
  const entries = [];
  for (const name of pagesIn(srcDir)) {
    if (name === 'index.md') continue;
    const path = join(srcDir, name);
    const { data } = readPage(path, readFileSync(path, 'utf-8'));
    entries.push({ kind: 'page', name: name.replace(/\.md$/, ''), title: data.title, order: data.order });
  }
  for (const name of groupsIn(srcDir)) {
    const index = join(srcDir, name, 'index.md');
    if (!statSync(index, { throwIfNoEntry: false })?.isFile()) {
      throw new Error(`${join(srcDir, name)}: a group directory needs an index.md (its sidebar label and order)`);
    }
    const { data } = readPage(index, readFileSync(index, 'utf-8'));
    entries.push({ kind: 'group', name, title: data.title, order: data.order });
  }
  // A tie is a guide defect; break it by name so the sidebar is at least stable.
  entries.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  return entries;
}

/** The guide's sidebar items, for Starlight's `sidebar` config. */
export function guideSidebar(srcDir = UPSTREAM_DIR) {
  return [
    { label: 'Overview', slug: GUIDE_SLUG },
    ...guideOutline(srcDir).map((entry) =>
      entry.kind === 'group'
        ? {
            label: entry.title,
            collapsed: true,
            items: [{ autogenerate: { directory: `${GUIDE_SLUG}/${entry.name}` } }],
          }
        : { slug: `${GUIDE_SLUG}/${entry.name}` },
    ),
  ];
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}

/** Regenerate `src/content/docs/guide/` from `upstream/guide/`. */
export async function importGuide(srcDir = UPSTREAM_DIR, outDir = OUT_DIR) {
  if (!(await stat(srcDir).catch(() => null))?.isDirectory()) {
    throw new Error(`${srcDir} does not exist: the guide has not been published into this repository`);
  }
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  let pages = 0;
  for (const path of await walk(srcDir)) {
    const rel = relative(srcDir, path);
    const target = join(outDir, rel);
    if (rel.split(sep)[0] === IMAGES_DIR) continue; // copied whole below
    if (!path.endsWith('.md')) {
      throw new Error(`${path}: unexpected file in the guide (only pages and images/ are published)`);
    }
    const { data, body } = readPage(path, await readFile(path, 'utf-8'));
    const parts = rel.split(sep);
    const isGroupIndex = parts.length === 2 && parts[1] === 'index.md';
    const front = stringify(translateFrontMatter(data, { isGroupIndex })).trimEnd();
    await mkdir(join(target, '..'), { recursive: true });
    await writeFile(target, `---\n${front}\n---\n${body}`, 'utf-8');
    pages += 1;
  }

  const images = join(srcDir, IMAGES_DIR);
  if ((await stat(images).catch(() => null))?.isDirectory()) {
    await cp(images, join(outDir, IMAGES_DIR), { recursive: true });
  }

  // Validate the outline too, so a missing group index fails here and not inside astro.config.mjs.
  const outline = guideOutline(srcDir);
  return { pages, groups: outline.filter((e) => e.kind === 'group').length };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  importGuide()
    .then(({ pages, groups }) => console.log(`Imported the guide: ${pages} pages in ${groups} groups`))
    .catch((err) => {
      console.error(`Failed to import the guide: ${err.message}`);
      process.exit(1);
    });
}
