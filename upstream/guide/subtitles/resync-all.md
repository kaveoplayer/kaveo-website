---
title: Resyncing a whole series
description: Re-time every subtitle of a film, a season or a series at once.
order: 32
---

## What it is for

Subtitles made for another release drift, or jump after a cut scene. Kaveo checks every episode of
a season or a series against its own video and fixes what is off.

## How to use it

1. Open the **⋯** menu of a series, a season, a film or an episode and choose **Resync subtitles…**
   (on a season, **Resync this season's subtitles…**).
2. To choose what each episode is compared with, open **Reference: automatic for every episode**
   and pick a track per episode, or **Use this choice for the whole series**.
3. Click **Resync**. Do it again on another series to queue that one too.
4. Follow it in the subtitle queue's panel, from the badge in the top bar.

## Good to know

- **Automatic** compares each subtitle with a track of the video, or with the audio when a
  transcriber is set up in **Settings › Subtitles**, and moves it only when the match is certain.
- A reference you choose is the only one used, and its result is kept even when it fits poorly:
  the panel then warns you. Change it under the episode, at **Reference**, to resync it again.
- Kaveo corrects its own copy, never your files.
- What it could not place is listed under its episode: **Open episode** lets you
  [sync it by hand](sync.md).
- **Restore previous sync** undoes a correction. Edits made since are lost.
- A title only on a Jellyfin server cannot use its picture subtitles as a reference.
