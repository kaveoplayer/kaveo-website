---
title: Download folders
description: File finished downloads into your libraries.
order: 30
---

## What it is for

Kaveo files finished downloads into your libraries, named by your
[templates](naming-templates.md). A download folder is an input only: Kaveo does not scan it as a
library folder, and anything still downloading stays behind.

![The Download folders group in Settings: the Downloads card with Import…, the Move and By content type combos and an unticked Auto, and Add download folder… below it](../images/organizing/download-folders-settings.webp)

## How to use it

### Add a download folder

1. In **Settings › Library › Folders**, under **Download folders**, click **Add download folder…**.
2. On its card, choose **Move** or **Hardlink (keep original)** and where the files go —
   **By content type**, or one category if this folder always feeds the same library.
3. Click **Save** — nothing on the card counts until you do.

### Import what is in it

![The import window: one file under Need you and two under Ready to import, each with a still, its size, its date and where it will be filed, the Goes to bar below them, and Later and Import 2 at the foot](../images/organizing/download-folders-preview.webp)

1. Click **Import…**, then **Preview** if Kaveo asks where each kind goes.
2. Each file shows where it will be filed. Answer any under *Need you* — see
   [Fixing an import](fix-an-import.md) — then click the **Import** button at the foot.

## Good to know

- **Hardlink (keep original)** keeps your torrent client seeding, but only within one drive: a file it
  cannot link is skipped, not copied.
- Kaveo never overwrites a file already at the destination; a file it cannot name waits under
  *Need you* instead.
- **Later** closes the window and moves nothing.
- Tick **Auto** and click **Save** to import with no preview. A file Kaveo cannot identify stays
  behind, and a message offers **Review…**, or **Don't ask again** to stop being told about it.
