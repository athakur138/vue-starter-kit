## Views Folder Structure

```
|___Views
|   |
|___Dashboard
|   |___Sections
|   |___DashboardView.vue
|___Home
|   |__Sections
|   |__HomeViewModel.vue

```

## Views Folder

1. In this folder according to MVVM architecture/design patterns, each folder created under Views folder should contain a View or viewmodel file.
2. Folders named "Sections" from the above folder structure can have related .vue files required to build the whole view or viewmodel file.
3. Sub folders under Views folder can introduce, wherever necessary, a "components" folder which consists of basic vue components that are very specific to that particular view or viewModel file and can be reused inside that sub folder only.

### naming convention

-   Folders inside Views should name according to the feature in Pascal Case
-   Make sure to end with "view" or "viewModel" while naming a view or viewModel file.
-   Name the view or viewModel file in Pascal Case also.
