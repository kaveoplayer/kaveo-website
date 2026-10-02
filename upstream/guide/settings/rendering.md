---
title: Rendering
description: Who decodes the video, and how finished frames reach the screen.
order: 110
---

## What it is for

**Settings › Rendering** is the machinery under a film rather than its look: which decoder opens it,
and how finished frames reach the screen.

![Settings shown on the Rendering section: the rail listing all fourteen sections with Rendering selected last under Video & display, and beside it Decode — Decoder on Hardware (NVDEC/…), Strict (no skip on corruption) unticked, and Zero-copy decode (keep frame on GPU) unticked beside auto-falls back if unavailable — then Presentation — Frame mixer on Oversample (smooth) and Vsync hint on Auto — the Queues fold closed, and the line Changes apply live — some briefly reload the video.](../images/settings/rendering.webp)

## How to use it

1. Under **Decode**, leave **Decoder** on **Hardware (NVDEC/…)**; **Software** is slower but opens
   anything, and there is a Vulkan decoder too.
2. Tick **Strict (no skip on corruption)** to refuse a file the decoder cannot handle, rather than
   quietly fall back.
3. **Zero-copy decode (keep frame on GPU)** saves a little bandwidth and starts off.
4. Under **Presentation**, **Frame mixer** starts on **Oversample (smooth)**; **Nearest (no blend)**
   invents no frames, and every other entry blends them — frame interpolation.
5. Leave **Vsync hint** on **Auto** unless you see tearing or stutter, then **Save** — see
   [Saving changes](saving.md).

## Good to know

- **Zero-copy decode (keep frame on GPU)** is switched off for you while the neural upscaler runs,
  and the tick still shows whatever you set.
- **Queues** folds away four expert settings for how far ahead Kaveo decodes and presents; on
  Windows there is one row more,
  **Fullscreen playback uses exclusive mode (separate process) — experimental**.
- Every row waits for **Save**; a change made while a film plays reopens it where you were.
