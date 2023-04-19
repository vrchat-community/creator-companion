---
slug: release-0.2.3
date: 2022-05-27
title: Release 0.2.3
authors: [momo]
tags: [release]
draft: false
---
## Summary

This is the first real batch of changes from Open Beta Canny reports, addressing some of the quicker fixes and features which were close to ready.

<!--truncate-->
## Changelog

* Allows spaces and periods in New Project Names
  * [Canny: New Projects cannot be named with special characters and spaces](https://feedback.vrchat.com/creator-companion-beta/p/bug-report-022-new-projects-cannot-be-named-with-special-characters-and-spaces)
* Changes CheckGit method to run `git --version` on the command line instead of looking in the registry
    * [Canny: "You need git installed" but Git is already on the Path](https://feedback.vrchat.com/creator-companion-beta/p/you-need-git-installed-but-git-is-already-on-the-path)
* Fixes basic VPM functions for Mac and Linux platforms
    * [Canny: Mac/Linux version of VCC](https://feedback.vrchat.com/creator-companion-beta/p/feature-request-maclinux-version-of-vcc)
* Updates templates to use latest SDK versions.
  * [Canny: Allow removal of the samples directory](https://feedback.vrchat.com/creator-companion-beta/p/allow-removal-of-the-samples-directory)
* Shows Unity when launching from VCC to avoid many stalled migrations (may fix several Canny reports, time will tell)
* Removes #vcc tag from templates for future compatibility
* Adds 'pathToUnityHub' property to Settings to allow users to set this manually on a Mac
* Updates Docs to include info for all the above
* Moves Release news into 'releases' docs folder
* Changes CLI [new](/vpm/cli#new) command to include project path as option instead of argument (fixes issue where template was used as path)
## VRC Quick Launcher

* Added "None" instance info that'll launch into whatever home is default

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.3.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.3/VRChat_CreatorCompanion_Setup_0.2.3.exe)