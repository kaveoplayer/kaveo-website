---
title: Network folders
description: A folder on another machine, reached through a connection.
order: 45
---

## What it is for

A folder on another machine — a NAS or a WebDAV server — reached through a connection you set up
once. A category holds it as one of its roots.

## How to use it

1. Open **Settings › Library › Network**.
2. Click **Add connection…**: a name, the host and the folder inside it — empty means the server's
   root. Add a user name and password if it asks.
3. Click **Test**: Kaveo asks the server whether the folder is there. **Save** appears only after a
   pass — nothing is stored before.
4. **Edit** changes a connection, **Delete** removes it. One a category uses cannot be deleted; the
   message names the categories.
5. Open **Settings › Library › Categories**, choose the category and click **Add a network root…**:
   pick the connection and the folder inside it — empty is the connection's own root — then click
   **Add**. **×** removes it again.

## Good to know

- Only **WebDAV** for now; **SMB**, **S3** and **SFTP** are greyed out, the reason on hover.
