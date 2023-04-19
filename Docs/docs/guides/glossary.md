# Glossary

There are lots of different parts of the Creator Companion, and we often use acronyms to make it easier to write about them. Here they are with some basic explanations to help you understand how everything works together.

## VCC
The VRChat Creator Companion
 
The Creator Companion is "the entry point for creating things in VRChat". It's a standalone application which you download and install. It helps you:
* Install the specific version of Unity that VRChat development needs.
* Create new projects
* Manage your existing projects
  * Find them on your drive
  * Migrate them to the new format
  * Update their Packages
  * Make Backups
* Learn about VRChat Creation

Most of the functionality to create and manage your projects comes from the [VPM](#vpm), which is embedded in the VCC as a library.

## VPM
The VRChat Package Manager

The Package Manager is a library we've developed to manage packages for your VRChat Unity Projects.

**Tech Specs**: The library is built against .NET Standard 2.0 so that it can function within Unity Projects using .NET Framework 4.x as well as native .NET Standard and Core Projects, like the [CLI](#cli).

## CLI
The VPM Command-Line Interface

The CLI wraps the VPM library and makes it available as a cross-platform program from the command line. This is useful for advanced users as well as CI systems that can automatically build projects in the cloud.

## Repos
Package Repositories

[Repos](/vpm/repos) are listings of compatible packages that creators can use in their projects.

## Legacy Packages
Now that we're using VPM Packages, we refer to the previous SDKs distributed with the .unitypackage format as Legacy Packages.

## VRChat Quick Launcher (VRCQL)
The VRC Quick Launcher is a tool that helps you launch multiple profiles in the same instance of VRChat while also providing an interface to modify the debug options. This avoids the issue of having tons of shortcuts.