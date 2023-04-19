---
slug: release-2.0.0
date: 2023-03-09
title: Release 2.0.0
authors: [momo]
tags: [release]
draft: false
---
## Summary

<iframe width="100%" class="ratio-16-by-9" src="https://www.youtube-nocookie.com/embed/0u1g0TYoJsU" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>

This release completely overhauls the Creator Companion's user interface! It's more responsive, more stable, faster, and prettier.

<!--truncate-->

## Changelog

* Legacy Assets are now removed when adding Packages at any time (instead of just during Migration), addressing [24](https://github.com/vrchat-community/creator-companion/issues/24).
* The VCC now does a version check on the built-in Templates and updates your installed versions if needed. 
* The VCC now shows a brief introduction when launched for the first time, and helps you set up Unity.
  * Unity Hub is no longer installed automatically. If Unity Hub is not installed, the VCC will guide you through the installation.

### Package Manager Improvements
* Streamlined button layout 
* You can now search the packages (via their name or id)
* You can now toggle which repositories you want to be shown in the package list
* Adding a VPM package to a project which contains the matching legacy version in the Assets folder will remove the legacy version (for example, adding the VPM AudioLink package to a project which contains an "Assets/AudioLink" folder will remove this folder).

### General UI & UX Improvements
* The Projects view now has a Grid view along with an updated List view.
* New Theme selector, can follow your OS theme.
* A project that needs migration is now marked with text/color and displays a Migrate Project button.
* The project creation screen validates the path length for your project before trying to make it.
* The Learn screen has more links on it, and supports banners now.
* The Templates screen supports banners.
* You can manually check for updates at the bottom of the Settings screen.
* The logs screen has been improved with line numbers, auto-scroll toggle, and word-wrapping switch 
  * You can also dismiss log popups now
* Added a refresh button to the Projects listing you can use if it ever gets "stuck" for too long (20 seconds+)
* Automated project cleanup will now log the path of the removed project
  This process happens when you have projects in your list which do not exist anymore, e.g. if you moved or deleted them

### VRC Quick Launcher
* Removed IK foldout & options as the launch options are not present in the client anymore (the options have been moved to the Main Menu Tracking & IK settings). 
* Added support for the CPU affinity launch option under the "Edit" menu in VRC Quick Launcher

### Known Issues
You can see all the known issues here: [VCC GitHub Issues](https://github.com/vrchat-community/creator-companion/labels/vcc-web)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.0.0.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.0.0/VRChat_CreatorCompanion_Setup_2.0.0.exe)
