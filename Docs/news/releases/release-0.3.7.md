---
slug: release-0.3.7
date: 2022-08-26
title: Release 0.3.7
authors: [momo]
tags: [release]
draft: false
---
## Summary

Removes requirement to install as Administrator, cleans up Package directory's .gitignore file.

<!--truncate-->

## Changelog

* Changes InnoSetup project to use `PrivilegesRequired=lowest` and `PrivilegesRequiredOverridesAllowed=dialog`, which will show a dialog when you first run the installer to let you choose between installing it for the local user (non-admin) or for everyone (admin). Subsequent updates should automatically install in the same way.
* Updates .gitignore included in each Template's Packages directory to include all subfolders by default

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.3.7.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.3.7/VRChat_CreatorCompanion_Setup_0.3.7.exe)
