# Using Project Template Repos

To get you started with VRChat content creation quickly, we provide a set of official Unity project templates.

You can use them either via the [VCC Application](/guides/getting-started), the [CLI](/vpm/cli), or by downloading the repositories directly.

Currently we provide the following templates:

### Avatar

This template includes the Base and Avatar SDKs, ready for you to build and upload Avatars using [Avatars 3.0](https://docs.vrchat.com/docs/avatars-30).

[Repository Link](https://github.com/vrchat-community/template-avatar) | [Download Link](https://github.com/vrchat-community/template-avatar/archive/refs/heads/main.zip)

### World
This template includes the Base and World SDKs, ready for you to build and upload Worlds using Udon programs and prefabs. It also includes [ClientSim](https://clientsim.docs.vrchat.com/) to easily test your World as you develop it.

[Repository Link](https://github.com/vrchat-community/template-world) | [Download Link](https://github.com/vrchat-community/template-world/archive/refs/heads/main.zip)

### UdonSharp
This template includes everything in the World Template above, plus [UdonSharp](https://github.com/vrchat-community/UdonSharp) for writing your programs using a C#-like syntax.

[Repository Link](https://github.com/vrchat-community/template-udonsharp) | [Download Link](https://github.com/vrchat-community/template-udonsharp/archive/refs/heads/main.zip)

## Usage

:::tip

We highly recommend you use the [VCC Application](/guides/getting-started) or the [CLI](/vpm/cli) to set up new projects using the official templates automatically.  
But if you want to do it manually or cannot use these methods - follow the instructions below

:::

Every template repository includes usage instructions so check them out using Repository Links above.  
But here is a quick general overview:

- Download the template code using the links above, or visit the repo page and press 'Use This Template' to start a new GitHub repository which is ready to go. If you downloaded a zip, follow the rest of the directions.
- Extract the ZIP file to the folder on your system where you want your new project.
- Open Unity Hub and click "Open".
- Navigate to your new project folder and click "Select Folder".
- This should open Unity and start the import process.
  - Make sure you have the right Unity version installed according to [our documentation](https://docs.vrchat.com/docs/current-unity-version).
  - You can use VCC to always ensure you have the correct unity version.
- Click "OK" when asked to download required VRChat packages.
- You should be set up and ready to go!

:::info

Every template's README.md file contains more detailed instructions for creating and publishing the respective content.

:::

## User Templates

Beyond official templates, you can also create your own! [See this guide](/vpm/templates#user-templates) to learn more about that.