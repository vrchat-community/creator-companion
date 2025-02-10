# Upgrading from Deprecated GitHub Actions

GitHub has deprecated several actions which we used in our template-package and template-package-listing repositories. These actions will start to fail after January 30, 2025.

This is a manual update guide for people who already use those templates

## Template-Package-Listing

If you have created a listing repository from the template-package-listing template, these are the steps you should follow to update:

- Open the `.github/workflows/build-listing.yml` file
- Change both cases of `actions/checkout@v3` to `actions/checkout@v4`
- Change `actions/cache@v3` to `actions/cache@v4`
- Change `actions/configure-pages@v3` to `actions/configure-pages@v5`
- Change `actions/upload-pages-artifact@v1` to `actions/upload-pages-artifact@v3`
- Change `actions/deploy-pages@v2` to `actions/deploy-pages@v4`

[Relevant Pull Request for reference](https://github.com/vrchat-community/template-package-listing/pull/17)

## Template-Package

If you have created a package repository from the template-package template, these are the steps you should follow to update:

- Open the `.github/workflows/build-listing.yml` file
- Change both cases of `actions/checkout@3df4ab11eba7bda6032a0b82a6bb43b11571feac` to `actions/checkout@v4`
- Change `actions/cache@704facf57e6136b1bc63b828d79edcd491f0ee84` to `actions/cache@v4`
- Change `actions/configure-pages@f156874f8191504dae5b037505266ed5dda6c382` to `actions/configure-pages@v5`
- Change `actions/upload-pages-artifact@a753861a5debcf57bf8b404356158c8e1e33150c`to `actions/upload-pages-artifact@v3`
- Change `actions/deploy-pages@9dbe3824824f8a1377b8e298bafde1a50ede43e5` to `actions/deploy-pages@v4`

[Relevant Pull Request for reference](https://github.com/vrchat-community/template-package/pull/25)

---

Depending on when you have created your repository - the exact old versions may vary, but you should update them to the latest versions as shown above even if the versions are different.
