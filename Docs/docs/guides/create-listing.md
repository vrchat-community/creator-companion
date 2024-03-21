# Creating a Package Listing

You can create and share your own custom package listings, including your own packages as well as open source packages from the community.

<!-- Don't forget sync this caution with vpm/packages.md -->

:::caution

Do not remove old versions of your VPM packages after publishing them.
Removing old versions will break projects using [source control](https://vcc.docs.vrchat.com/vpm/source-control).

:::

## Using GitHub

The easiest way to publish packages and listings is with [GitHub](https://github.com/). You can do everything you need with a free account. If you use another source control service or just want to roll your own approach, see [Using Your Own Services](#using-your-own-services) below.

### 1. Create a New Listing Repo

Log into your account on https://github.com/. Then, press [![Use This Template](https://user-images.githubusercontent.com/737888/185467681-e5fdb099-d99f-454b-8d9e-0760e5a6e588.png)](https://github.com/vrchat-community/template-package-listing/generate)
to start a new GitHub project based on the official Package Listing Template, and follow the directions there to finish creating your own version. Then you just need to modify the source.json file to point to the packages you want to list.

### 2. Choose a Compatible GitHub Repository
You must choose a VPM-compatible package which is hosted on GitHub, and uses the [official release automation](https://github.com/vrchat-community/template-package/blob/main/.github/workflows/release.yml) we publish as part of our [Package Template](https://github.com/vrchat-community/template-package). If you've already got your sights set on one of these, skip to [Add Repos to your Listing Source](#3-add-repos-to-your-listing-source).

#### 2A. Adding Automation to an Existing Repo
The easiest way to get started is to use the [Package Template](https://github.com/vrchat-community/template-package) repo to make a new package from scratch. However, it's pretty easy to add automation to an existing repo.

1. Add the [release](https://github.com/vrchat-community/template-package/blob/main/.github/workflows/release.yml) GitHub action to your repo at `.github/workflows/release.yml`. You'll know it's in the right place if you can click on the "Actions" tab in your repo and see an action called "Build Release".
2. Follow the instructions under [Setting up Automation](https://github.com/vrchat-community/template-package#-setting-up-the-automation).
3. Create at least one compatible Release by running the "Build Release" action from your Actions tab.

### 3. Add Repos to your Listing Source
Edit the `source.json` file to add the packages to include.

To include packages which are hosted on GitHub and have VPM-compatible Releases through using one of our templates, you can simply edit the "githubRepos" array, replacing the example "vrchat-community/clientsim" entry with new listings using the format "owner/repository".

To include packages which are hosted somewhere else, you'll edit the 'packages' array. 
1. Change the entry for "com.vrchat.udonsharp" to the ID of the target package.
2. Delete the existing urls from the 'releases' array in this first entry, and add the actual download link.

### 4. Run the Build Repo Listing Action
This should happen automatically whenever you edit source.json directly on GitHub on your main branch, or push changes to source.json to your main branch.

## Using Your Own Services

Take a look at the [example listing](https://vrchat-community.github.io/template-package/index.json). In order to be valid, you need the following fields:

* name
* author
* id
* url
* packages
  * {package id}
    * versions
    * {version string in SemVer}
      * {valid VPM manifest} _(the full contents of `package.json)_

If you serve these from a publicly accessible URL, the Creator Companion will be able to read it and provide the packages listed inside.

:::caution

Do not remove old versions of your VPM packages after publishing them.
Removing old versions will break projects using [source control](https://vcc.docs.vrchat.com/vpm/source-control).

:::