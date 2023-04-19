---
slug: release-1.0.4
date: 2022-11-23
title: Release 1.0.4
authors: [momo]
tags: [release]
draft: false
---
## Summary

Fixes issues around installing Unity Hub and adds some logic to avoid migrating a world package detected in an avatar project and vice-versa.

<!--truncate-->

## Changelog

* Fixes issues around installing Unity Hub by prompting to restart the VCC as administrator before running the install. Shows a button if the process is not elevated, and attempts to start the process elevated, which provides the permissions needed for a Unity Hub install on some machines.
* When migrating a project where legacy Curated packages were found, will check all the dependencies of the package to make sure it's not trying to bring in something conflicting. Specifically, should solve [this issue](https://github.com/vrchat-community/creator-companion/issues/22) where AudioLink can be detected in both World and Avatar projects, but should only be auto-migrated in World projects for now.

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_1.0.4.exe](https://vrcpm.vrchat.cloud/vcc/Builds/1.0.4/VRChat_CreatorCompanion_Setup_1.0.4.exe)
