
package com.rnmera;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.Promise;

import java.util.ArrayList;
import java.util.HashMap;

public class RNMeraModule extends ReactContextBaseJavaModule {

    Promise promise;

    @Override
    public String getName() {
        return "RNMera";
    }

    @ReactMethod
    public void connect(Promise promise) {
        promise.resolve(true);
    }

    // @ReactMethod
    // public void openport(ReadableMap params, Promise promise) {
    //     if (Printer == null) {
	//         Printer = new TscWifiActivity();
    //     }
    //     String ip = params.getString("ip");
    //     Integer port = params.getInt("port");
    //     Printer.openport(ip,port);
    //     promise.resolve(true);
    // }
