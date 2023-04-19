---
slug: release-0.2.5
date: 2022-06-02
title: Release 0.2.5
authors: [momo]
tags: [release]
draft: false
---
## Summary

VCC Fixes for International users a migration of the VRC Quick Launcher settings to AppData to fix some bugs and usability issues.
<!--truncate-->
## Changelog
* Adds Unicode support to Project Name text fields
  * [Canny: Change font of project list on CreatorCompanion](https://feedback.vrchat.com/creator-companion-beta/p/change-font-of-project-list-on-creatorcompanion)
* Switched to Newtonsoft for Json serialization to fix issue where files would not serialize on machines set to "Czech (Czechia)" regional setting.
  * [Canny: Settings cannot serialize when OS Language set to Czech](https://feedback.vrchat.com/creator-companion-beta/p/settings-cannot-serialize-when-os-language-set-to-czech)


## VRC Quick Launcher

* Added "IK" options following VRChat 2022.2.1 release.
* Fixed an issue where JSON settings (Debug options and Instance info) would not get saved without launching with administrator permissions.
* Moved all JSON settings to Appdata/Roaming/VRChatQuickLauncher.
* Added a button to quickly access all your saved JSON settings (File > Open Save Location).
* Fixed an issue where application-wide settings (Selected theme, installs, profiles, save on exit, auto-layout, auto-close, launch delay) would get reset, this is a breaking change that will reset your current application-wide settings one last time.

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.5.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.5/VRChat_CreatorCompanion_Setup_0.2.5.exe)