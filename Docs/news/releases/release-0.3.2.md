---
slug: release-0.3.2
date: 2022-07-22
title: Release 0.3.2
authors: [momo]
tags: [release]
draft: false
---
## Summary

Important Fixes for creating new projects and some quality-of-life improvements for general use.

<!--truncate-->

## Changelog
* Updates resolving order when creating projects, fixing [Canny: Creating a project does not auto-add relevant SDKs](https://feedback.vrchat.com/creator-companion-beta/p/bug-creating-a-project-does-not-auto-add-relevant-sdks)
* Fixes [Canny: Changing the backup folder location opens file explorer 3 extra times](https://feedback.vrchat.com/creator-companion-beta/p/031-changing-the-backup-folder-location-opens-file-explorer-3-extra-times)
* Opens up to the last view you were on _unless_ you were managing a project which is gone or no longer valid. Implements [Canny: Re-open last viewed page on app launch](https://feedback.vrchat.com/creator-companion-beta/p/feature-request-re-open-last-viewed-page-on-app-launch)
* Organizes projects by last write time of directory. Similar to, but not quite solving [Canny: Categorize or Mark Active Projects within Project tab](https://feedback.vrchat.com/creator-companion-beta/p/categorize-or-mark-active-projects-within-project-tab)
* Changes Repo selection to a dropdown instead of tabs, so you can view the packages from multiple Repos at once.
* In the Package Management view, sorts packages with those that are in your project up at the top.
* Increases contrast between packages that are in your current project and those that are not, hopefully solving [Canny: Feedback - Increase contrast on package category tabs](https://feedback.vrchat.com/creator-companion-beta/p/027-feedback-increase-contrast-on-package-category-tabs)
* Fixes issue where the oldest version of a package would be added rather than the newest version if the user had not specifically chosen a version from the dropdown.

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.3.2.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.3.2/VRChat_CreatorCompanion_Setup_0.3.2.exe)