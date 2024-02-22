---
slug: release-2.2.4
date: 2024-02-20
title: Release 2.2.4
authors: [momo]
tags: [release]
---
## Summary

Fixes issue where the Creator Companion would install the wrong version of Unity 2022.

<!--truncate-->

## Changes

- Added the target changeset `b9e6e7e9fa2d` when installing Unity 2022.3.6f1. Unity removed this version from the default listing since we initially added it to the VCC, so we've added the changeset to ensure that the correct version is installed. We should have done this in the first place, sorry for the inconvenience!
- Adding a package by clicking the "+" button on the Project Management screen will now pull in the latest compatible version of the package, if available. Previously VCC would try to pull in the latest version it could find, often prompting a Unity Upgrade. [Fixes #414](https://github.com/vrchat-community/creator-companion/issues/414).
- The Unity Upgrade process will no longer pull in a VPM Resolver package into projects that did not have it before. [Fixes #407](https://github.com/vrchat-community/creator-companion/issues/407).
- When encountering a 403 "Access Denied" error during Unity Installation - a better error message is shown with some troubleshooting steps.
- VCC will now always update the preferred Unity 2022 version to the Recommended Version when it gets installed through VCC. The user is notified about that change via a log popup.
- The [Creator Companion CLI](https://vcc.docs.vrchat.com/vpm/cli) has been updated with new features, including the Unity 2019 to 2022 migration, the ability to add arbitrary package versions via `packageName@version` syntax, and some quality of life commands. See the [CLI docs](https://vcc.docs.vrchat.com/vpm/cli) for more details. [Addresses #403](https://github.com/vrchat-community/creator-companion/issues/403).

## Fixes

- Fixed an issue where an invalid settings file would prevent Creator Companion from starting.
- VCC will no longer add incompatible package versions when resolving transient dependencies. E.g. a package depending on SDK 3.4.0+ will no longer pull in SDK 3.5.0 into a Unity 2019 project. [Fixes #404](https://github.com/vrchat-community/creator-companion/issues/404).
- Fixed an issue where packages that declare Unity 2020/2021 as a requirement would not show a Unity Upgrade prompt. [Fixes #405](https://github.com/vrchat-community/creator-companion/issues/405).
- Fixed an issue where the "Click this link to start installation in Unity Hub" button didn't work. [Fixes #384](https://github.com/vrchat-community/creator-companion/issues/384).
- Unity Editor versions that were removed from Unity Hub but not cleared out from the Windows registry no longer get auto-added to the VCC.
- Fixed Unity Installation process not being able to install non-latest Unity versions for the respective release.
- Fixed an issue where VCC would fail to start if its default ports were already in use.
- Legacy SDK migration should no longer add Unity 2022 versions of the SDK. [Fixes #410](https://github.com/vrchat-community/creator-companion/issues/410)

## Download

If you already installed the Creator Companion, simply open it and click **Update**.

To install the Creator Companion, download the latest version from the [official download page](https://vrchat.com/home/download).

However, if a direct link to this version is needed, it can be found at [VRChat_Creator_Companion_Setup_2.2.4.exe](https://vrcpm.vrchat.cloud/vcc/Builds/2.2.4/VRChat_CreatorCompanion_Setup_2.2.4.exe).
