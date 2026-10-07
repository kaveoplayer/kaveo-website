---
title: Privacy and cookies
description: Who handles your data, what Kaveo and this website send over the network, and your rights.
---

_Last updated: 7 October 2026_

Kaveo is a program on your computer. Your library, your watch history, your settings and your
subtitles stay there. Passwords, API keys and your licence key are kept in your system's password
store.

## Who is responsible

The controller of the personal data described on this page is **Mattia Cenci**, a private
individual based in Italy. For anything about your data, write to
[support@kaveoplayer.com](mailto:support@kaveoplayer.com).

## What we receive, and why

Only two things reach us, and only because you send them.

**Your request for a licence key.** When you write to ask for a beta key, we receive your email
address, the name you sign with and whatever you write. The key we send you carries the name and
address it was issued to; it is signed, not encrypted, so anyone you show it to can read them. We
keep a list of the keys we issued, with those details, to answer questions about them and to revoke
a key that is misused — a revocation publishes only the key's random id, never who it belonged to.

- Purpose: issuing and supporting your licence.
- Legal basis: taking the steps you ask for before and under the licence agreement (Art. 6(1)(b)
  GDPR).
- Kept until the end of the beta and for twelve months after it, then deleted — unless the law
  requires us to keep something longer, or it is needed for a dispute already under way.

**Your support emails.** The same applies to anything else you write to us: we use it to answer you,
on the basis of our legitimate interest in supporting the people who use Kaveo (Art. 6(1)(f) GDPR),
and keep it for the same period.

Our mailbox is hosted by **OVHcloud** (France), which processes these emails on our behalf and keeps
them in the European Union.

We do not sell your data, use it for advertising, or make automated decisions about you.

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

These requests go to GitHub, not to us: we never see your IP address.

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

Each of these services handles what it receives under its own privacy policy, as its own
controller.

## This website

This site is hosted on **GitHub Pages**. GitHub receives your IP address and browser details with
every page request, to deliver the page and protect the service, and handles them under the
[GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
We do not receive GitHub's access logs. GitHub is based in the United States and participates in the
EU–U.S. Data Privacy Framework.

The site runs no analytics and loads no third-party fonts, scripts or embeds. Links to other sites
make no request until you follow them.

**Issues and discussions** on our GitHub repository are public, and are handled by GitHub under its
own terms. Do not post a licence key or anything private there.

## Cookies

This site sets **no cookies**.

It does store three small preferences in your browser, which never leave it and are not used to
recognise you:

| Name | Where | What it remembers |
| --- | --- | --- |
| `starlight-theme` | local storage | the light or dark theme you picked |
| `starlight-synced-tabs__…` | local storage | which tab you chose on a page with tabs |
| `sl-sidebar-state` | session storage | which sidebar groups are open, until you close the tab |

They exist only to do what you asked, so they need no consent. You can delete them at any time
from your browser's site data settings.

## Your rights

Under the GDPR you can ask us for access to the data we hold about you, its correction or
deletion, a restriction of its use, a copy of it in a portable format, and you can object to its use
on the basis of our legitimate interest. Write to
[support@kaveoplayer.com](mailto:support@kaveoplayer.com); we answer within one month.

If you think we have handled your data unlawfully, you can lodge a complaint with the Italian data
protection authority, the
[Garante per la protezione dei dati personali](https://www.garanteprivacy.it/), or with the
authority of the EU country where you live.

## Changes

If this page changes, the date at the top changes with it.

## Attribution

This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
