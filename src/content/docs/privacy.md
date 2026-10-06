---
title: Privacy
description: What Kaveo sends over the network, to whom, and what it never sends.
---

<!-- DRAFT — pending legal review. Factual summary of the app's network behaviour as designed for
     the beta (M-Distribution plan, D4 and D5); not yet a privacy policy. -->

Kaveo is a program on your computer. Your library, your watch history, your settings and your
subtitles stay there. Passwords, API keys and your licence key are kept in your system's password
store.

## No telemetry

Kaveo collects no analytics and sends no usage statistics or crash reports. A diagnostic bundle is
made only when you click **Export a diagnostic bundle**, and it goes nowhere unless you send it
yourself — see [Support](support.mdx).

## What Kaveo sends by itself

**The update check.** When it starts, and once a day after that, Kaveo asks GitHub — where its
releases are published — whether a new version exists. Like any request, it reveals your IP address,
and it states the version you are running. Nothing else is sent. The automatic check can be turned
off; checking by hand always works.

**Your licence.** The licence key is checked on your computer and is never sent anywhere. To be sure
of the date, which a beta key depends on, Kaveo reads it from the answer of the same releases page,
and needs that answer at least once every seven days — so it asks for it, at most once a day, even
when the automatic update check is turned off. The request states the version and nothing else.

## What you choose to connect

These services are used only once you set them up, and Kaveo talks to each one directly — nothing
passes through us.

- **TMDB** — once you enter a TMDB key, Kaveo looks up your titles there by name and fetches their
  posters, plots and genres.
- **OpenSubtitles** — once you enter a key, Kaveo searches it with a title's name, season and
  episode, and your languages; downloading signs in with your OpenSubtitles account.
- **Jellyfin** — Kaveo talks to the servers you connect, with the sign-in you gave it. While you add
  a server, it also looks for servers on your local network.
- **AI translation** — translating a subtitle sends its lines to the provider you chose. A local
  provider, such as Ollama or LM Studio, keeps them on your own computer.
- **Trailers** — playing a trailer downloads it from YouTube. The first time, Kaveo downloads the
  tools it uses to do so from their GitHub release pages.
- **Downloads you start** — a speech-recognition model, for example, comes from the site that
  publishes it.

Each of these services handles what it receives under its own privacy policy.

## This website

This site is hosted on GitHub Pages. It sets no cookies, runs no analytics and loads no third-party
fonts or scripts. GitHub, as the host, receives your IP address with every page request.

## Attribution

This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
