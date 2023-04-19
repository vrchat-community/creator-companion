---
slug: release-1.0.6
date: 2022-12-13
title: Release 1.0.6
authors: [momo]
tags: [release]
draft: false
---
## Summary

Handles invalid projects better to keep the VCC from getting stuck in a bad state.

<!--truncate-->

## Changelog

* Always checks that a project is valid before saving the path to the app state, should fix issues where it tries to refresh packages for an invalid project path.
* Fixes avatar template package.json being named base.

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_1.0.6.exe](https://vrcpm.vrchat.cloud/vcc/Builds/1.0.6/VRChat_CreatorCompanion_Setup_1.0.6.exe)
