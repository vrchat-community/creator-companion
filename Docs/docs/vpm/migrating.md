# Migrating Projects

## Overview
Projects created with the legacy `.unitypackage` SDKs can be migrated to the new system if they use the SDK3 Worlds or Avatars unitypackages (SDK2 not supported). They can be Unity 2017, 2018 or 2019 projects. The SDK must be in its original install location to be  detected - specifically, one of these must exist:
* `Assets/Udon`
* `VRCSDK/Plugins/VRCSDK3A.dll`
:::caution
If your project is using [UdonSharp](https://udonsharp.docs.vrchat.com/), read our [Known Issues](https://udonsharp.docs.vrchat.com/migration#known-issues) page.
:::
## The Process
1. Add your project to the Project Listing, and press Migrate.<br/>
![Migrate Project](/images/migrate-button.png)
2. You have two options on how to migrate your project.
- **Migrate a copy**:  Copies your project to a new folder named `ProjectName-Migrated`, with numbers at the end. Your old folder stays untouched.
- **Migrate in place**: Your folder is upgraded without creating a copy. This is useful if you made your own backup, or if you use version control software such as [Git](https://git-scm.com/) or [Plastic](https://docs.unity3d.com/2019.4/Documentation/Manual/PlasticSCMPlugin.html). *Don't choose 'Migrate in place' unless you have a backup!*<br/>
![Backup prompt](/images/migrate-project-backup.png)
3. Confirm that you'd like to start the migration.
![Backup prompt](/images/migrate-project-backup-2.png)
4. All of the visible files from your project are copied over to the new folder except for:
    - `Library`
    - `Logs`
    - `Assets\VRCSDK`
    - `Assets\Udon`
    - `Assets\UdonSharp`
    - `Assets\VRChat Examples`
    - `Packages\com.vrchat.vrcsdk3`
    - `ProjectSettings\ProjectVersion.txt`
    - Folders used by [Curated Community Packages](/vpm/curated-community-packages)
5. From the Base Template included with the VCC, an `EditorSettings.asset` file is copied into your project, overwriting your old one to force an upgrade to Asset Database v2.
6. A project manifest file called `package.json` is created if needed.
7. The VRChat SDK "Base" package is added as an embedded package.
8. The project type is detected as LegacySDK3Avatar or LegacySDK3World, and the corresponding packages are added to the project manifest.
9. If the above steps complete without error, a text file is created in the project called `migration-log.txt` with the output from the process. If there are errors, then a text file called `migration-log-error.txt` is created in the VCC log location (currently `AppData/Local/VRChatCreatorCompanion/Logs`). If you have errors, you can open up the project in Unity and try to fix them, often we've seen issues with prefabs and scripts that expect certain files to still be in the "Assets" folder, or that were written for Unity 2018.
10. Once the process is complete, the Project will show up in the listing if it was successfully migrated.

### Special Package Migration
We support automatic migration of the packages included in the [Curated Packages](/vpm/curated-community-packages) list - i.e.  UdonSharp, AudioLink, or GestureManager. If the legacy (`.unitypackage` extracted into `/Assets/`) versions of these packages are found in your project, they will be removed and replaced with the new versions.
