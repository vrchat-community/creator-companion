---
slug: release-2.1.1
date: 2023-04-28
title: Release 2.1.1
authors: [momo]
tags: [release]
draft: false
---
## Summary

Adds project sorting, a Project Changes dialog when adding packages, and fixes issues with settings, making projects in the VCC directory, and adding community repos with pre-release packages.

<!--truncate-->

## New Features
* Projects will be sorted to the top of the list when they are opened. [Addresses #248](https://github.com/vrchat-community/creator-companion/issues/248).
* When installing packages, a new dialog is shown with the changes that will be made to the project, and warnings about possible issues. [Addresses #247](https://github.com/vrchat-community/creator-companion/issues/247).
* When a VCC update is available - clicking "Update" now brings the user to a new Update page, which shows the version you are updating from and to, and links to the changelogs page. [Addresses #25](https://github.com/vrchat-community/creator-companion/issues/25).
* We've added analytics to track which Community Repos are the most popular! We're sending the URLs of the repos successfully added, and _whether_ they use custom headers. We are _not_ sending the custom headers themselves. You can opt out of this behavior in settings.
* The VRC Templates have been updated to include SDK versions 3.2.0 and later (they were pinned to 3.1.x before).

## Bug Fixes

* Automatically clears and re-creates 0-byte settings files and also provides a special experience for settings files that contain malformed json. [Fixes #121](https://github.com/vrchat-community/creator-companion/issues/121).
* Helps users to keep projects out of the VCC program directory - a warning will be shown before upgrading and when adding a project, and the user is prevented from creating a project in the this directory from a template. [Fixes #40](https://github.com/vrchat-community/creator-companion/issues/40).
* Fixes issue when trying to add a community repo that has a package which contains only a pre-release version, and the user has disabled showing Prerelease versions. [Fixes #238](https://github.com/vrchat-community/creator-companion/issues/238).
* VCC is brought to the front automatically when click a "vcc://" link from a web browser. [Fixes #235](https://github.com/vrchat-community/creator-companion/issues/235).
* Fixed Package search issues where packages were memorized incorrectly and only filtered when the source packages were reloaded, Now it correctly updates as you type and filters out the packages based on the names or ids [Fixes #253](https://github.com/vrchat-community/creator-companion/issues/253)

### Known Issues
You can see all the known issues here: [VCC GitHub Issues](https://github.com/vrchat-community/creator-companion/labels/vcc-web)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.1.1.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.1.1/VRChat_CreatorCompanion_Setup_2.1.1.exe)
