---
title: Upscaler
description: The picture pipeline — what is done to a frame, in the order it happens.
order: 90
---

## What it is for

**Settings › Upscaler** is the picture pipeline — four of its tabs are the order things happen to
a frame: repaired, enlarged, shrunk, finished. The neural upscaler is one of its choices, not a
switch above it.

![Settings, Upscaler selected in the rail with its Source, Upscaling, Downscaling, Output and Advanced sub-items. Beside it the Neural upscaler caption, a Status row reading Passthrough — the neural upscaler is not running, the line These are different STAGES, not competing options, the five tabs with Upscaling chosen, then Picture enlargement with Stop using the net at and Luma upscale, a colour group with Chroma upscale, the two closed folds Filter shape — luma (advanced) and Filter shape — chroma (advanced), and Sigmoidal upscaling, Strength at 1.000 with a note saying it has no effect while the net is not the active upscaler, and Limit edge halos. The tab carries on below the picture, Render scale with it.](../images/settings/upscaler.webp)

## How to use it

1. **Status**, above the tabs, says what the net is doing; unconfigured it reads
   *Passthrough — the neural upscaler is not running*.
2. On **Upscaling**, under **Picture enlargement**, set **Luma upscale** to **Neural model** to turn
   the net on; **Content type** picks its family; **Stop using the net at** skips sources that
   already fill your display.
3. Below sit **Chroma upscale**, **Sigmoidal upscaling**, **Strength**, **Limit edge halos** and
   **Render scale**.
4. Every tab holds more rows than this page names: **Source** cleans the file (**Reduce banding**,
   **Sharpness**, **CAS**, **Line darkening**), **Downscaling** fits an oversized source, **Output**
   finishes it (**Anti-ringing**, **Deinterlacing**, **Output dithering**), and **Advanced** holds
   the model files and **Execution provider**.
5. Click **Save** to keep it — see [Saving changes](saving.md).

## Good to know

- The net needs a model file: **Base model**, **Anime model** and **Live-action model**, on
  **Advanced**. While it is not the active upscaler, **Strength** and **Limit edge halos** say so
  underneath and stay editable. Their note calls the picker Image upscale, a row that no longer
  exists.
- The first play after a model or provider change is slower — **Status** reads
  *Optimizing for your GPU…*.
- [Picture](picture.md) covers colour and placement; [Rendering](rendering.md) the decoder and frame
  delivery.
