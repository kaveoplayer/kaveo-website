---
title: Blu-ray disc images
description: Play a film kept as a Blu-ray disc image or a copied Blu-ray folder, on your computer or on your Jellyfin server.
order: 22
---

## What it is for

Some films are kept as a copy of the whole disc: a Blu-ray disc image (an ISO file) or a folder
copied from the disc. Kaveo plays the film inside it, from your computer or your Jellyfin server.

## How to use it

1. Put the disc image or the copied disc folder in a library folder. Kaveo lists it as a film, named
   after the file or the folder.
2. Open the film's page and click **Play**, as for any other title.
3. The whole film starts, with every soundtrack and subtitle the disc carries; seeking works as
   usual.

## Good to know

- Kaveo plays the film only: the disc's own menus and extras are not shown yet.
- When the disc holds the film more than once, for example one version per country, Kaveo picks
  the one with the soundtrack language you prefer in the player settings.
- The first time a disc image or local folder plays, Kaveo reads its subtitles in the background to
  name the forced and SDH ones ("French — Forced"). Next time it opens with your language's full
  track, or the soundtrack's forced one. The answer is kept, and on Jellyfin follows you.
- A disc folder on Jellyfin comes through the server with the disc's picture and sound, in your
  preferred soundtrack only; a seek takes a couple of seconds, and subtitles are not offered yet.
- A disc Kaveo cannot read, an encrypted disc, or a DVD image does not open: Kaveo says why.
