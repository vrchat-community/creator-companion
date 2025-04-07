# Finding the Samples

In the [legacy packages](glossary#legacy-packages), the samples and examples were unpacked directly into your Assets folder. This made them easy to find, but any changes you made to them would be lost when you updated your package versions, and they were part of your general project structure whether you wanted them or not.

## VRChat SDK Samples
The samples for official SDK Packages are now in the "Samples" folder of that package. The quickest way to find and open them is through the new menu items under "VRChat SDK/Samples", which will show the samples for the packages you have loaded. Each item is a scene that you can choose to load.

![Samples in Menu](/images/samples.png)

These samples are not allowed to be edited, and will show warnings if you try to save them. You should instead use "File > Save As..." to make a copy of the scene which will not be overwritten by package updates.

## Other Package Samples

Some packages may use the Unity Package Manager's sample-importing functionality. For these, you can find them from within the "Unity Package Manager" window, within the "In Project" set from the dropdown in the upper-left.

![Importing Samples](/images/import-samples.png)

Importing a sample using one of these buttons will unpack it into a folder like `Assets/Samples/packageName/1.0.0/SampleName`. These can be safely edited and will not be overwritten by importing a sample from a newer version of a package, since it is placed in a version-specific folder.