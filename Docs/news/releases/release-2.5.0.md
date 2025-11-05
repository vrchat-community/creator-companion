---
slug: release-2.5.0
date: 2025-06-18
title: Release 2.5.0-beta.1
authors: [momo]
tags: [release]
---
## Summary

This release focuses on introducing new quality-of-life features and addressing long-standing bugs.

<!--truncate-->

## New Features

- You can now add Unity Editor launch parameters in the Creator Companion.
  - You can configure these both per-project and globally on the Settings page.
  - To set up per-project parameters, either click the ⋯ button on the Projects list or the ⌄ button on the top right of the Manage Project page and select "Edit Launch Parameters".
  - You can learn more about launch parameters [on the Unity Documentation Website](https://docs.unity3d.com/2022.3/Documentation/Manual/EditorCommandLineArguments.html).
  - This addresses [issue #571](https://github.com/vrchat-community/creator-companion/issues/571).
- You can now open package changelog links from the Creator Companion.
  - If a package has a new version and provides a link to the changelog, you'll see a "Changelog" button.
  - For package creators: Make sure your listing and packages supply a `changelogUrl`. If the `changelogUrl` is not present, users won't see a "Changelog" button.
  - This addresses [issue #146](https://github.com/vrchat-community/creator-companion/issues/146).

## Changes

- The Creator Companion creates backups of the settings and project database files on launch.
  - If you ever encounter an issue with the VCC and lose some projects or settings, you can do the following:
    - Remove the `settings.json` and `vcc.liteDb` files.
    - Rename `settings.json.bak` to `settings.json`, and `vcc.liteDb.bak` to `vcc.liteDb`.
    - Launch the VCC again. You should be back to the state you were in when the backup was created.
- The "Selected Repos" list is now saved in the `settings.json` file instead of the VCC window.
  - This makes selection saving more reliable and prevents loss of selection states on some systems.
- The repository caching has been reworked, which resulted in major performance improvements for package management.
  - The repository cache now follows this logic:
    - If there is no repository cache present, the repository is fetched from the internet.
    - If the cache is present but is more than an hour old, the repository is fetched from the internet.
    - Only the listings that are currently enabled in the "Selected Repos" dropdown or VCC Settings are refreshed.
      - This dramatically improves performance when using VCC with a lot of repositories.
    - You can manually refresh the cache by clicking the "Refresh" button on the "Manage Project" page.
- The Creator Companion now uses a newer version of the [Semantic Versioning](https://github.com/adamreeve/semver.net) library.
  - This fixes an issue where version constraint `1.0.x` would not accept `1.0.0-pre-release.1` as a valid version.
  - However, this also makes it so `^1.0.0` range no longer accepts `1.0.0-pre-release.1` as a valid version.
  - To check if a version is valid and satisfies the range, you can use the embedded snippet in the ["Versions and Ranges"](https://vcc.docs.vrchat.com/vpm/packages#versions-and-ranges) section of the Creator Companion documentation. The snippet uses the exact library as the VCC and gives you the most accurate results.
- Updated included project templates to use the latest version of the VRChat SDK.
  - Addresses [this Canny post](https://feedback.vrchat.com/bug-reports/p/vcc-not-up-to-date-wth-sdk-version).

## Bugfixes

- The Creator Companion no longer saves an incorrect window position and size when minimized.
- The Creator Companion's folder picker now opens the user's Home or Documents folder when creating or adding a project if the previously opened path does not exist.
  - This fixes [issue #559](https://github.com/vrchat-community/creator-companion/issues/559).
- The Creator Companion no longer loses the Onboarding Completion state, forcing users to see first-time onboarding every time they open the VCC.
  - Most other settings that were previously stored in the VCC window are now stored in the `settings.json` file.
- Packages that exist in multiple repositories no longer show non-existent versions in the "Available Versions" dropdown.
  - This fixes [#369](https://github.com/vrchat-community/creator-companion/issues/369).

## Feedback

Please report [issues to the Creator Companion repo on GitHub](https://github.com/vrchat-community/creator-companion/issues).

## Download

While this version is in Beta, you can download _a portable version_ here: [VCC Portable 2.5.0 beta 1](https://github.com/vrchat-community/creator-companion/releases/download/2.5.0-beta.1/web_vcc_2.5.0-beta.1_Release_Portable.zip).
