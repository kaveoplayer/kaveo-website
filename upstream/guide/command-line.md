---
title: Command line
description: Start Kaveo on a file or a folder from a terminal.
order: 90
---

## What it is for

Kaveo can be started from a terminal on a file or a folder — the same thing the entries in your file
manager's **Kaveo** menu do underneath.

## How to use it

1. Give Kaveo a path, and it plays that file.

   ```
   kaveo "Big Buck Bunny.mkv"
   ```

2. Add `--play-folder`, and it plays every video in that folder, in file-name order.

   ```
   kaveo --play-folder "Season 1"
   ```

3. Add `--enqueue`, and the file joins the queue of the Kaveo already running instead of opening a
   second window; with none running, it simply plays.

   ```
   kaveo --enqueue "Season 1/Episode 2.mkv"
   ```

4. Add `--translate`, and the files and folders you name join the translation queue of the Kaveo that
   owns your library; nothing plays. With none running, Kaveo opens and starts the queue.

   ```
   kaveo --translate "Season 1" "Film (2016).mkv"
   ```

## Good to know

- Only the first Kaveo owns your library, history and settings. Started again with nothing to play, a
  second one just brings that window to the front; given a file, it plays it and reports back where
  you stopped.
- A translation added this way does not ask about episodes already translated: your
  **Already translated** setting answers. See [Translating a whole series](subtitles/translation-queue.md).
- `kaveo --version` prints the version and exits. Kaveo has no help option, and quietly ignores an
  option it does not recognise.
- The same actions are in your file manager's **Kaveo** menu — see
  [From your file manager](file-manager.md).
