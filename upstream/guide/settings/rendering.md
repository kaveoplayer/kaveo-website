---
title: Rendering
description: Who decodes the video, and how finished frames reach the screen.
order: 110
---

## What it is for

**Settings › Rendering** is the machinery under a film rather than its look: which decoder opens it,
and how finished frames reach the screen.

![Settings shown on the Rendering section: the rail listing all sixteen sections with Rendering selected last under Video & display, and beside it the line Changes apply live — some briefly reload the video, then Decode — Decoder on Hardware (NVDEC/…), Strict decoding off, and Zero-copy decode off with its note that it falls back automatically when unavailable — then Presentation — Frame mixer on Oversample (smooth) and Vertical sync on Auto — then Queues: Decode prefetch depth 8 frames, Present lookahead 8 frames, Upscaler ring 0 frames and Frames in flight 1 frame.](../images/settings/rendering.webp)

## How to use it

1. Under **Decode**, leave **Decoder** on **Hardware (NVDEC/…)**; **Software** is slower but opens
   anything, and there is a Vulkan decoder too.
2. Turn on **Strict decoding** to refuse a file the decoder cannot handle, rather than
   quietly fall back.
3. **Zero-copy decode** saves a little bandwidth and starts off.
4. Under **Presentation**, **Frame mixer** starts on **Oversample (smooth)**; **Nearest (no blend)**
   invents no frames, and every other entry blends them — frame interpolation.
5. Leave **Vertical sync** on **Auto** unless you see tearing or stutter, then **Save** — see
   [Saving changes](saving.md).

## Good to know

- **Zero-copy decode** is switched off for you while the neural upscaler runs,
  and the switch still shows whatever you set.
- Under **Queues** are four expert settings, in frames, for how far ahead Kaveo decodes and
  presents; on Windows **Presentation** has one row more, **Exclusive fullscreen** (experimental).
- Every row waits for **Save**; a change made while a film plays reopens it where you were.
