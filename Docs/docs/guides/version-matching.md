# Version Matching

We use [Semantic Versioning](https://semver.org/) for SDK packages managed by the VRChat Package Manager (VPM) instead of the date-based format used in the `.unitypackage` format. This document shows the matches between the two versions for the latest SDK releases.

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
