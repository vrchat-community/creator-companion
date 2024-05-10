---
slug: release-2.3.0
date: 2024-05-08
title: Release 2.3.0
authors: [momo]
tags: [release]
---
## Summary

Adds a beta mode, support for Unity 2022.3.22f1, and the ability to resolve and reinstall all packages.

<!--truncate-->

## New Features

- Added a beta mode to the Creator Companion.
  - Upcoming features and bug fixes for the Creator Companion will now be distributed as Open Beta builds.
  - Open Beta builds are not installed with an installer. Instead, they can be unzipped and executed from any folder.
  - All Open Beta data is stored in the `VCCUserDataPortable` folder near the `CreatorCompanionBeta.exe`, allowing you to experiment without affecting your main installation.
  - Beta builds have a different icon to help you distinguish them from regular builds.
  - This addresses [#397](https://github.com/vrchat-community/creator-companion/issues/397).
- Added a button to resolve projects directly in the Creator Companion.
  - Previously, resolving packages required opening the project in Unity.
  - Resolving packages in the VCC is especially useful when collaborating with others. After downloading a project (e.g. from GitHub), adding it to the VCC may cause a pop-up to appear. Click "Resolve" to automatically resolve all packages.
  - While resolving packages, the VCC will check whether they are available for download before proceeding. This allows you to partially resolve packages or add missing listings to the VCC first.
  - If packages cannot be resolved and you don't want them in your project anymore, a new pop-up provides a way to remove them from the project manifest.
- Added a "Reinstall All Packages" button to the package management screen.
  - Click the new ••• button near the "Manage Packages" button and select "Reinstall All Packages".
  - When reinstalling all packages, the Creator Companion checks if all the packages are available for download. If they are available, it deletes their folders and re-resolves the project.
- Added support for Unity 2022.3.22f1.
  - The Creator Companion now supports the latest Unity version used by VRChat! You will be prompted to install the new Unity version when you open the Creator Companion.

## Beta-Specific Features

These features only appear in Open Beta builds of the Creator Companion.

- The settings page has a "Copy Live Settings and Data" button. It copies all the settings and data from your main Creator Companion installation to the Open Beta installation. Copying all settings is useful for trying out the beta without having to reconfigure the Creator Companion.
- The settings page also has a "Delete Beta Settings and Data" button. This lets you quickly reset the Open Beta settings to their initial state.

## Changes

- The "Logs" screen has been reworked.
  - It features a new layout, log type filtering, and a full-text search.
- Logs popups now show the type of the log via the icon. (Warning, Error, etc.)
- Added more verbose logging to the Creator Companion's startup process and common operations.
  - These logs are only shown on the logs screen and written to the file to avoid excessive log popups on other screens.
  - If you're having trouble downloading packages or discovering Unity Editor versions, the new logs should help you diagnose the issue.

## Fixes

- When the VCC WebSocket port is taken, it will no longer break the VCC log messages. Instead, the VCC will pick a new port and continue working.
- Fixed a number of cases where VCC could remove files from the project folder.
  - This includes a case where VCC would remove the "UdonSharp" folder on every SDK update, which could lead to custom UdonSharp scripts being lost.
- If a package defines a list of `legacyFiles`, they will now be removed correctly even if the package does not define `legacyFolders`. [Fixes #299](https://github.com/vrchat-community/creator-companion/issues/299).
- If a package specifies a GUID for a `legacyFile` or a `legacyFolder`, it will now proceed as follows:
  - If the file or folder is not found at the specified path, the VCC will scan the project for a file or folder with the same GUID and remove it if found. This allows for the VCC to remove files and folders that have been moved or renamed as per the [VCC Documentation](https://vcc.docs.vrchat.com/vpm/packages/#vpm-manifest-additions).
  - This addresses [#439](https://github.com/vrchat-community/creator-companion/issues/439).
- Attempting to add a repository that was already added will now show a clearer error message.
  - This addresses [#424](https://github.com/vrchat-community/creator-companion/issues/424).
- Fixed an incompatibility with some VPN software that blocks all local traffic. The VCC will still fail to start in this case, but it will now display a proper crash report window instead of silently closing.
  - This addresses [#444](https://github.com/vrchat-community/creator-companion/issues/444).

## Feedback

Please report [issues to the Creator Companion repo on GitHub](https://github.com/vrchat-community/creator-companion/issues).

## Download

If you already installed the Creator Companion, simply open it and click **Update**.

To install the Creator Companion, download the latest version from the [official download page](https://vrchat.com/home/download).

However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.3.0.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.3.0/VRChat_CreatorCompanion_Setup_2.3.0.exe).
