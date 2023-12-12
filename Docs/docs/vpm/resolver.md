# Resolver

![Package Resolver Window](/images/resolver.png)

## Overview
The Package Resolver is a Unity Editor tool which can download and install the packages required for a VPM project without the VCC.

The Resolver uses the [VPM Library](/guides/glossary#vpm) under the hood - the same one that powers the [VCC](/guides/glossary#vcc), so it downloads packages and resolves dependencies in the same exact way.

## Getting It
It is added to every VPM-compatible project, either during Project Creation or Migration. It is specifically excluded from the .gitignore placed in your project's Packages folder to ensure that it is present in your project to help with restoring it. It does not have a 'remove' button in the VCC because it should not be removed from your projects. But if it ever is - you can use the VCC to easily add it back in.

## Using It

When you open up a VRChat Unity Project, the Resolver will check for any missing VPM packages. It does this by comparing your VPM Manifest (in Packages/vpm-manifest.json) to your projects Packages folder.
If any items are misssing or do not match the versions specified, you will be shown this dialog:

![VRChat Packages Missing](/images/resolver-missing.png)

If you press "OK", the packages will be restored to your project. If you'd like to review them first, you can press "Show Me What's Missing", which will bring up a window like this:

![Missing Package Specifics](/images/resolver-specifics.png)

You can press "Resolve All" to restore all the packages to your project, which is the equivalent of pressing "OK" on the initial dialog. This process will also remove any "legacy packages" which should no longer exist separately in your project (like UdonSharp and ClientSim).

If you want to select and resolve specific versions, you can change the target version for a single package from its dropdown, and press the "Resolve" button to the right of the package to restore that specific package and version. If that package requires additional packages, those other packages will also be restored. Note that if you press "Resolve All", the versions you selected will not be used (the Resolver will instead use the versions specified in your VPM Manifest).

You can press "Refresh" to have the Resolver compare your Packages directory against your manifest again, in case you updated something externally.