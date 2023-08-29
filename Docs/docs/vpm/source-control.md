# Using Source Control with the VPM

We're big fans of source control systems for saving your work and collaborating on content. We use [Git](https://git-scm.com/) for our own packages and even the main VRChat client. The VPM was designed to play nice with source control, here are the specifics of how things work. If you use another system like [Plastic](https://docs.unity3d.com/2019.4/Documentation/Manual/PlasticSCMPlugin.html) you can send us tips to share via [Feedback](https://feedback.vrchat.com/creator-companion-beta).

## What to Include and Exclude

We typically start our projects with [this Unity .gitignore](https://github.com/github/gitignore/blob/main/Unity.gitignore) which ignores most generated files, etc.

The VRChat SDK is technically only allowed to be distributed by VRChat and should never be committed to source control. We built upon this idea for managing all VPM-compatible packages along with source control. With that in mind, here's what to include or not:

### Include:
* `Assets` folder
  * Required by Unity, contains all your project-specific Asset
* `ProjectSettings` folder
  * Required by Unity, contains all your project settings such as physics and tags.
* `Packages` folder
  * Required by Unity, contains your project manifest (Unity Package dependencies) as well as the [Resolver](/vpm/resolver) and VPM Manifest.
* `Packages\com.vrchat.core.vpm-resolver` folder
  * This tool can restore VPM packages into your project without the VCC.

### Exclude:
* All VPM packages (in `Packages/`) except for the Resolver
* Typical temp / cache folders like `Library`, `Temp`, etc.

The VPM will add a `.gitignore` file into your project's `Packages` folder if it doesn't exist, and exclude every folder that starts with `com.vrchat.*` while adding an exclusion for the resolver by specifically including `com.vrchat.core.*`

## What Happens in a Freshly-Cloned Project
When someone gets your project from source control, it will be missing some required packages if the creator has followed the above guidelines. The best thing to do at this point is simply open the project in Unity, and press "OK" in the dialog that offers to restore the missing packages - see [Resolver](resolver/#using-it).
