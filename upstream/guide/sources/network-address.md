---
title: Open a network address
description: Play a file from an SMB or WebDAV address given on the command line.
order: 19
---

## What it is for

Open a file on your network by its address — the one a file manager shows for a shared folder —
without looking for it in your library.

## How to use it

1. Start Kaveo with the address from the [command line](../command-line.md).

2. If one of your [network folders](network-folders.md) is on that server, signed in as the user in
   the address (if it names one), the file plays and resumes where you stopped.
3. If none is, **Add a network folder** opens with the server, port, share, user name and folder
   filled in. Type the password, click **Test**, then **Next**: the file's folder is shown first.

## Good to know

- SMB and WebDAV addresses work; an SFTP address says Kaveo can't open it yet.
- A password written in the address is never kept: the form asks for it.
- With Kaveo already open, the address plays in that window.
- Full screen applies when the file plays; other options given with an address, such as looping
  or queueing, are ignored.
