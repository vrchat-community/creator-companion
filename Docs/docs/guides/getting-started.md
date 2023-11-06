# Getting Started

If you're starting from scratch, here's what you'll need to do:

## Download
The Creator Companion is available at [https://vrchat.com/home/download](https://vrchat.com/home/download). 

You can always download the latest version from this direct url as well: [https://vrchat.com/download/vcc](https://vrchat.com/download/vcc).

## Install
Run the installer from the above step, which will install the Creator Companion into your "%LOCALAPPDATA%\Programs" folder by default (e.g. `C:\Users\UserName\AppData\Local\Programs`). You can change this during installation if you like. You can delete the installer once the installation is complete.

## Set Up
The Creator Companion will check that Unity is installed on launch. If it is needed, a button will be presented to easily Unity Hub and the Unity Editor install it. By following the installation instructions inside the Creator Companion, you will get the latest version of the Unity Hub and the current VRChat-SDK-Compatible version of Unity.

To install Unity Hub, [follow these steps](https://learn.unity.com/tutorial/install-the-unity-hub-and-editor).

:::info

### Unity Installation Issues

- Make sure to [activate your Unity license](https://support.unity.com/hc/en-us/articles/211438683-How-do-I-activate-my-license-) after installing it.
- Unity and Unity Hub usually require admin privileges for installation. Click "Yes" when the installer asks to make changes to your system. In rare occasions, you may need to [run the installer as an administrator](https://www.windowscentral.com/how-run-app-administrator-windows-10). 
- If your Unity Hub installation fails unexpectedly, you may want to view the installation log file. You can find it in `%UserProfile%\AppData\Roaming\UnityHub\logs\info-log.json`.
- Unity Hub may automatically prompt you to install versions of Unity that are incompatible with VRChat. You can safely skip these prompts.

:::

The Creator Companion is only fully-supported on Windows 10 (Windows 11 may work but is not fully tested). The [CLI has some functionality on Mac and Linux](/vpm/cli#mac-and-linux-support).

### Unity Editor Versions
The Creator Companion requires our currently Supported Unity Version. If you have Unity Hub installed, the Creator Companion can install it automatically for you.

If the Creator Companion cannot automatically find your installed Unity Editor, an error message will be shown. In the Creator Companion's settings page, you can use the 📁-button to browse for the Unity Editor you'd like to use. 

![Browse for the Unity Editor](/images/browse-unity-editor.png)

Creator Companion 2.1.6 can try and install [Unity Editor 2019.4.31f1](https://unity.com/releases/editor/archive#download-archive-2019) for you, but it also supports 2019.4.31f1, 2019.4.31f1c1, 2019.4.30f1 and 2019.4.29f1 (all of which require the Android Build Support module to also be installed). If you browse for an existing Unity Editor installation and it is not compatible with your version of Creator Companion, a message will be shown at the bottom of Creator Companion listing the currently supported versions - you may need to enlarge the Creator Companion window to be able to view the whole message.

## Make New Projects

To make a new project, just press "New" from the navigation bar on the left and choose which Template you'd like to work from:
* Avatar - Makes a new project with the Avatar 3.0 SDK included for creating a VRChat Avatar.
* World - Makes a new project with the World 3.0 SDK with Udon included, as well as ClientSim for testing your worlds directly in the Editor.
* UdonSharp - Makes a new project with everything from the World template PLUS UdonSharp for writing Udon scripts in a C#-like syntax.

## Migrate Existing Projects

Migrating your existing projects is covered in detail in [VPM: Migrating Projects](/vpm/migrating).

## Updating Existing Projects

You can add existing projects to your main Project list by pressing the "Add" button from the navigation on the left. You can either choose a single project folder to add it to the list, or a folder full of projects to add each valid project found to your list (this methid will only go one level deep).
