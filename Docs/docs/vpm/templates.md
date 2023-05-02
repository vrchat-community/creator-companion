# Templates
Templates are used to create new Unity projects preloaded with VRChat packages and settings.

## Official Templates
The Creator Companion includes three Templates:

### Avatar
This template includes the Base and Avatar SDKs, ready for you to build and upload Avatars using [Avatars 3.0](https://docs.vrchat.com/docs/avatars-30).

### World
This template includes the Base and World SDKs, ready for you to build and upload Worlds using Udon programs and prefabs. It also includes [ClientSim](https://clientsim.docs.vrchat.com/) to easily test your World as you develop it.

### UdonSharp
This template includes everything in the World Template above, plus [UdonSharp](https://github.com/vrchat-community/UdonSharp) for writing your programs using a C#-like syntax.

:::tip

These templates are available automatically when you install the Creator Companion, but we also provide them as git repositories you can download and use directly.
You can [read more about that here](/guides/using-project-template-repos).

:::

## User Templates
<iframe width="100%" class="ratio-16-by-9" src="https://www.youtube-nocookie.com/embed/_hK7FIJ1gTU" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
You can also add your own templates to easily start projects with your favorite packages, tools and prefabs. The easiest way to do this is to build from one of the included templates. Here's an example of how to do that for a World template where we include an imaginary tool called `HypeGenerator`. 

1. Copy the folder `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\VRCTemplates\World` to `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\Templates` (use your actual drive letter if it's different than C).
2. Rename the folder from `World` to something descriptive like `HypeWorld`.
3. Modify HypeWorld\package.json:

```json
{
	"name" : "user.vrchat.template.hypeWorld",
	"displayName" : "Hype World Project",
	"description" : "Udon world with my auto-Hype-Generator tool",
	"defaultScene" : "Assets/Hype.unity",
	"version" : "1.0.0",
	"category" : "ProjectTemplate",
	"dependencies" : {}
}
```
The only required fields are "name" and "displayName" for now. Note that "defaultScene" is part of the spec from Unity but does not appear to work.

4a. If my Hype Generator tool was available as a VPM-compatible package in the VCC, I could add it to the vpmDependencies list in HypeWorld\Packages\vpm-manifest.json:
```json
{
	"dependencies" : {
		"com.vrchat.worlds" : {
			"version" : "^3.1.x"
		},
		"com.mydomain.hype" : {
			"version" : "1.0.x"
		}
	}
}
```
4b. If this tool is not yet migrated to VPM and instead should live in the Assets folder, I can instead just copy it into `HypeWorld\Assets`. Everything in the Assets, Packages and ProjectSettings folders will be copied into my new project. Make sure that you *don't* include the file ProjectSettings/ProjectVersion.txt. This is not included in the World template but it will be in your ProjectSettings folder if you're copying files from an existing project.

With that folder in place, your template should now show up on the right side of the Templates screen when choosing to create a New Project:
![User Templates](/images/user-templates.png)
