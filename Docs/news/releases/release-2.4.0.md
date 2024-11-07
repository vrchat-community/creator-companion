---
slug: release-2.4.0
date: 2024-10-10
title: Release 2.4.0-beta.1
authors: [momo]
tags: [release]
---
## Summary

This release is focused on quality-of-life improvements and bugfixes.

<!--truncate-->

## New Features

- You can now select multiple folders at once when adding existing projects to the VCC.

## Changes

- The repository cache files inside the `Repos` folder now use the listing's `id` instead of a randomly generated string for the filename.
  - If there is an `id` defined in the listing, the file is named `<id>-<first 8 symbols of a uuid>.json`
  - If `id` is not defined, the file is named `<uuid>.json`.
    - This may be the case if a listing is very old.
  - The Creator Companion automatically migrates to the new cache file naming on launch.
  - This addresses [#257](https://github.com/vrchat-community/creator-companion/issues/257).
- The Creator Companion and the VCC CLI now use .NET 8 instead of .NET 6.
  - [.NET 6 is no longer supported](https://devblogs.microsoft.com/dotnet/dotnet-6-end-of-support/). .NET8 includes bug fixes and security improvements.
  - If you do not have .NET 8 installed on your system, download it from the [official .NET website](https://dotnet.microsoft.com/download/dotnet/8.0).
    - [Download for Windows](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.8-windows-x64-installer)
    - [Download for Linux](https://learn.microsoft.com/dotnet/core/install/linux).
    - Download for macOS: [Intel Mac](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.8-macos-x64-installer), [Apple Silicon Mac](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.8-macos-arm64-installer).
  - For macOS, the VCC CLI keeps the current data path used settings and cache files: `$HOME/.local/share/VRChatCreatorCompanion`
    - This addresses [#522](https://github.com/vrchat-community/creator-companion/issues/522) and [#532](https://github.com/vrchat-community/creator-companion/issues/532).

## Bugfixes

- The Creator Companion is now more resilient to situations where the default VCC ports are taken. It will try to bind to another open port multiple times.
  - Fixes [#528](https://github.com/vrchat-community/creator-companion/issues/528).
- Fixed an issue where an empty project manifest would prevent the Projects list from loading.
  - Fixes [this canny issue](https://feedback.vrchat.com/creator-companion/p/i-cant-start-up).
- Fixed the "Copy Logs" button on the corrupted settings error screen not copying the logs correctly.
  - Fixes [#526](https://github.com/vrchat-community/creator-companion/issues/526).
- Fixed an issue where a failure to parse a Unity Editor version via VCC CLI would result in a crash.
  - Addresses one of the issues mentioned in [#408](https://github.com/vrchat-community/creator-companion/issues/408#issuecomment-2338863367).

## Feedback

Please report [issues to the Creator Companion repo on GitHub](https://github.com/vrchat-community/creator-companion/issues).

## Download

While this version is in Beta, you can download _a portable version_ here: [VCC Portable 2.4.0 beta 1](https://github.com/vrchat-community/creator-companion/releases/download/2.4.0-beta.1/web_vcc_2.4.0-beta.1_Release_Portable.zip).
