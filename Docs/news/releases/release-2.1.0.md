---
slug: release-2.1.0
date: 2023-04-06
title: Release 2.1.0
authors: [momo]
tags: [release]
draft: false
---
## Summary

This release adds support for [Community Repositories](https://vcc.docs.vrchat.com/guides/community-repositories), giving creators the ability to publish their packages to a public listing for other creators to find and use. It also avoids deleting user-created folders when updating the VCC, and fixes the order of package versions in the GUI.
<!--truncate-->

## Changelog

* Adds a section in Settings to manage Community Repositories.
* Refactors caching logic to download items less often.
* Fixes the order of package versions in the GUI, including the 'latest' version suggested and the order of versions in the dropdown.

## Installer Change

The installer now has a specific list of folders to delete when updating, instead of deleting everything in the Creator Companion's install folder (typically `%LocalAppData%\Programs\VRChat Creator Companion`). It will only delete its own folders:
* Templates
* Tools
* WebApp

It will also delete these file types from the root of the directory (but not any subdirectories):
* .exe
* .dll
* .exp
* .lib
* .dat

We HIGHLY recommend that you do not store user content in this directory at all. But if you do, it will not be deleted as part of installing a new version.

### Known Issues
You can see all the known issues here: [VCC GitHub Issues](https://github.com/vrchat-community/creator-companion/labels/vcc-web)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.1.0.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.1.0/VRChat_CreatorCompanion_Setup_2.1.0.exe)
