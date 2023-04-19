# Community Repositories

Starting with version 2.1.0 of the Creator Companion, you can add community repositories to your list of available packages. This allows you to easily use and update packages provided by other creators.

## How to Add a Community Repository

Some repositories may provide an "Add to VCC" button on their website. If that's the case, you can just click that button to add the repository to your VCC.

If thats not the case - follow the steps below.

- Open the VCC and go to the Settings page.
- Make sure you're on the version 2.1.0 or newer (it is displayed in the top-right corner).
  - If you are not, scroll down and click "Check for Updates".
- Press the "Packages" tab.

![Packages Tab](/images/installed-repositories.png)

- Press the "Add Repository" button.
- In the field that appears, enter the URL of the repository you want to add.

![Add listing field](/images/add-listing-field.png)

- Click "Add".
- A popup will appear, showing you the information about the repository, a list of packages it contains.
- If everything looks good, click the "I Understand, Add Repository" button.

![Add listing modal](/images/add-listing-modal.png)

- The repository will be added to your list of installed repositories.
- You should be able to navigate to any of your projects and see the packages from the new repository available in the list.

![Added package](/images/add-listing-new-package.png)

## Advanced Usage

### Providing Request Headers

Some repositories may require you to provide additional headers with your request. For example, if you want to access a private repository, you may need to provide an authorization token.

VCC allows you to add custom headers to your requests. To do so, follow the steps below:

- Proceed with the steps above until the URL field appears.
- Press the cogwheel icon next to the field.
- A list of headers will appear, allowing you to add new ones.

![Add request headers](/images/add-listing-field-headers.png)

- Supply the required headers and click "Add".
- Proceed with the repository addition as usual.

## How to Remove a Community Repository

You can remove any repository by simply clicking the "Remove" button next to it in the installed repositories list.

## How to Enable or Disable a Community Repository

Every repository in the Installed Repositories list has a checkmark to the left of it. If the checkmark is checked, the repository is enabled and will show its packages in the list of available packages on the project page.

You can also toggle the enabled repositories on the project page by using the "Selected Repos" dropdown.

![Selected Repos](/images/selected-repos.png)

## How to Create your own Repositories

If you are a creator who wants to publish your own packages for the community to use, you can create your own repository. You can find more information about how to do that in the [Creating a Package Listing](/guides/create-listing) section.

## Community Repository Storage Location

The repository information is stored in your settings.json file which you can access by clicking "settings.json" button on the Settings page.

It is saved under the `userRepos` key and might look something like this

```json
"userRepos": [
  {
    "localPath": "C:\\Users\\userName\\AppData\\Local\\VRChatCreatorCompanion\\Repos\\5036b8ee-5853-49e6-82bb-a626a0da0080.json",
    "url": "https://vrchat-community.github.io/template-package/index.json",
    "name": "VRChat Example Package Listing",
    "id": "com.vrchat.demo-template.listing",
    "headers": {}
  }
]
```

The `localPath` key is the path to the cached repository file on your computer. The cache is internal to the VCC and you're not expected to modify it.