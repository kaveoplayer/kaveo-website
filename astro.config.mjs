import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';
import starlightLinksValidator from 'starlight-links-validator';
import { guideSidebar } from './scripts/import-guide.mjs';
import { BASE, ISSUES_URL, RELEASES_REPO, SITE_URL } from './site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  markdown: {
    // Astro 7 renders with Sätteri by default; the relative-links plugin is a rehype plugin, so the
    // unified pipeline is kept. starlight-links-validator appends its own rehype plugin after this
    // one, so it validates the links as rewritten.
    processor: unified({
      rehypePlugins: [
        [
          rehypeAstroRelativeMarkdownLinks,
          { collectionBase: false, base: BASE, trailingSlash: 'always' },
        ],
      ],
    }),
  },
  integrations: [
    starlight({
      title: 'Kaveo',
      description:
        'A minimalist, high-quality media player with a library: local files first, Jellyfin optional.',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Kaveo',
      },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'Releases and issues on GitHub', href: RELEASES_REPO },
      ],
      customCss: ['./src/styles/fonts.css', './src/styles/custom.css'],
      // The landing's hero is its own; other pages keep Starlight's (see the component).
      components: { Hero: './src/components/Hero.astro' },
      plugins: [starlightLinksValidator()],
      sidebar: [
        { label: 'Download', slug: 'download' },
        { label: 'Guide', items: guideSidebar() },
        {
          label: 'Help',
          items: [
            { label: 'Support', slug: 'support' },
            { label: 'Report a bug', link: ISSUES_URL, attrs: { target: '_blank' } },
          ],
        },
        {
          label: 'About',
          items: [
            { label: 'Privacy', slug: 'privacy' },
            { label: 'Third-party licences', slug: 'licences' },
          ],
        },
      ],
    }),
  ],
});
