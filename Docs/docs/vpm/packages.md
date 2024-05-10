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
Users can add [Community Repositories](/guides/community-repositories) to the VCC, allowing them to add packages from other creators to their Unity projects. Creators can [convert their existing assets to a VPM package](/guides/convert-unitypackage) or [create a package listing](/guides/create-listing) with our [GitHub template package](https://github.com/vrchat-community/template-package).

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
3. The _optional_ `legacyFolders` property can be used to detect and migrate from the old .unitypackage version of your project to this version. Any folders found with a matching path will be removed.
   1. You can include the GUID as the object's value if you want to search for and find the folder, even if it was moved from its original location. If no GUID is provided, it will only match the path.
4. The _optional_ `legacyFiles` property is used as the `legacyFolders` object above.
5. The _optional_ `legacyPackages` property is used when a secondary package has been integrated into a primary one, and the secondary package should be removed from the manifest and the project. For example, the VRChat Worlds package now contains the ClientSim and UdonSharp packages, so they are listed here to be removed from the project when the VRChat Worlds package is added.
6. The _optional_ `zipSHA256` property is used to verify the integrity of the zip file you provide. The checksum should be added to the manifest of the [repository listing](https://vcc.docs.vrchat.com/vpm/repos), not in the package's `package.json`. Currently, the `zipSHA256` property is only used for cache invalidation. But we might start enforcing hash checks in the future to ensure the integrity of the packages the users download.
7. The _optional_ `changelogUrl` property can be used to point to a changelog file for your package. This is not currently used by the VCC, but it might be utilized in the future.

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
The VCC improves upon the functionality provided by the Unity Package Manager by supporting dependencies-of-dependencies for packages and treating dependency versions as ranges. We use the [SemanticVersioning](https://github.com/adamreeve/semver.net) C# library to do this, which supports [Semantic Versioning 2.0.0](https://semver.org/) and [a wide variety of range specifiers](https://github.com/adamreeve/semver.net#ranges). This format also supports [Pre-release Packages](#prerelease-packages).

However, VRChat's packages haven't been following the Semantic Versioning rules for a few reasons:
* The first version was 3.0.0 instead of 1.0.0, to clarify that the packages are a continuation of previous VRChat SDK3 releases.
* A public API for the VRChat SDK wasn't declared until 3.3.0, making it difficult for creators to know which changes were API-breaking.
* The Base, Avatar and World package versions are currently tied to each other and require the same version number.

We want to follow semantic versioning for VRChat's packages eventually. But in the meantime, we're documenting our best explanation of what we've been doing so you can keep your own packages compatible with ours.

###  Branding.Breaking.Bumps

This versioning system is similar to semantic versioning (Major.Minor.Patch) with notable differences:

#### Branding
The 'Branding' version does not change frequently and represents the major shifts between incompatible systems.

- 1.x was custom scripting,
- 2.x was SDK2,
- 3.x is SDK3.

For example, if a new system for Avatars introduces an incompatible change such that SDK3 Avatars cannot be migrated, the Avatars SDK would be incremented to 4.0.0. 

Udon 2 has a migration and code-reuse path from Udon. Because of this, the 'Branding' version would be incremented to 3.x.0 instead of 4.0.0. (version numbers are subject to change based on release cadence).

#### Breaking
The 'Breaking' version is incremented when incompatible API changes occur, so packages that rely on the previous functionality must be updated before they work properly. This is how both creators and package creators are protected from confusion over broken packages due to SDK updates.

#### Bumps
The 'Bumps' version is incremented for every new release (unless it is a 'Breaking' or 'Branding' release). Most releases are a combination of bug fixes and new features.

If you have a package that depends on public SDK APIs, we recommend declaring your dependency using the latest 'Breaking' version with an `x` for the 'Bump' version, like this:
```json
"vpmDependencies" : {
  "com.vrchat.avatars" : "3.5.x"
}
```

The above example means that your package requires the Avatars SDK and should work with any version that starts with 3.5, not including 3.6.0 or anything higher. It is equivalent to the range >=3.5.0 <3.6.0.

Doing this means you will need to test and create a new release of your package whenever the VRChat SDK moves to a new breaking version, but it ensures the users of your packages are aware of any potential incompatibilities.

#### The Public API for the SDK
The SDK 3.3.0 included VRChat's first [Public SDK API](https://creators.vrchat.com/sdk/public-sdk-api/). The interfaces and methods in this API will not break when an SDK release increments the 'Bump' version. The VRChat team will work on expanding the Public API based on properties, fields, etc. commonly used by community package creators.

We encourage VPM package creators to use proper semantic versioning for their own packages. Start at version 1.0.0 (not version 3.0.0 like VRChat's packages). 
