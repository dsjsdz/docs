# Jar File Config

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

Please copy the provided JAR file into the libs folder and configure it in your project's `app/build.gradle.kts`. Please
refer to the example below:

```kotlin
android {
    defaultConfig {
        // ...
    }
    
    // new code
    sourceSets {
        getByName("main") {
            jniLibs.srcDirs("libs")
        }
    }

    buildTypes {
        // ...
    }
}

dependencies {
    // new code
    implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.jar"))))
    
    // ...
}
```

#### Purpose

`jniLibs.srcDirs("libs")` This line of code sets the `libs` directory as the source directory for jniLibs. For
additional configurations, you can visit Google's documentation for more details.

`implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.jar"))))` Add all files in the libs directory
ending with `.jar` as dependencies, and include them in the current module using implementation.

Note: Depending on the device, we may provide more than one JAR file.
