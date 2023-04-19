---
slug: release-0.2.7
date: 2022-06-24
title: Release 0.2.7
authors: [momo]
tags: [release]
draft: false
---
## Summary

We've got some major quality-of-life changes in this version. The Creator Companion no longer needs to open Unity in order to create new projects or migrate existing ones. This greatly speeds up the process. Once the project is created or migrated, the VCC will give you an easy "Open Project" button to open up your project in the right version of Unity, which may take a while since Asset Importing, etc is no longer handled as part of the initial process.

There's also a bevy of Canny bugs fixed below, thanks for reporting them!

<!--truncate-->

## Changelog
* Creating new projects and migrating existing ones no longer use Unity! This speeds up the process greatly and reduces the possibilities for errors if Unity can't be found.
* Fixes issue where you can click through the "Please Wait" curtain that appears while waiting for some actions to complete. [Canny](https://feedback.vrchat.com/creator-companion-beta/p/vcc-can-interact-with-ui-during-migration)
* Updates Templates to have both Input systems enabled - this should fix the issue where classic input events don't work after migrating a project.
* Fixes issue when installing the Unity Hub that could cause an exception when trying to figure out which version is installed, when there's no Hub avaialable.
* Fixes issue when getting a project's type
* Fixes issue where TCP Server that connects to open VRChat projects would throw an exception if another process is using the port it wants. 
* Adds extra checks to make sure the Unity Editor is set whenever trying to launch it.
* Fixes issue where the keyboard would input too many characters in the embedded web browser.
  [Canny](https://feedback.vrchat.com/creator-companion-beta/p/bug-trying-to-login-in-the-forum-from-the-companion-double-the-input-typed)
* Fixes issue where long paths can overlap with the packages section. [Canny](https://feedback.vrchat.com/creator-companion-beta/p/022-bug-long-paths-can-overlap-with-the-packages-section)
* Fixes issue where you couldn't scroll package listings. [Canny](https://feedback.vrchat.com/creator-companion-beta/p/bug-022-cant-scroll-the-user-packages-list-on-a-project)
* Fixes crash when exiting the application during Migration (still not a good idea though). [Canny](https://feedback.vrchat.com/creator-companion-beta/p/vcc-instant-crash-during-migration-if-you-press-the-close-window-button-1)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.2.7.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.2.7/VRChat_CreatorCompanion_Setup_0.2.7.exe)
