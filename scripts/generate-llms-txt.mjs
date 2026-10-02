#!/usr/bin/env node

/**
 * Generates llms.txt, llms-full.txt and robots.txt into public/ at build time.
 *
 * - llms.txt: an index of the guide — title, description and URL of every page, grouped and ordered
 *   as the site's sidebar groups them
 * - llms-full.txt: the full text of every guide page, in the same order
 * - robots.txt: carries the sitemap's address, which depends on the site's base path
 *
 * Reads upstream/guide/ (the guide as Kaveo publishes it), through the same outline the importer
 * gives the sidebar, so the three cannot disagree about order.
 */

import { readdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { GUIDE_SLUG, UPSTREAM_DIR, guideOutline, readPage } from './import-guide.mjs';
import { SITE_ROOT } from '../site.config.mjs';

const OUT_DIR = join(import.meta.dirname, '..', 'public');
const GUIDE_URL = `${SITE_ROOT}${GUIDE_SLUG}/`;

async function page(path, url) {
  const { data, body } = readPage(path, await readFile(path, 'utf-8'));
  return { title: data.title, description: data.description ?? '', order: data.order, body: body.trim(), url };
}

/** The guide as sections: the root pages under "Kaveo", then one section per group, in order. */
async function collectSections() {
  const sections = [];
  const root = [await page(join(UPSTREAM_DIR, 'index.md'), GUIDE_URL)];
  sections.push({ title: 'Kaveo', pages: root });

  for (const entry of guideOutline()) {
    if (entry.kind === 'page') {
      root.push(await page(join(UPSTREAM_DIR, `${entry.name}.md`), `${GUIDE_URL}${entry.name}/`));
      continue;
    }
    const dir = join(UPSTREAM_DIR, entry.name);
    const pages = [await page(join(dir, 'index.md'), `${GUIDE_URL}${entry.name}/`)];
    const rest = [];
    for (const name of readdirSync(dir).filter((n) => n.endsWith('.md') && n !== 'index.md')) {
      rest.push(await page(join(dir, name), `${GUIDE_URL}${entry.name}/${name.replace(/\.md$/, '')}/`));
    }
    rest.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
    sections.push({ title: entry.title, pages: [...pages, ...rest] });
  }
  return sections;
}

async function main() {
  const sections = await collectSections();
  const count = sections.reduce((n, s) => n + s.pages.length, 0);

  const index = [
    '# Kaveo',
    '',
    '> A minimalist, high-quality media player with a library of its own: local files first, Jellyfin optional, HDR output, a neural upscaler, and subtitles it can fetch, sync and translate.',
    '',
    `Site: ${SITE_ROOT}`,
    `Guide: ${GUIDE_URL}`,
    '',
  ];
  for (const section of sections) {
    index.push(`## ${section.title}`, '');
    for (const p of section.pages) {
      index.push(`- [${p.title}](${p.url})${p.description ? `: ${p.description}` : ''}`);
    }
    index.push('');
  }
  await writeFile(join(OUT_DIR, 'llms.txt'), index.join('\n'), 'utf-8');

  const full = ['# Kaveo — the guide (full text)', ''];
  for (const section of sections) {
    full.push(`# ${section.title}`, '');
    for (const p of section.pages) {
      full.push(`## ${p.title}`, `URL: ${p.url}`, '', p.body, '', '---', '');
    }
  }
  await writeFile(join(OUT_DIR, 'llms-full.txt'), full.join('\n'), 'utf-8');

  await writeFile(
    join(OUT_DIR, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ROOT}sitemap-index.xml\n`,
    'utf-8',
  );

  console.log(`Generated llms.txt and llms-full.txt (${sections.length} sections, ${count} pages), robots.txt`);
}

main().catch((err) => {
  console.error('Failed to generate llms.txt:', err);
  process.exit(1);
});
