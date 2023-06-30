---
slug: release-2.1.2
date: 2023-06-01
title: Release 2.1.2
authors: [momo]
tags: [release]
draft: false
---
## Summary

Adds Creator Docs search to the Learn page, updates supported unity versions, and fixes issues with connecting to Unity, missing legacy folders, and hosting packages.

<!--truncate-->

## New Features
* Adds a search bar to the Learn page for quick access to the Creator Docs. [Addresses #310](https://github.com/vrchat-community/creator-companion/issues/310).

## Bug Fixes
* Fixes timeout issues with the VCC's websocket connection to the Unity editor.
* Fixes legacy folders not being deleted if a folder fom the manifest is missing. [Fixes #281](https://github.com/vrchat-community/creator-companion/issues/281).

## Changes
* Updates NativeFileDialogSharp to Version 0.6.0-alpha for Mac support.
* Updates valid unity versions list, and makes unity version errors much clearer.
* Makes hosting packages outside of Github releases easier, by no longer requiring Content-Disposition headers. [Fixes #240](https://github.com/vrchat-community/creator-companion/issues/240).

### Known Issues
You can see all the known issues here: [VCC GitHub Issues](https://github.com/vrchat-community/creator-companion/labels/vcc-web)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.1.2.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.1.2/VRChat_CreatorCompanion_Setup_2.1.2.exe)
