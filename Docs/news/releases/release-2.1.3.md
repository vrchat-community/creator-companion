---
slug: release-2.1.3
date: 2023-09-18
title: Release 2.1.3
authors: [momo]
tags: [release]
---
## Summary

Adds logic to handle "Legacy Packages" to handle ClientSim and UdonSharp being merged into the Worlds package in SDK 3.4.0, and fixes some issues around updating packages.

<!--truncate-->

## New Features
* Handles packages which absorb other packages by adding a new 'legacyPackages' field to the VPM Manifest which removes the duplicate package. This is used by the VRChat Worlds package to remove the ClientSim and UdonSharp packages.
* Adds new "Simple Mode" when updating packages to present the changes in a less-technical way.

## Bug Fixes
* Automatically repairs User Repos which are missing their 'localPath', which caused the VCC to make a new cache file for the repo every time it was accessed.
* Fixes the issue where the Project Changes dialog would show that prerelease packages conflicted with the target package version when they did not.
* Fixes the issue where adding a package with a dependency which is already installed would cause the VCC to update the dependency to the latest non-prerelease version.
* Fixes the problem where resolving a project would install package versions different than the ones specified as 'locked' in the VPM manifest.

## Changes
* Removes "UdonSharp" template from the list of templates, as the new Worlds package includes UdonSharp by default.

### Known Issues
You can see all the known issues here: [VCC GitHub Issues](https://github.com/vrchat-community/creator-companion/labels/vcc-web)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.1.3.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.1.3/VRChat_CreatorCompanion_Setup_2.1.3.exe)
