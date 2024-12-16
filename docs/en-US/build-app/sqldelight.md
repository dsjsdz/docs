# Sqldelight Usage

[sqldelight](https://github.com/sqldelight/sqldelight)

File `build.gradle.kts`, the code is for reference only.

```kottlin
dependencies {
    implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.jar"))))
    implementation("com.google.code.gson:gson:2.10.1")
    implementation("androidx.work:work-runtime-ktx:2.9.1")
    implementation("com.hivemq:hivemq-mqtt-client:1.3.0")
    implementation("com.hivemq:hivemq-mqtt-client-reactor:1.3.0")

    implementation("app.cash.sqldelight:android-driver:2.0.2")
    implementation("app.cash.sqldelight:coroutines-extensions-jvm:2.0.0")
    
    // other
}

sqldelight {
    databases {
        create("Database") {
            packageName.set("your package name.database")
        }
    }
}

tasks.named("build") {
    dependsOn("generateSqlDelightInterface")
}
```

File `src/main/sqldelight/com/your/package/database/Config.sq`, the code is for reference only.

```sq
CREATE TABLE `configs`
(
    `id`                    INTEGER PRIMARY KEY NOT NULL,
    `sdk_version`           TEXT                NOT NULL,
    `android_version`       TEXT                NOT NULL,
    `serial_sn`             TEXT                NOT NULL,
    `model_no`              TEXT                NOT NULL,
    `screen_width`          INTEGER DEFAULT 0,
    `screen_height`         INTEGER DEFAULT 0,
    `commid`                TEXT    DEFAULT "/dev/ttyS0",
    `baudrate`              INTEGER DEFAULT 9600,
    `status_bar_on`         INTEGER DEFAULT 0,
    `gesture_status_bar_on` INTEGER DEFAULT 0,
    `brightness`            INTEGER DEFAULT 255,
    `rows`                  INTEGER DEFAULT 0,
    `columns`               INTEGER DEFAULT 0,
    `is_with_coin`          INTEGER DEFAULT 0,
    `is_with_cash`          INTEGER DEFAULT 0,
    `is_with_pos`           INTEGER DEFAULT 0,
    `is_with_pulse`         INTEGER DEFAULT 0,
    `is_with_identify`      INTEGER DEFAULT 0,
    `currency_code`         TEXT    DEFAULT "unknown", -- currency code
    `currency_unit`         INTEGER DEFAULT 1,         -- currency unit
    `currency_decimal`      INTEGER DEFAULT 2          -- currency decimal
);

find:
SELECT *
FROM `configs`
ORDER BY `id` DESC LIMIT 1;
```

Great!

I have nothing more to share you. You're ready to start creating your own app now!

