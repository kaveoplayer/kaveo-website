---
title: Subtitle delay
description: Shift every line of a subtitle while you watch, and keep that timing.
order: 35
---

## What it is for

When every line of a subtitle is early or late, shift them all at once while the video plays.

## How to use it

1. Right-click the picture, open **Subtitles**, and point at **Timing**.
2. Click the 50 ms or 500 ms buttons until the lines match the speech: a plus value shows them later,
   a minus value earlier. **Reset** returns to zero.
3. Or press **Z** and **X** for 50 ms steps, **Shift+Z** and **Shift+X** for 500 ms. The value shows
   in the top-right corner.

### Keep the timing beyond this video

1. **Apply to the whole series** makes it the starting timing for this show's subtitles in the same
   language. It needs an episode of a series in your library; if unavailable, its tooltip says why.
2. **Apply to the subtitle file…** writes it into the subtitle, and into the file you saved it to, so
   other players get it too — see [Saving a subtitle](save.md). Kaveo asks first.

## Good to know

- Each subtitle keeps its own timing: another track or the next episode starts at zero unless you
  applied it to the series, and an episode you already adjusted keeps its own.
- Writing needs a subtitle file, not a track inside the video: use **Tools** › **Extract from this file** first;
  the extracted file keeps the delay. Afterwards the delay reads zero, since the file carries it.
- A private title does not remember its delay.
