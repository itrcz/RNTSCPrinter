
package com.rnmera;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.JavaScriptModule;

import org.apache.commons.net.telnet.TelnetClient;

public class RNMeraPackage implements ReactPackage {

    private TelnetConnection client;

    private OutputStream outstream;
    private TelnetClient rawConnection;
    private InputStream instream;


    public TelnetClient(String ip, int port) throws IOException {
        client = new TelnetConnection(ip, port);
        client.connect();
        rawConnection = client.getConnection();
        outstream = client.getOutput();
        instream = client.getReader();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
      return Arrays.<NativeModule>asList(new RNMeraModule());
    }

    // Deprecated from RN 0.47
    public List<Class<? extends JavaScriptModule>> createJSModules() {
      return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
      return Collections.emptyList();
    }
}