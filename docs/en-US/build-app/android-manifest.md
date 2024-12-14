# AndroidManifest

In the ``AndroidManifest.xml`` file, you can set the application as the main application and configure the necessary
permissions for the app.

### Main Application

```xml

<application android:icon="@mipmap/ic_launcher" android:label="@string/app_name"
             android:theme="@style/Theme.vending_app" android:usesCleartextTraffic="${usesCleartextTraffic}">
    <activity
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode"
            android:launchMode="singleTask" android:label="@string/main_activity_title" android:name=".MainActivity"
            android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN"/>
            <category android:name="android.intent.category.HOME"/>
            <category android:name="android.intent.category.DEFAULT"/>
            <category android:name="android.intent.category.LAUNCHER"/>
        </intent-filter>
    </activity>
</application>
```

### android.intent.action.MAIN

This action specifies that this activity is the main entry point of the app. It tells Android that this activity is the
starting point when the app is launched.

### android.intent.category.HOME

This category indicates that this activity is the home screen of the device. When the user presses the home button, the
app may be considered as a launcher for the device. Typically used for launcher apps.

### android.intent.category.DEFAULT

This category is the default category for intents that don't explicitly specify a category. It's commonly used in cases
where the intent is generic and doesn’t need to be tied to any specific category.

### android.intent.category.LAUNCHER

This category means that the activity should appear in the app launcher (home screen). When you install an app, this is
the activity that gets launched when you click the app icon.

### Permissions

The following permissions are for reference only. Some may need to be added or removed based on your application's
requirements.

```xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <!-- Network connection status. -->
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>

    <!-- Mount the file system and manage multimedia resources. -->
    <uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
    <uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/>
    <uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/>

    <!-- Phone status and identity information. -->
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
    <uses-permission android:name="android.permission.GET_ACCOUNTS"/>

    <!-- vibrate -->
    <uses-permission android:name="android.permission.VIBRATE"/>

    <!-- sleep mode -->
    <uses-permission android:name="android.permission.WAKE_LOCK"/>

    <!-- flashlight -->
    <uses-permission android:name="android.permission.FLASHLIGHT"/>

    <!-- read system logs -->
    <uses-permission android:name="android.permission.READ_LOGS"/>

    <!-- write setting -->
    <uses-permission android:name="android.permission.WRITE_SETTINGS"/>

    <!-- NFC -->
    <uses-permission android:name="android.permission.NFC"/>
    <uses-feature android:name="android.hardware.nfc" android:required="true"/>

    <!-- For CAMERA -->
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-feature android:name="android.hardware.camera"/>
    <uses-feature android:name="android.hardware.camera.autofocus"/>

    <!-- For older versions of Android -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

    <!-- other code -->
</manifest>
```

