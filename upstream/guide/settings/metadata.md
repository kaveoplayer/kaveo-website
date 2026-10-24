---
title: Metadata
description: The key that fetches posters and plots, music information online, the cookies that sign you in to sites, and starting over.
order: 30
---

## What it is for

**Settings › Metadata** holds the key that fetches posters, plots and genres, and the button that
fetches them all again.

![Settings with Metadata chosen in the rail: an empty TMDB API key field, the note that genre rows need a key, Anime on AniList on, Artist pictures online on, Downloaded artist pictures with Clear, Album information online on, Downloaded album information with Clear, and Lyrics online on](../images/settings/metadata.webp)

## How to use it

1. Paste your key into **TMDB API key** and click **Test**: it says *Key works* or what is wrong.
2. Click **Save** to keep it: nothing is stored before you save.
3. When a trailer or web video asks you to sign in, sign in with your browser, then choose it
   under **Site cookies** (and **Browser profile**, if it has several). **Test** checks that Kaveo
   can read it; if not, choose **cookies.txt file…**.
4. Music, online by default: [Artist pictures](../library/artist-pictures.md),
   [Album information](../library/album-information.md), [Lyrics](../watching/lyrics.md).
5. **Anime on AniList** (on by default) asks AniList about an imported anime TMDB lacks, or
   its adult tag.
6. Click **Recatalogue library** to fetch every poster, plot and genre anew.

## Good to know

- **Recatalogue library** acts at once; **Revert** does not undo it.
- Kaveo reads the cookies only when a video needs them, and keeps no copy. On Windows, Chrome, Edge
  and Brave cannot be read; Firefox can, once closed.
- On Linux, Chrome or Vivaldi take about 3 seconds to read, Firefox under one;
  *python-pycryptodomex* (Arch) or *python3-pycryptodomex* (Fedora) makes them as fast.
- With no key, only the genre rows stay empty: see [Genres and tags](../library/tags.md).
- A wrong poster or plot is corrected on the title: see
  [Correcting a wrong match](../library/correct-a-match.md).
