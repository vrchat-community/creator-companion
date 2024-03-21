# VRC Quick Launcher

The VRC Quick Launcher is a tool that helps you launch multiple profiles in the same instance of VRChat while also providing an interface to modify the debug options. This avoids the issue of having tons of shortcuts.

You can find the quick launcher by open the Creator Companion and opening the "Tools" tab.

![VRC Quick Launcher GUI](/images/vrc-quick-launcher.png)

## Features
  * Support for multiple VRChat exes to use for launching (will default to the Steam one if it exist) and will remember up to the last 10 used, this means you can easily access and use VRChat & VRChat - Dev for example.
  * All VRChat launch options are available directly in the UI.
  * An instance can be created with a world ID, instance ID, user ID, any type and any region OR you can join on an existing instance by providing its link.
  * The "Local" Instance tab allows you to launch worlds you've built previously and can detect new builds to launch them automatically.
  * It is possible to setup an infinite number of profiles, each with an optional description, you can launch them individually or in a group and you can select which one you want to use for VR.
  * There is an auto-layout option that'll, as it says, layout the windows on the main monitor in case you're launching multiple profiles.
  * Your current launch options & instance info settings can be exported into JSON to share with others or to setup different configurations (VRCQL specific options and profiles are not exported).
  * Said JSON can be loaded in its entirety with File > Open or can be drag & dropped into the sections you want to use from it (either Debug options or Instance Info).
  * Incomplete JSON is also supported, if you want to change only one or a few options (eg. having a JSON that only adds the API logs custom parameter).
  * Launch options & instance URL can be individually copied to the clipboard.
  * Instance info has a button to open it on the website.
  * An option is available to close the app automatically once you're done launching instances.
  * Light & Dark theme support.
  * Very small footprint of < 1.5MB, only an EXE, with the additional JSON that'll be created to store your Debug options & Instance info (if you have it auto-save).

## Launch All Selected On Build

To use this feature:
1. Launch VRCQL, switch to Local, turn on "Launch all selected on build".
2. Build a world with 0 clients.
3. VRCQL auto launches the clients with different profiles (meaning you can have different users join the same local instance which you won't get with the SDK) and applies the auto-layout.
4. After that, you could just close VRCQL if you're using watch worlds or you could close all the clients and build & test again.
