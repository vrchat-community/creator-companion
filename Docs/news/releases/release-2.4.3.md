---
slug: release-2.4.3
date: 2025-11-05
title: Release 2.4.3
authors: [momo]
tags: [release]
---
## Summary

This release is focused on improving the Creator Companion's startup reliability.

<!--truncate-->

## Improvements

- Adjusted the startup logic to more reliably work across different system configurations.
  - The Creator Companion now attempts to bind to alternative ports more effectively if the default ports are occupied.
  - This should reduce startup failures related to port conflicts.
- Improved error handling during the initialization phase to provide clearer feedback in case of issues.

## Changes

- Upgraded included templates to use 3.9.x VRChat SDK versions.
- Added a root-level `.gitignore` file to the templates.
- Adjusted the `.gitignore` file inside the `Packages` folder to avoid skipping `vpm-manifest.json` files.

## Feedback

Please report [issues to the Creator Companion repo on GitHub](https://github.com/vrchat-community/creator-companion/issues).

## Download

If you already installed the Creator Companion, simply open it and click **Update**.

To install the Creator Companion, download the latest version from the [official download page](https://vrchat.com/home/download).

However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.4.3.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.4.3/VRChat_CreatorCompanion_Setup_2.4.3.exe).
