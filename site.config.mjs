// The site's single source of addresses. Everything that names a URL, a repository or a contact
// reads it from here — astro.config.mjs, the pages under src/content/docs/, and the scripts — so a
// move to the final domain, or a renamed repository, is a change to this file and nothing else.

/** Where the site is served from. A project page on GitHub Pages lives under `/<repo>/`. */
export const SITE_URL = 'https://mattia-cenci.github.io';

/**
 * The path prefix the site is served under. `/kaveo-website` for the GitHub project page; set it to
 * `/` once the site moves to its own domain.
 */
export const BASE = '/kaveo-website';

/** The public repository that holds the releases, the issue tracker and the discussions. */
export const RELEASES_REPO = 'https://github.com/mattia-cenci/kaveo-releases';

/** The page every download button points at: the newest release and all of its files. */
export const LATEST_RELEASE_URL = `${RELEASES_REPO}/releases/latest`;

/** Bug reports. */
export const ISSUES_URL = `${RELEASES_REPO}/issues`;

/** Questions and ideas. */
export const DISCUSSIONS_URL = `${RELEASES_REPO}/discussions`;

/**
 * Licence keys and anything about a licence.
 * Temporary (2026-10-02): the maintainer's address until a dedicated one exists.
 */
export const LICENCE_EMAIL = 'mattia.cenci@bosimano.com';

/** The site's full public address, with the base path. */
export const SITE_ROOT = `${SITE_URL}${BASE === '/' ? '' : BASE}/`;
