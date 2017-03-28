package com.usingnativeandroidcomponent;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "CustomToastAndroid";
  }

  @Override
  public Map<String, Object> getConstants() {
   final Map<String, Object> constants = new HashMap<>();
   constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
   constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
   return constants;
 }

 @ReactMethod
 public void show(String message, int duration, Promise promise) {
   Toast.makeText(getReactApplicationContext(), message, duration).show();
   if(promise != null) {
     promise.resolve("Promise was invoked from Android class!");
   }
 }
}
