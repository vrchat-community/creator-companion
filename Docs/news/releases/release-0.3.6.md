---
slug: release-0.3.6
date: 2022-08-23
title: Release 0.3.6
authors: [momo]
tags: [release]
draft: false
---
## Summary

Fixes issues with making large backups and migrating to prerelease packages. Release Candidate!

<!--truncate-->

## Changelog

* Fixes [issue where projects with files larger than 2GB could not be backed up](https://feedback.vrchat.com/creator-companion-beta/p/030-projects-fail-to-backup-if-too-large) by switching to ICSharpZipLib. 
* Fixes [issue where Migrations would use prerelease packages even if the setting was turned off](https://feedback.vrchat.com/creator-companion-beta/p/migrating-package-takes-the-most-recent-version-of-sdk-even-if-its-prerelease).
* Pressing "Show Me" after making a project backup will now open the enclosing folder rather than the specific zip.
* Uses new package subdomain urls for Official and Curated listings
* Many New pages in Docs!
  * [Getting Started](/guides/getting-started)
  * [Glossary](/guides/glossary)
  * [Version Matching](/guides/version-matching)
  * [Bugs and Feature Requests](/guides/bugs-features)
  * [Finding the Samples](/guides/finding-the-samples)
  * [VPM Resolver](/vpm/resolver)
  * [Using VPM With Source Control](/vpm/source-control)

## Download

It's always recommended to download the latest version from the [official download page](https://vrchat.com/home/download).
However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_0.3.6.exe](https://vrcpm.vrchat.cloud/vcc/Builds/0.3.6/VRChat_CreatorCompanion_Setup_0.3.6.exe)
