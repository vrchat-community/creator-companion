---
slug: release-2.2.0
date: 2023-12-07
title: Release 2.2.0
authors: [fax]
tags: [release]
---
## Summary

Adds support for Unity 2022 and many other Quality of Life improvements.

<!--truncate-->

## Changes

- The Creator Companion will now show the Unity Version used by the Project, as well as the date when the project was last opened or changed through the VCC
- Projects can now be added to favorites. Tf you have any favorites - the Creator Companion will automatically sort them on top when opened
- Projects can now be sorted by Unity Version, Last Modified, Name, and Favorite status
- The VPM CLI tool can now list all the projects and their Unity Version, sorted by Last Modified

## Bug Fixes

- Errors encountered when adding existed projects are now logged correctly

## Important Notes for Tool Developers

If you have been directly changing the `settings.json` file, please note that with VCC version 2.2.0 and beyond - the `userProjects` list is now considered deprecated. The projects list has been moved to a new `vcc.liteDB` file in the same folder and uses the [LiteDB](https://github.com/mbdavid/litedb) project.

> VCC and the VPM CLI will continue reading and writing `userProjects` list for backwards compatibility for some time, but it is recommended to switch to the new `vcc.liteDB` file as soon as possible

## Download

If you already installed the Creator Companion, simply open it and click **Update**.

To install the Creator Companion, download the latest version from the [official download page](https://vrchat.com/home/download).

However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.2.0.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.2.0/VRChat_CreatorCompanion_Setup_2.2.0.exe).
