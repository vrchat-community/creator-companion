---
slug: release-2.0.1
date: 2023-03-10
title: Release 2.0.1
authors: [momo]
tags: [release]
draft: false
---
## Summary

This release focuses on post-launch bugfixes and improvements. See below for a more detailed changelog.

<!--truncate-->

## Changelog

* When using multiple user repos - the packages should now load correctly. In case something goes wrong - VCC will now show an appropriate error message and allow you to retry.
* All of the packages from selected user repos should now be visible in the package manager. Only the packages from the first repo were visible before.
* The layout of the Projects List has been adjusted to work better for projects with very long paths.
* VCC errors across the board are now handled more gracefully, with extra information being shown in the logs.
* Unity project WebSocket disconnects should now be handled more gracefully.
* Minor bugfixes and security improvements


### Known Issues
You can see all the known issues here: [VCC GitHub Issues](https://github.com/vrchat-community/creator-companion/labels/vcc-web)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.0.1.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.0.1/VRChat_CreatorCompanion_Setup_2.0.1.exe)
