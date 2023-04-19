---
slug: release-1.0.5
date: 2022-12-7
title: Release 1.0.5
authors: [momo]
tags: [release]
draft: false
---
## Summary

Fixes startup issues, unlocks use of the app even when the Unity Editor cannot be found, checks for updates every 10 minutes while the app is open, and improves the migration screen! \
\
The migration screen now includes some info from our [migration documentation](https://vcc.docs.vrchat.com/vpm/migrating) showing a list of which folders will be deleted / upgraded (such as `\Assets\VRCSDK` or `\Assets\AudioLink`). If you'd like to keep specific files inside one of these folders, copy or move them before migration! 

<!--truncate-->

## Changelog

* Previously, you would be forced to the "Requirements" screen when a valid Unity Editor install could not be found. Now, you can use the App but you will see a big red "Install or Find Unity" button on the left, and the button to open a project in Unity is not shown.
* Checks all the dependencies for a given package, and hides it if it would include a World package in an Avatar project, or vice versa.
* Skips packages with no releases when getting latest versions (this caused an issue where people couldn't migrate because the VCC didn't know what to do with a package which is staged for release but not yet available).
* Checks for updates every 10 minutes instead of only checking when the app is first opened, addressing [this Canny](https://feedback.vrchat.com/creator-companion-beta/p/037100-add-update-check-interval).
* Migration Screen updates:
  * Shows a list of folders that will be deleted after migration. 
  * Clarifies the explanation of how migration works.

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_1.0.5.exe](https://vrcpm.vrchat.cloud/vcc/Builds/1.0.5/VRChat_CreatorCompanion_Setup_1.0.5.exe)
