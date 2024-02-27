---
slug: release-2.2.5
date: 2024-02-27
title: Release 2.2.5
authors: [momo]
tags: [release]
---
## Summary

Fixes issue with 2019 project migrations

<!--truncate-->

## Fixes

- Fixed an issue where migrating a copy of a project would not update VPM Resolver to version 0.1.27+. [Fixes #436](https://github.com/vrchat-community/creator-companion/issues/436).
- Fixed an issue where migrating an avatars project would remove VRChat SDK instead of upgrading it. [Fixes #435](https://github.com/vrchat-community/creator-companion/issues/435).
- Fixed an issue where migrating an avatars project would add AudioLink v1.x to projects that did not use AudioLink. [Fixes #434](https://github.com/vrchat-community/creator-companion/issues/434).

## Download

If you already installed the Creator Companion, simply open it and click **Update**.

To install the Creator Companion, download the latest version from the [official download page](https://vrchat.com/home/download).

However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.2.5.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.2.5/VRChat_CreatorCompanion_Setup_2.2.5.exe).
