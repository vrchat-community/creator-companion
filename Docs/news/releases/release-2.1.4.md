---
slug: release-2.1.4
date: 2023-09-27
title: Release 2.1.4
authors: [momo]
tags: [release]
---
## Summary

Fixes some issues with the new "legacyPackages" handling for the VRChat Worlds package which contains UdonSharp and ClientSim. Also fixes an issue with spaces in project names.

<!--truncate-->

## Bug Fixes
* Fixes the issue where a Legacy Package (like UdonSharp or ClientSim) would be installed if another package depended on it, even if the target project already has it via the a merged package. Fixes [#350](https://github.com/vrchat-community/creator-companion/issues/350).
* Fixes the issue where a Legacy Package would not be removed from the project when the Merged package (like Worlds 3.4.0) was upgraded as a dependency of another package. Fixes [#349](https://github.com/vrchat-community/creator-companion/issues/349).
* Fixes the issue where a project could not be created if its name had a trailing space (by removing the space, you still can't have that). Fixes [#267](https://github.com/vrchat-community/creator-companion/issues/267).
* Does not allow project paths with special symbols, Fixes [#330](https://github.com/vrchat-community/creator-companion/issues/330).
* Does not update to prerelease packages unless they were specifically added to the project.
* Restores the UdonSharp template until 3.4.0 is fully released.
## Changes
* Adds the flag `-accept-apiupdate` when launching Unity to avoid the confusing prompt about updating the API Compatibility Level.

### Known Issues
You can see all the known issues here: [VCC GitHub Issues](https://github.com/vrchat-community/creator-companion/labels/vcc-web)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.1.4.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.1.4/VRChat_CreatorCompanion_Setup_2.1.4.exe)
