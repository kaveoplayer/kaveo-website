---
title: Settings from an AI assistant
description: Let an AI assistant, or a terminal, change the settings of the Kaveo that is running.
order: 95
---

## What it is for

Kaveo comes with kaveo-ctl, a small program that changes the settings of a running Kaveo. It is also
an MCP server, so an AI assistant such as Claude Code can tune Kaveo while a film plays.

## How to use it

1. In Claude Code, add an MCP server named kaveo that runs kaveo-ctl with the argument mcp.
2. Start Kaveo, play something, and ask the assistant for what you want.
3. Each change applies at once and stays unsaved, like an edit on the settings page.
4. Ask the assistant to save, or press **Save** on the settings page.

## Good to know

- It reaches the player's settings — picture, sound, subtitles, languages, playback — and each display's and audio output's, never your library, servers, keys or private titles.
- The .deb, .rpm and Arch packages and the tarball's installer put kaveo-ctl beside kaveo; the AppImage must be unpacked with its own extract option first. From a terminal, kaveo-ctl's help lists its commands.
- If a second Kaveo is the one playing, changes go to it, and it cannot save them.
