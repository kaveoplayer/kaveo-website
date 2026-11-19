---
title: Network folders
description: A folder on another machine, reached through a connection.
order: 45
---

## What it is for

A folder on a NAS, a WebDAV server or an S3 bucket, reached through a connection set up once.

## How to use it

1. Open **Settings › Library › Network**, click **Add connection…**.
2. Choose what it is, then the host, the folder inside it (empty is the root), and a user name and
   password if needed.
3. For **S3**: the **Endpoint** (empty for Amazon), the **Bucket**, the **Region**, the **Prefix**
   and the **Access key** with its **Secret key**. **List buckets…** is optional —
   a token that reads one bucket cannot list them all.
4. Click **Test**: Kaveo asks whether the folder is there; **Save** appears after a pass.
5. In **Settings › Library › Categories** click **Add a network root…**: pick the connection and a
   folder. **×** removes it.

## Good to know

- **WebDAV**, **SMB** and **S3**; **SFTP** is greyed out, the reason on hover. SMB needs a share and
  a user name.
- Titles play like any other; a file added on the server appears after the next scan.
- An S3 bucket costs **traffic**: a provider that charges for downloads makes watching expensive.
- A connection that stops answering says so — *Waiting for the network…*, then *The connection was
  lost* with **Retry**, position kept — and its last scan's titles stay, next start too.
- **Keep a copy on this computer** (under **Disk cache**) keeps what you watch, so a second viewing
  downloads nothing. At **Space it may use** the oldest copies go. A hidden title is never cached.
