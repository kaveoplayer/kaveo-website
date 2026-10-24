---
title: Resyncing a whole series
description: Re-time every subtitle of a film, a season or a series at once.
order: 32
---

## What it is for

Subtitles made for another release of a show drift, or jump after a cut scene. Kaveo can check every
episode of a season or a series against its own video and fix what is off, while you do something
else.

## How to use it

1. Open the **⋯** menu of a series, a season, a film or an episode and choose **Resync subtitles…**
   (on a season, **Resync this season's subtitles…**).
2. Read the dialog and click **Resync**. Do it again on another series to queue that one too.
3. Follow it in the subtitle queue's panel, from the badge in the top bar.

## Good to know

- Each subtitle is compared with a subtitle track of the video, or with what is said in the audio
  when a transcriber is set up in **Settings › Subtitles**. It is moved only when the match is
  certain.
- Kaveo corrects its own copy. Your subtitle files and your videos are never changed.
- What it could not place is left as it was and listed under its episode: click **Open episode** and
  sync it by hand, as in [Syncing subtitles](sync.md).
- **Restore previous sync** puts a corrected subtitle back as it was. Edits made since are lost.
- A title only on a Jellyfin server is compared with the server's text subtitles, or with its
  audio. Its picture subtitles cannot be used there.
