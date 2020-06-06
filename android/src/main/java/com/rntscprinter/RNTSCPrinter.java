
package com.rntscprinter;

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

import com.example.tscdll.TscWifiActivity;

public class RNTSCPrinterModule extends ReactContextBaseJavaModule {

    Promise promise;

    TscWifiActivity Printer = null;


    @Override
    public String getName() {
        return "RNTSCPrinter";
    }

    @ReactMethod
    public void openport(ReadableMap params, Promise promise) {
        if (Printer == null) {
	        Printer = new TscWifiActivity();
        }
        String ip = params.getString("ip");
        Integer port = params.getInt("port");
        Printer.openport(ip,port);
        promise.resolve(true);
    }

    @ReactMethod
    public void closeport(Integer delay, Promise promise) {
        Printer.closeport(delay);
        promise.resolve(true);
    }

    @ReactMethod
    public void sendcommand(String command, Promise promise) {
        Printer.sendcommand(command);
        promise.resolve(true);
    }

    @ReactMethod
    public void clearbuffer(Promise promise) {
        Printer.clearbuffer();
        promise.resolve(true);
    }

    @ReactMethod
    public void printlabel(ReadableMap params, Promise promise) {
        Integer sets = params.getInt("sets");
        Integer copies = params.getInt("copies");
        Printer.printlabel(sets, copies);
        promise.resolve(true);
    }

    @ReactMethod
    public void downloadbmp(String fileName, Promise promise) {
        Printer.downloadbmp(fileName);
        promise.resolve(true);
    }

    @ReactMethod
    public void downloadttf(String fileName, Promise promise) {
        Printer.downloadttf(fileName);
        promise.resolve(true);
    }
    
    @ReactMethod
    public void downloadpcx(String fileName, Promise promise) {
        Printer.downloadpcx(fileName);
        promise.resolve(true);
    }

    @ReactMethod
    public void sendfile(String fileName, Promise promise) {
        Printer.sendfile(fileName);
        promise.resolve(true);
    }

    @ReactMethod
    public void formfeed(Promise promise) {
        Printer.formfeed();
        promise.resolve(true);
    }

    @ReactMethod
    public void nobackfeed(Promise promise) {
        Printer.nobackfeed();
        promise.resolve(true);
    }

    @ReactMethod
    public void printerstatus(Integer timeout, Promise promise) {
        promise.resolve(
            Printer.printerstatus(timeout)
        );
    }

    @ReactMethod
    public void printerfont(ReadableMap params, Promise promise) {
        Integer a = params.getInt("x");
        Integer b = params.getInt("y");
        String c = params.getString("font");
        Integer d = params.getInt("rotation");
        Integer e = params.getInt("zoomX");
        Integer f = params.getInt("zoomY");
        String g = params.getString("text");

        Printer.printerfont(a,b,c,d,e,f,g);
        promise.resolve(true);
    }

    @ReactMethod
    public void barcode(ReadableMap params, Promise promise) {
        Integer a = params.getInt("x");
        Integer b = params.getInt("y");
        String c = params.getString("type");
        Integer d = params.getInt("height");
        Integer e = params.getBoolean("printText") ? 1 : 0;
        Integer f = params.getInt("rotation");
        Integer g = params.getInt("narrow");
        Integer h = params.getInt("wide");
        String i = params.getString("code");
        Printer.barcode(a,b,c,d,e,f,g,h,i);
        promise.resolve(true);
    }
}