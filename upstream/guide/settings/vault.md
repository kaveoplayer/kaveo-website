---
title: Vault
description: Where private titles live, when the vault locks itself, and its two credentials.
order: 40
---

## What it is for

**Settings › Vault** holds the vault's own preferences. It does not create one — the padlock in the
top bar does — and an existing vault cannot be moved from here.

![Settings with Vault chosen in the rail: Vault folder reading No vault yet, Lock by itself at 15 minutes, the unticked Also stop a hidden title that is playing, and Change password… and New recovery key… greyed out above Unlock the vault to change either one.](../images/settings/vault.webp)

## How to use it

1. **Vault folder** shows where the encrypted files are, read-only; it reads *No vault yet* until
   you [set one up](../private/set-up.md).
2. Set **Lock by itself** to how many **minutes** the vault waits before locking itself: 15 to begin
   with, and 0 means never.
3. Tick **Also stop a hidden title that is playing** to have that lock stop the film too; it starts
   off, since a film already on screen is not a further leak.
4. Click **Save** — both of those wait for it, like every other value; see
   [Saving changes](saving.md).

## Good to know

- Under **Password and recovery key**, **Change password…** and **New recovery key…** need the
  vault unlocked, and say so. Either change is kept as soon as its dialog says it is done: no
  **Save**, and nothing for **Revert** to put back. See [Locking and unlocking](../private/lock.md).
- *Vault folder not reachable*, in red, means the drive it lives on is not mounted.
