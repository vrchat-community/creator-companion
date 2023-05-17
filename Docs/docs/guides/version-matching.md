# Version Matching

We use [Semantic Versioning](https://semver.org/) for SDK packages managed by the VRChat Package Manager (VPM) instead of the date-based format used in the `.unitypackage` format. This document shows the matches between the two versions for the latest SDK releases.

## 3.2.0

### Summary

Adds DataContainers, PhysBones 1.1 ('Squishy PhysBones'), AsyncGPUReadback, and more.

### Features

- **DataContainers!** Lists, Dictionaries and JSON for Udon!
  - Added DataLists and DataDictionaries, giving Udon functionality similar to Lists and Dictionaries.
    - Lists and dictionaries typically need to support Generics, and Udon does not support them, so this is being done by putting your data into DataTokens first, which are able to store any value.
  - Added VRCJSON, a helper class that can convert JSON strings (such as those received from [Remote String Loading](https://docs.vrchat.com/docs/string-loading) to and from DataLists and DataDictionaries.
  - [Read the Data Containers / VRCJSON docs page](https://docs.vrchat.com/v2023.2.2/docs/data-containers-vrcjson) to learn more.

- **AsyncGPUReadback!** This allows you to read back data from GPU and shaders without a heavy performance cost
  - Adds the `VRCAsyncGPUReadback.Request` function and corresponding `OnAsyncGpuReadbackComplete` event
  - These read data from the GPU into CPU memory without too much of a performance impact, at the expense of delaying the data for one or more frames
  - Check the [ASyncGPUReadback](https://docs.vrchat.com/v2023.2.2/docs/asyncgpureadback) docs for more info.

### Improvements

- **Squishy PhysBones!** You can now implement PhysBones that can "squish" or compress instead of stretch!
  - To set up a Squishy PhysBone, swap your PhysBone component to version 1.1 and adjust the "Max Squish" value.
  - **All PhysBones are now versioned!** You can change the version in the PhysBone component. This is being done to allow us to add new features safely.
    - Old PhysBones are on Version 1.0 automatically. 1.0 includes SquishyBones.
    - Gravity and Stiffness changes are on Version 1.1. There are some other changes documented below.
    - **All versions will be maintained.** 1.0 is not being deprecated but it is feature-locked and will not have new features added. Any time we add a new "breaking" feature, we will increment the version.
  - PhysBones 1.1: **Gravity and Stiffness act differently and require new values if you are upgrading from 1.0.**
    - Gravity is now the ratio of how much the bones should point straight up/down in world space when at rest.
    - Stiffness is now the ratio of how much a bone attempts to stay in its previous orientation.
    - Previously, these values were direct forces that you needed to balance with the Pull factor. We believe this should be more direct and easier to use.
    - These changes were also necessary to support the new functionality added to the component.
  - **Max Squish value has been added.** This is a percentage of how much a bone can shrink.
    - The `_Squish` parameter has been added. It works similarly to the `_Stretch` parameter.
  - PhysBones 1.1: **Stretch Motion value has been added.** This is a ratio of how much motion affects a bone stretching or squishing.
  - Categories of values in the VRCPhysBone component UI can now be collapsed.
    - Categories also include a Help button which will take you to the online documentation for that subject.
  - [PhysBones](https://docs.vrchat.com/v2023.2.2/docs/physbones) documentation will be updated during the Open Beta for PhysBones 1.1 and Squishy PhysBones.
- The Network ID Utility now works for PhysBones in avatar projects
  - This tool allows syncing PhysBones between avatars on different platforms, even if they have different GameObject hierarchies
    - This advanced tool is only useful if your PC and Quest avatars have different hierarchies!
    - You don't need to worry about this tool if you don't know why you'd do that.
  - [See the full docs for more info](https://docs.vrchat.com/v2023.2.2/docs/network-id-utility)

### Changes since 3.2.0-beta.1
- Re-added some public methods that got removed, including `GetOrAddComponent`
  - These are marked as `[Obsolete]` now, make sure to migrate away from using them as they will be removed properly at a later date
- Fixed some issues with grabbing PhysBones in Unity
- PhysBone stretch is no longer clamped
  - This restores previous behaviour
- DataContainers: Fixed `GetKeys` and `GetValues` returning incorrect values after using `Add`

### SDK API Changes
We're working on documenting the "Public API" of the SDK, which will be guaranteed not to change between minor and patch versions. In the meantime, here are things that have changed since 3.1.13:

#### Extension Methods
We've moved some extension methods into the VRC.Core namespace.
If you're using the `Transform.Reset()` method, you should instead use `VRC.Core.ExtensionMethods.Reset(Transform t)`.
Here are the other similar changes you should make:
- `Transform.GetHierarchyPath` > `VRC.Core.ExtensionMethods.GetHierarchyPath(Transform t, Transform relativeTransform)`
- `Transform.GetShortHierarchyPath` > `VRC.Core.ExtensionMethods.GetShortHierarchyPath(Transform t, Transform relativeTransform)`
- `GameObject.GetOrAddComponent` > `VRC.Core.ExtensionMethods.GetOrAddComponent(GameObject go)`
- `Type.GetFriendlyGenericTypeName` > `VRC.Core.ExtensionMethods.GetFriendlyGenericTypeName(Type t, bool includeNamespaces)`

#### Assembly Move

PhysBoneGrabHelper moved assemblies, you may need to reference the `VRC.SDK3A` assembly now from your code. [Here is an example fix](https://github.com/BlackStartx/VRC-Gesture-Manager/pull/22).

#### Changes not meant for public use
Additionally, we've made some changes to the following classes, which are _not_ considered part of the Public API for the SDK, and you should move away from using them as soon as possible.
We will publish a document listing all the exclusions from our SDK before the end of May.
- `ApiCacheEditor`
- `VRC.Core.ApiCache`
- `VRC.Core.ApiCache.CachedResponse`
- `VRC.Core.ApiCache.CacheEntry`
- `VRC.Core.ApiFeedback`
- `VRC.Core.ApiFile`
- `VRC.Core.ApiModel`
- `VRC.Core.ApiModel.SupportedPlatforms`
- `VRC.Core.APIResponseHandler`
- `VRC.Dynamics.PhysBoneManager.Bone`
- `VRC.Dynamics.PhysBoneManager.Chain`
- `VRC.Dynamics.PhysBoneManager.PhysBoneJob`
- `VRC.Dynamics.PhysBoneManager.Pose`
- `VRC.Dynamics.VRCPhysBoneBase`
- `VRC.SDK3.Dynamics.PhysBone.VRCPhysBoneEditor`
- `VRC.Udon.ClientBindings.UdonClientInterface`
- `VRC.Udon.Security.UnityEngineObjectSecurityBlacklist`
  The UdonManager will have parts that are part of the Public SDK API, but changes were made to 'blacklisted' methods which are not meant to be used directly.

## 3.1.13

### Summary

Fixes compatibility with Avatars 3.0 Manager.

### Bug Fixes

* Reverts name of 'hasInitialized' field in VRC_AvatarParameterDriver to 'initialized' to avoid breaking any existing packages which expect this field name.

## 3.1.12

### Summary

New VRCGraphics features for Udon, new avatar performance metrics, and bug fixes. Now up-to-date with VRChat 2023.1.2p4.

### New Features

* Constraints are now counted in Avatar Stats. They do not currently affect your performance ranking.
* Added support for "VelocityMagnitude" animator property for avatars.
* Added "Snap To Hand" option for VRCPhysBone. When enabled, grabbing a bone will have it snap to the user's hand, otherwise the grab is offset so it won't initially move unless dragged around.
* Added "Reset When Disabled" option for VRCPhysBones. When enabled, bones will reset to their rest position when the component becomes disabled.
* Added Self/Other filtering to various permissions in VRCPhysBones.
	* Allow Collision
	* Allow Grabbing
	* Allow Posing
* Texture VRAM usage now counts towards your avatar's overall performance rating.
* Added ability to set avatar parameters to not sync, addressing [Control the not sync parameters from Expressions Menu](https://vrchat.canny.io/avatar-30/p/feedback-control-the-not-sync-parameters-from-expressions-menu).
* Udon now has access to temporary RenderTextures as well as constructors for RenderTexture, Texture2D, Texture3D, and Sprite via [VRCGraphics](https://docs.vrchat.com/docs/vrcgraphics).


### Bug Fixes

* GraphicsSettings are only saved to disk when changes are made, to prevent unnecessary cache busting.
* Fixes issues that could cause jittering in PhysBones when isAnimated was enabled.
* Reconnects to the Creator Companion when the connection is lost.
* Ensures that the UdonEvent is called from the main thread. This avoids unexpected threading errors when the image download fails and the UdonBehaviour tries to use Unity API methods.

### Other Changes

* OnDeserializationResult parameter added to OnDeserialization() method of UdonBehaviours. This enables you to see the time at which this data was sent and received.

## 3.1.11

Starting with this version, we will no longer be releasing the legacy `.unitypackage` files that extract into your `Assets` folder. This page will serve as a changelog for the SDK moving forward!

### Summary

Adds Remote String Loading, Remote Image Loading, MIDI Playback, and Simulation Time!

### New Features

* Udon can now [load remote images](https://docs.vrchat.com/docs/image-loading). Closes [this Canny](https://feedback.vrchat.com/feature-requests/p/hey-when-will-dynamic-image-be-implemented)
* Udon can now [load remote strings](https://docs.vrchat.com/docs/string-loading). Closes [this Canny](https://feedback.vrchat.com/vrchat-udon-closed-alpha-feedback/p/vrchat-udon-web-api)
* Udon can [play back MIDI data](https://docs.vrchat.com/docs/midi-playback) in time with audio.
* Udon can now access the simulation time of [Players](https://docs.vrchat.com/docs/players#simulationtime) and [GameObjects with networking](https://docs.vrchat.com/docs/network-components#networking-properties).
* OnDeserialization now contains DeserializationResult [DeserializationResult](https://docs.vrchat.com/docs/network-components#ondeserializationdeserializationresult).

### Bug Fixes
![UdonBehaviour Inspector With Warning](https://user-images.githubusercontent.com/737888/218818072-92616039-c135-4c6c-86f0-02195bddffcd.png)
* The Unity Inspector for UdonBehaviours will now detect missing `VRCUrlInputField` variables and offer to reload the SDK in case this component did not load correctly. Closes [this Canny](https://feedback.vrchat.com/sdk-bug-reports/p/vrc-url-input-field-component-missing-from-project-randomly). (This is a known issue, will be fixed when we can upgrade to Unity 2020 or newer.)
* Fixes duplication of FX layer in Avatar Descriptor when switching rig from generic to humanoid.
* Fixes issue where Unity gets stuck infinitely reloading assemblies.
* Clamps the number of clients you can Build & Test from the SDK Window to a minimum of 0 and a maximum of 8.

### Other Changes

* Adds `MidiPlaybackExampleScene.scene` and related assets to demonstrate Midi Playback.
* Adds a simple Remote Image Loader to the `UdonExampleScene.scene`.
* Speeds up loading of Udon Programs.
* Removes old SDK updater window.

### Known Issues

* If you change the midi track in a Midi Player while the visualizer is open, the visualizer doesn’t update to the new track until it is closed and then reopened.

## 3.1.9
* Worlds - VRCSDK3-WORLD-2022.10.18.19.47_Public.unitypackage
* Avatars - VRCSDK3-AVATAR-2022.10.18.19.47_Public.unitypackage

* Udon Node Graph: Added lots of hotkeys!
    * Press and hold one of the following keys, then click anywhere on the graph to create the corresponding node:
        * `1` : float
        * `2` : Vector2
        * `3` : Vector3
        * `4` : Vector4
        * `b` : Branch
        * `+` : float addition
        * `-` : float subtraction
        * `=` : float equality comparison
        * `Shift+B` : Block
    * Press and hold `C`, then click on a constant to convert it into a variable
        * You can also do this by right-clicking the constant
    * `Ctrl+G` for quick grouping
    * `L+Click` logs the value of the selected node
    * `Shift+A` for aligning nodes
    * Press and hold `Shift+F`, then click on a node that outputs an array type, to generate a ForEach loop automatically
    * Most of the above are also available via the right-click menu
* Added a new topbar that shows the currently open graph and opens new "tabs" to it when you open more graphs
    * You can close each tab with the X button
* Events/Groups entries are clickable in the sidebar for fast navigation
* Added search bar at the top which allows you to search through your active graph
    * Press `Ctrl+F` to move focus to the searc hbar
    * Search activates after entering at least 3 letters
    * Pressing Enter while having multiple search results will jump between them
* There is a new "Highlight flow" toggle on the topbar, which, when enabled, will highlight the nodes connected via the flow edges
    * Use this to quickly see how the program arrives at the particular node
    * If the node doesn't have any flow connections - nothing will happen
      
### Changes
* Changes video link in UdonSyncPlayer example to point to new location

---

## 3.1.8
* Worlds - VRCSDK3-WORLD-2022.10.12.21.07_Public.unitypackage
* Avatars - VRCSDK3-AVATAR-2022.10.12.21.07_Public.unitypackage

Added 3 shader globals that can be accessed by any avatar or world shader:
* float _VRChatCameraMode:
  * 0 - Rendering normally
  * 1 - Rendering in VR handheld camera
  * 2 - Rendering in Desktop handheld camera
  * 3 - Rendering for a screenshot

* float _VRChatMirrorMode:
  * 0 - Rendering normally, not in a mirror
  * 1 - Rendering in a mirror viewed in VR
  * 2 - Rendering in a mirror viewed in desktop mode


* float3 _VRChatMirrorCameraPos - World space position of mirror camera (eye independent, "centered" in VR)

---

* World InputFields will now open the keyboard modal when interacted with. If this behavior is not desired, add the newly created `VRCInputFieldKeyboardOverride` component to specify how to override this behavior.  Setting its setting to `Default` will open the touch modal while `Override` will not.
* New option `cameraClearFlags` on VRCMirrorReflection that overrides the camera clear flags used in the mirror
  * The default is `MirrorClearFlags.FromReferenceCamera` which retains the current behaviour of rendering the same as the active camera
* Options `customSkybox` and `customClearColor` allow mirror-specific skyboxes and clear colors
* You can now set gravity in a world to 0 or negative values
* Fixed: user-supplied masks on the FX layer were ignored, and prevented Gesture transform animations from working. [Docs updated](https://docs.vrchat.com/docs/playable-layers#fx).
* Added several new Udon nodes related to graphics and shader manipulation:
  * VRCGraphics.DrawMeshInstanced
  * VRCShader.SetGlobalFloat
  * VRCShader.SetGlobalFloatArray
  * VRCShader.SetGlobalVector
  * VRCShader.SetGlobalVectorArray
  * VRCShader.SetGlobalMatrix
  * VRCShader.SetGlobalMatrixArray
  * VRCShader.SetGlobalInteger
  * VRCShader.SetGlobalTexture
  * VRCShader.SetGlobalColor
* VRCShader functions accept string input in some cases (for texture names, mostly). You must use the _Udon prefix for these inputs
  * There is one exception. VRCShader functions will also accept the exact string _AudioTexture to accommodate for the existing widespread community-created AudioLink system

## 3.1.7

No matching .unitypackage versions

* Checks Scene Descriptor for null spawns object before trying to get length, fixing issue when adding a Scene Descriptor to your world manually.
* Prompts user to save their scene before loading a Sample Scene, fixing [this Canny issue](https://feedback.vrchat.com/sdk-bug-reports/p/switching-to-the-example-scene-deletes-unsaved-changes.

---

## 3.1.6
* Worlds - VRCSDK3-WORLD-2022.08.29.20.48_Public.unitypackage
* Avatars - VRCSDK3-AVATAR-2022.08.29.20.48_Public.unitypackage

---

* World InputFields will now open the keyboard modal when interacted with.  If this behavior is not desired, add the newly created `VRCInputFieldKeyboardOverride` component to specify how to override this behavior.  Setting its setting to `Default` will open the touch modal while `Override` will not.
* New option `cameraClearFlags` on VRCMirrorReflection that overrides the camera clear flags used in the mirror
  * The default is `MirrorClearFlags.FromReferenceCamera` which retains the current behaviour of rendering the same as the active camera
* Options `customSkybox` and `customClearColor` allow mirror-specific skyboxes and clear colors
* You can now set gravity in a world to 0 or negative values
* Fixed: user-supplied masks on the FX layer were ignored, and prevented Gesture transform animations from working. [Docs updated](https://docs.vrchat.com/docs/playable-layers#fx).
* Added several new Udon nodes related to graphics and shader manipulation:
  * VRCGraphics.DrawMeshInstanced
  * VRCShader.SetGlobalFloat
  * VRCShader.SetGlobalFloatArray
  * VRCShader.SetGlobalVector
  * VRCShader.SetGlobalVectorArray
  * VRCShader.SetGlobalMatrix
  * VRCShader.SetGlobalMatrixArray
  * VRCShader.SetGlobalInteger
  * VRCShader.SetGlobalTexture
  * VRCShader.SetGlobalColor
* VRCShader functions accept string input in some cases (for texture names, mostly). You must use the _Udon prefix for these inputs
  * There is one exception. VRCShader functions will also accept the exact string _AudioTexture to accommodate for the existing widespread community-created AudioLink system

## 3.1.6-beta.1

* Worlds - VRCSDK3-WORLD-2022.08.12.22.39_Public.unitypackage
* Avatars - VRCSDK3-AVATAR-2022.08.12.22.39_Public.unitypackage

---

- Fixed: user-supplied masks on the FX layer were ignored, and prevented Gesture transform animations from working. Docs updated: https://docs.vrchat.com/docs/playable-layers#fx
- All input fields will pop up the keyboard, and we've added a component that'll disable that feature if you don't want it on a field
- Added in the ability to customize mirror skyboxes and clear flags
- Added several new Udon nodes related to graphics and shader manipulation:
    - `VRCGraphics.DrawMeshInstanced`
    - `VRCShader.SetGlobalFloat`
    - `VRCShader.SetGlobalFloatArray`
    - `VRCShader.SetGlobalVector`
    - `VRCShader.SetGlobalVectorArray`
    - `VRCShader.SetGlobalMatrix`
    - `VRCShader.SetGlobalMatrixArray`
    - `VRCShader.SetGlobalInteger`
    - `VRCShader.SetGlobalTexture`
    - `VRCShader.SetGlobalColor`
- You can now set gravity in a world to 0 or negative values

## 3.1.5

No matching .unitypackage versions

---

* Switches to writing a "canary file" into a project's Library folder after reimporting a given SDK (so it's only auto-reloaded again if the Library is rebuilt).
* Uses EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo() instead of my homegrown detection method
* Uses Async Task instead of EditorCoroutine to wait for compilation to finish

## 3.1.4

No matching .unitypackage versions

---

* Now waits until a scene is loaded to run SDK3ImportFix
* Writes a file to the Assets dir explaining how to find samples instead of popping up a window and writing to the registry.
* Uses the cross-platform `Path.DirectorySeparatorChar` when checking protected file paths instead of `/`.

## 3.1.3

No matching .unitypackage versions

---

* Automatically reloads current scene after reloading SDKs, which should fix broken VRCUrlInputFields and other missing scripts automatically.
* Clears the console after reloading the SDK to help users see if any errors are persisting.
* Shows message about Samples being moved when a project is first opened.

## 3.1.2

* Worlds - VRCSDK3-WORLD-2022.07.26.21.44_Public
* Avatars - VRCSDK3-AVATAR-2022.07.26.21.45_Public

---

* Adds pause between launching multiple local clients to avoid triggering EAC
* Always reloads SDK once on project load
- Converted DB components will now match enabled / disabled state in-app and in the SDK
- A short delay has been added between multiple local test client launches to account for some issues that would occur with simultaneous launch
- Fixed Left / Right foot swap during Avatar setup
