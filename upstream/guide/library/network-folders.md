---
title: Network folders
description: A folder on another machine, reached through a connection.
order: 45
---

## What it is for

A folder on a NAS, a WebDAV server or an S3 bucket, reached through a connection.

## How to use it

1. Open **Settings › Library › Network**. **Find on the network…** lists servers that announce
   themselves; click **Use**, or **Add connection…** and type the address.
2. Choose the kind, the host, the folder inside it (empty is the root), and the user name and
   password.
3. For **S3**: the **Endpoint** (empty for Amazon), the **Bucket**, the **Region**, the **Prefix**
   and the **Access key** with its **Secret key**. **List buckets…** is optional.
4. Click **Test**: Kaveo checks the folder is there; **Save** appears after a pass.
5. In **Settings › Library › Categories** click **Add a network root…**: pick the connection and a
   folder. **×** removes it.

## Good to know

- **WebDAV**, **SMB**, **S3** and **SFTP**; SMB needs a share and a user name.
- **NFS** is not a connection: your system mounts it, and the mounted folder is added under
  **Folders** (on Linux, labelled **NFS**).
- A file added on the server appears after the next scan.
- An S3 bucket costs **traffic**: a provider that charges for downloads makes watching expensive.
- A connection that stops answering says so — *Waiting for the network…*, then *The connection was
  lost* with **Retry** — and its last scan's titles stay.
- **Keep a copy on this computer** (under **Disk cache**) makes a second viewing download nothing;
  a hidden title is never cached.
- A song's tags can be edited here, only when you ask — see
  [Editing music tags](edit-tags.md).
