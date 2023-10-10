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
1. Open the Settings screen.
2. Switch to the "Packages" tab.
3. Scroll down to the Heading "Pre-Release Packages" and check the box next to "Show Pre-Release Packages".

![image](https://user-images.githubusercontent.com/737888/234437096-5c3013e9-c957-40ff-aba4-86cf3839750b.png)

You will now be able to see beta versions in the dropdown for each package that has them.

## Package Format
The VPM format follows the Unity Package format with some additions. We recommend you read through the official docs about [Custom Packages](https://docs.unity3d.com/2019.4/Documentation/Manual/CustomPackages.html) to familiarize yourself with those first.

We use the same required [Package Manifest](https://docs.unity3d.com/2019.4/Documentation/Manual/upm-manifestPkg.html) file, with some important differences:

### VPM Manifest Additions
VPM package manifests have a few differences from regular Unity manifests:

1. The `vpmDependencies` property lists the vpm-based dependencies your project requires.
2. The `url` property provides a direct-download link to a zip file of your package.
3. The _optional_ `legacyFolders` property can be used to detect and migrate from the old .unitypackage version of your project to this version. Any folders found with a matching path will be removed. You can include the GUID as the object's value if you want to search for and find the folder even if it was moved from its original location. if no GUID is provided, it will only match the path.
4. The _optional_ `legacyFiles` property is used as the `legacyFolders` object above.
5. The _optional_ `legacyPackages` property is used when a secondary package has been integrated into a primary one, and the secondary package should be removed from the manifest and the project. For example, the VRChat Worlds package now contains the ClientSim and UdonSharp packages, so they are listed here to be removed from the project when the VRChat Worlds package is added.
5. The _optional_ `zipSHA256` property is used to verify the integrity of the zip file you provide. Currently, it is only used for cache invalidation. But we might start enforcing hash checks in the future to ensure the integrity of the packages the users download.
6. The _optional_ `changelogUrl` property can be used to point to a changelog file for your package. This is not currently used by the VCC, but it might be utilized in the future.

Altogether that makes the list of required fields look like this:

- `name`
- `displayName`
- `version`
- `url`
- `author`
  - `name`
  - `email`

The rest of the fields are optional, but we recommend you fill them out as much as possible. Check out the [Unity Package Manifest](https://docs.unity3d.com/2019.4/Documentation/Manual/upm-manifestPkg.html) docs to see the list of optional fields.

```json
{
  "name" : "com.mydomain.avatarTool",
  "displayName" : "My Avatar Tools",
  "version" : "1.0.0",
  "author": {
    "name": "My Name",
    "email": "contact@mydomain.com"
  },
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
  },
  "legacyPackages": [
    "com.vrchat.clientsim",
    "com.vrchat.udonsharp"
  ]
}
```

We also **highly recommend** listing the `license` of your package in the package manifest. Unity requires this field if you do not have LICENSE file in your project, but we recommend specifying it even if you do have a LICENSE file. This field might be displayed in the VCC interface in the future. The license should use the [SPDX format](https://spdx.org/licenses/).

### Versions and Ranges
We've improved upon the functionality provided by the Unity Package Manager by supporting dependencies-of-dependencies for packages, and treating dependency versions as ranges. We use the [SemanticVersioning](https://github.com/adamreeve/semver.net) library to do this, which supports [SemVer 2.0](https://semver.org/) and [a wide variety of range specifiers](https://github.com/adamreeve/semver.net#ranges).

For example, we use the format "^3.1.x" in many of the official templates and VRC SDK packages. This format is designed to match any version past 3.1.0, but it restricts changes to the major version number. This is because a change in the major version number signifies breaking changes that may not be compatible with previous versions. For instance, if a package has version 3.5.2, it will match the "^3.1.x" format, whereas version 4.1.0 will not.

This format also supports [Prerelease Packages](#prerelease-packages).

<!-- Don't forget sync this caution with guides/create-listing.md -->

:::caution

Do not remove old versions of your VPM packages after publishing them.
Removing old versions will break projects using [source control](https://vcc.docs.vrchat.com/vpm/source-control).

:::
