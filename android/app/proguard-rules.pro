# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html


# Add any project specific keep options here:
-dontwarn com.firebase.ui.auth.provider.**
-dontnote com.firebase.ui.auth.provider.**
-keep class com.google.android.gms.measurement.internal.AppMeasurementDynamiteService.**
-dontwarn com.google.android.gms.measurement.internal.AppMeasurementDynamiteService.**
-dontwarn com.google.android.gms.dynamic.IObjectWrapper.**
-dontwarn com.google.android.material.bottomnavigation.BottomNavigationItemView.**
-keep class com.google.android.gms.**
-dontwarn com.google.android.gms.**
-dontwarn okhttp3.internal.Util.**
-dontwarn okhttp3.internal.ws.RealWebSocket.**
-dontwarn okhttp3.internal.ws.WebSocketWriter.**
-keep class okhttp3.internal.Util.**
-keep class okhttp3.internal.ws.RealWebSocket.**
-keep class okhttp3.internal.ws.WebSocketWriter.**
-keep class com.google.android.material.bottomnavigation.BottomNavigationItemView.**
-keep class com.google.android.gms.measurement.internal.AppMeasurementDynamiteService.**
-keep class com.google.android.gms.dynamic.IObjectWrapper.**

