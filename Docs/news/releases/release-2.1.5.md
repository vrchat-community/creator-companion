---
slug: release-2.1.5
date: 2023-10-13
title: Release 2.1.5
authors: [fax]
tags: [release]
---
## Summary

Improves how the Creator Companion manages (legacy) packages in projects using SDK 3.4.0 or newer. 

<!--truncate-->

## Bug Fixes
- Fixes failures during project creation if the template contains legacy packages. Fixes [#362](https://github.com/vrchat-community/creator-companion/issues/362).
- Fixes package dependencies sometimes resolving to the older versions even though newer versions are available.
- Fixes package installation sometimes downgrading the VRChat SDK.
- Fixes UdonSharp being automatically added to projects if another package depends on it, even if that project already includes UdonSharp as part of SDK version 3.4.0. Fixes [#356](https://github.com/vrchat-community/creator-companion/issues/356).
- Fixes prompts asking the user to downgrade packages despite all packages being compatible. Fixes [#359](https://github.com/vrchat-community/creator-companion/issues/359).

## Changes
- Automatically removes legacy packages, such as ClientSim and UdonSharp, from projects using SDK 3.4.0 or newer.
  - Version 3.4.0 of the Worlds SDK merged UdonSharp and ClientSim into the base SDK. In some cases, UdonSharp and ClientSim were not automatically removed from 3.4.0 projects. This caused Unity errors in the pervious version of the VCC.
- Removes the "VRChat World Project with UdonSharp" template.
  - UdonSharp is now integrated into the the Worlds SDK.
- Adds a warning when adding or removing packages that may be incompatible with the project's Unity version.
## Download

If you already installed the Creator Companion, simply open it and click **Update**.

To install the Creator Companion, download the latest version from the [official download page](https://vrchat.com/home/download).

However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.1.5.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.1.5/VRChat_CreatorCompanion_Setup_2.1.5.exe).
