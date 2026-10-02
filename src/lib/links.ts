import { BASE } from '../../site.config.mjs';

/**
 * A page of this site as a URL that carries the base path, for the places Markdown's relative links
 * cannot reach — a component's `href`. In Markdown, link the page's file instead
 * (`[Download](download.mdx)`): that link is rewritten for the base AND checked by the links
 * validator, which cannot read an expression.
 */
export function sitePath(path: string): string {
  const base = BASE.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
