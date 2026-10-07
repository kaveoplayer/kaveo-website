// The site's single source of addresses. Everything that names a URL, a repository or a contact
// reads it from here — astro.config.mjs, the pages under src/content/docs/, and the scripts — so a
// move to the final domain, or a renamed repository, is a change to this file and nothing else.

/** Where the site is served from: its own domain, on GitHub Pages (`public/CNAME`). */
export const SITE_URL = 'https://kaveoplayer.com';

/** The path prefix the site is served under: none, since it has a domain of its own. */
export const BASE = '/';

/** The public repository that holds the releases, the issue tracker and the discussions. */
export const RELEASES_REPO = 'https://github.com/kaveoplayer/kaveo-releases';

/** The page every download button points at: the newest release and all of its files. */
export const LATEST_RELEASE_URL = `${RELEASES_REPO}/releases/latest`;

/** Bug reports. */
export const ISSUES_URL = `${RELEASES_REPO}/issues`;

/** Questions and ideas. */
export const DISCUSSIONS_URL = `${RELEASES_REPO}/discussions`;

/** Licence keys and anything about a licence. */
export const LICENCE_EMAIL = 'support@kaveoplayer.com';

/** The site's full public address, with the base path. */
export const SITE_ROOT = `${SITE_URL}${BASE === '/' ? '' : BASE}/`;
