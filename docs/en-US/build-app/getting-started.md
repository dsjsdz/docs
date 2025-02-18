# Hello, guys.

This tutorial will guide you on how to use the plugins we provide and build your own app.

This is a great moment.

This document was written on December 13, 2024, at the request of our very friendly cooperative
client.

Please note that the document may contain imperfections.

If you find any shortcomings, feel free to contact our customer service team, and we will provide very friendly
after-sales support.

## Points to Note

- This tutorial is intended for users who have purchased our vending machine and are using it with the Android driver
  board provided by our company.
- The programming language used in this tutorial is Kotlin. It is recommended that the compiled app version is
  compatible with Android 7.0 or higher, but does not exceed Android 11.0.

```bash
$ java --version
openjdk 17.0.2 2022-01-18
OpenJDK Runtime Environment (build 17.0.2+8-86)
OpenJDK 64-Bit Server VM (build 17.0.2+8-86, mixed mode, sharing)
```

## Project Tree

If you don’t have an Android project yet, please click the link below. It will guide you on how to create an app
project.

[Create a project use Android Studio](https://developer.android.com/studio/projects/create-project)

For existing projects, please continue reading below.

```bash
$ ~/AndroidStudioProjects
$ tree BUILDX

├─.gradle
├─.idea
├─app
│  ├─build
│  ├─libs
│  └─src
└─gradle
```

The directory structure is shown above. If there are any differences, please refer to the configuration of your project.

[libs.zip](/libs.zip)

[ysapi.jar](/ysapi.jar)