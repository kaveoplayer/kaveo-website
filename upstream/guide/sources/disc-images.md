---
title: Blu-ray and DVD disc images
description: Play a film kept as a Blu-ray or DVD disc image or a copied disc folder, on your computer or on your Jellyfin server.
order: 22
---

## What it is for

Some films are kept as a whole-disc copy: a Blu-ray or DVD image (an ISO file) or a copied
disc folder. Kaveo plays the film inside it, locally or from your Jellyfin server.

## How to use it

1. Put the image or folder in a library folder: Kaveo lists it as a film. Open its page and click
   **Play**.
2. Or, outside the library: drop it on the window, or pick it with **Open** › **Open disc
   folder…** (an image with **Open file…**).
3. For a disc with a menu, Kaveo reads it, then asks: **Play the film**, or **Play the disc** from
   its start. Tick **Remember my choice** to stop asking; **Discs** in
   [Behaviour](../settings/behaviour.md) changes it. The page's **⋯** menu offers the other way.
4. Playing the disc, its menus work as [Disc menus](disc-menus.md) says.

## Good to know

- A disc folder holds BDMV or VIDEO_TS; either, or its index.bdmv or VIDEO_TS.IFO, opens the disc
  too. One clip from inside plays as that clip.
- While a disc is read or opened, the player says so; **Cancel** or **Esc** goes back.
- A resumed film and a list's next title play the film. An unreadable or encrypted disc
  does not open; Kaveo says why.
- Kaveo picks the film's version in your soundtrack language and names forced and SDH subtitles
  once read. The disc's chapters mark the timeline.
- A disc folder on Jellyfin plays its film only, with one soundtrack and no subtitles yet.
