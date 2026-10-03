---
title: Naming templates
description: Choose how Kaveo names your files and folders.
order: 10
---

## What it is for

Naming templates describe the layout Kaveo renames files into — on import, and when you tidy a
library folder.

![Settings › Library › Naming: the Available tokens panel open above the Standard, Plex and Kodi presets, the Options rows, and the Movies and TV Series templates each with the name it renders](../images/organizing/naming-templates-page.webp)

## How to use it

### Set your templates

1. Open **Settings › Library › Naming**. A preset — **Standard**, **Plex** or **Kodi** — replaces
   every field except **Music naming**, the **Anime** ones included.
2. Edit a template under **Movies**, **TV Series** or **Music naming**: click in a field, then click
   a token under **Available tokens** to add it to the end.
3. Under **Options**, set **Colon replacement**, **Episode title language** (**English** or **Same as the
   interface**) and **Use dots instead of spaces**.
4. Click **Save**. *The naming templates changed* then offers **Show me what would change** —
   a preview across your whole library — or **Not now**.

![The naming templates changed: the message saying the titles already in your library still carry the old names and that nothing moves until you confirm, with Not now beside Show me what would change](../images/organizing/naming-templates-offer.webp)

### Name anime differently

![The Anime group: Season folder, Episode file, Film folder and Film file all empty under the line that says an empty field names anime like everything else, with the anime episode preview below them](../images/organizing/naming-templates-anime.webp)

1. Under **Anime**, fill in **Episode file (anime)** — for example
   **{Series Title} - {episode:00}**.
2. Leave the other three empty to name anime like everything else, then click **Save**.

## Good to know

- A token is typed exactly as shown, such as **{Movie Title}**; wrap a part in another pair —
  **{ ({Release Year})}** — to write it only when its token has a value.
- **{Quality Full}** turns a release's own words into one name, such as *Bluray-1080p*: the source is
  read from the file's name, then its folder, and the picture size is measured from the file.
- With a TMDB API key (**Settings › Metadata**; [Metadata](../settings/metadata.md)), titles are
  filed under their official English names rather than the ones read from the files.
