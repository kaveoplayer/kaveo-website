---
title: Display & HDR
description: Match the picture to the screen it is shown on, one display at a time.
order: 100
---

## What it is for

**Settings › Display & HDR** decides what your screen is sent, and how an HDR film is fitted to it.

![Settings, Display & HDR selected in the rail with its HDR output, Tone mapping and Format & refresh sub-items. Beside it Use HDR on SDR content unticked, the three tabs with HDR output chosen, then HDR output on Auto, HDR display peak on Auto with a note that both apply live, and Output signal & calibration with Force mastering peak, Force mastering black and Calibration LUT. The Per-display settings group and its selector are above the picture.](../images/settings/display.webp)

## How to use it

1. **Editing settings of**, under **Per-display settings** above the tabs, picks the screen the
   rest of the section edits; **Create a profile for this display**, **Copy values from** and
   **Delete profile** manage them.
2. **Use HDR on SDR content**, under them, starts off, so only an HDR film switches the screen — see
   [HDR output](../watching/hdr.md).
3. **HDR output** holds **HDR output** and **HDR display peak**, then **Output signal & calibration**:
   **Force mastering peak**, **Force mastering black** and **Calibration LUT (.cube)**, which corrects
   the screen; grading is [Picture](picture.md).
4. **Tone mapping** holds **SDR tone-map target (nits)**, **SDR tone-map black (nits)**,
   **Tone-map curve**, **Gamut mapping**, **HDR metadata**, **Contrast recovery** and
   **Inverse tone-mapping (SDR-to-HDR)**, then **Dynamic tone-mapping (peak detection)**:
   **Peak detection**, **Peak percentile**, **Smoothing period**, **Scene-change threshold (low)**
   and **Scene-change threshold (high)**.
5. **Format & refresh** holds **Output (bit depth & gamut)**: **Bit depth**, **Output range**,
   **Output gamut**, **Display gamma**; **Display refresh**: **Match refresh to content**,
   **Refresh policy**; **Presentation**: **Light mode (weaker GPUs)**,
   **Full brightness in fullscreen**.

## Good to know

- A screen with no profile uses **Global (displays without a profile)**; a saved one returns when the
  player moves to that screen, and one Kaveo cannot identify gets none.
- Nothing is kept until **Save** — see [Saving changes](saving.md) — which is also when the screen
  switches into or out of HDR.
