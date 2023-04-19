# Packages

## Overview
The VPM (VRChat Package Manager) uses a format compatible with the [Unity Package Manager](https://docs.unity3d.com/2019.4/Documentation/Manual/Packages.html) to more easily install, update and manage the assets, tools and prefabs you use to make content for VRChat.

## Package Types
Packages can come from a variety of sources and be managed together.
### Official Packages
There are three official packages:
* VRChat Base
  * Includes files that are required by both the World and Avatar SDKs, like the Control Panel.
* VRChat Worlds
  * Includes all the files needed to create interactive worlds for VRChat, previously known as SDK3.
* VRChat Avatars
  * Includes all the files needed to create custom Avatars for VRChat, previously known as SDK3A or Avatars 3.0.

### Curated Packages
These packages have been reviewed by VRChat and found to be especially useful and reasonably safe to use. We're building a submission process to have your package reviewed and included, it is invite-only for now.

### Community Packages
We will introduce a method to host and distribute listings of Community Packages. We will include guidelines on what sorts of packages can be distributed, and a way to submit your own community listing. They are not guaranteed to be usable or safe.

### User Packages
You can make your own library of VPM-compatible packages to use in your projects. They are as usable and safe as you make them! This feature is also helpful when developing a package - turning it from a prefab or .unitypackage file from before into the new format which can be distributed through the Creator Companion. You can use these packages to test the structure and manifest of your package before publishing. To add a user package, navigate to the 'Settings' screen, press the 'Add' button underneath 'User Packages' and choose a folder which contains a package (or several packages). If they are valid, they will be added to the listing here and on the screen where you add and remove packages to your project.

Here's an exceptionally simple package you can use as an example. Unpack it somewhere and then you can add it to your VCC: [com.mmmlabs.utilities.zip](https://github.com/vrchat/packages/releases/download/3.0.3/com.mmmlabs.utilities.zip)

### Prerelease Packages
If you want to test out the latest versions of SDKs and Packages, you can opt-in to showing prerelease versions in the VCC. To do this:
1. Open your settings.json file. The easiest way is to go to the Settings view of the VCC and press the 'settings.json' button under the "Files and Folders" header.
2. Close the VCC.
3. Change the line `"showPrereleasePackages": false,` to `"showPrereleasePackages": true,`.
4. Save the file.
5. Re-Open the VCC.

You will now be able to see beta versions in the dropdown for each package that has them.

Note: We limit this change to a manual edit of the settings file rather than an easy button on the Settings page to ensure it's never enabled by accident, and that a user who wants beta packages can find and follow these instructions.

## Package Format
The VPM format follows the Unity Package format with some additions. We recommend you read through the official docs about [Custom Packages](https://docs.unity3d.com/2019.4/Documentation/Manual/CustomPackages.html) to familiarize yourself with those first.

We use the same required [Package Manifest](https://docs.unity3d.com/2019.4/Documentation/Manual/upm-manifestPkg.html) file, with some important differences:

### VPM Manifest Additions
VPM package manifests have a few differences from regular Unity manifests:
1. The 'vpmDependencies' property, which lists the vpm-based dependencies your project requires.
2. The 'url' property, which provides a direct-download link to a zip file of your package.
3. The _optional_ 'legacyFolders' property, which can be used to detect and migrate from the old .unitypackage version of your project to this version. Any folders found with a matching path will be removed. You can include the GUID as the object's value if you want to search for and find the folder even if it was moved from its original location. if no GUID is provided, it will only match the path.
4. The _optional_ 'legacyFiles' object, which is used like the legacyFolders object above.

```json
{
	"name" : "com.mydomain.avatarTool",
	"displayName" : "My Avatar Tools",
	"version" : "1.0.0",
	"unity" : "2019.4",
	"description" : "Tools for easier Avatar Creation",
	"vpmDependencies" : {
		"com.vrchat.avatars" : "3.1.0"
	},
	"url" : "https://packages.vrchat.com/com.vrchat.avatars-3.1.0.zip",
    "legacyFolders" : {
      "Assets\\FolderName" : "vr031f928e5c709x9887f6513084aaa51"
    },
    "legacyFiles" : {
      "ProjectVersion.txt" : "jf988739jfdskljf098323jjhf"
    }
}
```

### Versions and Ranges
We've improved upon the functionality provided by the Unity Package Manager by supporting dependencies-of-dependencies for packages, and treating dependency versions as ranges. We use the [SemanticVersioning](https://github.com/adamreeve/semver.net) library to do this, which supports [SemVer 2.0](https://semver.org/) and [a wide variety of range specifiers](https://github.com/adamreeve/semver.net#ranges).

For example, we use the format "3.1.x" in many of the official templates and VRC SDK packages. This range will match the highest version available for 'x', without upgrading to a version like "3.2.0" in case there's some new functionality there.

This format also supports [Prerelease Packages](#prerelease-packages).