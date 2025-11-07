# Advanced Usage

Optimize events for the app project to provide users with a better experience.

![zc-d9999102](/images/d9999102-80ac-4062-89df-d91e9e072237.jpg)

1. Update APP UI View

2. Handle custom events from the backend management system.

## [hivemq-mqtt-client](https://github.com/hivemq/hivemq-mqtt-client)

We recommend that you or your team integrate the MQTT service. This will allow you to customize vending machine events
in the backend management system. For instructions on integration, please refer to the GitHub link above.

## Start Task Service Example

The code is for reference only.

```kotlin
class MainActivity : ComponentActivity() {
    // code...

    override fun onCreate(savedInstanceState: Bundle?) {
        // code...
        
        // start task service
        this.startTaskService()
    }

    // task service
    private fun startTaskService() {
        this.application.apply {
            val intent = Intent(this, TaskService::class.java)
            // machine_no is custom machine number or database table id
            intent.putExtra("no", machine_no)
            options.let { self ->
                intent.putExtra("options", Gson().toJson(self))
            }
            startService(intent)
            taskRunning = true
        }
    }
}
```

file `TaskService.kt`, the code is for reference only.

```kotlin
enum class Method(val value: String) {
    SHUTDOWN("android.shutdown"), // turn off the power
    REBOOT("android.reboot"), // reboot the machine
    GET_ENV("android.env.get"), // get env arguments
    PUT_BRIGHTNESS("android.brightness.put"), // change the brightness of android system
    SET_POWER("android.schedule.power"), // schedule power timed shutdown and reboot
    DEFAULT("android.heartbeat"), // heartbeat of machine
    OFFLINE("android.offline"), // message of machine offline<mqtt>
}

class TaskService : Service() {
    private lateinit var client: Mqtt5AsyncClient

    private lateinit var subscribeTopic: String
    private lateinit var no: String
    // your code
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val no: String? = intent?.getStringExtra("no")
        if (no == null) {
            return START_STICKY
        }

        this.no = no.toString()
        this.subscribeTopic = "/no/${this.no}"

        val broker = ''
        val port = ''
        this.client = MqttClient.builder()
            .useMqttVersion5()
            .identifier(this.no)
            .serverHost(broker)
            .serverPort(port)
            .buildAsync()
        this.performLongTask()

        return START_STICKY
    }
    
    private fun performLongTask() {
        val ctx = this
        try {
            //send an async connect
            val ack = this.client.connectWith().cleanStart(true).noSessionExpiry().keepAlive(60)
                .simpleAuth()
                .username(this.options!!.username)
                .password(this.options!!.password.toByteArray())
                .applySimpleAuth().send().whenComplete { _, throwable ->
                    if (throwable != null) {
                        throwable.printStackTrace()
                        return@whenComplete
                    }

                    // Every 5 minutes, inform you(the server) that "I am still alive."
                    this.timer = Timer()
                    this.timer.schedule(timerTask {
                        heartbeat()
                    }, 0, 300000) // 300000 毫秒
                }.join()

            if (!ack.isSessionPresent) {
                //only the call to join is blocking
                this.client.subscribeWith().topicFilter(this.subscribeTopic)
                    .qos(MqttQos.EXACTLY_ONCE)
                    .callback { publish: Mqtt5Publish ->
                        try {
                            val params = String(publish.payloadAsBytes, StandardCharsets.UTF_8)
                            // signer is 3td party library, eg: signature-1.0.8.jar
                            val payload: Map<String, Any> = signer.decryptBase64String(params)

                            val method = payload["method"]
                            val sign = payload["sign"] // custom signature
                            if (method == null || sign == null) {
                                return@callback
                            }

                            if (sign !is String || !this.signer.checkSignature(payload, sign)) {
                                return@callback
                            }
            
                            when (method) {
                                Method.SHUTDOWN.value -> {
                                    this.displayer.shutDown()
                                    this.onDestroy()
                                }

                                Method.REBOOT.value -> {
                                    this.displayer.reboot()
                                    this.onDestroy()
                                }

                                else -> TODO()
                            }
                        } catch (e: Exception) {
                            return@callback
                        }
                    }.send()
            }

        } catch (e: Exception) {
            Toast.makeText(ctx, e.message, Toast.LENGTH_SHORT).show()
            e.printStackTrace()
        } finally {
            if (!client.state.isConnected) {
                // record log
                this.logger("connect.log", mapOf("error" to "connect fail"))
            }
        }
}
```

## Proguard-rules

file `proguard-rules.pro` of `hivemq-mqtt-client`, the code is for reference only.

```txt
# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   https://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

# Please add these rules to your existing keep rules in order to suppress warnings.
# This is generated automatically by the Android Gradle plugin.

-keepclassmembernames class io.netty.** { *; }
-keepclassmembers class org.jctools.** { *; }

-keep class io.netty.** { *; }
-keep class org.jctools.** { *; }
-keep class org.conscrypt.** { *; }
-keep class org.bouncycastle.** { *; }
-keep class org.openjsse.** { *; }
-keep class com.aayushatharva.** { *; }
-keep class com.github.luben.** { *; }
-keep class com.google.protobuf.** { *; }
-keep class com.jcraft.** { *; }
-keep class com.ning.** { *; }
-keep class net.jpountz.** { *; }
-keep class org.apache.log4j.** { *; }
-keep class org.jboss.log4j.** { *; }
-keep class org.slf4j.** { *; }
-keep class sun.security.** { *; }

-dontwarn org.conscrypt.**
-dontwarn org.bouncycastle.**
-dontwarn org.openjsse.**
-dontwarn com.aayushatharva.**
-dontwarn com.github.luben.**
-dontwarn com.google.protobuf.**
-dontwarn com.jcraft.**
-dontwarn com.ning.**
-dontwarn io.netty.**
-dontwarn net.jpountz.**
-dontwarn org.apache.log4j.**
-dontwarn org.jboss.log4j.**
-dontwarn org.slf4j.**
-dontwarn sun.security.**
-dontwarn reactor.blockhound.integration.BlockHoundIntegration

##---------------Begin: proguard configuration for Gson  ----------
# Gson uses generic type information stored in a class file when working with fields. Proguard
# removes such information by default, so configure it to keep all of it.
-keepattributes Signature

# For using GSON @Expose annotation
-keepattributes *Annotation*

# Gson specific classes
-keep class sun.misc.Unsafe { *; }
#-keep class com.google.gson.stream.** { *; }

# Application classes that will be serialized/deserialized over Gson
-keep class com.google.gson.examples.android.model.** { *; }

-keep,allowobfuscation,allowshrinking class com.google.gson.reflect.TypeToken
-keep,allowobfuscation,allowshrinking class * extends com.google.gson.reflect.TypeToken

##---------------End: proguard configuration for Gson  ----------
-keep class com.plugin.board.** { *; }
-keep class cc.uling.usdk.** { *; }
-keepattributes io.github.cakioe.Signature
-keep class com.google.gson.reflect.TypeToken { *; }

-keep class com.plugin.board.database.** { *; }
-keepattributes com.plugin.board.database.**
-keepclassmembers class com.plugin.board.database.** {
    public *;
}
```
