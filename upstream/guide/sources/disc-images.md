---
title: Blu-ray disc images
description: Play a film kept as a Blu-ray disc image or a copied Blu-ray folder, on your computer or on your Jellyfin server.
order: 22
---

## What it is for

Some films are kept as a copy of the whole disc: a Blu-ray disc image (an ISO file) or a folder
copied from the disc. Kaveo plays the film inside it, from your computer or your Jellyfin server.

## How to use it

1. Put the disc image or copied folder in a library folder. Kaveo lists it as a film.
2. Open the film's page and click **Play**.
3. For a disc with its own menu, Kaveo asks: **Play the film**, or **Play the disc** from its
   start, with its menu. Tick **Remember my choice** to stop the question; **Discs** under
   [Behaviour](../settings/behaviour.md) changes it. The page's **⋯** menu offers the other way.
4. In the menu, move with the arrows and **Enter**, or click a button. **Skip to the menu** jumps
   the opening.

## Good to know

- Over a menu, seeking waits until a title plays; its keys are under **Disc menu** in the
  shortcuts.
- Java menus, on most recent discs, need Java 8 to 23; without it the film plays and **Discs**
  says why. On Linux, **Install Java for disc menus** there adds one, after asking.
- A resumed film and the next title in a list play the film. An unreadable or encrypted disc, or a
  DVD image, does not open, and Kaveo says why.
- Kaveo picks the film's version in your soundtrack language, and names forced and SDH subtitles
  once read. A disc folder on Jellyfin plays one soundtrack, no
  subtitles yet.
