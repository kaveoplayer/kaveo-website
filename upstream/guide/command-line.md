---
title: Command line
description: Start Kaveo on a file, a folder or a web address from a terminal.
order: 90
---

## What it is for

Start Kaveo from a terminal.

## How to use it

1. Give Kaveo a path: it plays a video, or shows a photo in the [viewer](library/view-photos.md).

   ```
   kaveo "Big Buck Bunny.mkv"
   ```

2. Give it a web address — a stream, or a video page like YouTube's — and it plays.

   ```
   kaveo https://example.com/film.m3u8
   ```

3. Add `--play-folder`, and it plays every video in that folder, in file-name order.

   ```
   kaveo --play-folder "Season 1"
   ```

4. Add `--enqueue`, and the file joins the queue of the Kaveo already running; with none running, it
   plays.

   ```
   kaveo --enqueue "Season 1/Episode 2.mkv"
   ```

5. Add `--translate`, and the files and folders you name join the translation queue of the Kaveo that
   owns your library; nothing plays. With none running, Kaveo opens and starts the queue.

   ```
   kaveo --translate "Season 1" "Film (2016).mkv"
   ```

6. With Kaveo closed, `--restore` and a [backup](settings/backup.md) file restore it before Kaveo opens.

   ```
   kaveo --restore "kaveo-backup-2026-10-08-1200.zip"
   ```

## Good to know

- Only the first Kaveo owns your library, history and settings. A second one brings that window
  forward; given a file, it plays it and reports where you stopped; given a web address, that
  window plays it.
- Translating this way asks nothing; **Already translated** decides.
- `kaveo --version` prints the version. There is no help option, and an unknown option is ignored.
- Everything but translating is also in your file manager's **Kaveo** menu — see
  [From your file manager](file-manager.md).
