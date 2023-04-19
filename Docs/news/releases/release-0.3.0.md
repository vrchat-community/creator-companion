---
slug: release-0.3.0
date: 2022-07-15
title: Release 0.3.0
authors: [momo]
tags: [release]
draft: false
---
## Summary

Move to embedded packages!
<!--truncate-->

## Changelog
* Switches to embedded packages as the target package style. This is the BIG CHANGE and it makes other things easier, like removing the requirement on git and relying on Unity to resolve packages for us. Also fixes [Canny: VCC reports different SDK version number than what is actually in use in project](https://feedback.vrchat.com/creator-companion-beta/p/vcc-reports-different-sdk-version-number-than-what-is-actually-in-use-in-project)
* Adds a bright green line at the left-hand side of every package installed in a project to make it more clear. Addresses [Canny: Increase contrast on package category tabs](https://feedback.vrchat.com/creator-companion-beta/p/027-feedback-increase-contrast-on-package-category-tabs)
* Adds Popup to migrate git-package projects.
* Adds functionality to migrate git-package projects.
* Adds "Make Backup" button when viewing project packages. [Canny](https://feedback.vrchat.com/creator-companion-beta/p/project-backup-option)
* Package resolver now supports version ranges. The format is the same as [npm-semver](https://github.com/npm/node-semver#ranges), the new templates use "3.1.x" as the VRChat SDK versions, for example.
* Only allows one instance of the VCC to run at a time. Fixes [Canny: Launching multiple instances of VCC causes problematic behaviours](https://feedback.vrchat.com/creator-companion-beta/p/022-launching-multiple-instances-of-vcc-causes-problematic-behaviours)
* The GUI will now prevent you from adding Avatar-specific packages to Worlds projects and vice versa. Addresses [Canny: Differentiate between World Packages, Avatar Packages and Packages for Worlds & Avatars](https://feedback.vrchat.com/creator-companion-beta/p/differentiate-between-world-packages-avatar-packages-and-packages-for-worlds-ava)
* Samples are now included in the Packages directory and protected from write changes. Fixes [Canny: Default animators used by the client should be included in the VRChat SDK - Avatars package.](https://feedback.vrchat.com/creator-companion-beta/p/default-animators-used-by-the-client-should-be-included-in-the-vrchat-sdk-avatar) and [Canny: Place Example Prefabs out of version folders](https://feedback.vrchat.com/creator-companion-beta/p/place-example-prefabs-out-of-version-folders)
* Uses the "AppData/Local" folder for Settings, Templates etc instead of Documents, and migrates existing settings and templates there if needed. Fixes [Canny: VCC does not handle blocked documents permission gracefully](https://feedback.vrchat.com/creator-companion-beta/p/vcc-does-not-handle-blocked-documents-permission-gracefully).
* Increases and normalizes mouse scroll speed in all scrollable areas. Fixes [Canny: Mouse scroll speed is not respected.](https://feedback.vrchat.com/creator-companion-beta/p/bug-020-mouse-scroll-speed-is-not-respected)
* Now tries to escalate Unity and Hub installations as administrator. Hopefully fixes [Canny: Missing Admin Privileges for Installing Unity Hub](https://feedback.vrchat.com/creator-companion-beta/p/bug-creator-companion-missing-admin-privileges-for-installing-unity-hub).
* Replaces embedded web browser with command to simply open links in default Web Browser, which runs faster and greatly reduces the download and update size of the application. Implements [Canny: Don't Use Embedded Browser](https://feedback.vrchat.com/creator-companion-beta/p/vcc-dont-use-embedded-browser).
* Adds 'showPrereleasePackages' to settings - leave it to 'false' for now, this is for future use.
* Makes refresh button on Setings page maskable, fixing [Canny: Refresh button on unity version dropdown draws on top of header.](https://feedback.vrchat.com/creator-companion-beta/p/bug-020-refresh-button-on-unity-version-dropdown-draws-on-top-of-header)
<!--truncate-->
## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.3.0.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.3.0/VRChat_CreatorCompanion_Setup_0.3.0.exe)
