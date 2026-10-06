---
title: Troubleshooting
description: The messages Kaveo shows, and what to send when you report a problem.
order: 120
---

## What it is for

Kaveo says what went wrong in the top-right corner, on any screen. Read the message, then gather
the rest of a bug report.

## How to use it

1. A message that **flashes** is something that just happened, such as a file that would not open.
   Click it, or leave it six seconds; a repeat becomes one message with a count.
2. A message that **stays** means something switched itself off for the video you are watching, and
   appears with the playback controls.
3. Click the copy icon on either one to copy its full text.
4. Raise **Detail level** under **Settings › Diagnostics**, do the thing that failed again, then set
   it back — see [Diagnostics](settings/diagnostics.md).
5. Click **Export a diagnostic bundle** there for one file to send, then **Report a problem…** in
   **Settings › About**, which opens the report form already filled in — see
   [About](settings/about.md).

## Good to know

- A message that stays has no close button: it is the only statement of what is broken, and it goes
  when the problem clears or you leave the video.
- Text drawn as empty rectangles is a missing font. Install a Japanese one — *fonts-noto-cjk* on
  Debian or Ubuntu, *noto-fonts-cjk* on Arch — which covers Chinese and Korean too, then start
  Kaveo again.
- A video opened while Kaveo is already running plays in a second window with no library of its
  own; the first window keeps it — see [Command line](command-line.md).
